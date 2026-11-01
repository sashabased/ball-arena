// Главная точка входа: обработка ввода, ресайз и игровой цикл
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const container = document.getElementById('app-container');
    const game = new Game(canvas);
    window.game = game;

    // Подгонка размера холста под контейнер
    function handleResize() {
        const rect = canvas.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
            game.resize(rect.width, rect.height);
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    // Мышь и Сенсорный ввод
    function getPointerPos(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    // Touch события
    canvas.addEventListener('touchstart', (e) => {
        sounds.init();
        const pos = getPointerPos(e);
        game.onPointerDown(pos.x, pos.y);
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
        if (!game.isAiming) return;
        const pos = getPointerPos(e);
        game.onPointerMove(pos.x, pos.y);
    }, { passive: false });

    window.addEventListener('touchend', () => {
        if (!game.isAiming) return;
        game.onPointerUp();
    });

    // Mouse события
    canvas.addEventListener('mousedown', (e) => {
        sounds.init();
        const pos = getPointerPos(e);
        game.onPointerDown(pos.x, pos.y);
    });

    window.addEventListener('mousemove', (e) => {
        if (!game.isAiming) return;
        const pos = getPointerPos(e);
        game.onPointerMove(pos.x, pos.y);
    });

    window.addEventListener('mouseup', () => {
        if (!game.isAiming) return;
        game.onPointerUp();
    });

    // Главный игровой цикл (60 FPS)
    let lastTime = performance.now();

    // Превью шар для главного меню (Огненный шар или выбранный в колоде)
    const heroCanvas = document.getElementById('heroCanvas');
    const heroCtx = heroCanvas ? heroCanvas.getContext('2d') : null;
    let heroPreviewBall = new BattleBall(BALL_CATALOG[0], true);
    heroPreviewBall.isUIPreview = true;
    heroPreviewBall.krakenTentaclesActive = false;
    if (heroCanvas) {
        heroPreviewBall.pos.set(heroCanvas.width / 2, heroCanvas.height / 2);
        heroPreviewBall.radius = 42;
    }

    function gameLoop(now) {
        let dt = (now - lastTime) / 1000;
        lastTime = now;

        if (dt > 0.1) dt = 0.1;

        if (game.state === 'MENU') {
            if (heroCtx && heroCanvas) {
                heroCtx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
                const leadBallId = (game.playerDeckIds && game.playerDeckIds[0]) || 'blaze';
                if (!heroPreviewBall || heroPreviewBall.id !== leadBallId) {
                    const leadTemplate = BALL_CATALOG.find(b => b.id === leadBallId) || BALL_CATALOG[0];
                    heroPreviewBall = new BattleBall(leadTemplate, true);
                    heroPreviewBall.isUIPreview = true;
                    heroPreviewBall.krakenTentaclesActive = false;
                    heroPreviewBall.pos.set(heroCanvas.width / 2, heroCanvas.height / 2);
                    heroPreviewBall.radius = 42;
                }
                heroPreviewBall.animTime += dt;
                heroPreviewBall.draw(heroCtx);
            }
        } else if (game.state !== 'CHESTS') {
            game.update(dt);
            game.draw();
        }

        requestAnimationFrame(gameLoop);
    }

    requestAnimationFrame(gameLoop);
});
