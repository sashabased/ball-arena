// =============================================================================
// СИСТЕМА ЧАСТИЦ И БОЕВЫХ ЭФФЕКТОВ (VFX, УДАРНЫЕ ВОЛНЫ, ЛАЗЕРЫ, МОЛНИИ, ВИХРИ)
// =============================================================================

class ParticleSystem {
    constructor() {
        this.particles = [];
        this.floatingTexts = [];
        this.shockwaves = [];
        this.laserBeams = [];
        this.lightningBolts = [];
        this.vortexGales = [];
        this.darkSingularities = [];
        this.tentacleClusters = [];
        this.flameCones = [];
        this.energyRibbons = [];
        this.magneticFields = [];
        this.mirageLenses = [];
        this.delayedMarkers = [];
        this.spectralEchoes = [];

        // Новые боевые сущности и VFX по обновленному ТЗ:
        this.miniMeteors = [];
        this.boomerMines = [];        // Мины Подрывника (3.0 сек на арене)       // Пылающие мини-метеоры с физикой отскоков
        this.tornadoes = [];         // Блуждающие смерчи Тайфуна с физикой
        this.phantomGhosts = [];     // Летящие призраки Фантома во врага (2.0с)
        this.crystalShards = [];     // 8 синих кристаллов Алмаза
        this.spikeNeedles = [];      // 8 стальных игл Шипа во все стороны
        this.mirageDecoys = [];      // Голографические копии-ловушки Миража (2.2с)
        this.titanFissures = [];     // Сейсмические трещины арены / треск экрана
        this.solarBeams = [];        // Солнечная корона и непрерывный луч Гелиоса
        this.magmaPatches = [];      // Горящие лужи магмы Огненного
        this.glacialIcicles = [];    // Летящие крио-сосульки Мороза
        this.empBursts = [];         // ЭМИ-вспышки Неон-Кибера
        this.crystalSpires = [];     // Острые кристаллы-шпили Алмаза
        this.arenaTentacles = [];    // 2 щупальца бездны на арене (Кракен)
        this.toxicPuddles = [];      // Ядовитые лужи Токсика (3.5с на полу)
        this.blazeFireballs = [];    // Летающие фаерболы Огненного (физика отскоков, 3.0с)
        this.krakenArenaTimer = 0;   // Цикл щупалец на арене (5с активно, 5с кд)
        this.krakenArenaPhase = 'COOLDOWN';

        this.screenShakeTime = 0;
        this.screenShakeIntensity = 0;
    }

    triggerShake(intensity = 6, duration = 0.15) {
        this.screenShakeIntensity = Math.max(this.screenShakeIntensity, intensity);
        this.screenShakeTime = Math.max(this.screenShakeTime, duration);
    }

    // 1. Искры и осколки
    addSparks(x, y, color = '#ffffff', count = 10, speed = 3.5, sizeMin = 1.5, sizeMax = 3.5) {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const spd = (Math.random() * 0.7 + 0.3) * speed;
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd,
                size: Math.random() * (sizeMax - sizeMin) + sizeMin,
                color,
                alpha: 1.0,
                decay: Math.random() * 0.035 + 0.025,
                shape: 'circle'
            });
        }
    }

    // 2. Всплывающий текст урона и статусов
    addDamageText(x, y, text, color = '#ffffff', isCrit = false) {
        this.floatingTexts.push({
            x: x + (Math.random() - 0.5) * 12,
            y,
            text,
            color,
            isCrit,
            alpha: 1.0,
            scale: isCrit ? 1.35 : 1.0,
            vy: -1.3,
            life: 0.85
        });
    }

    // 3. Ударная волна (Шоквейв) - для Бомбы, Метеора, Атома
    addShockwave(x, y, color = '#ffffff', maxRadius = 75, duration = 0.35, lineWidth = 4) {
        this.shockwaves.push({
            x, y,
            radius: 5,
            maxRadius,
            color,
            duration,
            elapsed: 0,
            lineWidth
        });
    }

    // 4. Лазерный луч - для Протона (Лазер)
    addLaserBeam(x1, y1, x2, y2, color = '#f43f5e', width = 6, duration = 0.22) {
        this.laserBeams.push({
            x1, y1, x2, y2,
            color,
            width,
            duration,
            elapsed: 0
        });
        // Добавляем искры на конце луча
        this.addSparks(x2, y2, color, 8, 4);
    }

    // 5. Разряд молнии - для Зевса и Теслы
    addLightning(x1, y1, x2, y2, color = '#fde047', duration = 0.22, branches = 2) {
        // Генерируем ломаную линию молнии
        const dx = x2 - x1;
        const dy = y2 - y1;
        const dist = Math.hypot(dx, dy);
        const segments = Math.max(4, Math.floor(dist / 22));
        const points = [{ x: x1, y: y1 }];

        const perpX = -dy / dist;
        const perpY = dx / dist;

        for (let i = 1; i < segments; i++) {
            const t = i / segments;
            const jitter = (Math.random() - 0.5) * 24;
            points.push({
                x: x1 + dx * t + perpX * jitter,
                y: y1 + dy * t + perpY * jitter
            });
        }
        points.push({ x: x2, y: y2 });

        this.lightningBolts.push({
            points,
            color,
            duration,
            elapsed: 0
        });

        // Дополнительные боковые ветви
        if (branches > 0 && segments >= 4) {
            const mid = points[Math.floor(segments / 2)];
            const bPoints = [{ x: mid.x, y: mid.y }];
            for (let j = 1; j <= 2; j++) {
                bPoints.push({
                    x: mid.x + perpX * (j * 16) + (Math.random() - 0.5) * 10,
                    y: mid.y + perpY * (j * 16) + (Math.random() - 0.5) * 10
                });
            }
            this.lightningBolts.push({
                points: bPoints,
                color,
                duration: duration * 0.8,
                elapsed: 0
            });
        }
    }

    // 6. Шквальный воздушный вихрь (Тайфун / Скарабей)
    addWindVortex(x, y, targetX, targetY, color = '#e2e8f0', duration = 0.45) {
        this.vortexGales.push({
            x, y,
            targetX,
            targetY,
            color,
            duration,
            elapsed: 0,
            angle: Math.atan2(targetY - y, targetX - x)
        });
        // Шлейф воздушных искр
        for (let i = 0; i < 6; i++) {
            this.particles.push({
                x, y,
                vx: Math.cos(Math.atan2(targetY - y, targetX - x) + (Math.random() - 0.5) * 0.6) * 5,
                vy: Math.sin(Math.atan2(targetY - y, targetX - x) + (Math.random() - 0.5) * 0.6) * 5,
                size: Math.random() * 2 + 1,
                color,
                alpha: 0.9,
                decay: 0.04,
                shape: 'circle'
            });
        }
    }

    // 7. Ледяная новая (Взрыв кристаллов льда) - для Мороза
    addIceNova(x, y, radius = 55) {
        this.addShockwave(x, y, '#38bdf8', radius, 0.35, 3.5);
        for (let i = 0; i < 14; i++) {
            const angle = Math.random() * Math.PI * 2;
            const spd = Math.random() * 4 + 2;
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd,
                size: Math.random() * 3 + 2,
                color: i % 2 === 0 ? '#e0f2fe' : '#7dd3fc',
                alpha: 1.0,
                decay: 0.03,
                shape: 'diamond'
            });
        }
    }

    // 8. Огненный взрыв (Метеор, Дракон, Атом)
    addFireBlast(x, y, radius = 65) {
        this.addShockwave(x, y, '#ffedd5', radius, 0.35, 4.5);
        for (let i = 0; i < 16; i++) {
            const angle = Math.random() * Math.PI * 2;
            const spd = Math.random() * 4.5 + 2;
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd,
                size: Math.random() * 4 + 2,
                color: i % 3 === 0 ? '#fef08a' : (i % 3 === 1 ? '#f97316' : '#dc2626'),
                alpha: 1.0,
                decay: 0.035,
                shape: 'circle'
            });
        }
    }

    // 9. Черная дыра (Сингулярность - Мифическая способность)
    addDarkVortex(x, y, radius = 112, duration = 3.2, owner = null) {
        // Ограничение: не более двух сингулярностей на арене одновременно
        if (this.darkSingularities.length >= 2) {
            return;
        }
        this.darkSingularities.push({
            x, y,
            radius,
            duration,
            elapsed: 0,
            tickTimer: 0,
            owner,
            rotation: 0
        });
        this.triggerShake(6, 0.2);
    }

    // 10. Щупальца Бездны (Кракен)
    addTentacles(x, y, duration = 1.8) {
        this.tentacleClusters.push({
            x, y,
            duration,
            elapsed: 0
        });
    }

    // 11. Кислотный всплеск (Токсик)
    addAcidSplash(x, y) {
        for (let i = 0; i < 12; i++) {
            const angle = Math.random() * Math.PI * 2;
            const spd = Math.random() * 3.5 + 1.5;
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd - 0.5,
                size: Math.random() * 3 + 1.5,
                color: i % 2 === 0 ? '#a3e635' : '#4d7c0f',
                alpha: 0.95,
                decay: 0.03,
                shape: 'circle'
            });
        }
    }

    // 12. Кровотечение (Мясник / Пила) - только темно-красные капли и брызги
    addBleedSplatter(x, y, count = 12) {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const spd = Math.random() * 4.0 + 1.0;
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd + 0.8,
                size: Math.random() * 2.8 + 1.5,
                color: i % 3 === 0 ? '#7f1d1d' : (i % 3 === 1 ? '#991b1b' : '#dc2626'),
                alpha: 1.0,
                decay: 0.035,
                shape: 'circle',
                gravity: 0.08
            });
        }
    }

    // 13. Сейсмический импульс (Титан) - расширяющееся искажающее кольцо
    addSeismicShockwave(x, y, maxRadius = 75) {
        this.shockwaves.push({
            x, y,
            radius: 8,
            maxRadius,
            color: '#94a3b8',
            duration: 0.45,
            elapsed: 0,
            lineWidth: 6
        });
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            this.particles.push({
                x: x + Math.cos(angle) * 12,
                y: y + Math.sin(angle) * 12,
                vx: Math.cos(angle) * 3.5,
                vy: Math.sin(angle) * 3.5,
                size: 3.5,
                color: '#cbd5e1',
                alpha: 0.9,
                decay: 0.04,
                shape: 'diamond'
            });
        }
    }

    // 14. Призматическое отражение (Алмаз / Кристалл)
    addPrismaticReflect(x, y, targetX, targetY) {
        const colors = ['#f43f5e', '#fbbf24', '#38bdf8', '#c084fc'];
        for (let i = 0; i < 6; i++) {
            const angle = Math.atan2(targetY - y, targetX - x) + (Math.random() - 0.5) * 0.4;
            const spd = Math.random() * 4.5 + 3.0;
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd,
                size: Math.random() * 3 + 2,
                color: colors[i % colors.length],
                alpha: 1.0,
                decay: 0.03,
                shape: 'diamond'
            });
        }
        this.addShockwave(x, y, '#e0e7ff', 45, 0.25, 3);
    }

    // 15. Вертикальный удар молнии (Зевс)
    addVerticalLightning(x, groundY, duration = 0.25) {
        const topY = groundY - 140;
        const points = [];
        const segments = 6;
        for (let i = 0; i <= segments; i++) {
            const t = i / segments;
            const jitterX = i === 0 || i === segments ? 0 : (Math.random() - 0.5) * 22;
            points.push({
                x: x + jitterX,
                y: topY + (groundY - topY) * t
            });
        }
        this.lightningBolts.push({
            points,
            color: '#facc15',
            duration,
            elapsed: 0
        });
        // Золотой рунический круг в месте удара
        this.addShockwave(x, groundY, '#fde047', 48, 0.35, 4);
        for (let i = 0; i < 10; i++) {
            const a = (i / 10) * Math.PI * 2;
            this.particles.push({
                x: x + Math.cos(a) * 8,
                y: groundY + Math.sin(a) * 8,
                vx: Math.cos(a) * 3.8,
                vy: Math.sin(a) * 3.8,
                size: 2.5,
                color: '#fef08a',
                alpha: 1.0,
                decay: 0.04,
                shape: 'diamond'
            });
        }
    }

    // 16. Каменная крошка и минеральные осколки (Метеор) - строго без огня
    addStoneDebris(x, y, count = 14) {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const spd = Math.random() * 4.5 + 1.5;
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd,
                size: Math.random() * 3.2 + 1.8,
                color: i % 3 === 0 ? '#44403c' : (i % 3 === 1 ? '#78716c' : '#e7e5e4'),
                alpha: 1.0,
                decay: 0.035,
                shape: 'diamond'
            });
        }
    }

    // 17. Пиксельный цифровой разрыв (Неон-Кибер)
    addDigitalGlitch(x, y) {
        const colors = ['#38bdf8', '#c084fc', '#06b6d4', '#e879f9'];
        for (let i = 0; i < 10; i++) {
            const angle = Math.random() * Math.PI * 2;
            const spd = Math.random() * 3.5 + 1.5;
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd,
                size: Math.random() * 3 + 2,
                color: colors[i % colors.length],
                alpha: 1.0,
                decay: 0.04,
                shape: 'rect'
            });
        }
    }

    // 18. Термоядерный импульс (Атом) - пурпурно-малиновый радиационный фронт
    addThermonuclearPulse(x, y, radius = 95) {
        this.shockwaves.push({
            x, y,
            radius: 10,
            maxRadius: radius,
            color: '#e11d48',
            duration: 0.45,
            elapsed: 0,
            lineWidth: 5
        });
        this.shockwaves.push({
            x, y,
            radius: 5,
            maxRadius: radius * 0.7,
            color: '#c084fc',
            duration: 0.35,
            elapsed: 0,
            lineWidth: 3
        });
        for (let i = 0; i < 16; i++) {
            const a = (i / 16) * Math.PI * 2;
            const spd = Math.random() * 4.5 + 2.5;
            this.particles.push({
                x, y,
                vx: Math.cos(a) * spd,
                vy: Math.sin(a) * spd,
                size: Math.random() * 3 + 2,
                color: i % 2 === 0 ? '#fda4af' : '#e879f9',
                alpha: 1.0,
                decay: 0.03,
                shape: 'circle'
            });
        }
    }

    // 19. Солнечная корона (Гелиос)
    // 18.5. Вампирский сифон крови и капли (Вампир)
    addBloodDrip(x, y) {
        for (let i = 0; i < 3; i++) {
            const angle = Math.random() * Math.PI * 2;
            const spd = Math.random() * 2.0 + 0.5;
            this.particles.push({
                x: x + (Math.random() - 0.5) * 6,
                y: y + (Math.random() - 0.5) * 6,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd + 1.2,
                size: Math.random() * 2.5 + 1.5,
                color: i % 2 === 0 ? '#dc2626' : '#991b1b',
                alpha: 0.9,
                decay: 0.04,
                shape: 'circle'
            });
        }
    }

    addBloodSiphon(fromX, fromY, toX, toY) {
        const dx = toX - fromX;
        const dy = toY - fromY;
        const count = 4;
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 0.4;
            const startX = fromX + dx * t + (Math.random() - 0.5) * 8;
            const startY = fromY + dy * t + (Math.random() - 0.5) * 8;
            const angle = Math.atan2(toY - startY, toX - startX) + (Math.random() - 0.5) * 0.3;
            const spd = Math.random() * 3.5 + 2.5;
            this.particles.push({
                x: startX,
                y: startY,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd,
                size: Math.random() * 2.5 + 1.5,
                color: Math.random() < 0.6 ? '#ef4444' : '#7f1d1d',
                alpha: 0.95,
                decay: 0.05,
                shape: 'circle'
            });
        }
    }

    addSolarCrown(x, y, radius = 60) {
        this.addShockwave(x, y, '#fde047', radius, 0.4, 4);
        for (let i = 0; i < 12; i++) {
            const a = (i / 12) * Math.PI * 2;
            this.particles.push({
                x: x + Math.cos(a) * 16,
                y: y + Math.sin(a) * 16,
                vx: Math.cos(a) * 3.0,
                vy: Math.sin(a) * 3.0,
                size: 3,
                color: '#fef08a',
                alpha: 1.0,
                decay: 0.035,
                shape: 'diamond'
            });
        }
    }

    // 20. Направленный 65° пламенный выдох Дракона (Dragon) - строго конус с искрами и углями
    addDragonBreathCone(x, y, angle, range = 95, duration = 0.45) {
        this.flameCones.push({
            x, y,
            angle,
            coneAngle: 65 * Math.PI / 180, // 65 градусов (1.134 rad)
            range,
            duration,
            elapsed: 0
        });
        // 18 направленных языков и искр вдоль выдоха
        for (let i = 0; i < 18; i++) {
            const a = angle + (Math.random() - 0.5) * (65 * Math.PI / 180);
            const spd = Math.random() * 5.5 + 3.0;
            this.particles.push({
                x: x + Math.cos(a) * 12,
                y: y + Math.sin(a) * 12,
                vx: Math.cos(a) * spd,
                vy: Math.sin(a) * spd,
                size: Math.random() * 4 + 2,
                color: i % 3 === 0 ? '#ffedd5' : (i % 2 === 0 ? '#f97316' : '#ea580c'),
                alpha: 1.0,
                decay: Math.random() * 0.04 + 0.025,
                shape: 'circle'
            });
        }
    }

    // 21. Жизненная лента (Вампир) - тонкая малиново-фиолетовая энергетическая лента к вампиру
    addLifeDrainRibbon(fromX, fromY, toX, toY, duration = 0.4) {
        this.energyRibbons.push({
            fromX, fromY, toX, toY,
            color: '#c084fc',
            coreColor: '#f472b6',
            duration,
            elapsed: 0
        });
        for (let i = 0; i < 8; i++) {
            const prog = Math.random();
            this.particles.push({
                x: fromX + (toX - fromX) * prog + (Math.random() - 0.5) * 8,
                y: fromY + (toY - fromY) * prog + (Math.random() - 0.5) * 8,
                vx: (toX - fromX) * 0.08 + (Math.random() - 0.5) * 1.5,
                vy: (toY - fromY) * 0.08 + (Math.random() - 0.5) * 1.5,
                size: Math.random() * 2.5 + 1.5,
                color: '#e879f9',
                alpha: 1.0,
                decay: 0.04,
                shape: 'circle'
            });
        }
    }

    // 22. Полярные дуги и поле (Магнит) - холодно-голубая и янтарная встречные дуги
    addMagneticField(xOrOwner, yOrTarget, radius = 240, duration = 1.2, owner = null, target = null) {
        let x = 0, y = 0, realOwner = null, realTarget = null;
        if (typeof xOrOwner === 'object' && xOrOwner !== null) {
            realOwner = xOrOwner;
            realTarget = yOrTarget;
            x = realOwner.pos ? realOwner.pos.x : 0;
            y = realOwner.pos ? realOwner.pos.y : 0;
        } else {
            x = xOrOwner;
            y = yOrTarget;
            realOwner = owner;
            realTarget = target;
        }

        this.magneticFields.push({
            x, y,
            radius,
            duration,
            elapsed: 0,
            owner: realOwner,
            target: realTarget
        });

        // Электромагнитная ударная волна импульса
        this.addShockwave(x, y, '#38bdf8', radius, 0.35, 3.5);

        // Магнитные искры и дуговые проектили, притягивающиеся от цели к магниту
        if (realTarget && realTarget.pos) {
            for (let k = 0; k < 14; k++) {
                const prog = Math.random();
                const px = realTarget.pos.x + (x - realTarget.pos.x) * prog + (Math.random() - 0.5) * 16;
                const py = realTarget.pos.y + (y - realTarget.pos.y) * prog + (Math.random() - 0.5) * 16;
                this.particles.push({
                    x: px, y: py,
                    vx: (x - realTarget.pos.x) * 0.08 + (Math.random() - 0.5) * 2,
                    vy: (y - realTarget.pos.y) * 0.08 + (Math.random() - 0.5) * 2,
                    size: Math.random() * 2.5 + 1.5,
                    color: k % 2 === 0 ? '#38bdf8' : '#fbbf24',
                    alpha: 1.0,
                    decay: 0.04,
                    shape: 'circle'
                });
            }
        } else {
            this.addSparks(x, y, '#38bdf8', 12, 3.5);
        }
    }

    // 23. Песчаная буря (Скарабей) - плотная колоссальная песчаная волна с клубами пыли
    addSandWave(x, y, radius = 160) {
        // Две расширяющиеся ударные волны песчаного фронта
        this.shockwaves.push({
            x, y,
            radius: 12,
            maxRadius: radius,
            color: '#eab308',
            duration: 0.65,
            elapsed: 0,
            lineWidth: 6
        });
        this.shockwaves.push({
            x, y,
            radius: 8,
            maxRadius: radius * 0.75,
            color: '#ca8a04',
            duration: 0.5,
            elapsed: 0,
            lineWidth: 4
        });

        // 60 плотных песчаных вихрей и клубящихся частиц бархана
        for (let i = 0; i < 60; i++) {
            const a = Math.random() * Math.PI * 2;
            const dist = Math.random() * (radius * 0.6) + 10;
            const spd = Math.random() * 5.0 + 2.0;
            const colors = ['#fef08a', '#fde047', '#eab308', '#ca8a04', '#b45309', '#d97706'];
            this.particles.push({
                x: x + Math.cos(a) * dist * 0.3,
                y: y + Math.sin(a) * dist * 0.3,
                vx: Math.cos(a) * spd,
                vy: Math.sin(a) * spd + (Math.random() - 0.5) * 1.5,
                size: Math.random() * 4.0 + 2.0,
                color: colors[i % colors.length],
                alpha: 0.95,
                decay: Math.random() * 0.025 + 0.015,
                shape: i % 2 === 0 ? 'diamond' : 'circle'
            });
        }
        this.triggerShake(5, 0.2);
    }

    // 24. Отложенный маркер и распад на фрагменты (Подрывник)
    addDelayedBombMarker(x, y, duration = 0.22) {
        this.delayedMarkers.push({
            x, y, duration, elapsed: 0
        });
    }

    addBoomerBurst(x, y) {
        for (let i = 0; i < 18; i++) {
            const a = Math.random() * Math.PI * 2;
            const spd = Math.random() * 4.5 + 2.0;
            this.particles.push({
                x, y,
                vx: Math.cos(a) * spd,
                vy: Math.sin(a) * spd,
                size: Math.random() * 3.5 + 2,
                color: i % 3 === 0 ? '#fed7aa' : (i % 2 === 0 ? '#fb923c' : '#ea580c'),
                alpha: 1.0,
                decay: 0.04,
                shape: 'rect'
            });
        }
    }

    // 25. Радужные линзы-обманки (Мираж)
    addMirageLenses(x, y, angle, duration = 0.55) {
        this.mirageLenses.push({
            x, y, angle, duration, elapsed: 0
        });
    }

    // 26. Стальные треугольные осколки с янтарной кромкой (Шип)
    addSpikeCounterShards(x, y, nx, ny) {
        const baseAngle = Math.atan2(ny, nx);
        for (let i = 0; i < 5; i++) {
            const a = baseAngle + (i - 2) * 0.25;
            const spd = Math.random() * 4.0 + 3.0;
            this.particles.push({
                x: x + nx * 10,
                y: y + ny * 10,
                vx: Math.cos(a) * spd,
                vy: Math.sin(a) * spd,
                size: 3.5,
                color: i % 2 === 0 ? '#f8fafc' : '#f59e0b',
                alpha: 1.0,
                decay: 0.04,
                shape: 'diamond'
            });
        }
    }

    // 27. Воздушные ленты циклона (Тайфун)
    addCycloneRibbons(x, y, radius = 70, duration = 0.8) {
        this.vortexGales.push({
            x, y,
            targetX: x,
            targetY: y,
            color: '#38bdf8',
            duration,
            elapsed: 0
        });
        for (let i = 0; i < 16; i++) {
            const a = (i / 16) * Math.PI * 2;
            this.particles.push({
                x: x + Math.cos(a) * (radius * 0.5),
                y: y + Math.sin(a) * (radius * 0.5),
                vx: -Math.sin(a) * 3.2,
                vy: Math.cos(a) * 3.2,
                size: 2,
                color: '#bae6fd',
                alpha: 0.9,
                decay: 0.03,
                shape: 'circle'
            });
        }
    }

    // 28. Спектральный выпад эхо-копии (Фантом)
    addSpectralEchoStrike(fromX, fromY, toX, toY, radius = 24, duration = 0.25) {
        this.spectralEchoes.push({
            fromX, fromY,
            toX, toY,
            radius,
            duration,
            elapsed: 0
        });
        for (let i = 0; i < 14; i++) {
            const a = Math.random() * Math.PI * 2;
            const spd = Math.random() * 2.5 + 1.0;
            this.particles.push({
                x: fromX + (Math.random() - 0.5) * radius,
                y: fromY + (Math.random() - 0.5) * radius,
                vx: Math.cos(a) * spd,
                vy: Math.sin(a) * spd,
                size: Math.random() * 2.5 + 1.5,
                color: i % 2 === 0 ? '#818cf8' : '#c084fc',
                alpha: 0.85,
                decay: 0.04,
                shape: 'circle'
            });
        }
    }

    // =========================================================================
    // UPDATE
    // =========================================================================

    
    // =========================================================================
    // НОВЫЕ БОЕВЫЕ СУЩНОСТИ И АНИМАЦИИ (ПОЛНЫЙ РЕВОРК 17 ШАРОВ)
    // =========================================================================

    // 1. Мини-метеорит с физикой отскоков (Метеор)
        // 1.1 Мина Подрывника на арене (3.0 сек, пульсирует, краснеет)
    addBoomerMine(x, y, owner) {
        this.boomerMines.push({
            x, y,
            owner,
            radius: 18,
            blastRadius: 90,
            duration: 2.0,
            elapsed: 0,
            pulsePhase: 0
        });
    }

    // 1.2 Мега-взрыв по площади (Подрывник)
    addMegaExplosion(x, y, blastRadius = 90) {
        sounds.playExplosion ? sounds.playExplosion() : (sounds.playHit && sounds.playHit());
        this.triggerShake(12, 0.32);

        this.addShockwave(x, y, blastRadius * 1.3, '#f97316');
        this.addShockwave(x, y, blastRadius * 0.75, '#facc15');

        this.addSparks(x, y, '#fef08a', 16, 5.5, 3.0, 5.0);
        this.addSparks(x, y, '#ea580c', 14, 4.2, 2.5, 4.0);

        for (let i = 0; i < 14; i++) {
            const a = (i / 14) * Math.PI * 2 + Math.random() * 0.4;
            const spd = Math.random() * 2.8 + 1.2;
            this.particles.push({
                x: x + Math.cos(a) * 8,
                y: y + Math.sin(a) * 8,
                vx: Math.cos(a) * spd,
                vy: Math.sin(a) * spd,
                size: Math.random() * 8.0 + 5.0,
                color: Math.random() > 0.5 ? '#71717a' : (Math.random() > 0.5 ? '#f97316' : '#27272a'),
                alpha: 0.9,
                decay: 0.035,
                shape: 'circle'
            });
        }
    }

    addMiniMeteor(x, y, vx, vy, owner) {
        this.miniMeteors.push({
            x, y,
            vx, vy,
            radius: 10.5,
            duration: 999999, // не пропадают до удара по ТЗ
            elapsed: 0,
            trailTimer: 0,
            owner: owner
        });
    }

    // 2. Блуждающий смерч / торнадо с физикой (Тайфун)
    addTornado(x, y, vx, vy, owner) {
        this.tornadoes.push({
            x, y,
            vx, vy,
            radius: 78,
            duration: 3.5,
            elapsed: 0,
            tickTimer: 0.1,
            spinAngle: 0,
            owner: owner
        });
    }

    // 3. Летящий призрак Фантома во врага (Фантом)
    addPhantomGhost(x, y, targetEnemy, owner) {
        this.phantomGhosts.push({
            x, y,
            targetEnemy: targetEnemy,
            duration: 2.0,
            elapsed: 0,
            speed: 3.8,
            radius: 15,
            owner: owner
        });
    }

    // 4. Кристальный залп во все 8 сторон (Алмаз)
    addCrystalBurst(x, y, owner) {
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const spd = 6.2;
            this.crystalShards.push({
                x: x + Math.cos(angle) * 12,
                y: y + Math.sin(angle) * 12,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd,
                angle: angle,
                duration: 1.2,
                elapsed: 0,
                radius: 6,
                owner: owner
            });
        }
        this.addSparks(x, y, '#60a5fa', 12, 3.5);
    }

    // 5. Радиальный выброс 8 стальных шипов (Шип)
    addSpikeRadialNeedles(x, y, owner) {
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const spd = 6.5;
            this.spikeNeedles.push({
                x: x + Math.cos(angle) * 14,
                y: y + Math.sin(angle) * 14,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd,
                angle: angle,
                duration: 0.9,
                elapsed: 0,
                length: 15,
                owner: owner
            });
        }
        this.addSparks(x, y, '#e2e8f0', 10, 3.5);
    }

    // 6. Быстрые голографические копии-двойники (Мираж)
    addMirageDecoys(x, y, baseAngle, owner) {
        for (const offset of [-0.35, 0.35]) {
            const a = baseAngle + offset;
            const spd = 5.2;
            this.mirageDecoys.push({
                x, y,
                vx: Math.cos(a) * spd,
                vy: Math.sin(a) * spd,
                duration: 2.2,
                elapsed: 0,
                radius: 20,
                owner: owner
            });
        }
    }

    // 7. Сейсмический раскол / трещины на арене (Титан)
    addTitanFissure(x, y) {
        const branches = [];
        const count = 6;
        for (let i = 0; i < count; i++) {
            const baseA = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
            const pts = [{ x: 0, y: 0 }];
            let curLen = 0;
            const maxLen = 50 + Math.random() * 45;
            while (curLen < maxLen) {
                const step = 10 + Math.random() * 12;
                curLen += step;
                const jitter = (Math.random() - 0.5) * 0.5;
                const a = baseA + jitter;
                pts.push({
                    x: Math.cos(a) * curLen,
                    y: Math.sin(a) * curLen
                });
            }
            branches.push(pts);
        }
        this.titanFissures.push({
            x, y,
            branches,
            duration: 1.8,
            elapsed: 0
        });
    }

    // 8. Концентрированный солнечный луч и корона Гелиоса (ЕДИНЫЙ СФОКУСИРОВАННЫЙ ЛУЧ)
    addSolarBeam(fromX, fromY, toX, toY, owner) {
        let existing = this.solarBeams.find(sb => sb.owner === owner);
        if (existing) {
            existing.fromX = fromX;
            existing.fromY = fromY;
            existing.toX = toX;
            existing.toY = toY;
            existing.elapsed = 0;
            existing.duration = 0.15;
        } else {
            this.solarBeams.push({
                fromX, fromY, toX, toY,
                duration: 0.15,
                elapsed: 0,
                owner: owner
            });
        }
    }

    // Ядовитая лужа Токсика (размер 2-3 шара, 3.5с на полу)
    addToxicPuddle(x, y, owner) {
        this.toxicPuddles.push({
            x, y,
            radius: 92,
            duration: 5.0,
            elapsed: 0,
            tickTimer: 0,
            owner: owner,
            seed: Math.random() * 10
        });
    }

    // Летающий фаербол Огненного (физика рикошетов от стен арены, 3.0с)
    addBlazeFireball(x, y, vx, vy, owner) {
        this.blazeFireballs.push({
            x, y,
            vx, vy,
            radius: 12,
            duration: 3.0,
            elapsed: 0,
            owner: owner,
            damage: 4
        });
    }

    // 9. Горящие лужи магмы (Огненный)
    addMagmaPatch(x, y) {
        this.magmaPatches.push({
            x, y,
            radius: 14,
            duration: 1.5,
            elapsed: 0,
            tickTimer: 0
        });
    }

    // 10. Летящая крио-сосулька (Мороз)
    addGlacialIcicle(fromX, fromY, targetEnemy, owner) {
        const dx = targetEnemy.pos.x - fromX;
        const dy = targetEnemy.pos.y - fromY;
        const dist = Math.hypot(dx, dy) || 1;
        const spd = 6.8;
        this.glacialIcicles.push({
            x: fromX,
            y: fromY,
            vx: (dx / dist) * spd,
            vy: (dy / dist) * spd,
            targetEnemy,
            owner,
            radius: 9,
            duration: 2.2,
            elapsed: 0
        });
    }

    // 11. ЭМИ-вспышка (Неон-Кибер)
    addEmpBurst(x, y) {
        this.empBursts.push({
            x, y,
            radius: 6,
            maxRadius: 50,
            duration: 0.45,
            elapsed: 0
        });
    }

    // 12. Голографическая ловушка (Мираж)
    addHoloDecoyTrap(fromX, fromY, targetEnemy, owner) {
        const dx = targetEnemy.pos.x - fromX;
        const dy = targetEnemy.pos.y - fromY;
        const dist = Math.hypot(dx, dy) || 1;
        const spd = 5.6;
        this.mirageDecoys.push({
            x: fromX,
            y: fromY,
            vx: (dx / dist) * spd,
            vy: (dy / dist) * spd,
            targetEnemy,
            owner,
            radius: 20,
            duration: 2.2,
            elapsed: 0
        });
    }

    // 13. Острый кристаллический шпиль (Алмаз)
    addCrystalSpire(x, y, owner) {
        this.crystalSpires.push({
            x, y,
            owner,
            radius: 16,
            width: 18,
            height: 32,
            duration: 4.0,
            elapsed: 0
        });
    }

    update(dt, arenaBounds = null, balls = null) {
        const activeBalls = balls || [];
        // Тряска экрана
        if (this.screenShakeTime > 0) {
            this.screenShakeTime -= dt;
            if (this.screenShakeTime <= 0) {
                this.screenShakeIntensity = 0;
            }
        }

        // 1. Частицы
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            if (p.gravity) {
                p.vy += p.gravity;
            }
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= p.decay;
            if (p.alpha <= 0) {
                this.particles.splice(i, 1);
            }
        }

        // 2. Тексты
        for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
            const ft = this.floatingTexts[i];
            ft.y += ft.vy;
            ft.life -= dt * 1.5;
            ft.alpha = Math.max(0, ft.life);
            if (ft.life <= 0) {
                this.floatingTexts.splice(i, 1);
            }
        }

        // 3. Ударные волны
        for (let i = this.shockwaves.length - 1; i >= 0; i--) {
            const sw = this.shockwaves[i];
            sw.elapsed += dt;
            const progress = sw.elapsed / sw.duration;
            sw.radius = 5 + progress * (sw.maxRadius - 5);
            if (progress >= 1.0) {
                this.shockwaves.splice(i, 1);
            }
        }

        // 4. Лазерные лучи
        for (let i = this.laserBeams.length - 1; i >= 0; i--) {
            const lb = this.laserBeams[i];
            lb.elapsed += dt;
            if (lb.elapsed >= lb.duration) {
                this.laserBeams.splice(i, 1);
            }
        }

        // 5. Молнии
        for (let i = this.lightningBolts.length - 1; i >= 0; i--) {
            const lb = this.lightningBolts[i];
            lb.elapsed += dt;
            if (lb.elapsed >= lb.duration) {
                this.lightningBolts.splice(i, 1);
            }
        }

        // 6. Вихри
        for (let i = this.vortexGales.length - 1; i >= 0; i--) {
            const vg = this.vortexGales[i];
            vg.elapsed += dt;
            if (vg.elapsed >= vg.duration) {
                this.vortexGales.splice(i, 1);
            }
        }

        // 7. Черные дыры (Сингулярность - Мифическая способность)
        for (let i = this.darkSingularities.length - 1; i >= 0; i--) {
            const ds = this.darkSingularities[i];
            ds.elapsed += dt;
            ds.tickTimer += dt;
            ds.rotation += dt * 4.5;

            // Гравитационная стяжка врагов и тики урона горизонтом событий
            const isTick = ds.tickTimer >= 0.35;
            if (isTick) ds.tickTimer = 0;

            for (const target of activeBalls) {
                if (target && target !== ds.owner && target.hp > 0) {
                    const dx = ds.x - target.pos.x;
                    const dy = ds.y - target.pos.y;
                    const dist = Math.hypot(dx, dy) || 1;
                    if (dist <= ds.radius) {
                        // Мощная экспоненциальная гравитация к центру черной дыры
                        const factor = Math.max(0.25, 1 - (dist / ds.radius));
                        const pullForce = 0.95 * factor;
                        target.vel.x += (dx / dist) * pullForce;
                        target.vel.y += (dy / dist) * pullForce;

                        // Ограничиваем скорость чтобы не вылетал сквозь стены
                        const maxSpd = target.baseSpeed ? target.baseSpeed * 1.6 : 5.5;
                        const curSpd = Math.hypot(target.vel.x, target.vel.y);
                        if (curSpd > maxSpd) {
                            target.vel.x = (target.vel.x / curSpd) * maxSpd;
                            target.vel.y = (target.vel.y / curSpd) * maxSpd;
                        }

                        // Квантовые тики горизонта событий: -2 HP каждые 0.35с
                        if (isTick) {
                            target.takeDamage(3, this, false, ds.owner);
                            this.addDamageText(target.pos.x, target.pos.y - 20, '−3', '#c084fc');
                            this.addSparks(target.pos.x, target.pos.y, '#a855f7', 4, 2.5);
                        }
                    }
                }
            }

            // Финальный гравитационный коллапс (детонация черной дыры при схлопывании)
            if (ds.elapsed >= ds.duration) {
                sounds.playExplosion ? sounds.playExplosion() : (sounds.playHit && sounds.playHit());
                this.triggerShake(10, 0.35);
                this.addShockwave(ds.x, ds.y, ds.radius * 1.35, '#c084fc');
                this.addSparks(ds.x, ds.y, '#f5d0fe', 26, 6.0);
                this.addSparks(ds.x, ds.y, '#9333ea', 20, 4.5);

                for (const target of activeBalls) {
                    if (target && target !== ds.owner && target.hp > 0) {
                        const dx = target.pos.x - ds.x;
                        const dy = target.pos.y - ds.y;
                        const dist = Math.hypot(dx, dy) || 1;
                        if (dist <= ds.radius * 1.25) {
                            const burstDmg = 8;
                            target.takeDamage(burstDmg, this, true, ds.owner);
                            this.addDamageText(target.pos.x, target.pos.y - 30, '-' + burstDmg, '#c084fc', true);
                            // Мощный импульс отбрасывания взрывной волной
                            target.vel.x = (dx / dist) * 7.5;
                            target.vel.y = (dy / dist) * 7.5;
                        }
                    }
                }
                this.darkSingularities.splice(i, 1);
            }
        }

        // 8. Щупальца
        for (let i = this.tentacleClusters.length - 1; i >= 0; i--) {
            const tc = this.tentacleClusters[i];
            tc.elapsed += dt;
            if (tc.elapsed >= tc.duration) {
                this.tentacleClusters.splice(i, 1);
            }
        }

        // 9. Пламенные выдохи Дракона
        for (let i = this.flameCones.length - 1; i >= 0; i--) {
            const fc = this.flameCones[i];
            fc.elapsed += dt;
            if (fc.elapsed >= fc.duration) {
                this.flameCones.splice(i, 1);
            }
        }

        // 10. Жизненные ленты Вампира
        for (let i = this.energyRibbons.length - 1; i >= 0; i--) {
            const er = this.energyRibbons[i];
            er.elapsed += dt;
            if (er.elapsed >= er.duration) {
                this.energyRibbons.splice(i, 1);
            }
        }

        // 11. Магнитные поля (динамическое позиционирование и индукционные частицы)
        for (let i = this.magneticFields.length - 1; i >= 0; i--) {
            const mf = this.magneticFields[i];
            mf.elapsed += dt;
            if (mf.owner && mf.owner.pos) {
                mf.x = mf.owner.pos.x;
                mf.y = mf.owner.pos.y;
            }
            // Непрерывный поток магнитных индукционных частиц от цели к магниту
            if (mf.target && mf.target.pos && Math.random() < 0.65) {
                const prog = Math.random();
                this.particles.push({
                    x: mf.target.pos.x + (mf.x - mf.target.pos.x) * prog + (Math.random() - 0.5) * 12,
                    y: mf.target.pos.y + (mf.y - mf.target.pos.y) * prog + (Math.random() - 0.5) * 12,
                    vx: (mf.x - mf.target.pos.x) * 0.07 + (Math.random() - 0.5) * 1.5,
                    vy: (mf.y - mf.target.pos.y) * 0.07 + (Math.random() - 0.5) * 1.5,
                    size: Math.random() * 2.2 + 1.2,
                    color: Math.random() < 0.5 ? '#38bdf8' : '#f59e0b',
                    alpha: 0.9,
                    decay: 0.045,
                    shape: 'circle'
                });
            }
            if (mf.elapsed >= mf.duration) {
                this.magneticFields.splice(i, 1);
            }
        }

        // 12. Линзы Миража
        for (let i = this.mirageLenses.length - 1; i >= 0; i--) {
            const ml = this.mirageLenses[i];
            ml.elapsed += dt;
            if (ml.elapsed >= ml.duration) {
                this.mirageLenses.splice(i, 1);
            }
        }

        // 13. Спектральные эхо-выпады Фантома
        for (let i = this.spectralEchoes.length - 1; i >= 0; i--) {
            const se = this.spectralEchoes[i];
            se.elapsed += dt;
            if (se.elapsed >= se.duration) {
                this.addSparks(se.toX, se.toY, '#818cf8', 14, 4.0);
                this.triggerShake(5, 0.15);
                this.spectralEchoes.splice(i, 1);
            }
        }

        // 13. Отложенные маркеры Подрывника
        for (let i = this.delayedMarkers.length - 1; i >= 0; i--) {
            const dm = this.delayedMarkers[i];
            dm.elapsed += dt;
            if (dm.elapsed >= dm.duration) {
                this.delayedMarkers.splice(i, 1);
            }
        }

        // =====================================================================
        // ОБНОВЛЕНИЕ НОВЫХ БОЕВЫХ СУЩНОСТЕЙ (РЕВОРК)
        // =====================================================================

        const bBounds = arenaBounds || { left: 10, right: 800, top: 10, bottom: 600 };

        // 14. Мини-метеоры (Метеор)
        for (let i = this.miniMeteors.length - 1; i >= 0; i--) {
            const m = this.miniMeteors[i];
            m.elapsed += dt;
            m.trailTimer += dt;

            // Движение с постоянной скоростью
            m.x += m.vx * (dt * 60);
            m.y += m.vy * (dt * 60);

            // Огненный шлейф
            if (m.trailTimer >= 0.03) {
                m.trailTimer = 0;
                this.particles.push({
                    x: m.x + (Math.random() - 0.5) * 4,
                    y: m.y + (Math.random() - 0.5) * 4,
                    vx: -m.vx * 0.25 + (Math.random() - 0.5) * 0.8,
                    vy: -m.vy * 0.25 + (Math.random() - 0.5) * 0.8,
                    size: Math.random() * 3.5 + 2.0,
                    color: Math.random() > 0.4 ? '#f97316' : '#facc15',
                    alpha: 0.9,
                    decay: 0.04,
                    shape: 'circle'
                });
            }

            // Отскок от стен арены
            if (m.x - m.radius < bBounds.left) {
                m.x = bBounds.left + m.radius;
                m.vx = Math.abs(m.vx);
                sounds.playWallHit(0.3);
            } else if (m.x + m.radius > bBounds.right) {
                m.x = bBounds.right - m.radius;
                m.vx = -Math.abs(m.vx);
                sounds.playWallHit(0.3);
            }
            if (m.y - m.radius < bBounds.top) {
                m.y = bBounds.top + m.radius;
                m.vy = Math.abs(m.vy);
                sounds.playWallHit(0.3);
            } else if (m.y + m.radius > bBounds.bottom) {
                m.y = bBounds.bottom - m.radius;
                m.vy = -Math.abs(m.vy);
                sounds.playWallHit(0.3);
            }

            // Коллизия с вражескими шарами
            let hitTarget = false;
            for (const target of activeBalls) {
                if (target && target !== m.owner && target.hp > 0) {
                    const dist = Math.hypot(target.pos.x - m.x, target.pos.y - m.y);
                    if (dist <= target.radius + m.radius) {
                        target.takeDamage(5, this, false, m.owner);
                        sounds.playExplosion();
                        this.addSparks(m.x, m.y, '#f97316', 12, 3.5);
                        this.addDamageText(target.pos.x, target.pos.y - 25, '−5', '#f97316', true);
                        this.triggerShake(4, 0.12);
                        hitTarget = true;
                        break;
                    }
                }
            }

            if (hitTarget) {
                this.addSparks(m.x, m.y, '#ea580c', 8, 2.5);
                this.miniMeteors.splice(i, 1);
            }
        }

        
        // Мины Подрывника (Boomer: 3.0 сек на арене, пульсирует, краснеет, взрывается при контакте или по таймеру)
        for (let i = this.boomerMines.length - 1; i >= 0; i--) {
            const mine = this.boomerMines[i];
            mine.elapsed += dt;
            const prog = mine.elapsed / mine.duration;
            mine.pulsePhase += dt * (3.0 + prog * 10.0);

            let shouldDetonate = false;

            // Проверка столкновения с вражеским шаром
            for (const target of activeBalls) {
                if (target && target !== mine.owner && target.hp > 0) {
                    const dist = Math.hypot(target.pos.x - mine.x, target.pos.y - mine.y);
                    if (dist <= target.radius + mine.radius) {
                        shouldDetonate = true;
                        break;
                    }
                }
            }

            if (mine.elapsed >= mine.duration) {
                shouldDetonate = true;
            }

            if (shouldDetonate) {
                // Нанесение 14 урона врагам в радиусе 90px
                for (const target of activeBalls) {
                    if (target && target !== mine.owner && target.hp > 0) {
                        const dist = Math.hypot(target.pos.x - mine.x, target.pos.y - mine.y);
                        if (dist <= target.radius + mine.blastRadius) {
                            const dmg = 15;
                            target.takeDamage(15, this, true, mine.owner);
                            this.addDamageText(target.pos.x, target.pos.y - 28, '−15', '#f97316', true);
                            const push = target.pos.clone().sub(new Vector2(mine.x, mine.y)).normalize().scale(5.5);
                            target.vel.add(push);
                            target.maintainSpeed();
                        }
                    }
                }

                this.addMegaExplosion(mine.x, mine.y, mine.blastRadius);
                this.boomerMines.splice(i, 1);
            }
        }

        // 15. Блуждающие торнадо (Тайфун: мощное вакуумное затягивание + 3 урона за тик каждые 0.25с)
        for (let i = this.tornadoes.length - 1; i >= 0; i--) {
            const tor = this.tornadoes[i];
            tor.elapsed += dt;
            tor.tickTimer += dt;
            tor.spinAngle += dt * 10;

            // Движение с отскоками от стен
            tor.x += tor.vx * (dt * 60);
            tor.y += tor.vy * (dt * 60);

            if (tor.x - tor.radius < bBounds.left) {
                tor.x = bBounds.left + tor.radius;
                tor.vx = Math.abs(tor.vx);
            } else if (tor.x + tor.radius > bBounds.right) {
                tor.x = bBounds.right - tor.radius;
                tor.vx = -Math.abs(tor.vx);
            }
            if (tor.y - tor.radius < bBounds.top) {
                tor.y = bBounds.top + tor.radius;
                tor.vy = Math.abs(tor.vy);
            } else if (tor.y + tor.radius > bBounds.bottom) {
                tor.y = bBounds.bottom - tor.radius;
                tor.vy = -Math.abs(tor.vy);
            }

            // Ветряные частицы вихря
            if (Math.random() < 0.45) {
                const a = Math.random() * Math.PI * 2;
                this.particles.push({
                    x: tor.x + Math.cos(a) * tor.radius * 0.7,
                    y: tor.y + Math.sin(a) * tor.radius * 0.7,
                    vx: -Math.sin(a) * 3.5,
                    vy: Math.cos(a) * 3.5,
                    size: 2.5,
                    color: '#bae6fd',
                    alpha: 0.8,
                    decay: 0.05,
                    shape: 'circle'
                });
            }

            // Постоянное вакуумное притягивание к центру смерча (каждый кадр)
            const isTick = tor.tickTimer >= 0.40;
            if (isTick) tor.tickTimer = 0;

            for (const target of activeBalls) {
                if (target && target !== tor.owner && target.hp > 0) {
                    const dx = tor.x - target.pos.x;
                    const dy = tor.y - target.pos.y;
                    const dist = Math.hypot(dx, dy) || 1;
                    if (dist <= tor.radius * 1.35) {
                        const pullFactor = Math.max(0.35, 1 - (dist / (tor.radius * 1.35)));
                        const pull = 0.26 * pullFactor;
                        target.vel.x += (dx / dist) * pull;
                        target.vel.y += (dy / dist) * pull;

                        // Умеренный вихревой круговой снос
                        const swirl = 0.18 * pullFactor;
                        target.vel.x += (-dy / dist) * swirl;
                        target.vel.y += (dx / dist) * swirl;
                        target.maintainSpeed();

                        // Тиковый урон смерча: 3 DMG каждые 0.25 сек
                        if (isTick) {
                            target.takeDamage(2, this, false, tor.owner);
                            this.addDamageText(target.pos.x, target.pos.y - 20, '−2', '#38bdf8');
                            this.addSparks(target.pos.x, target.pos.y, '#38bdf8', 6, 2.5);
                        }
                    }
                }
            }

            if (tor.elapsed >= tor.duration) {
                this.addSparks(tor.x, tor.y, '#38bdf8', 12, 3.5);
                this.tornadoes.splice(i, 1);
            }
        }

        // 16. Летящие призраки (Фантом) - летят во врага, живут 2.0 секунды
        for (let i = this.phantomGhosts.length - 1; i >= 0; i--) {
            const pg = this.phantomGhosts[i];
            pg.elapsed += dt;

            // Направление на противника
            if (pg.targetEnemy && pg.targetEnemy.hp > 0) {
                const dx = pg.targetEnemy.pos.x - pg.x;
                const dy = pg.targetEnemy.pos.y - pg.y;
                const dist = Math.hypot(dx, dy);
                if (dist > 0.001) {
                    pg.x += (dx / dist) * pg.speed * (dt * 60);
                    pg.y += (dy / dist) * pg.speed * (dt * 60);
                }

                // Эфирный дымный след
                if (Math.random() < 0.6) {
                    this.particles.push({
                        x: pg.x + (Math.random() - 0.5) * 6,
                        y: pg.y + (Math.random() - 0.5) * 6,
                        vx: -(dx / dist) * 0.8 + (Math.random() - 0.5) * 0.5,
                        vy: -(dy / dist) * 0.8 + (Math.random() - 0.5) * 0.5,
                        size: Math.random() * 4.0 + 2.0,
                        color: '#818cf8',
                        alpha: 0.7,
                        decay: 0.045,
                        shape: 'circle'
                    });
                }

                // Касание врага
                if (dist <= pg.targetEnemy.radius + pg.radius) {
                    pg.targetEnemy.takeDamage(6, this, true, pg.owner);
                    sounds.playBallHit(1.3);
                    this.addDamageText(pg.targetEnemy.pos.x, pg.targetEnemy.pos.y - 28, '−6', '#818cf8', true);
                    this.addSparks(pg.x, pg.y, '#818cf8', 14, 4.0);
                    this.triggerShake(5, 0.15);
                    this.phantomGhosts.splice(i, 1);
                    continue;
                }
            }

            // Исчезновение по истечении 2.0 сек
            if (pg.elapsed >= pg.duration) {
                this.addSparks(pg.x, pg.y, '#818cf8', 6, 2.0);
                this.phantomGhosts.splice(i, 1);
            }
        }

        // 17. Кристальные осколки (Алмаз)
        for (let i = this.crystalShards.length - 1; i >= 0; i--) {
            const cs = this.crystalShards[i];
            cs.elapsed += dt;
            cs.x += cs.vx * (dt * 60);
            cs.y += cs.vy * (dt * 60);

            let hit = false;
            for (const target of activeBalls) {
                if (target && target !== cs.owner && target.hp > 0) {
                    const dist = Math.hypot(target.pos.x - cs.x, target.pos.y - cs.y);
                    if (dist <= target.radius + cs.radius) {
                        target.takeDamage(3, this, false, cs.owner);
                        sounds.playBallHit(1.1);
                        this.addDamageText(target.pos.x, target.pos.y - 25, '−3', '#60a5fa');
                        this.addSparks(cs.x, cs.y, '#93c5fd', 8, 3.0);
                        hit = true;
                        break;
                    }
                }
            }

            if (hit || cs.elapsed >= cs.duration) {
                this.crystalShards.splice(i, 1);
            }
        }

        // 18. Стальные иглы (Шип)
        for (let i = this.spikeNeedles.length - 1; i >= 0; i--) {
            const sn = this.spikeNeedles[i];
            sn.elapsed += dt;
            sn.x += sn.vx * (dt * 60);
            sn.y += sn.vy * (dt * 60);

            let hit = false;
            for (const target of activeBalls) {
                if (target && target !== sn.owner && target.hp > 0) {
                    const dist = Math.hypot(target.pos.x - sn.x, target.pos.y - sn.y);
                    if (dist <= target.radius + 6) {
                        target.takeDamage(4, this, false, sn.owner);
                        sounds.playBallHit(0.9);
                        this.addDamageText(target.pos.x, target.pos.y - 25, '−4', '#f1f5f9');
                        this.addSparks(sn.x, sn.y, '#e2e8f0', 8, 3.0);
                        hit = true;
                        break;
                    }
                }
            }

            if (hit || sn.elapsed >= sn.duration) {
                this.spikeNeedles.splice(i, 1);
            }
        }

        // 19. Голографические копии-двойники Миража (декорации и ловушки: 3 урона)
        for (let i = this.mirageDecoys.length - 1; i >= 0; i--) {
            const md = this.mirageDecoys[i];
            md.elapsed += dt;
            md.x += md.vx * (dt * 60);
            md.y += md.vy * (dt * 60);

            // Отскок от стен арены
            if (md.x - md.radius < bBounds.left) {
                md.x = bBounds.left + md.radius;
                md.vx = Math.abs(md.vx);
            } else if (md.x + md.radius > bBounds.right) {
                md.x = bBounds.right - md.radius;
                md.vx = -Math.abs(md.vx);
            }
            if (md.y - md.radius < bBounds.top) {
                md.y = bBounds.top + md.radius;
                md.vy = Math.abs(md.vy);
            } else if (md.y + md.radius > bBounds.bottom) {
                md.y = bBounds.bottom - md.radius;
                md.vy = -Math.abs(md.vy);
            }

            // Столкновение с врагом -> детонация на 3 урона
            let hit = false;
            for (const target of activeBalls) {
                if (target && target !== md.owner && target.hp > 0) {
                    const dist = Math.hypot(target.pos.x - md.x, target.pos.y - md.y);
                    if (dist <= target.radius + md.radius) {
                        target.takeDamage(3, this, false, md.owner);
                        target.slowTimer = 1.2;
                        target.slowFactor = 0.6;
                        if (sounds.playAbility) sounds.playAbility();
                        this.addDamageText(target.pos.x, target.pos.y - 25, '−3', '#06b6d4', false);
                        this.addSparks(md.x, md.y, '#22d3ee', 14, 4.0);
                        this.addSparks(md.x, md.y, '#d946ef', 10, 3.5);
                        hit = true;
                        break;
                    }
                }
            }

            if (hit || md.elapsed >= md.duration) {
                this.addSparks(md.x, md.y, '#06b6d4', 8, 2.5);
                this.mirageDecoys.splice(i, 1);
            }
        }

        // 20. Сейсмические трещины арены (Титан)
        for (let i = this.titanFissures.length - 1; i >= 0; i--) {
            const tf = this.titanFissures[i];
            tf.elapsed += dt;
            if (tf.elapsed >= tf.duration) {
                this.titanFissures.splice(i, 1);
            }
        }

        // 21. Солнечные лучи Гелиоса
        for (let i = this.solarBeams.length - 1; i >= 0; i--) {
            const sb = this.solarBeams[i];
            sb.elapsed += dt;
            if (sb.elapsed >= sb.duration) {
                this.solarBeams.splice(i, 1);
            }
        }

        // Обновление ядовитых луж Токсика (5.0 сек, 2 урона за тик, большая зона)
        for (let i = this.toxicPuddles.length - 1; i >= 0; i--) {
            const tp = this.toxicPuddles[i];
            tp.elapsed += dt;
            tp.tickTimer += dt;
            if (tp.tickTimer >= 0.35) {
                tp.tickTimer = 0;
                for (const target of activeBalls) {
                    if (target && target.hp > 0 && target !== tp.owner) {
                        const dist = Math.hypot(target.pos.x - tp.x, target.pos.y - tp.y);
                        if (dist <= target.radius + tp.radius) {
                            target.takeDamage(2, this, false, tp.owner);
                            target.poisonTimer = Math.max(target.poisonTimer || 0, 1.2);
                            this.addDamageText(target.pos.x, target.pos.y - 20, '−2', '#a3e635');
                            this.addAcidSplash(target.pos.x, target.pos.y);
                        }
                    }
                }
            }
            if (tp.elapsed >= tp.duration) {
                this.toxicPuddles.splice(i, 1);
            }
        }

        // Обновление летающих фаерболов Огненного (физика отскоков от стен арены, живут 3.0с)
        for (let i = this.blazeFireballs.length - 1; i >= 0; i--) {
            const fb = this.blazeFireballs[i];
            fb.elapsed += dt;
            fb.x += fb.vx * (dt * 60);
            fb.y += fb.vy * (dt * 60);

            // Физика отскока от стен арены
            if (fb.x - fb.radius < bBounds.left) {
                fb.x = bBounds.left + fb.radius;
                fb.vx = Math.abs(fb.vx);
                sounds.playWallHit ? sounds.playWallHit(1.2) : null;
            } else if (fb.x + fb.radius > bBounds.right) {
                fb.x = bBounds.right - fb.radius;
                fb.vx = -Math.abs(fb.vx);
                sounds.playWallHit ? sounds.playWallHit(1.2) : null;
            }
            if (fb.y - fb.radius < bBounds.top) {
                fb.y = bBounds.top + fb.radius;
                fb.vy = Math.abs(fb.vy);
                sounds.playWallHit ? sounds.playWallHit(1.2) : null;
            } else if (fb.y + fb.radius > bBounds.bottom) {
                fb.y = bBounds.bottom - fb.radius;
                fb.vy = -Math.abs(fb.vy);
                sounds.playWallHit ? sounds.playWallHit(1.2) : null;
            }

            // Шлейф пламени
            if (Math.random() < 0.35) {
                this.addSparks(fb.x, fb.y, '#f97316', 1, 1.5, 1.0, 2.0);
            }

            // Коллизия с вражескими шарами
            let hit = false;
            for (const target of activeBalls) {
                if (target && target.hp > 0 && target !== fb.owner) {
                    const dist = Math.hypot(target.pos.x - fb.x, target.pos.y - fb.y);
                    if (dist <= target.radius + fb.radius) {
                        target.takeDamage(fb.damage, this, false, fb.owner);
                        this.addSparks(fb.x, fb.y, '#f97316', 10, 3.5);
                        sounds.playExplosion ? sounds.playExplosion() : sounds.playBallHit(1.2);
                        hit = true;
                        break;
                    }
                }
            }

            if (hit || fb.elapsed >= fb.duration) {
                if (!hit) {
                    this.addSparks(fb.x, fb.y, '#f97316', 6, 2.0);
                }
                this.blazeFireballs.splice(i, 1);
            }
        }

        // 22. Горящие лужи магмы (Огненный)
        for (let i = this.magmaPatches.length - 1; i >= 0; i--) {
            const mp = this.magmaPatches[i];
            mp.elapsed += dt;
            mp.tickTimer += dt;
            if (mp.tickTimer >= 0.3) {
                mp.tickTimer = 0;
                for (const target of activeBalls) {
                    if (target && target.hp > 0 && target.id !== 'blaze') {
                        const dist = Math.hypot(target.pos.x - mp.x, target.pos.y - mp.y);
                        if (dist <= target.radius + mp.radius) {
                            target.takeDamage(1, this, false, null);
                            this.addDamageText(target.pos.x, target.pos.y - 18, '−1', '#f97316');
                            this.addSparks(mp.x, mp.y, '#ea580c', 3, 2.0);
                        }
                    }
                }
            }
            if (mp.elapsed >= mp.duration) {
                this.magmaPatches.splice(i, 1);
            }
        }

        // 23. Летящие крио-сосульки (Мороз)
        for (let i = this.glacialIcicles.length - 1; i >= 0; i--) {
            const gi = this.glacialIcicles[i];
            gi.elapsed += dt;
            gi.x += gi.vx * (dt * 60);
            gi.y += gi.vy * (dt * 60);

            let hit = false;
            for (const target of activeBalls) {
                if (target && target !== gi.owner && target.hp > 0) {
                    const dist = Math.hypot(target.pos.x - gi.x, target.pos.y - gi.y);
                    if (dist <= target.radius + gi.radius) {
                        target.takeDamage(5, this, true, gi.owner);
                        target.frozenTimer = 1.5;
                        sounds.playBallHit ? sounds.playBallHit(1.2) : sounds.playHit();
                        this.addDamageText(target.pos.x, target.pos.y - 25, '−5', '#38bdf8', true);
                        this.addSparks(gi.x, gi.y, '#bae6fd', 14, 4.0);
                        hit = true;
                        break;
                    }
                }
            }

            if (hit || gi.elapsed >= gi.duration) {
                this.glacialIcicles.splice(i, 1);
            }
        }

        // 24. ЭМИ-вспышки (Неон-Кибер)
        for (let i = this.empBursts.length - 1; i >= 0; i--) {
            const emp = this.empBursts[i];
            emp.elapsed += dt;
            if (emp.elapsed >= emp.duration) {
                this.empBursts.splice(i, 1);
            }
        }

        // 25. Острые кристаллы-шпили (Алмаз) - взрыв на осколки со временем или при таране
        for (let i = this.crystalSpires.length - 1; i >= 0; i--) {
            const cs = this.crystalSpires[i];
            cs.elapsed += dt;
            let hit = false;
            for (const target of activeBalls) {
                if (target && target !== cs.owner && target.hp > 0) {
                    const dist = Math.hypot(target.pos.x - cs.x, target.pos.y - cs.y);
                    if (dist <= target.radius + cs.radius) {
                        target.takeDamage(7, this, true, cs.owner);
                        if (cs.owner) {
                            cs.owner.crystalShieldHp = 5;
                        }
                        sounds.playAbility();
                        this.addDamageText(target.pos.x, target.pos.y - 25, '−7', '#38bdf8', true);
                        this.addSparks(cs.x, cs.y, '#7dd3fc', 18, 4.5);
                        hit = true;
                        break;
                    }
                }
            }
            if (hit) {
                this.addCrystalBurst(cs.x, cs.y, cs.owner);
                this.crystalSpires.splice(i, 1);
            } else if (cs.elapsed >= cs.duration) {
                // Шпиль сам детонирует и выбрасывает осколки во врага
                this.addCrystalBurst(cs.x, cs.y, cs.owner);
                this.addSparks(cs.x, cs.y, '#38bdf8', 14, 4.0);
                sounds.playAbility();
                this.crystalSpires.splice(i, 1);
            }
        }

        // 26. Щупальца Бездны на Арене (Кракен)
        // Цикл: каждые 5 сек появляются 2 щупальца, живут 5 сек, затем 5 сек пауза
        const krakenBall = activeBalls ? activeBalls.find(b => b && b.id === 'kraken' && b.hp > 0) : null;
        if (krakenBall) {
            this.krakenArenaTimer += dt;
            if (this.krakenArenaPhase === 'COOLDOWN') {
                if (this.krakenArenaTimer >= 5.0) {
                    this.krakenArenaPhase = 'ACTIVE';
                    this.krakenArenaTimer = 0;
                    this.arenaTentacles = [];
                    const bLeft = bBounds ? bBounds.left + 50 : 50;
                    const bRight = bBounds ? bBounds.right - 50 : 350;
                    const bTop = bBounds ? bBounds.top + 60 : 60;
                    const bBottom = bBounds ? bBounds.bottom - 60 : 380;
                    for (let k = 0; k < 2; k++) {
                        const tx = bLeft + Math.random() * (bRight - bLeft);
                        const ty = bTop + Math.random() * (bBottom - bTop);
                        this.arenaTentacles.push({
                            x: tx,
                            y: ty,
                            owner: krakenBall,
                            radius: 26,
                            duration: 5.0,
                            elapsed: 0,
                            animSeed: Math.random() * 20
                        });
                        this.addSparks(tx, ty, '#c084fc', 12, 3.5);
                    }
                    sounds.playAbility();
                }
            } else if (this.krakenArenaPhase === 'ACTIVE') {
                if (this.krakenArenaTimer >= 5.0 || this.arenaTentacles.length === 0) {
                    this.krakenArenaPhase = 'COOLDOWN';
                    this.krakenArenaTimer = 0;
                    this.arenaTentacles = [];
                }
            }
        } else {
            this.arenaTentacles = [];
            this.krakenArenaTimer = 0;
            this.krakenArenaPhase = 'COOLDOWN';
        }

        // Проверка захвата врага щупальцем на арене
        for (let i = this.arenaTentacles.length - 1; i >= 0; i--) {
            const at = this.arenaTentacles[i];
            at.elapsed += dt;

            let grabbed = false;
            for (const target of activeBalls) {
                if (target && target !== at.owner && target.hp > 0) {
                    const dist = Math.hypot(target.pos.x - at.x, target.pos.y - at.y);
                    if (dist <= target.radius + at.radius) {
                        // Захват на 2 секунды стана + 2 секунды уязвимости (+50% входящего урона)
                        target.stunTimer = 2.0;
                        target.krakenVulnerableTimer = 2.0;
                        target.vel.set(0, 0);
                        sounds.playBallHit ? sounds.playBallHit(0.8) : sounds.playHit();
                        this.addSparks(at.x, at.y, '#9333ea', 16, 4.0);
                        this.triggerShake(5, 0.2);
                        grabbed = true;
                        break;
                    }
                }
            }

            if (grabbed || at.elapsed >= at.duration) {
                this.addSparks(at.x, at.y, '#581c87', 8, 2.0);
                this.arenaTentacles.splice(i, 1);
            }
        }
    }

    // =========================================================================
    // DRAW
    // =========================================================================

        draw(ctx) {
        ctx.save();

        // 1. Черные дыры (Сингулярность - мифический фоновый слой)
        for (const ds of this.darkSingularities) {
            const prog = ds.elapsed / ds.duration;
            const alpha = Math.sin(prog * Math.PI);
            ctx.save();
            ctx.translate(ds.x, ds.y);

            // 1. Космическое гравитационное линзирование (искажающие световые кольца Эйнштейна)
            ctx.save();
            ctx.rotate(ds.elapsed * 1.5);
            ctx.strokeStyle = 'rgba(192, 132, 252, 0.45)';
            ctx.lineWidth = 1.8;
            ctx.setLineDash([10, 14]);
            ctx.beginPath();
            ctx.arc(0, 0, ds.radius * 1.15, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.restore();

            // 2. Внешний гравитационный ореол и аккреционная дымка
            const grad = ctx.createRadialGradient(0, 0, ds.radius * 0.15, 0, 0, ds.radius);
            grad.addColorStop(0, '#000000');
            grad.addColorStop(0.3, 'rgba(88, 28, 135, 0.7)');
            grad.addColorStop(0.65, 'rgba(168, 85, 247, 0.35)');
            grad.addColorStop(0.9, 'rgba(192, 132, 252, 0.15)');
            grad.addColorStop(1, 'rgba(147, 51, 234, 0)');
            ctx.fillStyle = grad;
            ctx.globalAlpha = alpha * 0.85;
            ctx.beginPath();
            ctx.arc(0, 0, ds.radius, 0, Math.PI * 2);
            ctx.fill();

            // 3. Релятивистский аккреционный диск с Доплеровским свечением
            ctx.save();
            ctx.rotate(ds.elapsed * 4.5);

            // Наклонный диск материи
            for (let ring = 0; ring < 3; ring++) {
                const rFactor = 0.55 + ring * 0.15;
                ctx.strokeStyle = ring === 0 ? 'rgba(245, 208, 254, 0.85)' : (ring === 1 ? 'rgba(192, 132, 252, 0.65)' : 'rgba(126, 34, 206, 0.45)');
                ctx.lineWidth = 2.2 - ring * 0.4;
                ctx.beginPath();
                ctx.ellipse(0, 0, ds.radius * rFactor, ds.radius * rFactor * 0.55, ring * 0.2, 0, Math.PI * 2);
                ctx.stroke();
            }

            // Спиральные рукава поглощаемой звездной материи
            ctx.strokeStyle = '#e879f9';
            ctx.lineWidth = 2.0;
            ctx.lineCap = 'round';
            for (let s = 0; s < 3; s++) {
                const a = (s / 3) * Math.PI * 2;
                ctx.beginPath();
                ctx.arc(0, 0, ds.radius * 0.7, a, a + 1.1);
                ctx.stroke();
            }
            ctx.restore();

            // 4. Фотонная сфера (Incandescent photon sphere ring)
            ctx.strokeStyle = 'rgba(253, 244, 255, 0.9)';
            ctx.lineWidth = 2.0;
            ctx.beginPath();
            ctx.arc(0, 0, ds.radius * 0.28, 0, Math.PI * 2);
            ctx.stroke();

            // 5. Абсолютная тьма горизонта событий (Event Horizon)
            ctx.fillStyle = '#000000';
            ctx.globalAlpha = 1.0;
            ctx.beginPath();
            ctx.arc(0, 0, ds.radius * 0.25, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }

        // 2. Ударные волны (Nuke, Titan, Crystal и др.)
        for (const sw of this.shockwaves) {
            const prog = sw.elapsed / sw.duration;
            const alpha = (1 - prog);
            ctx.save();
            ctx.strokeStyle = sw.color;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = sw.lineWidth * (1 - prog * 0.5);
            ctx.beginPath();
            ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
        }

        // 3. Воздушные вихри Тайфуна
        for (const vg of this.vortexGales) {
            const prog = vg.elapsed / vg.duration;
            const alpha = (1 - prog);
            const curX = vg.x + (vg.targetX - vg.x) * prog;
            const curY = vg.y + (vg.targetY - vg.y) * prog;

            ctx.save();
            ctx.translate(curX, curY);
            ctx.rotate(vg.elapsed * 12);
            ctx.strokeStyle = vg.color;
            ctx.globalAlpha = alpha * 0.85;
            ctx.lineWidth = 3;

            for (let i = 0; i < 3; i++) {
                const a = (i / 3) * Math.PI * 2;
                ctx.beginPath();
                ctx.arc(0, 0, 24, a, a + 1.4);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(0, 0, 14, a + 0.5, a + 1.8);
                ctx.stroke();
            }
            ctx.restore();
        }

        // 4. Лазерные лучи (Протон)
        for (const lb of this.laserBeams) {
            const prog = lb.elapsed / lb.duration;
            const alpha = Math.sin((1 - prog) * Math.PI * 0.5);

            ctx.save();
            ctx.strokeStyle = lb.color;
            ctx.globalAlpha = alpha * 0.6;
            ctx.lineWidth = lb.width * 2.2;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(lb.x1, lb.y1);
            ctx.lineTo(lb.x2, lb.y2);
            ctx.stroke();

            ctx.strokeStyle = '#ffffff';
            ctx.globalAlpha = alpha;
            ctx.lineWidth = lb.width * 0.8;
            ctx.beginPath();
            ctx.moveTo(lb.x1, lb.y1);
            ctx.lineTo(lb.x2, lb.y2);
            ctx.stroke();
            ctx.restore();
        }

        // 5. Разряды молний (Зевс и Тесла)
        for (const lb of this.lightningBolts) {
            const prog = lb.elapsed / lb.duration;
            const alpha = (1 - prog);

            ctx.save();
            ctx.strokeStyle = lb.color;
            ctx.globalAlpha = alpha * 0.75;
            ctx.lineWidth = 4;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            ctx.beginPath();
            ctx.moveTo(lb.points[0].x, lb.points[0].y);
            for (let i = 1; i < lb.points.length; i++) {
                ctx.lineTo(lb.points[i].x, lb.points[i].y);
            }
            ctx.stroke();

            // Белая жила молнии
            ctx.strokeStyle = '#ffffff';
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(lb.points[0].x, lb.points[0].y);
            for (let i = 1; i < lb.points.length; i++) {
                ctx.lineTo(lb.points[i].x, lb.points[i].y);
            }
            ctx.stroke();
            ctx.restore();
        }

        // 6. Щупальца Кракена
        for (const tc of this.tentacleClusters) {
            const prog = tc.elapsed / tc.duration;
            const alpha = Math.min(1, (1 - prog) * 2);
            ctx.save();
            ctx.translate(tc.x, tc.y);
            ctx.strokeStyle = '#581c87';
            ctx.lineWidth = 4;
            ctx.lineCap = 'round';
            ctx.globalAlpha = alpha * 0.8;

            const tWave = tc.elapsed * 4;
            for (let k = 0; k < 5; k++) {
                const baseAngle = (k / 5) * Math.PI * 2;
                ctx.beginPath();
                ctx.moveTo(Math.cos(baseAngle) * 15, Math.sin(baseAngle) * 15);
                const midX = Math.cos(baseAngle + Math.sin(tWave + k) * 0.4) * 36;
                const midY = Math.sin(baseAngle + Math.sin(tWave + k) * 0.4) * 36;
                const endX = Math.cos(baseAngle - Math.cos(tWave + k) * 0.5) * 48;
                const endY = Math.sin(baseAngle - Math.cos(tWave + k) * 0.5) * 48;
                ctx.quadraticCurveTo(midX, midY, endX, endY);
                ctx.stroke();
            }
            ctx.restore();
        }

        // 6.1. Направленный 65° пламенный выдох Дракона (Dragon)
        for (const fc of this.flameCones) {
            const prog = fc.elapsed / fc.duration;
            const alpha = Math.sin((1 - prog) * Math.PI);
            ctx.save();
            ctx.translate(fc.x, fc.y);
            ctx.rotate(fc.angle);
            const halfCone = fc.coneAngle * 0.5;

            // Веерный конус пламени
            const grad = ctx.createRadialGradient(0, 0, 8, 0, 0, fc.range);
            grad.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.95})`);
            grad.addColorStop(0.2, `rgba(254, 240, 138, ${alpha * 0.9})`);
            grad.addColorStop(0.5, `rgba(249, 115, 22, ${alpha * 0.85})`);
            grad.addColorStop(0.85, `rgba(234, 88, 12, ${alpha * 0.6})`);
            grad.addColorStop(1, 'rgba(220, 38, 38, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, fc.range, -halfCone, halfCone);
            ctx.closePath();
            ctx.fill();

            // Огненные крыловидные языки внутри сектора
            ctx.strokeStyle = `rgba(255, 237, 213, ${alpha * 0.8})`;
            ctx.lineWidth = 2.5;
            for (let w = -2; w <= 2; w++) {
                const wa = w * (halfCone * 0.45);
                const wr = fc.range * (0.65 + Math.sin(fc.elapsed * 25 + w) * 0.25);
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(Math.cos(wa) * wr, Math.sin(wa) * wr);
                ctx.stroke();
            }
            ctx.restore();
        }

        // 6.2. Жизненная лента Вампира (Vampire)
        for (const er of this.energyRibbons) {
            const prog = er.elapsed / er.duration;
            const alpha = (1 - prog);
            ctx.save();
            ctx.strokeStyle = er.color;
            ctx.lineWidth = 3.5;
            ctx.globalAlpha = alpha * 0.9;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(er.fromX, er.fromY);
            const midX = (er.fromX + er.toX) * 0.5 + Math.sin(er.elapsed * 20) * 12;
            const midY = (er.fromY + er.toY) * 0.5 + Math.cos(er.elapsed * 20) * 12;
            ctx.quadraticCurveTo(midX, midY, er.toX, er.toY);
            ctx.stroke();

            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.2;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(er.fromX, er.fromY);
            ctx.quadraticCurveTo(midX, midY, er.toX, er.toY);
            ctx.stroke();
            ctx.restore();
        }

        // 6.3. Полярные дуги и магнитное поле Магнита (Magnet)
        for (const mf of this.magneticFields) {
            const prog = mf.elapsed / mf.duration;
            const alpha = Math.sin((1 - prog) * Math.PI);
            ctx.save();
            ctx.globalAlpha = alpha;

            const curRadius = mf.radius || 75;

            // 1. Дугообразные линии магнитного потока между Магнитом и притягиваемым врагом
            if (mf.target && mf.target.pos) {
                const tx = mf.target.pos.x;
                const ty = mf.target.pos.y;
                const mx = mf.x;
                const my = mf.y;
                const dist = Math.hypot(tx - mx, ty - my) || 1;
                const nx = -(ty - my) / dist;
                const ny = (tx - mx) / dist;

                // 2 силовые дуги индукции поля
                for (const side of [-1, 1]) {
                    const curvature = dist * 0.28 * side;
                    const cpx = (mx + tx) * 0.5 + nx * curvature;
                    const cpy = (my + ty) * 0.5 + ny * curvature;

                    ctx.strokeStyle = side === 1 ? '#38bdf8' : '#f59e0b';
                    ctx.lineWidth = 1.8;
                    ctx.setLineDash([6, 6]);
                    ctx.lineDashOffset = -mf.elapsed * 35 * side;
                    ctx.beginPath();
                    ctx.moveTo(mx, my);
                    ctx.quadraticCurveTo(cpx, cpy, tx, ty);
                    ctx.stroke();
                }
                ctx.setLineDash([]);
            }

            // 2. Две вращающиеся подковообразные полярные дуги вокруг Магнита
            ctx.translate(mf.x, mf.y);

            // Северо-голубая полярная дуга (вращается против часовой)
            const rotN = mf.elapsed * 6;
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 3.2;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.arc(0, 0, curRadius * 0.65, rotN, rotN + Math.PI * 0.65);
            ctx.stroke();

            // Южная янтарная полярная дуга (вращается по часовой)
            const rotS = -mf.elapsed * 6 + Math.PI;
            ctx.strokeStyle = '#f59e0b';
            ctx.lineWidth = 3.2;
            ctx.beginPath();
            ctx.arc(0, 0, curRadius * 0.65, rotS, rotS + Math.PI * 0.65);
            ctx.stroke();

            // Тонкое внешнее силовое кольцо пульсации
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.arc(0, 0, curRadius * (0.8 + Math.sin(mf.elapsed * 12) * 0.1), 0, Math.PI * 2);
            ctx.stroke();

            ctx.restore();
        }

        // 6.35. Сейсмические трещины арены (Титан)
        for (const tf of this.titanFissures) {
            const prog = tf.elapsed / tf.duration;
            const alpha = (1 - prog);
            ctx.save();
            ctx.translate(tf.x, tf.y);
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 2.0;
            ctx.globalAlpha = alpha * 0.85;
            for (const branch of tf.branches) {
                ctx.beginPath();
                branch.forEach((pt, idx) => {
                    if (idx === 0) ctx.moveTo(pt.x, pt.y);
                    else ctx.lineTo(pt.x, pt.y);
                });
                ctx.stroke();
            }
            ctx.restore();
        }

        // Ядовитые лужи Токсика (хаотичная, большая лужа кислоты на полу арены)
        for (const tp of this.toxicPuddles) {
            ctx.save();
            const prog = tp.elapsed / tp.duration;
            const alpha = prog > 0.85 ? (1 - prog) / 0.15 : Math.min(1, tp.elapsed * 4);
            ctx.globalAlpha = alpha;
            ctx.translate(tp.x, tp.y);

            // Основная хаотичная лужа (16 вершин с многочастотной деформацией)
            const pGrad = ctx.createRadialGradient(0, 0, tp.radius * 0.15, 0, 0, tp.radius);
            pGrad.addColorStop(0, 'rgba(190, 242, 100, 0.82)');
            pGrad.addColorStop(0.35, 'rgba(132, 204, 22, 0.72)');
            pGrad.addColorStop(0.7, 'rgba(74, 222, 128, 0.50)');
            pGrad.addColorStop(0.9, 'rgba(21, 128, 61, 0.40)');
            pGrad.addColorStop(1, 'rgba(20, 83, 45, 0)');

            ctx.fillStyle = pGrad;
            ctx.beginPath();
            const points = 16;
            for (let p = 0; p <= points; p++) {
                const angle = (p / points) * Math.PI * 2;
                const wobble = Math.sin(angle * 3 + tp.seed) * 16 
                             + Math.cos(angle * 5 + tp.seed * 2 + tp.elapsed * 2) * 11 
                             + Math.sin(angle * 7 - tp.elapsed * 1.5) * 7;
                const r = tp.radius + wobble;
                const px = Math.cos(angle) * r;
                const py = Math.sin(angle) * r;
                if (p === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fill();

            ctx.strokeStyle = 'rgba(217, 249, 157, 0.5)';
            ctx.lineWidth = 2.2;
            ctx.stroke();

            // Вторичные мелкие лужицы-брызги вокруг
            const droplets = [
                { angle: 0.5, dist: tp.radius * 1.08, r: 9 },
                { angle: 1.8, dist: tp.radius * 1.12, r: 7 },
                { angle: 3.2, dist: tp.radius * 1.05, r: 11 },
                { angle: 4.4, dist: tp.radius * 1.10, r: 8 },
                { angle: 5.6, dist: tp.radius * 1.06, r: 10 }
            ];
            for (const d of droplets) {
                const dx = Math.cos(d.angle + tp.seed) * d.dist;
                const dy = Math.sin(d.angle + tp.seed) * d.dist;
                ctx.fillStyle = 'rgba(132, 204, 22, 0.55)';
                ctx.beginPath();
                ctx.arc(dx, dy, d.r, 0, Math.PI * 2);
                ctx.fill();
            }

            // Кипящие пузырьки кислоты на поверхности
            for (let b = 0; b < 7; b++) {
                const bAngle = b * (Math.PI * 2 / 7) + tp.seed;
                const bDist = (tp.radius * 0.45) + Math.sin(tp.elapsed * 3 + b * 2) * (tp.radius * 0.3);
                const bx = Math.cos(bAngle) * bDist;
                const by = Math.sin(bAngle) * bDist;
                const bSize = 2.5 + Math.sin(tp.elapsed * 4 + b) * 2.0;
                if (bSize > 1) {
                    ctx.fillStyle = 'rgba(236, 252, 203, 0.85)';
                    ctx.beginPath();
                    ctx.arc(bx, by, bSize, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.strokeStyle = 'rgba(101, 163, 13, 0.6)';
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
            ctx.restore();
        }

        // 6.4. Радужные линзы Миража (Mirage)
        for (const ml of this.mirageLenses) {
            const prog = ml.elapsed / ml.duration;
            const alpha = Math.sin((1 - prog) * Math.PI);
            ctx.save();
            ctx.translate(ml.x, ml.y);
            ctx.globalAlpha = alpha * 0.8;
            for (const sign of [-1, 1]) {
                ctx.save();
                ctx.rotate(ml.angle + sign * 0.21);
                const dist = prog * 38;
                ctx.translate(dist, 0);
                ctx.strokeStyle = sign === 1 ? '#06b6d4' : '#a855f7';
                ctx.lineWidth = 2.5;
                ctx.beginPath();
                ctx.arc(0, 0, 16, -Math.PI * 0.4, Math.PI * 0.4);
                ctx.stroke();
                ctx.restore();
            }
            ctx.restore();
        }

        // 6.5. Квадратный маркер Подрывника (Boomer)
        for (const dm of this.delayedMarkers) {
            ctx.save();
            ctx.translate(dm.x, dm.y);
            ctx.strokeStyle = '#fb923c';
            ctx.lineWidth = 2;
            const sz = 8 + Math.sin(dm.elapsed * 20) * 2;
            ctx.strokeRect(-sz * 0.5, -sz * 0.5, sz, sz);
            ctx.fillStyle = '#fed7aa';
            ctx.fillRect(-sz * 0.25, -sz * 0.25, sz * 0.5, sz * 0.5);
            ctx.restore();
        }

        // 6.6. Спектральное эхо Фантома (Phantom) - летящий призрачный силуэт
        for (const se of this.spectralEchoes) {
            const prog = Math.min(1, se.elapsed / se.duration);
            const curX = se.fromX + (se.toX - se.fromX) * prog;
            const curY = se.fromY + (se.toY - se.fromY) * prog;
            const alpha = (1 - prog * 0.35);

            ctx.save();
            ctx.translate(curX, curY);

            // Призрачный индиго-дым вокруг духа
            const ghostGrad = ctx.createRadialGradient(0, 0, 4, 0, 0, se.radius * 1.3);
            ghostGrad.addColorStop(0, `rgba(165, 180, 252, ${alpha * 0.9})`);
            ghostGrad.addColorStop(0.5, `rgba(99, 102, 241, ${alpha * 0.7})`);
            ghostGrad.addColorStop(1, 'rgba(49, 46, 129, 0)');
            ctx.fillStyle = ghostGrad;
            ctx.beginPath();
            ctx.arc(0, 0, se.radius * 1.3, 0, Math.PI * 2);
            ctx.fill();

            // Силуэт фантома
            ctx.fillStyle = `rgba(30, 27, 75, ${alpha * 0.85})`;
            ctx.beginPath();
            ctx.arc(0, 0, se.radius * 0.9, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`;
            ctx.lineWidth = 2.5;
            ctx.stroke();

            // Светящиеся спектральные глаза
            ctx.fillStyle = '#38bdf8';
            ctx.beginPath();
            ctx.arc(-se.radius * 0.28, -se.radius * 0.12, 3, 0, Math.PI * 2);
            ctx.arc(se.radius * 0.28, -se.radius * 0.12, 3, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }

        
        // 6.5. Мины Подрывника на земле (пульсируют и краснеют)
        for (const mine of this.boomerMines) {
            const prog = Math.min(1, mine.elapsed / mine.duration);
            const pulse = Math.sin(mine.pulsePhase);
            ctx.save();
            ctx.translate(mine.x, mine.y);

            // 1. Пульсирующая зона поражения на арене (краснеет по мере приближения детонации)
            const zoneR = mine.blastRadius + pulse * 4;
            ctx.beginPath();
            ctx.arc(0, 0, zoneR, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(239, 68, 68, ${0.18 + prog * 0.42 + pulse * 0.1})`;
            ctx.lineWidth = 1.6;
            ctx.setLineDash([8, 6]);
            ctx.stroke();
            ctx.setLineDash([]);

            const zoneGrad = ctx.createRadialGradient(0, 0, mine.radius, 0, 0, zoneR);
            zoneGrad.addColorStop(0, `rgba(239, 68, 68, ${0.25 + prog * 0.35})`);
            zoneGrad.addColorStop(0.7, `rgba(249, 115, 22, ${0.08 + prog * 0.15})`);
            zoneGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');
            ctx.fillStyle = zoneGrad;
            ctx.beginPath();
            ctx.arc(0, 0, zoneR, 0, Math.PI * 2);
            ctx.fill();

            // 2. Тело тяжелой мины (6 выступающих контактных детонаторов)
            const mr = mine.radius;
            ctx.strokeStyle = '#3f3f46';
            ctx.lineWidth = 2.8;
            for (let k = 0; k < 6; k++) {
                const ka = (k / 6) * Math.PI * 2;
                ctx.beginPath();
                ctx.moveTo(Math.cos(ka) * mr * 0.7, Math.sin(ka) * mr * 0.7);
                ctx.lineTo(Math.cos(ka) * (mr * 1.35), Math.sin(ka) * (mr * 1.35));
                ctx.stroke();

                ctx.fillStyle = prog > 0.7 ? '#ef4444' : '#f59e0b';
                ctx.beginPath();
                ctx.arc(Math.cos(ka) * (mr * 1.35), Math.sin(ka) * (mr * 1.35), 2.2, 0, Math.PI * 2);
                ctx.fill();
            }

            // Стальной купол мины
            const mGrad = ctx.createRadialGradient(-mr * 0.25, -mr * 0.25, 2, 0, 0, mr);
            mGrad.addColorStop(0, '#71717a');
            mGrad.addColorStop(0.6, '#27272a');
            mGrad.addColorStop(1, '#09090b');
            ctx.fillStyle = mGrad;
            ctx.beginPath();
            ctx.arc(0, 0, mr, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#52525b';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // 3. Центральный индикатор таймера: пульсирует и краснеет
            const redFactor = prog;
            const rVal = Math.round(251 - redFactor * 12);
            const gVal = Math.round(191 * (1 - redFactor * 0.8));
            const bVal = Math.round(36 * (1 - redFactor * 0.8));
            const centerColor = `rgb(${rVal}, ${gVal}, ${bVal})`;

            const ledGrad = ctx.createRadialGradient(0, 0, 1, 0, 0, mr * 0.55);
            ledGrad.addColorStop(0, prog > 0.8 && pulse > 0 ? '#ffffff' : centerColor);
            ledGrad.addColorStop(0.5, centerColor);
            ledGrad.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
            ctx.fillStyle = ledGrad;
            ctx.beginPath();
            ctx.arc(0, 0, mr * 0.55, 0, Math.PI * 2);
            ctx.fill();

            // Круговой индикатор оставшегося времени
            ctx.strokeStyle = prog > 0.8 ? '#ffffff' : centerColor;
            ctx.lineWidth = 2.2;
            ctx.beginPath();
            ctx.arc(0, 0, mr * 0.55, -Math.PI / 2, -Math.PI / 2 + (1 - prog) * Math.PI * 2);
            ctx.stroke();

            ctx.restore();
        }

        // 6.7. Блуждающие смерчи / торнадо (Тайфун: огромный циклон размером в 3 шара)
        for (const tor of this.tornadoes) {
            const prog = tor.elapsed / tor.duration;
            const alpha = Math.min(1, (1 - prog) * 2.2);
            ctx.save();
            ctx.translate(tor.x, tor.y);
            ctx.globalAlpha = alpha * 0.88;

            // 1. Внешняя атмосферная дымка бури
            const auraG = ctx.createRadialGradient(0, 0, tor.radius * 0.2, 0, 0, tor.radius * 1.15);
            auraG.addColorStop(0, 'rgba(224, 242, 254, 0.25)');
            auraG.addColorStop(0.5, 'rgba(56, 189, 248, 0.18)');
            auraG.addColorStop(0.85, 'rgba(14, 165, 233, 0.08)');
            auraG.addColorStop(1, 'rgba(2, 132, 199, 0)');
            ctx.fillStyle = auraG;
            ctx.beginPath();
            ctx.arc(0, 0, tor.radius * 1.15, 0, Math.PI * 2);
            ctx.fill();

            // 2. Вращающиеся рукава циклона (6 многоярусных эллипсов)
            const layers = 6;
            for (let l = 0; l < layers; l++) {
                const layerR = tor.radius * (0.35 + (l / layers) * 0.75);
                const rot = tor.spinAngle * (1.2 + l * 0.22);
                ctx.save();
                ctx.rotate(rot);

                const grad = ctx.createRadialGradient(0, 0, 4, 0, 0, layerR);
                grad.addColorStop(0, 'rgba(255, 255, 255, 0.55)');
                grad.addColorStop(0.45, 'rgba(186, 230, 253, 0.40)');
                grad.addColorStop(0.8, 'rgba(56, 189, 248, 0.25)');
                grad.addColorStop(1, 'rgba(14, 165, 233, 0)');
                ctx.fillStyle = grad;

                ctx.beginPath();
                ctx.ellipse(0, 0, layerR, layerR * 0.52, 0, 0, Math.PI * 2);
                ctx.fill();

                // Четкие белые вихревые линии ветра
                ctx.strokeStyle = l % 2 === 0 ? 'rgba(255, 255, 255, 0.75)' : 'rgba(186, 230, 253, 0.65)';
                ctx.lineWidth = 2.0;
                ctx.beginPath();
                ctx.arc(0, 0, layerR * 0.88, 0, Math.PI * 1.1);
                ctx.stroke();

                ctx.restore();
            }

            // 3. Глаз бури (спокойный центр вихря)
            const eyeG = ctx.createRadialGradient(0, 0, 1, 0, 0, 14);
            eyeG.addColorStop(0, '#ffffff');
            eyeG.addColorStop(0.5, 'rgba(224, 242, 254, 0.8)');
            eyeG.addColorStop(1, 'rgba(56, 189, 248, 0)');
            ctx.fillStyle = eyeG;
            ctx.beginPath();
            ctx.arc(0, 0, 14, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }

        // 6.8. Пылающие мини-метеоры с физикой (Метеор - 2.5D раскаленный болид с аэродинамическим шлейфом)
        for (const m of this.miniMeteors) {
            ctx.save();
            ctx.translate(m.x, m.y);
            const motionAngle = Math.atan2(m.vy, m.vx);
            ctx.rotate(motionAngle);

            const r = m.radius || 10.5;

            // 1. Аэродинамический хвост плазмы и пламени позади болида
            const tailLen = r * 3.4;
            const tailGrad = ctx.createLinearGradient(-tailLen, 0, r * 0.4, 0);
            tailGrad.addColorStop(0, 'rgba(239, 68, 68, 0)');
            tailGrad.addColorStop(0.35, 'rgba(249, 115, 22, 0.45)');
            tailGrad.addColorStop(0.75, 'rgba(251, 191, 36, 0.90)');
            tailGrad.addColorStop(1, '#ffffff');

            ctx.fillStyle = tailGrad;
            ctx.beginPath();
            ctx.moveTo(r * 0.4, -r * 0.85);
            ctx.quadraticCurveTo(-tailLen * 0.4, -r * 1.15, -tailLen, 0);
            ctx.quadraticCurveTo(-tailLen * 0.4, r * 1.15, r * 0.4, r * 0.85);
            ctx.closePath();
            ctx.fill();

            // Внутренний раскаленный белый сердечник шлейфа
            const innerTail = ctx.createLinearGradient(-tailLen * 0.6, 0, 0, 0);
            innerTail.addColorStop(0, 'rgba(254, 240, 138, 0)');
            innerTail.addColorStop(0.5, 'rgba(254, 240, 138, 0.75)');
            innerTail.addColorStop(1, '#ffffff');
            ctx.fillStyle = innerTail;
            ctx.beginPath();
            ctx.moveTo(0, -r * 0.45);
            ctx.quadraticCurveTo(-tailLen * 0.3, -r * 0.55, -tailLen * 0.6, 0);
            ctx.quadraticCurveTo(-tailLen * 0.3, r * 0.55, 0, r * 0.45);
            ctx.closePath();
            ctx.fill();

            // 2. Головная плазменная ударная волна (Bow Shock)
            ctx.strokeStyle = 'rgba(254, 240, 138, 0.85)';
            ctx.lineWidth = 2.2;
            ctx.beginPath();
            ctx.arc(0, 0, r * 1.25, -Math.PI * 0.45, Math.PI * 0.45);
            ctx.stroke();

            // 3. Неровное базальтовое тело болида (многоугольный вулканический астероид)
            ctx.save();
            ctx.rotate(m.elapsed * 6.5); // вращение метеорита вокруг своей оси

            ctx.fillStyle = '#1c1917'; // темный вулканический базальт
            ctx.beginPath();
            const rockPoints = 8;
            for (let p = 0; p < rockPoints; p++) {
                const a = (p / rockPoints) * Math.PI * 2;
                const radVar = r * (0.82 + ((p * 37) % 5) * 0.08);
                const px = Math.cos(a) * radVar;
                const py = Math.sin(a) * radVar;
                if (p === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fill();

            // Раскаленные магматические разломы на поверхности болида
            ctx.strokeStyle = '#f97316';
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            ctx.moveTo(-r * 0.5, -r * 0.2);
            ctx.lineTo(-r * 0.1, r * 0.1);
            ctx.lineTo(r * 0.4, -r * 0.3);
            ctx.stroke();

            ctx.strokeStyle = '#fef08a';
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.moveTo(-r * 0.2, r * 0.3);
            ctx.lineTo(r * 0.2, r * 0.4);
            ctx.stroke();

            // Пылающие кратеры с жидкой магмой
            ctx.fillStyle = '#fbbf24';
            ctx.beginPath();
            ctx.arc(-r * 0.2, -r * 0.25, r * 0.22, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.arc(r * 0.25, r * 0.15, r * 0.18, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
            ctx.restore();
        }

        // 6.9. Летящие призраки (Фантом) - 2.0 сек
        for (const pg of this.phantomGhosts) {
            const prog = pg.elapsed / pg.duration;
            const alpha = Math.min(1, (1 - prog) * 2.0);
            ctx.save();
            ctx.translate(pg.x, pg.y);
            ctx.globalAlpha = alpha;

            const aura = ctx.createRadialGradient(0, 0, 3, 0, 0, pg.radius * 1.5);
            aura.addColorStop(0, 'rgba(165, 180, 252, 0.85)');
            aura.addColorStop(0.5, 'rgba(99, 102, 241, 0.5)');
            aura.addColorStop(1, 'rgba(49, 46, 129, 0)');
            ctx.fillStyle = aura;
            ctx.beginPath();
            ctx.arc(0, 0, pg.radius * 1.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#312e81';
            ctx.beginPath();
            ctx.arc(0, -2, pg.radius * 0.85, Math.PI, 0, false);
            const tailWave = Math.sin(pg.elapsed * 12) * 4;
            ctx.quadraticCurveTo(pg.radius * 0.6, pg.radius * 0.8, tailWave, pg.radius * 1.4);
            ctx.quadraticCurveTo(-pg.radius * 0.6, pg.radius * 0.8, -pg.radius * 0.85, -2);
            ctx.fill();

            ctx.strokeStyle = '#818cf8';
            ctx.lineWidth = 2.0;
            ctx.stroke();

            ctx.fillStyle = '#c084fc';
            ctx.beginPath();
            ctx.arc(-pg.radius * 0.3, -4, 2.5, 0, Math.PI * 2);
            ctx.arc(pg.radius * 0.3, -4, 2.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        // 6.10. Кристальные осколки (Алмаз)
        for (const cs of this.crystalShards) {
            ctx.save();
            ctx.translate(cs.x, cs.y);
            ctx.rotate(cs.angle + Math.PI / 2);
            ctx.fillStyle = '#60a5fa';
            ctx.beginPath();
            ctx.moveTo(0, -cs.radius * 1.5);
            ctx.lineTo(cs.radius * 0.8, 0);
            ctx.lineTo(0, cs.radius * 1.5);
            ctx.lineTo(-cs.radius * 0.8, 0);
            ctx.closePath();
            ctx.fill();

            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.2;
            ctx.stroke();

            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(0, -cs.radius * 0.4, 1.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        // 6.11. Стальные иглы (Шип)
        for (const sn of this.spikeNeedles) {
            ctx.save();
            ctx.translate(sn.x, sn.y);
            ctx.rotate(sn.angle);
            ctx.fillStyle = '#e2e8f0';
            ctx.beginPath();
            ctx.moveTo(sn.length, 0);
            ctx.lineTo(-sn.length * 0.3, -3);
            ctx.lineTo(-sn.length * 0.2, 0);
            ctx.lineTo(-sn.length * 0.3, 3);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 1.0;
            ctx.stroke();
            ctx.restore();
        }

        // 6.12. Голографические копии-двойники (Мираж - Хроматический глитч-голограмма)
        for (const md of this.mirageDecoys) {
            const prog = md.elapsed / md.duration;
            const alpha = Math.max(0, 1 - prog);
            ctx.save();
            ctx.translate(md.x, md.y);
            ctx.globalAlpha = alpha * 0.85;

            // Пурпурный силуэт со смещением (+2, 0)
            ctx.strokeStyle = 'rgba(217, 70, 239, 0.6)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(2, 0, md.radius, 0, Math.PI * 2);
            ctx.stroke();

            // Бирюзовый силуэт со смещением (-2, 0)
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.8)';
            ctx.lineWidth = 2.0;
            ctx.beginPath();
            ctx.arc(-2, 0, md.radius, 0, Math.PI * 2);
            ctx.stroke();

            // Полупрозрачное тело голограммы
            const holoGrad = ctx.createRadialGradient(0, 0, 2, 0, 0, md.radius);
            holoGrad.addColorStop(0, 'rgba(6, 182, 212, 0.35)');
            holoGrad.addColorStop(0.7, 'rgba(15, 23, 42, 0.6)');
            holoGrad.addColorStop(1, 'rgba(139, 92, 246, 0.3)');
            ctx.fillStyle = holoGrad;
            ctx.beginPath();
            ctx.arc(0, 0, md.radius, 0, Math.PI * 2);
            ctx.fill();

            // Голографические сканирующие линии
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            for (let y = -md.radius * 0.7; y <= md.radius * 0.7; y += 5) {
                ctx.fillRect(-md.radius * 0.7, y, md.radius * 1.4, 1.0);
            }

            // Центральный призматический фокус
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(0, 0, 3, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }

        // 6.13. Сфокусированный солнечный луч жара (Гелиос)
        for (const sb of this.solarBeams) {
            ctx.save();
            const startY = sb.fromY - 24;

            // Сфокусированный луч концентрированного жара от короны к цели
            // Внешнее свечение луча
            ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
            ctx.lineWidth = 6;
            ctx.beginPath();
            ctx.moveTo(sb.fromX, startY);
            ctx.lineTo(sb.toX, sb.toY);
            ctx.stroke();

            // Золотой сердечник луча
            ctx.strokeStyle = '#fde047';
            ctx.lineWidth = 2.8;
            ctx.beginPath();
            ctx.moveTo(sb.fromX, startY);
            ctx.lineTo(sb.toX, sb.toY);
            ctx.stroke();

            // Ослепительно-белая сердцевина лазера
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.moveTo(sb.fromX, startY);
            ctx.lineTo(sb.toX, sb.toY);
            ctx.stroke();

            // Точка выжигания на цели (пятно контакта)
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(sb.toX, sb.toY, 3.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#f59e0b';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(sb.toX, sb.toY, 7, 0, Math.PI * 2);
            ctx.stroke();

            ctx.restore();
        }

        // 6.14. Кристаллические шпили (Алмаз)
        for (const cs of this.crystalSpires) {
            ctx.save();
            ctx.translate(cs.x, cs.y);
            const pulse = 1 + Math.sin(cs.elapsed * 5) * 0.08;
            ctx.scale(pulse, pulse);

            const h = cs.height || 32;
            const w = cs.width || 18;

            // Левая грань (светлая)
            ctx.fillStyle = '#7dd3fc';
            ctx.beginPath();
            ctx.moveTo(0, -h * 0.6);
            ctx.lineTo(-w * 0.5, 0);
            ctx.lineTo(-w * 0.35, h * 0.4);
            ctx.lineTo(0, h * 0.5);
            ctx.closePath();
            ctx.fill();

            // Правая грань (темная сапфировая)
            ctx.fillStyle = '#0284c7';
            ctx.beginPath();
            ctx.moveTo(0, -h * 0.6);
            ctx.lineTo(w * 0.5, 0);
            ctx.lineTo(w * 0.35, h * 0.4);
            ctx.lineTo(0, h * 0.5);
            ctx.closePath();
            ctx.fill();

            // Центральное ребро и сверкающий блик
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(0, -h * 0.6);
            ctx.lineTo(0, h * 0.5);
            ctx.stroke();

            // Внешняя сверкающая окантовка
            ctx.strokeStyle = '#e0f2fe';
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.moveTo(0, -h * 0.6);
            ctx.lineTo(w * 0.5, 0);
            ctx.lineTo(w * 0.35, h * 0.4);
            ctx.lineTo(0, h * 0.5);
            ctx.lineTo(-w * 0.35, h * 0.4);
            ctx.lineTo(-w * 0.5, 0);
            ctx.closePath();
            ctx.stroke();

            // Звездный блик на вершине
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(0, -h * 0.6, 2.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }

        // 6.15. Магматические лужи (Огненный)
        for (const mp of this.magmaPatches) {
            ctx.save();
            const prog = mp.elapsed / mp.duration;
            const alpha = Math.max(0, 1 - prog);
            ctx.globalAlpha = alpha;
            const mGrad = ctx.createRadialGradient(mp.x, mp.y, 2, mp.x, mp.y, mp.radius);
            mGrad.addColorStop(0, '#fef08a');
            mGrad.addColorStop(0.35, '#ea580c');
            mGrad.addColorStop(0.75, '#991b1b');
            mGrad.addColorStop(1, 'rgba(69, 10, 10, 0)');
            ctx.fillStyle = mGrad;
            ctx.beginPath();
            ctx.arc(mp.x, mp.y, mp.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        // 6.16. Ледяные сосульки (Мороз)
        for (const gi of this.glacialIcicles) {
            ctx.save();
            ctx.translate(gi.x, gi.y);
            const a = Math.atan2(gi.vy, gi.vx);
            ctx.rotate(a);

            // Крио-копье
            ctx.fillStyle = '#bae6fd';
            ctx.beginPath();
            ctx.moveTo(14, 0);
            ctx.lineTo(-10, -5);
            ctx.lineTo(-6, 0);
            ctx.lineTo(-10, 5);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.2;
            ctx.stroke();

            ctx.restore();
        }

        // Летающие фаерболы Огненного
        for (const fb of this.blazeFireballs) {
            ctx.save();
            ctx.translate(fb.x, fb.y);

            const fbGrad = ctx.createRadialGradient(0, 0, fb.radius * 0.2, 0, 0, fb.radius * 1.5);
            fbGrad.addColorStop(0, '#ffffff');
            fbGrad.addColorStop(0.3, '#fef08a');
            fbGrad.addColorStop(0.65, '#f97316');
            fbGrad.addColorStop(1, 'rgba(234, 88, 12, 0)');

            ctx.fillStyle = fbGrad;
            ctx.beginPath();
            ctx.arc(0, 0, fb.radius * 1.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#fef08a';
            ctx.beginPath();
            ctx.arc(0, 0, fb.radius * 0.7, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(0, 0, fb.radius * 0.35, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }

        // 6.17. ЭМИ-вспышки (Неон-Кибер)
        for (const emp of this.empBursts) {
            ctx.save();
            const prog = emp.elapsed / emp.duration;
            const alpha = Math.max(0, 1 - prog);
            const r = emp.radius + (emp.maxRadius - emp.radius) * prog;
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx.lineWidth = 3.0 * (1 - prog);
            ctx.beginPath();
            ctx.arc(emp.x, emp.y, r, 0, Math.PI * 2);
            ctx.stroke();

            ctx.strokeStyle = `rgba(244, 63, 94, ${alpha})`;
            ctx.lineWidth = 1.5;
            for (let i = 0; i < 4; i++) {
                const bA = (i / 4) * Math.PI * 2 + prog * 2;
                ctx.beginPath();
                ctx.arc(emp.x, emp.y, r, bA - 0.2, bA + 0.2);
                ctx.stroke();
            }
            ctx.restore();
        }

        // 6.18. Щупальца Бездны на Арене (Кракен)
        for (const at of this.arenaTentacles) {
            ctx.save();
            ctx.translate(at.x, at.y);

            const prog = at.elapsed / at.duration;
            const alpha = Math.min(1, Math.min(at.elapsed * 3, (1 - prog) * 3));
            ctx.globalAlpha = alpha;

            // 1. Темный портал-разрыв бездны на полу арены
            const portalGrad = ctx.createRadialGradient(0, 0, 4, 0, 0, 26);
            portalGrad.addColorStop(0, 'rgba(10, 2, 22, 0.95)');
            portalGrad.addColorStop(0.6, 'rgba(88, 28, 135, 0.6)');
            portalGrad.addColorStop(1, 'rgba(168, 85, 247, 0)');
            ctx.fillStyle = portalGrad;
            ctx.beginPath();
            ctx.ellipse(0, 0, 26, 14, 0, 0, Math.PI * 2);
            ctx.fill();

            // 2. Извивающееся щупальце, поднимающееся из портала
            const time = at.elapsed * 4 + at.animSeed;
            const waveX1 = Math.sin(time) * 12;
            const waveX2 = Math.cos(time * 1.3) * 16;
            const waveY = Math.sin(time * 0.8) * 6;

            ctx.strokeStyle = '#c084fc';
            ctx.lineWidth = 4.0;
            ctx.lineCap = 'round';
            ctx.fillStyle = 'rgba(88, 28, 135, 0.85)';

            ctx.beginPath();
            ctx.moveTo(-6, 0);
            ctx.bezierCurveTo(-10 + waveX1, -16 + waveY, 14 + waveX2, -32, 4 + waveX1, -44);
            ctx.bezierCurveTo(0 + waveX2, -32, -4 + waveX1, -16 + waveY, 6, 0);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Светящиеся присоски на щупальце
            ctx.fillStyle = '#f3e8ff';
            ctx.beginPath();
            ctx.arc(waveX1 * 0.5, -16 + waveY, 2.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(6 + waveX2 * 0.4, -28, 2.0, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }

        // 6.18. Щупальца Бездны на Арене (Кракен)
        for (const at of this.arenaTentacles) {
            ctx.save();
            ctx.translate(at.x, at.y);

            const prog = at.elapsed / at.duration;
            const alpha = Math.min(1, Math.min(at.elapsed * 3, (1 - prog) * 3));
            ctx.globalAlpha = alpha;

            // 1. Темный портал-разрыв бездны на полу арены
            const portalGrad = ctx.createRadialGradient(0, 0, 4, 0, 0, 26);
            portalGrad.addColorStop(0, 'rgba(10, 2, 22, 0.95)');
            portalGrad.addColorStop(0.6, 'rgba(88, 28, 135, 0.6)');
            portalGrad.addColorStop(1, 'rgba(168, 85, 247, 0)');
            ctx.fillStyle = portalGrad;
            ctx.beginPath();
            ctx.ellipse(0, 0, 26, 14, 0, 0, Math.PI * 2);
            ctx.fill();

            // 2. Извивающееся щупальце, поднимающееся из портала
            const time = at.elapsed * 4 + at.animSeed;
            const waveX1 = Math.sin(time) * 12;
            const waveX2 = Math.cos(time * 1.3) * 16;
            const waveY = Math.sin(time * 0.8) * 6;

            ctx.strokeStyle = '#c084fc';
            ctx.lineWidth = 4.0;
            ctx.lineCap = 'round';
            ctx.fillStyle = 'rgba(88, 28, 135, 0.85)';

            ctx.beginPath();
            ctx.moveTo(-6, 0);
            ctx.bezierCurveTo(-10 + waveX1, -16 + waveY, 14 + waveX2, -32, 4 + waveX1, -44);
            ctx.bezierCurveTo(0 + waveX2, -32, -4 + waveX1, -16 + waveY, 6, 0);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Светящиеся присоски на щупальце
            ctx.fillStyle = '#f3e8ff';
            ctx.beginPath();
            ctx.arc(waveX1 * 0.5, -16 + waveY, 2.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(6 + waveX2 * 0.4, -28, 2.0, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }

        // 7. Частицы
        for (const p of this.particles) {
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            if (p.shape === 'diamond') {
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.beginPath();
                ctx.moveTo(0, -p.size * 1.3);
                ctx.lineTo(p.size, 0);
                ctx.lineTo(0, p.size * 1.3);
                ctx.lineTo(-p.size, 0);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            } else if (p.shape === 'rect') {
                ctx.fillRect(p.x - p.size, p.y - p.size, p.size * 2, p.size * 2);
            } else {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // 8. Всплывающий текст
        for (const ft of this.floatingTexts) {
            const fontSize = Math.round((ft.isCrit ? 16 : 13) * ft.scale);
            ctx.font = `900 ${fontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
            ctx.textAlign = 'center';

            // Тень текста для 100% читаемости на любом фоне
            ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            ctx.globalAlpha = ft.alpha * 0.85;
            ctx.fillText(ft.text, ft.x + 1, ft.y + 1);

            // Основной цвет
            ctx.fillStyle = ft.color;
            ctx.globalAlpha = ft.alpha;
            ctx.fillText(ft.text, ft.x, ft.y);
        }

        ctx.restore();
    }
}
