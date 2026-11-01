// =============================================================================
// КОНФИГУРАЦИЯ 6 УНИКАЛЬНЫХ КЕЙСОВ С ДЕТАЛЬНЫМ СОДЕРЖИМЫМ И ШАНСАМИ
// =============================================================================

const CASE_CONFIGS = {
    iron: {
        id: 'iron',
        name: 'Железный Кейс',
        tier: 'ОБЫЧНЫЙ',
        img: 'assets/icons/case_iron.svg',
        cost: 80,
        currency: 'coins',
        oddsText: '70% Common  •  28% Rare  •  2% Epic',
        pool: [
            ...BALL_CATALOG.filter(b => b.rarity === 'COMMON'),
            ...BALL_CATALOG.filter(b => b.rarity === 'COMMON'),
            ...BALL_CATALOG.filter(b => b.rarity === 'RARE'),
            BALL_CATALOG.find(b => b.id === 'titan')
        ]
    },
    combat: {
        id: 'combat',
        name: 'Боевой Кейс',
        tier: 'РЕДКИЙ',
        img: 'assets/icons/case_combat.svg',
        cost: 160,
        currency: 'coins',
        oddsText: '55% Rare  •  35% Epic  •  10% Legendary',
        pool: [
            ...BALL_CATALOG.filter(b => b.rarity === 'RARE'),
            ...BALL_CATALOG.filter(b => b.rarity === 'EPIC'),
            BALL_CATALOG.find(b => b.id === 'tesla'),
            BALL_CATALOG.find(b => b.id === 'dragon')
        ]
    },
    elite: {
        id: 'elite',
        name: 'Элитный Кейс',
        tier: 'ЭПИЧЕСКИЙ',
        img: 'assets/icons/case_elite.svg',
        cost: 320,
        currency: 'coins',
        oddsText: '50% Epic  •  40% Legendary  •  10% Mythic',
        pool: [
            ...BALL_CATALOG.filter(b => b.rarity === 'EPIC'),
            ...BALL_CATALOG.filter(b => b.rarity === 'LEGENDARY'),
            ...BALL_CATALOG.filter(b => b.rarity === 'MYTHIC')
        ]
    },
    trophy: {
        id: 'trophy',
        name: 'Трофейный Кейс',
        tier: 'РЕКЛАМА',
        img: 'assets/icons/case_trophy.svg',
        cost: 0,
        currency: 'ad',
        oddsText: '60% Rare  •  35% Epic  •  5% Legendary',
        pool: [
            ...BALL_CATALOG.filter(b => b.rarity === 'RARE'),
            ...BALL_CATALOG.filter(b => b.rarity === 'EPIC'),
            BALL_CATALOG.find(b => b.id === 'dragon'),
            BALL_CATALOG.find(b => b.id === 'tesla')
        ]
    },
    royal: {
        id: 'royal',
        name: 'Королевский Сундук',
        tier: 'ЛЕГЕНДАРНЫЙ',
        img: 'assets/icons/case_royal.svg',
        cost: 30,
        currency: 'gems',
        oddsText: '45% Epic  •  45% Legendary  •  10% Mythic',
        pool: [
            ...BALL_CATALOG.filter(b => b.rarity === 'EPIC'),
            ...BALL_CATALOG.filter(b => b.rarity === 'LEGENDARY'),
            ...BALL_CATALOG.filter(b => b.rarity === 'LEGENDARY'),
            ...BALL_CATALOG.filter(b => b.rarity === 'MYTHIC')
        ]
    },
    mythic: {
        id: 'mythic',
        name: 'Ящик Богов',
        tier: 'МИФИЧЕСКИЙ',
        img: 'assets/icons/case_mythic.svg',
        cost: 60,
        currency: 'gems',
        oddsText: '50% Legendary  •  48% Mythic  •  2% Transcendent',
        pool: [
            ...BALL_CATALOG.filter(b => b.rarity === 'LEGENDARY'),
            ...BALL_CATALOG.filter(b => b.rarity === 'MYTHIC'),
            ...BALL_CATALOG.filter(b => b.rarity === 'TRANSCENDENT')
        ]
    },
    void_black: {
        id: 'void_black',
        name: 'Черный Кейс Бездны',
        tier: 'МИФИЧЕСКИЙ',
        img: 'assets/icons/case_void_black.svg',
        cost: 90,
        currency: 'gems',
        costGems: 90,
        costYan: 149,
        isDonate: true,
        oddsText: '50% Legendary  •  45% Mythic  •  5% Transcendent',
        pool: [
            BALL_CATALOG.find(b => b.id === 'kraken') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'phantom') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'dragon') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'meteor') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'nuke') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'zeus') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'berserk') || BALL_CATALOG[0]
        ]
    },
    cyber: {
        id: 'cyber',
        name: 'Неоновый Кибер-Бокс',
        tier: 'ТЕХНО',
        img: 'assets/icons/case_cyber.svg',
        cost: 60,
        currency: 'gems',
        costGems: 60,
        costYan: 99,
        bonusCoins: 500,
        isDonate: true,
        oddsText: '100% High-Tech  •  +500 Монет',
        pool: [
            BALL_CATALOG.find(b => b.id === 'cyber') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'laser') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'tesla') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'cyborg') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'clockwork') || BALL_CATALOG[0]
        ]
    },
    dragon: {
        id: 'dragon',
        name: 'Сокровищница Дракона',
        tier: 'СТИХИИ',
        img: 'assets/icons/case_dragon.svg',
        cost: 120,
        currency: 'gems',
        costGems: 120,
        costYan: 199,
        bonusCoins: 1000,
        bonusGems: 50,
        isDonate: true,
        oddsText: 'Огонь и Молния  •  +1,000 Монет  •  50 💎 Кешбэк',
        pool: [
            BALL_CATALOG.find(b => b.id === 'dragon') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'meteor') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'blaze') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'zeus') || BALL_CATALOG[0]
        ]
    },
    jackpot: {
        id: 'jackpot',
        name: 'Золотой Джекпот',
        tier: 'ДЖЕКПОТ',
        img: 'assets/icons/case_jackpot.svg',
        cost: 30,
        currency: 'gems',
        costGems: 30,
        costYan: 49,
        isDonate: true,
        oddsText: 'Шанс на 10,000 🪙, 1,000 💎 или топ-шар',
        pool: [
            BALL_CATALOG.find(b => b.id === 'nuke') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'zeus') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'kraken') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'phantom') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'dragon') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'tesla') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'ninja') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'titan') || BALL_CATALOG[0],
            BALL_CATALOG.find(b => b.id === 'vortex') || BALL_CATALOG[0]
        ]
    }
};

// =============================================================================
// КОНФИГУРАЦИЯ 3 КАТЕГОРИЙ СФЕР (ТАЙНЫЕ, ТИТАНОВЫЕ, БЕЗДНА)
// =============================================================================

const SPHERE_TIERS = {
    mystery: {
        id: 'mystery',
        name: 'Тайные Сферы',
        tag: 'ОБЫЧНЫЕ',
        cost: 120,
        currency: 'coins',
        img: 'assets/icons/orb_mystery.svg',
        pool: [
            ...BALL_CATALOG.filter(b => b.rarity === 'COMMON'),
            ...BALL_CATALOG.filter(b => b.rarity === 'RARE')
        ]
    },
    titan: {
        id: 'titan',
        name: 'Титановые Сферы',
        tag: 'ЭЛИТНЫЕ',
        cost: 280,
        currency: 'coins',
        img: 'assets/icons/orb_titan.svg',
        pool: [
            ...BALL_CATALOG.filter(b => b.rarity === 'RARE'),
            ...BALL_CATALOG.filter(b => b.rarity === 'EPIC'),
            BALL_CATALOG.find(b => b.id === 'dragon')
        ]
    },
    void: {
        id: 'void',
        name: 'Сферы Бездны',
        tag: 'МИФИЧЕСКИЕ',
        cost: 35,
        currency: 'gems',
        img: 'assets/icons/orb_void.svg',
        pool: [
            ...BALL_CATALOG.filter(b => b.rarity === 'EPIC'),
            ...BALL_CATALOG.filter(b => b.rarity === 'LEGENDARY'),
            ...BALL_CATALOG.filter(b => b.rarity === 'MYTHIC')
        ]
    }
};

// =============================================================================
// ГЛАВНЫЙ КЛАСС ИГРЫ
// =============================================================================

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.physics = new PhysicsWorld();
        this.particles = new ParticleSystem();

        // Границы боевой квадратной арены
        this.arena = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            size: 0
        };

        // Экономика (сохранение в LocalStorage)
        this.coins = parseInt(localStorage.getItem('ball_coins')) || 400;
        this.gems = parseInt(localStorage.getItem('ball_gems')) || 60;

        // Коллекция разблокированных шаров
        const savedBalls = localStorage.getItem('unlocked_balls');
        this.unlockedBallIds = savedBalls ? JSON.parse(savedBalls) : ['blaze', 'spike', 'frosty', 'tesla', 'titan'];

        // Состояние матча
        this.playerHearts = 3;
        this.botHearts = 3;
        this.currentRound = 1;
        this.state = 'MENU'; // MENU, CHESTS, ROULETTE, COUNTDOWN, BATTLE, ROUND_OVER, MATCH_OVER

        // 5-секундный таймер
        this.countdownTime = 5.0;

        // Колоды
        this.playerDeck = [];
        this.botDeck = [];

        this.playerBall = null;
        this.botBall = null;

        this.isAiming = false;

        // Состояние интерактива "1 из 3 сфер"
        this.spheresActive = false;
        this.spheresData = [];
        this.activeSphereWonBall = null;

        // Состояние осмотра и рулетки кейса
        this.currentInspectedCase = null;
        this.isCaseSpinning = false;

        // Боевая колода игрока (5 шаров на матч)
        const savedDeck = localStorage.getItem('player_deck');
        let parsedDeck = null;
        try {
            if (savedDeck) parsedDeck = JSON.parse(savedDeck);
        } catch (e) {
            parsedDeck = null;
        }

        const defaultDeck = ['blaze', 'spike', 'frosty', 'tesla', 'titan'];
        if (!Array.isArray(parsedDeck) || parsedDeck.length === 0) {
            this.playerDeckIds = [...defaultDeck];
        } else {
            this.playerDeckIds = [...parsedDeck];
        }

        this.ensureUniqueDeck();

        this.matchPlayerPool = [];
        this.currentInvFilter = 'ALL';
        this.selectedDetailBallId = null;
        this.activePreMatchSlot = 0;
        this.botMatchDeck = [];

        this.initDOM();
    }

    initDOM() {
        // Экраны
        this.screenMenu = document.getElementById('screen-menu');
        this.screenBattle = document.getElementById('screen-battle');
        this.screenChests = document.getElementById('screen-chests');

        // Валюты
        this.menuCoins = document.getElementById('menu-coins');
        this.menuGems = document.getElementById('menu-gems');
        this.chestsCoins = document.getElementById('chests-coins');
        this.chestsGems = document.getElementById('chests-gems');
        this.updateCurrenciesUI();

        // Переходы меню
        this.btnPlay = document.getElementById('btn-play');
        this.btnOpenChests = document.getElementById('btn-open-chests');
        this.btnChestsBack = document.getElementById('btn-chests-back');

        // Вкладки гачи
        this.tabBtns = document.querySelectorAll('.tab-btn');
        this.tabContents = document.querySelectorAll('.tab-content');

        // Карточки кейсов
        this.caseTiles = document.querySelectorAll('.case-tile');

        // Единая модалка кейса (Осмотр + Рулетка CS:GO + Результат)
        this.caseFlowModal = document.getElementById('case-flow-modal');
        this.caseInspectView = document.getElementById('case-inspect-view');
        this.caseRouletteView = document.getElementById('case-roulette-view');
        this.caseWinnerView = document.getElementById('case-winner-view');

        // Элементы осмотра кейса
        this.inspectTierTag = document.getElementById('inspect-tier-tag');
        this.inspectCaseName = document.getElementById('inspect-case-name');
        this.inspectCaseImg = document.getElementById('inspect-case-img');
        this.inspectDropsGrid = document.getElementById('inspect-drops-grid');
        this.inspectOddsBar = document.getElementById('inspect-odds-bar');
        this.btnProceedOpenCase = document.getElementById('btn-proceed-open-case');
        this.btnProceedOpenDonateYan = document.getElementById('btn-proceed-open-donate-yan');
        this.inspectBtnText = document.getElementById('inspect-btn-text');
        this.inspectBtnPrice = document.getElementById('inspect-btn-price');
        this.btnCloseInspect = document.getElementById('btn-close-inspect');
        this.btnCancelInspect = document.getElementById('btn-cancel-inspect');

        // Элементы рулетки CS:GO
        this.rouletteCaseName = document.getElementById('roulette-case-name');
        this.csgoRouletteStrip = document.getElementById('csgo-roulette-strip');

        // Элементы победного шара
        this.csgoWinnerCanvas = document.getElementById('csgo-winner-canvas');
        this.csgoWinnerRarity = document.getElementById('csgo-winner-rarity');
        this.csgoWinnerName = document.getElementById('csgo-winner-name');
        this.csgoWinnerDesc = document.getElementById('csgo-winner-desc');
        this.csgoDuplicateTag = document.getElementById('csgo-duplicate-tag');
        this.btnClaimCaseBall = document.getElementById('btn-claim-case-ball');

        // Интерактив 1 из 3 сфер (3 категории + модалка пулла)
        this.currentSphereTier = 'mystery';
        this.sphereTierPills = document.querySelectorAll('.sphere-tier-pill');
        this.spheresTierTitle = document.getElementById('spheres-tier-title');
        this.btnSpheresPlayText = document.getElementById('btn-spheres-play-text');
        this.btnSpheresPlayPrice = document.getElementById('btn-spheres-play-price');
        this.btnSpheresInfo = document.getElementById('btn-spheres-info');
        this.spheresPoolModal = document.getElementById('spheres-pool-modal');
        this.poolModalTitle = document.getElementById('pool-modal-title');
        this.poolModalTierTag = document.getElementById('pool-modal-tier-tag');
        this.spheresPoolGrid = document.getElementById('spheres-pool-grid');
        this.btnCloseSpheresPool = document.getElementById('btn-close-spheres-pool');
        this.btnDoneSpheresPool = document.getElementById('btn-done-spheres-pool');
        this.isShufflingSpheres = false;
        this.sphereTimeouts = [];

        this.btnStartSpheres = document.getElementById('btn-start-spheres');
        this.btnStartSpheresAd = document.getElementById('btn-start-spheres-ad');
        this.spheresButtonsBar = document.getElementById('spheres-buttons-bar');
        this.spheresArena = document.getElementById('spheres-arena');
        this.spheresHint = document.getElementById('spheres-hint');
        this.mysterySpheres = document.querySelectorAll('.mystery-sphere');
        this.spheresOutcomeBanner = document.getElementById('spheres-outcome-banner');
        this.outcomeBallTitle = document.getElementById('outcome-ball-title');
        this.outcomeDuplicateTag = document.getElementById('outcome-duplicate-tag');
        this.btnCollectSphereReward = document.getElementById('btn-collect-sphere-reward');

        // Банк (реклама)
        this.btnAdFreeCoins = document.getElementById('btn-ad-free-coins');
        this.btnAdFreeGems = document.getElementById('btn-ad-free-gems');
        this.btnAdFreeMega = document.getElementById('btn-ad-free-mega');
        this.adSimulationModal = document.getElementById('ad-simulation-modal');
        this.adTimerNum = document.getElementById('ad-timer-num');

        // Сердца раундов
        this.elPlayerHearts = document.querySelectorAll('#player-hearts .heart');
        this.elBotHearts = document.querySelectorAll('#bot-hearts .heart');
        this.elRoundNum = document.getElementById('round-num');

        // Отсчет
        this.elCountdownOverlay = document.getElementById('countdown-overlay');
        this.elCountdownNumber = document.getElementById('countdown-number');

        // Рулетка раунда перед боем
        this.elRouletteModal = document.getElementById('roulette-modal');
        this.rouletteModalLabel = document.getElementById('roulette-modal-label');
        this.elRouletteTrack = document.getElementById('roulette-track');
        this.elSelectedCard = document.getElementById('selected-ball-card');
        this.wonBallCanvas = document.getElementById('won-ball-canvas');
        this.elPreviewName = document.getElementById('preview-name');
        this.elPreviewRarity = document.getElementById('preview-rarity');
        this.elPreviewDesc = document.getElementById('preview-desc');

        // Модалка результатов матча
        this.elGameOverModal = document.getElementById('game-over-modal');
        this.elResultTitle = document.getElementById('result-title');
        this.elResultSubtitle = document.getElementById('result-subtitle');
        this.elRewardAmount = document.getElementById('reward-amount');
        this.elBtnNextMatch = document.getElementById('btn-next-match');
        this.elBtnToMenu = document.getElementById('btn-to-menu');

        // Инвентарь и коллекция
        this.btnCollection = document.getElementById('btn-collection');
        this.collectionCountBadge = document.getElementById('collection-count-badge');
        this.screenInventory = document.getElementById('screen-inventory');
        this.btnInventoryBack = document.getElementById('btn-inventory-back');
        this.inventoryCoins = document.getElementById('inventory-coins');
        this.inventoryGems = document.getElementById('inventory-gems');

        // Элементы магазина (Shop)
        this.screenShop = document.getElementById('screen-shop');
        this.btnOpenShop = document.getElementById('btn-open-shop');
        this.btnShopBack = document.getElementById('btn-shop-back');
        this.shopCoins = document.getElementById('shop-coins');
        this.shopGems = document.getElementById('shop-gems');
        this.shopVipTag = document.getElementById('shop-vip-tag');

        // Состояние доната и покупок
        this.isVip = localStorage.getItem('ball_is_vip') === 'true';
        this.starterPackBought = localStorage.getItem('starter_pack_bought') === 'true';
        this.lastDailyGiftTime = parseInt(localStorage.getItem('last_daily_gift_time')) || 0;
        this.dailyBallId = 'phantom';
        this.currentPendingCheckout = null;
        this.activeDonateWonBall = null;
        this.inventoryRatioText = document.getElementById('inventory-ratio-text');
        this.inventoryProgressFill = document.getElementById('inventory-progress-fill');
        this.inventoryDeckSlots = document.getElementById('inventory-deck-slots');
        this.inventoryFilterBar = document.querySelector('.inventory-filter-bar');
        this.inventoryGrid = document.getElementById('inventory-grid');
        this.invFilterPills = document.querySelectorAll('.inv-filter-pill');



        // Модалка детального просмотра шара (Инспектор)
        this.modalBallDetail = document.getElementById('modal-ball-detail');
        this.btnCloseBallDetail = document.getElementById('btn-close-ball-detail');
        this.detailBallCanvas = document.getElementById('detail-ball-canvas');
        this.detailBallName = document.getElementById('detail-ball-name');
        this.detailRarityPill = document.getElementById('detail-rarity-pill');
        this.detailDeckTag = document.getElementById('detail-deck-tag');
        this.detailHpBar = document.getElementById('detail-hp-bar');
        this.detailHpVal = document.getElementById('detail-hp-val');
        this.detailAtkBar = document.getElementById('detail-atk-bar');
        this.detailAtkVal = document.getElementById('detail-atk-val');
        this.detailSpdBar = document.getElementById('detail-spd-bar');
        this.detailSpdVal = document.getElementById('detail-spd-val');
        this.detailMassBar = document.getElementById('detail-mass-bar');
        this.detailMassVal = document.getElementById('detail-mass-val');
        this.detailAbilityName = document.getElementById('detail-ability-name');
        this.detailAbilityDesc = document.getElementById('detail-ability-desc');
        this.detailUnlockedActions = document.getElementById('detail-unlocked-actions');
        this.detailLockedActions = document.getElementById('detail-locked-actions');
        this.btnEquipSlots = document.querySelectorAll('.btn-equip-slot');

        // Живая интерактивная демонстрация способности (Live Preview)
        this.detailPreviewCanvas = document.getElementById('detail-preview-canvas');
        this.detailPreviewStatus = document.getElementById('detail-preview-status');
        this.btnReplayPreview = document.getElementById('btn-replay-preview');

        if (typeof AbilityPreviewManager !== 'undefined' && this.detailPreviewCanvas) {
            this.abilityPreview = new AbilityPreviewManager(
                this.detailPreviewCanvas,
                this.detailPreviewStatus,
                this.btnReplayPreview
            );
        } else {
            this.abilityPreview = null;
        }
        this.btnGotoChestsFromDetail = document.getElementById('btn-goto-chests-from-detail');

        // Анонс начала раунда
        this.roundIntroBanner = document.getElementById('round-intro-banner');
        this.introRoundNum = document.getElementById('intro-round-num');
        this.introPlayerCanvas = document.getElementById('intro-player-canvas');
        this.introPlayerName = document.getElementById('intro-player-name');
        this.introBotCanvas = document.getElementById('intro-bot-canvas');
        this.introBotName = document.getElementById('intro-bot-name');

        this.updateCollectionBadge();
        
        // Инициализация визуальной песочницы (тестового режима)
        this.btnSandbox = document.getElementById('btn-sandbox');
        this.sandboxModal = document.getElementById('sandbox-modal');
        this.btnCloseSandbox = document.getElementById('btn-close-sandbox');
        this.btnStartSandbox = document.getElementById('btn-start-sandbox');

        this.sandboxSlotPlayer = document.getElementById('sandbox-slot-player');
        this.sandboxSlotBot = document.getElementById('sandbox-slot-bot');
        this.sandboxPlayerCanvas = document.getElementById('sandbox-player-canvas');
        this.sandboxBotCanvas = document.getElementById('sandbox-bot-canvas');
        this.sandboxPlayerName = document.getElementById('sandbox-player-name');
        this.sandboxBotName = document.getElementById('sandbox-bot-name');
        this.sandboxPlayerRarity = document.getElementById('sandbox-player-rarity');
        this.sandboxBotRarity = document.getElementById('sandbox-bot-rarity');
        this.sandboxPlayerStats = document.getElementById('sandbox-player-stats');
        this.sandboxBotStats = document.getElementById('sandbox-bot-stats');

        this.sandboxTabPlayer = document.getElementById('sandbox-tab-player');
        this.sandboxTabBot = document.getElementById('sandbox-tab-bot');
        this.sandboxFilterBar = document.getElementById('sandbox-filter-bar');
        this.sandboxBallsGrid = document.getElementById('sandbox-balls-grid');
        this.sandboxAbilityName = document.getElementById('sandbox-ability-name');
        this.sandboxAbilityDesc = document.getElementById('sandbox-ability-desc');

        this.selectedSandboxPlayerBallId = 'meteor';
        this.selectedSandboxBotBallId = 'vampire';
        this.activeSandboxSlot = 'player';
        this.sandboxRarityFilter = 'ALL';
        this.customDuel = null;

        if (this.btnSandbox) {
            this.btnSandbox.addEventListener('click', () => {
                sounds.init();
                this.openSandboxModal();
            });
        }
        if (this.btnCloseSandbox) {
            this.btnCloseSandbox.addEventListener('click', () => {
                if (this.sandboxModal) this.sandboxModal.classList.add('hidden');
            });
        }
        if (this.btnStartSandbox) {
            this.btnStartSandbox.addEventListener('click', () => {
                const pId = this.selectedSandboxPlayerBallId || 'meteor';
                const bId = this.selectedSandboxBotBallId || 'vampire';
                if (this.sandboxModal) this.sandboxModal.classList.add('hidden');
                this.startCustomMatch(pId, bId);
            });
        }

        if (this.sandboxSlotPlayer) {
            this.sandboxSlotPlayer.addEventListener('click', () => this.setSandboxSlot('player'));
        }
        if (this.sandboxSlotBot) {
            this.sandboxSlotBot.addEventListener('click', () => this.setSandboxSlot('bot'));
        }
        if (this.sandboxTabPlayer) {
            this.sandboxTabPlayer.addEventListener('click', () => this.setSandboxSlot('player'));
        }
        if (this.sandboxTabBot) {
            this.sandboxTabBot.addEventListener('click', () => this.setSandboxSlot('bot'));
        }

        if (this.sandboxFilterBar) {
            const pills = this.sandboxFilterBar.querySelectorAll('.sandbox-filter-pill');
            pills.forEach(pill => {
                pill.addEventListener('click', () => {
                    pills.forEach(p => p.classList.remove('active'));
                    pill.classList.add('active');
                    this.sandboxRarityFilter = pill.getAttribute('data-rarity') || 'ALL';
                    this.renderSandboxGrid();
                    sounds.playLaunch();
                });
            });
        }

        this.initEvents();
    }

    initEvents() {
        this.btnPlay.addEventListener('click', () => {
            sounds.init();
            this.showScreen('battle');
            this.startNewMatch();
        });

        // Открытие инвентаря / коллекции
        if (this.btnCollection) {
            this.btnCollection.addEventListener('click', () => {
                sounds.init();
                this.showScreen('inventory');
            });
        }

        // Выход из инвентаря
        if (this.btnInventoryBack) {
            this.btnInventoryBack.addEventListener('click', () => {
                sounds.playLaunch();
                this.showScreen('menu');
            });
        }

        if (this.btnOpenShop) {
            this.btnOpenShop.addEventListener('click', () => {
                sounds.playLaunch();
                this.showScreen('shop');
            });
        }

        if (this.btnShopBack) {
            this.btnShopBack.addEventListener('click', () => {
                sounds.playLaunch();
                this.showScreen('menu');
            });
        }

        this.initShop();



        // Горизонтальная прокрутка фильтров колесиком мыши
        if (this.inventoryFilterBar) {
            this.inventoryFilterBar.addEventListener('wheel', (e) => {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    this.inventoryFilterBar.scrollLeft += e.deltaY;
                }
            }, { passive: false });
        }

        // Фильтры инвентаря
        this.invFilterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                const rarity = pill.getAttribute('data-rarity');
                this.invFilterPills.forEach(p => p.classList.toggle('active', p === pill));
                this.currentInvFilter = rarity;
                this.renderInventoryGrid();
                sounds.playLaunch();
            });
        });

        // Закрытие модалки деталей шара
        if (this.btnCloseBallDetail) {
            this.btnCloseBallDetail.addEventListener('click', () => {
                this.closeBallDetailModal();
            });
        }
        if (this.modalBallDetail) {
            this.modalBallDetail.addEventListener('click', (e) => {
                if (e.target === this.modalBallDetail) {
                    this.closeBallDetailModal();
                }
            });
        }

        // Кнопки экипировки в слоты
        this.btnEquipSlots.forEach(btn => {
            btn.addEventListener('click', () => {
                const slot = parseInt(btn.getAttribute('data-slot'));
                if (this.selectedDetailBallId) {
                    this.equipBallToDeck(this.selectedDetailBallId, slot);
                    this.closeBallDetailModal();
                }
            });
        });

        // Переход в сундуки из заблокированного шара
        if (this.btnGotoChestsFromDetail) {
            this.btnGotoChestsFromDetail.addEventListener('click', () => {
                this.closeBallDetailModal();
                this.showScreen('chests');
            });
        }

        this.btnOpenChests.addEventListener('click', () => {
            sounds.init();
            this.resetAllGachaState();
            this.showScreen('chests');
        });

        this.btnChestsBack.addEventListener('click', () => {
            this.resetAllGachaState();
            this.showScreen('menu');
        });

        // Вкладки гачи
        this.tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');
                this.tabBtns.forEach(b => b.classList.remove('active'));
                this.tabContents.forEach(c => c.classList.remove('active'));

                btn.classList.add('active');
                const targetContent = document.getElementById(targetTab);
                if (targetContent) targetContent.classList.add('active');

                this.resetAllGachaState();
                sounds.playLaunch();
            });
        });

        // Клик по плитке кейса: ОТКРЫВАЕТ МЕНЮ ОСМОТРА СОДЕРЖИМОГО КЕЙСА!
        this.caseTiles.forEach(tile => {
            tile.addEventListener('click', () => {
                const caseId = tile.getAttribute('data-case');
                this.openCaseInspectModal(caseId);
            });
        });

        // Закрытие при клике по затемненному фону
        this.caseFlowModal.addEventListener('click', (e) => {
            if (e.target === this.caseFlowModal && !this.isCaseSpinning) {
                this.closeCaseFlowModal();
            }
        });

        // Закрытие окна осмотра кейса
        this.btnCloseInspect.addEventListener('click', () => {
            this.closeCaseFlowModal();
        });
        if (this.btnCancelInspect) {
            this.btnCancelInspect.addEventListener('click', () => {
                this.closeCaseFlowModal();
            });
        }

        // Нажатие на кнопку "ОТКРЫТЬ КЕЙС" внутри меню осмотра
        this.btnProceedOpenCase.addEventListener('click', () => {
            this.proceedOpenCurrentCase();
        });

        // Забрать шар из рулетки кейса
        this.btnClaimCaseBall.addEventListener('click', () => {
            this.closeCaseFlowModal();
        });

        // Переключение категорий сфер
        this.sphereTierPills.forEach(pill => {
            pill.addEventListener('click', () => {
                if (this.isShufflingSpheres || this.spheresActive) return;
                const tier = pill.getAttribute('data-tier');
                this.selectSphereTier(tier);
            });
        });

        // Модалка просмотра пулла сфер (?)
        if (this.btnSpheresInfo) {
            this.btnSpheresInfo.addEventListener('click', () => {
                this.openSpheresPoolModal();
            });
        }
        if (this.btnCloseSpheresPool) {
            this.btnCloseSpheresPool.addEventListener('click', () => {
                this.spheresPoolModal.classList.add('hidden');
            });
        }
        if (this.btnDoneSpheresPool) {
            this.btnDoneSpheresPool.addEventListener('click', () => {
                this.spheresPoolModal.classList.add('hidden');
            });
        }
        if (this.spheresPoolModal) {
            this.spheresPoolModal.addEventListener('click', (e) => {
                if (e.target === this.spheresPoolModal) {
                    this.spheresPoolModal.classList.add('hidden');
                }
            });
        }

        // 1 из 3 сфер (запуск за валюту)
        this.btnStartSpheres.addEventListener('click', () => {
            this.handleSpheresPlay();
        });

        // 1 из 3 сфер (бесплатно за рекламу)
        this.btnStartSpheresAd.addEventListener('click', () => {
            if (this.isShufflingSpheres || this.spheresActive) return;
            this.simulateAdWatch(() => {
                this.startSpheresFlow();
            });
        });

        // Выбор сферы
        this.mysterySpheres.forEach(sphere => {
            sphere.addEventListener('click', () => {
                if (!this.spheresActive) return;
                const idx = parseInt(sphere.getAttribute('data-index'));
                this.chooseSphere(idx, sphere);
            });
        });

        // Забрать награду со сфер
        this.btnCollectSphereReward.addEventListener('click', () => {
            this.resetSpheresGame();
        });

        // Бесплатные монеты (+200)
        this.btnAdFreeCoins.addEventListener('click', () => {
            this.simulateAdWatch(() => {
                this.coins += 200;
                this.saveCurrencies();
                sounds.playWin();
            });
        });

        // Бесплатные алмазы (+15)
        this.btnAdFreeGems.addEventListener('click', () => {
            this.simulateAdWatch(() => {
                this.gems += 15;
                this.saveCurrencies();
                sounds.playWin();
            });
        });

        // Супер-пак (+350 монет и +10 алмазов)
        if (this.btnAdFreeMega) {
            this.btnAdFreeMega.addEventListener('click', () => {
                this.simulateAdWatch(() => {
                    this.coins += 350;
                    this.gems += 10;
                    this.saveCurrencies();
                    sounds.playWin();
                });
            });
        }

        // Кнопки завершения матча
        this.elBtnNextMatch.addEventListener('click', () => {
            this.startNewMatch();
        });

        this.elBtnToMenu.addEventListener('click', () => {
            this.elGameOverModal.classList.add('hidden');
            this.showScreen('menu');
            this.state = 'MENU';
        });
    }

    saveCurrencies() {
        localStorage.setItem('ball_coins', this.coins);
        localStorage.setItem('ball_gems', this.gems);
        this.updateCurrenciesUI();
    }

    updateCurrenciesUI() {
        if (this.menuCoins) this.menuCoins.textContent = this.coins;
        if (this.menuGems) this.menuGems.textContent = this.gems;
        if (this.chestsCoins) this.chestsCoins.textContent = this.coins;
        if (this.chestsGems) this.chestsGems.textContent = this.gems;
        if (this.inventoryCoins) this.inventoryCoins.textContent = this.coins;
        if (this.inventoryGems) this.inventoryGems.textContent = this.gems;
        if (this.shopCoins) this.shopCoins.textContent = this.coins;
        if (this.shopGems) this.shopGems.textContent = this.gems;

        const vipTags = document.querySelectorAll('.vip-tag');
        vipTags.forEach(tag => {
            if (this.isVip) tag.classList.remove('hidden');
            else tag.classList.add('hidden');
        });
    }

    updateCollectionBadge() {
        if (this.collectionCountBadge) {
            this.collectionCountBadge.textContent = `${this.unlockedBallIds.length}/${BALL_CATALOG.length}`;
        }
    }

    // =========================================================================
    // ОСМОТР СОДЕРЖИМОГО КЕЙСА (CS:GO ИНСПЕКЦИЯ)
    // =========================================================================

    openCaseInspectModal(caseId) {
        if (this.isCaseSpinning) return;

        const cfg = CASE_CONFIGS[caseId];
        if (!cfg) return;

        this.resetCaseModalViews();
        this.currentInspectedCase = cfg;

        // Заполняем карточку осмотра
        this.inspectCaseName.textContent = cfg.name;
        this.inspectTierTag.textContent = cfg.tier;
        this.inspectCaseImg.src = cfg.img;
        this.inspectOddsBar.textContent = cfg.oddsText;

        if (this.btnProceedOpenDonateYan) {
            if (cfg.isDonate) {
                this.btnProceedOpenDonateYan.classList.remove('hidden');
                const yanPriceEl = document.getElementById('inspect-yan-price');
                if (yanPriceEl) yanPriceEl.textContent = `${cfg.costYan} Ян`;
            } else {
                this.btnProceedOpenDonateYan.classList.add('hidden');
            }
        }

        if (cfg.isDonate) {
            this.inspectBtnText.textContent = 'ОТКРЫТЬ ЗА';
            this.inspectBtnPrice.textContent = `${cfg.costGems} 💎`;
        } else if (cfg.currency === 'coins') {
            this.inspectBtnText.textContent = 'ОТКРЫТЬ КЕЙС';
            this.inspectBtnPrice.textContent = `${cfg.cost} 🪙`;
        } else if (cfg.currency === 'gems') {
            this.inspectBtnText.textContent = 'ОТКРЫТЬ КЕЙС';
            this.inspectBtnPrice.textContent = `${cfg.cost} 💎`;
        } else {
            this.inspectBtnText.textContent = 'СМОТРЕТЬ РЕКЛАМУ';
            this.inspectBtnPrice.textContent = '🎬 БЕСПЛАТНО';
        }

        // Заполняем сетку всех шаров, которые могут выпасть из этого кейса
        this.inspectDropsGrid.innerHTML = '';
        // Уникальный список шаров для предпросмотра
        const uniqueBallsInCase = Array.from(new Set(cfg.pool.map(b => b.id)))
            .map(id => BALL_CATALOG.find(b => b.id === id));

        uniqueBallsInCase.forEach(ball => {
            const item = document.createElement('div');
            item.className = 'inspect-drop-item';
            item.innerHTML = `
                <canvas width="38" height="38" class="inspect-mini-canvas"></canvas>
                <div class="drop-name">${ball.name}</div>
                <div class="drop-rarity" style="color:${this.getRarityColor(ball.rarity)}">${ball.rarity}</div>
            `;
            const cvs = item.querySelector('.inspect-mini-canvas');
            renderBallPreview(cvs, ball.id, 13);
            this.inspectDropsGrid.appendChild(item);
        });

        // СТРОГИЙ СБРОС: показываем только экран осмотра, все остальное скрыто!
        this.caseInspectView.classList.remove('hidden');
        this.caseRouletteView.classList.add('hidden');
        this.caseWinnerView.classList.add('hidden');

        this.caseFlowModal.classList.remove('hidden');
        sounds.playLaunch();
    }

    getRarityColor(rarity) {
        switch (rarity) {
            case 'TRANSCENDENT': return '#ff0055';
            case 'COMMON': return '#94a3b8';
            case 'RARE': return '#38bdf8';
            case 'EPIC': return '#c084fc';
            case 'LEGENDARY': return '#fbbf24';
            case 'MYTHIC': return '#f87171';
            default: return '#ffffff';
        }
    }

    proceedOpenCurrentCase() {
        if (!this.currentInspectedCase || this.isCaseSpinning) return;
        const cfg = this.currentInspectedCase;

        if (cfg.isDonate) {
            if (this.gems < cfg.costGems) {
                sounds.playDefeat();
                this.showToast(`Недостаточно кристаллов! Требуется ${cfg.costGems} 💎 (у вас: ${this.gems} 💎).`);
                return;
            }
            this.gems -= cfg.costGems;
            this.saveCurrencies();
            this.updateCurrenciesUI();
            this.startCaseRouletteSpin(cfg);
            return;
        }

        if (cfg.currency === 'coins') {
            if (this.coins < cfg.cost) {
                this.showToast(`Недостаточно монет! Требуется ${cfg.cost} 🪙.`);
                return;
            }
            this.coins -= cfg.cost;
            this.saveCurrencies();
            this.startCaseRouletteSpin(cfg);
        } else if (cfg.currency === 'gems') {
            if (this.gems < cfg.cost) {
                this.showToast(`Недостаточно алмазов! Требуется ${cfg.cost} 💎.`);
                return;
            }
            this.gems -= cfg.cost;
            this.saveCurrencies();
            this.startCaseRouletteSpin(cfg);
        } else if (cfg.currency === 'ad') {
            this.simulateAdWatch(() => {
                this.startCaseRouletteSpin(cfg);
            });
        }
    }

    // =========================================================================
    // НАСТОЯЩАЯ РУЛЕТКА CS:GO
    // =========================================================================

    startCaseRouletteSpin(cfg) {
        this.isCaseSpinning = true;
        if (this.caseFlowModal) this.caseFlowModal.classList.remove('hidden');

        // Переключаем окно на рулетку
        this.caseInspectView.classList.add('hidden');
        this.caseWinnerView.classList.add('hidden');
        this.caseRouletteView.classList.remove('hidden');
        this.rouletteCaseName.textContent = `КРУТИМ: ${cfg.name.toUpperCase()}`;

        // Формируем ленту из 36 предметов
        const itemCount = 36;
        const targetIndex = 28;
        const stripItems = [];

        for (let i = 0; i < itemCount; i++) {
            stripItems.push(cfg.pool[Math.floor(Math.random() * cfg.pool.length)]);
        }

        // Выигранный шар
        const wonBall = cfg.pool[Math.floor(Math.random() * cfg.pool.length)];
        stripItems[targetIndex] = wonBall;

        // Отрисовываем ленту
        this.csgoRouletteStrip.innerHTML = '';
        this.csgoRouletteStrip.style.transform = 'translateX(0px)';

        stripItems.forEach(ball => {
            const card = document.createElement('div');
            card.className = `csgo-item-card csgo-card-${ball.rarity.toLowerCase()}`;
            card.innerHTML = `
                <canvas width="48" height="48" class="csgo-card-canvas"></canvas>
                <div class="item-name">${ball.name}</div>
                <div class="item-tier">${ball.rarity}</div>
            `;
            const cvs = card.querySelector('.csgo-card-canvas');
            renderBallPreview(cvs, ball.id, 15);
            this.csgoRouletteStrip.appendChild(card);
        });

        const cardWidth = 106; // 98px + 8px отступы
        const viewportWidth = this.csgoRouletteStrip.parentElement.clientWidth;
        const randomOffset = (Math.random() - 0.5) * 32;
        const targetScroll = (targetIndex * cardWidth) - (viewportWidth / 2) + (cardWidth / 2) + randomOffset;

        let startTime = null;
        const duration = 4200;
        let lastTickStep = 0;

        const animateCsgoRoulette = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easeOut = 1 - Math.pow(1 - progress, 4);
            const currentX = targetScroll * easeOut;

            this.csgoRouletteStrip.style.transform = `translateX(-${currentX}px)`;

            const currentStep = Math.floor(currentX / cardWidth);
            if (currentStep !== lastTickStep) {
                sounds.playRouletteTick();
                lastTickStep = currentStep;
            }

            if (progress < 1) {
                requestAnimationFrame(animateCsgoRoulette);
            } else {
                this.isCaseSpinning = false;
                sounds.playExplosion();
                this.revealWonCaseBall(wonBall);
            }
        };

        requestAnimationFrame(animateCsgoRoulette);
    }

    revealWonCaseBall(wonBall) {
        // Прячем рулетку, показываем выпавший шар
        this.caseRouletteView.classList.add('hidden');
        this.caseWinnerView.classList.remove('hidden');

        const cfg = this.currentInspectedCase;
        const isDonate = cfg && cfg.isDonate;

        if (isDonate) {
            if (cfg.bonusCoins) {
                this.coins += cfg.bonusCoins;
            }
            if (cfg.bonusGems) {
                this.gems += cfg.bonusGems;
            }
        }

        const isDuplicate = this.unlockedBallIds.includes(wonBall.id);
        if (!isDuplicate) {
            this.unlockedBallIds.push(wonBall.id);
            localStorage.setItem('unlocked_balls', JSON.stringify(this.unlockedBallIds));
            this.updateCollectionBadge();
            this.csgoWinnerRarity.textContent = `НОВЫЙ ШАР (${wonBall.rarity})`;
            this.csgoDuplicateTag.classList.add('hidden');
        } else {
            if (isDonate) {
                this.gems += 100;
                this.csgoDuplicateTag.textContent = '+100 💎 компенсация за дубликат';
            } else {
                this.coins += 50;
                this.csgoDuplicateTag.textContent = '+50 🪙 компенсация за дубликат';
            }
            this.csgoWinnerRarity.textContent = `ДУБЛИКАТ (${wonBall.rarity})`;
            this.csgoDuplicateTag.classList.remove('hidden');
        }
        this.saveCurrencies();
        this.updateCurrenciesUI();
        if (this.renderShop) this.renderShop();

        this.csgoWinnerName.textContent = wonBall.name;
        this.csgoWinnerDesc.textContent = wonBall.abilityDesc;

        renderBallPreview(this.csgoWinnerCanvas, wonBall.id, 36);

        if (wonBall.rarity === 'LEGENDARY' || wonBall.rarity === 'MYTHIC' || wonBall.rarity === 'TRANSCENDENT') {
            sounds.playWin();
        } else {
            sounds.playAbility();
        }
    }

    closeCaseFlowModal() {
        if (this.isCaseSpinning) return;
        this.caseFlowModal.classList.add('hidden');
        this.resetCaseModalViews();
    }

    resetCaseModalViews() {
        this.isCaseSpinning = false;
        this.currentInspectedCase = null;
        this.caseInspectView.classList.remove('hidden');
        this.caseRouletteView.classList.add('hidden');
        this.caseWinnerView.classList.add('hidden');
        this.csgoRouletteStrip.innerHTML = '';
        this.csgoRouletteStrip.style.transform = 'translateX(0px)';
        if (this.csgoWinnerCanvas) {
            const ctx = this.csgoWinnerCanvas.getContext('2d');
            ctx.clearRect(0, 0, this.csgoWinnerCanvas.width, this.csgoWinnerCanvas.height);
        }
        if (this.csgoWinnerName) this.csgoWinnerName.textContent = '';
        if (this.csgoWinnerDesc) this.csgoWinnerDesc.textContent = '';
        if (this.csgoWinnerRarity) this.csgoWinnerRarity.textContent = '';
        if (this.csgoDuplicateTag) this.csgoDuplicateTag.classList.add('hidden');
    }

    resetAllGachaState() {
        this.closeCaseFlowModal();
        this.resetSpheresGame();
    }

    // =========================================================================
    // ИНТЕРАКТИВ «1 ИЗ 3 ШАРОВ» (БЕЗ ВСЕЛЯЮЩИХСЯ МОДАЛОК КЕЙСА)
    // =========================================================================

    setSphereTimeout(fn, ms) {
        const id = setTimeout(fn, ms);
        this.sphereTimeouts.push(id);
        return id;
    }

    clearSphereTimeouts() {
        if (this.sphereTimeouts && this.sphereTimeouts.length > 0) {
            this.sphereTimeouts.forEach(id => clearTimeout(id));
            this.sphereTimeouts = [];
        }
    }

    resetSpheresGame() {
        this.clearSphereTimeouts();
        this.spheresActive = false;
        this.isShufflingSpheres = false;
        this.activeSphereWonBall = null;
        this.spheresHint.textContent = 'ВЫБЕРИ СТАВКУ И ЗАРЯДИ СФЕРЫ ДЛЯ ИГРЫ';
        this.spheresHint.style.color = 'var(--text-secondary)';
        this.spheresOutcomeBanner.classList.add('hidden');
        if (this.spheresButtonsBar) this.spheresButtonsBar.classList.remove('hidden');
        if (this.spheresArena) this.spheresArena.classList.remove('is-shuffling');

        const cfg = SPHERE_TIERS[this.currentSphereTier] || SPHERE_TIERS.mystery;

        this.mysterySpheres.forEach(s => {
            s.classList.remove('is-picking');
            s.style.opacity = '1';
            s.style.transform = 'none';
            s.style.zIndex = '1';

            const flipper = s.querySelector('.sphere-card-flipper');
            if (flipper) flipper.classList.remove('is-flipped');

            const img = s.querySelector('.sphere-art');
            if (img) {
                img.src = cfg.img;
            }

            const cvs = s.querySelector('.sphere-res-canvas');
            if (cvs) {
                const ctx = cvs.getContext('2d');
                ctx.clearRect(0, 0, cvs.width, cvs.height);
            }
        });
    }

    selectSphereTier(tierId) {
        const cfg = SPHERE_TIERS[tierId];
        if (!cfg) return;

        this.currentSphereTier = tierId;
        this.sphereTierPills.forEach(p => {
            p.classList.toggle('active', p.getAttribute('data-tier') === tierId);
        });

        if (this.spheresTierTitle) {
            this.spheresTierTitle.textContent = cfg.name.toUpperCase();
        }

        if (this.btnSpheresPlayText && this.btnSpheresPlayPrice) {
            if (cfg.currency === 'coins') {
                this.btnSpheresPlayText.textContent = `ИГРАТЬ (${cfg.cost} 🪙)`;
                this.btnSpheresPlayPrice.textContent = `${cfg.cost} 🪙`;
            } else {
                this.btnSpheresPlayText.textContent = `ИГРАТЬ (${cfg.cost} 💎)`;
                this.btnSpheresPlayPrice.textContent = `${cfg.cost} 💎`;
            }
        }

        this.resetSpheresGame();
        sounds.playLaunch();
    }

    openSpheresPoolModal() {
        const cfg = SPHERE_TIERS[this.currentSphereTier] || SPHERE_TIERS.mystery;
        if (this.poolModalTitle) this.poolModalTitle.textContent = cfg.name;
        if (this.poolModalTierTag) this.poolModalTierTag.textContent = cfg.tag;

        if (this.spheresPoolGrid) {
            this.spheresPoolGrid.innerHTML = '';
            const uniqueBalls = Array.from(new Set(cfg.pool.map(b => b.id)))
                .map(id => BALL_CATALOG.find(b => b.id === id));

            uniqueBalls.forEach(ball => {
                const item = document.createElement('div');
                item.className = 'inspect-drop-item';
                item.innerHTML = `
                    <canvas width="38" height="38" class="inspect-mini-canvas"></canvas>
                    <div class="drop-name">${ball.name}</div>
                    <div class="drop-rarity" style="color:${this.getRarityColor(ball.rarity)}">${ball.rarity}</div>
                `;
                const cvs = item.querySelector('.inspect-mini-canvas');
                renderBallPreview(cvs, ball.id, 13);
                this.spheresPoolGrid.appendChild(item);
            });
        }

        if (this.spheresPoolModal) {
            this.spheresPoolModal.classList.remove('hidden');
        }
        sounds.playLaunch();
    }

    handleSpheresPlay() {
        if (this.isShufflingSpheres || this.spheresActive) return;
        const cfg = SPHERE_TIERS[this.currentSphereTier] || SPHERE_TIERS.mystery;

        if (cfg.currency === 'coins') {
            if (this.coins < cfg.cost) {
                this.showToast(`Недостаточно монет! Требуется ${cfg.cost} 🪙.`);
                return;
            }
            this.coins -= cfg.cost;
            this.saveCurrencies();
            this.startSpheresFlow();
        } else if (cfg.currency === 'gems') {
            if (this.gems < cfg.cost) {
                this.showToast(`Недостаточно алмазов! Требуется ${cfg.cost} 💎.`);
                return;
            }
            this.gems -= cfg.cost;
            this.saveCurrencies();
            this.startSpheresFlow();
        }
    }

    startSpheresFlow() {
        if (this.isShufflingSpheres) return;
        this.isShufflingSpheres = true;
        this.spheresActive = false;
        this.activeSphereWonBall = null;

        const cfg = SPHERE_TIERS[this.currentSphereTier] || SPHERE_TIERS.mystery;

        // Прячем кнопки и баннер результата
        if (this.spheresButtonsBar) this.spheresButtonsBar.classList.add('hidden');
        this.spheresOutcomeBanner.classList.add('hidden');

        // Выбираем 3 шара из пулла текущего тира
        const shuffledPool = [...cfg.pool].sort(() => Math.random() - 0.5);
        this.spheresData = [
            shuffledPool[0] || cfg.pool[0],
            shuffledPool[1] || cfg.pool[Math.floor(Math.random() * cfg.pool.length)],
            shuffledPool[2] || cfg.pool[Math.floor(Math.random() * cfg.pool.length)]
        ];

        // Подготавливаем карточки на обратной стороне
        this.mysterySpheres.forEach((s, idx) => {
            s.style.transform = 'none';
            s.style.opacity = '1';
            s.style.zIndex = '1';

            const flipper = s.querySelector('.sphere-card-flipper');
            if (flipper) flipper.classList.remove('is-flipped');

            const ball = this.spheresData[idx];
            const cvs = s.querySelector('.sphere-res-canvas');
            const nameEl = s.querySelector('.res-name');
            const rarEl = s.querySelector('.res-rarity');

            if (cvs && ball) renderBallPreview(cvs, ball.id, 20);
            if (nameEl && ball) nameEl.textContent = ball.name;
            if (rarEl && ball) {
                rarEl.textContent = ball.rarity;
                rarEl.style.color = this.getRarityColor(ball.rarity);
            }
        });

        // ФАЗА 1: Раскрытие всех 3 сфер со ступенчатым 3D-переворотом (staggered flip)
        this.spheresHint.textContent = 'ЗАПОМНИ, В КАКОЙ СФЕРЕ ТВОЙ ШАР...';
        this.spheresHint.style.color = '#fbbf24';

        this.mysterySpheres.forEach((s, idx) => {
            this.setSphereTimeout(() => {
                const flipper = s.querySelector('.sphere-card-flipper');
                if (flipper) flipper.classList.add('is-flipped');
                sounds.playAbility();
            }, idx * 120);
        });

        // ФАЗА 2: Закрытие сфер через 1800мс
        this.setSphereTimeout(() => {
            this.spheresHint.textContent = 'СФЕРЫ ЗАКРЫВАЮТСЯ...';
            this.spheresHint.style.color = 'var(--text-secondary)';
            sounds.playLaunch();

            this.mysterySpheres.forEach(s => {
                const flipper = s.querySelector('.sphere-card-flipper');
                if (flipper) flipper.classList.remove('is-flipped');
            });

            // Ждем завершения закрытия (550мс) и запускаем перемешивание
            this.setSphereTimeout(() => {
                this.spheresHint.textContent = 'СФЕРЫ ПЕРЕМЕШИВАЮТСЯ... СЛЕДИ ЗА НИМИ!';
                this.spheresHint.style.color = '#38bdf8';
                this.animateSpheresShuffle(() => {
                    this.isShufflingSpheres = false;
                    this.spheresActive = true;
                    this.spheresHint.textContent = 'СФЕРЫ ПЕРЕМЕШАНЫ! ВЫБЕРИ 1 ИЗ 3 СФЕР:';
                    this.spheresHint.style.color = '#ffffff';
                });
            }, 550);

        }, 1800);
    }

    animateSpheresShuffle(onComplete) {
        if (!this.mysterySpheres || this.mysterySpheres.length < 3) {
            onComplete();
            return;
        }

        if (this.spheresArena) this.spheresArena.classList.add('is-shuffling');

        const s0 = this.mysterySpheres[0];
        const s1 = this.mysterySpheres[1];
        const s2 = this.mysterySpheres[2];

        // Замеряем базовые X-координаты слотов внутри арены
        const x0 = s0.offsetLeft;
        const x1 = s1.offsetLeft;
        const x2 = s2.offsetLeft;
        const slotX = [x0, x1, x2];

        // Индекс текущего слота для каждой из 3 сфер [сфера0, сфера1, сфера2]
        const currentSlotOfSphere = [0, 1, 2];

        const moveToSlot = (sphereIdx, targetSlot, zIndex = 1, scale = 1) => {
            const sphereEl = this.mysterySpheres[sphereIdx];
            const homeX = slotX[sphereIdx];
            const destX = slotX[targetSlot];
            const deltaX = destX - homeX;
            sphereEl.style.zIndex = zIndex;
            // Строго на одном уровне (translateY = 0)
            sphereEl.style.transform = `translate3d(${deltaX}px, 0, 0) scale(${scale})`;
            currentSlotOfSphere[sphereIdx] = targetSlot;
        };

        const swapSlots = (slotA, slotB, stepIdx) => {
            const sphereA = currentSlotOfSphere.indexOf(slotA);
            const sphereB = currentSlotOfSphere.indexOf(slotB);
            if (sphereA !== -1 && sphereB !== -1) {
                // Чередуем передний и задний план (z-index) строго на одной горизонтальной оси
                const frontSphere = (stepIdx % 2 === 0) ? sphereA : sphereB;
                const backSphere = (stepIdx % 2 === 0) ? sphereB : sphereA;
                const frontSlot = (stepIdx % 2 === 0) ? slotB : slotA;
                const backSlot = (stepIdx % 2 === 0) ? slotA : slotB;

                moveToSlot(frontSphere, frontSlot, 5, 1.05);
                moveToSlot(backSphere, backSlot, 3, 0.95);
                sounds.playLaunch();
            }
        };

        // Быстрая цепочка из 14 динамичных перестановок для азарта и сложности отслеживания
        const swapPairs = [[0, 1], [1, 2], [0, 2]];
        const sequence = [];
        let lastPair = null;
        const totalSwaps = 14;

        for (let i = 0; i < totalSwaps; i++) {
            const available = swapPairs.filter(p => !lastPair || (p[0] !== lastPair[0] || p[1] !== lastPair[1]));
            const chosen = available[Math.floor(Math.random() * available.length)];
            sequence.push(chosen);
            lastPair = chosen;
        }

        const stepTime = 220; // 220мс на перестановку (быстро и драйвово)

        sequence.forEach((pair, idx) => {
            this.setSphereTimeout(() => {
                swapSlots(pair[0], pair[1], idx);
            }, idx * stepTime);
        });

        // Шаг выравнивания масштаба (все scale: 1, zIndex: 1 на одной оси)
        const settleDelay = sequence.length * stepTime;
        this.setSphereTimeout(() => {
            for (let i = 0; i < 3; i++) {
                moveToSlot(i, currentSlotOfSphere[i], 1, 1);
            }
            sounds.playAbility();
        }, settleDelay);

        // Финал перемешивания: активация выбора сфер игроком
        this.setSphereTimeout(() => {
            if (this.spheresArena) this.spheresArena.classList.remove('is-shuffling');
            onComplete();
        }, settleDelay + 320);
    }

    chooseSphere(selectedIndex, selectedElement) {
        if (!this.spheresActive || !this.spheresData || this.spheresData.length < 3) return;
        this.spheresActive = false;

        // Эффект пульсации/заряда на выбранной сфере
        selectedElement.classList.add('is-picking');
        sounds.playAbility();

        this.spheresHint.textContent = 'СФЕРА РАСКРЫВАЕТСЯ...';
        this.spheresHint.style.color = '#fbbf24';

        this.setSphereTimeout(() => {
            selectedElement.classList.remove('is-picking');
            sounds.playExplosion();

            // Переворачиваем выбранную сферу
            const wonFlipper = selectedElement.querySelector('.sphere-card-flipper');
            if (wonFlipper) wonFlipper.classList.add('is-flipped');

            const wonBall = this.spheresData[selectedIndex];
            this.activeSphereWonBall = wonBall;

            // Через 450мс переворачиваем остальные сферы с пониженной прозрачностью для обзора
            this.setSphereTimeout(() => {
                this.mysterySpheres.forEach((s, idx) => {
                    if (idx !== selectedIndex) {
                        const otherFlipper = s.querySelector('.sphere-card-flipper');
                        if (otherFlipper) otherFlipper.classList.add('is-flipped');
                        s.style.opacity = '0.5';
                    }
                });
            }, 450);

            // Начисляем шар
            const isDuplicate = this.unlockedBallIds.includes(wonBall.id);
            if (!isDuplicate) {
                this.unlockedBallIds.push(wonBall.id);
                localStorage.setItem('unlocked_balls', JSON.stringify(this.unlockedBallIds));
                this.updateCollectionBadge();
                this.outcomeDuplicateTag.classList.add('hidden');
            } else {
                this.coins += 50;
                this.saveCurrencies();
                this.outcomeDuplicateTag.classList.remove('hidden');
            }

            this.outcomeBallTitle.textContent = `${wonBall.name} (${wonBall.rarity})`;
            this.outcomeBallTitle.style.color = this.getRarityColor(wonBall.rarity);
            this.spheresOutcomeBanner.classList.remove('hidden');

            if (wonBall.rarity === 'LEGENDARY' || wonBall.rarity === 'MYTHIC' || wonBall.rarity === 'TRANSCENDENT') {
                sounds.playWin();
            } else {
                sounds.playAbility();
            }
        }, 500);
    }

    rollBallFromPool(tier) {
        if (tier === 'common') {
            const list = BALL_CATALOG.filter(b => b.rarity === 'COMMON');
            return list[Math.floor(Math.random() * list.length)];
        } else if (tier === 'rare') {
            const list = BALL_CATALOG.filter(b => b.rarity === 'RARE');
            return list[Math.floor(Math.random() * list.length)];
        } else {
            const list = BALL_CATALOG.filter(b => b.rarity === 'EPIC' || b.rarity === 'LEGENDARY' || b.rarity === 'MYTHIC');
            return list[Math.floor(Math.random() * list.length)];
        }
    }

    simulateAdWatch(onComplete) {
        sounds.playAbility();
        this.adSimulationModal.classList.remove('hidden');
        let timeLeft = 2;
        this.adTimerNum.textContent = timeLeft;

        const timer = setInterval(() => {
            timeLeft--;
            this.adTimerNum.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                this.adSimulationModal.classList.add('hidden');
                if (onComplete) onComplete();
            }
        }, 800);
    }

    // =========================================================================
    // БОЕВОЙ ЦИКЛ
    // =========================================================================

    showScreen(name) {
        this.screenMenu.classList.add('hidden');
        this.screenBattle.classList.add('hidden');
        this.screenChests.classList.add('hidden');
        if (this.screenInventory) this.screenInventory.classList.add('hidden');
        if (this.screenShop) this.screenShop.classList.add('hidden');

        if (name === 'battle') {
            this.screenBattle.classList.remove('hidden');
            const rect = this.canvas.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
                this.resize(rect.width, rect.height);
            }
        } else if (name === 'chests') {
            this.screenChests.classList.remove('hidden');
            this.updateCurrenciesUI();
        } else if (name === 'inventory') {
            this.screenInventory.classList.remove('hidden');
            this.renderInventory();
            this.updateCurrenciesUI();
        } else if (name === 'shop') {
            this.screenShop.classList.remove('hidden');
            this.renderShop();
            this.updateCurrenciesUI();
        } else {
            this.screenMenu.classList.remove('hidden');
            this.updateCurrenciesUI();
            this.updateCollectionBadge();
        }
    }

    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;

        const availableHeight = height - 95;
        const availableWidth = width - 24;
        const arenaSize = Math.min(availableWidth, availableHeight, 520);

        const centerX = width / 2;
        const centerY = 75 + availableHeight / 2;

        this.arena.size = arenaSize;
        this.arena.left = centerX - arenaSize / 2;
        this.arena.right = centerX + arenaSize / 2;
        this.arena.top = centerY - arenaSize / 2;
        this.arena.bottom = centerY + arenaSize / 2;
    }

    
    openSandboxModal() {
        if (!this.sandboxModal) return;
        this.setSandboxSlot('player');
        this.updateSandboxVSUI();
        this.renderSandboxGrid();
        this.sandboxModal.classList.remove('hidden');
    }

    setSandboxSlot(slot) {
        this.activeSandboxSlot = slot;
        if (this.sandboxSlotPlayer) {
            this.sandboxSlotPlayer.className = `sandbox-vs-slot ${slot === 'player' ? 'active-player' : ''}`;
            const hint = this.sandboxSlotPlayer.querySelector('.sandbox-slot-hint');
            if (hint) hint.textContent = slot === 'player' ? 'ВЫБИРАЕМ...' : 'НАЖМИ ДЛЯ ВЫБОРА';
        }
        if (this.sandboxSlotBot) {
            this.sandboxSlotBot.className = `sandbox-vs-slot ${slot === 'bot' ? 'active-bot' : ''}`;
            const hint = this.sandboxSlotBot.querySelector('.sandbox-slot-hint');
            if (hint) hint.textContent = slot === 'bot' ? 'ВЫБИРАЕМ...' : 'НАЖМИ ДЛЯ ВЫБОРА';
        }
        if (this.sandboxTabPlayer) {
            this.sandboxTabPlayer.className = `sandbox-tab-btn ${slot === 'player' ? 'active-player' : ''}`;
        }
        if (this.sandboxTabBot) {
            this.sandboxTabBot.className = `sandbox-tab-btn ${slot === 'bot' ? 'active-bot' : ''}`;
        }
        this.updateSandboxAbilityCard();
        sounds.playLaunch();
    }

    updateSandboxVSUI() {
        const pTemplate = BALL_CATALOG.find(b => b.id === this.selectedSandboxPlayerBallId) || BALL_CATALOG[0];
        const bTemplate = BALL_CATALOG.find(b => b.id === this.selectedSandboxBotBallId) || BALL_CATALOG[1];

        if (this.sandboxPlayerCanvas) renderBallPreview(this.sandboxPlayerCanvas, pTemplate.id, 24);
        if (this.sandboxPlayerName) this.sandboxPlayerName.textContent = pTemplate.name;
        if (this.sandboxPlayerRarity) {
            this.sandboxPlayerRarity.textContent = pTemplate.rarity;
            this.sandboxPlayerRarity.style.color = this.getRarityColor(pTemplate.rarity);
        }
        if (this.sandboxPlayerStats) {
            this.sandboxPlayerStats.textContent = `HP ${pTemplate.maxHp} | АТК ${pTemplate.baseDamage} | СК ${pTemplate.speed}`;
        }

        if (this.sandboxBotCanvas) renderBallPreview(this.sandboxBotCanvas, bTemplate.id, 24);
        if (this.sandboxBotName) this.sandboxBotName.textContent = bTemplate.name;
        if (this.sandboxBotRarity) {
            this.sandboxBotRarity.textContent = bTemplate.rarity;
            this.sandboxBotRarity.style.color = this.getRarityColor(bTemplate.rarity);
        }
        if (this.sandboxBotStats) {
            this.sandboxBotStats.textContent = `HP ${bTemplate.maxHp} | АТК ${bTemplate.baseDamage} | СК ${bTemplate.speed}`;
        }

        this.updateSandboxAbilityCard();
    }

    updateSandboxAbilityCard() {
        const activeId = (this.activeSandboxSlot === 'player') ? this.selectedSandboxPlayerBallId : this.selectedSandboxBotBallId;
        const ball = BALL_CATALOG.find(b => b.id === activeId) || BALL_CATALOG[0];
        if (this.sandboxAbilityName) {
            const sidePrefix = (this.activeSandboxSlot === 'player') ? '🔵 Игрок:' : '🔴 Бот:';
            this.sandboxAbilityName.innerHTML = `<span style="color:${this.activeSandboxSlot === 'player' ? '#38bdf8' : '#f43f5e'}">${sidePrefix}</span> ${ball.name} — <span style="color:#f59e0b">${ball.abilityName}</span>`;
        }
        if (this.sandboxAbilityDesc) {
            this.sandboxAbilityDesc.textContent = ball.abilityDesc;
        }
    }

    renderSandboxGrid() {
        if (!this.sandboxBallsGrid) return;
        this.sandboxBallsGrid.innerHTML = '';

        const filter = this.sandboxRarityFilter || 'ALL';
        const balls = (filter === 'ALL')
            ? BALL_CATALOG
            : BALL_CATALOG.filter(b => b.rarity === filter);

        balls.forEach(ball => {
            const isP = (ball.id === this.selectedSandboxPlayerBallId);
            const isB = (ball.id === this.selectedSandboxBotBallId);

            let selClass = '';
            if (isP && isB) selClass = 'sel-both';
            else if (isP) selClass = 'sel-player';
            else if (isB) selClass = 'sel-bot';

            const card = document.createElement('div');
            card.className = `sandbox-ball-card ${selClass}`;

            let badges = '';
            if (isP && isB) {
                badges = '<span class="sandbox-badge-p">🔵 ИГРОК</span><span class="sandbox-badge-b">🔴 БОТ</span>';
            } else if (isP) {
                badges = '<span class="sandbox-badge-p">🔵 ИГРОК</span>';
            } else if (isB) {
                badges = '<span class="sandbox-badge-b">🔴 БОТ</span>';
            }

            card.innerHTML = `
                ${badges}
                <canvas width="52" height="52" class="sandbox-ball-canvas"></canvas>
                <div class="sandbox-card-name">${ball.name}</div>
                <div class="sandbox-card-rarity" style="color:${this.getRarityColor(ball.rarity)}">${ball.rarity}</div>
            `;

            const cvs = card.querySelector('.sandbox-ball-canvas');
            renderBallPreview(cvs, ball.id, 18);

            card.addEventListener('click', () => {
                if (this.activeSandboxSlot === 'player') {
                    this.selectedSandboxPlayerBallId = ball.id;
                } else {
                    this.selectedSandboxBotBallId = ball.id;
                }
                sounds.playBallHit();
                this.updateSandboxVSUI();
                this.renderSandboxGrid();
            });

            this.sandboxBallsGrid.appendChild(card);
        });
    }

    startCustomMatch(playerBallId, botBallId) {
        sounds.init();
        this.customDuel = { playerBallId, botBallId };
        this.playerHearts = 3;
        this.botHearts = 3;
        this.currentRound = 1;
        this.updateHeartsUI();
        this.elGameOverModal.classList.add('hidden');
        this.showScreen('battle');
        this.startRound();
    }

    startNewMatch() {
        this.customDuel = null;
        this.playerHearts = 3;
        this.botHearts = 3;
        this.currentRound = 1;
        this.updateHeartsUI();
        this.elGameOverModal.classList.add('hidden');

        // Инициализируем пул шаров игрока из выбранных 5 шаров боевой колоды
        this.matchPlayerPool = [...this.playerDeckIds];
        this.startRound();
    }

    startRound() {
        this.elRoundNum.textContent = this.currentRound;
        this.state = 'ROULETTE';
        this.elCountdownOverlay.classList.add('hidden');

        // Если пул по какой-то причине пуст, перезаполняем из колоды игрока
        if (!this.matchPlayerPool || this.matchPlayerPool.length === 0) {
            this.matchPlayerPool = [...this.playerDeckIds];
        }

        // Если активен Тестовый Режим (Custom Duel), сразу берем выбранные шары!
        if (this.customDuel) {
            const chosenBallTemplate = BALL_CATALOG.find(b => b.id === this.customDuel.playerBallId) || BALL_CATALOG[0];
            const botBallTemplate = BALL_CATALOG.find(b => b.id === this.customDuel.botBallId) || BALL_CATALOG[1];

            this.playerBall = new BattleBall(chosenBallTemplate, true);
            this.botBall = new BattleBall(botBallTemplate, false);

            const centerX = (this.arena.left + this.arena.right) / 2;
            this.playerBall.pos.set(centerX, this.arena.bottom - 80);
            this.botBall.pos.set(centerX, this.arena.top + 80);

            this.playerBall.aimAngle = -Math.PI / 2;
            const dirX = this.playerBall.pos.x - this.botBall.pos.x;
            const dirY = this.playerBall.pos.y - this.botBall.pos.y;
            this.botBall.aimAngle = Math.atan2(dirY, dirX) + (Math.random() - 0.5) * 0.9;

            this.showRoundIntro(this.currentRound, chosenBallTemplate, botBallTemplate, () => {
                this.startCountdownPhase();
            });
            return;
        }

        // Роллим один из оставшихся шаров пула через рулетку (без повторов!)
        this.spinRoulette(this.matchPlayerPool, (chosenBallTemplate) => {
            // "если выпал, убираем" - удаляем шар из оставшегося пула на этот матч!
            const poolIdx = this.matchPlayerPool.indexOf(chosenBallTemplate.id);
            if (poolIdx !== -1) {
                this.matchPlayerPool.splice(poolIdx, 1);
            }

            // Для соперника: повышенный шанс выпадения редких и эпических (золотая середина)
            const botBallTemplate = this.rollOpponentBallTemplate();

            this.playerBall = new BattleBall(chosenBallTemplate, true);
            this.botBall = new BattleBall(botBallTemplate, false);

            const centerX = (this.arena.left + this.arena.right) / 2;
            this.playerBall.pos.set(centerX, this.arena.bottom - 80);
            this.botBall.pos.set(centerX, this.arena.top + 80);

            this.playerBall.aimAngle = -Math.PI / 2;

            const dirX = this.playerBall.pos.x - this.botBall.pos.x;
            const dirY = this.playerBall.pos.y - this.botBall.pos.y;
            this.botBall.aimAngle = Math.atan2(dirY, dirX) + (Math.random() - 0.5) * 0.9;

            // Показываем анонс начала раунда (выход шаров)
            this.showRoundIntro(this.currentRound, chosenBallTemplate, botBallTemplate, () => {
                this.startCountdownPhase();
            });
        });
    }

    showRoundIntro(roundNum, playerTemplate, botTemplate, onComplete) {
        if (!this.roundIntroBanner) {
            if (onComplete) onComplete();
            return;
        }

        if (this.introRoundNum) this.introRoundNum.textContent = roundNum;
        if (this.introPlayerName) this.introPlayerName.textContent = playerTemplate.name;
        if (this.introBotName) this.introBotName.textContent = botTemplate.name;

        if (this.introPlayerCanvas) renderBallPreview(this.introPlayerCanvas, playerTemplate.id, 20);
        if (this.introBotCanvas) renderBallPreview(this.introBotCanvas, botTemplate.id, 20);

        this.roundIntroBanner.classList.remove('hidden');
        sounds.playAbility();

        setTimeout(() => {
            this.roundIntroBanner.classList.add('hidden');
            if (onComplete) onComplete();
        }, 1300);
    }

    spinRoulette(poolBallIds, onComplete) {
        if (!this.elRouletteModal) {
            const ball = BALL_CATALOG.find(b => b.id === (poolBallIds && poolBallIds[0])) || BALL_CATALOG[0];
            if (onComplete) onComplete(ball);
            return;
        }

        const poolBalls = (poolBallIds || []).map(id => BALL_CATALOG.find(b => b.id === id) || BALL_CATALOG[0]);
        if (poolBalls.length === 0) poolBalls.push(BALL_CATALOG[0]);

        if (this.rouletteModalLabel) {
            this.rouletteModalLabel.textContent = `РОЛЛ ШАРА НА РАУНД ${this.currentRound} (В ПУЛЕ: ${poolBalls.length} ШАРОВ)`;
        }

        this.elRouletteModal.classList.remove('hidden');
        this.elSelectedCard.classList.add('hidden');
        this.elRouletteTrack.innerHTML = '';
        this.elRouletteTrack.style.transform = 'translateX(0px)';

        const sequence = [];
        for (let i = 0; i < 24; i++) {
            sequence.push(poolBalls[i % poolBalls.length]);
        }
        const winningBall = poolBalls[Math.floor(Math.random() * poolBalls.length)];
        const targetIndex = 17;
        sequence[targetIndex] = winningBall;

        sequence.forEach((ball) => {
            const item = document.createElement('div');
            item.className = 'roulette-item';
            item.style.borderColor = this.getRarityColor(ball.rarity) + '44';
            item.innerHTML = `
                <canvas width="44" height="44" class="roulette-ball-canvas"></canvas>
                <div class="name" style="font-size:10px; font-weight:800; color:#fff; max-width:80px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${ball.name}</div>
                <div style="font-size:8px; font-weight:800; color:${this.getRarityColor(ball.rarity)};">${ball.rarity}</div>
            `;
            const miniCanvas = item.querySelector('.roulette-ball-canvas');
            renderBallPreview(miniCanvas, ball.id, 16);
            this.elRouletteTrack.appendChild(item);
        });

        const itemWidth = 96;
        const windowWidth = this.elRouletteTrack.parentElement.clientWidth || 360;
        const targetScroll = targetIndex * itemWidth - windowWidth / 2 + itemWidth / 2;

        let startTime = null;
        const duration = 2100;
        let lastTickStep = 0;

        const animateSpin = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentX = targetScroll * easeOut;

            this.elRouletteTrack.style.transform = `translateX(-${currentX}px)`;

            const currentStep = Math.floor(currentX / itemWidth);
            if (currentStep !== lastTickStep) {
                sounds.playRouletteTick();
                lastTickStep = currentStep;
            }

            if (progress < 1) {
                requestAnimationFrame(animateSpin);
            } else {
                this.showWonBallCard(winningBall, onComplete);
            }
        };

        requestAnimationFrame(animateSpin);
    }

    showWonBallCard(ball, onComplete) {
        if (this.wonBallCanvas) {
            renderBallPreview(this.wonBallCanvas, ball.id, 22);
        }

        this.elPreviewName.textContent = ball.name;
        this.elPreviewRarity.textContent = ball.rarity;
        this.elPreviewRarity.style.color = this.getRarityColor(ball.rarity);
        this.elPreviewDesc.textContent = ball.abilityDesc;
        this.elSelectedCard.classList.remove('hidden');

        sounds.playAbility();

        setTimeout(() => {
            this.elRouletteModal.classList.add('hidden');
            if (onComplete) onComplete(ball);
        }, 1100);
    }

    startCountdownPhase() {
        this.state = 'COUNTDOWN';
        this.countdownTime = 5.0;
        this.elCountdownOverlay.classList.remove('hidden');
        this.elCountdownNumber.textContent = '5';
    }

    onPointerDown(x, y) {
        if (this.state !== 'COUNTDOWN' || !this.playerBall) return;
        this.isAiming = true;
        this.updateAimAngle(x, y);
    }

    onPointerMove(x, y) {
        if (!this.isAiming || this.state !== 'COUNTDOWN') return;
        this.updateAimAngle(x, y);
    }

    onPointerUp() {
        this.isAiming = false;
    }

    updateAimAngle(x, y) {
        if (!this.playerBall) return;
        const dx = x - this.playerBall.pos.x;
        const dy = y - this.playerBall.pos.y;
        if (Math.hypot(dx, dy) > 8) {
            this.playerBall.aimAngle = Math.atan2(dy, dx);
            this.playerBall.facingAngle = this.playerBall.aimAngle;
        }
    }

    launchBalls() {
        this.elCountdownOverlay.classList.add('hidden');
        this.state = 'BATTLE';

        const pAngle = this.playerBall.aimAngle;
        this.playerBall.vel.set(
            Math.cos(pAngle) * this.playerBall.currentSpeed,
            Math.sin(pAngle) * this.playerBall.currentSpeed
        );
        this.playerBall.facingAngle = pAngle;

        const bAngle = this.botBall.aimAngle;
        this.botBall.vel.set(
            Math.cos(bAngle) * this.botBall.currentSpeed,
            Math.sin(bAngle) * this.botBall.currentSpeed
        );
        this.botBall.facingAngle = bAngle;

        sounds.playLaunch();
    }

    update(dt) {
        this.particles.update(dt, this.arena, [this.playerBall, this.botBall]);

        if (this.state === 'COUNTDOWN') {
            const prevInt = Math.ceil(this.countdownTime);
            this.countdownTime -= dt;
            const currentInt = Math.ceil(this.countdownTime);

            if (currentInt !== prevInt && currentInt > 0) {
                sounds.playRouletteTick();
                this.elCountdownNumber.textContent = currentInt;
            }

            if (this.countdownTime <= 0) {
                this.launchBalls();
            }
        }

        if (this.state === 'BATTLE') {
            this.playerBall.update(dt, this.botBall, this.particles);
            this.botBall.update(dt, this.playerBall, this.particles);

            this.physics.checkWallCollisions(this.playerBall, this.arena, this.botBall, this.particles);
            this.physics.checkWallCollisions(this.botBall, this.arena, this.playerBall, this.particles);

            const hit = this.physics.resolveBallCollision(this.playerBall, this.botBall);
            if (hit) {
                if (this.playerBall.collisionImmunityTimer <= 0 && this.botBall.collisionImmunityTimer <= 0) {
                    this.playerBall.collisionImmunityTimer = 0.32;
                    this.botBall.collisionImmunityTimer = 0.32;
                    this.playerBall.onHitEnemy(this.botBall, hit.force, hit.hitPoint, this.particles);
                    this.botBall.onHitEnemy(this.playerBall, hit.force, hit.hitPoint, this.particles);
                }
            }

            if (this.playerBall.hp <= 0 || this.botBall.hp <= 0) {
                this.state = 'ROUND_OVER';
                setTimeout(() => this.resolveRoundOutcome(), 1000);
            }
        }
    }

    resolveRoundOutcome() {
        const playerWon = this.playerBall.hp > 0;

        if (playerWon) {
            this.botHearts--;
        } else {
            this.playerHearts--;
        }

        this.updateHeartsUI();

        if (this.playerHearts <= 0 || this.botHearts <= 0) {
            this.endMatch(this.playerHearts > 0);
        } else {
            this.currentRound++;
            this.startRound();
        }
    }

    updateHeartsUI() {
        this.elPlayerHearts.forEach((el, idx) => {
            el.className = idx < this.playerHearts ? 'heart active' : 'heart lost';
        });

        this.elBotHearts.forEach((el, idx) => {
            el.className = idx < this.botHearts ? 'heart active' : 'heart lost';
        });
    }

    endMatch(isVictory) {
        this.state = 'MATCH_OVER';
        this.elGameOverModal.classList.remove('hidden');

        if (isVictory) {
            this.elResultTitle.textContent = 'ПОБЕДА';
            this.elResultSubtitle.textContent = 'Все шары соперника разбиты';
            let winCoins = 150;
            if (this.isVip) {
                winCoins = Math.round(winCoins * 1.5);
                this.elRewardAmount.textContent = `+${winCoins} 🪙 (+50% VIP 👑)`;
            } else {
                this.elRewardAmount.textContent = `+${winCoins} 🪙`;
            }
            this.coins += winCoins;
            this.saveCurrencies();
            sounds.playWin();
        } else {
            this.elResultTitle.textContent = 'ПОРАЖЕНИЕ';
            this.elResultSubtitle.textContent = 'Твои сердца закончились';
            this.elRewardAmount.textContent = '+30 🪙';
            this.coins += 30;
            this.saveCurrencies();
            sounds.playDefeat();
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.save();
        if (this.particles.screenShakeIntensity > 0) {
            const rx = (Math.random() - 0.5) * this.particles.screenShakeIntensity;
            const ry = (Math.random() - 0.5) * this.particles.screenShakeIntensity;
            this.ctx.translate(rx, ry);
        }

        this.drawArena();

        if (this.state === 'COUNTDOWN') {
            if (this.playerBall) {
                this.drawTrajectory(this.playerBall.pos, this.playerBall.aimAngle, '#ffffff');
            }
            if (this.botBall && this.countdownTime <= 0.7) {
                this.drawTrajectory(this.botBall.pos, this.botBall.aimAngle, '#ff3b30');
            }
        }

        if (this.playerBall && this.playerBall.hp > 0) {
            this.playerBall.draw(this.ctx);
        }
        if (this.botBall && this.botBall.hp > 0) {
            this.botBall.draw(this.ctx);
        }

        this.particles.draw(this.ctx);

        this.ctx.restore();
    }

    drawArena() {
        const { left, right, top, bottom } = this.arena;
        const width = right - left;
        const height = bottom - top;

        if (this.playerBall && this.botBall) {
            const pHp = Math.max(0, this.playerBall.hp);
            const bHp = Math.max(0, this.botBall.hp);
            const textY = top - 13;
            const barY = top - 6;
            const barWidth = 110;
            const barHeight = 4.5;

            this.ctx.font = '900 17px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(`${pHp} HP`, left, textY);

            this.ctx.fillStyle = '#1e1e24';
            this.ctx.fillRect(left, barY, barWidth, barHeight);
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fillRect(left, barY, barWidth * (pHp / 100), barHeight);

            this.ctx.fillStyle = '#ff3b30';
            this.ctx.textAlign = 'right';
            this.ctx.fillText(`${bHp} HP`, right, textY);

            this.ctx.fillStyle = '#1e1e24';
            this.ctx.fillRect(right - barWidth, barY, barWidth, barHeight);
            this.ctx.fillStyle = '#ff3b30';
            this.ctx.fillRect(right - barWidth * (bHp / 100), barY, barWidth * (bHp / 100), barHeight);
        }

        this.ctx.fillStyle = '#09090c';
        this.ctx.fillRect(left, top, width, height);

        this.ctx.strokeStyle = '#25252b';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(left, top, width, height);

        const centerX = (left + right) / 2;
        const centerY = (top + bottom) / 2;

        this.ctx.strokeStyle = '#15151a';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, width * 0.22, 0, Math.PI * 2);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(centerX - 20, centerY);
        this.ctx.lineTo(centerX + 20, centerY);
        this.ctx.moveTo(centerX, centerY - 20);
        this.ctx.lineTo(centerX, centerY + 20);
        this.ctx.stroke();
    }

    drawTrajectory(pos, angle, color) {
        const lineLen = 95;
        const endX = pos.x + Math.cos(angle) * lineLen;
        const endY = pos.y + Math.sin(angle) * lineLen;

        this.ctx.save();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([4, 6]);

        this.ctx.beginPath();
        this.ctx.moveTo(pos.x, pos.y);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();

        this.ctx.setLineDash([]);
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(endX, endY, 3.5, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 1.2;
        this.ctx.beginPath();
        this.ctx.arc(endX, endY, 7, 0, Math.PI * 2);
        this.ctx.stroke();

        this.ctx.restore();
    }

    // =========================================================================
    // СИСТЕМА ИНВЕНТАРЯ И КОЛЛЕКЦИИ
    // =========================================================================

    renderInventory() {
        if (!this.screenInventory) return;

        const unlockedCount = this.unlockedBallIds.length;
        const totalCount = BALL_CATALOG.length;
        const percent = Math.round((unlockedCount / totalCount) * 100);

        if (this.inventoryRatioText) {
            this.inventoryRatioText.textContent = `ОТКРЫТО: ${unlockedCount} ИЗ ${totalCount} ШАРОВ (${percent}%)`;
        }
        if (this.inventoryProgressFill) {
            this.inventoryProgressFill.style.width = `${percent}%`;
        }

        this.renderInventoryDeck();
        this.renderInventoryGrid();
        this.updateCollectionBadge();
    }

    renderInventoryDeck() {
        if (!this.inventoryDeckSlots) return;
        this.inventoryDeckSlots.innerHTML = '';

        const slotLabels = ['СЛОТ 1', 'СЛОТ 2', 'СЛОТ 3', 'СЛОТ 4', 'СЛОТ 5'];
        this.playerDeckIds.forEach((ballId, idx) => {
            const ball = BALL_CATALOG.find(b => b.id === ballId) || BALL_CATALOG[0];
            const slotEl = document.createElement('div');
            slotEl.className = 'inv-deck-slot';
            slotEl.innerHTML = `
                <div class="slot-label">${slotLabels[idx]}</div>
                <canvas width="42" height="42" class="slot-canvas"></canvas>
                <div class="slot-name">${ball.name}</div>
                <div class="slot-rarity" style="color:${this.getRarityColor(ball.rarity)}">${ball.rarity}</div>
            `;
            const cvs = slotEl.querySelector('.slot-canvas');
            renderBallPreview(cvs, ball.id, 15);

            slotEl.addEventListener('click', () => {
                this.openBallDetailModal(ball.id);
            });

            this.inventoryDeckSlots.appendChild(slotEl);
        });
    }

    renderInventoryGrid() {
        if (!this.inventoryGrid) return;
        this.inventoryGrid.innerHTML = '';

        const filter = this.currentInvFilter || 'ALL';
        const balls = (filter === 'ALL')
            ? BALL_CATALOG
            : BALL_CATALOG.filter(b => b.rarity === filter);

        balls.forEach(ball => {
            const isUnlocked = this.unlockedBallIds.includes(ball.id);
            const inDeckIdx = this.playerDeckIds.indexOf(ball.id);
            const isInDeck = (inDeckIdx !== -1);

            const card = document.createElement('div');
            card.className = `inv-ball-card ${!isUnlocked ? 'is-locked' : ''} ${isInDeck ? 'in-deck' : ''}`;

            if (isUnlocked) {
                card.innerHTML = `
                    ${isInDeck ? `<span class="inv-deck-badge-pill">СЛОТ ${inDeckIdx + 1}</span>` : ''}
                    <canvas width="52" height="52" class="inv-ball-canvas"></canvas>
                    <div class="inv-card-name">${ball.name}</div>
                    <div class="inv-card-rarity" style="color:${this.getRarityColor(ball.rarity)}">${ball.rarity}</div>
                `;
                const cvs = card.querySelector('.inv-ball-canvas');
                renderBallPreview(cvs, ball.id, 18);
            } else {
                card.innerHTML = `
                    <div class="inv-lock-overlay">🔒</div>
                    <div class="inv-card-name">${ball.name}</div>
                    <div class="inv-card-rarity" style="color:${this.getRarityColor(ball.rarity)}">${ball.rarity}</div>
                `;
            }

            card.addEventListener('click', () => {
                this.openBallDetailModal(ball.id);
            });

            this.inventoryGrid.appendChild(card);
        });
    }

    openBallDetailModal(ballId) {
        const ball = BALL_CATALOG.find(b => b.id === ballId);
        if (!ball || !this.modalBallDetail) return;

        this.selectedDetailBallId = ballId;
        const isUnlocked = this.unlockedBallIds.includes(ballId);
        const inDeckIdx = this.playerDeckIds.indexOf(ballId);

        if (this.detailBallName) this.detailBallName.textContent = ball.name;
        if (this.detailRarityPill) {
            this.detailRarityPill.textContent = ball.rarity;
            this.detailRarityPill.style.color = this.getRarityColor(ball.rarity);
        }

        if (this.detailDeckTag) {
            if (inDeckIdx !== -1) {
                this.detailDeckTag.textContent = `В БОЕВОЙ КОЛОДЕ: СЛОТ ${inDeckIdx + 1}`;
                this.detailDeckTag.classList.remove('hidden');
            } else {
                this.detailDeckTag.classList.add('hidden');
            }
        }

        if (this.detailBallCanvas) {
            renderBallPreview(this.detailBallCanvas, ball.id, 32);
        }

        // Заполнение характеристик с реальными сбалансированными значениями
        if (this.detailHpVal) this.detailHpVal.textContent = `${ball.maxHp} HP`;
        if (this.detailHpBar) {
            const pct = Math.min(Math.round((ball.maxHp / 140) * 100), 100);
            this.detailHpBar.style.width = `${pct}%`;
        }

        if (this.detailAtkVal) this.detailAtkVal.textContent = ball.baseDamage;
        if (this.detailAtkBar) {
            const pct = Math.min(Math.round((ball.baseDamage / 12) * 100), 100);
            this.detailAtkBar.style.width = `${pct}%`;
        }

        if (this.detailSpdVal) this.detailSpdVal.textContent = ball.speed.toFixed(1);
        if (this.detailSpdBar) {
            const pct = Math.min(Math.round((ball.speed / 3.4) * 100), 100);
            this.detailSpdBar.style.width = `${pct}%`;
        }

        if (this.detailMassVal) this.detailMassVal.textContent = ball.mass.toFixed(1);
        if (this.detailMassBar) {
            const pct = Math.min(Math.round((ball.mass / 2.0) * 100), 100);
            this.detailMassBar.style.width = `${pct}%`;
        }

        // Способность
        if (this.detailAbilityName) this.detailAbilityName.textContent = ball.abilityName;
        if (this.detailAbilityDesc) this.detailAbilityDesc.textContent = ball.abilityDesc;

        // Подсветка активного слота на кнопках экипировки
        if (this.btnEquipSlots) {
            this.btnEquipSlots.forEach(btn => {
                const s = parseInt(btn.getAttribute('data-slot'));
                btn.classList.toggle('active-equipped', s === inDeckIdx);
            });
        }

        // Действия (экипировка или переход в кейсы)
        if (isUnlocked) {
            if (this.detailUnlockedActions) this.detailUnlockedActions.classList.remove('hidden');
            if (this.detailLockedActions) this.detailLockedActions.classList.add('hidden');
        } else {
            if (this.detailUnlockedActions) this.detailUnlockedActions.classList.add('hidden');
            if (this.detailLockedActions) this.detailLockedActions.classList.remove('hidden');
        }

        this.modalBallDetail.classList.remove('hidden');
        sounds.playAbility();

        // Запуск живой демонстрации способности
        if (this.abilityPreview) {
            this.abilityPreview.start(ballId);
        }
    }

    closeBallDetailModal() {
        if (this.abilityPreview) {
            this.abilityPreview.stop();
        }
        if (this.modalBallDetail) {
            this.modalBallDetail.classList.add('hidden');
        }
    }

    ensureUniqueDeck() {
        if (!Array.isArray(this.playerDeckIds)) {
            this.playerDeckIds = ['blaze', 'spike', 'frosty', 'tesla', 'titan'];
        }
        const seen = new Set();
        const unique = [];
        for (const id of this.playerDeckIds) {
            if (id && !seen.has(id) && BALL_CATALOG.some(b => b.id === id)) {
                seen.add(id);
                unique.push(id);
            }
        }
        // Заполняем недостающие до 5 слотов уникальными открытыми шарами
        const available = (this.unlockedBallIds && this.unlockedBallIds.length > 0)
            ? this.unlockedBallIds
            : BALL_CATALOG.map(b => b.id);

        for (const id of available) {
            if (unique.length >= 5) break;
            if (!seen.has(id)) {
                seen.add(id);
                unique.push(id);
            }
        }
        for (const b of BALL_CATALOG) {
            if (unique.length >= 5) break;
            if (!seen.has(b.id)) {
                seen.add(b.id);
                unique.push(b.id);
            }
        }
        this.playerDeckIds = unique.slice(0, 5);
        this.savePlayerDeck();
    }

    rollOpponentBallTemplate() {
        // Больше шанс на выпадение редких (45%) и эпических (35%), меньше на легендарные (6%), мифики (2%) и обычные (12%)
        const roll = Math.random() * 100;
        let chosenRarity;
        if (roll < 45) {
            chosenRarity = 'RARE'; // 45%
        } else if (roll < 80) {
            chosenRarity = 'EPIC'; // 35%
        } else if (roll < 92) {
            chosenRarity = 'COMMON'; // 12%
        } else if (roll < 98) {
            chosenRarity = 'LEGENDARY'; // 6%
        } else {
            chosenRarity = 'MYTHIC'; // 2%
        }

        const pool = BALL_CATALOG.filter(b => b.rarity === chosenRarity);
        if (pool.length > 0) {
            return pool[Math.floor(Math.random() * pool.length)];
        }
        return BALL_CATALOG[Math.floor(Math.random() * BALL_CATALOG.length)];
    }

    equipBallToDeck(ballId, slotIndex) {
        if (slotIndex < 0 || slotIndex > 4) return;
        
        const existingIdx = this.playerDeckIds.indexOf(ballId);
        if (existingIdx !== -1) {
            if (existingIdx === slotIndex) {
                return; // Уже находится в этом слоте
            }
            // Шар уже в другом слоте -> МЕНЯЕМ ИХ МЕСТАМИ (SWAP), исключая появление дубликатов!
            const displacedBall = this.playerDeckIds[slotIndex];
            this.playerDeckIds[slotIndex] = ballId;
            this.playerDeckIds[existingIdx] = displacedBall;
        } else {
            this.playerDeckIds[slotIndex] = ballId;
        }

        this.ensureUniqueDeck();
        this.savePlayerDeck();
        sounds.playLaunch();
        this.renderInventoryDeck();
        this.renderInventoryGrid();
        if (this.modalBallDetail && !this.modalBallDetail.classList.contains('hidden')) {
            this.openBallDetailModal(ballId);
        }
    }

    savePlayerDeck() {
        localStorage.setItem('player_deck', JSON.stringify(this.playerDeckIds));
    }

    // =========================================================================
    // СИСТЕМА МАГАЗИНА, ДОНАТА И ЭКСКЛЮЗИВОВ (SHOP & DONATE)
    // =========================================================================

    initShop() {
        // 1. Вкладки магазина
        const tabBtns = document.querySelectorAll('.shop-tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const targetId = btn.dataset.tab;
                document.querySelectorAll('.shop-tab-content').forEach(c => c.classList.remove('active'));
                const targetContent = document.getElementById(targetId);
                if (targetContent) targetContent.classList.add('active');
                sounds.playLaunch();
                if (targetId === 'shop-tab-daily') {
                    this.renderDailyBall();
                }
            });
        });

        // 2. Ежедневный подарок 15 кристаллов
        const btnDailyGift = document.getElementById('btn-claim-daily-gift');
        if (btnDailyGift) {
            btnDailyGift.addEventListener('click', () => {
                const now = Date.now();
                const oneDay = 24 * 60 * 60 * 1000;
                if (now - this.lastDailyGiftTime < oneDay) return;

                this.lastDailyGiftTime = now;
                localStorage.setItem('last_daily_gift_time', now);
                this.gems += 15;
                this.saveCurrencies();
                sounds.playPurchase();
                this.particles.addSparks(window.innerWidth / 2, window.innerHeight / 2, '#38bdf8', 25, 4.0);
                this.showSuccessModal('ПОДАРОК ДНЯ ПОЛУЧЕН!', 'Вам успешно начислено: +15 💎 Кристаллов! Приходите снова через 24 часа.');
                this.updateDailyGiftState();
            });
        }

        // 3. Покупка Паков (Стартер Пак, VIP, Мега-набор Бездны)
        const packButtons = document.querySelectorAll('.btn-buy-pack');
        packButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const packType = btn.dataset.pack;
                const price = btn.dataset.price;
                const name = btn.dataset.name;
                this.openCheckoutModal({
                    type: 'pack',
                    id: packType,
                    name: name,
                    desc: packType === 'starter' ? '600 Монет + 120 Кристаллов + Шар «Титан»' : '3,000 Монет + 700 Кристаллов + Кейс Бездны + Шар «Атом»',
                    price: price,
                    icon: packType === 'starter' ? 'assets/icons/chest_gold.svg' : 'assets/icons/case_void_black.svg'
                });
            });
        });

        // VIP кнопка
        const btnVip = document.getElementById('btn-buy-vip');
        if (btnVip) {
            btnVip.addEventListener('click', () => {
                if (this.isVip) return;
                this.openCheckoutModal({
                    type: 'pack',
                    id: 'vip',
                    name: 'VIP Боевой Пропуск',
                    desc: 'Постоянный статус VIP: +50% монет за бой, 250 гемов и шар «Сюрикен»',
                    price: '299 Ян',
                    icon: 'assets/icons/badge_vip.svg'
                });
            });
        }

        // 4. Донатные кейсы - Осмотр пула и покупка
        const inspectDonateBtns = document.querySelectorAll('.btn-inspect-donate');
        inspectDonateBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const caseId = btn.dataset.caseId;
                this.openCaseInspectModal(caseId);
            });
        });

        const donateCaseCards = document.querySelectorAll('.donate-case-card');
        donateCaseCards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('button')) return;
                const caseId = card.dataset.donateCase;
                this.openCaseInspectModal(caseId);
            });
        });

        if (this.btnProceedOpenDonateYan) {
            this.btnProceedOpenDonateYan.addEventListener('click', () => {
                if (!this.currentInspectedCase) return;
                const cfg = this.currentInspectedCase;
                this.closeCaseFlowModal();
                this.openCheckoutModal({
                    type: 'donate_case',
                    caseId: cfg.id,
                    name: cfg.name,
                    desc: 'Эксклюзивный донат-кейс',
                    price: `${cfg.costYan} Ян`,
                    icon: cfg.img
                });
            });
        }

        // При клике на цену донат-кейса открываем окно осмотра содержимого кейса (как в гаче)
        const donateCaseButtons = document.querySelectorAll('.btn-shop-buy-case');
        donateCaseButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const caseId = btn.dataset.caseId;
                this.openCaseInspectModal(caseId);
            });
        });

        // 5. Покупка кристаллов за Яны
        const gemButtons = document.querySelectorAll('.btn-buy-gems');
        gemButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const gems = parseInt(btn.dataset.gems, 10);
                const price = btn.dataset.price;
                const name = btn.dataset.name;
                this.openCheckoutModal({
                    type: 'gems',
                    gems: gems,
                    name: name,
                    desc: 'Мгновенное зачисление кристаллов через Яндекс Игры',
                    price: price,
                    icon: 'assets/icons/gems_pile.svg'
                });
            });
        });

        // 6. Обменник золота за кристаллы
        const goldExchangeButtons = document.querySelectorAll('.btn-exchange-gold');
        goldExchangeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const costGems = parseInt(btn.dataset.cost, 10);
                const rewardCoins = parseInt(btn.dataset.coins, 10);

                if (this.gems < costGems) {
                    sounds.playDefeat();
                    this.showToast(`Недостаточно кристаллов! Требуется: ${costGems} 💎 (у вас: ${this.gems} 💎).`);
                    const gemsTabBtn = document.querySelector('.shop-tab-btn[data-tab="shop-tab-gems"]');
                    if (gemsTabBtn) gemsTabBtn.click();
                    return;
                }

                this.gems -= costGems;
                this.coins += rewardCoins;
                this.saveCurrencies();
                this.updateCurrenciesUI();
                sounds.playPurchase();
                this.particles.addSparks(window.innerWidth / 2, window.innerHeight / 2, '#fbbf24', 20, 3.5);
                this.showSuccessModal('ОБМЕН УСПЕШЕН!', `Вы получили +${rewardCoins} 🪙 Монет за ${costGems} 💎!`);
            });
        });

        // 7. Покупка Шар Дня
        const btnBuyDailyBall = document.getElementById('btn-buy-daily-ball');
        if (btnBuyDailyBall) {
            btnBuyDailyBall.addEventListener('click', () => {
                const ballId = this.dailyBallId || 'phantom';
                if (this.unlockedBallIds.includes(ballId)) return;

                const cost = 120;
                if (this.gems < cost) {
                    sounds.playDefeat();
                    this.showToast(`Недостаточно кристаллов! Требуется: ${cost} 💎 (у вас: ${this.gems} 💎).`);
                    const gemsTabBtn = document.querySelector('.shop-tab-btn[data-tab="shop-tab-gems"]');
                    if (gemsTabBtn) gemsTabBtn.click();
                    return;
                }

                this.gems -= cost;
                this.unlockedBallIds.push(ballId);
                localStorage.setItem('unlocked_balls', JSON.stringify(this.unlockedBallIds));
                this.saveCurrencies();
                this.updateCurrenciesUI();
                sounds.playPurchase();
                this.updateCollectionBadge();
                this.renderDailyBall();
                const ball = BALL_CATALOG.find(b => b.id === ballId);
                this.showSuccessModal('ШАР ДНЯ РАЗБЛОКИРОВАН!', `Легендарный шар «${ball ? ball.name : 'Шар'}» теперь в вашей коллекции!`);
            });
        }

        // 8. Модалка оплаты (Яндекс Игры)
        const btnCloseCheckout = document.getElementById('btn-close-checkout');
        const btnCancelCheckout = document.getElementById('btn-cancel-checkout');
        if (btnCloseCheckout) btnCloseCheckout.addEventListener('click', () => this.closeCheckoutModal());
        if (btnCancelCheckout) btnCancelCheckout.addEventListener('click', () => this.closeCheckoutModal());

        const btnConfirmPay = document.getElementById('btn-confirm-payment');
        if (btnConfirmPay) {
            btnConfirmPay.addEventListener('click', () => {
                this.executePayment();
            });
        }

        // 9. Модалка успешной покупки
        const btnCloseSuccess = document.getElementById('btn-close-success');
        if (btnCloseSuccess) {
            btnCloseSuccess.addEventListener('click', () => {
                const modal = document.getElementById('shop-success-modal');
                if (modal) modal.classList.add('hidden');
            });
        }

        // Таймер обратного отсчета для ежедневных предложений
        setInterval(() => {
            this.updateShopTimers();
        }, 1000);
        this.updateShopTimers();
    }

    renderShop() {
        this.updateDailyGiftState();

        // 1. Стартер Пак
        const cvsStarter = document.getElementById('starter-ball-canvas');
        if (cvsStarter) renderBallPreview(cvsStarter, 'titan', 18);
        const cardStarter = document.getElementById('card-starter-pack');
        if (cardStarter && this.starterPackBought) {
            const btn = cardStarter.querySelector('.btn-buy-pack');
            if (btn) {
                btn.disabled = true;
                btn.innerHTML = '<span>КУПЛЕНО ✓</span>';
                btn.style.background = '#1e293b';
                btn.style.color = '#64748b';
            }
        }

        // 2. VIP Пак
        const cardVip = document.getElementById('card-vip-pack');
        if (cardVip && this.isVip) {
            const btn = document.getElementById('btn-buy-vip');
            if (btn) {
                btn.disabled = true;
                btn.innerHTML = '<span>VIP АКТИВЕН 👑</span>';
                btn.style.background = '#1e293b';
                btn.style.color = '#fbbf24';
            }
        }

        // 3. Мега Пак Бездны
        const cvsAbyss = document.getElementById('abyss-ball-canvas');
        if (cvsAbyss) renderBallPreview(cvsAbyss, 'nuke', 18);

        // 4. Шар дня
        this.renderDailyBall();
    }

    updateDailyGiftState() {
        const btn = document.getElementById('btn-claim-daily-gift');
        const timerWrap = document.getElementById('daily-gift-timer');
        const countdownEl = document.getElementById('daily-gift-countdown');
        if (!btn || !timerWrap || !countdownEl) return;

        const now = Date.now();
        const oneDay = 24 * 60 * 60 * 1000;
        const diff = now - this.lastDailyGiftTime;

        if (diff >= oneDay) {
            btn.disabled = false;
            btn.innerHTML = '<span>ЗАБРАТЬ 15 💎</span>';
            timerWrap.classList.add('hidden');
        } else {
            btn.disabled = true;
            btn.innerHTML = '<span>ПОЛУЧЕНО ✓</span>';
            timerWrap.classList.remove('hidden');

            const remainingMs = oneDay - diff;
            const h = Math.floor(remainingMs / (1000 * 60 * 60));
            const m = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((remainingMs % (1000 * 60)) / 1000);
            countdownEl.textContent = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }
    }

    updateShopTimers() {
        this.updateDailyGiftState();

        const dailyCountdown = document.getElementById('daily-ball-countdown');
        if (dailyCountdown) {
            const now = new Date();
            const midnight = new Date();
            midnight.setHours(24, 0, 0, 0);
            const diff = midnight - now;
            const h = Math.floor(diff / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);
            dailyCountdown.textContent = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }
    }

    renderDailyBall() {
        const ballId = this.dailyBallId || 'phantom';
        const ball = BALL_CATALOG.find(b => b.id === ballId) || BALL_CATALOG[21];
        const cvs = document.getElementById('daily-featured-ball-canvas');
        if (cvs && ball) renderBallPreview(cvs, ball.id, 38);

        const nameEl = document.getElementById('daily-ball-name');
        const descEl = document.getElementById('daily-ball-desc');
        const rarityEl = document.getElementById('daily-ball-rarity');
        const btn = document.getElementById('btn-buy-daily-ball');

        if (nameEl && ball) nameEl.textContent = ball.name;
        if (descEl && ball) descEl.textContent = ball.abilityDesc;
        if (rarityEl && ball) {
            rarityEl.textContent = ball.rarity;
            rarityEl.style.color = this.getRarityColor(ball.rarity);
        }

        if (btn) {
            if (this.unlockedBallIds.includes(ball.id)) {
                btn.disabled = true;
                btn.innerHTML = '<span>В КОЛЛЕКЦИИ ✓</span>';
                btn.style.background = '#1e293b';
                btn.style.color = '#34c759';
            } else {
                btn.disabled = false;
                btn.innerHTML = '<span>КУПИТЬ ЗА 120 💎</span>';
                btn.style.background = '';
                btn.style.color = '';
            }
        }
    }

    openCheckoutModal(item) {
        this.currentPendingCheckout = item;
        const modal = document.getElementById('shop-checkout-modal');
        if (!modal) return;

        const nameEl = document.getElementById('checkout-item-name');
        const descEl = document.getElementById('checkout-item-desc');
        const priceEl = document.getElementById('checkout-item-price');
        const btnPriceEl = document.getElementById('checkout-btn-price');
        const iconWrap = document.getElementById('checkout-item-icon');

        if (nameEl) nameEl.textContent = item.name;
        if (descEl) descEl.textContent = item.desc;
        if (priceEl) priceEl.textContent = item.price;
        if (btnPriceEl) btnPriceEl.textContent = item.price;
        if (iconWrap && item.icon) {
            iconWrap.innerHTML = `<img src="${item.icon}" alt="Item">`;
        }

        const statusArea = document.getElementById('checkout-status-area');
        if (statusArea) statusArea.classList.add('hidden');
        const actionsRow = document.getElementById('checkout-actions-row');
        if (actionsRow) actionsRow.classList.remove('hidden');

        sounds.playLaunch();
        modal.classList.remove('hidden');
    }

    closeCheckoutModal() {
        const modal = document.getElementById('shop-checkout-modal');
        if (modal) modal.classList.add('hidden');
        this.currentPendingCheckout = null;
    }

    executePayment() {
        if (!this.currentPendingCheckout) return;
        const item = this.currentPendingCheckout;

        const statusArea = document.getElementById('checkout-status-area');
        const actionsRow = document.getElementById('checkout-actions-row');
        const statusText = document.getElementById('checkout-status-text');

        if (statusArea) statusArea.classList.remove('hidden');
        if (actionsRow) actionsRow.classList.add('hidden');
        if (statusText) statusText.textContent = 'Обработка покупки в Яндекс Играх...';

        const finalizePurchase = () => {
            if (statusArea) statusArea.classList.add('hidden');
            if (actionsRow) actionsRow.classList.remove('hidden');
            this.closeCheckoutModal();
            sounds.playPurchase();

            if (item.type === 'gems') {
                this.gems += item.gems;
                this.saveCurrencies();
                this.updateCurrenciesUI();
                this.showSuccessModal('ПОКУПКА УСПЕШНА!', `На ваш аккаунт зачислено: +${item.gems} 💎 Кристаллов!`);
            } else if (item.type === 'pack') {
                if (item.id === 'starter') {
                    this.coins += 600;
                    this.gems += 120;
                    if (!this.unlockedBallIds.includes('titan')) {
                        this.unlockedBallIds.push('titan');
                        localStorage.setItem('unlocked_balls', JSON.stringify(this.unlockedBallIds));
                        this.updateCollectionBadge();
                    }
                    this.starterPackBought = true;
                    localStorage.setItem('starter_pack_bought', 'true');
                    this.saveCurrencies();
                    this.updateCurrenciesUI();
                    this.renderShop();
                    this.showSuccessModal('СТАРТЕР ПАК АКТИВИРОВАН!', 'Начислено: +600 🪙 Монет, +120 💎 Кристаллов и Эпический Шар «Титан»!');
                } else if (item.id === 'vip') {
                    this.isVip = true;
                    localStorage.setItem('ball_is_vip', 'true');
                    this.gems += 250;
                    if (!this.unlockedBallIds.includes('ninja')) {
                        this.unlockedBallIds.push('ninja');
                        localStorage.setItem('unlocked_balls', JSON.stringify(this.unlockedBallIds));
                        this.updateCollectionBadge();
                    }
                    this.saveCurrencies();
                    this.updateCurrenciesUI();
                    this.renderShop();
                    this.showSuccessModal('VIP ПРЕМИУМ АКТИВИРОВАН!', 'Поздравляем! Вам начислено +250 💎 Кристаллов, Легендарный шар «Сюрикен» и постоянный бонус +50% монет за все бои!');
                } else if (item.id === 'abyss') {
                    this.coins += 3000;
                    this.gems += 700;
                    if (!this.unlockedBallIds.includes('nuke')) {
                        this.unlockedBallIds.push('nuke');
                        localStorage.setItem('unlocked_balls', JSON.stringify(this.unlockedBallIds));
                        this.updateCollectionBadge();
                    }
                    this.saveCurrencies();
                    this.updateCurrenciesUI();
                    this.renderShop();
                    this.currentInspectedCase = CASE_CONFIGS['void_black'];
                    this.startCaseRouletteSpin(CASE_CONFIGS['void_black']);
                }
            } else if (item.type === 'donate_case') {
                const cfg = CASE_CONFIGS[item.caseId] || CASE_CONFIGS['void_black'];
                this.currentInspectedCase = cfg;
                this.startCaseRouletteSpin(cfg);
            }
        };

        if (window.ysdk && window.ysdk.payments) {
            window.ysdk.payments.purchase({ id: item.id || item.type })
                .then(() => finalizePurchase())
                .catch(err => {
                    if (statusArea) statusArea.classList.add('hidden');
                    if (actionsRow) actionsRow.classList.remove('hidden');
                    console.warn('Yandex purchase canceled:', err);
                });
        } else {
            setTimeout(finalizePurchase, 450);
        }
    }

    showSuccessModal(title, desc) {
        const modal = document.getElementById('shop-success-modal');
        if (!modal) return;
        const titleEl = document.getElementById('success-modal-title');
        const descEl = document.getElementById('success-modal-desc');
        if (titleEl) titleEl.textContent = title;
        if (descEl) descEl.textContent = desc;
        modal.classList.remove('hidden');
    }

    showToast(msg) {
        let toast = document.getElementById('game-toast-notice');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'game-toast-notice';
            toast.style.cssText = 'position:fixed; bottom:24px; left:50%; transform:translateX(-50%); background:#181820; border:1px solid #3b3b4d; color:#ffffff; padding:10px 18px; border-radius:8px; font-size:12px; font-weight:800; z-index:99999; box-shadow:0 8px 24px rgba(0,0,0,0.8); pointer-events:none; transition:opacity 0.2s;';
            document.body.appendChild(toast);
        }
        toast.textContent = msg;
        toast.style.opacity = '1';
        clearTimeout(this._toastTimer);
        this._toastTimer = setTimeout(() => {
            if (toast) toast.style.opacity = '0';
        }, 2200);
    }

}
