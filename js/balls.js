// =============================================================================
// КАТАЛОГ ВСЕХ 29 УНИКАЛЬНЫХ ШАРОВ (БАЛАНСНЫЕ ХАРАКТЕРИСТИКИ И АБИЛКИ)
// =============================================================================

const BALL_CATALOG = [
    // --- COMMON (4 шара) - Высокая живучесть, стабильный базовый урон ---
    {
        id: 'spike',
        name: 'Шип',
        rarity: 'COMMON',
        maxHp: 125,
        baseDamage: 8,
        speed: 2.45,
        mass: 1.55,
        radius: 38,
        abilityName: 'Колючий ответ',
        abilityDesc: 'При получении не менее 5 урона с шансом 35% выпускает шипы, нанося противнику 5 урона (кд 0.8 сек).',
        triggerType: 'on_damaged'
    },
    {
        id: 'clockwork',
        name: 'Часовщик',
        rarity: 'COMMON',
        maxHp: 113,
        baseDamage: 6,
        speed: 2.55,
        mass: 1.10,
        radius: 35,
        abilityName: 'Зубчатый разгон',
        abilityDesc: 'Каждые 2 отскока дают шестерню (макс. 2). Следующий удар наносит +5/+8 урона и дает +10% скорости на 0.65 сек.',
        triggerType: 'charge_bounce'
    },
    {
        id: 'cyber',
        name: 'Неон-Кибер',
        rarity: 'COMMON',
        maxHp: 99,
        baseDamage: 6,
        speed: 3.05,
        mass: 0.90,
        radius: 34,
        abilityName: 'Пиксельный рывок',
        abilityDesc: 'Каждые 2.3 сек ускоряется на +22% на 0.35 сек. Удар во время рывка наносит +5 доп. урона.',
        triggerType: 'quick_timer'
    },
    {
        id: 'saw',
        name: 'Пила',
        rarity: 'COMMON',
        maxHp: 104,
        baseDamage: 7,
        speed: 2.65,
        mass: 1.15,
        radius: 36,
        abilityName: 'Кровопускание',
        abilityDesc: 'Каждый 3-й удар накладывает кровотечение: противник теряет 2 HP каждые 0.5 сек (3 тика, всего 6 урона).',
        triggerType: 'charge_hit'
    },

    // --- RARE (9 шаров) - Контроль, дебаффы, тактическая гибкость ---
    {
        id: 'blaze',
        name: 'Огненный',
        rarity: 'RARE',
        maxHp: 98,
        baseDamage: 7,
        speed: 2.75,
        mass: 1.05,
        radius: 35,
        abilityName: 'Кольцо пламени',
        abilityDesc: 'Каждые 2 отскока от стены зажигает огненный шар (макс. 3). При таране шары взрываются, нанося по 3 урона и поджигая врага на 2 сек.',
        triggerType: 'charge_bounce'
    },
    {
        id: 'frosty',
        name: 'Мороз',
        rarity: 'RARE',
        maxHp: 108,
        baseDamage: 6,
        speed: 2.50,
        mass: 1.20,
        radius: 36,
        abilityName: 'Ледяной панцирь',
        abilityDesc: 'Удар замедляет врага на 25% на 1.2 сек. Раз в 5 сек удар замораживает врага на 1 сек (скорость -55%).',
        triggerType: 'hit'
    },
    {
        id: 'vampire',
        name: 'Вампир',
        rarity: 'RARE',
        maxHp: 93,
        baseDamage: 6,
        speed: 2.80,
        mass: 0.95,
        radius: 34,
        abilityName: 'Жизненная лента',
        abilityDesc: 'С шансом 35% при ударе выпускает алые клыки: вытягивает 6 HP из врага и восстанавливает себе 4 HP.',
        triggerType: 'hit'
    },
    {
        id: 'toxic',
        name: 'Токсик',
        rarity: 'RARE',
        maxHp: 112,
        baseDamage: 5,
        speed: 2.45,
        mass: 1.30,
        radius: 37,
        abilityName: 'Едкая лужа',
        abilityDesc: 'Каждые 3 сек оставляет токсичную лужу на 2.5 сек. Враг в луже замедляется на 20% и получает 2 урона/сек.',
        triggerType: 'quick_timer'
    },
    {
        id: 'magnet',
        name: 'Магнит',
        rarity: 'RARE',
        maxHp: 106,
        baseDamage: 6,
        speed: 2.60,
        mass: 1.15,
        radius: 36,
        abilityName: 'Полярный захват',
        abilityDesc: 'Каждые 3.5 сек активирует мощное магнитное поле: притягивает или отталкивает врага, нарушая траекторию.',
        triggerType: 'quick_timer'
    },
    {
        id: 'ninja',
        name: 'Сюрикен',
        rarity: 'RARE',
        maxHp: 89,
        baseDamage: 8,
        speed: 3.10,
        mass: 0.85,
        radius: 34,
        abilityName: 'Сюрикен-оглушение',
        abilityDesc: 'Каждые 3 отскока следующий удар наносит +4 урона и оглушает врага на 0.45 сек.',
        triggerType: 'charge_bounce'
    },
    {
        id: 'cyborg',
        name: 'Киборг',
        rarity: 'RARE',
        maxHp: 118,
        baseDamage: 6,
        speed: 2.40,
        mass: 1.35,
        radius: 37,
        abilityName: 'Титановый щит',
        abilityDesc: 'На старте раунда получает титановый энергощит прочностью 18 HP, поглощающий входящий урон.',
        triggerType: 'passive'
    },
    {
        id: 'sand',
        name: 'Скарабей',
        rarity: 'RARE',
        maxHp: 104,
        baseDamage: 6,
        speed: 2.65,
        mass: 1.10,
        radius: 35,
        abilityName: 'Песчаная буря',
        abilityDesc: 'При падении HP ниже 50% поднимает песчаную бурю: +15% к скорости и 30% шанс уклонения от ударов.',
        triggerType: 'low_hp'
    },
    {
        id: 'wisp',
        name: 'Светляк',
        rarity: 'RARE',
        maxHp: 91,
        baseDamage: 5,
        speed: 2.95,
        mass: 0.85,
        radius: 34,
        abilityName: 'Эфирные крылья',
        abilityDesc: 'Пассивно восстанавливает 1 HP каждые 2 сек. При HP < 40% расправляет крылья: скорость +25%, реген удваивается.',
        triggerType: 'passive'
    },

    // --- EPIC (7 шаров) - Масштабные способности, урон по площади ---
    {
        id: 'titan',
        name: 'Титан',
        rarity: 'EPIC',
        maxHp: 132,
        baseDamage: 8,
        speed: 2.25,
        mass: 1.70,
        radius: 39,
        abilityName: 'Сейсмоудар',
        abilityDesc: 'Каждый удар о стену сотрясает арену, нанося врагу 3 урона и отбрасывая его мощной волной.',
        triggerType: 'wall'
    },
    {
        id: 'boomer',
        name: 'Подрывник',
        rarity: 'EPIC',
        maxHp: 96,
        baseDamage: 7,
        speed: 2.70,
        mass: 1.05,
        radius: 35,
        abilityName: 'Часовой заряд',
        abilityDesc: 'Каждые 2.8 сек бросает тикающую мину. Через 1.2 сек мина детонирует с радиусом 80px (8 урона + разлет).',
        triggerType: 'quick_timer'
    },
    {
        id: 'mirage',
        name: 'Мираж',
        rarity: 'EPIC',
        maxHp: 92,
        baseDamage: 6,
        speed: 2.85,
        mass: 0.90,
        radius: 34,
        abilityName: 'Голографический клон',
        abilityDesc: 'Каждые 4 сек создает свою точную иллюзорную копию на 2.5 сек. Клон отвлекает и наносит 35% урона.',
        triggerType: 'quick_timer'
    },
    {
        id: 'laser',
        name: 'Протон',
        rarity: 'EPIC',
        maxHp: 94,
        baseDamage: 6,
        speed: 2.90,
        mass: 0.95,
        radius: 34,
        abilityName: 'Протонный луч',
        abilityDesc: 'Каждые 2 отскока от стены стреляет концентрированным лазерным лучом через арену (7 урона при пересечении).',
        triggerType: 'charge_bounce'
    },
    {
        id: 'meteor',
        name: 'Метеор',
        rarity: 'EPIC',
        maxHp: 110,
        baseDamage: 9,
        speed: 2.55,
        mass: 1.45,
        radius: 38,
        abilityName: 'Космический таран',
        abilityDesc: 'После рикошета разгоняется в гиперзвуковой огненный болид. Следующий таран наносит +8 доп. урона.',
        triggerType: 'wall'
    },
    {
        id: 'storm',
        name: 'Тайфун',
        rarity: 'EPIC',
        maxHp: 100,
        baseDamage: 6,
        speed: 2.80,
        mass: 1.00,
        radius: 35,
        abilityName: 'Вихревой торнадо',
        abilityDesc: 'Каждые 2 удара о стену создает странствующий торнадо, затягивающий врага и наносящий 2 урона/сек.',
        triggerType: 'charge_wall'
    },
    {
        id: 'crystal',
        name: 'Алмаз',
        rarity: 'EPIC',
        maxHp: 116,
        baseDamage: 6,
        speed: 2.50,
        mass: 1.30,
        radius: 36,
        abilityName: 'Призматическое зеркало',
        abilityDesc: 'Каждые 3 отскока активирует алмазную призму: следующий полученный удар отражает 50% урона обратно во врага.',
        triggerType: 'charge_bounce'
    },

    // --- LEGENDARY (5 шаров) - Разрушительные механики, высшая сила ---
    {
        id: 'tesla',
        name: 'Тесла',
        rarity: 'LEGENDARY',
        maxHp: 102,
        baseDamage: 7,
        speed: 2.75,
        mass: 1.05,
        radius: 35,
        abilityName: 'Электродуга',
        abilityDesc: 'Каждые 1.8 сек выпускает высоковольтный разряд в ближайшего противника (5 урона + электрошок на 0.5 сек).',
        triggerType: 'quick_timer'
    },
    {
        id: 'phantom',
        name: 'Фантом',
        rarity: 'LEGENDARY',
        maxHp: 95,
        baseDamage: 7,
        speed: 2.90,
        mass: 0.90,
        radius: 34,
        abilityName: 'Астральный переход',
        abilityDesc: 'При падении HP ниже 35% становится нематериальным на 1.5 сек (неуязвимость) и восстанавливает 10 HP.',
        triggerType: 'low_hp'
    },
    {
        id: 'dragon',
        name: 'Дракон',
        rarity: 'LEGENDARY',
        maxHp: 114,
        baseDamage: 8,
        speed: 2.60,
        mass: 1.25,
        radius: 37,
        abilityName: 'Дыхание дракона',
        abilityDesc: 'Каждые 3 сек выдыхает конус всепожирающего пламени по направлению движения (8 урона + горение на 3 сек).',
        triggerType: 'quick_timer'
    },
    {
        id: 'solar',
        name: 'Гелиос',
        rarity: 'LEGENDARY',
        maxHp: 108,
        baseDamage: 7,
        speed: 2.70,
        mass: 1.15,
        radius: 36,
        abilityName: 'Солнечная вспышка',
        abilityDesc: 'Каждые 4 отскока накапливает солнечную энергию и ослепляет врага вспышкой (6 урона + замедление 40% на 1.5 сек).',
        triggerType: 'charge_bounce'
    },
    {
        id: 'kraken',
        name: 'Кракен',
        rarity: 'LEGENDARY',
        maxHp: 122,
        baseDamage: 8,
        speed: 2.45,
        mass: 1.40,
        radius: 38,
        abilityName: 'Щупальца бездны',
        abilityDesc: 'Каждые 5 сек окутывается щупальцами (+6 урона к удару). Наносит сокрушительный удар щупальцами бездны: накладывает Дизармор на 3 сек (разрушенный щит, +30% входящего урона).',
        triggerType: 'quick_timer'
    },

    // --- MYTHIC (3 шара) - Сверхмощные ультимативные эффекты ---
    {
        id: 'vortex',
        name: 'Сингулярность',
        rarity: 'MYTHIC',
        maxHp: 105,
        baseDamage: 7,
        speed: 2.80,
        mass: 1.10,
        radius: 36,
        abilityName: 'Черная дыра',
        abilityDesc: 'Каждые 4 удара о стену разрывает гравитацию, создавая черную дыру на 2 сек (притяжение + 3 тика по 3 урона).',
        triggerType: 'charge_wall'
    },
    {
        id: 'nuke',
        name: 'Атом',
        rarity: 'MYTHIC',
        maxHp: 90,
        baseDamage: 8,
        speed: 2.85,
        mass: 0.95,
        radius: 35,
        abilityName: 'Критическая масса',
        abilityDesc: 'Каждые 3 отскока накапливает нестабильный радиоактивный заряд. 4-й таран вызывает ядерный взрыв: 12 урона врагу!',
        triggerType: 'charge_hit'
    },
    {
        id: 'zeus',
        name: 'Зевс',
        rarity: 'MYTHIC',
        maxHp: 110,
        baseDamage: 8,
        speed: 2.65,
        mass: 1.20,
        radius: 37,
        abilityName: 'Гнев Олимпа',
        abilityDesc: 'Каждый 2-й удар о стену призывает небесную молнию Зевса, сокрушающую врага (-14 HP)!',
        triggerType: 'charge_wall'
    },

    // --- TRANSCENDENT (1 шар — Ультра-Редкий) ---
    {
        id: 'berserk',
        name: 'Берсерк',
        rarity: 'TRANSCENDENT',
        maxHp: 120,
        baseDamage: 1,
        speed: 2.70,
        mass: 1.30,
        radius: 38,
        abilityName: 'Доспех Берсерка',
        abilityDesc: 'При HP <= 40 активирует Доспех Берсерка: издает яростный рев, тело перестает наносить урон тарана, но достает колоссальным мечом Dragon Slayer (10 урона + исцеление +3 HP за удар с кд 1.5с). Не получает больше 1 урона за удар!',
        triggerType: 'low_hp'
    }
];


class BattleBall {
    constructor(template, isPlayer = true) {
        this.template = template;
        this.id = template.id;
        this.name = template.name;
        this.rarity = template.rarity;
        this.maxHp = template.maxHp;
        this.hp = template.maxHp;
        this.baseDamage = template.baseDamage;
        this.baseSpeed = template.speed;
        this.currentSpeed = template.speed;
        this.mass = template.mass;
        this.radius = template.radius;
        this.abilityName = template.abilityName;
        this.abilityDesc = template.abilityDesc;
        this.triggerType = template.triggerType;

        this.isPlayer = isPlayer;
        this.pos = new Vector2(0, 0);
        this.vel = new Vector2(0, 0);

        // Угол ориентации шара (направлен строго по вектору движения, не крутится сам)
        this.facingAngle = 0;
        this.aimAngle = isPlayer ? -Math.PI / 2 : Math.PI / 2;

        // Сохранение вектора скорости перед оглушением
        this.savedVel = null;

        // Состояния и таймеры способностей (по ТЗ)
        this.bounceCount = 0;             // Счетчик отскоков для charge_bounce
        this.gearCharges = 0;             // Часовщик (0..2 шестерни)
        this.gearChargeTimer = 0;         // Часовщик (1.0 сек окно)
        this.clockworkBoostTimer = 0;     // Часовщик (+10% скорости на 0.65 сек)
        this.quickTimer = 0;             // Локальный таймер для quick_timer (cyber, phantom, solar)
        this.cyberBoostTimer = 0;         // Неон-Кибер (0.35 сек ускорение +22%)
        this.cyberBonusTimer = 0;         // Неон-Кибер (0.6 сек окно +5 урона)
        this.bleedTimer = 0;             // Мясник (1.2 сек)
        this.bleedTickTimer = 0;         // Мясник (интервал 0.4 сек)
        this.sawCooldown = 0;            // Мясник (0.8 сек)
        this.burnTimer = 0;              // Огненный / Дракон
        this.burnTickTimer = 0;          // Огненный (0.4 сек) / Дракон (0.3 сек)
        this.burnSource = null;          // 'blaze' или 'dragon'
        this.blazeCooldown = 0;          // Огненный (0.9 сек)
        this.freezeTimer = 0;            // Мороз (0.75 сек, -35% скорости, строго Frosty!)
        this.frostyCooldown = 0;         // Мороз (1.2 сек)
        this.vampireCooldown = 0;        // Вампир (1.0 сек)
        this.toxicCooldown = 0;          // Токсик (0.9 сек)
        this.poisonTimer = 0;            // Токсик (0.9 сек)
        this.poisonTickTimer = 0;        // Токсик (интервал 0.3 сек)
        this.magnetFieldTimer = 0;       // Магнит (0.7 сек стяжка)
        this.ninjaCharged = false;       // Сюрикен (заряд на 1.0 сек)
        this.ninjaChargeTimer = 0;       // Сюрикен (1.0 сек)
        this.stunTimer = 0;              // Сюрикен (0.45 сек Стан, строго Ninja!)
        this.stunRecoverTimer = 0;       // Восстановление скорости (0.12 сек)
        this.cyborgAccum = 0;            // Киборг накопленный урон (порог 10)
        this.cyborgShieldActive = false; // Киборг щит бронепластины (-40% макс 6)
        this.cyborgCooldown = 0;         // Киборг кулдаун (1.6 сек)
        this.sandSlowTimer = 0;          // Скарабей замедление (0.65 сек, -20%)
        this.wispDodgeActive = false;    // Светляк окно уклонения (0.5 сек, -55%)
        this.wispDodgeTimer = 0;
        this.wispCooldown = 0;           // Светляк кулдаун (2.4 сек)
        this.titanAccum = 0;             // Титан накопленный урон (порог 12)
        this.titanCooldown = 0;          // Титан кулдаун (0.9 сек)
        this.boomerCooldown = 0;         // Подрывник кулдаун (1.2 сек)
        this.boomerDelayedBomb = null;   // { x, y, timer: 0.22, enemy }
        this.mirageDecoyTimer = 0;       // Мираж обманки (0.55 сек)
        this.mirageBonusTimer = 0;       // Мираж бонус урона (0.8 сек, +5)
        this.mirageCooldown = 0;         // Мираж кулдаун (1.3 сек)
        this.laserCooldown = 0;          // Протон кулдаун (1.5 сек)
        this.meteorCharged = false;      // Метеор заряд на 1.0 сек (+10 урона)
        this.meteorChargeTimer = 0;
        this.stormFieldTimer = 0;        // Тайфун вихрь (0.8 сек)
        this.stormTickTimer = 0;         // Тайфун (интервал 0.2 сек)
        this.stormFieldCenter = null;    // { x, y }
        this.crystalCooldown = 0;        // Алмаз кулдаун (1.4 сек)
        this.teslaCooldown = 0;          // Тесла кулдаун (1.1 сек)
        this.teslaSlowTimer = 0;         // Тесла замедление (0.4 сек, -20%)
        this.phantomEchoReady = false;   // Фантом готовность эхо (0.8 сек)
        this.phantomEchoTimer = 0;
        this.phantomPendingHit = null;   // { timer: 0.18, enemy }
        this.dragonCooldown = 0;         // Дракон кулдаун (1.3 сек)
        this.krakenFieldTimer = 0;       // Кракен хватка (0.6 сек)
        this.vortexFieldTimer = 0;       // Сингулярность поле (0.75 сек)
        this.vortexTickTimer = 0;        // Сингулярность (интервал 0.25 сек)
        this.vortexCooldown = 0;         // Сингулярность кулдаун (1.8 сек)
        this.vortexCenter = null;
        this.isotopeCharges = 0;         // Атом (0..3 изотопа)
        this.nukeCooldown = 0;           // Атом кулдаун между взрывами (0.4 сек)
        this.nukeResidualPulses = 0;     // Атом остаточные импульсы (2 шт по 2 урона)
        this.nukeResidualTimer = 0;      // Атом интервал (0.25 сек)
        this.zeusHitCount = 0;           // Зевс счётчик ударов (каждый 2-й)
        this.zeusCooldown = 0;           // Зевс кулдаун (0.8 сек)
        this.zeusSlowTimer = 0;          // Зевс замедление (0.35 сек, -25%)
        this.spikeCooldown = 0;          // Шип кулдаун (0.8 сек)

        // Берсерк (TRANSCENDENT)
        this.berserkPhase2Active = false;
        this.berserkPhase2Triggered = false;
        this.berserkRoarTimer = 0;
        this.berserkRoarPlayed = false;
        this.berserkRoarPulse = 0;
        this.berserkSwordTimer = 1.5;
        this.berserkSwingActive = false;
        this.berserkSwingTimer = 0;
        this.berserkSwingDuration = 0.36;
        this.berserkAimAngle = 0;
        this.berserkHitThisSwing = false;
        this.berserkPrevSwingOffset = 0.35;
        this.berserkReachDist = 185;
        this.berserkBloodTrail = [];
        this.berserkLeftEyeTrail = [];
        this.berserkRightEyeTrail = [];
        this.berserkSwordTipTrail = [];
        this.berserkSwordSweepTrail = [];
        this.disarmorTimer = 0;
        this.animTime = 0;
    }

    calcCurrentSpeed() {
        if (this.stunTimer > 0) return 0;

        // Положительные модификаторы скорости
        let boostMult = 1.0;
        if (this.cyberBoostTimer > 0) boostMult *= 1.22;
        if (this.clockworkBoostTimer > 0) boostMult *= 1.10;
        if (this.id === 'berserk' && (this.berserkPhase2Active || this.hp <= 40)) {
            boostMult *= 1.25; // +25% скорости в Доспехе Берсерка
        }


        // Замедления (по правилу diminishing returns, общий кап 55%)
        let slow1 = this.freezeTimer > 0 ? 0.35 : 0;
        let slow2 = this.sandSlowTimer > 0 ? 0.20 : 0;
        let slow3 = this.teslaSlowTimer > 0 ? 0.20 : 0;
        let slow4 = this.zeusSlowTimer > 0 ? 0.25 : 0;

        let combinedSlow = 1 - (1 - slow1) * (1 - slow2) * (1 - slow3) * (1 - slow4);
        combinedSlow = Math.min(0.55, combinedSlow);

        let spd = this.baseSpeed * boostMult * (1 - combinedSlow);
        // Не может превышать 3.4 px/frame (п. 2.1 ТЗ)
        spd = Math.min(3.4, Math.max(0.6, spd));
        return spd;
    }

    applyStun(duration) {
        if (this.stunTimer <= 0) {
            this.savedVel = this.vel.clone();
            if (this.savedVel.mag() < 0.1) {
                const a = this.facingAngle || (this.isPlayer ? -Math.PI / 2 : Math.PI / 2);
                this.savedVel.set(Math.cos(a) * this.baseSpeed, Math.sin(a) * this.baseSpeed);
            }
        }
        this.stunTimer = Math.max(this.stunTimer, duration);
        this.vel.set(0, 0);
    }

    maintainSpeed() {
        this.currentSpeed = this.calcCurrentSpeed();
        if (this.stunTimer > 0) {
            this.vel.set(0, 0);
            return;
        }
        const m = this.vel.mag();
        if (m > 0.0001) {
            this.vel.normalize().scale(this.currentSpeed);
        } else {
            const a = this.facingAngle || (this.isPlayer ? -Math.PI / 2 : Math.PI / 2);
            this.vel.set(Math.cos(a) * this.currentSpeed, Math.sin(a) * this.currentSpeed);
        }
    }

    update(dt, enemy, particles) {
        // При HP <= 0 раунд завершается, все активные эффекты отменяются (п. 2.3 ТЗ)
        if (this.hp <= 0) {
            this.vel.set(0, 0);
            this.nukeResidualPulses = 0;
            this.boomerDelayedBomb = null;
            this.phantomPendingHit = null;
            this.stormFieldTimer = 0;
            this.vortexFieldTimer = 0;
            this.magnetFieldTimer = 0;
            return;
        }

        this.animTime += dt;

        // Обновление кулдаунов способностей
        if (this.spikeCooldown > 0) this.spikeCooldown -= dt;
        if (this.sawCooldown > 0) this.sawCooldown -= dt;
        if (this.blazeCooldown > 0) this.blazeCooldown -= dt;
        if (this.frostyCooldown > 0) this.frostyCooldown -= dt;
        if (this.vampireCooldown > 0) this.vampireCooldown -= dt;
        if (this.toxicCooldown > 0) this.toxicCooldown -= dt;
        if (this.cyborgCooldown > 0) this.cyborgCooldown -= dt;
        if (this.wispCooldown > 0) this.wispCooldown -= dt;
        if (this.titanCooldown > 0) this.titanCooldown -= dt;
        if (this.boomerCooldown > 0) this.boomerCooldown -= dt;
        if (this.mirageCooldown > 0) this.mirageCooldown -= dt;
        if (this.laserCooldown > 0) this.laserCooldown -= dt;
        if (this.teslaCooldown > 0) this.teslaCooldown -= dt;
        if (this.dragonCooldown > 0) this.dragonCooldown -= dt;
        if (this.vortexCooldown > 0) this.vortexCooldown -= dt;
        if (this.nukeCooldown > 0) this.nukeCooldown -= dt;
        if (this.zeusCooldown > 0) this.zeusCooldown -= dt;
        if (this.crystalCooldown > 0) this.crystalCooldown -= dt;

        // Временные баффы и окна
        if (this.gearChargeTimer > 0) {
            this.gearChargeTimer -= dt;
            if (this.gearChargeTimer <= 0) this.gearCharges = 0;
        }
        if (this.clockworkBoostTimer > 0) this.clockworkBoostTimer -= dt;
        if (this.cyberBoostTimer > 0) this.cyberBoostTimer -= dt;
        if (this.cyberBonusTimer > 0) this.cyberBonusTimer -= dt;
        if (this.ninjaChargeTimer > 0) {
            this.ninjaChargeTimer -= dt;
            if (this.ninjaChargeTimer <= 0) this.ninjaCharged = false;
        }
        if (this.meteorChargeTimer > 0) {
            this.meteorChargeTimer -= dt;
            if (this.meteorChargeTimer <= 0) this.meteorCharged = false;
        }
        if (this.mirageBonusTimer > 0) this.mirageBonusTimer -= dt;
        if (this.mirageDecoyTimer > 0) this.mirageDecoyTimer -= dt;
        if (this.wispDodgeTimer > 0) {
            this.wispDodgeTimer -= dt;
            if (this.wispDodgeTimer <= 0) this.wispDodgeActive = false;
        }
        if (this.phantomEchoTimer > 0) {
            this.phantomEchoTimer -= dt;
            if (this.phantomEchoTimer <= 0) this.phantomEchoReady = false;
        }

        // Замедления
        if (this.freezeTimer > 0) this.freezeTimer -= dt;
        if (this.sandSlowTimer > 0) this.sandSlowTimer -= dt;
        if (this.teslaSlowTimer > 0) this.teslaSlowTimer -= dt;
        if (this.zeusSlowTimer > 0) this.zeusSlowTimer -= dt;

        // 1. Обработка оглушения (только Сюрикен)
        if (this.stunTimer > 0) {
            this.stunTimer -= dt;
            this.vel.set(0, 0);
            if (this.stunTimer <= 0) {
                // Плавное восстановление скорости за 0.12 сек (п. 10 ТЗ)
                if (this.savedVel && this.savedVel.mag() > 0.1) {
                    this.vel = this.savedVel.clone().normalize().scale(this.calcCurrentSpeed());
                } else {
                    const a = this.facingAngle || (this.isPlayer ? -Math.PI / 2 : Math.PI / 2);
                    this.vel.set(Math.cos(a) * this.calcCurrentSpeed(), Math.sin(a) * this.calcCurrentSpeed());
                }
            }
            return;
        }

        // 2. Периодический урон от Кровотечения (Мясник)
        if (this.bleedTimer > 0) {
            this.bleedTimer -= dt;
            this.bleedTickTimer -= dt;
            if (this.bleedTickTimer <= 0) {
                this.bleedTickTimer = 0.4;
                const dmg = 2;
                this.hp = Math.max(0, this.hp - dmg);
                if (particles) {
                    particles.addDamageText(this.pos.x, this.pos.y - 20, `-${dmg}`, '#ef4444');
                    particles.addBleedSplatter(this.pos.x, this.pos.y, 6);
                }
            }
        }

        // 3. Периодический урон от Горения (Огненный / Дракон)
        if (this.burnTimer > 0) {
            this.burnTimer -= dt;
            this.burnTickTimer -= dt;
            if (this.burnTickTimer <= 0) {
                this.burnTickTimer = (this.burnSource === 'dragon') ? 0.3 : 0.4;
                const dmg = 2;
                this.hp = Math.max(0, this.hp - dmg);
                if (particles) {
                    particles.addDamageText(this.pos.x, this.pos.y - 20, `-${dmg}`, '#f97316');
                    particles.addSparks(this.pos.x, this.pos.y, '#f97316', 5, 2.5);
                }
            }
        }

        // 4. Периодический урон от Яда (Токсик)
        if (this.poisonTimer > 0) {
            this.poisonTimer -= dt;
            this.poisonTickTimer -= dt;
            if (this.poisonTickTimer <= 0) {
                this.poisonTickTimer = 0.3;
                const dmg = 2;
                this.hp = Math.max(0, this.hp - dmg);
                if (particles) {
                    particles.addDamageText(this.pos.x, this.pos.y - 20, `-${dmg}`, '#84cc16');
                    particles.addAcidSplash(this.pos.x, this.pos.y);
                }
            }
        }

        // 5. Отложенный заряд Подрывника (Boomer)
        if (this.boomerDelayedBomb) {
            this.boomerDelayedBomb.timer -= dt;
            if (this.boomerDelayedBomb.timer <= 0) {
                const bomb = this.boomerDelayedBomb;
                this.boomerDelayedBomb = null;
                if (bomb.enemy && bomb.enemy.hp > 0 && this.hp > 0) {
                    const dist = Math.hypot(bomb.enemy.pos.x - bomb.x, bomb.enemy.pos.y - bomb.y);
                    const isClose = dist <= this.radius * 1.2;
                    const dmg = isClose ? 9 : 5;
                    bomb.enemy.takeDamage(dmg, particles, true, this);
                    const push = bomb.enemy.pos.clone().sub(new Vector2(bomb.x, bomb.y)).normalize().scale(3.5);
                    bomb.enemy.vel.add(push);
                    bomb.enemy.maintainSpeed();
                    sounds.playExplosion();
                    if (particles) {
                        particles.addDamageText(bomb.enemy.pos.x, bomb.enemy.pos.y - 28, `КОНТАКТНЫЙ ЗАРЯД -${dmg}`, '#fb923c', true);
                        particles.addSparks(bomb.x, bomb.y, '#fdba74', 14, 4.0, 2.0, 4.0);
                        particles.triggerShake(5, 0.15);
                    }
                }
            }
        }

        // 6. Отложенное эхо Фантома (Phantom)
        if (this.phantomPendingHit) {
            this.phantomPendingHit.timer -= dt;
            if (this.phantomPendingHit.timer <= 0) {
                const hit = this.phantomPendingHit;
                this.phantomPendingHit = null;
                if (hit.enemy && hit.enemy.hp > 0 && this.hp > 0) {
                    hit.enemy.takeDamage(5, particles, false, this);
                    sounds.playBallHit(0.8);
                    if (particles) {
                        particles.addDamageText(hit.enemy.pos.x, hit.enemy.pos.y - 28, 'СПЕКТРАЛЬНОЕ ЭХО -5', '#818cf8', true);
                        particles.addSparks(hit.enemy.pos.x, hit.enemy.pos.y, '#818cf8', 8, 3.0);
                    }
                }
            }
        }

        // 7. Поле Тайфуна (Storm)
        if (this.stormFieldTimer > 0 && this.stormFieldCenter) {
            this.stormFieldTimer -= dt;
            this.stormTickTimer -= dt;
            if (this.stormTickTimer <= 0) {
                this.stormTickTimer = 0.2;
                if (enemy && enemy.hp > 0) {
                    const dist = Math.hypot(enemy.pos.x - this.stormFieldCenter.x, enemy.pos.y - this.stormFieldCenter.y);
                    if (dist <= this.radius * 2.4) {
                        enemy.takeDamage(2, particles, false, this);
                        const tangent = new Vector2(-(enemy.pos.y - this.stormFieldCenter.y), enemy.pos.x - this.stormFieldCenter.x).normalize().scale(0.18 * enemy.currentSpeed);
                        enemy.vel.add(tangent);
                        enemy.maintainSpeed();
                        if (particles) {
                            particles.addDamageText(enemy.pos.x, enemy.pos.y - 20, 'ЦИКЛОН -2', '#38bdf8');
                            particles.addSparks(enemy.pos.x, enemy.pos.y, '#7dd3fc', 4, 2.5);
                        }
                    }
                }
            }
        }

        // 8. Поле Сингулярности (Vortex)
        if (this.vortexFieldTimer > 0 && this.vortexCenter) {
            this.vortexFieldTimer -= dt;
            this.vortexTickTimer -= dt;
            if (this.vortexTickTimer <= 0) {
                this.vortexTickTimer = 0.25;
                if (enemy && enemy.hp > 0) {
                    const dist = Math.hypot(enemy.pos.x - this.vortexCenter.x, enemy.pos.y - this.vortexCenter.y);
                    if (dist <= this.radius * 3.2) {
                        enemy.takeDamage(3, particles, false, this);
                        const pull = new Vector2(this.vortexCenter.x - enemy.pos.x, this.vortexCenter.y - enemy.pos.y).normalize().scale(2.8);
                        enemy.vel.add(pull);
                        enemy.maintainSpeed();
                        if (particles) {
                            particles.addDamageText(enemy.pos.x, enemy.pos.y - 20, 'ГРАВИТАЦИЯ -3', '#c084fc');
                            particles.addSparks(enemy.pos.x, enemy.pos.y, '#c084fc', 5, 2.5);
                        }
                    }
                }
            }
        }

        // 9. Стяжка Магнита (Magnet)
        if (this.magnetFieldTimer > 0 && enemy && enemy.hp > 0) {
            this.magnetFieldTimer -= dt;
            const dist = Math.hypot(enemy.pos.x - this.pos.x, enemy.pos.y - this.pos.y);
            if (dist <= this.radius * 2.8) {
                const pull = this.pos.clone().sub(enemy.pos).normalize().scale(2.2);
                enemy.vel.add(pull);
                enemy.maintainSpeed();
            }
        }

        // 10. Хватка Кракена (Kraken)
        if (this.krakenFieldTimer > 0 && enemy && enemy.hp > 0) {
            this.krakenFieldTimer -= dt;
            const pull = this.pos.clone().sub(enemy.pos).normalize().scale(3.5);
            enemy.vel.add(pull);
            enemy.maintainSpeed();
        }

        // 11. Остаточный радиационный фронт Атома (Nuke)
        if (this.nukeResidualPulses > 0) {
            this.nukeResidualTimer -= dt;
            if (this.nukeResidualTimer <= 0) {
                this.nukeResidualTimer = 0.25;
                this.nukeResidualPulses--;
                if (enemy && enemy.hp > 0 && this.hp > 0) {
                    const dist = Math.hypot(enemy.pos.x - this.pos.x, enemy.pos.y - this.pos.y);
                    if (dist <= this.radius * 2.7) {
                        enemy.takeDamage(2, particles, false, this);
                        if (particles) {
                            particles.addDamageText(enemy.pos.x, enemy.pos.y - 20, 'РАДИАЦИЯ -2', '#f43f5e');
                            particles.addSparks(enemy.pos.x, enemy.pos.y, '#f43f5e', 4, 2.0);
                        }
                    }
                }
            }
        }

        // 12. ТАЙМЕРЫ QUICK_TIMER:
        // А) Неон-Кибер (интервал 2.3 сек)
        if (this.id === 'cyber' && this.hp > 0) {
            this.quickTimer += dt;
            if (this.quickTimer >= 2.3) {
                this.quickTimer = 0;
                this.cyberBoostTimer = 0.35;
                this.cyberBonusTimer = 0.6;
                this.maintainSpeed();
                sounds.playLaunch();
                if (particles) {
                    particles.addDigitalGlitch(this.pos.x, this.pos.y);
                    particles.addDamageText(this.pos.x, this.pos.y - 25, 'ПИКСЕЛЬНЫЙ РЫВОК', '#38bdf8');
                }
            }
        }

        // Б) Фантом (интервал 2.2 сек)
        if (this.id === 'phantom' && this.hp > 0) {
            this.quickTimer += dt;
            if (this.quickTimer >= 2.2) {
                this.quickTimer = 0;
                this.phantomEchoReady = true;
                this.phantomEchoTimer = 0.8;
                sounds.playAbility();
                if (particles) {
                    particles.addDamageText(this.pos.x, this.pos.y - 25, 'СПЕКТРАЛЬНОЕ ЭХО', '#818cf8');
                    particles.addSparks(this.pos.x, this.pos.y, '#818cf8', 6, 2.5);
                }
            }
        }

        // В) Гелиос (интервал 2.4 сек)
        if (this.id === 'solar' && this.hp > 0) {
            this.quickTimer += dt;
            if (this.quickTimer >= 2.4) {
                this.quickTimer = 0;
                sounds.playAbility();
                if (particles) {
                    particles.addSolarCrown(this.pos.x, this.pos.y, this.radius * 2.5);
                }
                if (enemy && enemy.hp > 0) {
                    const dist = Math.hypot(enemy.pos.x - this.pos.x, enemy.pos.y - this.pos.y);
                    if (dist <= this.radius * 2.5) {
                        enemy.takeDamage(6, particles, false, this);
                        this.hp = Math.min(this.maxHp, this.hp + 3);
                        if (particles) {
                            particles.addDamageText(enemy.pos.x, enemy.pos.y - 25, 'СОЛНЕЧНАЯ КОРОНА -6', '#facc15', true);
                            particles.addDamageText(this.pos.x, this.pos.y - 25, '+3 HP', '#34c759');
                        }
                    }
                }
            }
        }

        // 13. ТРИГГЕР LOW_HP:
        // Светляк (HP <= 45%, раз в 2.4 сек открывает окно уклонения на 0.5 сек со снижением урона на 55%)
        if (this.id === 'wisp' && this.hp > 0 && this.hp <= this.maxHp * 0.45 && this.wispCooldown <= 0 && !this.wispDodgeActive) {
            this.wispCooldown = 2.4;
            this.wispDodgeActive = true;
            this.wispDodgeTimer = 0.5;
            sounds.playAbility();
            if (particles) {
                particles.addDamageText(this.pos.x, this.pos.y - 25, 'МЕРЦАНИЕ', '#2dd4bf');
                particles.addSparks(this.pos.x, this.pos.y, '#5eead4', 8, 3.0);
            }
        }

        // 14. Физическое перемещение
        this.maintainSpeed();
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;

        const spd = this.vel.mag();
        if (spd > 0.05) {
            this.facingAngle = Math.atan2(this.vel.y, this.vel.x);
        }
            // 14. Берсерк (TRANSCENDENT): в Фазе 1 нет меча (таран 1 HP). При HP <= 40 надевает Доспех Берсерка:
        // порог урона (не более 1 HP за удар), таранный урон 0, +110% скорости, алые шлейфы из глаз,
        // сокрушительные взмахи Dragon Slayer (кд 1.5с) по 10 урона с вампиризмом +3 HP и упреждающим предиктом траектории.
        if (this.id === 'berserk' && this.hp > 0) {
            if (this.hp <= 40) {
                this.berserkPhase2Active = true;
            }
            const isPhase2 = (this.berserkPhase2Active || this.hp <= 40);

            if (isPhase2) {
                // Активация 2-й фазы Доспеха Берсерка: анимированный яростный рев на 1 секунду
                if (!this.berserkPhase2Triggered) {
                    this.berserkPhase2Triggered = true;
                    this.berserkRoarTimer = 1.0; // 1.0 секунда анимированного рева
                    this.maintainSpeed(); // Мгновенный разгон на +110% скорости
                    if (sounds) {
                        sounds.playExplosion ? sounds.playExplosion() : null;
                        sounds.playAbility ? sounds.playAbility() : null;
                    }
                    if (particles) {
                        particles.addDamageText(this.pos.x, this.pos.y - 45, 'ROAAAR!', '#ff0033', true);
                        particles.addShockwave(this.pos.x, this.pos.y, '#ff0033', 120);
                        particles.addSparks(this.pos.x, this.pos.y, '#ef4444', 35, 5.5);
                        particles.triggerShake(12, 0.45);
                    }
                }

                // Таймер рева и пульсирующие волны
                if (this.berserkRoarTimer > 0) {
                    this.berserkRoarTimer -= dt;
                    this.berserkRoarPulse = (this.berserkRoarPulse || 0) + dt;
                    if (this.berserkRoarPulse >= 0.18) {
                        this.berserkRoarPulse = 0;
                        if (particles) {
                            particles.addShockwave(this.pos.x, this.pos.y, '#991b1b', 80 + Math.random() * 40);
                            particles.addSparks(this.pos.x, this.pos.y, '#ff0033', 8, 3.0);
                            particles.triggerShake(5, 0.15);
                        }
                    }
                }

                // Направление на противника
                if (enemy && enemy.hp > 0) {
                    this.berserkAimAngle = Math.atan2(enemy.pos.y - this.pos.y, enemy.pos.x - this.pos.x);
                }

                // 1. Тонкий алый след тела при движении
                if (this.vel && this.vel.mag() > 0.2) {
                    this.berserkBloodTrail.unshift({ x: this.pos.x, y: this.pos.y, life: 1.0 });
                    if (this.berserkBloodTrail.length > 18) this.berserkBloodTrail.pop();
                }

                // 2. Алые шлейфы света из глаз (Red Eye Streaks) - непрерывный след высокой скорости
                const r = this.radius;
                // Маска зафиксирована в статике, глаза расположены симметрично в верхней половине сферы
                const lx = this.pos.x - r * 0.30;
                const ly = this.pos.y - r * 0.24;
                const rx = this.pos.x + r * 0.30;
                const ry = this.pos.y - r * 0.24;

                if (this.vel && this.vel.mag() > 0.2) {
                    this.berserkLeftEyeTrail.unshift({ x: lx, y: ly, life: 1.0 });
                    if (this.berserkLeftEyeTrail.length > 20) this.berserkLeftEyeTrail.pop();

                    this.berserkRightEyeTrail.unshift({ x: rx, y: ry, life: 1.0 });
                    if (this.berserkRightEyeTrail.length > 20) this.berserkRightEyeTrail.pop();
                }

                // Затухание шлейфов со временем
                for (let i = this.berserkLeftEyeTrail.length - 1; i >= 0; i--) {
                    this.berserkLeftEyeTrail[i].life -= dt * 3.2;
                    if (this.berserkLeftEyeTrail[i].life <= 0) this.berserkLeftEyeTrail.splice(i, 1);
                }
                for (let i = this.berserkRightEyeTrail.length - 1; i >= 0; i--) {
                    this.berserkRightEyeTrail[i].life -= dt * 3.2;
                    if (this.berserkRightEyeTrail[i].life <= 0) this.berserkRightEyeTrail.splice(i, 1);
                }
                for (let i = this.berserkSwordSweepTrail.length - 1; i >= 0; i--) {
                    this.berserkSwordSweepTrail[i].life -= dt * 2.8;
                    if (this.berserkSwordSweepTrail[i].life <= 0) this.berserkSwordSweepTrail.splice(i, 1);
                }

                const swordLength = 118; // Увеличенный каноничный клинок Dragon Slayer (118px)

                // 3. Взмах мечом Убийца Драконов: КД 1.5 сек.
                // Срабатывает в зоне поражения ИЛИ по упреждающему расчету сближения (Interception Prediction)!
                const currentDist = (enemy && enemy.hp > 0) ? Math.hypot(enemy.pos.x - this.pos.x, enemy.pos.y - this.pos.y) : Infinity;
                const strikeRange = Math.hypot(r * 1.35, swordLength) + (enemy ? enemy.radius : 38) + 16;
                const inRangeNow = currentDist <= strikeRange;

                // Предикт сближения по траектории (Interception Prediction):
                let willInterceptSoon = false;
                if (enemy && enemy.hp > 0 && currentDist <= strikeRange * 1.95) {
                    const relVx = (enemy.vel ? enemy.vel.x : 0) - (this.vel ? this.vel.x : 0);
                    const relVy = (enemy.vel ? enemy.vel.y : 0) - (this.vel ? this.vel.y : 0);
                    const relSpdSq = relVx * relVx + relVy * relVy;
                    if (relSpdSq > 0.05) {
                        const rx = enemy.pos.x - this.pos.x;
                        const ry = enemy.pos.y - this.pos.y;
                        const closing = -(rx * relVx + ry * relVy);
                        if (closing > 0) {
                            const tClose = closing / relSpdSq;
                            if (tClose > 0 && tClose <= 0.65) {
                                const futureRx = rx + relVx * tClose;
                                const futureRy = ry + relVy * tClose;
                                const futureDist = Math.hypot(futureRx, futureRy);
                                if (futureDist <= strikeRange * 0.95) {
                                    willInterceptSoon = true;
                                }
                            }
                        }
                    }
                }

                if (!this.berserkSwingActive) {
                    if (this.berserkRoarTimer <= 0) {
                        this.berserkSwordTimer += dt;
                        if (this.berserkSwordTimer >= 1.5) {
                            if (inRangeNow || willInterceptSoon) {
                                // Запуск взмаха!
                                this.berserkSwordTimer = 0;
                                this.berserkSwingActive = true;
                                this.berserkSwingTimer = 0;
                                this.berserkHitThisSwing = false;
                                this.berserkPrevSwingOffset = 0.35;
                                if (sounds && (sounds.playLaunch || sounds.playAbility)) {
                                    sounds.playLaunch ? sounds.playLaunch() : sounds.playAbility();
                                }
                            }
                        }
                    }
                } else {
                    this.berserkSwingTimer += dt;
                    const swingDuration = 0.36; // Молниеносный сокрушительный взмах (быстрый замах 0.08с и резкий рубящий разруб 0.18с)
                    const p = Math.min(1.0, this.berserkSwingTimer / swingDuration);

                    // Широкий замах мечом по канону (от -2.35 rad далеко за плечом до +1.60 rad впереди)
                    let swingOffset = 0.35;
                    if (p < 0.22) {
                        // Быстрый замах назад и подъем колоссального меча за плечо (0.35 rad -> -2.35 rad, дуга ~155°)
                        const t = p / 0.22;
                        const ease = t * t * (3 - 2 * t);
                        swingOffset = 0.35 - ease * 2.70;
                    } else if (p <= 0.72) {
                        // Сокрушительный рубящий взмах вперед и вниз (-2.35 rad -> +1.60 rad, гигантская дуга ~226°)
                        const t = (p - 0.22) / 0.50;
                        const ease = t * t * (3 - 2 * t);
                        swingOffset = -2.35 + ease * 3.95;
                    } else {
                        // Плавный возврат в исходную стойку (+1.60 rad -> +0.35 rad)
                        const t = (p - 0.72) / 0.28;
                        const ease = t * t * (3 - 2 * t);
                        swingOffset = 1.60 - ease * 1.25;
                    }

                    // Рукоять меча вынесена полностью наружу за границу шара (в руках воина)
                    const cosA = Math.cos(this.berserkAimAngle);
                    const sinA = Math.sin(this.berserkAimAngle);
                    const gripDistFwd = -r * 0.20;
                    const gripDistRight = r * 1.35;

                    const ax = this.pos.x + cosA * gripDistFwd + (-sinA) * gripDistRight;
                    const ay = this.pos.y + sinA * gripDistFwd + cosA * gripDistRight;

                    const prevOff = (this.berserkPrevSwingOffset !== undefined) ? this.berserkPrevSwingOffset : swingOffset;

                    // Во время активной фазы удара генерируем плотный веерный шлейф клинка (4 суб-шага)
                    if (p >= 0.20 && p <= 0.74) {
                        const subSteps = 4;
                        for (let s = 1; s <= subSteps; s++) {
                            const subT = prevOff + (swingOffset - prevOff) * (s / subSteps);
                            const bladeAng = this.berserkAimAngle + subT;
                            const tipX = ax + Math.cos(bladeAng) * swordLength;
                            const tipY = ay + Math.sin(bladeAng) * swordLength;
                            const midX = ax + Math.cos(bladeAng) * (swordLength * 0.45);
                            const midY = ay + Math.sin(bladeAng) * (swordLength * 0.45);

                            this.berserkSwordSweepTrail.unshift({
                                tipX: tipX, tipY: tipY,
                                midX: midX, midY: midY,
                                life: 1.0
                            });
                        }
                        if (this.berserkSwordSweepTrail.length > 36) {
                            this.berserkSwordSweepTrail.length = 36;
                        }
                    }
                    this.berserkPrevSwingOffset = swingOffset;

                    const currentTipX = ax + Math.cos(this.berserkAimAngle + swingOffset) * swordLength;
                    const currentTipY = ay + Math.sin(this.berserkAimAngle + swingOffset) * swordLength;

                    // Нанесение 10 урона и отхил +3 HP при попадании лезвием по врагу
                    if (p >= 0.22 && p <= 0.74 && !this.berserkHitThisSwing && enemy && enemy.hp > 0) {
                        const dx = currentTipX - ax;
                        const dy = currentTipY - ay;
                        const l2 = dx * dx + dy * dy;
                        let tProj = l2 > 0 ? ((enemy.pos.x - ax) * dx + (enemy.pos.y - ay) * dy) / l2 : 0;
                        tProj = Math.max(0, Math.min(1, tProj));
                        const closestX = ax + tProj * dx;
                        const closestY = ay + tProj * dy;
                        const distToBlade = Math.hypot(enemy.pos.x - closestX, enemy.pos.y - closestY);

                        let hitSweep = false;
                        if (distToBlade <= enemy.radius + 24) {
                            hitSweep = true;
                        } else if (this.berserkSwordSweepTrail && this.berserkSwordSweepTrail.length > 0) {
                            for (let i = 0; i < Math.min(8, this.berserkSwordSweepTrail.length); i++) {
                                const pt = this.berserkSwordSweepTrail[i];
                                const dTip = Math.hypot(enemy.pos.x - pt.tipX, enemy.pos.y - pt.tipY);
                                const dMid = Math.hypot(enemy.pos.x - pt.midX, enemy.pos.y - pt.midY);
                                if (dTip <= enemy.radius + 20 || dMid <= enemy.radius + 16) {
                                    hitSweep = true;
                                    break;
                                }
                            }
                        }

                        if (hitSweep) {
                            this.berserkHitThisSwing = true;
                            enemy.takeDamage(10, particles, false, this);

                            // Вампиризм: +3 HP за удар
                            const heal = 3;
                            const oldHp = this.hp;
                            this.hp = Math.min(this.maxHp, this.hp + heal);
                            const actualHeal = this.hp - oldHp;

                            if (sounds && sounds.playHit) sounds.playHit();
                            if (particles) {
                                particles.addDamageText(enemy.pos.x, enemy.pos.y - 25, '−10', '#ff0033', true);
                                if (actualHeal > 0) {
                                    particles.addDamageText(this.pos.x, this.pos.y - 30, `+${actualHeal} HP`, '#22c55e', true);
                                    particles.addSparks(this.pos.x, this.pos.y, '#22c55e', 12, 3.2);
                                }
                                particles.addSparks(enemy.pos.x, enemy.pos.y, '#ef4444', 22, 5.0);
                                particles.addShockwave(enemy.pos.x, enemy.pos.y, '#991b1b', 75);
                                particles.triggerShake(8, 0.22);
                            }
                        }
                    }

                    if (p >= 1.0) {
                        this.berserkSwingActive = false;
                        this.berserkSwingTimer = 0;
                        this.berserkPrevSwingOffset = 0.35;
                    }
                }
            } else {
                // Фаза 1: меча нет, сброс боевых состояний второй фазы
                this.berserkPhase2Active = false;
                this.berserkPhase2Triggered = false;
                this.berserkRoarTimer = 0;
                this.berserkRoarPulse = 0;
                this.berserkSwordTimer = 0;
                this.berserkSwingActive = false;
                this.berserkBloodTrail = [];
                this.berserkLeftEyeTrail = [];
                this.berserkRightEyeTrail = [];
                this.berserkSwordSweepTrail = [];
                this.berserkPrevSwingOffset = 0.35;
            }
        }
    }

    onWallHit(side, enemy = null, particles = null) {
        sounds.playWallHit(0.4);
        this.bounceCount++;

        if (this.vel.mag() > 0.05) {
            this.facingAngle = Math.atan2(this.vel.y, this.vel.x);
        }

        // Мираж (Ложный угол): после отскока (кд 1.3 сек) меняет курс на 12° и дает +5 к следующему удару
        if (this.id === 'mirage' && this.mirageCooldown <= 0) {
            this.mirageCooldown = 1.3;
            this.mirageDecoyTimer = 0.55;
            this.mirageBonusTimer = 0.8;
            const angle = (Math.random() > 0.5 ? 0.21 : -0.21);
            const cosA = Math.cos(angle);
            const sinA = Math.sin(angle);
            const vx = this.vel.x * cosA - this.vel.y * sinA;
            const vy = this.vel.x * sinA + this.vel.y * cosA;
            this.vel.set(vx, vy);
            this.maintainSpeed();
            sounds.playAbility();
            if (particles) {
                particles.addDamageText(this.pos.x, this.pos.y - 25, 'ЛОЖНЫЙ УГОЛ', '#06b6d4');
                particles.addSparks(this.pos.x, this.pos.y, '#67e8f9', 6, 2.5);
            }
        }

        // ТРИГГЕР CHARGE_BOUNCE (каждые 2 подтвержденных отскока):
        if (this.bounceCount % 2 === 0) {
            // 1. Часовщик: +1 шестеренчатый заряд (макс. 2) на 1.0 сек
            if (this.id === 'clockwork') {
                this.gearCharges = Math.min(2, this.gearCharges + 1);
                this.gearChargeTimer = 1.0;
                sounds.playLaunch();
                if (particles) {
                    const txt = this.gearCharges === 2 ? 'ДВОЙНОЙ ЗАРЯД +8' : 'ЗАРЯД +5';
                    particles.addDamageText(this.pos.x, this.pos.y - 25, txt, '#f59e0b');
                    particles.addSparks(this.pos.x, this.pos.y, '#fbbf24', 5, 2.0);
                }
            }

            // 2. Магнит: импульс поля 2.8R на 0.7 сек (5 урона + притяжение)
            if (this.id === 'magnet') {
                this.magnetFieldTimer = 0.7;
                sounds.playAbility();
                if (enemy && enemy.hp > 0) {
                    const dist = Math.hypot(enemy.pos.x - this.pos.x, enemy.pos.y - this.pos.y);
                    if (dist <= this.radius * 2.8) {
                        enemy.takeDamage(5, particles, false, this);
                        if (particles) {
                            particles.addDamageText(enemy.pos.x, enemy.pos.y - 25, 'МАГНИТНАЯ СТЯЖКА -5', '#38bdf8');
                            particles.addShockwave(this.pos.x, this.pos.y, '#38bdf8', this.radius * 2.8, 0.4, 3);
                        }
                    }
                }
            }

            // 3. Сюрикен: заряд клинка на 1.0 сек (+6 урона и 0.45 сек стан)
            if (this.id === 'ninja') {
                this.ninjaCharged = true;
                this.ninjaChargeTimer = 1.0;
                sounds.playLaunch();
                if (particles) {
                    particles.addDamageText(this.pos.x, this.pos.y - 25, 'ЗАРЯД СРЕЗА', '#facc15');
                    particles.addSparks(this.pos.x, this.pos.y, '#fef08a', 6, 2.5);
                }
            }

            // 4. Скарабей: песчаная волна 2.5R (5 урона и замедление на 20% на 0.65 сек)
            if (this.id === 'sand') {
                sounds.playAbility();
                if (particles) {
                    particles.addShockwave(this.pos.x, this.pos.y, '#eab308', this.radius * 2.5, 0.4, 4);
                }
                if (enemy && enemy.hp > 0) {
                    const dist = Math.hypot(enemy.pos.x - this.pos.x, enemy.pos.y - this.pos.y);
                    if (dist <= this.radius * 2.5) {
                        enemy.takeDamage(5, particles, false, this);
                        enemy.sandSlowTimer = 0.65;
                        enemy.maintainSpeed();
                        if (particles) {
                            particles.addDamageText(enemy.pos.x, enemy.pos.y - 25, 'ПЕСЧАНАЯ ОСЫПЬ -5', '#eab308');
                            particles.addSparks(enemy.pos.x, enemy.pos.y, '#ca8a04', 8, 3.0);
                        }
                    }
                }
            }

            // 5. Протон / Лазер: сплошной луч вдоль вектора скорости (8 урона, кд 1.5 сек)
            if (this.id === 'laser' && this.laserCooldown <= 0) {
                this.laserCooldown = 1.5;
                sounds.playAbility();
                const dir = this.vel.clone().normalize();
                const startX = this.pos.x;
                const startY = this.pos.y;
                const endX = startX + dir.x * 350;
                const endY = startY + dir.y * 350;
                if (particles) {
                    particles.addLaserBeam(startX, startY, endX, endY, '#06b6d4', 6, 0.12);
                }
                if (enemy && enemy.hp > 0) {
                    const vX = endX - startX;
                    const vY = endY - startY;
                    const lenSq = vX * vX + vY * vY;
                    let t = ((enemy.pos.x - startX) * vX + (enemy.pos.y - startY) * vY) / lenSq;
                    t = Math.max(0, Math.min(1, t));
                    const projX = startX + t * vX;
                    const projY = startY + t * vY;
                    const d = Math.hypot(enemy.pos.x - projX, enemy.pos.y - projY);
                    if (d <= enemy.radius + 18) {
                        enemy.takeDamage(8, particles, true, this);
                        if (particles) {
                            particles.addDamageText(enemy.pos.x, enemy.pos.y - 25, 'ФОТОННЫЙ ЛУЧ -8', '#06b6d4', true);
                            particles.triggerShake(4, 0.12);
                        }
                    }
                }
            }

            // 6. Метеор: кинетический заряд на 1.0 сек (+10 урона + импульс)
            if (this.id === 'meteor') {
                this.meteorCharged = true;
                this.meteorChargeTimer = 1.0;
                sounds.playLaunch();
                if (particles) {
                    particles.addDamageText(this.pos.x, this.pos.y - 25, 'КИНЕТИЧЕСКИЙ ЗАРЯД', '#78716c');
                    particles.addStoneDebris(this.pos.x, this.pos.y, 8);
                }
            }

            // 7. Тайфун: циклонный вихрь в точке отскока на 0.8 сек (4 тика по 2 урона)
            if (this.id === 'storm') {
                this.stormFieldTimer = 0.8;
                this.stormTickTimer = 0.2;
                this.stormFieldCenter = { x: this.pos.x, y: this.pos.y };
                sounds.playLaunch();
                if (particles) {
                    particles.addShockwave(this.pos.x, this.pos.y, '#38bdf8', this.radius * 2.4, 0.45, 3);
                }
            }

            // 8. Кракен: хватка бездны в пределах 3R (7 урона + притяжение, без заморозки!)
            if (this.id === 'kraken') {
                if (enemy && enemy.hp > 0) {
                    const dist = Math.hypot(enemy.pos.x - this.pos.x, enemy.pos.y - this.pos.y);
                    if (dist <= this.radius * 3.0) {
                        this.krakenFieldTimer = 0.6;
                        enemy.takeDamage(7, particles, true, this);
                        sounds.playAbility();
                        if (particles) {
                            particles.addDamageText(enemy.pos.x, enemy.pos.y - 25, 'ХВАТКА БЕЗДНЫ -7', '#a855f7', true);
                            particles.addTentacles(enemy.pos.x, enemy.pos.y, 0.8);
                        }
                    }
                }
            }

            // 9. Сингулярность / Вихрь: гравитационная линза 3.2R на 0.75 сек (3 тика по 3 урона, кд 1.8 сек)
            if (this.id === 'vortex' && this.vortexCooldown <= 0) {
                this.vortexCooldown = 1.8;
                this.vortexFieldTimer = 0.75;
                this.vortexTickTimer = 0.25;
                this.vortexCenter = { x: this.pos.x, y: this.pos.y };
                sounds.playExplosion();
                if (particles) {
                    particles.addDarkVortex(this.pos.x, this.pos.y, this.radius * 3.2, 0.75);
                    particles.triggerShake(5, 0.18);
                }
            }
        }
    }

    onHitEnemy(enemy, impactForce, hitPoint, particles) {
        let damage = this.baseDamage;
        let isCrit = false;

        // 1. Проверка защитного мерцания Светляка
        if (enemy.id === 'wisp' && enemy.wispDodgeActive) {
            enemy.wispDodgeActive = false;
            damage = Math.max(1, Math.round(damage * 0.45));
            if (particles) {
                particles.addDamageText(enemy.pos.x, enemy.pos.y - 25, 'УКЛОНЕНИЕ -55%', '#2dd4bf', true);
                particles.addSparks(enemy.pos.x, enemy.pos.y, '#5eead4', 8, 3.0);
            }
        }

        // 2. Расход шестерен Часовщика (+5 / +8 урона)
        if (this.id === 'clockwork' && this.gearCharges > 0) {
            const bonus = this.gearCharges === 2 ? 8 : 5;
            damage += bonus;
            isCrit = true;
            if (this.gearCharges === 2) {
                this.clockworkBoostTimer = 0.65;
                this.maintainSpeed();
            }
            this.gearCharges = 0;
            this.gearChargeTimer = 0;
            if (particles) {
                particles.addDamageText(enemy.pos.x, enemy.pos.y - 28, `ТАРАН +${bonus}`, '#f59e0b', true);
            }
        }

        // 3. Бонус Неон-Кибера (+5 урона при рывке)
        if (this.id === 'cyber' && this.cyberBonusTimer > 0) {
            damage += 5;
            this.cyberBonusTimer = 0;
            isCrit = true;
            if (particles) {
                particles.addDamageText(enemy.pos.x, enemy.pos.y - 28, 'ГЛИТЧ-ТАРАН +5', '#38bdf8', true);
                particles.addDigitalGlitch(enemy.pos.x, enemy.pos.y);
            }
        }

        // 4. Мясник (Рваная кромка, 32% шанс кровотечения, кд 0.8 сек)
        if (this.id === 'saw' && this.sawCooldown <= 0) {
            this.sawCooldown = 0.8;
            if (Math.random() < 0.32) {
                enemy.bleedTimer = 1.2;
                enemy.bleedTickTimer = 0.4;
                if (particles) {
                    particles.addDamageText(enemy.pos.x, enemy.pos.y - 28, 'КРОВОТЕЧЕНИЕ', '#ef4444');
                    particles.addBleedSplatter(hitPoint.x, hitPoint.y, 10);
                }
            }
        }

        // 5. Огненный (Прижигание, 35% шанс горения, кд 0.9 сек)
        if (this.id === 'blaze' && this.blazeCooldown <= 0) {
            this.blazeCooldown = 0.9;
            if (Math.random() < 0.35) {
                enemy.burnTimer = 1.2;
                enemy.burnTickTimer = 0.4;
                enemy.burnSource = 'blaze';
                if (particles) {
                    particles.addDamageText(enemy.pos.x, enemy.pos.y - 28, 'ГОРЕНИЕ', '#f97316');
                    particles.addSparks(hitPoint.x, hitPoint.y, '#f97316', 8, 3.0);
                }
            }
        }

        // 6. Мороз (Ледяная корка, 30% шанс: +5 урона и замедление на 35% на 0.75 сек, кд 1.2 сек)
        if (this.id === 'frosty' && this.frostyCooldown <= 0) {
            this.frostyCooldown = 1.2;
            if (Math.random() < 0.30) {
                damage += 5;
                enemy.freezeTimer = 0.75;
                enemy.maintainSpeed();
                sounds.playAbility();
                if (particles) {
                    particles.addDamageText(enemy.pos.x, enemy.pos.y - 28, 'ЗАМОРОЗКА -5', '#38bdf8', true);
                    particles.addIceNova(hitPoint.x, hitPoint.y, 45);
                }
            }
        }

        // 7. Вампир (Жизненная лента, 35% шанс: +6 урона и +4 HP, кд 1.0 сек)
        if (this.id === 'vampire' && this.vampireCooldown <= 0) {
            this.vampireCooldown = 1.0;
            if (Math.random() < 0.35) {
                damage += 6;
                const heal = Math.min(this.maxHp - this.hp, 4);
                this.hp += heal;
                sounds.playAbility();
                if (particles) {
                    particles.addDamageText(enemy.pos.x, enemy.pos.y - 28, 'ВЫСАСЫВАНИЕ -6', '#c084fc', true);
                    if (heal > 0) particles.addDamageText(this.pos.x, this.pos.y - 28, `+${heal} HP`, '#34c759');
                    particles.addSparks(hitPoint.x, hitPoint.y, '#e879f9', 8, 3.0);
                }
            }
        }

        // 8. Токсик (Едкая пена, 30% шанс яда, кд 0.9 сек)
        if (this.id === 'toxic' && this.toxicCooldown <= 0) {
            this.toxicCooldown = 0.9;
            if (Math.random() < 0.30) {
                enemy.poisonTimer = 0.9;
                enemy.poisonTickTimer = 0.3;
                sounds.playAbility();
                if (particles) {
                    particles.addDamageText(enemy.pos.x, enemy.pos.y - 28, 'ЯД', '#84cc16');
                    particles.addAcidSplash(hitPoint.x, hitPoint.y);
                }
            }
        }

        // 9. Сюрикен (Золотой срез: +6 урона и 0.45 сек стан)
        if (this.id === 'ninja' && this.ninjaCharged) {
            this.ninjaCharged = false;
            this.ninjaChargeTimer = 0;
            damage += 6;
            isCrit = true;
            enemy.applyStun(0.45);
            sounds.playAbility();
            if (particles) {
                particles.addDamageText(enemy.pos.x, enemy.pos.y - 32, 'СРЕЗ +6', '#facc15', true);
                particles.addDamageText(enemy.pos.x, enemy.pos.y - 18, 'ОГЛУШЕНИЕ 0.45 СЕК', '#fde047', true);
                particles.addSparks(hitPoint.x, hitPoint.y, '#fef08a', 12, 4.0);
            }
        }

        // 10. Подрывник (Контактный заряд, 30% шанс, кд 1.2 сек, детонация через 0.22 сек)
        if (this.id === 'boomer' && this.boomerCooldown <= 0 && !this.boomerDelayedBomb) {
            this.boomerCooldown = 1.2;
            if (Math.random() < 0.30) {
                this.boomerDelayedBomb = {
                    x: hitPoint.x,
                    y: hitPoint.y,
                    timer: 0.22,
                    enemy: enemy
                };
                sounds.playLaunch();
                if (particles) {
                    particles.addDamageText(enemy.pos.x, enemy.pos.y - 28, 'ЗАРЯД УСТАНОВЛЕН', '#fb923c');
                }
            }
        }

        // 11. Мираж (Ложный угол бонус +5 урона)
        if (this.id === 'mirage' && this.mirageBonusTimer > 0) {
            damage += 5;
            this.mirageBonusTimer = 0;
            isCrit = true;
            if (particles) {
                particles.addDamageText(enemy.pos.x, enemy.pos.y - 28, 'ТОЧНЫЙ УДАР +5', '#06b6d4', true);
            }
        }

        // 12. Метеор (Кинетический кратер: +10 урона + импульс отбрасывания)
        if (this.id === 'meteor' && this.meteorCharged) {
            this.meteorCharged = false;
            this.meteorChargeTimer = 0;
            damage += 10;
            isCrit = true;
            const knock = enemy.pos.clone().sub(this.pos).normalize().scale(5.0);
            enemy.vel.add(knock);
            enemy.maintainSpeed();
            sounds.playExplosion();
            if (particles) {
                particles.addDamageText(enemy.pos.x, enemy.pos.y - 28, 'КИНЕТИЧЕСКИЙ КРАТЕР -10', '#78716c', true);
                particles.addStoneDebris(hitPoint.x, hitPoint.y, 14);
                particles.triggerShake(6, 0.18);
            }
        }

        // 13. Тесла (Дуговой разряд, 35% шанс, кд 1.1 сек: 8 урона и -20% скорости на 0.4 сек)
        if (this.id === 'tesla' && this.teslaCooldown <= 0) {
            this.teslaCooldown = 1.1;
            if (Math.random() < 0.35) {
                damage += 8;
                enemy.teslaSlowTimer = 0.4;
                enemy.maintainSpeed();
                sounds.playAbility();
                if (particles) {
                    particles.addLightning(this.pos.x, this.pos.y, enemy.pos.x, enemy.pos.y, '#38bdf8', 0.22, 2);
                    particles.addDamageText(enemy.pos.x, enemy.pos.y - 28, 'ДУГОВОЙ РАЗРЯД -8', '#38bdf8', true);
                }
            }
        }

        // 14. Фантом (Спектральное эхо: отложенный повторный удар через 0.18 сек)
        if (this.id === 'phantom' && this.phantomEchoReady) {
            this.phantomEchoReady = false;
            this.phantomEchoTimer = 0;
            this.phantomPendingHit = {
                timer: 0.18,
                enemy: enemy
            };
        }

        // 15. Дракон (Пламенный выдох: 65° конус, 8 прямого урона + горение 2 тика по 2, кд 1.3 сек)
        if (this.id === 'dragon' && this.dragonCooldown <= 0) {
            this.dragonCooldown = 1.3;
            const forwardAngle = this.facingAngle;
            const targetAngle = Math.atan2(enemy.pos.y - this.pos.y, enemy.pos.x - this.pos.x);
            let diff = Math.abs(targetAngle - forwardAngle);
            if (diff > Math.PI) diff = Math.PI * 2 - diff;
            if (diff <= 0.57) {
                damage += 8;
                enemy.burnTimer = 0.6;
                enemy.burnTickTimer = 0.3;
                enemy.burnSource = 'dragon';
                sounds.playExplosion();
                if (particles) {
                    particles.addFireBlast(hitPoint.x, hitPoint.y, 55);
                    particles.addDamageText(enemy.pos.x, enemy.pos.y - 28, 'ПЛАМЕННЫЙ ВЫДОХ -8', '#f97316', true);
                    particles.triggerShake(6, 0.18);
                }
            }
        }

        // 16. Атом (Критическая масса: каждый таран +1 изотоп, на 3-й детонирует термоядерный импульс)
        if (this.id === 'nuke' && this.hp > 0) {
            this.isotopeCharges++;
            if (this.isotopeCharges < 3) {
                if (particles) {
                    particles.addDamageText(this.pos.x, this.pos.y - 28, `ИЗОТОП ${this.isotopeCharges}/3`, '#e11d48');
                    particles.addSparks(hitPoint.x, hitPoint.y, '#fda4af', 5, 2.5);
                }
            } else {
                this.isotopeCharges = 0;
                damage += 11;
                isCrit = true;
                this.nukeResidualPulses = 2;
                this.nukeResidualTimer = 0.25;
                this.takeDamage(2, particles, false, null, true);
                sounds.playExplosion();
                if (particles) {
                    particles.addThermonuclearPulse(hitPoint.x, hitPoint.y, this.radius * 2.7);
                    particles.addDamageText(enemy.pos.x, enemy.pos.y - 32, 'ТЕРМОЯДЕРНЫЙ ИМПУЛЬС -11', '#e11d48', true);
                    particles.addDamageText(this.pos.x, this.pos.y - 25, 'ОТДАЧА -2', '#f43f5e');
                    particles.triggerShake(9, 0.25);
                }
            }
        }

        // 17. Зевс (Карающий гром: каждый 2-й удар вертикальная молния 11 урона и -25% скорости на 0.35 сек)
        if (this.id === 'zeus' && this.zeusCooldown <= 0) {
            this.zeusHitCount++;
            if (this.zeusHitCount >= 2) {
                this.zeusHitCount = 0;
                this.zeusCooldown = 0.8;
                damage += 11;
                isCrit = true;
                enemy.zeusSlowTimer = 0.35;
                enemy.maintainSpeed();
                sounds.playAbility();
                if (particles) {
                    particles.addVerticalLightning(enemy.pos.x, enemy.pos.y);
                    particles.addDamageText(enemy.pos.x, enemy.pos.y - 30, 'КАРАЮЩИЙ ГРОМ -11', '#facc15', true);
                    particles.triggerShake(7, 0.2);
                }
            }
        }

        // Нанесение урона
        // Берсерк: во 2-й фазе (HP <= 40 или активен Доспех) тело не наносит урон при контакте — урон наносит только меч Dragon Slayer
        if (this.id === 'berserk' && (this.berserkPhase2Active || this.hp <= 40)) {
            damage = 0;
        }

        enemy.takeDamage(damage, particles, isCrit, this);

        sounds.playBallHit(1.0);
        if (particles) {
            particles.addSparks(hitPoint.x, hitPoint.y, '#ffffff', 8, 3.0);
        }
    }

    takeDamage(amount, particles, isCrit = false, enemy = null, isReflected = false) {
        if (this.hp <= 0) return 0;
        let finalDamage = amount;

        // 1. Киборг: Сегментная броня (снижает следующий урон на 40%, макс. 6 ед)
        if (this.id === 'cyborg' && this.cyborgShieldActive) {
            this.cyborgShieldActive = false;
            const reduction = Math.min(6, Math.max(1, Math.round(finalDamage * 0.40)));
            finalDamage = Math.max(1, finalDamage - reduction);
            if (particles) {
                particles.addDamageText(this.pos.x, this.pos.y - 30, 'БРОНЯ -40%', '#06b6d4');
                particles.addSparks(this.pos.x, this.pos.y, '#22d3ee', 8, 3.0);
            }
        }

        // 2. Алмаз / Кристалл: Призматический ответ (кд 1.4 сек, поглощает min(4, 30%) и отражает ровно столько же)
        if (this.id === 'crystal' && this.crystalCooldown <= 0 && !isReflected && enemy && enemy !== this) {
            this.crystalCooldown = 1.4;
            const absorbed = Math.min(4, Math.max(1, Math.round(finalDamage * 0.30)));
            finalDamage = Math.max(1, finalDamage - absorbed);
            enemy.takeDamage(absorbed, particles, false, this, true);
            sounds.playAbility();
            if (particles) {
                particles.addDamageText(this.pos.x, this.pos.y - 30, 'ПРИЗМАТИЧЕСКИЙ ЩИТ', '#e0e7ff');
                particles.addDamageText(enemy.pos.x, enemy.pos.y - 30, `ОТРАЖЕНИЕ -${absorbed}`, '#a855f7');
                particles.addPrismaticReflect(this.pos.x, this.pos.y, enemy.pos.x, enemy.pos.y);
            }
        }

        // Применение урона
        // 0. Берсерк: защитный порог перехода и абсолютная броня во 2-й фазе
        if (this.id === 'berserk') {
            if (this.berserkPhase2Active || this.hp <= 40) {
                // Во 2-й фазе не получает больше 1 урона за удар!
                finalDamage = Math.min(1, finalDamage);
            } else if (this.hp - finalDamage <= 40) {
                // Переходный удар доводит ровно до 40 HP и активирует Доспех
                finalDamage = this.hp - 40;
                this.berserkPhase2Active = true;
                this.berserkRoarTimer = 1.0;
                this.berserkRoarPlayed = false;
                if (particles) {
                    particles.addShockwave(this.pos.x, this.pos.y, '#ff0033', 90, 0.6, 5);
                }
            }
        }

        this.hp = Math.max(0, this.hp - finalDamage);

        const textColor = this.isPlayer ? '#ff3b30' : '#ffffff';
        if (particles) {
            particles.addDamageText(this.pos.x, this.pos.y - 18, `-${finalDamage}`, textColor, isCrit);
        }

        // 3. Шип: Колючий ответ (при уроне >= 5 с шансом 35% выпускает шипы, 5 урона врагу, кд 0.8 сек)
        if (this.id === 'spike' && finalDamage >= 5 && this.spikeCooldown <= 0 && !isReflected && enemy && enemy !== this) {
            this.spikeCooldown = 0.8;
            if (Math.random() < 0.35) {
                enemy.takeDamage(5, particles, false, this, true);
                sounds.playBallHit(0.9);
                if (particles) {
                    particles.addDamageText(enemy.pos.x, enemy.pos.y - 30, 'ШИПЫ -5', '#f1f5f9');
                    particles.addSparks(this.pos.x, this.pos.y, '#e2e8f0', 5, 4.0, 2.0, 4.0);
                }
            }
        }

        // 4. Киборг: накопление 10 входящего урона активирует бронепластину
        if (this.id === 'cyborg' && this.cyborgCooldown <= 0 && !this.cyborgShieldActive) {
            this.cyborgAccum += finalDamage;
            if (this.cyborgAccum >= 10) {
                this.cyborgAccum = 0;
                this.cyborgShieldActive = true;
                this.cyborgCooldown = 1.6;
                sounds.playAbility();
                if (particles) {
                    particles.addDamageText(this.pos.x, this.pos.y - 30, 'БРОНЯ ГОТОВА', '#06b6d4');
                    particles.addSparks(this.pos.x, this.pos.y, '#22d3ee', 8, 3.0);
                }
            }
        }

        // 5. Титан: Сейсмический отпор (накопление 12 входящего урона вызывает волну: 8 урона + отбрасывание, кд 0.9 сек)
        if (this.id === 'titan' && this.titanCooldown <= 0 && !isReflected && enemy && enemy !== this) {
            this.titanAccum += finalDamage;
            if (this.titanAccum >= 12) {
                this.titanAccum = 0;
                this.titanCooldown = 0.9;
                enemy.takeDamage(8, particles, true, this, true);
                const push = enemy.pos.clone().sub(this.pos).normalize().scale(6.5);
                enemy.vel.add(push);
                enemy.maintainSpeed();
                sounds.playExplosion();
                if (particles) {
                    particles.addDamageText(enemy.pos.x, enemy.pos.y - 30, 'СЕЙСМИЧЕСКИЙ ОТПОР -8', '#94a3b8', true);
                    particles.addSeismicShockwave(this.pos.x, this.pos.y, 80);
                    particles.triggerShake(7, 0.2);
                }
            }
        }

        // Если шар погиб, раунд завершается, способности отменяются (п. 2.3 ТЗ)
        if (this.hp === 0) {
            this.vel.set(0, 0);
            this.nukeResidualPulses = 0;
            this.boomerDelayedBomb = null;
            this.phantomPendingHit = null;
            sounds.playExplosion();
            if (particles) {
                particles.addSparks(this.pos.x, this.pos.y, '#ffffff', 20, 5.0);
                particles.triggerShake(8, 0.2);
            }
        }

        return finalDamage;
    }

    heal(amount, particles = null) {
        if (this.hp <= 0) return 0;
        const prevHp = this.hp;
        this.hp = Math.min(this.maxHp, this.hp + amount);
        const actualHealed = this.hp - prevHp;
        if (actualHealed > 0 && particles) {
            particles.addDamageText(this.pos.x, this.pos.y - 20, `+${actualHealed}`, '#22c55e');
        }
        return actualHealed;
    }

    getBorderColor() {
        switch (this.rarity) {
            case 'MYTHIC': return '#f43f5e';
            case 'LEGENDARY': return '#fbbf24';
            case 'EPIC': return '#c084fc';
            case 'RARE': return '#38bdf8';
                    case 'TRANSCENDENT':
            return '#ff0033'; // Чистая неоново-красная рамка без белых крестиков
            default: return '#94a3b8';
        }
    }

    // =========================================================================
    // ОСНОВНОЙ МЕТОД ОТРИСОВКИ (100% КРУГЛЫЙ ШАР, 3D БЛИК, СТАТУСНЫЕ АНИМАЦИИ)
    // =========================================================================

    draw(ctx) {
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);

        // 1. Статусные эффекты ПОД шаром (струя реактивного ускорения)
        if (this.cyberBoostTimer > 0 || this.clockworkBoostTimer > 0) {
            ctx.save();
            ctx.rotate(this.facingAngle);
            const boostGrad = ctx.createLinearGradient(-this.radius * 1.8, 0, -this.radius * 0.8, 0);
            boostGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
            boostGrad.addColorStop(1, 'rgba(56, 189, 248, 0.75)');
            ctx.fillStyle = boostGrad;
            ctx.beginPath();
            ctx.moveTo(-this.radius * 0.8, -this.radius * 0.35);
            ctx.lineTo(-this.radius * 1.7, 0);
            ctx.lineTo(-this.radius * 0.8, this.radius * 0.35);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }

// Берсерк: эффекты во второй фазе Доспеха Берсерка ПОД шаром
        if (this.id === 'berserk' && (this.berserkPhase2Active || this.hp <= 40)) {
            this.drawBerserkBloodTrail(ctx);
            this.drawTranscendentAura(ctx);
        }

        // 2. ОТРИСОВКА САМОГО ШАРА
        ctx.save();
        if (this.id !== 'spike') {
            ctx.beginPath();
            ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
            ctx.clip();
        }

        ctx.rotate(this.facingAngle);
        this.drawBallBody(ctx);
        ctx.restore();

        // Переливание иконки шара (ТОЛЬКО САМ ШАР, только в UI/меню, НЕ рамка)
        if (this.rarity === 'TRANSCENDENT' && this.isUIPreview) {
            this.drawTranscendentIconSheen(ctx);
        }

        // Берсерк: Шлем Доспеха Берсерка во 2-й фазе поверх шара
        if (this.id === 'berserk' && (this.berserkPhase2Active || this.hp <= 40)) {
            this.drawBerserkArmorMask(ctx);
        }

        // Берсерк: колоссальный меч Dragon Slayer во 2-й фазе
        if (this.id === 'berserk' && (this.berserkPhase2Active || this.hp <= 40)) {
            if (this.berserkSwingActive) {
                this.drawBerserkSlashTrail(ctx);
            }
            this.drawBerserkSword(ctx);
        }

        // 3. 3D-ОСТЕКЛЕНИЕ И БЛИК ОБЪЕМА
        ctx.beginPath();
        ctx.arc(0, 0, this.radius - 0.5, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.45)';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        const glareGrad = ctx.createRadialGradient(-this.radius * 0.35, -this.radius * 0.35, 1, -this.radius * 0.25, -this.radius * 0.25, this.radius * 0.75);
        glareGrad.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
        glareGrad.addColorStop(0.35, 'rgba(255, 255, 255, 0.15)');
        glareGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = glareGrad;
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.fill();

        // 4. Неоново-красная рамка шара (чистая, без белых крестиков и переливаний)
        ctx.beginPath();
        ctx.arc(0, 0, (this.id === 'spike' ? this.radius * 0.82 : this.radius) - 0.75, 0, Math.PI * 2);
        ctx.strokeStyle = this.getBorderColor();
        ctx.lineWidth = (this.rarity === 'TRANSCENDENT') ? 2.5 : 1.5;
        if (this.rarity === 'TRANSCENDENT') {
            ctx.shadowColor = '#ff0033';
            ctx.shadowBlur = 8;
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // 4. СТАТУСНЫЕ АНИМАЦИИ ПОВЕРХ ШАРА (СТРОГО РАЗДЕЛЬНЫЕ ПО ТЗ):
        // А) Заморозка / Обледенение (Ледяная корка со стрелами льда - ТОЛЬКО Мороз)
        if (this.freezeTimer > 0) {
            this.drawIceOverlay(ctx);
        }

        // Б) Оглушение (Золотые вращающиеся звезды - ТОЛЬКО Сюрикен)
        if (this.stunTimer > 0) {
            this.drawStunStars(ctx);
        }

        // В) Кровотечение (Темно-красные капли крови - ТОЛЬКО Мясник)
        if (this.bleedTimer > 0) {
            this.drawBleedOverlay(ctx);
        }

        // Г) Отравление (Ядовито-зеленая пена и пузыри - ТОЛЬКО Токсик)
        if (this.poisonTimer > 0) {
            this.drawPoisonOverlay(ctx);
        }

        // Д) Горение (Оранжево-красные языки пламени - Огненный и Дракон)
        if (this.burnTimer > 0) {
            this.drawBurnOverlay(ctx);
        }

        // Е) Электрошок (Голубоватые искры - Тесла и Зевс)
        if (this.teslaSlowTimer > 0 || this.zeusSlowTimer > 0) {
            this.drawShockOverlay(ctx);
        }

        // Ж) Броня Киборга (Шестиугольные пластины)
        if (this.cyborgShieldActive) {
            this.drawCyborgArmor(ctx);
        }

        // З) Орбитальные шестерни Часовщика
        if (this.id === 'clockwork' && this.gearCharges > 0) {
            this.drawClockworkGears(ctx);
        }

        // И) Электронные орбиты Атома (изотопы)
        if (this.id === 'nuke') {
            this.drawNukeElectrons(ctx);
        }

        // К) Мерцание светлячков (Светляк)
        if (this.id === 'wisp' && (this.wispDodgeActive || this.hp <= this.maxHp * 0.45)) {
            this.drawWispFireflies(ctx);
        }

        // Л) Хватка Бездны (Кракен)
        if (this.krakenFieldTimer > 0) {
            this.drawVoidOverlay(ctx);
        }

        ctx.restore();
    }

    drawIceOverlay(ctx) {
        ctx.save();
        ctx.fillStyle = 'rgba(186, 230, 253, 0.45)';
        ctx.beginPath();
        ctx.arc(0, 0, this.radius + 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#7dd3fc';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, this.radius + 3, 0, Math.PI * 2);
        ctx.stroke();

        for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2 + this.animTime * 1.5;
            const rBase = this.radius + 2;
            const rTip = this.radius + 8 + Math.sin(this.animTime * 5 + i) * 2;
            ctx.fillStyle = '#e0f2fe';
            ctx.beginPath();
            ctx.moveTo(Math.cos(a - 0.2) * rBase, Math.sin(a - 0.2) * rBase);
            ctx.lineTo(Math.cos(a) * rTip, Math.sin(a) * rTip);
            ctx.lineTo(Math.cos(a + 0.2) * rBase, Math.sin(a + 0.2) * rBase);
            ctx.closePath();
            ctx.fill();
        }
        ctx.restore();
    }

    drawStunStars(ctx) {
        ctx.save();
        const starCount = 3;
        for (let i = 0; i < starCount; i++) {
            const a = (i / starCount) * Math.PI * 2 + this.animTime * 6;
            const sx = Math.cos(a) * (this.radius * 0.85);
            const sy = -this.radius * 0.9 + Math.sin(a) * 6;

            ctx.fillStyle = '#fde047';
            ctx.beginPath();
            ctx.arc(sx, sy, 3.5, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }

    drawBleedOverlay(ctx) {
        ctx.save();
        ctx.fillStyle = '#b91c1c';
        // Капли крови стекают по корпусу вниз
        for (let i = 0; i < 4; i++) {
            const bx = Math.sin(this.animTime * 2 + i * 1.7) * (this.radius * 0.6);
            const by = -this.radius * 0.3 + ((this.animTime * 25 + i * 15) % (this.radius * 1.2));
            ctx.beginPath();
            ctx.arc(bx, by, 2.5, 0, Math.PI * 2);
            ctx.fill();
        }
        // Короткие темно-красные дуги порезов
        ctx.strokeStyle = '#991b1b';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, 0, this.radius - 2, 0.2, 0.8);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, this.radius - 4, 3.2, 3.9);
        ctx.stroke();
        ctx.restore();
    }

    drawPoisonOverlay(ctx) {
        ctx.save();
        ctx.fillStyle = '#84cc16';
        for (let i = 0; i < 5; i++) {
            const bx = Math.sin(this.animTime * 3 + i * 1.5) * (this.radius * 0.7);
            const by = -this.radius * 0.2 - ((this.animTime * 22 + i * 12) % (this.radius * 1.1));
            ctx.beginPath();
            ctx.arc(bx, by, 2.2, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }

    drawBurnOverlay(ctx) {
        ctx.save();
        for (let i = 0; i < 5; i++) {
            const a = (i / 5) * Math.PI * 2 + this.animTime * 3;
            const rTip = this.radius + 6 + Math.sin(this.animTime * 8 + i) * 3;
            ctx.fillStyle = i % 2 === 0 ? '#f97316' : '#ef4444';
            ctx.beginPath();
            ctx.arc(Math.cos(a) * rTip, Math.sin(a) * rTip, 2.5, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }

    drawShockOverlay(ctx) {
        ctx.save();
        ctx.strokeStyle = '#fde047';
        ctx.lineWidth = 1.5;
        for (let i = 0; i < 3; i++) {
            const a = (i / 3) * Math.PI * 2 + this.animTime * 5;
            const r = this.radius - 2;
            ctx.beginPath();
            ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r);
            ctx.lineTo(Math.cos(a + 0.3) * (r + 4), Math.sin(a + 0.3) * (r + 4));
            ctx.stroke();
        }
        ctx.restore();
    }

    drawCyborgArmor(ctx) {
        ctx.save();
        ctx.strokeStyle = '#22d3ee';
        ctx.lineWidth = 2;
        ctx.fillStyle = 'rgba(6, 182, 212, 0.2)';
        ctx.beginPath();
        ctx.arc(0, 0, this.radius + 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }

    drawClockworkGears(ctx) {
        ctx.save();
        const gears = this.gearCharges;
        ctx.fillStyle = '#fbbf24';
        for (let g = 0; g < gears; g++) {
            const a = (g / gears) * Math.PI * 2 + this.animTime * 4;
            const gx = Math.cos(a) * (this.radius + 7);
            const gy = Math.sin(a) * (this.radius + 7);
            ctx.beginPath();
            ctx.arc(gx, gy, 4, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }

    drawNukeElectrons(ctx) {
        ctx.save();
        const charges = this.isotopeCharges;
        ctx.strokeStyle = 'rgba(225, 29, 72, 0.4)';
        ctx.lineWidth = 1;
        // 3 эллиптические орбиты
        for (let i = 0; i < 3; i++) {
            ctx.save();
            ctx.rotate((i * Math.PI) / 3);
            ctx.beginPath();
            ctx.ellipse(0, 0, this.radius + 6, (this.radius + 6) * 0.45, 0, 0, Math.PI * 2);
            ctx.stroke();
            if (i < charges) {
                const a = this.animTime * 6 + i * 2;
                const ex = Math.cos(a) * (this.radius + 6);
                const ey = Math.sin(a) * ((this.radius + 6) * 0.45);
                ctx.fillStyle = '#fda4af';
                ctx.beginPath();
                ctx.arc(ex, ey, 3, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }
        ctx.restore();
    }

    drawWispFireflies(ctx) {
        ctx.save();
        ctx.fillStyle = '#5eead4';
        for (let i = 0; i < 5; i++) {
            const a = (i / 5) * Math.PI * 2 + this.animTime * 3.5;
            const dist = this.radius + 5 + Math.sin(this.animTime * 6 + i) * 3;
            ctx.beginPath();
            ctx.arc(Math.cos(a) * dist, Math.sin(a) * dist, 2.5, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }

    drawVoidOverlay(ctx) {
        ctx.save();
        ctx.strokeStyle = '#a855f7';
        ctx.lineWidth = 3;
        for (let i = 0; i < 4; i++) {
            const a = (i / 4) * Math.PI * 2 + this.animTime * 2;
            const r = this.radius + 6;
            ctx.beginPath();
            ctx.moveTo(Math.cos(a) * this.radius, Math.sin(a) * this.radius);
            ctx.lineTo(Math.cos(a + 0.3) * r, Math.sin(a + 0.3) * r);
            ctx.stroke();
        }
        ctx.restore();
    }
    drawBallBody(ctx) {
        switch (this.id) {
            case 'spike': this.drawSpike(ctx); break;
            case 'clockwork': this.drawClockwork(ctx); break;
            case 'cyber': this.drawCyber(ctx); break;
            case 'saw': this.drawSaw(ctx); break;
            case 'blaze': this.drawBlaze(ctx); break;
            case 'frosty': this.drawFrosty(ctx); break;
            case 'vampire': this.drawVampire(ctx); break;
            case 'toxic': this.drawToxic(ctx); break;
            case 'magnet': this.drawMagnet(ctx); break;
            case 'ninja': this.drawNinja(ctx); break;
            case 'cyborg': this.drawCyborg(ctx); break;
            case 'sand': this.drawSand(ctx); break;
            case 'wisp': this.drawWisp(ctx); break;
            case 'titan': this.drawTitan(ctx); break;
            case 'boomer': this.drawBoomer(ctx); break;
            case 'mirage': this.drawMirage(ctx); break;
            case 'laser': this.drawLaser(ctx); break;
            case 'meteor': this.drawMeteor(ctx); break;
            case 'storm': this.drawStorm(ctx); break;
            case 'crystal': this.drawCrystal(ctx); break;
            case 'tesla': this.drawTesla(ctx); break;
            case 'phantom': this.drawPhantom(ctx); break;
            case 'dragon': this.drawDragon(ctx); break;
            case 'solar': this.drawSolar(ctx); break;
            case 'kraken': this.drawKraken(ctx); break;
            case 'vortex': this.drawVortex(ctx); break;
            case 'nuke': this.drawNuke(ctx); break;
            case 'zeus': this.drawZeus(ctx); break;
            case 'berserk': this.drawBerserk(ctx); break;
            default: this.drawDefault(ctx);
        }
    }


    drawBerserk(ctx) {
            const r = this.radius;

            // 1. Закаленная темная сталь шара Гатса (чистый вектор без растровых текстур)
            const g = ctx.createRadialGradient(-r * 0.32, -r * 0.32, r * 0.08, 0, 0, r);
            g.addColorStop(0, '#475569');
            g.addColorStop(0.30, '#1e293b');
            g.addColorStop(0.70, '#0f172a');
            g.addColorStop(1, '#05070d');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // 2. Острые пряди черных волос наемника на верхней части шара (аниме-стиль)
            ctx.fillStyle = '#050508';
            ctx.beginPath();
            const spikes = [
                [-r * 0.75, -r * 0.35, -r * 0.98],
                [-r * 0.52, -r * 0.55, -r * 1.05],
                [-r * 0.28, -r * 0.65, -r * 1.08],
                [0,         -r * 0.70, -r * 1.10],
                [r * 0.28,  -r * 0.65, -r * 1.08],
                [r * 0.52,  -r * 0.55, -r * 1.05],
                [r * 0.75,  -r * 0.35, -r * 0.98]
            ];
            ctx.moveTo(-r * 0.85, -r * 0.2);
            for (const [bx, by, tipY] of spikes) {
                ctx.lineTo(bx - 3.5, by);
                ctx.lineTo(bx, tipY);
                ctx.lineTo(bx + 3.5, by);
            }
            ctx.lineTo(r * 0.85, -r * 0.2);
            ctx.closePath();
            ctx.fill();

            // Световые грани на волосах
            ctx.strokeStyle = '#27272a';
            ctx.lineWidth = 1.0;
            ctx.stroke();

            // 3. Кожаный доспех / ворот наемника в нижней полусфере
            ctx.fillStyle = '#18181b';
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.95, Math.PI * 0.2, Math.PI * 0.8);
            ctx.lineTo(r * 0.5, r * 0.6);
            ctx.lineTo(-r * 0.5, r * 0.6);
            ctx.closePath();
            ctx.fill();

            ctx.strokeStyle = '#3f3f46';
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.72, Math.PI * 0.25, Math.PI * 0.75);
            ctx.stroke();

            // Стальные заклепки на броне
            ctx.fillStyle = '#94a3b8';
            for (let i = 0; i < 5; i++) {
                const ang = Math.PI * 0.30 + i * (Math.PI * 0.10);
                ctx.beginPath();
                ctx.arc(Math.cos(ang) * (r * 0.72), Math.sin(ang) * (r * 0.72), 1.8, 0, Math.PI * 2);
                ctx.fill();
            }

            // 4. Лицо воина в векторном стиле аниме:
            // А) Правый закрытый глаз со шрамом
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 2.0;
            ctx.beginPath();
            ctx.moveTo(-r * 0.42, -r * 0.08);
            ctx.lineTo(-r * 0.14, -r * 0.05);
            ctx.stroke();

            // Глубокий боевой шрам через закрытый правый глаз и переносицу
            ctx.strokeStyle = '#ef4444';
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.moveTo(-r * 0.32, -r * 0.32);
            ctx.lineTo(-r * 0.22, r * 0.22);
            ctx.stroke();

            ctx.strokeStyle = '#fca5a5';
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(-r * 0.32, -r * 0.32);
            ctx.lineTo(-r * 0.22, r * 0.22);
            ctx.stroke();

            // Б) Левый открытый свирепый глаз (белок, темный зрачок, блик)
            // Контур глаза
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.moveTo(r * 0.14, -r * 0.04);
            ctx.lineTo(r * 0.28, -r * 0.15);
            ctx.lineTo(r * 0.44, -r * 0.05);
            ctx.lineTo(r * 0.28, -r * 0.02);
            ctx.closePath();
            ctx.fill();

            // Зрачок
            ctx.fillStyle = '#0f172a';
            ctx.beginPath();
            ctx.arc(r * 0.29, -r * 0.07, 2.8, 0, Math.PI * 2);
            ctx.fill();

            // Блик решимости в зрачке
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(r * 0.31, -r * 0.09, 1.2, 0, Math.PI * 2);
            ctx.fill();

            // Суровая бровь воина
            ctx.strokeStyle = '#09090b';
            ctx.lineWidth = 2.4;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(r * 0.12, -r * 0.15);
            ctx.lineTo(r * 0.46, -r * 0.18);
            ctx.stroke();

            // 5. Алое пылающее Клеймо Жертвы (Brand of Sacrifice) на шее
            ctx.save();
            ctx.translate(-r * 0.46, r * 0.30);
            ctx.strokeStyle = '#ef4444';
            ctx.lineWidth = 1.8;
            ctx.shadowColor = '#ef4444';
            ctx.shadowBlur = 6;
            ctx.beginPath();
            ctx.moveTo(0, -8);
            ctx.lineTo(0, 8);
            ctx.moveTo(-4.5, -4.5);
            ctx.lineTo(0, 0);
            ctx.lineTo(4.5, -4.5);
            ctx.moveTo(-3.5, 3.5);
            ctx.lineTo(0, 0);
            ctx.lineTo(3.5, 3.5);
            ctx.stroke();
            ctx.restore();
        }

    drawBerserkArmorMask(ctx) {
            const r = this.radius;
            const isRoaring = (this.berserkRoarTimer > 0);
            // Анимация раскрытия челюсти при яростном реве (1 секунда, гладкая синусоида)
            const roarOpen = isRoaring ? Math.sin((1.0 - this.berserkRoarTimer) * Math.PI) * (r * 0.25) : 0;

            ctx.save();
            // ВНИМАНИЕ: СТАТИЧЕСКАЯ ОРИЕНТАЦИЯ (без вращения сферы),
            // маска Доспеха Берсерка всегда обращена вперед, как на каноничных референсах

            // 1. Дьявольские уши-плавники (Ear Fins) Зверя Тьмы (направлены вверх-наружу)
            ctx.fillStyle = '#0a0f1d';
            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 1.4;

            // Левое ухо-рог
            ctx.beginPath();
            ctx.moveTo(-r * 0.35, -r * 0.72);
            ctx.lineTo(-r * 0.76, -r * 1.25);
            ctx.lineTo(-r * 0.70, -r * 0.45);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.strokeStyle = '#64748b';
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.moveTo(-r * 0.52, -r * 0.58);
            ctx.lineTo(-r * 0.76, -r * 1.25);
            ctx.stroke();

            // Правое ухо-рог (симметрично)
            ctx.fillStyle = '#0a0f1d';
            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.moveTo(r * 0.35, -r * 0.72);
            ctx.lineTo(r * 0.76, -r * 1.25);
            ctx.lineTo(r * 0.70, -r * 0.45);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.strokeStyle = '#64748b';
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.moveTo(r * 0.52, -r * 0.58);
            ctx.lineTo(r * 0.76, -r * 1.25);
            ctx.stroke();

            // 2. Основной купол шлема и щечные пластины (покрывает почти весь шар целиком)
            const helmGrad = ctx.createRadialGradient(-r * 0.20, -r * 0.30, r * 0.1, 0, 0, r);
            helmGrad.addColorStop(0, '#334155');
            helmGrad.addColorStop(0.35, '#1e293b');
            helmGrad.addColorStop(0.75, '#0b0f19');
            helmGrad.addColorStop(1, '#020408');
            ctx.fillStyle = helmGrad;

            ctx.beginPath();
            // Верх черепа
            ctx.moveTo(-r * 0.70, -r * 0.65);
            ctx.bezierCurveTo(-r * 0.50, -r * 1.02, r * 0.50, -r * 1.02, r * 0.70, -r * 0.65);
            // Правая скула и щечная пластина
            ctx.lineTo(r * 0.96, -r * 0.15);
            ctx.lineTo(r * 0.90, r * 0.18);
            ctx.lineTo(r * 0.98, r * 0.28);
            ctx.lineTo(r * 0.78, r * 0.68 + roarOpen * 0.3);
            // Заостренный подбородок (опускается при реве)
            ctx.lineTo(0, r * 0.98 + roarOpen * 0.5);
            // Левая скула и щечная пластина
            ctx.lineTo(-r * 0.78, r * 0.68 + roarOpen * 0.3);
            ctx.lineTo(-r * 0.98, r * 0.28);
            ctx.lineTo(-r * 0.90, r * 0.18);
            ctx.lineTo(-r * 0.96, -r * 0.15);
            ctx.closePath();
            ctx.fill();

            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 1.6;
            ctx.stroke();

            // 3. Граневые ребра черепа и центральный гребень
            ctx.strokeStyle = '#64748b';
            ctx.lineWidth = 1.3;
            ctx.beginPath();
            // Центральный дорсальный гребень
            ctx.moveTo(0, -r * 0.98);
            ctx.lineTo(0, -r * 0.05);
            // Скосы лобных пластин
            ctx.moveTo(-r * 0.65, -r * 0.65);
            ctx.lineTo(0, -r * 0.48);
            ctx.lineTo(r * 0.65, -r * 0.65);
            ctx.moveTo(-r * 0.85, -r * 0.22);
            ctx.lineTo(0, -r * 0.26);
            ctx.lineTo(r * 0.85, -r * 0.22);
            ctx.stroke();

            // 4. Забрало и клюв над носом (Visor Brow)
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.moveTo(-r * 0.62, -r * 0.16);
            ctx.lineTo(-r * 0.18, -r * 0.12);
            ctx.lineTo(0, r * 0.06);
            ctx.lineTo(r * 0.18, -r * 0.12);
            ctx.lineTo(r * 0.62, -r * 0.16);
            ctx.stroke();

            // 5. Глаза-прорези Зверя Тьмы (ПОДНЯТЫ ВЫШЕ, СИММЕТРИЧНЫ, СТРОГО БЕЗ МЕРЦАНИЯ)
            ctx.fillStyle = '#ff0033';
            ctx.shadowColor = '#ff0033';
            ctx.shadowBlur = isRoaring ? 24 : 10;

            // Левый хищный глаз
            ctx.beginPath();
            ctx.moveTo(-r * 0.52, -r * 0.26);
            ctx.lineTo(-r * 0.14, -r * 0.18);
            ctx.lineTo(-r * 0.22, -r * 0.14);
            ctx.lineTo(-r * 0.48, -r * 0.20);
            ctx.closePath();
            ctx.fill();

            // Правый хищный глаз
            ctx.beginPath();
            ctx.moveTo(r * 0.52, -r * 0.26);
            ctx.lineTo(r * 0.14, -r * 0.18);
            ctx.lineTo(r * 0.22, -r * 0.14);
            ctx.lineTo(r * 0.48, -r * 0.20);
            ctx.closePath();
            ctx.fill();

            // Бело-горячая лазерная сердцевина в прорезях глаз
            ctx.fillStyle = '#ffffff';
            ctx.shadowBlur = isRoaring ? 8 : 4;
            ctx.beginPath();
            ctx.moveTo(-r * 0.42, -r * 0.24);
            ctx.lineTo(-r * 0.18, -r * 0.18);
            ctx.lineTo(-r * 0.25, -r * 0.16);
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(r * 0.42, -r * 0.24);
            ctx.lineTo(r * 0.18, -r * 0.18);
            ctx.lineTo(r * 0.25, -r * 0.16);
            ctx.closePath();
            ctx.fill();
            ctx.shadowBlur = 0;

            // 6. Демоническая пасть Зверя Тьмы (раскрывается при реве)
            ctx.fillStyle = '#000000';
            ctx.beginPath();
            ctx.moveTo(-r * 0.56, r * 0.20);
            ctx.lineTo(0, r * 0.26);
            ctx.lineTo(r * 0.56, r * 0.20);
            ctx.lineTo(r * 0.48, r * 0.54 + roarOpen);
            ctx.lineTo(0, r * 0.48 + roarOpen);
            ctx.lineTo(-r * 0.48, r * 0.54 + roarOpen);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Пламя и бездна внутри раскрытой пасти во время рева
            if (roarOpen > 2) {
                const throatGrad = ctx.createRadialGradient(0, r * 0.35 + roarOpen * 0.5, 2, 0, r * 0.35 + roarOpen * 0.5, r * 0.4);
                throatGrad.addColorStop(0, '#ffffff');
                throatGrad.addColorStop(0.35, '#ff0033');
                throatGrad.addColorStop(1, 'rgba(153, 27, 27, 0)');
                ctx.fillStyle = throatGrad;
                ctx.beginPath();
                ctx.ellipse(0, r * 0.36 + roarOpen * 0.5, r * 0.32, roarOpen * 0.8, 0, 0, Math.PI * 2);
                ctx.fill();
            }

            // Острые треугольные хромированные клыки (взаимно сцепленные)
            ctx.fillStyle = '#f1f5f9';
            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 0.8;

            // Верхние клыки (смотрят вниз)
            for (let i = 0; i < 6; i++) {
                const tx = -r * 0.42 + i * (r * 0.168);
                const ty = r * 0.21 + Math.abs(tx) * 0.10;
                ctx.beginPath();
                ctx.moveTo(tx - 3.0, ty);
                ctx.lineTo(tx, ty + 11);
                ctx.lineTo(tx + 3.0, ty);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }

            // Нижние клыки (в шахматном порядке смотрят вверх, смещаются вниз при реве)
            for (let i = 0; i < 5; i++) {
                const tx = -r * 0.336 + i * (r * 0.168);
                const ty = r * 0.52 + roarOpen - Math.abs(tx) * 0.08;
                ctx.beginPath();
                ctx.moveTo(tx - 2.8, ty);
                ctx.lineTo(tx, ty - 11);
                ctx.lineTo(tx + 2.8, ty);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }

            // 7. Нижняя челюсть и заостренный подбородок
            ctx.strokeStyle = '#64748b';
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.moveTo(-r * 0.48, r * 0.56 + roarOpen * 0.3);
            ctx.lineTo(0, r * 0.98 + roarOpen * 0.5);
            ctx.lineTo(r * 0.48, r * 0.56 + roarOpen * 0.3);
            ctx.moveTo(0, r * 0.56 + roarOpen * 0.3);
            ctx.lineTo(0, r * 0.98 + roarOpen * 0.5);
            ctx.stroke();

            // Стальные заклепки на пластинах
            ctx.fillStyle = '#94a3b8';
            const maskRivets = [
                [-r * 0.78, r * 0.18], [r * 0.78, r * 0.18],
                [-r * 0.65, r * 0.50 + roarOpen * 0.2], [r * 0.65, r * 0.50 + roarOpen * 0.2],
                [-r * 0.45, -r * 0.65], [r * 0.45, -r * 0.65]
            ];
            for (let j = 0; j < maskRivets.length; j++) {
                ctx.beginPath();
                ctx.arc(maskRivets[j][0], maskRivets[j][1], 1.4, 0, Math.PI * 2);
                ctx.fill();
            }

            // 8. Акустические ударные кольца рева, исходящие из раскрытой пасти
            if (isRoaring) {
                const roarProgress = 1.0 - this.berserkRoarTimer;
                ctx.save();
                for (let ring = 0; ring < 3; ring++) {
                    const p = (roarProgress * 2.8 + ring * 0.33) % 1.0;
                    const ringR = r * 0.75 + p * (r * 1.6);
                    const alpha = Math.max(0, (1.0 - p) * 0.85);
                    ctx.strokeStyle = `rgba(255, 0, 50, ${alpha})`;
                    ctx.lineWidth = 3.2 * (1.0 - p);
                    ctx.shadowColor = '#ff0033';
                    ctx.shadowBlur = 12;
                    ctx.beginPath();
                    ctx.arc(0, r * 0.36 + roarOpen * 0.5, ringR, -Math.PI * 0.85, -Math.PI * 0.15);
                    ctx.stroke();
                }
                ctx.restore();
            }

            ctx.restore();
        }

    drawBerserkBloodTrail(ctx) {
            if (!this.berserkBloodTrail || this.berserkBloodTrail.length < 2) return;
            ctx.save();
            ctx.translate(-this.pos.x, -this.pos.y);

            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            for (let i = 0; i < this.berserkBloodTrail.length - 1; i++) {
                const p1 = this.berserkBloodTrail[i];
                const p2 = this.berserkBloodTrail[i + 1];
                const alpha = Math.max(0, p1.life * 0.55);

                ctx.strokeStyle = `rgba(239, 68, 68, ${alpha})`;
                ctx.lineWidth = Math.max(0.8, p1.life * 2.8);
                ctx.shadowColor = '#dc2626';
                ctx.shadowBlur = 6;

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }

            ctx.restore();
        }

    drawBerserkEyeStreaks(ctx) {
            ctx.save();
            ctx.translate(-this.pos.x, -this.pos.y);
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            const drawStreak = (trail) => {
                if (!trail || trail.length < 2) return;
                for (let i = 0; i < trail.length - 1; i++) {
                    const p1 = trail[i];
                    const p2 = trail[i + 1];
                    const frac = 1.0 - (i / trail.length);
                    const alpha = Math.max(0, p1.life * frac * 0.95);

                    // Внешний неоново-алый ореол
                    ctx.strokeStyle = `rgba(255, 0, 50, ${alpha})`;
                    ctx.lineWidth = Math.max(1.2, frac * 4.2);
                    ctx.shadowColor = '#ff0033';
                    ctx.shadowBlur = 10;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();

                    // Внутренний лазерный луч
                    ctx.strokeStyle = `rgba(255, 230, 235, ${alpha * 0.95})`;
                    ctx.lineWidth = Math.max(0.6, frac * 1.6);
                    ctx.shadowBlur = 3;
                    ctx.stroke();
                }
            };

            drawStreak(this.berserkLeftEyeTrail);
            drawStreak(this.berserkRightEyeTrail);

            ctx.restore();
        }

    drawBerserkSlashTrail(ctx) {
            if (!this.berserkSwordSweepTrail || this.berserkSwordSweepTrail.length < 2) return;
            ctx.save();
            ctx.translate(-this.pos.x, -this.pos.y);

            const trail = this.berserkSwordSweepTrail;
            const n = trail.length;

            // 1. Заполненный полупрозрачный веер/сектор рассечения между острием и серединой клинка
            ctx.beginPath();
            ctx.moveTo(trail[0].tipX, trail[0].tipY);
            for (let i = 1; i < n; i++) {
                ctx.lineTo(trail[i].tipX, trail[i].tipY);
            }
            for (let i = n - 1; i >= 0; i--) {
                ctx.lineTo(trail[i].midX, trail[i].midY);
            }
            ctx.closePath();

            const leadLife = Math.max(0, trail[0].life);
            ctx.fillStyle = `rgba(220, 38, 38, ${0.28 * leadLife})`;
            ctx.fill();

            // Внутренний горячий блик по центру рассечения
            ctx.fillStyle = `rgba(255, 255, 255, ${0.12 * leadLife})`;
            ctx.fill();

            // 2. Яркая внешняя режущая кромка по траектории острия меча
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            for (let i = 0; i < n - 1; i++) {
                const p1 = trail[i];
                const p2 = trail[i + 1];
                const frac = 1.0 - (i / n);
                const alpha = Math.max(0, p1.life * frac);

                // Широкое алое плазменное свечение
                ctx.strokeStyle = `rgba(255, 0, 50, ${alpha * 0.95})`;
                ctx.lineWidth = Math.max(2.0, frac * 9.5);
                ctx.shadowColor = '#ff0033';
                ctx.shadowBlur = 14;

                ctx.beginPath();
                ctx.moveTo(p1.tipX, p1.tipY);
                ctx.lineTo(p2.tipX, p2.tipY);
                ctx.stroke();

                // Бело-горячая острая лазерная сердцевина
                ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.98})`;
                ctx.lineWidth = Math.max(1.0, frac * 3.5);
                ctx.shadowBlur = 5;
                ctx.stroke();
            }

            // 3. Нижняя кромка вдоль середины клинка
            ctx.shadowBlur = 0;
            ctx.strokeStyle = `rgba(239, 68, 68, ${0.45 * leadLife})`;
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            ctx.moveTo(trail[0].midX, trail[0].midY);
            for (let i = 1; i < n; i++) {
                ctx.lineTo(trail[i].midX, trail[i].midY);
            }
            ctx.stroke();

            ctx.restore();
        }

    drawBerserkSword(ctx) {
            if (!this.berserkPhase2Active && this.hp > 40) return; // Строго отсутствует в первой фазе

            let swingOffset = 0.35; // Угол покоя (+20° к направлению противника)

            if (this.berserkSwingActive) {
                const swingDuration = 0.36; // Быстрый, сокрушительный рубящий взмах
                const p = Math.min(1.0, this.berserkSwingTimer / swingDuration);
                if (p < 0.22) {
                    // Быстрый замах назад и подъем меча за плечо (0.35 rad -> -2.35 rad, дуга ~155°)
                    const t = p / 0.22;
                    const ease = t * t * (3 - 2 * t);
                    swingOffset = 0.35 - ease * 2.70;
                } else if (p <= 0.72) {
                    // Сокрушительный рубящий взмах вперед и вниз (-2.35 rad -> +1.60 rad, гигантская дуга ~226°)
                    const t = (p - 0.22) / 0.50;
                    const ease = t * t * (3 - 2 * t);
                    swingOffset = -2.35 + ease * 3.95;
                } else {
                    // Плавный возврат в исходную стойку (+1.60 rad -> +0.35 rad)
                    const t = (p - 0.72) / 0.28;
                    const ease = t * t * (3 - 2 * t);
                    swingOffset = 1.60 - ease * 1.25;
                }
            }

            const r = this.radius;
            const cosA = Math.cos(this.berserkAimAngle);
            const sinA = Math.sin(this.berserkAimAngle);

            // Хват меча строго вынесен за пределы шара (справа-сзади корпуса, в руках берсерка — согласно референсу 2)
            // fwd = -r * 0.20, right = r * 1.35
            const relAx = cosA * (-r * 0.20) + (-sinA) * (r * 1.35);
            const relAy = sinA * (-r * 0.20) + cosA * (r * 1.35);

            ctx.save();
            ctx.translate(relAx, relAy);
            ctx.rotate(this.berserkAimAngle + swingOffset);

            // =================================================================
            // КОЛОССАЛЬНЫЙ МЕЧ УБИЙЦА ДРАКОНОВ (DRAGON SLAYER) — КАНОН РЕФЕРЕНС 3
            // Увеличенная длина (118px) для максимальной дальности поражения
            // =================================================================
            const bladeLen = 118;
            const bladeW = 27;

            // 1. Черненые латные рукавицы Берсерка (держат рукоять снаружи шара)
            ctx.fillStyle = '#0f172a';
            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 1.4;
            // Предплечье / налокотник
            ctx.beginPath();
            ctx.ellipse(-18, 0, 8, 6, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            // Сжатый латный кулак вокруг рукояти
            ctx.beginPath();
            ctx.ellipse(-6, 0, 6, 7, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            // Заклепки на латной перчатке
            ctx.fillStyle = '#cbd5e1';
            ctx.beginPath();
            ctx.arc(-6, -3, 1.2, 0, Math.PI * 2);
            ctx.arc(-6, 3, 1.2, 0, Math.PI * 2);
            ctx.fill();

            // 2. Двуручная длинная рукоять с темной обмоткой
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(-28, -4.5, 25, 9);
            ctx.strokeStyle = '#090d16';
            ctx.lineWidth = 1.4;
            for (let x = -26; x <= -6; x += 4) {
                ctx.beginPath();
                ctx.moveTo(x, -4.5);
                ctx.lineTo(x + 2, 4.5);
                ctx.stroke();
            }

            // Массивное тяжелое стальное навершие-противовес
            ctx.fillStyle = '#475569';
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.rect(-34, -6.5, 7, 13);
            ctx.fill();
            ctx.stroke();

            // 3. Полукруглая гарда-воротник с центральным кольцом (каноничный референс 3)
            ctx.fillStyle = '#475569';
            ctx.strokeStyle = '#cbd5e1';
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.arc(-2, 0, 11, Math.PI / 2, Math.PI * 1.5);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Центральное отверстие-кольцо
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 2.0;
            ctx.beginPath();
            ctx.arc(-7, 0, 4.0, 0, Math.PI * 2);
            ctx.stroke();

            // 4. Гигантский монолитный клинок из черненого железа (Blackened Iron Slab)
            const bladeGrad = ctx.createLinearGradient(0, -bladeW / 2, 0, bladeW / 2);
            bladeGrad.addColorStop(0, '#64748b');
            bladeGrad.addColorStop(0.18, '#334155');
            bladeGrad.addColorStop(0.5, '#0b0d14');
            bladeGrad.addColorStop(0.82, '#334155');
            bladeGrad.addColorStop(1, '#64748b');

            ctx.fillStyle = bladeGrad;
            ctx.beginPath();
            ctx.moveTo(0, -bladeW / 2);
            ctx.lineTo(bladeLen - 22, -bladeW / 2);
            ctx.lineTo(bladeLen, 0);
            ctx.lineTo(bladeLen - 22, bladeW / 2);
            ctx.lineTo(0, bladeW / 2);
            ctx.closePath();
            ctx.fill();

            // Заточенные скосы лезвия
            ctx.strokeStyle = '#f1f5f9';
            ctx.lineWidth = 2.0;
            ctx.stroke();

            // Продольные желобы-долы
            ctx.strokeStyle = '#090d16';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(6, -bladeW * 0.28);
            ctx.lineTo(bladeLen - 24, -bladeW * 0.28);
            ctx.moveTo(6, bladeW * 0.28);
            ctx.lineTo(bladeLen - 24, bladeW * 0.28);
            ctx.stroke();

            // Аура жажды крови на клинке
            ctx.strokeStyle = 'rgba(239, 68, 68, 0.45)';
            ctx.lineWidth = 3.5;
            ctx.shadowColor = '#ef4444';
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.moveTo(0, -bladeW / 2);
            ctx.lineTo(bladeLen - 22, -bladeW / 2);
            ctx.lineTo(bladeLen, 0);
            ctx.lineTo(bladeLen - 22, bladeW / 2);
            ctx.lineTo(0, bladeW / 2);
            ctx.stroke();
            ctx.shadowBlur = 0;
            ctx.restore();
        }

    drawBlaze(ctx) {
            const r = this.radius;

            // 1. Внешняя магматическая основа (глубокий обсидиан и раскаленная лава)
            const g = ctx.createRadialGradient(-r * 0.28, -r * 0.28, r * 0.08, 0, 0, r);
            g.addColorStop(0, '#fffbeb');
            g.addColorStop(0.18, '#fef08a');
            g.addColorStop(0.42, '#f97316');
            g.addColorStop(0.72, '#991b1b');
            g.addColorStop(0.92, '#291008');
            g.addColorStop(1, '#130603');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // 2. Базальтовые тектонические плиты коры
            ctx.fillStyle = '#1c0a06';
            const plates = [
                [[-r * 0.85, -r * 0.2], [-r * 0.5, -r * 0.7], [-r * 0.2, -r * 0.5], [-r * 0.5, -r * 0.1]],
                [[r * 0.1, -r * 0.85], [r * 0.65, -r * 0.55], [r * 0.45, -r * 0.2], [r * 0.05, -r * 0.45]],
                [[r * 0.55, -r * 0.1], [r * 0.85, r * 0.2], [r * 0.6, r * 0.6], [r * 0.25, r * 0.3]],
                [[-r * 0.1, r * 0.35], [r * 0.3, r * 0.75], [-r * 0.2, r * 0.85], [-r * 0.5, r * 0.5]],
                [[-r * 0.8, r * 0.1], [-r * 0.55, r * 0.4], [-r * 0.75, r * 0.55], [-r * 0.88, r * 0.3]]
            ];
            for (const plate of plates) {
                ctx.beginPath();
                plate.forEach((pt, idx) => {
                    if (idx === 0) ctx.moveTo(pt[0], pt[1]);
                    else ctx.lineTo(pt[0], pt[1]);
                });
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = '#0a0301';
                ctx.lineWidth = 1.2;
                ctx.stroke();
            }

            // 3. Органические ветвящиеся магматические разломы с пульсацией жара
            const glowPulse = 0.8 + Math.sin(this.animTime * 4) * 0.2;
            ctx.strokeStyle = `rgba(254, 240, 138, ${glowPulse})`;
            ctx.lineWidth = 2.4;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            // Главные лавовые артерии
            ctx.beginPath();
            ctx.moveTo(-r * 0.5, -r * 0.1);
            ctx.lineTo(-r * 0.15, -r * 0.25);
            ctx.lineTo(r * 0.2, -r * 0.05);
            ctx.lineTo(r * 0.55, -r * 0.1);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(-r * 0.15, -r * 0.25);
            ctx.lineTo(-r * 0.05, r * 0.25);
            ctx.lineTo(r * 0.25, r * 0.3);
            ctx.stroke();

            // Тонкие раскаленные ответвления
            ctx.strokeStyle = '#ea580c';
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.moveTo(r * 0.2, -r * 0.05);
            ctx.lineTo(r * 0.4, r * 0.15);
            ctx.moveTo(-r * 0.05, r * 0.25);
            ctx.lineTo(-r * 0.35, r * 0.45);
            ctx.stroke();

            // 4. Раскаленное внутреннее ядро
            const coreG = ctx.createRadialGradient(-r * 0.18, -r * 0.18, 1, -r * 0.18, -r * 0.18, r * 0.38);
            coreG.addColorStop(0, '#ffffff');
            coreG.addColorStop(0.4, '#fde047');
            coreG.addColorStop(0.8, 'rgba(249, 115, 22, 0.4)');
            coreG.addColorStop(1, 'rgba(234, 88, 12, 0)');
            ctx.fillStyle = coreG;
            ctx.beginPath();
            ctx.arc(-r * 0.18, -r * 0.18, r * 0.38, 0, Math.PI * 2);
            ctx.fill();

            // 5. Огненная корона по контуру
            ctx.strokeStyle = 'rgba(249, 115, 22, 0.6)';
            ctx.lineWidth = 2.0;
            ctx.beginPath();
            ctx.arc(0, 0, r - 1, 0, Math.PI * 2);
            ctx.stroke();
        }

    drawBlazeOrbitingFireballs(ctx) {
            if (this.isUIPreview) return;
            ctx.save();
            const charges = Math.min(3, this.blazeFireballCharges || 0);
            const baseAngle = this.facingAngle || 0;
            const dist = this.radius + 13;

            for (let i = 0; i < charges; i++) {
                const angle = baseAngle + (i * Math.PI * 2 / 3);
                const fx = Math.cos(angle) * dist;
                const fy = Math.sin(angle) * dist;
                const fbR = 6.0;

                const g = ctx.createRadialGradient(fx, fy, 1, fx, fy, fbR * 1.8);
                g.addColorStop(0, '#ffffff');
                g.addColorStop(0.3, '#fef08a');
                g.addColorStop(0.7, '#f97316');
                g.addColorStop(1, 'rgba(234, 88, 12, 0)');

                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(fx, fy, fbR * 1.8, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#fef08a';
                ctx.beginPath();
                ctx.arc(fx, fy, fbR * 0.75, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(fx, fy, fbR * 0.4, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }

    drawBleedOverlay(ctx) {
            ctx.save();
            ctx.fillStyle = '#b91c1c';
            // Капли крови стекают по корпусу вниз
            for (let i = 0; i < 4; i++) {
                const bx = Math.sin(this.animTime * 2 + i * 1.7) * (this.radius * 0.6);
                const by = -this.radius * 0.3 + ((this.animTime * 25 + i * 15) % (this.radius * 1.2));
                ctx.beginPath();
                ctx.arc(bx, by, 2.5, 0, Math.PI * 2);
                ctx.fill();
            }
            // Короткие темно-красные дуги порезов
            ctx.strokeStyle = '#991b1b';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(0, 0, this.radius - 2, 0.2, 0.8);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0, 0, this.radius - 4, 3.2, 3.9);
            ctx.stroke();
            ctx.restore();
        }

    drawBoomer(ctx) {
            const r = this.radius;

            // 1. Матовый баллистический корпус из оружейной стали
            const g = ctx.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.05, 0, 0, r);
            g.addColorStop(0, '#52525b');
            g.addColorStop(0.35, '#27272a');
            g.addColorStop(0.75, '#18181b');
            g.addColorStop(1, '#09090b');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // 2. Диагональные черно-желтые полосы промышленной опасности (Hazard Stripes)
            ctx.save();
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.85, 0, Math.PI * 2);
            ctx.clip();

            ctx.rotate(-Math.PI / 4);
            const stripeW = r * 0.28;
            for (let x = -r * 2; x < r * 2; x += stripeW * 2) {
                ctx.fillStyle = '#eab308'; // Ярко-желтый шеврон опасности
                ctx.fillRect(x, -r * 2, stripeW, r * 4);
                ctx.fillStyle = '#18181b'; // Черная полоса
                ctx.fillRect(x + stripeW, -r * 2, stripeW, r * 4);
            }
            ctx.restore();

            // 3. Усиленный стальной бронепояс с титановыми болтами
            ctx.strokeStyle = '#3f3f46';
            ctx.lineWidth = 3.5;
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.58, 0, Math.PI * 2);
            ctx.stroke();

            ctx.strokeStyle = '#71717a';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.62, 0, Math.PI * 2);
            ctx.stroke();

            // 4. Центральное volatile-ядро детонатора с пульсирующим аварийным диодом
            const pulse = 0.7 + Math.sin(this.animTime * 6) * 0.3;
            const coreGrad = ctx.createRadialGradient(0, 0, 1, 0, 0, r * 0.36);
            coreGrad.addColorStop(0, '#fef08a');
            coreGrad.addColorStop(0.4, '#ef4444');
            coreGrad.addColorStop(0.85, '#991b1b');
            coreGrad.addColorStop(1, '#450a0a');
            ctx.fillStyle = coreGrad;
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.36, 0, Math.PI * 2);
            ctx.fill();

            // Цифровое перекрестие прицела детонатора
            ctx.strokeStyle = `rgba(254, 240, 138, ${pulse})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(-r * 0.25, 0); ctx.lineTo(r * 0.25, 0);
            ctx.moveTo(0, -r * 0.25); ctx.lineTo(0, r * 0.25);
            ctx.stroke();

            // 4 заклепки / болта
            for (let i = 0; i < 4; i++) {
                const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
                const bx = Math.cos(a) * r * 0.58;
                const by = Math.sin(a) * r * 0.58;
                ctx.fillStyle = '#a1a1aa';
                ctx.beginPath();
                ctx.arc(bx, by, 2.2, 0, Math.PI * 2);
                ctx.fill();
            }
        }

    drawBurnOverlay(ctx) {
            ctx.save();
            for (let i = 0; i < 5; i++) {
                const a = (i / 5) * Math.PI * 2 + this.animTime * 3;
                const rTip = this.radius + 6 + Math.sin(this.animTime * 8 + i) * 3;
                ctx.fillStyle = i % 2 === 0 ? '#f97316' : '#ef4444';
                ctx.beginPath();
                ctx.arc(Math.cos(a) * rTip, Math.sin(a) * rTip, 2.5, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }

    drawClockwork(ctx) {
            const r = this.radius;
            const g = ctx.createRadialGradient(0, 0, r * 0.1, 0, 0, r);
            g.addColorStop(0, '#78350f'); g.addColorStop(0.65, '#451a03'); g.addColorStop(1, '#1c0a02');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            // Внутреннее зубчатое золотое кольцо
            ctx.fillStyle = '#d97706';
            for (let i = 0; i < 12; i++) {
                const a = (i / 12) * Math.PI * 2;
                ctx.save(); ctx.rotate(a);
                ctx.fillRect(-2.5, -r * 0.82, 5, r * 0.2);
                ctx.restore();
            }
            ctx.beginPath(); ctx.arc(0, 0, r * 0.68, 0, Math.PI * 2); ctx.fill();

            // Темный циферблат
            ctx.fillStyle = '#1c0a02';
            ctx.beginPath(); ctx.arc(0, 0, r * 0.54, 0, Math.PI * 2); ctx.fill();

            // Стрелки хронометра
            ctx.strokeStyle = '#fef3c7'; ctx.lineWidth = 2.5; ctx.lineCap = 'round';
            ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(r * 0.38, 0); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -r * 0.28); ctx.stroke();

            // Центральная золотая заклепка
            ctx.fillStyle = '#fbbf24'; ctx.beginPath(); ctx.arc(0, 0, 4, 0, Math.PI * 2); ctx.fill();
        }

    drawClockworkGears(ctx) {
            ctx.save();
            const gears = this.gearCharges;
            ctx.fillStyle = '#fbbf24';
            for (let g = 0; g < gears; g++) {
                const a = (g / gears) * Math.PI * 2 + this.animTime * 4;
                const gx = Math.cos(a) * (this.radius + 7);
                const gy = Math.sin(a) * (this.radius + 7);
                ctx.beginPath();
                ctx.arc(gx, gy, 4, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }

    drawClockworkTimeDial(ctx) {
            const phaseTime = (this.clockworkCycleTimer || 0) % 15.0;
            const isFast = phaseTime < 5.0;
            const isSlow = phaseTime >= 10.0;
            if (!isFast && !isSlow) return; // 5 сек ничего!

            ctx.save();
            const r = this.radius * 0.95;
            ctx.globalAlpha = 0.72;

            const tint = isFast ? '#fbbf24' : '#94a3b8';
            const glowColor = isFast ? 'rgba(251, 191, 36, 0.28)' : 'rgba(148, 163, 184, 0.25)';

            // Полупрозрачный ореол циферблата
            ctx.fillStyle = glowColor;
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // Обод часов
            ctx.strokeStyle = tint;
            ctx.lineWidth = 2.0;
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.stroke();

            // 12 часовых делений
            for (let i = 0; i < 12; i++) {
                const a = (i / 12) * Math.PI * 2;
                const isMajor = i % 3 === 0;
                const len = isMajor ? 5.5 : 2.8;
                ctx.lineWidth = isMajor ? 2.0 : 1.2;
                ctx.strokeStyle = isMajor ? '#ffffff' : tint;
                ctx.beginPath();
                ctx.moveTo(Math.cos(a) * (r - len), Math.sin(a) * (r - len));
                ctx.lineTo(Math.cos(a) * (r - 0.8), Math.sin(a) * (r - 0.8));
                ctx.stroke();
            }

            // Стрелка часов: при ускорении быстро бежит вперед (+13.5 рад/с), при замедлении - назад (-8.5 рад/с)
            const handSpeed = isFast ? 13.5 : -8.5;
            const handAngle = this.animTime * handSpeed;

            // Минутная стрелка (длинная белая с острием)
            ctx.lineWidth = 2.4;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#ffffff';
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos(handAngle) * (r * 0.70), Math.sin(handAngle) * (r * 0.70));
            ctx.stroke();

            // Часовая стрелка (короткая)
            const hourAngle = handAngle / 12.0;
            ctx.lineWidth = 3.2;
            ctx.strokeStyle = tint;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos(hourAngle) * (r * 0.44), Math.sin(hourAngle) * (r * 0.44));
            ctx.stroke();

            // Центральная ось
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(0, 0, 3.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }

    drawCrystal(ctx) {
            const r = this.radius;
            const g = ctx.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.1, 0, 0, r);
            g.addColorStop(0, '#ffffff'); g.addColorStop(0.35, '#7dd3fc'); g.addColorStop(0.7, '#0284c7'); g.addColorStop(1, '#075985');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            // Огранка бриллианта
            ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 1.8;
            // Внутренний восьмиугольник
            ctx.beginPath();
            for (let i = 0; i < 8; i++) {
                const a = (i / 8) * Math.PI * 2;
                const x = Math.cos(a) * (r * 0.48);
                const y = Math.sin(a) * (r * 0.48);
                if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }
            ctx.closePath(); ctx.stroke();

            // Линии граней к внешнему краю
            for (let i = 0; i < 8; i++) {
                const a = (i / 8) * Math.PI * 2;
                ctx.beginPath();
                ctx.moveTo(Math.cos(a) * (r * 0.48), Math.sin(a) * (r * 0.48));
                ctx.lineTo(Math.cos(a) * (r * 0.88), Math.sin(a) * (r * 0.88));
                ctx.stroke();
            }
        }

    drawCyber(ctx) {
            const r = this.radius;

            // Внешний корпус: глубокий карбоновый титан с сияющей неоновой каймой
            const g = ctx.createRadialGradient(-r * 0.2, -r * 0.2, r * 0.05, 0, 0, r);
            g.addColorStop(0, '#0f2942');
            g.addColorStop(0.45, '#061626');
            g.addColorStop(0.85, '#020b14');
            g.addColorStop(1, '#001a33');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // Неоновый внешний контур с бирюзовым свечением
            ctx.strokeStyle = '#00f0ff';
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            ctx.arc(0, 0, r - 0.8, 0, Math.PI * 2);
            ctx.stroke();

            // Круговой сегментный трек
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.25)';
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.72, 0, Math.PI * 2);
            ctx.stroke();

            // 4 угловые неоновые шины питания со светодиодными узлами
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 1.6;
            for (let i = 0; i < 4; i++) {
                const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
                const x1 = Math.cos(a) * (r * 0.42);
                const y1 = Math.sin(a) * (r * 0.42);
                const x2 = Math.cos(a) * (r * 0.72);
                const y2 = Math.sin(a) * (r * 0.72);
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();

                // Светящийся узел на шине
                ctx.fillStyle = '#00f0ff';
                ctx.beginPath();
                ctx.arc(x2, y2, 2.0, 0, Math.PI * 2);
                ctx.fill();
            }

            // Центральный вращающийся неоновый реактор
            ctx.save();
            ctx.rotate(this.animTime * 2.5);

            // Шестиугольный контур реактора
            ctx.strokeStyle = '#00f0ff';
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const ha = (i / 6) * Math.PI * 2;
                const hx = Math.cos(ha) * (r * 0.38);
                const hy = Math.sin(ha) * (r * 0.38);
                if (i === 0) ctx.moveTo(hx, hy);
                else ctx.lineTo(hx, hy);
            }
            ctx.closePath();
            ctx.stroke();

            // 3 реакторных лопасти
            ctx.fillStyle = 'rgba(0, 240, 255, 0.45)';
            for (let i = 0; i < 3; i++) {
                const ba = (i / 3) * Math.PI * 2;
                ctx.beginPath();
                ctx.arc(0, 0, r * 0.32, ba - 0.35, ba + 0.35);
                ctx.lineTo(0, 0);
                ctx.closePath();
                ctx.fill();
            }
            ctx.restore();

            // Центральный сияющий энергетический кристалл-диод
            const coreG = ctx.createRadialGradient(0, 0, 1, 0, 0, r * 0.22);
            coreG.addColorStop(0, '#ffffff');
            coreG.addColorStop(0.35, '#38bdf8');
            coreG.addColorStop(0.7, '#0284c7');
            coreG.addColorStop(1, 'rgba(2, 132, 199, 0)');
            ctx.fillStyle = coreG;
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.22, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(0, 0, 2.5, 0, Math.PI * 2);
            ctx.fill();
        }

    drawCyberSpeedAura(ctx) {
            const stacks = Math.min(5, this.cyberSpeedStacks || 0);
            if (stacks <= 0) return;

            const maxJitter = stacks * 2.2; // от 2.2px (1 стак) до 11px (5 стаков)
            const numGhosts = Math.min(stacks + 1, 4);

            for (let k = 0; k < numGhosts; k++) {
                ctx.save();
                const freq = 42 + k * 18;
                const seed = this.animTime * freq + k * 2.1;
                const jx = Math.sin(seed) * maxJitter + Math.cos(this.animTime * 83 + k) * (maxJitter * 0.4);
                const jy = Math.cos(seed * 1.15) * maxJitter + Math.sin(this.animTime * 71 + k) * (maxJitter * 0.4);

                ctx.translate(jx, jy);
                ctx.globalAlpha = Math.min(0.65, (0.12 + stacks * 0.07) / (k * 0.5 + 1));

                // Отрисовка полупрозрачной копии тела шара со смещением
                ctx.save();
                ctx.beginPath();
                ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
                ctx.clip();
                ctx.rotate(this.facingAngle);
                this.drawBallBody(ctx);
                ctx.restore();

                // Неоновый хроматический абрис призрака скорости
                ctx.strokeStyle = k % 2 === 0 ? 'rgba(0, 240, 255, 0.75)' : 'rgba(56, 189, 248, 0.55)';
                ctx.lineWidth = 1.4;
                ctx.beginPath();
                ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
                ctx.stroke();

                ctx.restore();
            }
        }

    drawCyborg(ctx) {
            const r = this.radius;
            const g = ctx.createLinearGradient(-r, 0, r, 0);
            g.addColorStop(0, '#64748b'); g.addColorStop(0.5, '#334155'); g.addColorStop(1, '#0f172a');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            // Шов между органикой и кибернетикой
            ctx.strokeStyle = '#0f172a'; ctx.lineWidth = 2.5;
            ctx.beginPath(); ctx.moveTo(0, -r); ctx.lineTo(0, r); ctx.stroke();

            // Красный лазерный окуляр на правой стороне
            ctx.fillStyle = '#1e293b';
            ctx.beginPath(); ctx.arc(r * 0.35, -r * 0.15, r * 0.25, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ef4444';
            ctx.beginPath(); ctx.arc(r * 0.35, -r * 0.15, r * 0.16, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffffff';
            ctx.beginPath(); ctx.arc(r * 0.32, -r * 0.18, 2.5, 0, Math.PI * 2); ctx.fill();

            // Сетка прицела
            ctx.strokeStyle = '#f87171'; ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(r * 0.15, -r * 0.15); ctx.lineTo(r * 0.55, -r * 0.15);
            ctx.moveTo(r * 0.35, -r * 0.35); ctx.lineTo(r * 0.35, 0.05);
            ctx.stroke();
        }

    drawCyborgArmor(ctx) {
            ctx.save();
            ctx.strokeStyle = '#22d3ee';
            ctx.lineWidth = 2;
            ctx.fillStyle = 'rgba(6, 182, 212, 0.2)';
            ctx.beginPath();
            ctx.arc(0, 0, this.radius + 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }

    drawDefault(ctx) {
            const r = this.radius;
            const g = ctx.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.1, 0, 0, r);
            g.addColorStop(0, '#f8fafc'); g.addColorStop(0.5, '#64748b'); g.addColorStop(1, '#0f172a');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
        }

    drawDragon(ctx) {
            const r = this.radius;
            const g = ctx.createRadialGradient(-r * 0.25, -r * 0.25, r * 0.1, 0, 0, r);
            g.addColorStop(0, '#dc2626'); g.addColorStop(0.5, '#7f1d1d'); g.addColorStop(0.85, '#450a0a'); g.addColorStop(1, '#1c0505');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            // Драконья чешуя
            ctx.strokeStyle = '#b91c1c'; ctx.lineWidth = 1.5;
            for (let row = -2; row <= 2; row++) {
                const y = row * (r * 0.3);
                for (let col = -2; col <= 2; col++) {
                    const x = col * (r * 0.35);
                    ctx.beginPath();
                    ctx.arc(x, y, r * 0.2, 0, Math.PI);
                    ctx.stroke();
                }
            }

            // Пылающий золотой драконий глаз в центре
            ctx.fillStyle = '#f59e0b';
            ctx.beginPath(); ctx.ellipse(0, 0, r * 0.35, r * 0.22, 0, 0, Math.PI * 2); ctx.fill();

            // Вертикальный щелевидный зрачок
            ctx.fillStyle = '#000000';
            ctx.beginPath(); ctx.ellipse(0, 0, 3.5, r * 0.2, 0, 0, Math.PI * 2); ctx.fill();
        }

    drawFrosty(ctx) {
            const r = this.radius;
            const g = ctx.createRadialGradient(0, 0, r * 0.1, 0, 0, r);
            g.addColorStop(0, '#f0f9ff'); g.addColorStop(0.4, '#bae6fd'); g.addColorStop(0.75, '#0284c7'); g.addColorStop(1, '#075985');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            // Симметричный ледяной кристалл внутри
            ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2.5; ctx.lineCap = 'round';
            for (let i = 0; i < 6; i++) {
                const a = (i / 6) * Math.PI * 2;
                const x = Math.cos(a) * (r * 0.65);
                const y = Math.sin(a) * (r * 0.65);
                ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(x, y); ctx.stroke();

                // Ветви снежинки
                const mx = Math.cos(a) * (r * 0.4);
                const my = Math.sin(a) * (r * 0.4);
                const pa = a + Math.PI / 3;
                ctx.beginPath();
                ctx.moveTo(mx, my);
                ctx.lineTo(mx + Math.cos(pa) * (r * 0.2), my + Math.sin(pa) * (r * 0.2));
                ctx.stroke();
            }
            ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(0, 0, 4, 0, Math.PI * 2); ctx.fill();
        }

    drawIceOverlay(ctx) {
            ctx.save();
            ctx.fillStyle = 'rgba(186, 230, 253, 0.45)';
            ctx.beginPath();
            ctx.arc(0, 0, this.radius + 3, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = '#7dd3fc';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 0, this.radius + 3, 0, Math.PI * 2);
            ctx.stroke();

            for (let i = 0; i < 6; i++) {
                const a = (i / 6) * Math.PI * 2 + this.animTime * 1.5;
                const rBase = this.radius + 2;
                const rTip = this.radius + 8 + Math.sin(this.animTime * 5 + i) * 2;
                ctx.fillStyle = '#e0f2fe';
                ctx.beginPath();
                ctx.moveTo(Math.cos(a - 0.2) * rBase, Math.sin(a - 0.2) * rBase);
                ctx.lineTo(Math.cos(a) * rTip, Math.sin(a) * rTip);
                ctx.lineTo(Math.cos(a + 0.2) * rBase, Math.sin(a + 0.2) * rBase);
                ctx.closePath();
                ctx.fill();
            }
            ctx.restore();
        }

    drawKraken(ctx) {
            const r = this.radius;
            const g = ctx.createRadialGradient(0, 0, r * 0.1, 0, 0, r);
            g.addColorStop(0, '#581c87'); g.addColorStop(0.5, '#3b0764'); g.addColorStop(1, '#0f051d');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            // Щупальца с присосками внутри шара
            ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 3; ctx.lineCap = 'round';
            for (let i = 0; i < 4; i++) {
                const a = (i / 4) * Math.PI * 2;
                ctx.beginPath();
                ctx.arc(Math.cos(a) * (r * 0.35), Math.sin(a) * (r * 0.35), r * 0.35, a, a + 2.2);
                ctx.stroke();
            }

            // Глаз бездны
            ctx.fillStyle = '#c084fc'; ctx.beginPath(); ctx.arc(0, 0, r * 0.22, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#0f051d'; ctx.beginPath(); ctx.arc(0, 0, r * 0.1, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(-2, -2, 2.5, 0, Math.PI * 2); ctx.fill();
        }

    drawKrakenActiveTentacles(ctx) {
            const r = this.radius;
            ctx.save();

            // Полная синхронизация с осью вращения шара Кракена
            const tentacleAngle = this.facingAngle + (this.isUIPreview ? 0 : (this.krakenRoll || 0));
            ctx.rotate(tentacleAngle);

            // 1. Биолюминесцентная аура Бездны (как аура у Светляка)
            const aura = ctx.createRadialGradient(0, 0, r * 0.4, 0, 0, r * 2.3);
            aura.addColorStop(0, 'rgba(168, 85, 247, 0.45)');
            aura.addColorStop(0.5, 'rgba(88, 28, 135, 0.25)');
            aura.addColorStop(1, 'rgba(15, 5, 29, 0)');
            ctx.fillStyle = aura;
            ctx.beginPath();
            ctx.arc(0, 0, r * 2.3, 0, Math.PI * 2);
            ctx.fill();

            // 2. 4 органических извивающихся щупальца бездны с присосками (вращаются на оси шара)
            const t = this.animTime * 6;
            ctx.strokeStyle = '#c084fc';
            ctx.lineWidth = 2.8;
            ctx.lineCap = 'round';

            for (let i = 0; i < 4; i++) {
                const baseAngle = (i / 4) * Math.PI * 2;
                const wave1 = Math.sin(t + i * 1.5) * 8;
                const wave2 = Math.cos(t * 1.3 + i * 2.0) * 10;

                ctx.save();
                ctx.rotate(baseAngle);

                ctx.fillStyle = 'rgba(88, 28, 135, 0.75)';
                ctx.beginPath();
                ctx.moveTo(r * 0.5, -r * 0.15);
                ctx.bezierCurveTo(
                    r * 1.2 + wave1 * 0.3, -r * 0.4 + wave2 * 0.3,
                    r * 1.6 + wave2 * 0.4, -r * 0.1 + wave1 * 0.5,
                    r * 2.0 + wave1 * 0.4, 0
                );
                ctx.bezierCurveTo(
                    r * 1.5 + wave2 * 0.3, r * 0.25 + wave1 * 0.3,
                    r * 1.1 + wave1 * 0.2, r * 0.35 + wave2 * 0.2,
                    r * 0.5, r * 0.15
                );
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                // Светящиеся присоски на каждом щупальце
                ctx.fillStyle = '#e9d5ff';
                ctx.beginPath();
                ctx.arc(r * 1.25 + wave1 * 0.2, wave2 * 0.2, 2.2, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(r * 1.6 + wave2 * 0.3, wave1 * 0.25, 1.8, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }
            ctx.restore();
        }

    drawLaser(ctx) {
            const r = this.radius;
            const g = ctx.createRadialGradient(-r * 0.25, -r * 0.25, r * 0.1, 0, 0, r);
            g.addColorStop(0, '#fecdd3'); g.addColorStop(0.4, '#e11d48'); g.addColorStop(0.8, '#881337'); g.addColorStop(1, '#4c0519');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            // Фокусирующая линза лазера на передней кромке (+X)
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(r * 0.45, 0, r * 0.35, -Math.PI * 0.5, Math.PI * 0.5);
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = '#fb7185';
            ctx.beginPath();
            ctx.arc(r * 0.45, 0, r * 0.22, -Math.PI * 0.5, Math.PI * 0.5);
            ctx.closePath();
            ctx.fill();

            // Внутренний диод накачки
            ctx.fillStyle = '#ffe4e6'; ctx.beginPath(); ctx.arc(-r * 0.2, 0, 5, 0, Math.PI * 2); ctx.fill();
        }

    drawMagnet(ctx) {
            const r = this.radius;
            // Верхняя половина (Красный полюс N)
            ctx.fillStyle = '#dc2626';
            ctx.beginPath(); ctx.arc(0, 0, r, -Math.PI, 0); ctx.fill();

            // Нижняя половина (Синий полюс S)
            ctx.fillStyle = '#2563eb';
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI); ctx.fill();

            // Разделительная стальная полоса
            ctx.fillStyle = '#e2e8f0';
            ctx.fillRect(-r, -3.5, r * 2, 7);

            // Буквы N и S
            ctx.font = '900 13px -apple-system, BlinkMacSystemFont, sans-serif';
            ctx.fillStyle = '#ffffff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText('N', 0, -r * 0.45);
            ctx.fillText('S', 0, r * 0.45);
        }

    drawMeteor(ctx) {
            const r = this.radius;

            // 1. Процедурная космическая скала с раскаленным ядром
            const g = ctx.createRadialGradient(-r * 0.25, -r * 0.25, r * 0.1, 0, 0, r);
            g.addColorStop(0, '#fdba74');
            g.addColorStop(0.35, '#c2410c');
            g.addColorStop(0.75, '#431407');
            g.addColorStop(1, '#1c1917');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // 2. Раскаленные магматические кратеры
            const craters = [
                [-r * 0.35, -r * 0.25, 7],
                [r * 0.25, -r * 0.3, 5],
                [-r * 0.15, r * 0.35, 6],
                [r * 0.35, r * 0.25, 4.5]
            ];

            for (const [cx, cy, cr] of craters) {
                ctx.fillStyle = '#1c1917';
                ctx.beginPath();
                ctx.arc(cx, cy, cr, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#ea580c';
                ctx.beginPath();
                ctx.arc(cx + 0.5, cy + 0.5, cr * 0.65, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#fde047';
                ctx.beginPath();
                ctx.arc(cx + 0.5, cy + 0.5, cr * 0.3, 0, Math.PI * 2);
                ctx.fill();
            }

            // 3. Светящиеся разломы магмы
            ctx.strokeStyle = '#f97316';
            ctx.lineWidth = 1.8;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(-r * 0.35, -r * 0.25);
            ctx.lineTo(-r * 0.15, r * 0.35);
            ctx.moveTo(r * 0.25, -r * 0.3);
            ctx.lineTo(r * 0.35, r * 0.25);
            ctx.stroke();

            // 4. Постепенный внутренний разогрев перед переходом в комету (3.0 сек разгона)
            const heatProg = this.meteorBlazing ? 1.0 : Math.min(1.0, (this.meteorHeatTimer || 0) / 3.0);
            if (heatProg > 0.05) {
                const glowG = ctx.createRadialGradient(0, 0, r * 0.1, 0, 0, r);
                glowG.addColorStop(0, `rgba(255, 255, 255, ${heatProg * 0.45})`);
                glowG.addColorStop(0.35, `rgba(251, 191, 36, ${heatProg * 0.55})`);
                glowG.addColorStop(0.75, `rgba(239, 68, 68, ${heatProg * 0.35})`);
                glowG.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.fillStyle = glowG;
                ctx.beginPath();
                ctx.arc(0, 0, r, 0, Math.PI * 2);
                ctx.fill();
            }
        }

    drawMeteorHypersonicAura(ctx) {
            const r = this.radius;
            ctx.save();
            ctx.rotate(this.facingAngle);

            const t = this.animTime * 12;

            // 1. Аэродинамические гиперзвуковые лучи Маха (срыв потока позади шара)
            ctx.strokeStyle = 'rgba(251, 191, 36, 0.75)';
            ctx.lineWidth = 1.8;
            for (let s = -1; s <= 1; s += 2) {
                ctx.beginPath();
                ctx.moveTo(r * 0.3, s * r * 0.82);
                ctx.lineTo(-r * 2.2, s * r * 1.45);
                ctx.stroke();

                // Внешняя ударная волна ионизации
                ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
                ctx.lineWidth = 1.2;
                ctx.beginPath();
                ctx.moveTo(r * 0.6, s * r * 0.6);
                ctx.lineTo(-r * 1.6, s * r * 1.75);
                ctx.stroke();
            }

            // 2. Головной компрессионный плазменный щит (Bow Shock) перед носом метеора
            const bowGrad = ctx.createRadialGradient(r * 0.6, 0, 2, r * 0.6, 0, r * 0.95);
            bowGrad.addColorStop(0, '#ffffff');
            bowGrad.addColorStop(0.4, 'rgba(254, 240, 138, 0.85)');
            bowGrad.addColorStop(0.8, 'rgba(249, 115, 22, 0.5)');
            bowGrad.addColorStop(1, 'rgba(234, 88, 12, 0)');
            ctx.fillStyle = bowGrad;
            ctx.beginPath();
            ctx.arc(r * 0.3, 0, r * 1.1, -Math.PI * 0.42, Math.PI * 0.42);
            ctx.fill();

            ctx.strokeStyle = '#fef08a';
            ctx.lineWidth = 2.4;
            ctx.beginPath();
            ctx.arc(r * 0.35, 0, r * 0.95, -Math.PI * 0.38, Math.PI * 0.38);
            ctx.stroke();

            // 3. Плазменные струи рекомбинации газа позади
            const trailGrad = ctx.createLinearGradient(-r * 2.2, 0, 0, 0);
            trailGrad.addColorStop(0, 'rgba(234, 88, 12, 0)');
            trailGrad.addColorStop(0.5, 'rgba(249, 115, 22, 0.35)');
            trailGrad.addColorStop(1, 'rgba(254, 240, 138, 0.8)');
            ctx.fillStyle = trailGrad;
            ctx.beginPath();
            ctx.moveTo(0, -r * 0.45);
            ctx.lineTo(-r * (1.7 + Math.sin(t) * 0.25), 0);
            ctx.lineTo(0, r * 0.45);
            ctx.closePath();
            ctx.fill();

            ctx.restore();
        }

    drawMirage(ctx) {
            const r = this.radius;
            const g = ctx.createRadialGradient(0, 0, r * 0.1, 0, 0, r);
            g.addColorStop(0, '#a5f3fc'); g.addColorStop(0.4, '#06b6d4'); g.addColorStop(0.75, '#0e7490'); g.addColorStop(1, '#164e63');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            // Голографические оптические кольца
            ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 1.8;
            for (let i = 1; i <= 3; i++) {
                ctx.beginPath();
                ctx.arc(0, 0, (r / 3.5) * i, 0, Math.PI * 2);
                ctx.stroke();
            }

            // Горизонтальные цифровые сканирующие линии
            ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
            for (let y = -r * 0.6; y <= r * 0.6; y += 7) {
                ctx.fillRect(-r * 0.65, y, r * 1.3, 1.2);
            }
        }

    drawNinja(ctx) {
            const r = this.radius;

            // 1. Корпус из вороненой дамасской стали с зеркальной фаской
            const g = ctx.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.1, 0, 0, r);
            g.addColorStop(0, '#475569');
            g.addColorStop(0.4, '#1e293b');
            g.addColorStop(0.8, '#0f172a');
            g.addColorStop(1, '#020617');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // Концентрическая круговая насечка ниндзя
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.85, 0, Math.PI * 2);
            ctx.stroke();

            // 2. Четыре аэродинамических лезвия сюрикена с двойной полированной фаской
            for (let i = 0; i < 4; i++) {
                const a = (i / 4) * Math.PI * 2;
                ctx.save();
                ctx.rotate(a);

                // Основное лезвие (полированная сталь)
                ctx.fillStyle = '#e2e8f0';
                ctx.beginPath();
                ctx.moveTo(0, -r * 0.12);
                ctx.lineTo(r * 0.22, -r * 0.22);
                ctx.lineTo(r * 0.78, 0);
                ctx.lineTo(r * 0.22, r * 0.22);
                ctx.lineTo(0, r * 0.12);
                ctx.closePath();
                ctx.fill();

                // Теневая скошенная грань
                ctx.fillStyle = '#94a3b8';
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(r * 0.22, r * 0.22);
                ctx.lineTo(r * 0.78, 0);
                ctx.closePath();
                ctx.fill();

                // Хромированная режущая кромка лезвия
                ctx.strokeStyle = '#f8fafc';
                ctx.lineWidth = 1.4;
                ctx.beginPath();
                ctx.moveTo(r * 0.22, -r * 0.22);
                ctx.lineTo(r * 0.78, 0);
                ctx.stroke();

                // Продольный долик (кровосток)
                ctx.strokeStyle = '#0f172a';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(r * 0.12, 0);
                ctx.lineTo(r * 0.52, 0);
                ctx.stroke();

                ctx.restore();
            }

            // 3. Центральный механический подшипник с золотым ободом
            ctx.fillStyle = '#ca8a04';
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.22, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#fef08a';
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.17, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#020617';
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.10, 0, Math.PI * 2);
            ctx.fill();
        }

    drawNinjaGoldenSlashAura(ctx) {
            ctx.save();
            const r = this.radius;
            const spin = this.animTime * 14;

            // 1. Вращающееся золотое кольцо энергии
            ctx.strokeStyle = '#facc15';
            ctx.lineWidth = 2.5;
            ctx.shadowColor = '#fde047';
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(0, 0, r * 1.15, spin, spin + Math.PI * 0.75);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0, 0, r * 1.15, spin + Math.PI, spin + Math.PI * 1.75);
            ctx.stroke();

            // 2. Четыре рассекающих золотых серповидных полумесяца
            for (let i = 0; i < 4; i++) {
                const a = (i / 4) * Math.PI * 2 + spin;
                const tipX = Math.cos(a) * (r * 1.35);
                const tipY = Math.sin(a) * (r * 1.35);
                ctx.fillStyle = '#fef08a';
                ctx.beginPath();
                ctx.arc(tipX, tipY, 3.2, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }

    drawNuke(ctx) {
            const r = this.radius;
            const g = ctx.createRadialGradient(-r * 0.25, -r * 0.25, r * 0.1, 0, 0, r);
            g.addColorStop(0, '#fef08a'); g.addColorStop(0.45, '#eab308'); g.addColorStop(0.8, '#854d0e'); g.addColorStop(1, '#1c1917');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            // Черный знак радиации
            ctx.fillStyle = '#0f172a';
            ctx.beginPath(); ctx.arc(0, 0, r * 0.55, 0, Math.PI * 2); ctx.fill();

            ctx.fillStyle = '#facc15';
            for (let i = 0; i < 3; i++) {
                const a = (i / 3) * Math.PI * 2 - Math.PI / 2;
                ctx.beginPath();
                ctx.arc(0, 0, r * 0.48, a - 0.5, a + 0.5);
                ctx.lineTo(0, 0); ctx.closePath(); ctx.fill();
            }

            ctx.fillStyle = '#0f172a'; ctx.beginPath(); ctx.arc(0, 0, r * 0.16, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#facc15'; ctx.beginPath(); ctx.arc(0, 0, 3.5, 0, Math.PI * 2); ctx.fill();
        }

    drawNukeElectrons(ctx) {
            ctx.save();
            const charges = this.isotopeCharges;
            ctx.strokeStyle = 'rgba(225, 29, 72, 0.4)';
            ctx.lineWidth = 1;
            // 3 эллиптические орбиты
            for (let i = 0; i < 3; i++) {
                ctx.save();
                ctx.rotate((i * Math.PI) / 3);
                ctx.beginPath();
                ctx.ellipse(0, 0, this.radius + 6, (this.radius + 6) * 0.45, 0, 0, Math.PI * 2);
                ctx.stroke();
                if (i < charges) {
                    const a = this.animTime * 6 + i * 2;
                    const ex = Math.cos(a) * (this.radius + 6);
                    const ey = Math.sin(a) * ((this.radius + 6) * 0.45);
                    ctx.fillStyle = '#fda4af';
                    ctx.beginPath();
                    ctx.arc(ex, ey, 3, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.restore();
            }
            ctx.restore();
        }

    drawPhantom(ctx) {
            const r = this.radius;

            // 1. Глубокая космическая бездна астрала
            const g = ctx.createRadialGradient(0, 0, r * 0.1, 0, 0, r);
            g.addColorStop(0, '#0f0524');
            g.addColorStop(0.4, '#1e1145');
            g.addColorStop(0.75, '#311042');
            g.addColorStop(1, '#030014');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // 2. Внутренние спирали эфирного тумана душ
            ctx.save();
            ctx.strokeStyle = 'rgba(129, 140, 248, 0.45)';
            ctx.lineWidth = 1.6;
            for (let i = 0; i < 3; i++) {
                const a = (i / 3) * Math.PI * 2 + this.animTime * 1.8;
                ctx.beginPath();
                ctx.arc(0, 0, r * 0.68, a, a + 1.2);
                ctx.stroke();
            }
            ctx.restore();

            // 3. Зловещие раскосые спектральные очи пустоты (без нелепого смайлика!)
            ctx.save();
            ctx.shadowColor = '#38bdf8';
            ctx.shadowBlur = 8;

            for (const side of [-1, 1]) {
                ctx.save();
                ctx.translate(side * (r * 0.28), -r * 0.08);
                ctx.rotate(side * 0.28);

                // Внешнее свечение глазницы
                ctx.fillStyle = '#6366f1';
                ctx.beginPath();
                ctx.ellipse(0, 0, r * 0.18, r * 0.26, 0, 0, Math.PI * 2);
                ctx.fill();

                // Внутреннее лазурное инфернальное пламя
                ctx.fillStyle = '#38bdf8';
                ctx.beginPath();
                ctx.ellipse(0, 0, r * 0.12, r * 0.20, 0, 0, Math.PI * 2);
                ctx.fill();

                // Пронзительное белое ядро зрачка
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.ellipse(0, 0, r * 0.06, r * 0.14, 0, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }
            ctx.restore();

            // 4. Эфирный спектральный венец призрака на вершине
            ctx.strokeStyle = 'rgba(168, 85, 247, 0.7)';
            ctx.lineWidth = 2.0;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.arc(0, -r * 0.15, r * 0.72, Math.PI * 1.15, Math.PI * 1.85);
            ctx.stroke();

            // 5. Внешний рунический обод душ
            ctx.strokeStyle = 'rgba(99, 102, 241, 0.45)';
            ctx.lineWidth = 1.4;
            ctx.setLineDash([4, 6]);
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.88, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);
        }

    drawPhantomGhostClone(ctx) {
            ctx.save();
            const spd = (this.vel.mag ? this.vel.mag() : Math.hypot(this.vel.x, this.vel.y));
            const ox = spd > 0.1 ? (-this.vel.x / spd) * 16 : -14;
            const oy = spd > 0.1 ? (-this.vel.y / spd) * 16 : 0;
            const pulse = Math.sin(this.animTime * 8) * 1.5;
            const r = this.radius;

            ctx.translate(ox, oy);

            // Внешнее призрачное свечение
            const g = ctx.createRadialGradient(0, 0, r * 0.2, 0, 0, r * 1.35);
            g.addColorStop(0, 'rgba(165, 180, 252, 0.55)');
            g.addColorStop(0.5, 'rgba(99, 102, 241, 0.35)');
            g.addColorStop(1, 'rgba(49, 46, 129, 0)');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(0, 0, r * 1.35, 0, Math.PI * 2);
            ctx.fill();

            // Тело призрачной тени
            ctx.fillStyle = 'rgba(30, 27, 75, 0.7)';
            ctx.beginPath();
            ctx.arc(0, 0, r + pulse, 0, Math.PI * 2);
            ctx.fill();

            // Пунктирный спектральный контур
            ctx.strokeStyle = 'rgba(129, 140, 248, 0.85)';
            ctx.lineWidth = 2;
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.arc(0, 0, r + pulse, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);

            // Зловещие раскосые спектральные очи тени
            for (const side of [-1, 1]) {
                ctx.save();
                ctx.translate(side * (r * 0.28), -r * 0.08);
                ctx.rotate(side * 0.28);
                ctx.fillStyle = '#38bdf8';
                ctx.beginPath();
                ctx.ellipse(0, 0, r * 0.12, r * 0.20, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.ellipse(0, 0, r * 0.06, r * 0.12, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }

            ctx.restore();
        }

    drawPoisonOverlay(ctx) {
            ctx.save();
            ctx.fillStyle = '#84cc16';
            for (let i = 0; i < 5; i++) {
                const bx = Math.sin(this.animTime * 3 + i * 1.5) * (this.radius * 0.7);
                const by = -this.radius * 0.2 - ((this.animTime * 22 + i * 12) % (this.radius * 1.1));
                ctx.beginPath();
                ctx.arc(bx, by, 2.2, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }

    drawSand(ctx) {
            const r = this.radius;
            const g = ctx.createRadialGradient(-r * 0.25, -r * 0.25, r * 0.1, 0, 0, r);
            g.addColorStop(0, '#fef08a'); g.addColorStop(0.4, '#eab308'); g.addColorStop(0.8, '#a16207'); g.addColorStop(1, '#713f12');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            // Крылья священного скарабея
            ctx.strokeStyle = '#713f12'; ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(-r * 0.15, 0, r * 0.5, -Math.PI * 0.4, Math.PI * 0.4);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(r * 0.15, 0, r * 0.5, Math.PI * 0.6, Math.PI * 1.4);
            ctx.stroke();

            // Центральный рубиновый кристалл
            ctx.fillStyle = '#dc2626';
            ctx.beginPath();
            ctx.moveTo(0, -r * 0.28); ctx.lineTo(r * 0.2, 0); ctx.lineTo(0, r * 0.28); ctx.lineTo(-r * 0.2, 0);
            ctx.closePath(); ctx.fill();
            ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(-2, -3, 2, 0, Math.PI * 2); ctx.fill();
        }

    drawSaw(ctx) {
            const r = this.radius;

            // Основа диска: вороненый титановый металл с радиальным градиентом
            const g = ctx.createRadialGradient(-r * 0.25, -r * 0.25, r * 0.1, 0, 0, r);
            g.addColorStop(0, '#e2e8f0');
            g.addColorStop(0.35, '#94a3b8');
            g.addColorStop(0.65, '#334155');
            g.addColorStop(0.9, '#1e293b');
            g.addColorStop(1, '#0f172a');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // Внешний обод с насечками
            ctx.strokeStyle = '#64748b';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.arc(0, 0, r - 1, 0, Math.PI * 2);
            ctx.stroke();

            // 12 острых зубьев пилы с красным отливом
            ctx.save();
            ctx.rotate(this.animTime * 3.5);

            const numTeeth = 12;
            for (let i = 0; i < numTeeth; i++) {
                const a = (i / numTeeth) * Math.PI * 2;
                const rInner = r * 0.58;
                const rOuter = r * 0.90;

                ctx.fillStyle = '#ef4444';
                ctx.beginPath();
                ctx.moveTo(Math.cos(a) * rInner, Math.sin(a) * rInner);
                ctx.lineTo(Math.cos(a + 0.16) * rOuter, Math.sin(a + 0.16) * rOuter);
                ctx.lineTo(Math.cos(a + 0.32) * (rInner * 1.1), Math.sin(a + 0.32) * (rInner * 1.1));
                ctx.closePath();
                ctx.fill();

                // Заточка зуба лезвия
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 1.2;
                ctx.beginPath();
                ctx.moveTo(Math.cos(a) * rInner, Math.sin(a) * rInner);
                ctx.lineTo(Math.cos(a + 0.16) * rOuter, Math.sin(a + 0.16) * rOuter);
                ctx.stroke();
            }

            // Круговые вентиляционные отверстия в стальном полотне диска
            for (let h = 0; h < 5; h++) {
                const ha = (h / 5) * Math.PI * 2;
                const hx = Math.cos(ha) * (r * 0.44);
                const hy = Math.sin(ha) * (r * 0.44);
                ctx.fillStyle = '#090d16';
                ctx.beginPath();
                ctx.arc(hx, hy, r * 0.08, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#475569';
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
            ctx.restore();

            // Центральная крепежная ступица
            const hubG = ctx.createRadialGradient(-r * 0.08, -r * 0.08, 1, 0, 0, r * 0.28);
            hubG.addColorStop(0, '#f87171');
            hubG.addColorStop(0.4, '#dc2626');
            hubG.addColorStop(0.85, '#7f1d1d');
            hubG.addColorStop(1, '#450a0a');
            ctx.fillStyle = hubG;
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.28, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = '#fca5a5';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Центральный крепежный болт
            ctx.fillStyle = '#0f172a';
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.10, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(0, 0, 2, 0, Math.PI * 2);
            ctx.fill();
        }

    drawSawRedAura(ctx) {
            if (this.isUIPreview) return;
            ctx.save();
            const r = this.radius;
            const points = 12;
            const baseAlpha = 0.38 + Math.sin(this.animTime * 8) * 0.12;

            // Хаотичные завихрения багровой дымки
            for (let layer = 0; layer < 2; layer++) {
                ctx.save();
                ctx.rotate(this.animTime * (layer === 0 ? 3.5 : -2.8));
                ctx.fillStyle = layer === 0 ? 'rgba(239, 68, 68, 0.20)' : 'rgba(185, 28, 28, 0.24)';
                ctx.beginPath();
                for (let i = 0; i <= points; i++) {
                    const a = (i / points) * Math.PI * 2;
                    const chaoticOffset = Math.sin(a * 4 + this.animTime * 12 + layer) * 4.5 + Math.cos(a * 3 - this.animTime * 9) * 3.5;
                    const curR = r + 5 + layer * 4 + chaoticOffset;
                    const x = Math.cos(a) * curR;
                    const y = Math.sin(a) * curR;
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }

            // Тонкие хаотичные багровые дуги-кромки
            ctx.strokeStyle = `rgba(248, 113, 113, ${baseAlpha * 0.85})`;
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            for (let i = 0; i < 4; i++) {
                const arcA = this.animTime * 4.2 + (i * Math.PI / 2);
                ctx.arc(0, 0, r + 4 + (i % 2) * 3, arcA, arcA + 0.45);
            }
            ctx.stroke();

            ctx.restore();
        }

    drawShockOverlay(ctx) {
            ctx.save();
            ctx.strokeStyle = '#fde047';
            ctx.lineWidth = 1.5;
            for (let i = 0; i < 3; i++) {
                const a = (i / 3) * Math.PI * 2 + this.animTime * 5;
                const r = this.radius - 2;
                ctx.beginPath();
                ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r);
                ctx.lineTo(Math.cos(a + 0.3) * (r + 4), Math.sin(a + 0.3) * (r + 4));
                ctx.stroke();
            }
            ctx.restore();
        }

    drawSolar(ctx) {
            const r = this.radius;

            // Высококачественный спрайт сферы Гелиоса (сгенерирован ИИ)
            const img = (typeof BALL_SPRITES !== 'undefined' && BALL_SPRITES) ? BALL_SPRITES['solar'] : null;
            if (img && img.complete && img.naturalWidth > 0) {
                ctx.save();
                ctx.drawImage(img, -r, -r, r * 2, r * 2);
                ctx.restore();
                return;
            }

            const g = ctx.createRadialGradient(0, 0, r * 0.1, 0, 0, r);
            g.addColorStop(0, '#ffffff'); g.addColorStop(0.3, '#fef08a'); g.addColorStop(0.65, '#f59e0b'); g.addColorStop(1, '#b45309');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            // Солнечные протуберанцы
            ctx.strokeStyle = '#fef08a'; ctx.lineWidth = 2;
            for (let i = 0; i < 8; i++) {
                const a = (i / 8) * Math.PI * 2;
                ctx.beginPath();
                ctx.arc(0, 0, r * 0.65, a, a + 0.5);
                ctx.stroke();
            }
        }

    drawSolarCrownAura(ctx) {
            ctx.save();
            const floatY = -this.radius - 14 + Math.sin(this.animTime * 3.5) * 2.5;
            ctx.translate(0, floatY);

            const crownImg = BALL_SPRITES['solar_crown'];
            if (crownImg && crownImg.complete && crownImg.naturalWidth > 0) {
                // Золотой ореол сияния короны
                const glow = ctx.createRadialGradient(0, 0, 2, 0, 0, 24);
                glow.addColorStop(0, 'rgba(254, 240, 138, 0.65)');
                glow.addColorStop(0.5, 'rgba(245, 158, 11, 0.35)');
                glow.addColorStop(1, 'rgba(245, 158, 11, 0)');
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(0, 0, 24, 0, Math.PI * 2);
                ctx.fill();

                // Отрисовка царственной короны
                const cw = 38;
                const ch = (cw / crownImg.naturalWidth) * crownImg.naturalHeight;
                ctx.drawImage(crownImg, -cw / 2, -ch / 2, cw, ch);
            } else {
                // Процедурная царственная корона высокой детализации (5 зубцов, драгоценные камни и золотая филигрань)
                ctx.save();
                // Сияние
                const halo = ctx.createRadialGradient(0, 0, 2, 0, 0, 20);
                halo.addColorStop(0, 'rgba(254, 240, 138, 0.5)');
                halo.addColorStop(1, 'rgba(245, 158, 11, 0)');
                ctx.fillStyle = halo;
                ctx.beginPath();
                ctx.arc(0, 0, 20, 0, Math.PI * 2);
                ctx.fill();

                // Золотой венец основания
                ctx.fillStyle = '#f59e0b';
                ctx.beginPath();
                if (ctx.roundRect) {
                    ctx.roundRect(-16, 2, 32, 6, 2);
                } else {
                    ctx.rect(-16, 2, 32, 6);
                }
                ctx.fill();
                ctx.strokeStyle = '#fef08a';
                ctx.lineWidth = 1;
                ctx.stroke();

                // 5 царственных зубцов с пиками
                const peaks = [
                    { x: -14, tipY: -9 },
                    { x: -7,  tipY: -15 },
                    { x: 0,   tipY: -20 },
                    { x: 7,   tipY: -15 },
                    { x: 14,  tipY: -9 }
                ];

                ctx.fillStyle = '#facc15';
                ctx.beginPath();
                ctx.moveTo(-16, 2);
                for (let i = 0; i < peaks.length; i++) {
                    const p = peaks[i];
                    ctx.lineTo(p.x, p.tipY);
                    if (i < peaks.length - 1) {
                        const nextP = peaks[i+1];
                        ctx.lineTo((p.x + nextP.x) / 2, 0);
                    }
                }
                ctx.lineTo(16, 2);
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = '#fef08a';
                ctx.lineWidth = 1.2;
                ctx.stroke();

                // Рубиновые и топазовые кристаллы на зубцах
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(0, -20, 2.5, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#ef4444';
                ctx.beginPath();
                ctx.arc(-7, -15, 1.8, 0, Math.PI * 2);
                ctx.arc(7, -15, 1.8, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#38bdf8';
                ctx.beginPath();
                ctx.arc(0, 5, 2, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }
            ctx.restore();
        }

    drawSpike(ctx) {
            const r = this.radius;
            const coreR = r * 0.82;

            // 1. Центральный корпус: тяжелый оружейный вольфрам
            const g = ctx.createRadialGradient(-coreR * 0.3, -coreR * 0.3, coreR * 0.1, 0, 0, coreR);
            g.addColorStop(0, '#64748b');
            g.addColorStop(0.4, '#334155');
            g.addColorStop(0.8, '#1e293b');
            g.addColorStop(1, '#090d16');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(0, 0, coreR, 0, Math.PI * 2);
            ctx.fill();

            // 2. Стальной кованый обод
            ctx.strokeStyle = '#0f172a';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.arc(0, 0, coreR * 0.95, 0, Math.PI * 2);
            ctx.stroke();

            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.arc(0, 0, coreR * 0.92, 0, Math.PI * 2);
            ctx.stroke();

            // 3. 8 граненых стальных 3D-шипов, выступающих далеко за пределы ядра
            for (let i = 0; i < 8; i++) {
                const a = (i / 8) * Math.PI * 2;
                ctx.save();
                ctx.rotate(a);

                // Теневое основание шипа на корпусе
                ctx.fillStyle = '#0f172a';
                ctx.beginPath();
                ctx.arc(0, -coreR * 0.82, 5, 0, Math.PI * 2);
                ctx.fill();

                // Левая освещенная грань конуса шипа
                ctx.fillStyle = '#cbd5e1';
                ctx.beginPath();
                ctx.moveTo(0, -coreR * 0.7);
                ctx.lineTo(-coreR * 0.28, -coreR * 0.88);
                ctx.lineTo(0, -r * 1.35);
                ctx.closePath();
                ctx.fill();

                // Правая теневая грань конуса шипа
                ctx.fillStyle = '#475569';
                ctx.beginPath();
                ctx.moveTo(0, -coreR * 0.7);
                ctx.lineTo(coreR * 0.28, -coreR * 0.88);
                ctx.lineTo(0, -r * 1.35);
                ctx.closePath();
                ctx.fill();

                // Световой гребень шипа
                ctx.strokeStyle = '#f8fafc';
                ctx.lineWidth = 1.2;
                ctx.beginPath();
                ctx.moveTo(0, -coreR * 0.7);
                ctx.lineTo(0, -r * 1.35);
                ctx.stroke();

                // Стальная крепежная заклепка у основания каждого шипа
                ctx.fillStyle = '#e2e8f0';
                ctx.beginPath();
                ctx.arc(0, -coreR * 0.72, 2.0, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }

            // 4. Центральная бронеплита со стальными болтами
            ctx.fillStyle = '#1e293b';
            ctx.beginPath();
            ctx.arc(0, 0, coreR * 0.45, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(0, 0, coreR * 0.45, 0, Math.PI * 2);
            ctx.stroke();

            // 4 массивных заклепки-болта на внутренней плите
            ctx.fillStyle = '#94a3b8';
            for (let i = 0; i < 4; i++) {
                const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
                ctx.beginPath();
                ctx.arc(Math.cos(a) * coreR * 0.28, Math.sin(a) * coreR * 0.28, 2.2, 0, Math.PI * 2);
                ctx.fill();
            }

            // Центральная массивная заклепка
            ctx.fillStyle = '#f1f5f9';
            ctx.beginPath();
            ctx.arc(0, 0, 3.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#0f172a';
            ctx.beginPath();
            ctx.arc(0, 0, 1.2, 0, Math.PI * 2);
            ctx.fill();
        }

    drawStorm(ctx) {
            const r = this.radius;

            // 1. Глубокое сферическое тело штормового океана (темный грозовой индиго-свет)
            const g = ctx.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.08, 0, 0, r);
            g.addColorStop(0, '#f0f9ff');
            g.addColorStop(0.2, '#7dd3fc');
            g.addColorStop(0.48, '#0284c7');
            g.addColorStop(0.78, '#0f172a');
            g.addColorStop(1, '#020617');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // 2. Вращающиеся спиральные рукава урагана (4 мощных циклонических рукава)
            const rot = (this.animTime || 0) * 1.8;
            ctx.save();
            ctx.rotate(rot);

            for (let i = 0; i < 4; i++) {
                const baseA = (i / 4) * Math.PI * 2;

                // Внешний воздушный рукав
                ctx.strokeStyle = i % 2 === 0 ? 'rgba(255, 255, 255, 0.88)' : 'rgba(186, 230, 253, 0.75)';
                ctx.lineWidth = 2.4;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.arc(0, 0, r * 0.72, baseA, baseA + 1.25);
                ctx.stroke();

                // Внутренний ускоренный поток ветра
                ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
                ctx.lineWidth = 1.8;
                ctx.beginPath();
                ctx.arc(0, 0, r * 0.44, baseA + 0.35, baseA + 1.45);
                ctx.stroke();

                // Тонкие стримлайны ветра
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.lineWidth = 1.0;
                ctx.beginPath();
                ctx.arc(0, 0, r * 0.25, baseA + 0.6, baseA + 1.6);
                ctx.stroke();
            }
            ctx.restore();

            // 3. Око тайфуна в центре с электрическим свечением
            const eyeG = ctx.createRadialGradient(0, 0, 1, 0, 0, r * 0.22);
            eyeG.addColorStop(0, '#ffffff');
            eyeG.addColorStop(0.4, '#38bdf8');
            eyeG.addColorStop(1, 'rgba(2, 132, 199, 0)');
            ctx.fillStyle = eyeG;
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.22, 0, Math.PI * 2);
            ctx.fill();

            // 4. Тонкая аэродинамическая светящаяся кайма по контуру
            ctx.strokeStyle = 'rgba(125, 211, 252, 0.6)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(0, 0, r - 0.75, 0, Math.PI * 2);
            ctx.stroke();
        }

    drawStunStars(ctx) {
            ctx.save();
            const starCount = 3;
            for (let i = 0; i < starCount; i++) {
                const a = (i / starCount) * Math.PI * 2 + this.animTime * 6;
                const sx = Math.cos(a) * (this.radius * 0.85);
                const sy = -this.radius * 0.9 + Math.sin(a) * 6;

                ctx.fillStyle = '#fde047';
                ctx.beginPath();
                ctx.arc(sx, sy, 3.5, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }

    drawTesla(ctx) {
            const r = this.radius;
            const g = ctx.createRadialGradient(0, 0, r * 0.1, 0, 0, r);
            g.addColorStop(0, '#1e1b4b'); g.addColorStop(0.6, '#0f172a'); g.addColorStop(1, '#020617');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            // Медная спиральная катушка
            ctx.strokeStyle = '#d97706'; ctx.lineWidth = 2.5;
            for (let rad = r * 0.3; rad <= r * 0.75; rad += 6) {
                ctx.beginPath(); ctx.arc(0, 0, rad, 0, Math.PI * 2); ctx.stroke();
            }

            // Центральный разрядный электрод
            ctx.fillStyle = '#38bdf8';
            ctx.beginPath(); ctx.arc(0, 0, r * 0.24, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffffff';
            ctx.beginPath(); ctx.arc(0, 0, 4, 0, Math.PI * 2); ctx.fill();
        }

    drawTitan(ctx) {
            const r = this.radius;
            const g = ctx.createRadialGradient(-r * 0.25, -r * 0.25, r * 0.1, 0, 0, r);
            g.addColorStop(0, '#94a3b8'); g.addColorStop(0.5, '#475569'); g.addColorStop(0.85, '#1e293b'); g.addColorStop(1, '#090d16');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            // Массивные перекрестные броневые балки
            ctx.fillStyle = '#334155';
            ctx.fillRect(-r * 0.28, -r, r * 0.56, r * 2);
            ctx.fillRect(-r, -r * 0.28, r * 2, r * 0.56);

            ctx.strokeStyle = '#0f172a'; ctx.lineWidth = 2;
            ctx.strokeRect(-r * 0.28, -r, r * 0.56, r * 2);
            ctx.strokeRect(-r, -r * 0.28, r * 2, r * 0.56);

            // 4 массивных стальных болта
            ctx.fillStyle = '#cbd5e1';
            for (const [bx, by] of [[-r * 0.5, -r * 0.5], [r * 0.5, -r * 0.5], [-r * 0.5, r * 0.5], [r * 0.5, r * 0.5]]) {
                ctx.beginPath(); ctx.arc(bx, by, 3.5, 0, Math.PI * 2); ctx.fill();
            }
        }

    drawToxic(ctx) {
            const r = this.radius;
            const g = ctx.createRadialGradient(-r * 0.2, -r * 0.2, r * 0.1, 0, 0, r);
            g.addColorStop(0, '#bef264'); g.addColorStop(0.4, '#65a30d'); g.addColorStop(0.8, '#365314'); g.addColorStop(1, '#142306');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            // Знак радиационной/биологической угрозы внутри
            ctx.fillStyle = '#0f172a';
            ctx.beginPath(); ctx.arc(0, 0, r * 0.42, 0, Math.PI * 2); ctx.fill();

            ctx.fillStyle = '#bef264';
            for (let i = 0; i < 3; i++) {
                const a = (i / 3) * Math.PI * 2 - Math.PI / 2;
                ctx.beginPath();
                ctx.arc(0, 0, r * 0.36, a - 0.5, a + 0.5);
                ctx.lineTo(0, 0);
                ctx.closePath();
                ctx.fill();
            }

            ctx.fillStyle = '#0f172a';
            ctx.beginPath(); ctx.arc(0, 0, r * 0.14, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#bef264';
            ctx.beginPath(); ctx.arc(0, 0, 3, 0, Math.PI * 2); ctx.fill();
        }

    drawTranscendentAura(ctx) {
            const r = this.radius;
            const t = (this.animTime || 0) * 3.5;
            ctx.save();

            // 1. Внешняя радужная пульсирующая корона
            const pulse = Math.sin((this.animTime || 0) * 4.0) * 0.12 + 0.88;
            const auraR = r * (1.18 + pulse * 0.08);
            const glowG = ctx.createRadialGradient(0, 0, r * 0.85, 0, 0, auraR);
            glowG.addColorStop(0, 'rgba(255, 0, 85, 0)');
            glowG.addColorStop(0.5, `rgba(236, 72, 153, ${0.28 * pulse})`);
            glowG.addColorStop(0.8, `rgba(168, 85, 247, ${0.22 * pulse})`);
            glowG.addColorStop(1, 'rgba(0, 240, 255, 0)');
            ctx.fillStyle = glowG;
            ctx.beginPath();
            ctx.arc(0, 0, auraR, 0, Math.PI * 2);
            ctx.fill();

            // 2. Ослепительная хроматическая переливающаяся кайма
            ctx.lineWidth = 3.6;
            ctx.shadowColor = '#ec4899';
            ctx.shadowBlur = 12;

            if (ctx.createConicGradient) {
                const conic = ctx.createConicGradient(t, 0, 0);
                conic.addColorStop(0.00, '#ff0055');
                conic.addColorStop(0.14, '#ff00aa');
                conic.addColorStop(0.28, '#a855f7');
                conic.addColorStop(0.42, '#3b82f6');
                conic.addColorStop(0.57, '#06b6d4');
                conic.addColorStop(0.71, '#10b981');
                conic.addColorStop(0.85, '#f59e0b');
                conic.addColorStop(1.00, '#ff0055');
                ctx.strokeStyle = conic;
            } else {
                ctx.strokeStyle = '#ff0077';
            }

            ctx.beginPath();
            ctx.arc(0, 0, r - 0.5, 0, Math.PI * 2);
            ctx.stroke();

            // Внутренний тонкий бело-золотой контур
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
            ctx.lineWidth = 1.0;
            ctx.shadowBlur = 4;
            ctx.stroke();

            // 3. Вращающиеся искрящиеся алмазные блики на кайме
            ctx.shadowBlur = 8;
            ctx.fillStyle = '#ffffff';
            for (let i = 0; i < 4; i++) {
                const sparkAng = t * 0.8 + (i * Math.PI / 2);
                const sx = Math.cos(sparkAng) * (r - 0.5);
                const sy = Math.sin(sparkAng) * (r - 0.5);

                ctx.save();
                ctx.translate(sx, sy);
                ctx.rotate(sparkAng + Math.PI / 4);
                ctx.shadowColor = i % 2 === 0 ? '#00f0ff' : '#ff0077';
                ctx.beginPath();
                ctx.moveTo(-4, 0); ctx.lineTo(0, -1.5); ctx.lineTo(4, 0); ctx.lineTo(0, 1.5);
                ctx.closePath();
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(0, -4); ctx.lineTo(-1.5, 0); ctx.lineTo(0, 4); ctx.lineTo(1.5, 0);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }

            ctx.restore();
        }

    drawTranscendentIconSheen(ctx) {
            const r = this.radius - 1.2;
            if (r <= 0) return;

            const t = (this.animTime !== undefined && this.animTime !== null)
                ? this.animTime
                : ((typeof performance !== 'undefined') ? (performance.now() / 1000) : 0);

            ctx.save();
            // Строгий клип по внутреннему кругу шара — перелив никогда не попадает на рамку/кайму
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.clip();

            // Диагональный угол скольжения блика (-45 градусов)
            ctx.rotate(-Math.PI / 4);

            const cycleDuration = 2.4; // 2.4 секунды на полный цикл перелива
            const progress = (t % cycleDuration) / cycleDuration; // 0..1

            const totalDist = 4.4 * r;
            const beamX = -2.2 * r + (progress * totalDist);
            const beamWidth = r * 0.75;

            // Элегантный переливающийся градиент: алый отблеск -> яркая призматическая линия -> мягкий рубиновый ореол
            const sheenGrad = ctx.createLinearGradient(beamX - beamWidth, 0, beamX + beamWidth, 0);
            sheenGrad.addColorStop(0, 'rgba(255, 0, 60, 0)');
            sheenGrad.addColorStop(0.25, 'rgba(255, 40, 80, 0.16)');
            sheenGrad.addColorStop(0.46, 'rgba(255, 230, 240, 0.55)');
            sheenGrad.addColorStop(0.50, 'rgba(255, 255, 255, 0.90)');
            sheenGrad.addColorStop(0.54, 'rgba(255, 230, 240, 0.55)');
            sheenGrad.addColorStop(0.75, 'rgba(255, 50, 90, 0.20)');
            sheenGrad.addColorStop(1, 'rgba(255, 0, 60, 0)');

            ctx.fillStyle = sheenGrad;
            ctx.fillRect(beamX - beamWidth, -r * 2.5, beamWidth * 2, r * 5);

            ctx.restore();
        }

    drawVampire(ctx) {
            const r = this.radius;

            // 1. Обсидиановое сферическое тело с темным готическим винным отсветом
            const g = ctx.createRadialGradient(-r * 0.28, -r * 0.28, r * 0.08, 0, 0, r);
            g.addColorStop(0, '#2d060e');
            g.addColorStop(0.45, '#150205');
            g.addColorStop(0.85, '#090103');
            g.addColorStop(1, '#000000');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // 2. Внешнее руническое кольцо вокруг ока
            ctx.strokeStyle = 'rgba(185, 28, 28, 0.35)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.78, 0, Math.PI * 2);
            ctx.stroke();

            // Тонкие рунические насечки
            for (let i = 0; i < 8; i++) {
                const a = i * (Math.PI / 4) + (this.animTime * 0.2);
                ctx.beginPath();
                ctx.moveTo(Math.cos(a) * (r * 0.72), Math.sin(a) * (r * 0.72));
                ctx.lineTo(Math.cos(a) * (r * 0.82), Math.sin(a) * (r * 0.82));
                ctx.stroke();
            }

            // 3. Форма ока (миндалевидная хищная глазница)
            ctx.save();
            ctx.beginPath();
            ctx.ellipse(0, 0, r * 0.65, r * 0.38, 0, 0, Math.PI * 2);
            ctx.clip();

            // Белок ока - темный кровавый градиент
            const scleraG = ctx.createRadialGradient(0, 0, 2, 0, 0, r * 0.65);
            scleraG.addColorStop(0, '#7f1d1d');
            scleraG.addColorStop(0.5, '#450a0a');
            scleraG.addColorStop(1, '#180202');
            ctx.fillStyle = scleraG;
            ctx.fillRect(-r, -r, r * 2, r * 2);

            // 4. Пылающая рубиновая радужка
            const pulse = 1.0 + Math.sin(this.animTime * 3) * 0.05;
            const irisR = r * 0.34 * pulse;
            const irisG = ctx.createRadialGradient(0, 0, 1, 0, 0, irisR);
            irisG.addColorStop(0, '#fca5a5');
            irisG.addColorStop(0.35, '#ef4444');
            irisG.addColorStop(0.75, '#b91c1c');
            irisG.addColorStop(1, '#450a0a');
            ctx.fillStyle = irisG;
            ctx.beginPath();
            ctx.arc(0, 0, irisR, 0, Math.PI * 2);
            ctx.fill();

            // Радиальные волокна радужки
            ctx.strokeStyle = 'rgba(254, 202, 202, 0.4)';
            ctx.lineWidth = 1;
            for (let f = 0; f < 12; f++) {
                const fa = f * (Math.PI / 6);
                ctx.beginPath();
                ctx.moveTo(Math.cos(fa) * (irisR * 0.35), Math.sin(fa) * (irisR * 0.35));
                ctx.lineTo(Math.cos(fa) * (irisR * 0.95), Math.sin(fa) * (irisR * 0.95));
                ctx.stroke();
            }

            // 5. Хищный вертикальный щелевидный зрачок
            ctx.fillStyle = '#050101';
            ctx.beginPath();
            ctx.ellipse(0, 0, r * 0.09, r * 0.30, 0, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();

            // 6. Окантовка глазницы
            ctx.strokeStyle = '#ef4444';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.ellipse(0, 0, r * 0.65, r * 0.38, 0, 0, Math.PI * 2);
            ctx.stroke();

            // 7. Стеклянные блики на зрачке
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(-r * 0.12, -r * 0.10, 3.2, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.beginPath();
            ctx.arc(r * 0.08, r * 0.08, 1.8, 0, Math.PI * 2);
            ctx.fill();
        }

    drawVampireFangs(ctx) {
            if (this.isUIPreview) return;
            ctx.save();
            ctx.rotate(this.vampireFangsAngle || 0);

            const r = this.radius;
            const protrusion = this.vampireLatched ? 11 : 16;
            const tipX = r + protrusion;
            const baseX = r - 2;

            const fangs = [-8.5, 8.5];
            for (const baseY of fangs) {
                const curveDir = baseY > 0 ? -1 : 1;
                const tipY = baseY + curveDir * 2.5;

                // Тень клыка
                ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
                ctx.beginPath();
                ctx.moveTo(baseX - 1, baseY - 4.5);
                ctx.quadraticCurveTo(baseX + 8, baseY, tipX + 1, tipY);
                ctx.quadraticCurveTo(baseX + 5, baseY + 4.5, baseX - 1, baseY + 4.5);
                ctx.closePath();
                ctx.fill();

                // Кость клыка (градиент от белого к алому острию)
                const fangGrad = ctx.createLinearGradient(baseX, baseY, tipX, tipY);
                fangGrad.addColorStop(0, '#f8fafc');
                fangGrad.addColorStop(0.55, '#fef08a');
                fangGrad.addColorStop(0.8, '#f87171');
                fangGrad.addColorStop(1, '#dc2626');

                ctx.fillStyle = fangGrad;
                ctx.beginPath();
                ctx.moveTo(baseX, baseY - 4);
                ctx.quadraticCurveTo(baseX + 7, baseY, tipX, tipY);
                ctx.quadraticCurveTo(baseX + 5, baseY + 4, baseX, baseY + 4);
                ctx.closePath();
                ctx.fill();

                // Капля крови на острие
                ctx.fillStyle = '#ef4444';
                ctx.beginPath();
                ctx.arc(tipX - 1, tipY, 2.2, 0, Math.PI * 2);
                ctx.fill();

                // Световой блик по грани
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
                ctx.lineWidth = 1.0;
                ctx.beginPath();
                ctx.moveTo(baseX + 2, baseY - 1);
                ctx.lineTo(tipX - 2, tipY);
                ctx.stroke();
            }

            // Если в сцепке - дуга смыкания
            if (this.vampireLatched) {
                ctx.strokeStyle = '#ef4444';
                ctx.lineWidth = 2.5;
                ctx.beginPath();
                ctx.moveTo(tipX, -6);
                ctx.lineTo(tipX + 4, 0);
                ctx.lineTo(tipX, 6);
                ctx.stroke();
            }

            ctx.restore();
        }

    drawVoidOverlay(ctx) {
            ctx.save();
            ctx.strokeStyle = '#a855f7';
            ctx.lineWidth = 3;
            for (let i = 0; i < 4; i++) {
                const a = (i / 4) * Math.PI * 2 + this.animTime * 2;
                const r = this.radius + 6;
                ctx.beginPath();
                ctx.moveTo(Math.cos(a) * this.radius, Math.sin(a) * this.radius);
                ctx.lineTo(Math.cos(a + 0.3) * r, Math.sin(a + 0.3) * r);
                ctx.stroke();
            }
            ctx.restore();
        }

    drawVortex(ctx) {
            const r = this.radius;

            // 1. Глубокий объем космической галактики
            const g = ctx.createRadialGradient(0, 0, r * 0.15, 0, 0, r);
            g.addColorStop(0, '#000000');
            g.addColorStop(0.35, '#1e0836');
            g.addColorStop(0.65, '#3b0764');
            g.addColorStop(0.85, '#581c87');
            g.addColorStop(1, '#090114');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // 2. Вращающиеся рукава спиральной галактики с градиентной звездной пылью
            ctx.save();
            ctx.rotate(this.animTime * 2.5);

            const armColors = ['#c084fc', '#818cf8', '#38bdf8', '#f472b6'];
            for (let i = 0; i < 4; i++) {
                ctx.strokeStyle = armColors[i];
                ctx.lineWidth = 2.2;
                ctx.lineCap = 'round';
                const baseA = (i / 4) * Math.PI * 2;
                ctx.beginPath();
                ctx.arc(0, 0, r * 0.72, baseA, baseA + 1.25);
                ctx.stroke();

                // Микро-звездные скопления вдоль рукава
                const starA = baseA + 0.6;
                const starDist = r * 0.68;
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(Math.cos(starA) * starDist, Math.sin(starA) * starDist, 1.8, 0, Math.PI * 2);
                ctx.fill();

                const starA2 = baseA + 1.05;
                const starDist2 = r * 0.74;
                ctx.fillStyle = '#fef08a';
                ctx.beginPath();
                ctx.arc(Math.cos(starA2) * starDist2, Math.sin(starA2) * starDist2, 1.4, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();

            // 3. Кольцо гравитационного линзирования Эйнштейна
            ctx.strokeStyle = 'rgba(232, 121, 249, 0.65)';
            ctx.lineWidth = 1.6;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.48, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);

            // 4. Сияющая фотонная корона горизонта
            ctx.strokeStyle = '#f5d0fe';
            ctx.lineWidth = 2.0;
            ctx.shadowColor = '#c084fc';
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.32, 0, Math.PI * 2);
            ctx.stroke();
            ctx.shadowBlur = 0;

            // 5. Абсолютная тьма сверхмассивной черной дыры
            ctx.fillStyle = '#000000';
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.28, 0, Math.PI * 2);
            ctx.fill();
        }

    drawWisp(ctx) {
            const r = this.radius;
            const g = ctx.createRadialGradient(0, 0, 2, 0, 0, r);
            g.addColorStop(0, '#ffffff'); g.addColorStop(0.25, '#c084fc'); g.addColorStop(0.65, '#6b21a8'); g.addColorStop(1, '#1e1b4b');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            // Концентрические эфирные кольца
            ctx.strokeStyle = '#e9d5ff'; ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.arc(0, 0, r * 0.55, 0, Math.PI * 2); ctx.stroke();
            ctx.beginPath(); ctx.arc(0, 0, r * 0.35, 0, Math.PI * 2); ctx.stroke();
        }

    drawWispEtherealWings(ctx) {
            ctx.save();
            const r = this.radius;

            // Биолюминесцентная аура
            const aura = ctx.createRadialGradient(0, 0, r * 0.4, 0, 0, r * 2.2);
            aura.addColorStop(0, 'rgba(94, 234, 212, 0.65)');
            aura.addColorStop(0.5, 'rgba(45, 212, 191, 0.35)');
            aura.addColorStop(1, 'rgba(20, 184, 166, 0)');
            ctx.fillStyle = aura;
            ctx.beginPath();
            ctx.arc(0, 0, r * 2.2, 0, Math.PI * 2);
            ctx.fill();

            // Сияющие эфирные крылья мотылька
            const wingFlap = Math.sin(this.animTime * 18);
            ctx.strokeStyle = '#5eead4';
            ctx.lineWidth = 2.5;

            for (const side of [-1, 1]) {
                ctx.save();
                ctx.scale(side, 1);

                // Верхнее крыло
                ctx.fillStyle = 'rgba(94, 234, 212, 0.7)';
                ctx.beginPath();
                ctx.moveTo(r * 0.3, -r * 0.2);
                ctx.bezierCurveTo(r * 1.8, -r * 1.6 + wingFlap * 6, r * 2.6, -r * 0.4 + wingFlap * 4, r * 0.8, r * 0.1);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                // Нижнее крылышко
                ctx.fillStyle = 'rgba(45, 212, 191, 0.6)';
                ctx.beginPath();
                ctx.moveTo(r * 0.4, 0);
                ctx.bezierCurveTo(r * 2.0, r * 0.7 - wingFlap * 4, r * 1.5, r * 1.6 - wingFlap * 5, r * 0.3, r * 0.6);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                ctx.restore();
            }
            ctx.restore();
        }

    drawWispFireflies(ctx) {
            ctx.save();
            ctx.fillStyle = '#5eead4';
            for (let i = 0; i < 5; i++) {
                const a = (i / 5) * Math.PI * 2 + this.animTime * 3.5;
                const dist = this.radius + 5 + Math.sin(this.animTime * 6 + i) * 3;
                ctx.beginPath();
                ctx.arc(Math.cos(a) * dist, Math.sin(a) * dist, 2.5, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }

    drawZeus(ctx) {
            const r = this.radius;
            const g = ctx.createRadialGradient(-r * 0.25, -r * 0.25, r * 0.1, 0, 0, r);
            g.addColorStop(0, '#ffffff'); g.addColorStop(0.45, '#e2e8f0'); g.addColorStop(0.8, '#64748b'); g.addColorStop(1, '#1e293b');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            // Золотые молнии на поверхности
            ctx.strokeStyle = '#fde047'; ctx.lineWidth = 2.8; ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(-r * 0.45, -r * 0.45); ctx.lineTo(-r * 0.1, -r * 0.05); ctx.lineTo(r * 0.1, -r * 0.2); ctx.lineTo(r * 0.55, 0);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(-r * 0.45, r * 0.45); ctx.lineTo(-r * 0.1, r * 0.05); ctx.lineTo(r * 0.1, r * 0.2); ctx.lineTo(r * 0.55, 0);
            ctx.stroke();

            // Золотое солнце в центре
            ctx.fillStyle = '#eab308'; ctx.beginPath(); ctx.arc(0, 0, r * 0.25, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(0, 0, 4, 0, Math.PI * 2); ctx.fill();
        }
}


// =============================================================================
// ПРЕДПРОСМОТР ШАРА В ИНВЕНТАРЕ / МЕНЮ (100% СТАБИЛЬНЫЙ РЕНДЕР)
// =============================================================================

function renderBallPreview(arg1, arg2, customRadius = null) {
    let canvas, ballId;
    if (typeof arg1 === 'string') {
        ballId = arg1;
        canvas = arg2;
    } else {
        canvas = arg1;
        ballId = arg2;
    }
    if (!canvas || typeof canvas.getContext !== 'function') return;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    ctx.clearRect(0, 0, cw, ch);

    const template = BALL_CATALOG.find(b => b.id === ballId);
    if (!template) return;

    const baseRadius = customRadius !== null ? customRadius : Math.min(cw, ch) * 0.40;
    const renderRadius = (template.id === 'spike') ? baseRadius * 0.75 : baseRadius;

    const previewBall = new BattleBall(template, true);
    previewBall.isUIPreview = true;
    previewBall.radius = renderRadius;
    previewBall.pos.set(cw / 2, ch / 2);
    previewBall.facingAngle = 0;
    previewBall.krakenTentaclesActive = false;

    previewBall.draw(ctx);

    if (template.rarity === 'TRANSCENDENT') {
        previewBall.drawTranscendentIconSheen(ctx);
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BALL_CATALOG, BattleBall, renderBallPreview };
}

