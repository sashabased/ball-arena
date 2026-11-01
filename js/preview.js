// =============================================================================
// BALL ABILITY LIVE PREVIEW MANAGER (3.0-СЕКУНДНОЕ LIVE ДЕМО ВСЕХ 28 ШАРОВ ПО ТЗ)
// =============================================================================

class AbilityPreviewManager {
    constructor(canvas, statusEl, replayBtn) {
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
        this.statusEl = statusEl;
        this.replayBtn = replayBtn;

        this.particles = new ParticleSystem();
        this.ball = null;
        this.dummy = null;
        this.currentBallId = null;

        this.isRunning = false;
        this.animFrameId = null;
        this.lastTime = 0;
        this.cycleTime = 0;

        this.hasHitEnemy = false;
        this.hasTriggeredWall = false;
        this.hasTriggeredAbility = false;

        // Фиксированные границы мини-арены (340 x 140)
        this.arena = {
            left: 12,
            right: 328,
            top: 12,
            bottom: 128,
            width: 316,
            height: 116
        };

        if (this.replayBtn) {
            this.replayBtn.addEventListener('click', (e) => {
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                this.restart();
            });
        }
    }

    setStatus(text, color = '#e2e8f0') {
        if (this.statusEl) {
            this.statusEl.textContent = text;
            this.statusEl.style.color = color;
        }
    }

    start(ballId) {
        if (!ballId || !this.canvas || !this.ctx) return;
        this.currentBallId = ballId;
        this.isRunning = true;
        this.lastTime = performance.now();
        this.resetScenario();

        if (this.animFrameId) {
            cancelAnimationFrame(this.animFrameId);
            this.animFrameId = null;
        }
        this.loop(this.lastTime);
    }

    stop() {
        this.isRunning = false;
        if (this.animFrameId) {
            cancelAnimationFrame(this.animFrameId);
            this.animFrameId = null;
        }
    }

    restart() {
        if (!this.currentBallId) return;
        this.start(this.currentBallId);
    }

    resetScenario() {
        this.cycleTime = 0;
        this.hasHitEnemy = false;
        this.hasTriggeredWall = false;
        this.hasTriggeredAbility = false;
        this.particles = new ParticleSystem();

        const template = BALL_CATALOG.find(b => b.id === this.currentBallId) || BALL_CATALOG[0];

        // 1. Создаем тренировочный боевой манекен (наносит тестовый урон 7 HP)
        const dummyTemplate = {
            id: 'dummy',
            name: 'Манекен',
            rarity: 'COMMON',
            maxHp: 100,
            baseDamage: 7,
            speed: 0,
            mass: 1.5,
            radius: 23,
            abilityName: 'Удар манекена',
            abilityDesc: 'Тренировочный манекен с боевым уроном',
            triggerType: 'passive'
        };

        this.dummy = new BattleBall(dummyTemplate, false);
        this.dummy.pos.set(245, 70);
        this.dummy.vel.set(0, 0);
        this.dummy.hp = 100;

        // 2. Создаем тестируемый боевой шар (радиус 24 для масштаба мини-арены)
        this.ball = new BattleBall(template, true);
        this.ball.radius = 24;

        const id = template.id;

        // Детерминированные сценарии на 3 секунды по разделу 3 ТЗ:
        if (id === 'spike') {
            this.ball.pos.set(90, 70);
            this.ball.vel.set(0.6, 0);
            this.dummy.pos.set(230, 70);
            this.dummy.vel.set(-3.2, 0);
            this.setStatus('⚔️ Шип («Колючий ответ»): Манекен наносит встречный таран...', '#f1f5f9');
        } else if (id === 'clockwork') {
            this.ball.pos.set(40, 95);
            this.ball.vel.set(3.6, -2.8);
            this.ball.clockworkCycleTimer = 5.0; // сразу в режиме ускорения (+50% скор) с циферблатом!
            this.ball.gearCharges = 2; // две шестеренки уже готовы
            this.dummy.pos.set(245, 70);
            this.setStatus('⚙️ Часовщик: Полупрозрачный циферблат ускорения (+50% скор) и шестерни от рикошетов...', '#f59e0b');
        } else if (id === 'cyber') {
            this.ball.pos.set(40, 70);
            this.ball.vel.set(2.6, 0);
            this.ball.quickTimer = 1.9; // Сработает на 0.4с цикла
            this.dummy.pos.set(240, 70);
            this.setStatus('⚡ Неон-Кибер («Пиксельный рывок»): Запуск 2.3с цикла ускорения...', '#38bdf8');
        } else if (id === 'saw') {
            this.ball.pos.set(40, 70);
            this.ball.vel.set(3.4, 0);
            this.ball.sawAuraActive = true; // багровая аура вращающейся пилы готова!
            this.dummy.pos.set(240, 70);
            this.setStatus('🩸 Мясник: Багровая аура пилы -> гарантированное кровотечение при таране...', '#ef4444');
        } else if (id === 'blaze') {
            this.ball.pos.set(40, 70);
            this.ball.vel.set(3.4, 0);
            this.dummy.pos.set(240, 70);
            this.setStatus('🔥 Огненный («Прижигание»): Огненные искры и периодический урон...', '#f97316');
        } else if (id === 'frosty') {
            this.ball.pos.set(40, 70);
            this.ball.vel.set(3.2, 0);
            this.dummy.pos.set(240, 70);
            this.setStatus('❄️ Мороз («Ледяная корка»): +5 урона и замедление на 35% (без стана!)...', '#38bdf8');
        } else if (id === 'vampire') {
            this.ball.pos.set(40, 70);
            this.ball.vel.set(3.4, 0);
            this.ball.hp = 88;
            this.dummy.pos.set(240, 70);
            this.setStatus('🦇 Вампир («Жизненная лента»): -6 HP манекену, +4 HP исцеление себе...', '#c084fc');
        } else if (id === 'toxic') {
            this.ball.pos.set(40, 70);
            this.ball.vel.set(3.4, 0);
            this.ball.toxicPuddleTimer = 2.85; // через 0.15с оставляет ядовитую лужу на 5 сек!
            this.dummy.pos.set(240, 70);
            this.setStatus('☣️ Токсик: Оставляет ядовитые лужи на полу арены (5 сек, тики по -2 HP)...', '#84cc16');
        } else if (id === 'magnet') {
            this.ball.pos.set(40, 95);
            this.ball.vel.set(3.6, -2.8);
            this.ball.bounceCount = 1; // следующий отскок сразу запускает мощную электромагнитную стяжку!
            this.dummy.pos.set(220, 70);
            this.dummy.vel.set(-1.0, 0);
            this.setStatus('🧲 Магнит: Полюсная стяжка на 260px мощно притягивает врага (-5 HP)...', '#38bdf8');
        } else if (id === 'ninja') {
            this.ball.pos.set(40, 95);
            this.ball.vel.set(3.6, -2.8);
            this.dummy.pos.set(240, 70);
            this.setStatus('⭐ Сюрикен («Золотой срез»): 2 отскока дают срез (+6 урона и 0.45с СТАН!)...', '#facc15');
        } else if (id === 'cyborg') {
            this.ball.pos.set(90, 70);
            this.ball.vel.set(0.6, 0);
            this.ball.cyborgAccum = 10;
            this.ball.cyborgShieldActive = true;
            this.dummy.pos.set(230, 70);
            this.dummy.vel.set(-3.2, 0);
            this.setStatus('🤖 Киборг («Сегментная броня»): Бронепластина поглощает 40% урона...', '#22d3ee');
        } else if (id === 'sand') {
            this.ball.pos.set(40, 95);
            this.ball.vel.set(3.6, -2.8);
            this.dummy.pos.set(215, 70);
            this.setStatus('🏜️ Скарабей («Песчаная осыпь»): 2 отскока -> волна песка (-5 HP, -20% скор)...', '#eab308');
        } else if (id === 'wisp') {
            this.ball.pos.set(90, 70);
            this.ball.vel.set(0.6, 0);
            this.ball.hp = 36;
            this.ball.wispDodgeActive = true;
            this.ball.wispDodgeTimer = 2.0;
            this.dummy.pos.set(230, 70);
            this.dummy.vel.set(-3.2, 0);
            this.setStatus('✨ Светляк («Форма мотылька»): HP <= 40%! Эфирные крылья (-55% урона, +35% скор) и хил +2 HP...', '#2dd4bf');
        } else if (id === 'titan') {
            this.ball.pos.set(90, 70);
            this.ball.vel.set(0.6, 0);
            this.ball.titanAccum = 8;
            this.dummy.pos.set(230, 70);
            this.dummy.vel.set(-3.2, 0);
            this.setStatus('🛡️ Титан («Сейсмический отпор»): Накопление 12 урона вызывает сейсмо-волну (-8 HP)...', '#94a3b8');
        } else if (id === 'boomer') {
            this.ball.pos.set(60, 70);
            this.ball.vel.set(2.5, 0);
            this.ball.boomerBombTimer = 2.35; // через 0.15с оставляет мину (взрыв через 2с на 15 урона)!
            this.dummy.pos.set(220, 70);
            this.dummy.vel.set(-1.8, 0);
            this.setStatus('💣 Подрывник («Часовая мина»): Каждые 5с оставляет мину (3с, пульсирует и краснеет) -> колоссальный взрыв (-14 HP)!', '#f97316');
        } else if (id === 'mirage') {
            this.ball.pos.set(40, 95);
            this.ball.vel.set(3.4, -2.6);
            this.dummy.pos.set(240, 70);
            this.setStatus('👥 Мираж («Ложный угол»): Рикошет смещает курс на 12° и дает +5 к таscore...', '#06b6d4');
        } else if (id === 'laser') {
            this.ball.pos.set(40, 95);
            this.ball.vel.set(3.5, -2.8);
            this.dummy.pos.set(240, 70);
            this.setStatus('⚡ Протон («Фотонный пробой»): 2 отскока -> сквозной неоновый луч (-8 HP)...', '#06b6d4');
        } else if (id === 'meteor') {
            this.ball.pos.set(40, 70);
            this.ball.vel.set(3.2, 0);
            this.ball.meteorHeatTimer = 2.85; // через 0.15с разогревается и вспыхивает кометой!
            this.ball.meteorBlazing = false;
            this.dummy.pos.set(230, 70);
            this.dummy.vel.set(-1.0, 0);
            this.setStatus('☄️ Метеор («Кометный разгон»): Разогрев -> превращение в комету (+40% скор), таран (+7 урона) и остывание...', '#fbbf24');
        } else if (id === 'storm') {
            this.ball.pos.set(40, 95);
            this.ball.vel.set(3.5, -2.8);
            this.ball.stormBounceCount = 3; // следующий отскок сразу активирует торнадо!
            this.dummy.pos.set(220, 70);
            this.setStatus('🌪️ Тайфун («Циклонный вихрь»): Блуждающий смерч умеренно затягивает врага (тики по -2 HP)...', '#38bdf8');
        } else if (id === 'crystal') {
            this.ball.pos.set(40, 95);
            this.ball.vel.set(3.6, -2.8);
            this.ball.crystalBounceCount = 2; // следующий отскок сразу выращивает кристаллический шпиль!
            this.dummy.pos.set(230, 70);
            this.dummy.vel.set(-1.0, 0);
            this.setStatus('💎 Алмаз: Выращивает кристаллический шпиль на арене (урон, щит 5 HP, взрыв на осколки)...', '#e0e7ff');
        } else if (id === 'tesla') {
            this.ball.pos.set(40, 70);
            this.ball.vel.set(3.4, 0);
            this.dummy.pos.set(240, 70);
            this.setStatus('⚡ Тесла («Дуговой разряд»): Боковые дуги наносят 8 урона и -20% скорости...', '#38bdf8');
        } else if (id === 'phantom') {
            this.ball.pos.set(40, 70);
            this.ball.vel.set(2.8, 0);
            this.ball.quickTimer = 1.8;
            this.dummy.pos.set(240, 70);
            this.setStatus('👻 Фантом («Спектральное эхо»): Таран оставляет эхо-удар через 0.18 сек (-5 HP)...', '#818cf8');
        } else if (id === 'dragon') {
            this.ball.pos.set(40, 70);
            this.ball.vel.set(3.2, 0);
            this.dummy.pos.set(240, 70);
            this.setStatus('🐉 Дракон («Пламенный выдох»): 65° конус огня (-8 прямого + горение)...', '#f97316');
        } else if (id === 'solar') {
            this.ball.pos.set(70, 70);
            this.ball.vel.set(1.4, 0);
            this.ball.hp = 92;
            this.ball.quickTimer = 2.0;
            this.dummy.pos.set(215, 70);
            this.setStatus('☀️ Гелиос («Солнечная корона»): Круговой импульс (-6 HP врагу, +3 HP себе)...', '#facc15');
        } else if (id === 'kraken') {
            this.ball.pos.set(40, 95);
            this.ball.vel.set(3.5, -2.8);
            this.ball.krakenTentaclesActive = true; // в превью активны для демонстрации
            this.dummy.pos.set(215, 70);
            this.setStatus('🐙 Кракен («Хватка бездны»): Щупальца бездны захватывают манекен (-7 HP, уязвимость +50%)...', '#a855f7');
        } else if (id === 'vortex') {
            this.ball.pos.set(40, 95);
            this.ball.vel.set(3.5, -2.8);
            this.dummy.pos.set(210, 70);
            this.setStatus('🌌 Сингулярность («Грави-линза»): Искривление пространства (3 тика по -3 HP)...', '#c084fc');
        } else if (id === 'nuke') {
            this.ball.pos.set(40, 70);
            this.ball.vel.set(3.4, 0);
            this.ball.isotopeCharges = 2; // Уже 2 изотопа, этот таран будет 3-м!
            this.dummy.pos.set(240, 70);
            this.setStatus('☢️ Атом («Критическая масса»): 3-й таран детонирует импульс (-11 HP, отдача -2)...', '#f43f5e');
        } else if (id === 'zeus') {
            this.ball.pos.set(40, 70);
            this.ball.vel.set(3.4, 0);
            this.ball.zeusHitCount = 1; // Уже 1 удар, этот таран будет 2-м!
            this.dummy.pos.set(240, 70);
            this.setStatus('⚡ Зевс («Карающий гром»): Каждый 2-й удар вызывает вертикальную молнию (-11 HP)...', '#facc15');
        } else if (id === 'berserk') {
            this.ball.pos.set(60, 70);
            this.ball.vel.set(3.8, 0);
            this.ball.hp = 20; // Превью Доспеха Берсерка во 2-й фазе
            this.ball.berserkSwordTimer = 1.35; // Взмах Dragon Slayer через 0.15с!
            this.dummy.pos.set(200, 70);
            this.dummy.vel.set(-1.0, 0);
            this.setStatus('⚔️ Берсерк (Доспех Берсерка): +110% скорости, макс. 1 урона, алые шлейфы глаз и Dragon Slayer (10 урона)!', '#ff0055');
        }
    }

    loop(timestamp) {
        if (!this.isRunning) return;

        const dt = Math.min((timestamp - this.lastTime) / 1000, 0.05);
        this.lastTime = timestamp;

        try {
            this.update(dt);
            this.draw();
        } catch (err) {
            console.error('Preview loop error:', err);
        }

        this.animFrameId = requestAnimationFrame((t) => this.loop(t));
    }

    update(dt) {
        this.cycleTime += dt;

        // 1. Частицы
        this.particles.update(dt, this.arena, [this.ball, this.dummy]);

        if (!this.ball || !this.dummy) return;

        // 2. Движение и обновление логики шаров
        this.ball.update(dt, this.dummy, this.particles);
        this.dummy.update(dt, this.ball, this.particles);

        this.dummy.vel.scale(0.92);

        // Не даем манекену погибнуть в превью
        if (this.dummy.hp < 15) {
            this.dummy.hp = 35;
        }

        // 3. Границы манекена
        const dr = this.dummy.radius;
        if (this.dummy.pos.x + dr > this.arena.right) {
            this.dummy.pos.x = this.arena.right - dr;
            this.dummy.vel.x *= -0.4;
        }
        if (this.dummy.pos.x - dr < this.arena.left + 50) {
            this.dummy.pos.x = this.arena.left + 50 + dr;
            this.dummy.vel.x *= -0.4;
        }
        if (this.dummy.pos.y - dr < this.arena.top) {
            this.dummy.pos.y = this.arena.top + dr;
            this.dummy.vel.y *= -0.4;
        }
        if (this.dummy.pos.y + dr > this.arena.bottom) {
            this.dummy.pos.y = this.arena.bottom - dr;
            this.dummy.vel.y *= -0.4;
        }

        // 4. Рикошеты тестируемого шара от бортов
        const br = this.ball.radius;
        if (this.ball.pos.x - br < this.arena.left) {
            this.ball.pos.x = this.arena.left + br;
            this.ball.vel.x = Math.abs(this.ball.vel.x);
            this.onBallWallBounce('left');
        }
        if (this.ball.pos.x + br > this.arena.right) {
            this.ball.pos.x = this.arena.right - br;
            this.ball.vel.x = -Math.abs(this.ball.vel.x);
            this.onBallWallBounce('right');
        }
        if (this.ball.pos.y - br < this.arena.top) {
            this.ball.pos.y = this.arena.top + br;
            this.ball.vel.y = Math.abs(this.ball.vel.y);
            this.onBallWallBounce('top');
        }
        if (this.ball.pos.y + br > this.arena.bottom) {
            this.ball.pos.y = this.arena.bottom - br;
            this.ball.vel.y = -Math.abs(this.ball.vel.y);
            this.onBallWallBounce('bottom');
        }

        // 5. Физическое столкновение тестируемого шара с манекеном
        const dx = this.dummy.pos.x - this.ball.pos.x;
        const dy = this.dummy.pos.y - this.ball.pos.y;
        const dist = Math.hypot(dx, dy);
        const minDist = this.ball.radius + this.dummy.radius;

        if (dist < minDist && dist > 0.0001) {
            const nx = dx / dist;
            const ny = dy / dist;

            const overlap = minDist - dist + 2.5;
            this.ball.pos.x -= nx * overlap * 0.55;
            this.ball.pos.y -= ny * overlap * 0.55;
            this.dummy.pos.x += nx * overlap * 0.55;
            this.dummy.pos.y += ny * overlap * 0.55;

            const dvx = this.ball.vel.x - this.dummy.vel.x;
            const dvy = this.ball.vel.y - this.dummy.vel.y;
            const velAlongNormal = dvx * nx + dvy * ny;

            if (velAlongNormal > 0) {
                const restitution = 0.82;
                const impulse = (1 + restitution) * velAlongNormal / (1 / this.ball.mass + 1 / this.dummy.mass);
                this.ball.vel.x -= (impulse / this.ball.mass) * nx;
                this.ball.vel.y -= (impulse / this.ball.mass) * ny;
                this.dummy.vel.x += (impulse / this.dummy.mass) * nx * 1.3;
                this.dummy.vel.y += (impulse / this.dummy.mass) * ny * 1.3;
            } else {
                this.ball.vel.x = -nx * 2.8;
                this.ball.vel.y = -ny * 2.8;
                this.dummy.vel.x = nx * 3.4;
                this.dummy.vel.y = ny * 3.4;
            }

            if (!this.hasHitEnemy) {
                this.hasHitEnemy = true;
                const hitPos = {
                    x: this.ball.pos.x + nx * this.ball.radius,
                    y: this.ball.pos.y + ny * this.ball.radius
                };

                // 1. Форсируем гарантированное срабатывание вероятностных способностей в Live Preview (п. 2.6 ТЗ)
                this.forcePreviewProc();

                // 2. Наш шар наносит урон и вызывает способность
                this.ball.onHitEnemy(this.dummy, this.ball.baseDamage, hitPos, this.particles);

                // 3. Встречный проверочный урон от манекена (7 HP)
                const dummyDmg = 7;
                this.ball.takeDamage(dummyDmg, this.particles, false, this.dummy);

                // 4. Обновление статусной строки
                this.onAbilityHitTriggered();
            }
        }

        // 6. Ровно 3.0 секунды на цикл (п. 2.6 ТЗ)
        if (this.cycleTime >= 3.0) {
            this.resetScenario();
        }
    }

    forcePreviewProc() {
        const id = this.ball.id;
        // Гарантируем 100% срабатывание в Live Preview, чтобы пользователь сразу видел способность
        if (id === 'saw') this.ball.sawCooldown = 0;
        if (id === 'blaze') this.ball.blazeCooldown = 0;
        if (id === 'frosty') this.ball.frostyCooldown = 0;
        if (id === 'vampire') this.ball.vampireCooldown = 0;
        if (id === 'toxic') this.ball.toxicCooldown = 0;
        if (id === 'boomer') this.ball.boomerCooldown = 0;
        if (id === 'tesla') this.ball.teslaCooldown = 0;
        if (id === 'spike') this.ball.spikeCooldown = 0;
    }

    onBallWallBounce(side) {
        if (!this.ball || !this.dummy) return;
        // Если для Тайфуна уже есть активный смерч, не позволяем спавнить повторный в Live Preview
        if (this.ball.id === 'storm' && this.particles.tornadoes && this.particles.tornadoes.length > 0) {
            this.ball.stormBounceCount = 0;
        }

        this.ball.onWallHit(side, this.dummy, this.particles);

        if (this.ball.id === 'storm' && this.hasTriggeredWall) {
            this.ball.stormBounceCount = 0;
        }

        if (!this.hasTriggeredWall) {
            this.hasTriggeredWall = true;
            const id = this.ball.id;
            if (id === 'clockwork') {
                this.setStatus('⚙️ Часовщик: Получен шестеренчатый заряд (след. удар +5/+8 урона)!', '#f59e0b');
            } else if (id === 'ninja') {
                this.setStatus('⭐ Сюрикен: Клинок заряжен на 0.45 сек ОГЛУШЕНИЕ!', '#facc15');
            } else if (id === 'laser') {
                this.setStatus('⚡ Протон: Фотонный пробой пронзает арену (-8 HP)!', '#06b6d4');
            } else if (id === 'meteor') {
                this.setStatus('☄️ Метеор: Метеоритный залп активирован!', '#fbbf24');
            } else if (id === 'storm') {
                this.setStatus('🌪️ Тайфун: Циклонный вихрь развернут (4 тика по -2 HP)!', '#38bdf8');
            } else if (id === 'sand') {
                this.setStatus('🏜️ Скарабей: Песчаная осыпь накрывает манекен (-5 HP, -20% скор)!', '#eab308');
            } else if (id === 'magnet') {
                this.setStatus('🧲 Магнит: Полюсная стяжка притягивает манекен (-5 HP)!', '#38bdf8');
            } else if (id === 'kraken') {
                this.setStatus('🐙 Кракен: Щупальца бездны захватывают манекен (-7 HP)!', '#a855f7');
            } else if (id === 'vortex') {
                this.setStatus('🌌 Сингулярность: Гравитационная линза стягивает к центру (3 тика по -3 HP)!', '#c084fc');
            } else if (id === 'mirage') {
                this.setStatus('👥 Мираж: Ложный угол отклоняет курс на 12° (+5 урона к удару)!', '#06b6d4');
            }
        }
    }

    onAbilityHitTriggered() {
        const id = this.ball.id;
        if (id === 'spike') {
            this.setStatus('⚔️ Шип («Колючий ответ»): Контрудар шипами нанес 5 урона манекену!', '#f1f5f9');
        } else if (id === 'clockwork') {
            this.setStatus('⚙️ Часовщик («Зубчатый разгон»): Заряды израсходованы (+8 к тарану)!', '#f59e0b');
        } else if (id === 'cyber') {
            this.setStatus('⚡ Неон-Кибер («Пиксельный рывок»): Глитч-таран +5 урона, распад пикселей!', '#38bdf8');
        } else if (id === 'saw') {
            this.setStatus('🩸 Мясник («Рваная кромка»): Наложено кровотечение (-2 HP каждые 0.4с)!', '#ef4444');
        } else if (id === 'blaze') {
            this.setStatus('🔥 Огненный («Прижигание»): Наложено горение (-2 HP каждые 0.4с)!', '#f97316');
        } else if (id === 'frosty') {
            this.setStatus('❄️ Мороз («Ледяная корка»): +5 урона и замедление на 35% на 0.75с (без стана)!', '#38bdf8');
        } else if (id === 'vampire') {
            this.setStatus('🦇 Вампир («Жизненная лента»): -6 HP манекену, восстановлено +4 HP!', '#c084fc');
        } else if (id === 'toxic') {
            this.setStatus('☣️ Токсик («Едкая пена»): Ядовитая пена наносит 3 тика по -2 HP!', '#84cc16');
        } else if (id === 'ninja') {
            this.setStatus('⭐ Сюрикен («Золотой срез»): +6 урона и ОГЛУШЕНИЕ на 0.45с (вращающиеся звезды)!', '#facc15');
        } else if (id === 'cyborg') {
            this.setStatus('🤖 Киборг («Сегментная броня»): Бронепластина заблокировала 40% урона!', '#22d3ee');
        } else if (id === 'wisp') {
            this.setStatus('✨ Светляк («Мерцание»): Окно уклонения снизило входящий урон на 55%!', '#2dd4bf');
        } else if (id === 'titan') {
            this.setStatus('🛡️ Титан («Сейсмический отпор»): Сейсмо-волна отбросила манекен (-8 HP)!', '#94a3b8');
        } else if (id === 'boomer') {
            this.setStatus('💣 Подрывник («Часовая мина»): Фугасная мина детонирует на 14 урона по площади!', '#f97316');
        } else if (id === 'crystal') {
            this.setStatus('💎 Алмаз: Выращен кристаллический шпиль на арене!', '#e0e7ff');
        } else if (id === 'tesla') {
            this.setStatus('⚡ Тесла («Дуговой разряд»): Боковые дуги поразили манекен (-8 HP, -20% скор)!', '#38bdf8');
        } else if (id === 'phantom') {
            this.setStatus('👻 Фантом («Спектральное эхо»): Эхо-копия повторит удар через 0.18с (-5 HP)!', '#818cf8');
        } else if (id === 'dragon') {
            this.setStatus('🐉 Дракон («Пламенный выдох»): 65° пламенный выдох нанес 8 урона + горение!', '#f97316');
        } else if (id === 'nuke') {
            this.setStatus('☢️ Атом («Критическая масса»): Термоядерный импульс -11 HP + радиация (отдача -2)!', '#f43f5e');
        } else if (id === 'zeus') {
            this.setStatus('⚡ Зевс («Карающий гром»): Вертикальная молния обрушилась сверху (-11 HP)!', '#facc15');
        } else if (id === 'berserk') {
            this.setStatus('⚔️ Берсерк: Сокрушительный взмах Убийцы Драконов (-10 HP)!', '#ff0055');
        }
    }

    draw() {
        const ctx = this.ctx;
        if (!ctx) return;

        const w = this.canvas.width;
        const h = this.canvas.height;

        ctx.clearRect(0, 0, w, h);
        ctx.save();

        const shake = this.particles.screenShakeIntensity || 0;
        if (shake > 0) {
            const ox = (Math.random() - 0.5) * shake * 0.7;
            const oy = (Math.random() - 0.5) * shake * 0.7;
            ctx.translate(ox, oy);
        }

        // 1. Фон мини-арены (Dark luxury)
        const bgGrad = ctx.createLinearGradient(0, 0, w, h);
        bgGrad.addColorStop(0, '#08080d');
        bgGrad.addColorStop(1, '#0e0e16');
        ctx.fillStyle = bgGrad;
        this.fillRoundRect(ctx, this.arena.left, this.arena.top, this.arena.width, this.arena.height, 10);

        // Сетка арены
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.lineWidth = 1;
        for (let x = this.arena.left + 24; x < this.arena.right; x += 24) {
            ctx.beginPath();
            ctx.moveTo(x, this.arena.top);
            ctx.lineTo(x, this.arena.bottom);
            ctx.stroke();
        }
        for (let y = this.arena.top + 20; y < this.arena.bottom; y += 20) {
            ctx.beginPath();
            ctx.moveTo(this.arena.left, y);
            ctx.lineTo(this.arena.right, y);
            ctx.stroke();
        }

        // Центральная зона
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(170, 70, 32, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        // Борта арены
        ctx.strokeStyle = '#232334';
        ctx.lineWidth = 1.5;
        this.strokeRoundRect(ctx, this.arena.left, this.arena.top, this.arena.width, this.arena.height, 10);

        // Траектория прицела перед запуском (первые 0.35 сек)
        if (this.cycleTime < 0.35 && this.ball) {
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([3, 4]);
            ctx.beginPath();
            ctx.moveTo(this.ball.pos.x, this.ball.pos.y);
            ctx.lineTo(this.ball.pos.x + this.ball.vel.x * 12, this.ball.pos.y + this.ball.vel.y * 12);
            ctx.stroke();
            ctx.setLineDash([]);
        }

        // 2. Отрисовка манекена
        if (this.dummy) {
            this.dummy.draw(ctx);

            // Полоска здоровья манекена
            const dw = 42;
            const dh = 4;
            const dx = this.dummy.pos.x - dw / 2;
            const dy = this.dummy.pos.y - this.dummy.radius - 12;

            ctx.fillStyle = '#14141e';
            ctx.fillRect(dx, dy, dw, dh);

            const hpRatio = Math.max(0, this.dummy.hp) / this.dummy.maxHp;
            ctx.fillStyle = (hpRatio > 0.5) ? '#22c55e' : (hpRatio > 0.25 ? '#eab308' : '#ef4444');
            ctx.fillRect(dx, dy, dw * hpRatio, dh);

            ctx.strokeStyle = '#2b2b3d';
            ctx.lineWidth = 0.8;
            ctx.strokeRect(dx, dy, dw, dh);

            ctx.font = '800 8px sans-serif';
            ctx.fillStyle = '#f87171';
            ctx.textAlign = 'center';
            ctx.fillText(`${Math.max(0, Math.round(this.dummy.hp))} HP`, this.dummy.pos.x, dy - 2);
        }

        // 3. Отрисовка тестируемого шара и полоски HP
        if (this.ball) {
            this.ball.draw(ctx);

            const bw = 42;
            const bh = 4;
            const bx = this.ball.pos.x - bw / 2;
            const by = this.ball.pos.y - this.ball.radius - 12;

            ctx.fillStyle = '#14141e';
            ctx.fillRect(bx, by, bw, bh);

            const ballHpRatio = Math.max(0, this.ball.hp) / this.ball.maxHp;
            ctx.fillStyle = (ballHpRatio > 0.5) ? '#38bdf8' : (ballHpRatio > 0.25 ? '#eab308' : '#ef4444');
            ctx.fillRect(bx, by, bw * ballHpRatio, bh);

            ctx.strokeStyle = '#2b2b3d';
            ctx.lineWidth = 0.8;
            ctx.strokeRect(bx, by, bw, bh);

            ctx.font = '800 8px sans-serif';
            ctx.fillStyle = '#38bdf8';
            ctx.textAlign = 'center';
            ctx.fillText(`${Math.max(0, Math.round(this.ball.hp))} HP`, this.ball.pos.x, by - 2);
        }

        // 4. Отрисовка частиц, лазеров, молний, вортеков и всплывающих цифр
        this.particles.draw(ctx);

        ctx.restore();
    }

    fillRoundRect(ctx, x, y, w, h, r) {
        if (ctx.roundRect) {
            ctx.beginPath();
            ctx.roundRect(x, y, w, h, r);
            ctx.fill();
        } else {
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.lineTo(x + w - r, y);
            ctx.quadraticCurveTo(x + w, y, x + w, y + r);
            ctx.lineTo(x + w, y + h - r);
            ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
            ctx.lineTo(x + r, y + h);
            ctx.quadraticCurveTo(x, y + h, x, y + h - r);
            ctx.lineTo(x, y + r);
            ctx.quadraticCurveTo(x, y, x + r, y);
            ctx.closePath();
            ctx.fill();
        }
    }

    strokeRoundRect(ctx, x, y, w, h, r) {
        if (ctx.roundRect) {
            ctx.beginPath();
            ctx.roundRect(x, y, w, h, r);
            ctx.stroke();
        } else {
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.lineTo(x + w - r, y);
            ctx.quadraticCurveTo(x + w, y, x + w, y + r);
            ctx.lineTo(x + w, y + h - r);
            ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
            ctx.lineTo(x + r, y + h);
            ctx.quadraticCurveTo(x, y + h, x, y + h - r);
            ctx.lineTo(x, y + r);
            ctx.quadraticCurveTo(x, y, x + r, y);
            ctx.closePath();
            ctx.stroke();
        }
    }
}