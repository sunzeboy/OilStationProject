// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain. Notice the difference between * and **.
        'http://*/**'
    ]);

    // 默认设置：tab的位置为底部
    $ionicConfigProvider.tabs.position('bottom');
    // 默认设置：tab标准样式
    $ionicConfigProvider.tabs.style('standard');
    // 默认设置：标题栏文字居中
    $ionicConfigProvider.navBar.alignTitle('center');

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.home', {
        url: '/home',
        views: {
            'tab-home': {
                templateUrl: 'templates/tab-home.html',
                controller: 'AppCtrl'
            }
        }
    })

    .state('tab.information', {
        url: "/information",
        views: {
            'tab-information': {
                templateUrl: 'templates/tab-information.html',
                controller: 'AppCtrl'
            }
        }
    })

    .state('tab.information.discounts', {
        url: '/discounts',
        views: {
            'tab-information-discounts': {
                templateUrl: 'templates/tab-information-discounts.html',
                controller: 'AppCtrl'
            }
        }
    })

    .state('tab.information.events', {
        url: '/events',
        views: {
            'tab-information-events': {
                templateUrl: 'templates/tab-information-events.html',
                controller: 'AppCtrl'
            }
        }
    })

    .state('tab.information.cars', {
        url: '/cars',
        views: {
            'tab-information-cars': {
                templateUrl: 'templates/tab-information-cars.html',
                controller: 'AppCtrl'
            }
        }
    })

    .state('tab.information.oils', {
        url: '/oils',
        views: {
            'tab-information-oils': {
                templateUrl: 'templates/tab-information-oils.html',
                controller: 'AppCtrl'
            }
        }
    })

    .state('tab.information.cards', {
        url: '/cards',
        views: {
            'tab-information-cards': {
                templateUrl: 'templates/tab-information-cards.html',
                controller: 'AppCtrl'
            }
        }
    })

    .state('tab.community', {
        url: '/community',
        views: {
            'tab-community': {
                templateUrl: 'templates/tab-community.html',
                controller: 'AppCtrl'
            }
        }
    })

    .state('tab.account', {
        url: '/account',
        views: {
            'tab-account': {
                templateUrl: 'templates/tab-account.html',
                controller: 'AppCtrl'
            }
        }
    })


    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');

});

// function adjustFrameToParentNode(iframe) {
//     // 设置iframe宽度
//     iframe.style.width = '100%';
//     iframe.style.height = '0';
//     try {
//         var doc = iframe.contentDocument || iframe.contentWindow.document;
//         // 在iphone、ipad等移动浏览器中，为iframe设置width和height样式起不了作用
//         // iframe的高宽由其内容决定，故设置iframe中body的宽度来限制iframe高宽
//         doc.body.style.width = +'px';
//         doc.body.style.padding = '0';
//         doc.body.style.margin = '0';
//         doc.body.style.border = 'none';

//         // 自适应iframe高度，确保没有纵向滚动条
//         // iphone、ipad等移动浏览会器忽略width/height自适应高度
//         // NOTE: 没有支持Quirks mode

//         // 确保scrollHeight是iframe所需的最小高度
//         iframe.style.height = Math.max(
//             // 其他浏览器
//             doc.body.scrollHeight,
//             // IE7
//             doc.documentElement.scrollHeight
//         ) + 'px';
//     } catch (e) {
//         console.warn(e);
//     }
// }
