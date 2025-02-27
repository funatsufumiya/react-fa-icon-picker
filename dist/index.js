Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var styled = _interopDefault(require('styled-components'));
var FontIcon = require('react-icons/fa');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var IconPicker = function (_a) {
    var value = _a.value, onChange = _a.onChange, hideSearch = _a.hideSearch, containerStyles = _a.containerStyles, buttonStyles = _a.buttonStyles, buttonIconStyles = _a.buttonIconStyles, pickerIconStyles = _a.pickerIconStyles, searchInputStyles = _a.searchInputStyles;
    var ref = React.useRef(null);
    var _b = React.useState(false), display = _b[0], changeDisplay = _b[1];
    var _c = React.useState(''), searchString = _c[0], setSearchString = _c[1];
    React.useEffect(function () {
        function handleClickOutside(event) {
            // @ts-ignore
            if (ref.current && !ref.current.contains(event.target)) {
                changeDisplay(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
    var buttonClick = function () { return changeDisplay(!display); };
    var onChangeSearch = function (event) {
        setSearchString(event.target.value);
    };
    return (React.createElement(Container, { style: buttonStyles, ref: ref, onClick: function () { return buttonClick(); } },
        React.createElement(IconPickerItem, { containerStyles: buttonIconStyles, icon: value }),
        display && (React.createElement(PickerContainer, { style: containerStyles, onClick: function (e) { return e.stopPropagation(); } },
            !hideSearch && (React.createElement(AppInput, { style: searchInputStyles, onChange: onChangeSearch, value: searchString, placeholder: "Search" })),
            iconList
                .filter(function (i) {
                return i.toLowerCase().includes(searchString.toLowerCase());
            })
                .map(function (icon) { return (React.createElement(IconPickerItem, { key: icon, icon: icon, containerStyles: pickerIconStyles, onClick: function (value) {
                    onChange(value);
                    changeDisplay(false);
                    setSearchString('');
                } })); })))));
};
IconPicker.defaultProps = {
    hideSearch: false,
};
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  padding: 5px;\n  width: 50px;\n  min-height: 40px;\n  border-radius: 4px;\n  border-width: 1px;\n  border-color: #000;\n  border-style: solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  position: relative;\n  padding: 5px;\n  width: 50px;\n  min-height: 40px;\n  border-radius: 4px;\n  border-width: 1px;\n  border-color: #000;\n  border-style: solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  :hover {\n    cursor: pointer;\n  }\n"])));
var PickerContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 45px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  background-color: #fff;\n  padding: 5px;\n  width: 200px;\n  max-height: 300px;\n  border-radius: 4px;\n  border-width: 2px;\n  border-color: #000;\n  border-style: solid;\n  z-index: 10;\n"], ["\n  position: absolute;\n  top: 45px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  background-color: #fff;\n  padding: 5px;\n  width: 200px;\n  max-height: 300px;\n  border-radius: 4px;\n  border-width: 2px;\n  border-color: #000;\n  border-style: solid;\n  z-index: 10;\n"])));
var AppInput = styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var templateObject_1, templateObject_2, templateObject_3;

var IconPickerItem = function (_a) {
    var icon = _a.icon, size = _a.size, color = _a.color, onClick = _a.onClick, containerStyles = _a.containerStyles;
    var iconDiv = !!icon ? React.createElement(FontIcon[icon]) : React.createElement("div", null);
    return (React.createElement("div", { onClick: function () { return !!onClick && onClick(icon); }, style: __assign({ fontSize: size, color: color, padding: 2 }, containerStyles) }, iconDiv));
};
IconPickerItem.defaultProps = {
    color: '#000',
    size: 24,
    onClick: function (_) { },
};

var iconList = [
    'Fa500Px',
    'FaAccessibleIcon',
    'FaAccusoft',
    'FaAcquisitionsIncorporated',
    'FaAdn',
    'FaAdobe',
    'FaAdversal',
    'FaAffiliatetheme',
    'FaAirbnb',
    'FaAlgolia',
    'FaAlipay',
    'FaAmazonPay',
    'FaAmazon',
    'FaAmilia',
    'FaAndroid',
    'FaAngellist',
    'FaAngrycreative',
    'FaAngular',
    'FaAppStoreIos',
    'FaAppStore',
    'FaApper',
    'FaApplePay',
    'FaApple',
    'FaArtstation',
    'FaAsymmetrik',
    'FaAtlassian',
    'FaAudible',
    'FaAutoprefixer',
    'FaAvianex',
    'FaAviato',
    'FaAws',
    'FaBandcamp',
    'FaBattleNet',
    'FaBehanceSquare',
    'FaBehance',
    'FaBimobject',
    'FaBitbucket',
    'FaBitcoin',
    'FaBity',
    'FaBlackTie',
    'FaBlackberry',
    'FaBloggerB',
    'FaBlogger',
    'FaBluetoothB',
    'FaBluetooth',
    'FaBootstrap',
    'FaBtc',
    'FaBuffer',
    'FaBuromobelexperte',
    'FaBuyNLarge',
    'FaBuysellads',
    'FaCanadianMapleLeaf',
    'FaCcAmazonPay',
    'FaCcAmex',
    'FaCcApplePay',
    'FaCcDinersClub',
    'FaCcDiscover',
    'FaCcJcb',
    'FaCcMastercard',
    'FaCcPaypal',
    'FaCcStripe',
    'FaCcVisa',
    'FaCentercode',
    'FaCentos',
    'FaChrome',
    'FaChromecast',
    'FaCloudscale',
    'FaCloudsmith',
    'FaCloudversify',
    'FaCodepen',
    'FaCodiepie',
    'FaConfluence',
    'FaConnectdevelop',
    'FaContao',
    'FaCottonBureau',
    'FaCpanel',
    'FaCreativeCommonsBy',
    'FaCreativeCommonsNcEu',
    'FaCreativeCommonsNcJp',
    'FaCreativeCommonsNc',
    'FaCreativeCommonsNd',
    'FaCreativeCommonsPdAlt',
    'FaCreativeCommonsPd',
    'FaCreativeCommonsRemix',
    'FaCreativeCommonsSa',
    'FaCreativeCommonsSamplingPlus',
    'FaCreativeCommonsSampling',
    'FaCreativeCommonsShare',
    'FaCreativeCommonsZero',
    'FaCreativeCommons',
    'FaCriticalRole',
    'FaCss3Alt',
    'FaCss3',
    'FaCuttlefish',
    'FaDAndDBeyond',
    'FaDAndD',
    'FaDailymotion',
    'FaDashcube',
    'FaDelicious',
    'FaDeploydog',
    'FaDeskpro',
    'FaDev',
    'FaDeviantart',
    'FaDhl',
    'FaDiaspora',
    'FaDigg',
    'FaDigitalOcean',
    'FaDiscord',
    'FaDiscourse',
    'FaDochub',
    'FaDocker',
    'FaDraft2Digital',
    'FaDribbbleSquare',
    'FaDribbble',
    'FaDropbox',
    'FaDrupal',
    'FaDyalog',
    'FaEarlybirds',
    'FaEbay',
    'FaEdge',
    'FaElementor',
    'FaEllo',
    'FaEmber',
    'FaEmpire',
    'FaEnvira',
    'FaErlang',
    'FaEthereum',
    'FaEtsy',
    'FaEvernote',
    'FaExpeditedssl',
    'FaFacebookF',
    'FaFacebookMessenger',
    'FaFacebookSquare',
    'FaFacebook',
    'FaFantasyFlightGames',
    'FaFedex',
    'FaFedora',
    'FaFigma',
    'FaFirefoxBrowser',
    'FaFirefox',
    'FaFirstOrderAlt',
    'FaFirstOrder',
    'FaFirstdraft',
    'FaFlickr',
    'FaFlipboard',
    'FaFly',
    'FaFontAwesomeAlt',
    'FaFontAwesomeFlag',
    'FaFontAwesomeLogoFull',
    'FaFontAwesome',
    'FaFonticonsFi',
    'FaFonticons',
    'FaFortAwesomeAlt',
    'FaFortAwesome',
    'FaForumbee',
    'FaFoursquare',
    'FaFreeCodeCamp',
    'FaFreebsd',
    'FaFulcrum',
    'FaGalacticRepublic',
    'FaGalacticSenate',
    'FaGetPocket',
    'FaGgCircle',
    'FaGg',
    'FaGitAlt',
    'FaGitSquare',
    'FaGit',
    'FaGithubAlt',
    'FaGithubSquare',
    'FaGithub',
    'FaGitkraken',
    'FaGitlab',
    'FaGitter',
    'FaGlideG',
    'FaGlide',
    'FaGofore',
    'FaGoodreadsG',
    'FaGoodreads',
    'FaGoogleDrive',
    'FaGooglePlay',
    'FaGooglePlusG',
    'FaGooglePlusSquare',
    'FaGooglePlus',
    'FaGoogleWallet',
    'FaGoogle',
    'FaGratipay',
    'FaGrav',
    'FaGripfire',
    'FaGrunt',
    'FaGulp',
    'FaHackerNewsSquare',
    'FaHackerNews',
    'FaHackerrank',
    'FaHips',
    'FaHireAHelper',
    'FaHooli',
    'FaHornbill',
    'FaHotjar',
    'FaHouzz',
    'FaHtml5',
    'FaHubspot',
    'FaIdeal',
    'FaImdb',
    'FaInstagramSquare',
    'FaInstagram',
    'FaIntercom',
    'FaInternetExplorer',
    'FaInvision',
    'FaIoxhost',
    'FaItchIo',
    'FaItunesNote',
    'FaItunes',
    'FaJava',
    'FaJediOrder',
    'FaJenkins',
    'FaJira',
    'FaJoget',
    'FaJoomla',
    'FaJsSquare',
    'FaJs',
    'FaJsfiddle',
    'FaKaggle',
    'FaKeybase',
    'FaKeycdn',
    'FaKickstarterK',
    'FaKickstarter',
    'FaKorvue',
    'FaLaravel',
    'FaLastfmSquare',
    'FaLastfm',
    'FaLeanpub',
    'FaLess',
    'FaLine',
    'FaLinkedinIn',
    'FaLinkedin',
    'FaLinode',
    'FaLinux',
    'FaLyft',
    'FaMagento',
    'FaMailchimp',
    'FaMandalorian',
    'FaMarkdown',
    'FaMastodon',
    'FaMaxcdn',
    'FaMdb',
    'FaMedapps',
    'FaMediumM',
    'FaMedium',
    'FaMedrt',
    'FaMeetup',
    'FaMegaport',
    'FaMendeley',
    'FaMicroblog',
    'FaMicrosoft',
    'FaMix',
    'FaMixcloud',
    'FaMixer',
    'FaMizuni',
    'FaModx',
    'FaMonero',
    'FaNapster',
    'FaNeos',
    'FaNimblr',
    'FaNodeJs',
    'FaNode',
    'FaNpm',
    'FaNs8',
    'FaNutritionix',
    'FaOdnoklassnikiSquare',
    'FaOdnoklassniki',
    'FaOldRepublic',
    'FaOpencart',
    'FaOpenid',
    'FaOpera',
    'FaOptinMonster',
    'FaOrcid',
    'FaOsi',
    'FaPage4',
    'FaPagelines',
    'FaPalfed',
    'FaPatreon',
    'FaPaypal',
    'FaPennyArcade',
    'FaPeriscope',
    'FaPhabricator',
    'FaPhoenixFramework',
    'FaPhoenixSquadron',
    'FaPhp',
    'FaPiedPiperAlt',
    'FaPiedPiperHat',
    'FaPiedPiperPp',
    'FaPiedPiperSquare',
    'FaPiedPiper',
    'FaPinterestP',
    'FaPinterestSquare',
    'FaPinterest',
    'FaPlaystation',
    'FaProductHunt',
    'FaPushed',
    'FaPython',
    'FaQq',
    'FaQuinscape',
    'FaQuora',
    'FaRProject',
    'FaRaspberryPi',
    'FaRavelry',
    'FaReact',
    'FaReacteurope',
    'FaReadme',
    'FaRebel',
    'FaRedRiver',
    'FaRedditAlien',
    'FaRedditSquare',
    'FaReddit',
    'FaRedhat',
    'FaRenren',
    'FaReplyd',
    'FaResearchgate',
    'FaResolving',
    'FaRev',
    'FaRocketchat',
    'FaRockrms',
    'FaSafari',
    'FaSalesforce',
    'FaSass',
    'FaSchlix',
    'FaScribd',
    'FaSearchengin',
    'FaSellcast',
    'FaSellsy',
    'FaServicestack',
    'FaShirtsinbulk',
    'FaShopify',
    'FaShopware',
    'FaSimplybuilt',
    'FaSistrix',
    'FaSith',
    'FaSketch',
    'FaSkyatlas',
    'FaSkype',
    'FaSlackHash',
    'FaSlack',
    'FaSlideshare',
    'FaSnapchatGhost',
    'FaSnapchatSquare',
    'FaSnapchat',
    'FaSoundcloud',
    'FaSourcetree',
    'FaSpeakap',
    'FaSpeakerDeck',
    'FaSpotify',
    'FaSquarespace',
    'FaStackExchange',
    'FaStackOverflow',
    'FaStackpath',
    'FaStaylinked',
    'FaSteamSquare',
    'FaSteamSymbol',
    'FaSteam',
    'FaStickerMule',
    'FaStrava',
    'FaStripeS',
    'FaStripe',
    'FaStudiovinari',
    'FaStumbleuponCircle',
    'FaStumbleupon',
    'FaSuperpowers',
    'FaSupple',
    'FaSuse',
    'FaSwift',
    'FaSymfony',
    'FaTeamspeak',
    'FaTelegramPlane',
    'FaTelegram',
    'FaTencentWeibo',
    'FaTheRedYeti',
    'FaThemeco',
    'FaThemeisle',
    'FaThinkPeaks',
    'FaTradeFederation',
    'FaTrello',
    'FaTripadvisor',
    'FaTumblrSquare',
    'FaTumblr',
    'FaTwitch',
    'FaTwitterSquare',
    'FaTwitter',
    'FaTypo3',
    'FaUber',
    'FaUbuntu',
    'FaUikit',
    'FaUmbraco',
    'FaUniregistry',
    'FaUnity',
    'FaUntappd',
    'FaUps',
    'FaUsb',
    'FaUsps',
    'FaUssunnah',
    'FaVaadin',
    'FaViacoin',
    'FaViadeoSquare',
    'FaViadeo',
    'FaViber',
    'FaVimeoSquare',
    'FaVimeoV',
    'FaVimeo',
    'FaVine',
    'FaVk',
    'FaVnv',
    'FaVuejs',
    'FaWaze',
    'FaWeebly',
    'FaWeibo',
    'FaWeixin',
    'FaWhatsappSquare',
    'FaWhatsapp',
    'FaWhmcs',
    'FaWikipediaW',
    'FaWindows',
    'FaWix',
    'FaWizardsOfTheCoast',
    'FaWolfPackBattalion',
    'FaWordpressSimple',
    'FaWordpress',
    'FaWpbeginner',
    'FaWpexplorer',
    'FaWpforms',
    'FaWpressr',
    'FaXbox',
    'FaXingSquare',
    'FaXing',
    'FaYCombinator',
    'FaYahoo',
    'FaYammer',
    'FaYandexInternational',
    'FaYandex',
    'FaYarn',
    'FaYelp',
    'FaYoast',
    'FaYoutubeSquare',
    'FaYoutube',
    'FaZhihu',
    'FaAd',
    'FaAddressBook',
    'FaAddressCard',
    'FaAdjust',
    'FaAirFreshener',
    'FaAlignCenter',
    'FaAlignJustify',
    'FaAlignLeft',
    'FaAlignRight',
    'FaAllergies',
    'FaAmbulance',
    'FaAmericanSignLanguageInterpreting',
    'FaAnchor',
    'FaAngleDoubleDown',
    'FaAngleDoubleLeft',
    'FaAngleDoubleRight',
    'FaAngleDoubleUp',
    'FaAngleDown',
    'FaAngleLeft',
    'FaAngleRight',
    'FaAngleUp',
    'FaAngry',
    'FaAnkh',
    'FaAppleAlt',
    'FaArchive',
    'FaArchway',
    'FaArrowAltCircleDown',
    'FaArrowAltCircleLeft',
    'FaArrowAltCircleRight',
    'FaArrowAltCircleUp',
    'FaArrowCircleDown',
    'FaArrowCircleLeft',
    'FaArrowCircleRight',
    'FaArrowCircleUp',
    'FaArrowDown',
    'FaArrowLeft',
    'FaArrowRight',
    'FaArrowUp',
    'FaArrowsAltH',
    'FaArrowsAltV',
    'FaArrowsAlt',
    'FaAssistiveListeningSystems',
    'FaAsterisk',
    'FaAt',
    'FaAtlas',
    'FaAtom',
    'FaAudioDescription',
    'FaAward',
    'FaBabyCarriage',
    'FaBaby',
    'FaBackspace',
    'FaBackward',
    'FaBacon',
    'FaBahai',
    'FaBalanceScaleLeft',
    'FaBalanceScaleRight',
    'FaBalanceScale',
    'FaBan',
    'FaBandAid',
    'FaBarcode',
    'FaBars',
    'FaBaseballBall',
    'FaBasketballBall',
    'FaBath',
    'FaBatteryEmpty',
    'FaBatteryFull',
    'FaBatteryHalf',
    'FaBatteryQuarter',
    'FaBatteryThreeQuarters',
    'FaBed',
    'FaBeer',
    'FaBellSlash',
    'FaBell',
    'FaBezierCurve',
    'FaBible',
    'FaBicycle',
    'FaBiking',
    'FaBinoculars',
    'FaBiohazard',
    'FaBirthdayCake',
    'FaBlenderPhone',
    'FaBlender',
    'FaBlind',
    'FaBlog',
    'FaBold',
    'FaBolt',
    'FaBomb',
    'FaBone',
    'FaBong',
    'FaBookDead',
    'FaBookMedical',
    'FaBookOpen',
    'FaBookReader',
    'FaBook',
    'FaBookmark',
    'FaBorderAll',
    'FaBorderNone',
    'FaBorderStyle',
    'FaBowlingBall',
    'FaBoxOpen',
    'FaBox',
    'FaBoxes',
    'FaBraille',
    'FaBrain',
    'FaBreadSlice',
    'FaBriefcaseMedical',
    'FaBriefcase',
    'FaBroadcastTower',
    'FaBroom',
    'FaBrush',
    'FaBug',
    'FaBuilding',
    'FaBullhorn',
    'FaBullseye',
    'FaBurn',
    'FaBusAlt',
    'FaBus',
    'FaBusinessTime',
    'FaCalculator',
    'FaCalendarAlt',
    'FaCalendarCheck',
    'FaCalendarDay',
    'FaCalendarMinus',
    'FaCalendarPlus',
    'FaCalendarTimes',
    'FaCalendarWeek',
    'FaCalendar',
    'FaCameraRetro',
    'FaCamera',
    'FaCampground',
    'FaCandyCane',
    'FaCannabis',
    'FaCapsules',
    'FaCarAlt',
    'FaCarBattery',
    'FaCarCrash',
    'FaCarSide',
    'FaCar',
    'FaCaravan',
    'FaCaretDown',
    'FaCaretLeft',
    'FaCaretRight',
    'FaCaretSquareDown',
    'FaCaretSquareLeft',
    'FaCaretSquareRight',
    'FaCaretSquareUp',
    'FaCaretUp',
    'FaCarrot',
    'FaCartArrowDown',
    'FaCartPlus',
    'FaCashRegister',
    'FaCat',
    'FaCertificate',
    'FaChair',
    'FaChalkboardTeacher',
    'FaChalkboard',
    'FaChargingStation',
    'FaChartArea',
    'FaChartBar',
    'FaChartLine',
    'FaChartPie',
    'FaCheckCircle',
    'FaCheckDouble',
    'FaCheckSquare',
    'FaCheck',
    'FaCheese',
    'FaChessBishop',
    'FaChessBoard',
    'FaChessKing',
    'FaChessKnight',
    'FaChessPawn',
    'FaChessQueen',
    'FaChessRook',
    'FaChess',
    'FaChevronCircleDown',
    'FaChevronCircleLeft',
    'FaChevronCircleRight',
    'FaChevronCircleUp',
    'FaChevronDown',
    'FaChevronLeft',
    'FaChevronRight',
    'FaChevronUp',
    'FaChild',
    'FaChurch',
    'FaCircleNotch',
    'FaCircle',
    'FaCity',
    'FaClinicMedical',
    'FaClipboardCheck',
    'FaClipboardList',
    'FaClipboard',
    'FaClock',
    'FaClone',
    'FaClosedCaptioning',
    'FaCloudDownloadAlt',
    'FaCloudMeatball',
    'FaCloudMoonRain',
    'FaCloudMoon',
    'FaCloudRain',
    'FaCloudShowersHeavy',
    'FaCloudSunRain',
    'FaCloudSun',
    'FaCloudUploadAlt',
    'FaCloud',
    'FaCocktail',
    'FaCodeBranch',
    'FaCode',
    'FaCoffee',
    'FaCog',
    'FaCogs',
    'FaCoins',
    'FaColumns',
    'FaCommentAlt',
    'FaCommentDollar',
    'FaCommentDots',
    'FaCommentMedical',
    'FaCommentSlash',
    'FaComment',
    'FaCommentsDollar',
    'FaComments',
    'FaCompactDisc',
    'FaCompass',
    'FaCompressAlt',
    'FaCompressArrowsAlt',
    'FaCompress',
    'FaConciergeBell',
    'FaCookieBite',
    'FaCookie',
    'FaCopy',
    'FaCopyright',
    'FaCouch',
    'FaCreditCard',
    'FaCropAlt',
    'FaCrop',
    'FaCross',
    'FaCrosshairs',
    'FaCrow',
    'FaCrown',
    'FaCrutch',
    'FaCube',
    'FaCubes',
    'FaCut',
    'FaDatabase',
    'FaDeaf',
    'FaDemocrat',
    'FaDesktop',
    'FaDharmachakra',
    'FaDiagnoses',
    'FaDiceD20',
    'FaDiceD6',
    'FaDiceFive',
    'FaDiceFour',
    'FaDiceOne',
    'FaDiceSix',
    'FaDiceThree',
    'FaDiceTwo',
    'FaDice',
    'FaDigitalTachograph',
    'FaDirections',
    'FaDivide',
    'FaDizzy',
    'FaDna',
    'FaDog',
    'FaDollarSign',
    'FaDollyFlatbed',
    'FaDolly',
    'FaDonate',
    'FaDoorClosed',
    'FaDoorOpen',
    'FaDotCircle',
    'FaDove',
    'FaDownload',
    'FaDraftingCompass',
    'FaDragon',
    'FaDrawPolygon',
    'FaDrumSteelpan',
    'FaDrum',
    'FaDrumstickBite',
    'FaDumbbell',
    'FaDumpsterFire',
    'FaDumpster',
    'FaDungeon',
    'FaEdit',
    'FaEgg',
    'FaEject',
    'FaEllipsisH',
    'FaEllipsisV',
    'FaEnvelopeOpenText',
    'FaEnvelopeOpen',
    'FaEnvelopeSquare',
    'FaEnvelope',
    'FaEquals',
    'FaEraser',
    'FaEthernet',
    'FaEuroSign',
    'FaExchangeAlt',
    'FaExclamationCircle',
    'FaExclamationTriangle',
    'FaExclamation',
    'FaExpandAlt',
    'FaExpandArrowsAlt',
    'FaExpand',
    'FaExternalLinkAlt',
    'FaExternalLinkSquareAlt',
    'FaEyeDropper',
    'FaEyeSlash',
    'FaEye',
    'FaFan',
    'FaFastBackward',
    'FaFastForward',
    'FaFax',
    'FaFeatherAlt',
    'FaFeather',
    'FaFemale',
    'FaFighterJet',
    'FaFileAlt',
    'FaFileArchive',
    'FaFileAudio',
    'FaFileCode',
    'FaFileContract',
    'FaFileCsv',
    'FaFileDownload',
    'FaFileExcel',
    'FaFileExport',
    'FaFileImage',
    'FaFileImport',
    'FaFileInvoiceDollar',
    'FaFileInvoice',
    'FaFileMedicalAlt',
    'FaFileMedical',
    'FaFilePdf',
    'FaFilePowerpoint',
    'FaFilePrescription',
    'FaFileSignature',
    'FaFileUpload',
    'FaFileVideo',
    'FaFileWord',
    'FaFile',
    'FaFillDrip',
    'FaFill',
    'FaFilm',
    'FaFilter',
    'FaFingerprint',
    'FaFireAlt',
    'FaFireExtinguisher',
    'FaFire',
    'FaFirstAid',
    'FaFish',
    'FaFistRaised',
    'FaFlagCheckered',
    'FaFlagUsa',
    'FaFlag',
    'FaFlask',
    'FaFlushed',
    'FaFolderMinus',
    'FaFolderOpen',
    'FaFolderPlus',
    'FaFolder',
    'FaFont',
    'FaFootballBall',
    'FaForward',
    'FaFrog',
    'FaFrownOpen',
    'FaFrown',
    'FaFunnelDollar',
    'FaFutbol',
    'FaGamepad',
    'FaGasPump',
    'FaGavel',
    'FaGem',
    'FaGenderless',
    'FaGhost',
    'FaGift',
    'FaGifts',
    'FaGlassCheers',
    'FaGlassMartiniAlt',
    'FaGlassMartini',
    'FaGlassWhiskey',
    'FaGlasses',
    'FaGlobeAfrica',
    'FaGlobeAmericas',
    'FaGlobeAsia',
    'FaGlobeEurope',
    'FaGlobe',
    'FaGolfBall',
    'FaGopuram',
    'FaGraduationCap',
    'FaGreaterThanEqual',
    'FaGreaterThan',
    'FaGrimace',
    'FaGrinAlt',
    'FaGrinBeamSweat',
    'FaGrinBeam',
    'FaGrinHearts',
    'FaGrinSquintTears',
    'FaGrinSquint',
    'FaGrinStars',
    'FaGrinTears',
    'FaGrinTongueSquint',
    'FaGrinTongueWink',
    'FaGrinTongue',
    'FaGrinWink',
    'FaGrin',
    'FaGripHorizontal',
    'FaGripLinesVertical',
    'FaGripLines',
    'FaGripVertical',
    'FaGuitar',
    'FaHSquare',
    'FaHamburger',
    'FaHammer',
    'FaHamsa',
    'FaHandHoldingHeart',
    'FaHandHoldingUsd',
    'FaHandHolding',
    'FaHandLizard',
    'FaHandMiddleFinger',
    'FaHandPaper',
    'FaHandPeace',
    'FaHandPointDown',
    'FaHandPointLeft',
    'FaHandPointRight',
    'FaHandPointUp',
    'FaHandPointer',
    'FaHandRock',
    'FaHandScissors',
    'FaHandSpock',
    'FaHandsHelping',
    'FaHands',
    'FaHandshake',
    'FaHanukiah',
    'FaHardHat',
    'FaHashtag',
    'FaHatCowboySide',
    'FaHatCowboy',
    'FaHatWizard',
    'FaHdd',
    'FaHeading',
    'FaHeadphonesAlt',
    'FaHeadphones',
    'FaHeadset',
    'FaHeartBroken',
    'FaHeart',
    'FaHeartbeat',
    'FaHelicopter',
    'FaHighlighter',
    'FaHiking',
    'FaHippo',
    'FaHistory',
    'FaHockeyPuck',
    'FaHollyBerry',
    'FaHome',
    'FaHorseHead',
    'FaHorse',
    'FaHospitalAlt',
    'FaHospitalSymbol',
    'FaHospital',
    'FaHotTub',
    'FaHotdog',
    'FaHotel',
    'FaHourglassEnd',
    'FaHourglassHalf',
    'FaHourglassStart',
    'FaHourglass',
    'FaHouseDamage',
    'FaHryvnia',
    'FaICursor',
    'FaIceCream',
    'FaIcicles',
    'FaIcons',
    'FaIdBadge',
    'FaIdCardAlt',
    'FaIdCard',
    'FaIgloo',
    'FaImage',
    'FaImages',
    'FaInbox',
    'FaIndent',
    'FaIndustry',
    'FaInfinity',
    'FaInfoCircle',
    'FaInfo',
    'FaItalic',
    'FaJedi',
    'FaJoint',
    'FaJournalWhills',
    'FaKaaba',
    'FaKey',
    'FaKeyboard',
    'FaKhanda',
    'FaKissBeam',
    'FaKissWinkHeart',
    'FaKiss',
    'FaKiwiBird',
    'FaLandmark',
    'FaLanguage',
    'FaLaptopCode',
    'FaLaptopMedical',
    'FaLaptop',
    'FaLaughBeam',
    'FaLaughSquint',
    'FaLaughWink',
    'FaLaugh',
    'FaLayerGroup',
    'FaLeaf',
    'FaLemon',
    'FaLessThanEqual',
    'FaLessThan',
    'FaLevelDownAlt',
    'FaLevelUpAlt',
    'FaLifeRing',
    'FaLightbulb',
    'FaLink',
    'FaLiraSign',
    'FaListAlt',
    'FaListOl',
    'FaListUl',
    'FaList',
    'FaLocationArrow',
    'FaLockOpen',
    'FaLock',
    'FaLongArrowAltDown',
    'FaLongArrowAltLeft',
    'FaLongArrowAltRight',
    'FaLongArrowAltUp',
    'FaLowVision',
    'FaLuggageCart',
    'FaMagic',
    'FaMagnet',
    'FaMailBulk',
    'FaMale',
    'FaMapMarkedAlt',
    'FaMapMarked',
    'FaMapMarkerAlt',
    'FaMapMarker',
    'FaMapPin',
    'FaMapSigns',
    'FaMap',
    'FaMarker',
    'FaMarsDouble',
    'FaMarsStrokeH',
    'FaMarsStrokeV',
    'FaMarsStroke',
    'FaMars',
    'FaMask',
    'FaMedal',
    'FaMedkit',
    'FaMehBlank',
    'FaMehRollingEyes',
    'FaMeh',
    'FaMemory',
    'FaMenorah',
    'FaMercury',
    'FaMeteor',
    'FaMicrochip',
    'FaMicrophoneAltSlash',
    'FaMicrophoneAlt',
    'FaMicrophoneSlash',
    'FaMicrophone',
    'FaMicroscope',
    'FaMinusCircle',
    'FaMinusSquare',
    'FaMinus',
    'FaMitten',
    'FaMobileAlt',
    'FaMobile',
    'FaMoneyBillAlt',
    'FaMoneyBillWaveAlt',
    'FaMoneyBillWave',
    'FaMoneyBill',
    'FaMoneyCheckAlt',
    'FaMoneyCheck',
    'FaMonument',
    'FaMoon',
    'FaMortarPestle',
    'FaMosque',
    'FaMotorcycle',
    'FaMountain',
    'FaMousePointer',
    'FaMouse',
    'FaMugHot',
    'FaMusic',
    'FaNetworkWired',
    'FaNeuter',
    'FaNewspaper',
    'FaNotEqual',
    'FaNotesMedical',
    'FaObjectGroup',
    'FaObjectUngroup',
    'FaOilCan',
    'FaOm',
    'FaOtter',
    'FaOutdent',
    'FaPager',
    'FaPaintBrush',
    'FaPaintRoller',
    'FaPalette',
    'FaPallet',
    'FaPaperPlane',
    'FaPaperclip',
    'FaParachuteBox',
    'FaParagraph',
    'FaParking',
    'FaPassport',
    'FaPastafarianism',
    'FaPaste',
    'FaPauseCircle',
    'FaPause',
    'FaPaw',
    'FaPeace',
    'FaPenAlt',
    'FaPenFancy',
    'FaPenNib',
    'FaPenSquare',
    'FaPen',
    'FaPencilAlt',
    'FaPencilRuler',
    'FaPeopleCarry',
    'FaPepperHot',
    'FaPercent',
    'FaPercentage',
    'FaPersonBooth',
    'FaPhoneAlt',
    'FaPhoneSlash',
    'FaPhoneSquareAlt',
    'FaPhoneSquare',
    'FaPhoneVolume',
    'FaPhone',
    'FaPhotoVideo',
    'FaPiggyBank',
    'FaPills',
    'FaPizzaSlice',
    'FaPlaceOfWorship',
    'FaPlaneArrival',
    'FaPlaneDeparture',
    'FaPlane',
    'FaPlayCircle',
    'FaPlay',
    'FaPlug',
    'FaPlusCircle',
    'FaPlusSquare',
    'FaPlus',
    'FaPodcast',
    'FaPollH',
    'FaPoll',
    'FaPooStorm',
    'FaPoo',
    'FaPoop',
    'FaPortrait',
    'FaPoundSign',
    'FaPowerOff',
    'FaPray',
    'FaPrayingHands',
    'FaPrescriptionBottleAlt',
    'FaPrescriptionBottle',
    'FaPrescription',
    'FaPrint',
    'FaProcedures',
    'FaProjectDiagram',
    'FaPuzzlePiece',
    'FaQrcode',
    'FaQuestionCircle',
    'FaQuestion',
    'FaQuidditch',
    'FaQuoteLeft',
    'FaQuoteRight',
    'FaQuran',
    'FaRadiationAlt',
    'FaRadiation',
    'FaRainbow',
    'FaRandom',
    'FaReceipt',
    'FaRecordVinyl',
    'FaRecycle',
    'FaRedoAlt',
    'FaRedo',
    'FaRegistered',
    'FaRemoveFormat',
    'FaReplyAll',
    'FaReply',
    'FaRepublican',
    'FaRestroom',
    'FaRetweet',
    'FaRibbon',
    'FaRing',
    'FaRoad',
    'FaRobot',
    'FaRocket',
    'FaRoute',
    'FaRssSquare',
    'FaRss',
    'FaRubleSign',
    'FaRulerCombined',
    'FaRulerHorizontal',
    'FaRulerVertical',
    'FaRuler',
    'FaRunning',
    'FaRupeeSign',
    'FaSadCry',
    'FaSadTear',
    'FaSatelliteDish',
    'FaSatellite',
    'FaSave',
    'FaSchool',
    'FaScrewdriver',
    'FaScroll',
    'FaSdCard',
    'FaSearchDollar',
    'FaSearchLocation',
    'FaSearchMinus',
    'FaSearchPlus',
    'FaSearch',
    'FaSeedling',
    'FaServer',
    'FaShapes',
    'FaShareAltSquare',
    'FaShareAlt',
    'FaShareSquare',
    'FaShare',
    'FaShekelSign',
    'FaShieldAlt',
    'FaShip',
    'FaShippingFast',
    'FaShoePrints',
    'FaShoppingBag',
    'FaShoppingBasket',
    'FaShoppingCart',
    'FaShower',
    'FaShuttleVan',
    'FaSignInAlt',
    'FaSignLanguage',
    'FaSignOutAlt',
    'FaSign',
    'FaSignal',
    'FaSignature',
    'FaSimCard',
    'FaSitemap',
    'FaSkating',
    'FaSkiingNordic',
    'FaSkiing',
    'FaSkullCrossbones',
    'FaSkull',
    'FaSlash',
    'FaSleigh',
    'FaSlidersH',
    'FaSmileBeam',
    'FaSmileWink',
    'FaSmile',
    'FaSmog',
    'FaSmokingBan',
    'FaSmoking',
    'FaSms',
    'FaSnowboarding',
    'FaSnowflake',
    'FaSnowman',
    'FaSnowplow',
    'FaSocks',
    'FaSolarPanel',
    'FaSortAlphaDownAlt',
    'FaSortAlphaDown',
    'FaSortAlphaUpAlt',
    'FaSortAlphaUp',
    'FaSortAmountDownAlt',
    'FaSortAmountDown',
    'FaSortAmountUpAlt',
    'FaSortAmountUp',
    'FaSortDown',
    'FaSortNumericDownAlt',
    'FaSortNumericDown',
    'FaSortNumericUpAlt',
    'FaSortNumericUp',
    'FaSortUp',
    'FaSort',
    'FaSpa',
    'FaSpaceShuttle',
    'FaSpellCheck',
    'FaSpider',
    'FaSpinner',
    'FaSplotch',
    'FaSprayCan',
    'FaSquareFull',
    'FaSquareRootAlt',
    'FaSquare',
    'FaStamp',
    'FaStarAndCrescent',
    'FaStarHalfAlt',
    'FaStarHalf',
    'FaStarOfDavid',
    'FaStarOfLife',
    'FaStar',
    'FaStepBackward',
    'FaStepForward',
    'FaStethoscope',
    'FaStickyNote',
    'FaStopCircle',
    'FaStop',
    'FaStopwatch',
    'FaStoreAlt',
    'FaStore',
    'FaStream',
    'FaStreetView',
    'FaStrikethrough',
    'FaStroopwafel',
    'FaSubscript',
    'FaSubway',
    'FaSuitcaseRolling',
    'FaSuitcase',
    'FaSun',
    'FaSuperscript',
    'FaSurprise',
    'FaSwatchbook',
    'FaSwimmer',
    'FaSwimmingPool',
    'FaSynagogue',
    'FaSyncAlt',
    'FaSync',
    'FaSyringe',
    'FaTableTennis',
    'FaTable',
    'FaTabletAlt',
    'FaTablet',
    'FaTablets',
    'FaTachometerAlt',
    'FaTag',
    'FaTags',
    'FaTape',
    'FaTasks',
    'FaTaxi',
    'FaTeethOpen',
    'FaTeeth',
    'FaTemperatureHigh',
    'FaTemperatureLow',
    'FaTenge',
    'FaTerminal',
    'FaTextHeight',
    'FaTextWidth',
    'FaThLarge',
    'FaThList',
    'FaTh',
    'FaTheaterMasks',
    'FaThermometerEmpty',
    'FaThermometerFull',
    'FaThermometerHalf',
    'FaThermometerQuarter',
    'FaThermometerThreeQuarters',
    'FaThermometer',
    'FaThumbsDown',
    'FaThumbsUp',
    'FaThumbtack',
    'FaTicketAlt',
    'FaTimesCircle',
    'FaTimes',
    'FaTintSlash',
    'FaTint',
    'FaTired',
    'FaToggleOff',
    'FaToggleOn',
    'FaToiletPaper',
    'FaToilet',
    'FaToolbox',
    'FaTools',
    'FaTooth',
    'FaTorah',
    'FaToriiGate',
    'FaTractor',
    'FaTrademark',
    'FaTrafficLight',
    'FaTrailer',
    'FaTrain',
    'FaTram',
    'FaTransgenderAlt',
    'FaTransgender',
    'FaTrashAlt',
    'FaTrashRestoreAlt',
    'FaTrashRestore',
    'FaTrash',
    'FaTree',
    'FaTrophy',
    'FaTruckLoading',
    'FaTruckMonster',
    'FaTruckMoving',
    'FaTruckPickup',
    'FaTruck',
    'FaTshirt',
    'FaTty',
    'FaTv',
    'FaUmbrellaBeach',
    'FaUmbrella',
    'FaUnderline',
    'FaUndoAlt',
    'FaUndo',
    'FaUniversalAccess',
    'FaUniversity',
    'FaUnlink',
    'FaUnlockAlt',
    'FaUnlock',
    'FaUpload',
    'FaUserAltSlash',
    'FaUserAlt',
    'FaUserAstronaut',
    'FaUserCheck',
    'FaUserCircle',
    'FaUserClock',
    'FaUserCog',
    'FaUserEdit',
    'FaUserFriends',
    'FaUserGraduate',
    'FaUserInjured',
    'FaUserLock',
    'FaUserMd',
    'FaUserMinus',
    'FaUserNinja',
    'FaUserNurse',
    'FaUserPlus',
    'FaUserSecret',
    'FaUserShield',
    'FaUserSlash',
    'FaUserTag',
    'FaUserTie',
    'FaUserTimes',
    'FaUser',
    'FaUsersCog',
    'FaUsers',
    'FaUtensilSpoon',
    'FaUtensils',
    'FaVectorSquare',
    'FaVenusDouble',
    'FaVenusMars',
    'FaVenus',
    'FaVial',
    'FaVials',
    'FaVideoSlash',
    'FaVideo',
    'FaVihara',
    'FaVoicemail',
    'FaVolleyballBall',
    'FaVolumeDown',
    'FaVolumeMute',
    'FaVolumeOff',
    'FaVolumeUp',
    'FaVoteYea',
    'FaVrCardboard',
    'FaWalking',
    'FaWallet',
    'FaWarehouse',
    'FaWater',
    'FaWaveSquare',
    'FaWeightHanging',
    'FaWeight',
    'FaWheelchair',
    'FaWifi',
    'FaWind',
    'FaWindowClose',
    'FaWindowMaximize',
    'FaWindowMinimize',
    'FaWindowRestore',
    'FaWineBottle',
    'FaWineGlassAlt',
    'FaWineGlass',
    'FaWonSign',
    'FaWrench',
    'FaXRay',
    'FaYenSign',
    'FaYinYang',
    'FaRegAddressBook',
    'FaRegAddressCard',
    'FaRegAngry',
    'FaRegArrowAltCircleDown',
    'FaRegArrowAltCircleLeft',
    'FaRegArrowAltCircleRight',
    'FaRegArrowAltCircleUp',
    'FaRegBellSlash',
    'FaRegBell',
    'FaRegBookmark',
    'FaRegBuilding',
    'FaRegCalendarAlt',
    'FaRegCalendarCheck',
    'FaRegCalendarMinus',
    'FaRegCalendarPlus',
    'FaRegCalendarTimes',
    'FaRegCalendar',
    'FaRegCaretSquareDown',
    'FaRegCaretSquareLeft',
    'FaRegCaretSquareRight',
    'FaRegCaretSquareUp',
    'FaRegChartBar',
    'FaRegCheckCircle',
    'FaRegCheckSquare',
    'FaRegCircle',
    'FaRegClipboard',
    'FaRegClock',
    'FaRegClone',
    'FaRegClosedCaptioning',
    'FaRegCommentAlt',
    'FaRegCommentDots',
    'FaRegComment',
    'FaRegComments',
    'FaRegCompass',
    'FaRegCopy',
    'FaRegCopyright',
    'FaRegCreditCard',
    'FaRegDizzy',
    'FaRegDotCircle',
    'FaRegEdit',
    'FaRegEnvelopeOpen',
    'FaRegEnvelope',
    'FaRegEyeSlash',
    'FaRegEye',
    'FaRegFileAlt',
    'FaRegFileArchive',
    'FaRegFileAudio',
    'FaRegFileCode',
    'FaRegFileExcel',
    'FaRegFileImage',
    'FaRegFilePdf',
    'FaRegFilePowerpoint',
    'FaRegFileVideo',
    'FaRegFileWord',
    'FaRegFile',
    'FaRegFlag',
    'FaRegFlushed',
    'FaRegFolderOpen',
    'FaRegFolder',
    'FaRegFontAwesomeLogoFull',
    'FaRegFrownOpen',
    'FaRegFrown',
    'FaRegFutbol',
    'FaRegGem',
    'FaRegGrimace',
    'FaRegGrinAlt',
    'FaRegGrinBeamSweat',
    'FaRegGrinBeam',
    'FaRegGrinHearts',
    'FaRegGrinSquintTears',
    'FaRegGrinSquint',
    'FaRegGrinStars',
    'FaRegGrinTears',
    'FaRegGrinTongueSquint',
    'FaRegGrinTongueWink',
    'FaRegGrinTongue',
    'FaRegGrinWink',
    'FaRegGrin',
    'FaRegHandLizard',
    'FaRegHandPaper',
    'FaRegHandPeace',
    'FaRegHandPointDown',
    'FaRegHandPointLeft',
    'FaRegHandPointRight',
    'FaRegHandPointUp',
    'FaRegHandPointer',
    'FaRegHandRock',
    'FaRegHandScissors',
    'FaRegHandSpock',
    'FaRegHandshake',
    'FaRegHdd',
    'FaRegHeart',
    'FaRegHospital',
    'FaRegHourglass',
    'FaRegIdBadge',
    'FaRegIdCard',
    'FaRegImage',
    'FaRegImages',
    'FaRegKeyboard',
    'FaRegKissBeam',
    'FaRegKissWinkHeart',
    'FaRegKiss',
    'FaRegLaughBeam',
    'FaRegLaughSquint',
    'FaRegLaughWink',
    'FaRegLaugh',
    'FaRegLemon',
    'FaRegLifeRing',
    'FaRegLightbulb',
    'FaRegListAlt',
    'FaRegMap',
    'FaRegMehBlank',
    'FaRegMehRollingEyes',
    'FaRegMeh',
    'FaRegMinusSquare',
    'FaRegMoneyBillAlt',
    'FaRegMoon',
    'FaRegNewspaper',
    'FaRegObjectGroup',
    'FaRegObjectUngroup',
    'FaRegPaperPlane',
    'FaRegPauseCircle',
    'FaRegPlayCircle',
    'FaRegPlusSquare',
    'FaRegQuestionCircle',
    'FaRegRegistered',
    'FaRegSadCry',
    'FaRegSadTear',
    'FaRegSave',
    'FaRegShareSquare',
    'FaRegSmileBeam',
    'FaRegSmileWink',
    'FaRegSmile',
    'FaRegSnowflake',
    'FaRegSquare',
    'FaRegStarHalf',
    'FaRegStar',
    'FaRegStickyNote',
    'FaRegStopCircle',
    'FaRegSun',
    'FaRegSurprise',
    'FaRegThumbsDown',
    'FaRegThumbsUp',
    'FaRegTimesCircle',
    'FaRegTired',
    'FaRegTrashAlt',
    'FaRegUserCircle',
    'FaRegUser',
    'FaRegWindowClose',
    'FaRegWindowMaximize',
    'FaRegWindowMinimize',
    'FaRegWindowRestore',
];

exports.IconPicker = IconPicker;
exports.IconPickerItem = IconPickerItem;
exports.iconList = iconList;
//# sourceMappingURL=index.js.map
