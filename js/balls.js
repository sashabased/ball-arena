// =============================================================================
// КАТАЛОГ ВСЕХ 28 УНИКАЛЬНЫХ ШАРОВ (СБАЛАНСИРОВАННЫЕ ХАРАКТЕРИСТИКИ И АБИЛКИ)
// =============================================================================

const BALL_SPRITES = {};
if (typeof Image !== 'undefined') {
    const blazeImg = new Image();
    blazeImg.src = 'assets/blaze.png';
    BALL_SPRITES['blaze'] = blazeImg;

    const solarImg = new Image();
    solarImg.src = 'assets/solar.png';
    BALL_SPRITES['solar'] = solarImg;

    const solarCrownImg = new Image();
    solarCrownImg.src = 'assets/solar_crown.png';
    BALL_SPRITES['solar_crown'] = solarCrownImg;
}

const BALL_CATALOG = [
    // --- COMMON (4 шара) - Высокая живучесть, стабильный базовый урон ---
    {
        id: 'spike',
        name: 'Шип',
        rarity: 'COMMON',
        maxHp: 95,
        baseDamage: 8,
        speed: 2.50,
        mass: 1.25,
        radius: 35,
        abilityName: 'Шипованная броня',
        abilityDesc: 'При получении удара тарана стальные шипы наносят 4 колющего урона атакующему противнику (кд 4.0 сек).',
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
        abilityName: 'Хроносдвиг',
        abilityDesc: 'Цикл времени каждые 5 сек (5с норма -> 5с ускорение +50% -> 5с норма -> 5с замедление -35%). Каждые 2 отскока дают шестерню: таран расходует их на +5/+8 урона.',
        triggerType: 'charge_bounce'
    },
    {
        id: 'cyber',
        name: 'Неон-Кибер',
        rarity: 'COMMON',
        maxHp: 108,
        baseDamage: 7,
        speed: 3.10,
        mass: 0.90,
        radius: 34,
        abilityName: 'Гиперразгон',
        abilityDesc: 'Каждый удар о стену ускоряет на +20% (до 5 стаков, +100% скор.) с вибрирующей аурой. Таран врага сбрасывает стаки, нанося до +10 доп. урона с ЭМИ-вспышкой.',
        triggerType: 'wall'
    },
    {
        id: 'saw',
        name: 'Мясник',
        rarity: 'COMMON',
        maxHp: 108,
        baseDamage: 7,
        speed: 2.70,
        mass: 1.15,
        radius: 36,
        abilityName: 'Кровавая жажда',
        abilityDesc: 'Каждые 5 сек окутывается багровой аурой: следующий таран гарантированно накладывает кровотечение (по 1 урону каждые 0.5 сек в течение 2.5 сек).',
        triggerType: 'quick_timer'
    },

    // --- RARE (9 шаров) - Тактические эффекты и контроль ---
    {
        id: 'blaze',
        name: 'Огненный',
        rarity: 'RARE',
        maxHp: 108,
        baseDamage: 7,
        speed: 2.80,
        mass: 1.05,
        radius: 35,
        abilityName: 'Огненная буря',
        abilityDesc: 'Полыхает огненной аурой (0.5 урона/сек рядом). Каждые 5 сек накапливает медленно кружащийся фаербол: при сборе 3 зарядов выпускает их в 3 стороны (рикошетят от стен, живут 3 сек).',
        triggerType: 'quick_timer'
    },
    {
        id: 'frosty',
        name: 'Мороз',
        rarity: 'RARE',
        maxHp: 115,
        baseDamage: 7,
        speed: 2.50,
        mass: 1.40,
        radius: 38,
        abilityName: 'Крио-сосулька и Раскол',
        abilityDesc: 'Каждые 3 отскока запускает во врага ледяную сосульку (5 урона и 50% замедление). Таран замороженного врага раскалывает лед с критическим ударом (+5 урона).',
        triggerType: 'charge_bounce'
    },
    {
        id: 'vampire',
        name: 'Вампир',
        rarity: 'RARE',
        maxHp: 103,
        baseDamage: 7,
        speed: 2.75,
        mass: 1.00,
        radius: 35,
        abilityName: 'Вампирские клыки',
        abilityDesc: 'В бою выпускает острые клыки, следящие за врагом. При столкновении вцепляется в противника, останавливая обоих и выкачивая по 2 HP/сек. Затем клыки уходят на кд 10 сек.',
        triggerType: 'enemy_hit'
    },
    {
        id: 'toxic',
        name: 'Токсик',
        rarity: 'RARE',
        maxHp: 97,
        baseDamage: 6,
        speed: 2.90,
        mass: 0.90,
        radius: 34,
        abilityName: 'Ядовитая лужа',
        abilityDesc: 'Каждые 3 сек оставляет на полу арены огромную ядовитую лужу на 5.0 сек: наносит периодический урон кислотой (2 ед.) всем врагам внутри нее.',
        triggerType: 'quick_timer'
    },
    {
        id: 'magnet',
        name: 'Магнит',
        rarity: 'RARE',
        maxHp: 121,
        baseDamage: 6,
        speed: 2.35,
        mass: 1.50,
        radius: 38,
        abilityName: 'Полюсная стяжка',
        abilityDesc: 'Каждые 2 столкновения (кд 5.5с) создает мощное полярное поле (260px): притягивает врага к себе на 1.2с и наносит разово 5 урона при первом контакте.',
        triggerType: 'charge_bounce'
    },
    {
        id: 'ninja',
        name: 'Сюрикен',
        rarity: 'RARE',
        maxHp: 96,
        baseDamage: 8,
        speed: 3.10,
        mass: 0.85,
        radius: 34,
        abilityName: 'Золотой срез',
        abilityDesc: 'Каждые 2 отскока заряжает клинок: следующий удар наносит +6 доп. урона и оглушает врага на 0.45 сек.',
        triggerType: 'charge_bounce'
    },
    {
        id: 'cyborg',
        name: 'Киборг',
        rarity: 'RARE',
        maxHp: 115,
        baseDamage: 7,
        speed: 2.65,
        mass: 1.30,
        radius: 37,
        abilityName: 'Сегментная броня',
        abilityDesc: 'Каждые 10 полученного урона активирует броню: снижает следующий входящий урон на 40% (макс. 6 ед, кд 1.6 сек).',
        triggerType: 'on_damaged'
    },
    {
        id: 'sand',
        name: 'Скарабей',
        rarity: 'RARE',
        maxHp: 127,
        baseDamage: 6,
        speed: 2.35,
        mass: 1.60,
        radius: 39,
        abilityName: 'Песчаная буря',
        abilityDesc: 'Каждые 3 отскока поднимает колоссальную песчаную волну, ослепляющую и замедляющую врага на 40% (кд 1.5 сек).',
        triggerType: 'charge_bounce'
    },
    {
        id: 'wisp',
        name: 'Светляк',
        rarity: 'RARE',
        maxHp: 91,
        baseDamage: 6,
        speed: 3.00,
        mass: 0.80,
        radius: 34,
        abilityName: 'Биолюминесценция',
        abilityDesc: 'При HP <= 40% переходит в форму мотылька: раскрывает эфирные крылья (-55% входящего урона, +35% скорости) и восстанавливает +2 HP каждые 7 сек. При восстановлении HP выше 40% форма спадает.',
        triggerType: 'low_hp'
    },

    // --- EPIC (7 шаров) ---
    {
        id: 'titan',
        name: 'Титан',
        rarity: 'EPIC',
        maxHp: 135,
        baseDamage: 8,
        speed: 2.30,
        mass: 1.80,
        radius: 39,
        abilityName: 'Сейсмический раскол',
        abilityDesc: 'При получении 12 урона раскалывает арену трещинами и сотрясает врага мощной ударной волной (8 урона).',
        triggerType: 'on_damaged'
    },
    {
        id: 'boomer',
        name: 'Подрывник',
        rarity: 'EPIC',
        maxHp: 104,
        baseDamage: 7,
        speed: 2.85,
        mass: 1.05,
        radius: 35,
        abilityName: 'Часовая мина',
        abilityDesc: 'Каждые 2.5 сек оставляет на арене тяжелую мину на 2 сек (пульсирует и краснеет): детонирует при контакте или по таймеру, нанося 15 урона по площади.',
        triggerType: 'quick_timer'
    },
    {
        id: 'mirage',
        name: 'Мираж',
        rarity: 'EPIC',
        maxHp: 96,
        baseDamage: 6,
        speed: 3.00,
        mass: 0.85,
        radius: 34,
        abilityName: 'Голографическая ловушка',
        abilityDesc: 'Каждые 2 отскока выпускает голографическую копию-ловушку (3 урона и замедление врага на 1.2с при контакте), а Мираж уходит в маскировку.',
        triggerType: 'charge_bounce'
    },
    {
        id: 'laser',
        name: 'Протон',
        rarity: 'RARE',
        maxHp: 90,
        baseDamage: 6,
        speed: 2.85,
        mass: 0.90,
        radius: 34,
        abilityName: 'Тройной импульс',
        abilityDesc: 'Каждые 3 отскока выпускает 3 мощных лазерных луча в случайных направлениях (8 урона, кд 1.5 сек).',
        triggerType: 'charge_bounce'
    },
    {
        id: 'meteor',
        name: 'Метеор',
        rarity: 'EPIC',
        maxHp: 110,
        baseDamage: 9,
        speed: 2.50,
        mass: 1.40,
        radius: 37,
        abilityName: 'Кометный разгон',
        abilityDesc: 'Каждые 1.5 сек запускает рикошетящий мини-метеорит (5 урона). При непрерывном движении (3 сек) разогревается в пылающую комету (+40% скорости, кометный конус): следующий таран наносит +7 доп. урона и остужает шар.',
        triggerType: 'charge_bounce'
    },
    {
        id: 'storm',
        name: 'Тайфун',
        rarity: 'EPIC',
        maxHp: 102,
        baseDamage: 7,
        speed: 3.10,
        mass: 0.90,
        radius: 34,
        abilityName: 'Живой смерч',
        abilityDesc: 'Каждые 3 отскока призывает смерч, рикошетящий от бортов: затягивает врага в воронку (умеренная тяга) и наносит 2 урона каждые 0.35 сек.',
        triggerType: 'charge_bounce'
    },
    {
        id: 'crystal',
        name: 'Алмаз',
        rarity: 'EPIC',
        maxHp: 120,
        baseDamage: 6,
        speed: 2.45,
        mass: 1.55,
        radius: 38,
        abilityName: 'Кристаллический шпиль',
        abilityDesc: 'Каждые 3 отскока выращивает кристаллический шпиль (7 урона и щит 5 HP при таране). Через 3.5с шпиль взрывается на 6 осколков (по 3 урона).',
        triggerType: 'charge_bounce'
    },

    // --- LEGENDARY (5 шаров) ---
    {
        id: 'tesla',
        name: 'Тесла',
        rarity: 'LEGENDARY',
        maxHp: 103,
        baseDamage: 7,
        speed: 2.90,
        mass: 1.05,
        radius: 35,
        abilityName: 'Цепной разряд',
        abilityDesc: 'При ударе о врага или рикошете от стен с шансом 30% выпускает дуговую молнию, бьющую током по противнику.',
        triggerType: 'enemy_hit'
    },
    {
        id: 'phantom',
        name: 'Фантом',
        rarity: 'LEGENDARY',
        maxHp: 93,
        baseDamage: 7,
        speed: 2.95,
        mass: 0.90,
        radius: 34,
        abilityName: 'Призрачный фантом',
        abilityDesc: 'Каждые 3 отскока выпускает бесплотную тень, летящую во врага в течение 2 секунд и наносящую 6 урона при контакте.',
        triggerType: 'charge_bounce'
    },
    {
        id: 'dragon',
        name: 'Дракон',
        rarity: 'LEGENDARY',
        maxHp: 112,
        baseDamage: 8,
        speed: 2.70,
        mass: 1.25,
        radius: 37,
        abilityName: 'Дыхание дракона',
        abilityDesc: 'Каждые 2.4 сек извергает струю яростного пламени в сторону врага, поджигая его и нанося периодический урон.',
        triggerType: 'enemy_hit'
    },
    {
        id: 'solar',
        name: 'Гелиос',
        rarity: 'LEGENDARY',
        maxHp: 107,
        baseDamage: 6,
        speed: 2.80,
        mass: 1.05,
        radius: 36,
        abilityName: 'Солнечная корона',
        abilityDesc: 'При активации над шаром вспыхивает царственная корона, направляющая на врага сфокусированный луч жара (по 1 урону каждые 0.25 сек).',
        triggerType: 'quick_timer'
    },
    {
        id: 'kraken',
        name: 'Кракен',
        rarity: 'LEGENDARY',
        maxHp: 119,
        baseDamage: 8,
        speed: 2.55,
        mass: 1.40,
        radius: 38,
        abilityName: 'Щупальца бездны',
        abilityDesc: 'Каждые 5 сек окутывается щупальцами (+6 урона к удару). Каждые 5 сек на арене вырастают 2 щупальца: хватают врага на 2с (стан и +50% входящего урона).',
        triggerType: 'enemy_hit'
    },

    // --- MYTHIC (3 шара) ---
    {
        id: 'vortex',
        name: 'Сингулярность',
        rarity: 'MYTHIC',
        maxHp: 108,
        baseDamage: 8,
        speed: 3.05,
        mass: 0.95,
        radius: 35,
        abilityName: 'Черная дыра',
        abilityDesc: 'Каждые 3 отскока призывает колоссальную Черную дыру (112px, макс. 2 на карте): на 3.2с затягивает врага мощной гравитацией (-2 HP/0.35с) и коллапсирует со взрывом (-8 HP).',
        triggerType: 'charge_bounce'
    },
    {
        id: 'nuke',
        name: 'Атом',
        rarity: 'MYTHIC',
        maxHp: 89,
        baseDamage: 8,
        speed: 2.95,
        mass: 0.90,
        radius: 34,
        abilityName: 'Ядерный распад',
        abilityDesc: 'Накапливает радиоактивные изотопы при ударах; на 3-й таран провоцирует колоссальный термоядерный взрыв (15 ед. + радиация).',
        triggerType: 'enemy_hit'
    },
    {
        id: 'zeus',
        name: 'Зевс',
        rarity: 'MYTHIC',
        maxHp: 91,
        baseDamage: 9,
        speed: 3.05,
        mass: 0.90,
        radius: 34,
        abilityName: 'Гнев Олимпа',
        abilityDesc: 'При каждом 2-м ударе призывает с небес молниеносную кару Зевса, наносящую 11 урона и замедляющую врага.',
        triggerType: 'enemy_hit'
    },

    // --- TRANSCENDENT (1 шар — Ультра-Редкий) ---
    {
        id: 'berserk',
        name: 'Берсерк',
        rarity: 'TRANSCENDENT',
        maxHp: 120,
        baseDamage: 1,
        speed: 2.80,
        mass: 1.25,
        radius: 38,
        abilityName: 'Доспех Берсерка',
        abilityDesc: 'В базовой форме таран наносит 1 урон. При HP <= 40 издает яростный рев и надевает Доспех Берсерка: скорость +110%, урон тарана 0, входящий урон ограничен 1 HP за удар, алые полосы из глаз и сокрушительные взмахи Убийцей Драконов (кд 1.5 сек) по 10 урона с вампиризмом +3 HP за удар!',
        triggerType: 'low_hp'
    }
];



// =============================================================================
// БОЕВОЙ КЛАСС ШАРА (ФИЗИКА, ПОВОРОТЫ ПО ДВИЖЕНИЮ, АБИЛКИ, ОТРИСОВКА)
// =============================================================================

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
        this.clockworkBoostTimer = 0;     // Часовщик
        this.clockworkCycleTimer = 0;     // Часовщик (цикл 15с: 0..5с ускорение +50%, 5..10с норма, 10..15с замедление -35%)
        this.quickTimer = 0;             // Локальный таймер для quick_timer (phantom, solar)
        this.cyberBoostTimer = 0;         // Неон-Кибер
        this.cyberBonusTimer = 0;         // Неон-Кибер
        this.cyberSpeedStacks = 0;        // Неон-Кибер (0..5 стаков скорости от стен, +20% за стак)
        this.sawTimer = 0;                // Мясник (5.0 сек таймер ауры)
        this.sawAuraActive = true;        // Мясник: багровая аура готова к первому тарану
        this.meteorBolideTimer = 0;      // Метеор: запуск мини-метеоритов каждые 1.5с
        this.toxicPuddleTimer = 0;        // Токсик: таймер лужи (3.0 сек)
        this.blazeFireballCharges = 0;    // Огненный: заряды фаерболов (0..3)
        this.blazeFireballTimer = 0;      // Огненный: таймер накопления (5.0 сек)
        this.blazeAuraTick = 0;           // Огненный: тик урона ауры (0.5 урона/сек)
        this.isUIPreview = false;         // Флаг отображения в статических карточках/UI
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
        this.magnetDamageDealt = false;  // Магнит разовый урон
        this.magnetCooldown = 0;         // Магнит кулдаун (5.5 сек)
        this.krakenRoll = 0;             // Кракен качение на оси шара
        this.boomerBombTimer = 0;        // Подрывник (каждые 5 сек)
        this.meteorTimer = 0;            // Метеор (каждые 1.5 сек)
        this.meteorBlazingTimer = 0;     // Метеор раскаленный разгон
        this.sandWaveTimer = 0;          // Скарабей волна песка
        this.sandDamageDealt = false;    // Скарабей разовый урон
        this.ninjaCharged = false;       // Сюрикен (заряд на 1.0 сек)
        this.ninjaChargeTimer = 0;       // Сюрикен (1.0 сек)
        this.stunTimer = 0;              // Сюрикен (0.45 сек Стан, строго Ninja!)
        this.stunRecoverTimer = 0;       // Восстановление скорости (0.12 сек)
        this.cyborgAccum = 0;            // Киборг накопленный урон (порог 10)
        this.cyborgShieldActive = false; // Киборг щит бронепластины (-40% макс 6)
        this.cyborgCooldown = 0;         // Киборг кулдаун (1.6 сек)
        this.sandSlowTimer = 0;          // Скарабей замедление (0.65 сек, -20%)
        this.wispHealTimer = 0;          // Светляк таймер исцеления (7.0 сек)
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
        this.stormTicksLeft = 0;         // Тайфун оставшиеся тики (макс. 4)
        this.stormFieldCenter = null;    // { x, y }
        this.crystalCooldown = 0;        // Алмаз кулдаун (1.4 сек)
        this.teslaCooldown = 0;          // Тесла кулдаун (1.1 сек)
        this.teslaSlowTimer = 0;         // Тесла замедление (0.4 сек, -20%)
        this.phantomEchoReady = false;   // Фантом готовность эхо (0.8 сек)
        this.phantomEchoTimer = 0;
        this.phantomPendingHit = null;   // { timer: 0.18, enemy }
        this.dragonCooldown = 0;         // Дракон кулдаун (1.3 сек)
        this.krakenFieldTimer = 0;       // Кракен хватка (0.6 сек)
        this.krakenDamageDealt = false;  // Кракен разовый урон
        this.vortexFieldTimer = 0;       // Сингулярность поле (0.75 сек)
        this.vortexTickTimer = 0;        // Сингулярность (интервал 0.25 сек)
        this.vortexTicksLeft = 0;        // Сингулярность оставшиеся тики (макс. 3)
        this.vortexCooldown = 0;         // Сингулярность кулдаун (1.8 сек)
        this.vortexCenter = null;
        this.isotopeCharges = 0;         // Атом (0..3 изотопа)
        this.nukeCooldown = 0;           // Атом кулдаун между взрывами (0.4 сек)
        this.nukeResidualPulses = 0;     // Атом остаточные импульсы (2 шт по 2 урона)
        this.nukeResidualTimer = 0;      // Атом интервал (0.25 сек)
        this.zeusHitCount = 0;           // Зевс счётчик ударов (каждый 2-й)
        this.zeusCooldown = 0;           // Зевс кулдаун (0.8 сек)
        this.zeusSlowTimer = 0;          // Зевс замедление (0.35 сек, -25%)
        this.spikeCooldown = 0;          // Шип кулдаун
        this.forceProc = false;          // Флаг 100% срабатывания (для Live Preview)
        this.crystalTimer = 0;           // Алмаз таймер
        this.sandBounceCount = 0;        // Скарабей (каждые 3 отскока)
        this.laserBounceCount = 0;       // Протон (каждые 3 отскока)
        this.meteorBounceCount = 0;      // Метеор (каждые 2 отскока)
        this.stormBounceCount = 0;       // Тайфун (каждые 4 отскока)
        this.phantomBounceCount = 0;     // Фантом (каждые 3 отскока)
        this.krakenBounceCount = 0;      // Кракен
        this.vortexBounceCount = 0;      // Сингулярность (каждые 3 отскока)
        this.solarBeamTimer = 0;         // Гелиос тики луча
        this.solarBeamActive = false;    // Гелиос активность луча
        this.cyberCharged = false;       // Неон-Кибер 100% заряд ЭМИ
        this.silenceTimer = 0;           // ЭМИ глушение способностей
        this.magmaDropTimer = 0;         // Огненный таймер лужи магмы
        this.frostyBounceCount = 0;      // Мороз (каждые 3 отскока)
        this.frozenTimer = 0;            // Ледяная корка (50% замедление)
        this.mirageBounceCount = 0;      // Мираж (каждые 2 отскока)
        this.stealthTimer = 0;           // Мираж маскировка (+30% скорость)
        this.crystalBounceCount = 0;     // Алмаз (каждые 3 отскока)
        this.crystalShieldHp = 0;        // Алмаз призматический щит (5 HP)
        this.krakenTentaclesActive = false; // Кракен: щупальца появляются через 5 сек боя
        this.krakenCooldown = 5.0;        // Кракен: 5.0 сек до первого появления щупалец
        this.krakenVulnerableTimer = 0;  // Кракен: таймер уязвимости цели (+50% входящего урона)
        this.krakenConstrictTimer = 0;   // Захват щупальцами врага (2.0с)
        this.krakenConstrictTickTimer = 0;
        this.krakenConstrictedBy = null;
        this.speedBuffTimer = 0;
        this.speedBuffMultiplier = 1.0;

        this.vampireFangsActive = true;  // Вампир: готовность клыков к началу раунда
        this.vampireCooldown = 0;        // Вампир: кулдаун после захвата (10.0с)
        this.vampireLatched = false;     // Вампир: состояние сцепки
        this.vampireLatchTimer = 0;      // Вампир: таймер удержания (2.0с)
        this.vampireLatchedEnemy = null; // Вампир: цель удержания
        this.vampireDrainTimer = 0;      // Вампир: таймер откачки HP
        this.vampireFangsAngle = 0;      // Вампир: угол поворота клыков
        this.vampireLatchedBy = null;    // Флаг жертвы (удерживается вампиром)
        this.blazeOrbitAngle = 0;        // Огненный: орбитальный угол вращения фаерболов
        this.collisionImmunityTimer = 0; // Кулдаун между таранными столкновениями (защита от спама/ваншотов)

        // Берсерк (TRANSCENDENT)
        this.berserkSwordTimer = 0;       // Таймер до следующего взмаха (во 2-й фазе каждые 1.5 сек)
        this.berserkSwingActive = false;  // Состояние активного удара мечом
        this.berserkSwingTimer = 0;       // Прогресс анимации взмаха (0..0.35с)
        this.berserkAimAngle = 0;         // Направление меча на противника
        this.berserkBloodTrail = [];      // Тонкий красный след движения
        this.berserkLeftEyeTrail = [];    // Алая полоса света из левого глаза
        this.berserkRightEyeTrail = [];   // Алая полоса света из правого глаза
        this.berserkSwordTipTrail = [];   // След, следующий строго за кончиком меча
        this.berserkSwordSweepTrail = []; // Объемный веерный шлейф рассечения клинка
        this.berserkPrevSwingOffset = 0.35; // Предыдущий угол для плавной интерполяции дуги
        this.berserkHitThisSwing = false; // Защита от мульти-урона за один взмах
        this.berserkPhase2Active = false; // Постоянная активность фазы Доспеха Берсерка (не сбрасывается от отхила)
        this.berserkPhase2Triggered = false; // Триггер входа в режим Доспеха Берсерка при HP <= 40
        this.berserkRoarTimer = 0;        // Анимированный яростный рев при входе в фазу (1.0 сек)
        this.berserkRoarPulse = 0;        // Таймер пульсаций ударных волн рева

        this.animTime = 0;
    }

    calcCurrentSpeed() {
        if (this.stunTimer > 0) return 0;
        if (this.vampireLatched || this.vampireLatchedBy) return 0;

        // Положительные модификаторы скорости
        let boostMult = 1.0;
        if (this.cyberBoostTimer > 0) boostMult *= 1.22;
        if (this.clockworkBoostTimer > 0) boostMult *= 1.10;

        // Часовщик: 20-секундный цикл (5с норма -> 5с ускор +50% -> 5с норма -> 5с замедл -35%)
        if (this.id === 'clockwork') {
            const cycle = (this.clockworkCycleTimer || 0) % 20.0;
            if (cycle >= 5.0 && cycle < 10.0) {
                boostMult *= 1.50; // +50% к скорости
            } else if (cycle >= 15.0 && cycle < 20.0) {
                boostMult *= 0.65; // замедление
            }
        }

        // Неон-Кибер: каждый удар об стену дает +20% к скорости (до 5 стаков = +100%)
        if (this.id === 'cyber' && this.cyberSpeedStacks > 0) {
            boostMult *= (1.0 + this.cyberSpeedStacks * 0.20);
        }
        if (this.id === 'meteor' && this.meteorBlazing) {
            boostMult *= 1.40;
        }
        if (this.id === 'wisp' && this.hp <= this.maxHp * 0.40) {
            boostMult *= 1.35;
        }
        if (this.id === 'berserk' && (this.berserkPhase2Active || this.hp <= 40)) {
            boostMult *= 2.10; // +110% скорости во 2-й фазе Доспеха Берсерка
        }

        // Замедления (по правилу diminishing returns, общий кап 55%)
        let slow1 = this.freezeTimer > 0 ? 0.35 : 0;
        if (this.frozenTimer > 0) slow1 = Math.max(slow1, 0.50);
        let slow2 = this.sandSlowTimer > 0 ? 0.20 : 0;
        if (this.krakenConstrictTimer > 0) slow2 = Math.max(slow2, 0.25);
        let slow3 = this.teslaSlowTimer > 0 ? 0.20 : 0;
        let slow4 = this.zeusSlowTimer > 0 ? 0.25 : 0;
        if (this.stealthTimer > 0) boostMult *= 1.30;
        if (this.speedBuffTimer > 0 && this.speedBuffMultiplier) boostMult *= this.speedBuffMultiplier;

        let combinedSlow = 1 - (1 - slow1) * (1 - slow2) * (1 - slow3) * (1 - slow4);
        combinedSlow = Math.min(0.55, combinedSlow);

        let spd = this.baseSpeed * boostMult * (1 - combinedSlow);
        // Ограничение максимальной скорости с учетом гиперразгона
        let maxSpdCap = 3.4;
        if (this.id === 'meteor' && this.meteorBlazing) maxSpdCap = 4.8;
        if (this.id === 'berserk' && (this.berserkPhase2Active || this.hp <= 40)) maxSpdCap = 6.2;
        if (this.id === 'cyber' && this.cyberSpeedStacks > 0) {
            maxSpdCap = 6.0;
        } else if (this.id === 'clockwork' && ((this.clockworkCycleTimer || 0) % 20.0) >= 5.0 && ((this.clockworkCycleTimer || 0) % 20.0) < 10.0) {
            maxSpdCap = 4.2;
        } else if (boostMult > 1.0) {
            maxSpdCap = 4.2;
        }
        spd = Math.min(maxSpdCap, Math.max(0.6, spd));
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
        if (this.collisionImmunityTimer > 0) this.collisionImmunityTimer -= dt;
        if (this.sawCooldown > 0) this.sawCooldown -= dt;
        if (this.blazeCooldown > 0) this.blazeCooldown -= dt;
        if (this.frostyCooldown > 0) this.frostyCooldown -= dt;
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

        // 2. Периодический урон от Кровотечения (Мясник: каждые 0.5с по 1 урону в течение 2.5с)
        if (this.bleedTimer > 0) {
            this.bleedTimer -= dt;
            this.bleedTickTimer -= dt;
            if (this.bleedTickTimer <= 0) {
                this.bleedTickTimer = 0.5;
                const dmg = 1;
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
                        particles.addDamageText(bomb.enemy.pos.x, bomb.enemy.pos.y - 28, `-${dmg}`, '#fb923c', true);
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
                    sounds.playBallHit(1.2);
                    if (particles) {
                        particles.addDamageText(hit.enemy.pos.x, hit.enemy.pos.y - 25, '−5', '#818cf8', true);
                        particles.addSpectralEchoStrike(hit.startX || this.pos.x, hit.startY || this.pos.y, hit.enemy.pos.x, hit.enemy.pos.y, this.radius, 0.22);
                        particles.triggerShake(4, 0.12);
                    }
                }
            }
        }

        // 7. Тайфун: полностью перенесен на автономную физику смерча в particles.js
        // 8. Сингулярность: полностью перенесена на автономную физику Черной Дыры в particles.js

        // Кулдаун Магнита (3.6 сек)
        if (this.magnetCooldown > 0) {
            this.magnetCooldown -= dt;
        }

        // Таймер раскаленного разгона Метеора (1.2 сек)
        if (this.meteorBlazingTimer > 0) {
            this.meteorBlazingTimer -= dt;
        }

        // 9. Стяжка Магнита (Magnet: мощная электромагнитная стяжка на 260px + РАЗОВЫЙ урон 5 ед. при первом контакте с полем)
        if (this.magnetFieldTimer > 0 && enemy && enemy.hp > 0) {
            this.magnetFieldTimer -= dt;
            const dist = Math.hypot(enemy.pos.x - this.pos.x, enemy.pos.y - this.pos.y);
            const magnetRange = 260;
            if (dist <= magnetRange) {
                const pull = this.pos.clone().sub(enemy.pos).normalize();
                // Заметная и авторитетная электромагнитная тяга к Магниту
                const pullPower = Math.max(0.85, 2.4 * (1 - dist / magnetRange));
                enemy.vel.add(pull.scale(pullPower));
                enemy.maintainSpeed();

                // Разовый урон ровно один раз за активацию способности при близком контакте с полем
                if (!this.magnetDamageDealt && dist <= this.radius + enemy.radius + 35) {
                    this.magnetDamageDealt = true;
                    enemy.takeDamage(5, particles, false, this);
                    sounds.playAbility();
                    if (particles) {
                        particles.addDamageText(enemy.pos.x, enemy.pos.y - 25, '−5', '#38bdf8');
                        particles.addSparks(enemy.pos.x, enemy.pos.y, '#38bdf8', 14, 4.0);
                        particles.addShockwave(this.pos.x, this.pos.y, 80, '#38bdf8');
                    }
                }
            }
        }

        // Светляк: при HP <= 40% переходит во вторую форму (эфирные крылья):
        // хилит +2 HP каждые 7 сек. Если отхилится выше 40%, форма и все бонусы спадают!
        if (this.id === 'wisp' && this.hp > 0) {
            const inSecondForm = this.hp <= this.maxHp * 0.40;
            if (inSecondForm) {
                this.wispHealTimer = (this.wispHealTimer || 0) + dt;
                if (this.wispHealTimer >= 7.0) {
                    this.wispHealTimer = 0;
                    this.hp = Math.min(this.maxHp, this.hp + 2);
                    sounds.playLaunch ? sounds.playLaunch() : (sounds.playAbility && sounds.playAbility());
                    if (particles) {
                        particles.addDamageText(this.pos.x, this.pos.y - 25, '+2', '#4ade80', true);
                        particles.addSparks(this.pos.x, this.pos.y, '#22c55e', 14, 3.0);
                        particles.addShockwave(this.pos.x, this.pos.y, this.radius * 1.6, '#4ade80');
                    }
                    this.maintainSpeed();
                }
            } else {
                this.wispHealTimer = 0;
            }
        }

        // Подрывник: каждые 5 сек оставляет тяжелую мину на земле
        if (this.id === 'boomer' && this.hp > 0 && this.silenceTimer <= 0) {
            this.boomerBombTimer = (this.boomerBombTimer || 0) + dt;
            if (this.boomerBombTimer >= 2.5) {
                this.boomerBombTimer = 0;
                sounds.playLaunch ? sounds.playLaunch() : (sounds.playAbility && sounds.playAbility());
                if (particles && particles.addBoomerMine) {
                    particles.addBoomerMine(this.pos.x, this.pos.y, this);
                    particles.addSparks(this.pos.x, this.pos.y, '#f97316', 8, 2.5);
                }
            }
        }

        // Метеор:
        // 1. Каждые 1.5 сек запускает рикошетящий мини-метеорит
        // 2. Разогрев в комету при непрерывном движении (3.0 сек)
        if (this.id === 'meteor' && this.hp > 0 && this.silenceTimer <= 0) {
            // Запуск мини-метеоритов каждые 1.5 сек (не пропадают до удара по врагу)
            this.meteorBolideTimer = (this.meteorBolideTimer || 0) + dt;
            if (this.meteorBolideTimer >= 1.5) {
                this.meteorBolideTimer = 0;
                const angle = Math.random() * Math.PI * 2;
                const spd = 4.2;
                const vx = Math.cos(angle) * spd;
                const vy = Math.sin(angle) * spd;
                if (particles && particles.addMiniMeteor) {
                    particles.addMiniMeteor(this.pos.x, this.pos.y, vx, vy, this);
                    sounds.playLaunch ? sounds.playLaunch() : (sounds.playAbility && sounds.playAbility());
                    particles.addSparks(this.pos.x, this.pos.y, '#f97316', 10, 3.0);
                }
            }

            // Разогрев в пылающую комету при движении (3.0 сек)
            const spd = this.vel.mag();
            if (spd > 0.1 && !this.meteorBlazing) {
                this.meteorHeatTimer = (this.meteorHeatTimer || 0) + dt;
                if (this.meteorHeatTimer >= 3.0) {
                    this.meteorHeatTimer = 3.0;
                    this.meteorBlazing = true;
                    this.maintainSpeed();
                    sounds.playLaunch ? sounds.playLaunch() : (sounds.playAbility && sounds.playAbility());
                    if (particles) {
                        particles.addShockwave(this.pos.x, this.pos.y, this.radius * 1.8, '#f97316');
                        particles.addSparks(this.pos.x, this.pos.y, '#f59e0b', 16, 4.0);
                    }
                }
            }

            // Во время кометного разгона оставляет огненные искры и тлеющие частицы
            if (this.meteorBlazing && spd > 0.2 && particles && particles.particles && Math.random() < 0.6) {
                const backAngle = this.facingAngle + Math.PI + (Math.random() - 0.5) * 0.6;
                particles.particles.push({
                    x: this.pos.x + Math.cos(backAngle) * this.radius * 0.7,
                    y: this.pos.y + Math.sin(backAngle) * this.radius * 0.7,
                    vx: Math.cos(backAngle) * (Math.random() * 2.5 + 1.2),
                    vy: Math.sin(backAngle) * (Math.random() * 2.5 + 1.2),
                    size: Math.random() * 3.2 + 2.0,
                    color: Math.random() < 0.5 ? '#f97316' : '#fbbf24',
                    alpha: 0.9,
                    decay: 0.045,
                    shape: 'circle'
                });
            }
        }

        // 10. Таймеры состояний (Глушение, заморозка, невидимость, ускорение)
        if (this.silenceTimer > 0) this.silenceTimer -= dt;
        if (this.frozenTimer > 0) this.frozenTimer -= dt;
        if (this.stealthTimer > 0) this.stealthTimer -= dt;
        if (this.speedBuffTimer > 0) this.speedBuffTimer -= dt;
        if (this.spikeCooldown > 0) this.spikeCooldown -= dt;

        // Кракен: щупальца появляются каждые 5 сек во время боя
        if (this.id === 'kraken' && this.hp > 0) {
            if (!this.krakenTentaclesActive) {
                this.krakenCooldown -= dt;
                if (this.krakenCooldown <= 0) {
                    this.krakenTentaclesActive = true;
                    this.krakenCooldown = 0;
                    sounds.playAbility();
                    if (particles) {
                        particles.addSparks(this.pos.x, this.pos.y, '#a855f7', 12, 3.5);
                    }
                }
            }
        }
        if (this.krakenVulnerableTimer > 0) {
            this.krakenVulnerableTimer -= dt;
        }
        if (this.krakenVulnerableTimer > 0 || this.krakenConstrictTimer > 0) {
            this.krakenConstrictTimer -= dt;
        }

        // Огненный: старый магматический след полностью удален



        // 10.5. Песчаная осыпь Скарабея (Sand)
        if (this.sandWaveTimer > 0 && enemy && enemy.hp > 0) {
            this.sandWaveTimer -= dt;
            if (!this.sandDamageDealt) {
                const dist = Math.hypot(enemy.pos.x - this.pos.x, enemy.pos.y - this.pos.y);
                if (dist <= this.radius * 2.5) {
                    this.sandDamageDealt = true;
                    enemy.takeDamage(5, particles, false, this);
                    enemy.sandSlowTimer = 0.65;
                    enemy.maintainSpeed();
                    sounds.playAbility();
                    if (particles) {
                        particles.addDamageText(enemy.pos.x, enemy.pos.y - 25, '−5', '#eab308');
                        particles.addSandWave(this.pos.x, this.pos.y, this.radius * 2.5);
                    }
                }
            }
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
                            particles.addDamageText(enemy.pos.x, enemy.pos.y - 20, '−2', '#f43f5e');
                            particles.addSparks(enemy.pos.x, enemy.pos.y, '#f43f5e', 4, 2.0);
                        }
                    }
                }
            }
        }

        // Часовщик: 20-секундный цикл (5с норма -> 5с ускор -> 5с норма -> 5с замедл)
        if (this.id === 'clockwork' && this.hp > 0) {
            const oldPhase = Math.floor(((this.clockworkCycleTimer || 0) % 20.0) / 5.0);
            this.clockworkCycleTimer = (this.clockworkCycleTimer || 0) + dt;
            const newPhase = Math.floor(((this.clockworkCycleTimer || 0) % 20.0) / 5.0);
            if (oldPhase !== newPhase) {
                this.maintainSpeed();
                if (newPhase === 1) { // 5..10s: ускорение
                    sounds.playLaunch ? sounds.playLaunch() : sounds.playAbility();
                    if (particles) {
                        particles.addSparks(this.pos.x, this.pos.y, '#f59e0b', 10, 3.0);
                    }
                } else if (newPhase === 3) { // 15..20s: замедление
                    if (particles) {
                        particles.addSparks(this.pos.x, this.pos.y, '#64748b', 6, 2.0);
                    }
                }
            }
        }

        // Мясник: каждые 5 сек получает багровую ауру для гарантированного кровотечения
        if (this.id === 'saw' && this.hp > 0) {
            this.sawTimer += dt;
            if (this.sawTimer >= 5.0) {
                this.sawTimer = 0;
                if (!this.sawAuraActive) {
                    this.sawAuraActive = true;
                    sounds.playAbility ? sounds.playAbility() : null;
                    if (particles) {
                        particles.addSparks(this.pos.x, this.pos.y, '#ef4444', 8, 2.5);
                    }
                }
            }
        }

        // Вампир: клыки, слежение за врагом и сцепка с выкачиванием HP
        if (this.id === 'vampire' && this.hp > 0) {
            if (!this.vampireLatched) {
                if (this.vampireCooldown > 0) {
                    this.vampireCooldown -= dt;
                    if (this.vampireCooldown <= 0) {
                        this.vampireCooldown = 0;
                        this.vampireFangsActive = true;
                    }
                }
                if (enemy && enemy.hp > 0) {
                    this.vampireFangsAngle = Math.atan2(enemy.pos.y - this.pos.y, enemy.pos.x - this.pos.x);
                }
            } else {
                // Обездвиживание обоих шаров в сцепке
                this.vel.set(0, 0);
                if (enemy) enemy.vel.set(0, 0);

                if (enemy && enemy.hp > 0) {
                    const dx = enemy.pos.x - this.pos.x;
                    const dy = enemy.pos.y - this.pos.y;
                    const dist = Math.hypot(dx, dy) || 1;
                    const targetDist = this.radius + enemy.radius;
                    const midX = (this.pos.x + enemy.pos.x) / 2;
                    const midY = (this.pos.y + enemy.pos.y) / 2;
                    const dirX = dx / dist;
                    const dirY = dy / dist;
                    this.pos.x = midX - dirX * (targetDist / 2);
                    this.pos.y = midY - dirY * (targetDist / 2);
                    enemy.pos.x = midX + dirX * (targetDist / 2);
                    enemy.pos.y = midY + dirY * (targetDist / 2);
                    this.vampireFangsAngle = Math.atan2(dy, dx);

                    // Выкачивание 2 HP в секунду (по 1 HP каждые 0.5 сек)
                    this.vampireDrainTimer += dt;
                    if (this.vampireDrainTimer >= 0.5) {
                        this.vampireDrainTimer = 0;
                        enemy.takeDamage(1, particles, false, this);
                        const heal = Math.min(this.maxHp - this.hp, 1);
                        this.hp += heal;
                        if (sounds.playAbility) sounds.playAbility();
                        if (particles) {
                            particles.addDamageText(enemy.pos.x, enemy.pos.y - 25, '−1', '#ef4444');
                            if (heal > 0) particles.addDamageText(this.pos.x, this.pos.y - 25, `+${heal}`, '#22c55e');
                            if (particles.addBloodSiphon) {
                                particles.addBloodSiphon(enemy.pos.x, enemy.pos.y, this.pos.x, this.pos.y);
                            }
                            if (particles.addBloodDrip) {
                                particles.addBloodDrip(this.pos.x + dirX * this.radius, this.pos.y + dirY * this.radius);
                            }
                        }
                    }
                }

                this.vampireLatchTimer -= dt;
                if (this.vampireLatchTimer <= 0 || !enemy || enemy.hp <= 0) {
                    // Разрыв сцепки: клыки пропадают на 10 сек
                    this.vampireLatched = false;
                    this.vampireFangsActive = false;
                    this.vampireCooldown = 10.0;
                    this.vampireLatchTimer = 0;
                    if (enemy) enemy.vampireLatchedBy = null;

                    if (enemy && enemy.hp > 0) {
                        const dx = enemy.pos.x - this.pos.x;
                        const dy = enemy.pos.y - this.pos.y;
                        const dist = Math.hypot(dx, dy) || 1;
                        const nx = dx / dist;
                        const ny = dy / dist;
                        this.vel.set(-nx * (this.speed || 2.75), -ny * (this.speed || 2.75));
                        enemy.vel.set(nx * (enemy.speed || 2.75), ny * (enemy.speed || 2.75));
                        this.maintainSpeed();
                        enemy.maintainSpeed();
                        if (particles) {
                            particles.addSparks(this.pos.x + nx * this.radius, this.pos.y + ny * this.radius, '#ef4444', 8, 2.5);
                        }
                    }
                }
            }
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

        // Токсик: каждые 3 сек оставляет ядовитую лужу на 3.5 сек
        if (this.id === 'toxic' && this.hp > 0) {
            this.toxicPuddleTimer += dt;
            if (this.toxicPuddleTimer >= 3.0) {
                this.toxicPuddleTimer = 0;
                sounds.playAbility ? sounds.playAbility() : null;
                if (particles && particles.addToxicPuddle) {
                    particles.addToxicPuddle(this.pos.x, this.pos.y, this);
                }
            }
        }

        // Огненный: огненная аура (0.5 урона/сек рядом) + накопление фаерболов каждые 5 сек (до 3 шт)
        if (this.id === 'blaze' && this.hp > 0) {
            // 1. Аура жара вокруг шара
            if (enemy && enemy.hp > 0) {
                const dist = Math.hypot(this.pos.x - enemy.pos.x, this.pos.y - enemy.pos.y);
                if (dist <= this.radius + enemy.radius + 32) {
                    enemy.burnTimer = Math.max(enemy.burnTimer || 0, 0.5);
                    this.blazeAuraTick += dt;
                    if (this.blazeAuraTick >= 2.0) {
                        this.blazeAuraTick = 0;
                        enemy.takeDamage(1, particles, false, this);
                        if (particles) {
                            particles.addSparks(enemy.pos.x, enemy.pos.y, '#f97316', 4, 2.0);
                        }
                    }
                } else {
                    this.blazeAuraTick = 0;
                }
            }

            // 2. Накопление фаерболов каждые 5 сек (медленное орбитальное вращение вокруг шара)
            this.blazeOrbitAngle = (this.blazeOrbitAngle || 0) + dt * 1.6;
            this.blazeFireballTimer += dt;
            if (this.blazeFireballTimer >= 5.0) {
                this.blazeFireballTimer = 0;
                this.blazeFireballCharges = Math.min(3, (this.blazeFireballCharges || 0) + 1);
                if (particles) {
                    particles.addSparks(this.pos.x, this.pos.y, '#ea580c', 6, 2.5);
                }
                if (this.blazeFireballCharges >= 3) {
                    this.blazeFireballCharges = 0;
                    if (sounds.playLaunch) sounds.playLaunch();
                    else if (sounds.playAbility) sounds.playAbility();
                    if (particles && particles.addBlazeFireball) {
                        const baseAngle = this.blazeOrbitAngle || 0;
                        const fbSpd = Math.max(4.8, (this.speed || 2.8) * 1.8);
                        for (let f = 0; f < 3; f++) {
                            const fa = baseAngle + (f * Math.PI * 2 / 3);
                            const fvx = Math.cos(fa) * fbSpd;
                            const fvy = Math.sin(fa) * fbSpd;
                            particles.addBlazeFireball(this.pos.x + Math.cos(fa) * (this.radius + 14),
                                                       this.pos.y + Math.sin(fa) * (this.radius + 14),
                                                       fvx, fvy, this);
                        }
                    }
                }
            }
        }

        // 12. ТАЙМЕРЫ QUICK_TIMER:
        // Б) Фантом (интервал 2.2 сек)
        if (this.id === 'phantom' && this.hp > 0) {
            this.quickTimer += dt;
            if (this.quickTimer >= 2.2) {
                this.quickTimer = 0;
                this.phantomEchoReady = true;
                this.phantomEchoTimer = 0.8;
                sounds.playAbility();
                if (particles) {
                                        particles.addSparks(this.pos.x, this.pos.y, '#818cf8', 6, 2.5);
                }
            }
        }

        // В) Гелиос (Солнечная корона + частые тики по 1 урону каждые 0.25 сек)
        if (this.id === 'solar' && this.hp > 0) {
            this.quickTimer += dt;
            if (this.quickTimer >= 1.5 && this.quickTimer <= 3.2 && enemy && enemy.hp > 0) {
                this.solarBeamActive = true;
                this.solarBeamTimer += dt;
                if (particles && particles.addSolarBeam) {
                    particles.addSolarBeam(this.pos.x, this.pos.y, enemy.pos.x, enemy.pos.y, this);
                }
                if (this.solarBeamTimer >= 0.25) {
                    this.solarBeamTimer = 0;
                    enemy.takeDamage(1, particles, false, this);
                    if (particles) {
                        particles.addDamageText(enemy.pos.x, enemy.pos.y - 20, '−1', '#facc15');
                        particles.addSparks(enemy.pos.x, enemy.pos.y, '#f59e0b', 2, 2.0);
                    }
                }
            } else {
                this.solarBeamActive = false;
                if (this.quickTimer > 3.2) {
                    this.quickTimer = 0;
                    this.solarBeamTimer = 0;
                }
            }
        }

        // Алмаз перенесен на кристаллический шпиль при отскоках

        // 13. ТРИГГЕР LOW_HP:
        // Светляк (HP <= 40%, раскрывает сияющие эфирные крылья и поглощает 55% урона)
        if (this.id === 'wisp' && this.hp > 0 && this.hp <= this.maxHp * 0.40 && this.wispCooldown <= 0 && !this.wispDodgeActive) {
            this.wispCooldown = 2.4;
            this.wispDodgeActive = true;
            this.wispDodgeTimer = 1.6;
            sounds.playAbility();
            if (particles) {
                particles.addSparks(this.pos.x, this.pos.y, '#5eead4', 16, 3.5);
                particles.addShockwave(this.pos.x, this.pos.y, '#2dd4bf', 65, 0.4);
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
    }

    processCollision(enemy = null, particles = null, isWall = true) {
        this.totalWallBounces = (this.totalWallBounces || 0) + 1;
        this.bounceCount = (this.bounceCount || 0) + 1;

        // 1. Тесла (шанс 30% цепная молния при любом столкновении)
        if (this.id === 'tesla' && (this.forceProc || Math.random() < 0.30)) {
            sounds.playAbility();
            if (enemy && enemy.hp > 0) {
                enemy.takeDamage(5, particles, false, this);
                if (particles) {
                    particles.addLightning(this.pos.x, this.pos.y, enemy.pos.x, enemy.pos.y, '#38bdf8', 0.22, 2);
                    particles.addDamageText(enemy.pos.x, enemy.pos.y - 25, '−5', '#38bdf8');
                }
            }
        }

        // 2. Мороз (каждые 3 столкновения выпускает крио-сосульку во врага)
        if (this.id === 'frosty' && this.silenceTimer <= 0) {
            this.frostyBounceCount = (this.frostyBounceCount || 0) + 1;
            if (this.frostyBounceCount >= 3) {
                this.frostyBounceCount = 0;
                if (enemy && enemy.hp > 0 && particles && particles.addGlacialIcicle) {
                    particles.addGlacialIcicle(this.pos.x, this.pos.y, enemy, this);
                    sounds.playAbility();
                }
            }
        }

        // 3. Мираж (каждые 2 столкновения выпускает голографическую ловушку во врага и уходит в маскировку)
        if (this.id === 'mirage' && this.silenceTimer <= 0) {
            this.mirageBounceCount = (this.mirageBounceCount || 0) + 1;
            if (this.mirageBounceCount >= 2) {
                this.mirageBounceCount = 0;
                this.stealthTimer = 1.5;
                if (enemy && enemy.hp > 0 && particles && particles.addHoloDecoyTrap) {
                    particles.addHoloDecoyTrap(this.pos.x, this.pos.y, enemy, this);
                    sounds.playAbility();
                }
            }
        }

        // 4. Алмаз (каждые 3 столкновения выращивает кристаллический шпиль на арене)
        if (this.id === 'crystal' && this.silenceTimer <= 0) {
            this.crystalBounceCount = (this.crystalBounceCount || 0) + 1;
            if (this.crystalBounceCount >= 3) {
                this.crystalBounceCount = 0;
                if (particles && particles.addCrystalSpire) {
                    particles.addCrystalSpire(this.pos.x, this.pos.y, this);
                    sounds.playAbility();
                }
            }
        }

        // 5. Скарабей (каждые 3 столкновения поднимает песчаную волну)
        if (this.id === 'sand') {
            this.sandBounceCount = (this.sandBounceCount || 0) + 1;
            if (this.sandBounceCount >= 3) {
                this.sandBounceCount = 0;
                this.sandWaveTimer = 1.6;
                sounds.playAbility();
                if (particles) {
                    particles.addSandWave(this.pos.x, this.pos.y, this.radius * 4.2);
                }
                if (enemy && enemy.hp > 0) {
                    const dist = Math.hypot(enemy.pos.x - this.pos.x, enemy.pos.y - this.pos.y);
                    if (dist <= this.radius * 4.2) {
                        enemy.takeDamage(5, particles, false, this);
                        enemy.sandSlowTimer = 1.0;
                        enemy.maintainSpeed();
                        if (particles) {
                            particles.addDamageText(enemy.pos.x, enemy.pos.y - 25, '−5', '#eab308');
                        }
                    }
                }
            }
        }

        // 6. Протон (каждые 3 столкновения выпускает 3 лазерных луча)
        if (this.id === 'laser') {
            this.laserBounceCount = (this.laserBounceCount || 0) + 1;
            if (this.laserBounceCount >= 3 && this.laserCooldown <= 0) {
                this.laserBounceCount = 0;
                this.laserCooldown = 1.5;
                sounds.playAbility();
                let hitEnemy = false;
                for (let l = 0; l < 3; l++) {
                    const angle = Math.random() * Math.PI * 2;
                    const startX = this.pos.x;
                    const startY = this.pos.y;
                    const endX = startX + Math.cos(angle) * 850;
                    const endY = startY + Math.sin(angle) * 850;
                    if (particles) {
                        particles.addLaserBeam(startX, startY, endX, endY, '#06b6d4', 6, 0.15);
                    }
                    if (!hitEnemy && enemy && enemy.hp > 0) {
                        const vX = endX - startX;
                        const vY = endY - startY;
                        const lenSq = vX * vX + vY * vY;
                        let t = ((enemy.pos.x - startX) * vX + (enemy.pos.y - startY) * vY) / lenSq;
                        t = Math.max(0, Math.min(1, t));
                        const projX = startX + t * vX;
                        const projY = startY + t * vY;
                        const d = Math.hypot(enemy.pos.x - projX, enemy.pos.y - projY);
                        if (d <= enemy.radius + 18) {
                            hitEnemy = true;
                            enemy.takeDamage(8, particles, true, this);
                            if (particles) {
                                particles.addDamageText(enemy.pos.x, enemy.pos.y - 25, '−8', '#06b6d4', true);
                                particles.triggerShake(4, 0.12);
                            }
                        }
                    }
                }
            }
        }

        // 7. Фантом (каждые 3 столкновения выпускает тень во врага)
        if (this.id === 'phantom') {
            this.phantomBounceCount = (this.phantomBounceCount || 0) + 1;
            if (this.phantomBounceCount >= 3) {
                this.phantomBounceCount = 0;
                sounds.playAbility();
                if (particles && particles.addPhantomGhost) {
                    particles.addPhantomGhost(this.pos.x, this.pos.y, enemy, this);
                }
            }
        }

        // 8. Тайфун (каждые 4 столкновения порождает блуждающий торнадо)
        if (this.id === 'storm' && this.hp > 0) {
            this.stormBounceCount = (this.stormBounceCount || 0) + 1;
            if (this.stormBounceCount >= 4) {
                if (particles && particles.tornadoes && particles.tornadoes.some(t => t.owner === this)) {
                    this.stormBounceCount = 3;
                } else {
                    this.stormBounceCount = 0;
                    const randAngle = Math.random() * Math.PI * 2;
                    const torVx = Math.cos(randAngle) * 2.8;
                    const torVy = Math.sin(randAngle) * 2.8;
                    if (particles && particles.addTornado) {
                        particles.addTornado(this.pos.x, this.pos.y, torVx, torVy, this);
                    }
                    sounds.playLaunch();
                }
            }
        }

        // 9. Неон-Кибер (каждое столкновение дает +20% скорости до 5 стаков)
        if (this.id === 'cyber' && this.hp > 0 && isWall) {
            const oldStacks = this.cyberSpeedStacks || 0;
            this.cyberSpeedStacks = Math.min(5, oldStacks + 1);
            this.maintainSpeed();
            if (this.cyberSpeedStacks !== oldStacks) {
                sounds.playLaunch ? sounds.playLaunch() : sounds.playHit();
                if (particles) {
                    particles.addSparks(this.pos.x, this.pos.y, '#00f0ff', 6 + this.cyberSpeedStacks * 3, 3.5);
                    particles.addShockwave(this.pos.x, this.pos.y, this.radius * (1.1 + this.cyberSpeedStacks * 0.15), '#38bdf8');
                }
            }
        }

        // 10. Сингулярность (каждые 3 столкновения призывает Черную Дыру)
        if (this.id === 'vortex') {
            this.vortexBounceCount = (this.vortexBounceCount || 0) + 1;
            if (this.vortexBounceCount >= 3) {
                if (particles && particles.darkSingularities && particles.darkSingularities.length >= 2) {
                    this.vortexBounceCount = 2;
                } else {
                    this.vortexBounceCount = 0;
                    sounds.playExplosion ? sounds.playExplosion() : sounds.playHit();
                    if (particles) {
                        particles.addDarkVortex(this.pos.x, this.pos.y, 112, 3.2, this);
                    }
                }
            }
        }

        // 11. CHARGE_BOUNCE (каждые 2 любых столкновения):
        if (this.bounceCount >= 2) {
            this.bounceCount = 0;

            // Часовщик
            if (this.id === 'clockwork') {
                this.gearCharges = Math.min(2, this.gearCharges + 1);
                this.gearChargeTimer = 2.5;
                sounds.playLaunch();
                if (particles) {
                    particles.addSparks(this.pos.x, this.pos.y, '#fbbf24', 5, 2.0);
                }
            }

            // Магнит (КД 5.5с)
            if (this.id === 'magnet' && this.magnetCooldown <= 0) {
                this.magnetCooldown = 5.5;
                this.magnetFieldTimer = 1.2;
                this.magnetDamageDealt = false;
                sounds.playAbility();
                if (particles) {
                    particles.addMagneticField(this, enemy, 240, 1.2);
                }
                if (enemy && enemy.hp > 0) {
                    const dist = Math.hypot(enemy.pos.x - this.pos.x, enemy.pos.y - this.pos.y);
                    if (dist <= this.radius * 2.8) {
                        this.magnetDamageDealt = true;
                        enemy.takeDamage(5, particles, false, this);
                        if (particles) {
                            particles.addDamageText(enemy.pos.x, enemy.pos.y - 25, '−5', '#38bdf8');
                        }
                    }
                }
            }

            // Сюрикен
            if (this.id === 'ninja') {
                this.ninjaCharged = true;
                this.ninjaChargeTimer = 2.5;
                sounds.playLaunch();
                if (particles) {
                    particles.addSparks(this.pos.x, this.pos.y, '#facc15', 8, 2.5);
                }
            }
        }
    }

    onWallHit(side, enemy = null, particles = null) {
        sounds.playWallHit(0.4);
        if (this.vel.mag() > 0.05) {
            this.facingAngle = Math.atan2(this.vel.y, this.vel.x);
        }
        // Глобальное правило: столкновение о стену эквивалентно любому столкновению
        this.processCollision(enemy, particles, true);
    }

    onHitEnemy(enemy, impactForce, hitPoint, particles) {
        // Защита от ваншота во время сцепки Вампира: таранный урон полностью отключен!
        if (this.vampireLatched || (enemy && enemy.vampireLatched) || this.vampireLatchedBy || (enemy && enemy.vampireLatchedBy)) {
            return;
        }

        // Таранный урон разрешен
        let damage = this.baseDamage;
        let isCrit = false;

        // Берсерк: во 2-й фазе (HP <= 40 или активен Доспех) тело не наносит урон при контакте — урон наносит ТОЛЬКО меч Dragon Slayer
        if (this.id === 'berserk' && (this.berserkPhase2Active || this.hp <= 40)) {
            damage = 0;
        }

        // 1. Проверка защитного мерцания Светляка
        if (enemy.id === 'wisp' && enemy.hp <= enemy.maxHp * 0.40) {
            damage = Math.max(1, Math.round(damage * 0.45));
            if (particles) {
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
            // bonus damage is added directly to finalDamage
        }

        // 3. Расход стаков скорости Неон-Кибера (доп. урон пропорционально стакам)
        if (this.id === 'cyber' && this.cyberSpeedStacks > 0) {
            const bonus = this.cyberSpeedStacks * 2;
            damage += bonus;
            isCrit = true;
            sounds.playExplosion ? sounds.playExplosion() : sounds.playHit();
            if (particles) {
                particles.addEmpBurst(enemy.pos.x, enemy.pos.y);
                particles.triggerShake(4 + this.cyberSpeedStacks, 0.2);
            }
            this.cyberSpeedStacks = 0;
            this.maintainSpeed();
        }

        // 4. Мясник (Кровавая жажда: гарантированное кровотечение по 1 урону/0.5с в течение 2.5с при активной ауре)
        if (this.id === 'saw') {
            if (this.sawAuraActive || this.forceProc) {
                this.sawAuraActive = false;
                this.sawTimer = 0;
                enemy.bleedTimer = 2.5;
                enemy.bleedTickTimer = 0.5;
                isCrit = true;
                if (particles) {
                    particles.addBleedSplatter(hitPoint.x, hitPoint.y, 14);
                }
            }
        }

        // 5. Огненный (Аура и фаерболы работают непрерывно, таран наносит полный базовый урон)
        if (this.id === 'blaze') {
            if (particles) {
                particles.addSparks(hitPoint.x, hitPoint.y, '#f97316', 8, 3.0);
            }
        }

        // 6. Мороз (Ледяная корка, 30% шанс: +5 урона и замедление на 35% на 0.75 сек, кд 1.2 сек)
        if (this.id === 'frosty' && this.frostyCooldown <= 0) {
            this.frostyCooldown = 1.2;
            if (this.forceProc || Math.random() < 0.30) {
                damage += 5;
                enemy.freezeTimer = 0.75;
                enemy.maintainSpeed();
                sounds.playAbility();
                if (particles) {
                    particles.addDamageText(enemy.pos.x, enemy.pos.y - 28, '−5', '#38bdf8', true);
                    particles.addIceNova(hitPoint.x, hitPoint.y, 45);
                }
            }
        }

        // 7. Вампир (Вампирские клыки: захват и выкачивание HP)
        if (this.id === 'vampire') {
            if (this.vampireFangsActive && !this.vampireLatched && enemy && enemy.hp > 0) {
                this.vampireLatched = true;
                this.vampireLatchTimer = 2.0; // 2.0 секунды удержания и выкачивания HP
                this.vampireDrainTimer = 0;
                this.vampireLatchedEnemy = enemy;
                enemy.vampireLatchedBy = this;
                this.vel.set(0, 0);
                enemy.vel.set(0, 0);
                if (sounds.playAbility) sounds.playAbility();
                if (particles) {
                    particles.addSparks(hitPoint.x, hitPoint.y, '#dc2626', 10, 3.0);
                }
            }
        }
        if (enemy && enemy.id === 'vampire' && enemy.vampireFangsActive && !enemy.vampireLatched && this.hp > 0) {
            enemy.vampireLatched = true;
            enemy.vampireLatchTimer = 2.0;
            enemy.vampireDrainTimer = 0;
            enemy.vampireLatchedEnemy = this;
            this.vampireLatchedBy = enemy;
            this.vel.set(0, 0);
            enemy.vel.set(0, 0);
            if (sounds.playAbility) sounds.playAbility();
        }

        // 8. Токсик (Оставляет ядовитые лужи на полу арены, таран наносит полный урон)
        if (this.id === 'toxic') {
            if (particles) {
                particles.addAcidSplash(hitPoint.x, hitPoint.y);
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
                particles.addDamageText(enemy.pos.x, enemy.pos.y - 32, '+6', '#facc15', true);
                particles.addSparks(hitPoint.x, hitPoint.y, '#fef08a', 12, 4.0);
            }
        }

        // 10. Подрывник: механика переведена на мину каждые 5 сек

        // 11. Мираж (Ложный угол бонус +5 урона)
        if (this.id === 'mirage' && this.mirageBonusTimer > 0) {
            damage += 5;
            this.mirageBonusTimer = 0;
            isCrit = true;
            if (particles) {
                particles.addDamageText(enemy.pos.x, enemy.pos.y - 28, '+5', '#06b6d4', true);
            }
        }

        // 12. Метеор: кометный таран (+7 урона), после чего шар остывает до базового состояния
        if (this.id === 'meteor' && this.meteorBlazing) {
            this.meteorBlazing = false;
            this.meteorHeatTimer = 0;
            this.maintainSpeed();
            damage += 7;
            isCrit = true;
            sounds.playExplosion ? sounds.playExplosion() : sounds.playHit();
            if (particles) {
                particles.addDamageText(enemy.pos.x, enemy.pos.y - 28, '−7', '#f97316', true);
                particles.addSparks(hitPoint.x, hitPoint.y, '#f59e0b', 14, 3.5);
                particles.triggerShake(5, 0.18);
            }
        }

        // 13. Тесла (Дуговой разряд, 35% шанс, кд 1.1 сек: 8 урона и -20% скорости на 0.4 сек)
        if (this.id === 'tesla' && this.teslaCooldown <= 0) {
            this.teslaCooldown = 1.1;
            if (this.forceProc || Math.random() < 0.35) {
                damage += 8;
                enemy.teslaSlowTimer = 0.4;
                enemy.maintainSpeed();
                sounds.playAbility();
                if (particles) {
                    particles.addLightning(this.pos.x, this.pos.y, enemy.pos.x, enemy.pos.y, '#38bdf8', 0.22, 2);
                    particles.addDamageText(enemy.pos.x, enemy.pos.y - 28, '−8', '#38bdf8', true);
                }
            }
        }

        // 14. Фантом (Спектральное эхо: отложенный повторный удар через 0.18 сек)
        if (this.id === 'phantom' && (this.phantomEchoReady || this.forceProc)) {
            this.phantomEchoReady = false;
            this.phantomEchoTimer = 0;
            this.phantomPendingHit = {
                timer: 0.18,
                enemy: enemy,
                startX: this.pos.x,
                startY: this.pos.y
            };
        }

        // 15. Дракон (Пламенный выдох: кд 2.4 сек, 5 прямого + горение)
        if (this.id === 'dragon' && this.dragonCooldown <= 0) {
            this.dragonCooldown = 2.4;
            damage += 5;
            isCrit = true;
            enemy.burnTimer = 0.6;
            enemy.burnTickTimer = 0.3;
            enemy.burnSource = 'dragon';
            sounds.playExplosion();
            if (particles) {
                const breathAngle = Math.atan2(enemy.pos.y - this.pos.y, enemy.pos.x - this.pos.x);
                const breathRange = Math.max(90, Math.hypot(enemy.pos.x - this.pos.x, enemy.pos.y - this.pos.y) + enemy.radius);
                particles.addDragonBreathCone(this.pos.x, this.pos.y, breathAngle, breathRange);
                particles.addDamageText(enemy.pos.x, enemy.pos.y - 28, '−5', '#f97316', true);
                particles.triggerShake(5, 0.15);
            }
        }

        // 16. Атом (Ядерный распад: комбо 3 удара детонирует мощнейший импульс 15 урона + радиация)
        if (this.id === 'nuke' && this.hp > 0) {
            this.isotopeCharges++;
            if (this.isotopeCharges < 3) {
                if (particles) {
                    particles.addSparks(hitPoint.x, hitPoint.y, '#fda4af', 5, 2.5);
                }
            } else {
                this.isotopeCharges = 0;
                damage += 15;
                isCrit = true;
                this.nukeResidualPulses = 2;
                this.nukeResidualTimer = 0.25;
                this.takeDamage(2, particles, false, null, true);
                sounds.playExplosion();
                if (particles) {
                    particles.addThermonuclearPulse(hitPoint.x, hitPoint.y, this.radius * 2.7);
                    particles.addDamageText(enemy.pos.x, enemy.pos.y - 32, '−15', '#e11d48', true);
                    particles.addDamageText(this.pos.x, this.pos.y - 25, '−2', '#f43f5e');
                    particles.triggerShake(10, 0.28);
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
                    particles.addDamageText(enemy.pos.x, enemy.pos.y - 30, '−11', '#facc15', true);
                    particles.triggerShake(7, 0.2);
                }
            }
        }

        // Кракен: щупальца бездны наносят сокрушительный удар (+6 урона) и исчезают на 5 секунд кд
        if (this.id === 'kraken' && this.krakenTentaclesActive) {
            this.krakenTentaclesActive = false;
            this.krakenCooldown = 5.0;
            damage += 6;
            isCrit = true;
            sounds.playExplosion ? sounds.playExplosion() : sounds.playHit();
            if (particles) {
                particles.addSparks(enemy.pos.x, enemy.pos.y, '#c084fc', 16, 4.0);
                particles.triggerShake(6, 0.2);
            }
        }

        // Нанесение урона
        if (damage > 0) {
            enemy.takeDamage(damage, particles, isCrit, this);
        }

        sounds.playBallHit(1.0);
        if (particles) {
            particles.addSparks(hitPoint.x, hitPoint.y, '#ffffff', 8, 3.0);
        }
    }

    takeDamage(amount, particles, isCrit = false, enemy = null, isReflected = false) {
        if (this.hp <= 0) return 0;
        let finalDamage = amount;

        // Уязвимость от щупалец Кракена (+50% входящего урона)
        if (this.krakenVulnerableTimer > 0) {
            finalDamage = Math.round(finalDamage * 1.5);
            if (particles) {
                // text removed
            }
        }

        // Уязвимость от щупалец Кракена (+50% входящего урона)
        if (this.krakenVulnerableTimer > 0) {
            finalDamage = Math.round(finalDamage * 1.5);
            if (particles) {
                // text removed
            }
        }

        // 1. Киборг: Сегментная броня (снижает следующий урон на 40%, макс. 6 ед)
        if (this.id === 'cyborg' && this.cyborgShieldActive) {
            this.cyborgShieldActive = false;
            const reduction = Math.min(6, Math.max(1, Math.round(finalDamage * 0.40)));
            finalDamage = Math.max(1, finalDamage - reduction);
            if (particles) {
                // text removed
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
                                particles.addDamageText(enemy.pos.x, enemy.pos.y - 30, `-${absorbed}`, '#a855f7');
                particles.addPrismaticReflect(this.pos.x, this.pos.y, enemy.pos.x, enemy.pos.y);
            }
        }

        // Берсерк: защитный порог перехода и абсолютная броня во 2-й фазе
        if (this.id === 'berserk') {
            if (!this.berserkPhase2Active && this.hp > 40) {
                // Если удар опускает здоровье ниже 40 HP, урон срезается ровно до границы 40 HP!
                if (this.hp - finalDamage < 40) {
                    finalDamage = this.hp - 40;
                }
            } else {
                // Во 2-й фазе (Доспех Берсерка активен) любой удар наносит строго не более 1 HP
                if (finalDamage > 1) {
                    finalDamage = 1;
                }
            }
        }

        // Применение урона
        this.hp = Math.max(0, this.hp - finalDamage);

        const textColor = this.isPlayer ? '#ff3b30' : '#ffffff';
        if (particles) {
            particles.addDamageText(this.pos.x, this.pos.y - 18, `-${finalDamage}`, textColor, isCrit);
        }

        // Алмаз: поглощение урона кристаллическим щитом
        if (this.crystalShieldHp > 0) {
            const absorbed = Math.min(this.crystalShieldHp, finalDamage);
            this.crystalShieldHp -= absorbed;
            finalDamage -= absorbed;
            if (particles) {
                // text removed
                particles.addSparks(this.pos.x, this.pos.y, '#38bdf8', 8, 3.0);
            }
        }

        // 3. Шип: колющий отпор при получении урона
        if (this.id === 'spike' && finalDamage > 0 && this.spikeCooldown <= 0 && !isReflected) {
            this.spikeCooldown = 4.0;
            sounds.playBallHit(0.9);
            if (particles && particles.addSpikeRadialNeedles) {
                particles.addSpikeRadialNeedles(this.pos.x, this.pos.y, this);
            }
            if (enemy && enemy !== this) {
                enemy.takeDamage(4, particles, false, this, true);
                if (particles) {
                    particles.addDamageText(enemy.pos.x, enemy.pos.y - 30, '−4', '#f1f5f9');
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
                    particles.addSparks(this.pos.x, this.pos.y, '#22d3ee', 8, 3.0);
                }
            }
        }

        // 5. Титан: Сейсмический раскол (накопление 12 урона вызывает сейсмо-волну 8 урона + трещины арены)
        if (this.id === 'titan' && this.titanCooldown <= 0 && !isReflected && enemy && enemy !== this) {
            this.titanAccum += finalDamage;
            if (this.titanAccum >= 12) {
                this.titanAccum = 0;
                this.titanCooldown = 0.9;
                enemy.takeDamage(8, particles, true, this, true);
                const push = enemy.pos.clone().sub(this.pos).normalize().scale(7.0);
                enemy.vel.add(push);
                enemy.maintainSpeed();
                sounds.playExplosion();
                if (particles) {
                    particles.addDamageText(enemy.pos.x, enemy.pos.y - 30, '−8', '#94a3b8', true);
                    particles.addSeismicShockwave(this.pos.x, this.pos.y, 140);
                    if (particles.addTitanFissure) particles.addTitanFissure(this.pos.x, this.pos.y);
                    particles.triggerShake(9, 0.25);
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

    getBorderColor() {
        switch (this.rarity) {
            case 'TRANSCENDENT': return '#ff0033';
            case 'MYTHIC': return '#f43f5e';
            case 'LEGENDARY': return '#fbbf24';
            case 'EPIC': return '#c084fc';
            case 'RARE': return '#38bdf8';
            default: return '#94a3b8';
        }
    }

    // =========================================================================
    // ОСНОВНОЙ МЕТОД ОТРИСОВКИ (100% КРУГЛЫЙ ШАР, 3D БЛИК, СТАТУСНЫЕ АНИМАЦИИ)
    // =========================================================================

    draw(ctx) {
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);

        // 1. Статусные эффекты ПОД шаром (струя реактивного ускорения / крылья Дракона)
        if (this.id === 'dragon' && (Math.abs(this.vel.x) > 0.05 || Math.abs(this.vel.y) > 0.05)) {
            ctx.save();
            ctx.rotate(this.facingAngle);
            ctx.fillStyle = 'rgba(249, 115, 22, 0.45)';
            ctx.beginPath();
            ctx.moveTo(-this.radius * 0.3, -this.radius * 0.2);
            ctx.quadraticCurveTo(-this.radius * 1.5, -this.radius * 1.1, -this.radius * 0.7, -this.radius * 0.7);
            ctx.lineTo(-this.radius * 0.5, -this.radius * 0.15);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(-this.radius * 0.3, this.radius * 0.2);
            ctx.quadraticCurveTo(-this.radius * 1.5, this.radius * 1.1, -this.radius * 0.7, this.radius * 0.7);
            ctx.lineTo(-this.radius * 0.5, this.radius * 0.15);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
        // Неон-Кибер: вибрирующая аура скорости (чем больше стаков, тем сильнее мелькание копий)
        if (this.id === 'cyber' && this.cyberSpeedStacks > 0) {
            this.drawCyberSpeedAura(ctx);
        }

        // Метеор: мощный кометный плазменный хвост и тепловая корона ПОД шаром
        if (this.id === 'meteor' && this.meteorBlazing && this.vel.mag() > 0.2 && !this.isUIPreview) {
            this.drawMeteorCometTail(ctx);
        }

        // Светляк: сияющие эфирные крылья во второй форме (HP <= 40%) ПОД шаром
        if (this.id === 'wisp' && this.hp <= this.maxHp * 0.40 && !this.isUIPreview) {
            this.drawWispEtherealWings(ctx);
        }

        // Берсерк: эффекты во второй фазе Доспеха Берсерка ПОД шаром
        if (this.id === 'berserk' && (this.berserkPhase2Active || this.hp <= 40)) {
            this.drawBerserkBloodTrail(ctx);
            this.drawBerserkEyeStreaks(ctx);
            this.drawBerserkSlashTrail(ctx);
        }

        // 2. ОТРИСОВКА САМОГО ШАРА (для Шипа без клипа, чтобы стальные шипы выступали наружу)
        ctx.save();
        if (this.id !== 'spike') {
            ctx.beginPath();
            ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
            ctx.clip();
        }

        ctx.rotate(this.facingAngle);
        this.drawBallBody(ctx);
        ctx.restore();

        // 3. 3D-ОСТЕКЛЕНИЕ И БЛИК ОБЪЕМА
        const glareRadius = (this.id === 'spike') ? this.radius * 0.82 : this.radius;
        ctx.beginPath();
        ctx.arc(0, 0, glareRadius - 0.5, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.45)';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        const glareGrad = ctx.createRadialGradient(-glareRadius * 0.35, -glareRadius * 0.35, 1, -glareRadius * 0.25, -glareRadius * 0.25, glareRadius * 0.75);
        glareGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
        glareGrad.addColorStop(0.35, 'rgba(255, 255, 255, 0.12)');
        glareGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = glareGrad;
        ctx.beginPath();
        ctx.arc(0, 0, glareRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(0, 0, glareRadius - 0.75, 0, Math.PI * 2);
        ctx.strokeStyle = this.getBorderColor();
        ctx.lineWidth = (this.rarity === 'TRANSCENDENT') ? 2.5 : 1.5;
        if (this.rarity === 'TRANSCENDENT') {
            ctx.shadowColor = '#ff0033';
            ctx.shadowBlur = 6;
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Трансцендентный блеск только в интерфейсе/превью (в игре на арене — строгая чистая ярко-красная кайма)
        if (this.rarity === 'TRANSCENDENT' && this.isUIPreview) {
            this.drawTranscendentUIGlints(ctx);
        }

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

        // З) Орбитальные шестерни Часовщика (настоящие зубчатые шестеренки)
        if (this.id === 'clockwork' && this.gearCharges > 0) {
            this.drawClockworkGears(ctx);
        }

        // З-2) Полупрозрачные часы с бегущей стрелкой (ускорение / замедление Часовщика)
        if (this.id === 'clockwork') {
            this.drawClockworkTimeDial(ctx);
        }

        // Мясник: багровая хаотичная аура вокруг шара
        if (this.id === 'saw' && this.sawAuraActive && !this.isUIPreview) {
            this.drawSawRedAura(ctx);
        }

        // Огненный: полыхающая огненная аура и фаерболы
        // Вампир: хищные клыки (строго во время боя при активности, никогда в лобби/UI)
        if (this.id === 'vampire' && this.vampireFangsActive && !this.isUIPreview) {
            this.drawVampireFangs(ctx);
        }

        if (this.id === 'blaze' && !this.isUIPreview) {
            this.drawBlazeFireAura(ctx);
            if (this.blazeFireballCharges > 0) {
                this.drawBlazeOrbitingFireballs(ctx);
            }
        }

        // И) Электронные орбиты Атома (изотопы)
        if (this.id === 'nuke') {
            this.drawNukeElectrons(ctx);
        }

        // К) Мерцание светлячков (Светляк)
        

        // Л) Щупальца Бездны вокруг Кракена (строго во время боя, никогда в меню/лобби)
        if (this.id === 'kraken' && this.krakenTentaclesActive && !this.isUIPreview) {
            this.drawKrakenActiveTentacles(ctx);
        }

        // М) Царственная Солнечная Корона Гелиоса (отображается ТОЛЬКО во время действия абилки/луча)
        if (this.id === 'solar' && this.solarBeamActive) {
            this.drawSolarCrownAura(ctx);
        }

        // Л-2) Удушающие щупальца вокруг жертвы
        if (this.krakenVulnerableTimer > 0 || this.krakenConstrictTimer > 0) {
            this.drawConstrictingTentacles(ctx);
        }

        // Алмаз: алмазный щит
        if (this.crystalShieldHp > 0) {
            this.drawCrystalShieldOverlay(ctx);
        }

        // Мороз: ледяная корка
        if (this.frozenTimer > 0) {
            this.drawIceOverlay(ctx);
        }

        // Мираж: маскировка
        if (this.stealthTimer > 0) {
            ctx.globalAlpha = 0.55;
        }

        // М) Спектральная тень Фантома (Phantom Spectral Ghost Clone)
        if (this.id === 'phantom' && (this.phantomEchoReady || this.phantomPendingHit)) {
            this.drawPhantomGhostClone(ctx);
        }

        // Сюрикен: визуальная индикация активной способности «Золотой срез» (только в бою)
        if (this.id === 'ninja' && this.ninjaCharged && !this.isUIPreview) {
            this.drawNinjaGoldenSlashAura(ctx);
        }

        // Метеор: гиперзвуковой конус Маха активен ТОЛЬКО при кометном разгоне и движении
        if (this.id === 'meteor' && this.meteorBlazing && this.vel.mag() > 0.2 && !this.isUIPreview) {
            this.drawMeteorReentryGlow(ctx);
        }

        // Берсерк: Шлем Доспеха Берсерка во 2-й фазе поверх шара
        if (this.id === 'berserk' && (this.berserkPhase2Active || this.hp <= 40)) {
            this.drawBerserkArmorMask(ctx);
        }

        // Берсерк: колоссальный меч Dragon Slayer во 2-й фазе (строго не в лобби/UI)
        if (this.id === 'berserk' && (this.berserkPhase2Active || this.hp <= 40) && !this.isUIPreview) {
            this.drawBerserkSword(ctx);
        }

        ctx.restore();
    }

    // Щупальца вокруг Кракена в состоянии боеготовности
    
        // 18-A. Пылающий кометообразный плазменный хвост Метеора (отрисовывается ПОД шаром)
    drawMeteorCometTail(ctx) {
        const r = this.radius;
        const t = (this.animTime || 0) * 16;
        ctx.save();
        ctx.rotate(this.facingAngle);

        // 1. Мягкая внешняя тепловая корона вокруг метеора
        const heatHalo = ctx.createRadialGradient(0, 0, r * 0.4, 0, 0, r * 1.7);
        heatHalo.addColorStop(0, 'rgba(254, 240, 138, 0.45)');
        heatHalo.addColorStop(0.35, 'rgba(249, 115, 22, 0.35)');
        heatHalo.addColorStop(0.7, 'rgba(220, 38, 38, 0.15)');
        heatHalo.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = heatHalo;
        ctx.beginPath();
        ctx.arc(0, 0, r * 1.7, 0, Math.PI * 2);
        ctx.fill();

        // 2. Мощный струящийся плазменный хвост кометы позади метеора (-X вдоль вектора скорости)
        const flameLen = r * 3.4;
        const flameW = r * 0.95;
        const wave1 = Math.sin(t) * (r * 0.18);
        const wave2 = Math.cos(t * 1.3) * (r * 0.18);

        // Внешний огненно-красный и янтарный факел
        const flameGrad1 = ctx.createLinearGradient(-flameLen, 0, 0, 0);
        flameGrad1.addColorStop(0, 'rgba(220, 38, 38, 0)');
        flameGrad1.addColorStop(0.35, 'rgba(234, 88, 12, 0.55)');
        flameGrad1.addColorStop(0.75, 'rgba(249, 115, 22, 0.85)');
        flameGrad1.addColorStop(1, '#fef08a');

        ctx.fillStyle = flameGrad1;
        ctx.beginPath();
        ctx.moveTo(-r * 0.3, -flameW);
        ctx.quadraticCurveTo(-flameLen * 0.4, -flameW * 1.2 + wave1, -flameLen, wave2);
        ctx.quadraticCurveTo(-flameLen * 0.4, flameW * 1.2 - wave1, -r * 0.3, flameW);
        ctx.closePath();
        ctx.fill();

        // 3. Средний золотисто-желтый реактивный язык плазмы
        const midLen = r * 2.2;
        const midW = r * 0.65;
        const flameGrad2 = ctx.createLinearGradient(-midLen, 0, 0, 0);
        flameGrad2.addColorStop(0, 'rgba(249, 115, 22, 0)');
        flameGrad2.addColorStop(0.4, 'rgba(251, 191, 36, 0.8)');
        flameGrad2.addColorStop(1, '#ffffff');

        ctx.fillStyle = flameGrad2;
        ctx.beginPath();
        ctx.moveTo(-r * 0.2, -midW);
        ctx.quadraticCurveTo(-midLen * 0.5, -midW * 1.1 - wave2, -midLen, wave1 * 0.6);
        ctx.quadraticCurveTo(-midLen * 0.5, midW * 1.1 + wave2, -r * 0.2, midW);
        ctx.closePath();
        ctx.fill();

        // 4. Внутренний ослепительный бело-желтый сердечник реактивного потока
        const coreLen = r * 1.4;
        const coreW = r * 0.42;
        const coreGrad = ctx.createLinearGradient(-coreLen, 0, 0, 0);
        coreGrad.addColorStop(0, 'rgba(254, 240, 138, 0)');
        coreGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.9)');
        coreGrad.addColorStop(1, '#ffffff');

        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.moveTo(0, -coreW);
        ctx.quadraticCurveTo(-coreLen * 0.5, -coreW * 0.7, -coreLen, 0);
        ctx.quadraticCurveTo(-coreLen * 0.5, coreW * 0.7, 0, coreW);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }

    // 18-B. Мягкое ослепительное раскаленное свечение на набегающей кромке метеора (ПОВЕРХ шара)
    drawMeteorReentryGlow(ctx) {
        const r = this.radius;
        ctx.save();
        ctx.rotate(this.facingAngle);

        const reGrad = ctx.createRadialGradient(r * 0.65, 0, 1, r * 0.55, 0, r * 0.7);
        reGrad.addColorStop(0, 'rgba(255, 255, 255, 0.65)');
        reGrad.addColorStop(0.35, 'rgba(254, 240, 138, 0.50)');
        reGrad.addColorStop(0.7, 'rgba(249, 115, 22, 0.25)');
        reGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = reGrad;
        ctx.beginPath();
        ctx.arc(0, 0, r, -Math.PI * 0.45, Math.PI * 0.45);
        ctx.fill();

        ctx.restore();
    }

    drawKrakenActiveTentacles(ctx) {
        const r = this.radius;
        ctx.save();

        // Полная синхронизация с осью вращения шара Кракена
        ctx.rotate(this.facingAngle);

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

    drawConstrictingTentacles(ctx) {
        const r = this.radius;
        ctx.save();
        ctx.strokeStyle = '#c084fc';
        ctx.lineWidth = 3.5;
        ctx.lineCap = 'round';
        const time = this.animTime * 5.0;
        for (let i = 0; i < 5; i++) {
            const a = (i / 5) * Math.PI * 2 + Math.sin(time + i) * 0.3;
            ctx.beginPath();
            const startX = Math.cos(a) * (r * 1.25);
            const startY = Math.sin(a) * (r * 1.25);
            const cpX = Math.cos(a + 0.8) * (r * 0.7);
            const cpY = Math.sin(a + 0.8) * (r * 0.7);
            const endX = Math.cos(a + 1.2) * (r * 0.3);
            const endY = Math.sin(a + 1.2) * (r * 0.3);
            ctx.moveTo(startX, startY);
            ctx.quadraticCurveTo(cpX, cpY, endX, endY);
            ctx.stroke();
        }
        // Фиолетовая аура удушения
        ctx.fillStyle = 'rgba(88, 28, 135, 0.3)';
        ctx.beginPath();
        ctx.arc(0, 0, r + 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    // Призматический щит Алмаза
    drawCrystalShieldOverlay(ctx) {
        const r = this.radius + 4;
        ctx.save();
        ctx.strokeStyle = '#7dd3fc';
        ctx.lineWidth = 2.0;
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
            const a = (i / 8) * Math.PI * 2 + this.animTime * 1.5;
            const x = Math.cos(a) * r;
            const y = Math.sin(a) * r;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = 'rgba(125, 211, 252, 0.18)';
        ctx.fill();
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

    // Трясущаяся аура скорости Неон-Кибера (мелькающие полупрозрачные призрачные копии)
    drawCyberSpeedAura(ctx) {
        if (this.isUIPreview) return;
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

    // Настоящие механические зубчатые шестерни Часовщика (вращаются вокруг шара и своей оси)
    drawClockworkGears(ctx) {
        ctx.save();
        const gears = this.gearCharges;
        for (let g = 0; g < gears; g++) {
            const orbitAngle = (g / gears) * Math.PI * 2 + this.animTime * 3.2;
            const dist = this.radius + 11;
            const gx = Math.cos(orbitAngle) * dist;
            const gy = Math.sin(orbitAngle) * dist;

            ctx.save();
            ctx.translate(gx, gy);
            ctx.rotate(this.animTime * 7.5 + g * Math.PI);

            const gearR = 7.5;
            const numTeeth = 6;

            // Зубья шестерни
            ctx.fillStyle = '#f59e0b';
            ctx.strokeStyle = '#fef08a';
            ctx.lineWidth = 1.0;
            for (let t = 0; t < numTeeth; t++) {
                const ta = (t / numTeeth) * Math.PI * 2;
                ctx.save();
                ctx.rotate(ta);
                ctx.fillRect(-2, -gearR - 2.8, 4, 3.6);
                ctx.strokeRect(-2, -gearR - 2.8, 4, 3.6);
                ctx.restore();
            }

            // Корпус шестерни (золотой металлический диск)
            const gGrad = ctx.createRadialGradient(0, 0, 1, 0, 0, gearR);
            gGrad.addColorStop(0, '#fef08a');
            gGrad.addColorStop(0.5, '#f59e0b');
            gGrad.addColorStop(1, '#92400e');
            ctx.fillStyle = gGrad;
            ctx.beginPath();
            ctx.arc(0, 0, gearR, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#fde047';
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Центральное сквозное отверстие
            ctx.fillStyle = '#1c0a02';
            ctx.beginPath();
            ctx.arc(0, 0, 2.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }
        ctx.restore();
    }

    // Полупрозрачный циферблат часов с бегущей стрелкой (ускорение +50% / замедление)
    // Багровая хаотичная аура Мясника (каждые 5 сек перед ударом)
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

    // Полыхающая огненная аура Огненного
    drawBlazeFireAura(ctx) {
        if (this.isUIPreview) return;
        ctx.save();
        const r = this.radius;

        // Мягкое радиальное тепловое свечение
        const heatG = ctx.createRadialGradient(0, 0, r * 0.7, 0, 0, r + 22);
        heatG.addColorStop(0, 'rgba(251, 146, 60, 0.38)');
        heatG.addColorStop(0.5, 'rgba(234, 88, 12, 0.18)');
        heatG.addColorStop(1, 'rgba(154, 52, 18, 0)');
        ctx.fillStyle = heatG;
        ctx.beginPath();
        ctx.arc(0, 0, r + 22, 0, Math.PI * 2);
        ctx.fill();

        // Полыхающие динамические языки пламени
        const flameCount = 12;
        for (let f = 0; f < flameCount; f++) {
            const angle = (f / flameCount) * Math.PI * 2 + this.animTime * 1.8;
            const flameHeight = 7 + Math.sin(this.animTime * 11 + f * 2.2) * 5 + Math.cos(this.animTime * 7 + f) * 3;
            const tipR = r + flameHeight;

            const cosA = Math.cos(angle);
            const sinA = Math.sin(angle);
            const perpX = -sinA * 3.5;
            const perpY = cosA * 3.5;

            ctx.fillStyle = (f % 2 === 0) ? 'rgba(254, 240, 138, 0.45)' : 'rgba(249, 115, 22, 0.40)';
            ctx.beginPath();
            ctx.moveTo(cosA * (r - 2) - perpX, sinA * (r - 2) - perpY);
            ctx.quadraticCurveTo(cosA * (r + flameHeight * 0.5) + perpX * 0.5,
                                 sinA * (r + flameHeight * 0.5) + perpY * 0.5,
                                 cosA * tipR, sinA * tipR);
            ctx.quadraticCurveTo(cosA * (r + flameHeight * 0.5) - perpX * 0.5,
                                 sinA * (r + flameHeight * 0.5) - perpY * 0.5,
                                 cosA * (r - 2) + perpX, sinA * (r - 2) + perpY);
            ctx.closePath();
            ctx.fill();
        }

        ctx.restore();
    }

    // Накопленные орбитальные фаерболы Огненного (до 3 штук)
    drawBlazeOrbitingFireballs(ctx) {
        if (this.isUIPreview) return;
        ctx.save();
        const charges = Math.min(3, this.blazeFireballCharges || 0);
        const orbitAngle = this.blazeOrbitAngle || 0;
        const dist = this.radius + 14;

        for (let i = 0; i < charges; i++) {
            const angle = orbitAngle + (i * Math.PI * 2 / 3);
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

    // Вампирские клыки: пара хищных клыков, следящих за противником
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

    drawClockworkTimeDial(ctx) {
        if (this.isUIPreview) return;
        const cycle = (this.clockworkCycleTimer || 0) % 20.0;
        const isFast = cycle >= 5.0 && cycle < 10.0;
        const isSlow = cycle >= 15.0 && cycle < 20.0;
        if (!isFast && !isSlow) return; // в обычных фазах циферблат скрыт!

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
        this.drawWispEtherealWings(ctx);
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

    drawVoidOverlay(ctx) {
        ctx.save();
        const r = this.radius;

        // 1. Темный разрыв бездны под кракеном (Abyss Rift Pool)
        const riftGrad = ctx.createRadialGradient(0, 0, r * 0.2, 0, 0, r * 2.6);
        riftGrad.addColorStop(0, 'rgba(10, 2, 22, 0.85)');
        riftGrad.addColorStop(0.5, 'rgba(88, 28, 135, 0.5)');
        riftGrad.addColorStop(0.85, 'rgba(168, 85, 247, 0.25)');
        riftGrad.addColorStop(1, 'rgba(168, 85, 247, 0)');
        ctx.fillStyle = riftGrad;
        ctx.beginPath();
        ctx.arc(0, 0, r * 2.6, 0, Math.PI * 2);
        ctx.fill();

        // 2. Вращающиеся щупальца бездны
        ctx.strokeStyle = '#a855f7';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2 + this.animTime * 2.5;
            const rBase = r * 0.9;
            const rMid = r * 1.6 + Math.sin(this.animTime * 5 + i) * 5;
            const rTip = r * 2.3 + Math.cos(this.animTime * 6 + i) * 6;
            ctx.beginPath();
            ctx.moveTo(Math.cos(a) * rBase, Math.sin(a) * rBase);
            ctx.quadraticCurveTo(
                Math.cos(a + 0.4) * rMid, Math.sin(a + 0.4) * rMid,
                Math.cos(a + 0.7) * rTip, Math.sin(a + 0.7) * rTip
            );
            ctx.stroke();
        }
        ctx.restore();
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
            case 'dummy': this.drawTrainingDummy(ctx); break;
            default: this.drawDefault(ctx);
        }
    }


    // 1. Шип (Spike) - Тяжелый вольфрамовый таран со стальными радиальными шипами (ПОЛНЫЙ РЕМОДЕЛИРОВАНИЕ)
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

    // 3. Неон-Кибер (Cyber) - Стилизованный высокотехнологичный кибер-реактор
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

    // 4. Мясник (Saw) - Дисковая пила с острыми твердосплавными зубьями (РЕМОДЕЛИРОВАНИЕ)
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

    // 5. Огненный (Blaze) - Раскаленный магматический шар с лавовыми трещинами (СТИЛИЗОВАННЫЙ 2.5D АРТ)
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

    // 6. Мороз (Frosty) - Ледяной крио-монолит с кристаллами снежинки
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

    // 7. Вампир (Vampire) - Темный обсидиановый шар с клыкастым кровавым глазом дракулы (РЕМОДЕЛИРОВАНИЕ)
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

    // 8. Токсик (Toxic) - Колба с мутагенной биокислотой и знаком опасности
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

    // 9. Магнит (Magnet) - Двуполярный магнит со силовыми дугами
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

    // 10. Сюрикен (Ninja) - Прецизионный дамасский ниндзя-сюрикен
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

    // Боевая аура активной способности «Золотой срез» (только в бою, не в лобби)
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

    // 11. Киборг (Cyborg) - Титановый черепной каркас с красным окуляром
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

    // 12. Скарабей (Sand) - Золотой артефакт пустыни с янтарным кристаллом
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

    // 13. Светляк (Wisp) - Эфирная плазменная сфера с аурой мерцания
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

    // 14. Титан (Titan) - Тяжелая многослойная бронеплита со стальными болтами
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

    // 15. Подрывник (Boomer) - Тяжелая саперная мина / Ordnance Demolition Ball
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

    // 16. Мираж (Mirage) - Квантовый проектор с хроматической призмой (ПОЛНЫЙ РЕМОДЕЛИРОВАНИЕ)
    drawMirage(ctx) {
        const r = this.radius;

        // Глубокий призматический градиент
        const g = ctx.createRadialGradient(-r * 0.2, -r * 0.2, 2, 0, 0, r);
        g.addColorStop(0, '#cffafe');
        g.addColorStop(0.35, '#06b6d4');
        g.addColorStop(0.7, '#4338ca');
        g.addColorStop(1, '#0f172a');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fill();

        // Хроматическое внешнее кольцо
        ctx.strokeStyle = '#22d3ee';
        ctx.lineWidth = 2.0;
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.85, 0, Math.PI * 2);
        ctx.stroke();

        // Внутреннее голографическое прицельное кольцо с засечками
        ctx.strokeStyle = '#a855f7';
        ctx.lineWidth = 1.5;
        for (let i = 0; i < 4; i++) {
            const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.6, a - 0.25, a + 0.25);
            ctx.stroke();
        }

        // Тонкие оптические сканирующие полосы
        ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
        for (let y = -r * 0.5; y <= r * 0.5; y += 6) {
            ctx.fillRect(-r * 0.5, y, r * 1.0, 1.0);
        }

        // Центральный сияющий алмазный призматический фокус
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.moveTo(0, -r * 0.22);
        ctx.lineTo(r * 0.22, 0);
        ctx.lineTo(0, r * 0.22);
        ctx.lineTo(-r * 0.22, 0);
        ctx.closePath();
        ctx.fill();
    }

    // 17. Протон (Laser) - Фотонный эмиттер со светящейся линзой на передней кромке
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

    // 18. Метеор (Meteor) - Космический болид с раскаленными кратерами (ЧИСТЫЙ ВЕКТОР БЕЗ РАСТРА)
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

    // 19. Тайфун (Storm) - Колоссальный атмосферный циклон с вращающимися ветряными рукавами (СТИЛИЗОВАННЫЙ 2.5D АРТ)
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

    // 20. Алмаз (Crystal) - Ограненный алмаз со сверкающими гранями
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

    // 21. Тесла (Tesla) - Высоковольтный трансформатор с медной обмоткой
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

    // 22. Фантом (Phantom) - Легендарный астральный спектр пустоты
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

    // 23. Дракон (Dragon) - Чешуйчатое яйцо дракона с золотым глазом
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

    // 24. Гелиос (Solar) - Царственная звезда бога Солнца
    drawSolar(ctx) {
        const r = this.radius;

        // Высококачественный спрайт сферы Гелиоса (сгенерирован ИИ)
        const img = BALL_SPRITES['solar'];
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

    // Царственная Солнечная Корона Гелиоса (постоянная парящая аура над шаром)
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

    // 25. Кракен (Kraken) - Глубоководный левиафан с щупальцами и глазом бездны
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

    // 26. Сингулярность (Vortex) - Мифическая галактическая сингулярность со спиралями и аккрецией
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

    // 27. Атом (Nuke) - Армейская ядерная боеголовка с трилистником радиации
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

    // 28. Зевс (Zeus) - Божественный мрамор с золотыми молниями
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

    // 29. Берсерк (Berserk) - Черный Мечник Гатс (TRANSCENDENT)
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

    // Шлем Доспеха Берсерка (Beast of Darkness Mask) во 2-й фазе (HP <= 40)
    // Строго статичен (без поворота по facingAngle, как у крыльев Светляка),
    // симметричен, направлен строго вперед, глаза подняты выше, пасть прямая
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

    // Тонкий алый след движения во 2-й фазе (HP <= 20)
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

    // Алые световые полосы из глаз (Red Eye Streaks) - эффект камеры при скоростном движении
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

    // Качественный сияющий шлейф рассечения меча (Dragon Slayer Blade Arc Sweep)
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

    // Отрисовка колоссального меча Убийца Драконов (Dragon Slayer) во 2-й фазе
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

    // Сверкающие алмазные блики Трансцендентной редкости (СТРОГО в UI/инвентаре/превью, НЕ в бою на арене!)
    drawTranscendentUIGlints(ctx) {
        const r = this.radius;
        const t = (this.animTime || 0) * 3.0;
        ctx.save();

        // 4 алмазных мерцающих блика вдоль красной каймы
        ctx.fillStyle = '#ffffff';
        for (let i = 0; i < 4; i++) {
            const sparkAng = t * 0.6 + (i * Math.PI / 2);
            const sx = Math.cos(sparkAng) * (r - 0.75);
            const sy = Math.sin(sparkAng) * (r - 0.75);

            ctx.save();
            ctx.translate(sx, sy);
            ctx.rotate(sparkAng + Math.PI / 4);
            ctx.shadowColor = '#ff0033';
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.moveTo(-4, 0); ctx.lineTo(0, -1.5); ctx.lineTo(4, 0); ctx.lineTo(0, 1.5);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(-1.5, 0); ctx.lineTo(0, -4); ctx.lineTo(1.5, 0); ctx.lineTo(0, 4);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }

        ctx.restore();
    }

    drawTrainingDummy(ctx) {
        const r = this.radius;
        const g = ctx.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.1, 0, 0, r);
        g.addColorStop(0, '#475569');
        g.addColorStop(0.5, '#1e293b');
        g.addColorStop(1, '#0f172a');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

        // Красное внешнее кольцо мишени
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.arc(0, 0, r * 0.72, 0, Math.PI * 2); ctx.stroke();

        // Белое кольцо мишени
        ctx.strokeStyle = '#f8fafc';
        ctx.lineWidth = 1.8;
        ctx.beginPath(); ctx.arc(0, 0, r * 0.48, 0, Math.PI * 2); ctx.stroke();

        // Красный центр (bullseye)
        ctx.fillStyle = '#ef4444';
        ctx.beginPath(); ctx.arc(0, 0, r * 0.25, 0, Math.PI * 2); ctx.fill();

        // Перекрестие мишени
        ctx.strokeStyle = '#fca5a5';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(-r * 0.85, 0); ctx.lineTo(r * 0.85, 0);
        ctx.moveTo(0, -r * 0.85); ctx.lineTo(0, r * 0.85);
        ctx.stroke();

        // Заклепки манекена
        ctx.fillStyle = '#94a3b8';
        for (let i = 0; i < 4; i++) {
            const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
            ctx.beginPath();
            ctx.arc(Math.cos(a) * r * 0.86, Math.sin(a) * r * 0.86, 1.8, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    drawDefault(ctx) {
        const r = this.radius;
        const g = ctx.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.1, 0, 0, r);
        g.addColorStop(0, '#f8fafc'); g.addColorStop(0.5, '#64748b'); g.addColorStop(1, '#0f172a');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
    }
}

// =============================================================================
// ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ ДЛЯ ОТРИСОВКИ ШАРА В ИНТЕРФЕЙСЕ (КАРТОЧКИ, КЕЙСЫ)
// =============================================================================

function renderBallPreview(arg1, arg2, arg3) {
    let canvas, template, size;

    // Универсальная поддержка обоих порядков аргументов (canvas, id/template, size) и (template, canvas, size)
    if (arg1 && (arg1.getContext || typeof arg1.getContext === 'function' || arg1.tagName === 'CANVAS')) {
        canvas = arg1;
        template = arg2;
        size = arg3;
    } else if (arg2 && (arg2.getContext || typeof arg2.getContext === 'function' || arg2.tagName === 'CANVAS')) {
        template = arg1;
        canvas = arg2;
        size = arg3;
    } else {
        return;
    }

    if (!canvas || !canvas.getContext) return;

    // Если передан ID строки, находим шаблон шара в каталоге
    if (typeof template === 'string') {
        template = BALL_CATALOG.find(b => b.id === template) || BALL_CATALOG[0];
    }
    if (!template) template = BALL_CATALOG[0];

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let cw = canvas.width || 80;
    let ch = canvas.height || 80;
    let renderRadius;

    if (typeof size === 'number') {
        if (size >= 40) {
            canvas.width = size;
            canvas.height = size;
            cw = size;
            ch = size;
            renderRadius = (size / 2) - 4;
        } else {
            renderRadius = size;
            if (cw < renderRadius * 2 + 4) {
                canvas.width = (renderRadius + 4) * 2;
                canvas.height = (renderRadius + 4) * 2;
                cw = canvas.width;
                ch = canvas.height;
            }
        }
    } else {
        renderRadius = Math.min(cw, ch) / 2 - 4;
    }

    ctx.clearRect(0, 0, cw, ch);

    const previewBall = new BattleBall(template, true);
    previewBall.isUIPreview = true;
    if (previewBall.id === 'spike') {
        previewBall.radius = renderRadius * 0.75;
    } else {
        previewBall.radius = renderRadius;
    }
    previewBall.pos.set(cw / 2, ch / 2);
    previewBall.facingAngle = 0; // Строго вертикальное перпендикулярное положение в UI
    previewBall.krakenTentaclesActive = false; // Чистый шар без боевых щупалец в лобби/карточке

    previewBall.draw(ctx);
}
