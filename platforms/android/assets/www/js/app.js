// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })

        .state('app.main', {//主页面
            url: '/main',
            views: {
                'menuContent': {
                    templateUrl: 'templates/main.html',
                    controller: 'MainCtrl'
                }
            }
        })
        .state('app.score_preview', {//成绩预览
            url: '/score_preview',
            views: {
                'menuContent': {
                    templateUrl: 'templates/score_preview.html',
                    controller: 'ScorePreviewCtrl'
}
            }
        })
        .state('app.score_detail', {//成绩预览详细
            url: '/score_detail',
            views: {
                'menuContent': {
                    templateUrl: 'templates/score_detail.html',
                    controller: 'ScorePreviewCtrl'
                }
            }
        })
        .state('app.score_detail_photo', {//成绩预览详细
            url: '/score_detail_photo',
            views: {
                'menuContent': {
                    templateUrl: 'templates/score_detail_photo.html',
                    controller: 'ScorePreviewCtrl'
                }
            }
        })
        .state('app.market_presentation', {//市场简报
            url: '/market_presentation',
            views: {
                'menuContent': {
                    templateUrl: 'templates/market_presentation.html',
                    controller: 'MarketPresentationCtrl'
                }
            }
        })
        .state('app.improved_case_library', {//改善实例库
            url: '/improved_case_library',
            views: {
                'menuContent': {
                    templateUrl: 'templates/improved_case_library.html',
                    controller: 'ImprovedCaseLibraryCtrl'
                }
            }
        })
        .state('app.todo_list', {//待办事项
            url: '/todo_list',
            views: {
                'menuContent': {
                    templateUrl: 'templates/todo_list.html',
                    controller: 'TodoListCtrl'
                }
            }
        })
        .state('app.todo_detail', {//待办事项详细
            url: '/todo_detail',
            views: {
                'menuContent': {
                    templateUrl: 'templates/todo_detail.html',
                    controller: 'TodoListCtrl'
                }
            }
        })
        .state('app.todo_detail_appeal', {//待办事项详细_申诉
            url: '/todo_detail_appeal',
            views: {
                'menuContent': {
                    templateUrl: 'templates/todo_detail_appeal.html',
                    controller: 'TodoListCtrl'
                }
            }
        })
        .state('app.todo_detail_improvedFeedback', {//待办事项详细_改善反馈
            url: '/todo_detail_improvedFeedback',
            views: {
                'menuContent': {
                    templateUrl: 'templates/todo_detail_improvedFeedback.html',
                    controller: 'TodoListCtrl'
                }
            }
        })
        
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('login');
});
