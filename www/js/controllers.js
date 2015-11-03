angular.module('starter.controllers', [])

.controller('LoginCtrl', function ($scope, $state) {
    $scope.viewState = { userName: 'sysadmin', password: '12345' };
    $scope.login = function () {
        $state.go('app.main');
    }
})

.controller('AppCtrl', function ($scope) {

})

.controller('MainCtrl', function ($scope) {

})
.controller('ScorePreviewCtrl', function ($scope, $rootScope, $state, $ionicPopup, $timeout) {
    $scope.viewState = {};
    $scope.viewState.showId = 'part1';
    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;
    $scope.items = [{ subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点检查点检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点检查点检查点检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点检查点检查点检查点检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点检查点检查点检查点检查点检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点检查点检查点检查点检查点检查点检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点检查点检查点检查点检查点检查点检查点检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点检查点检查点检查点检查点检查点检查点检查点检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点检查点检查点检查点检查点检查点检查点检查点检查点检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 },
                    { subjectCode: "1.1.1", subjectContent: "检查点", subjectType: "A卷", socre: 5 }];

    $scope.detail = function (subject) {
        $state.go('app.score_detail', { subjectCode: subject.subjectCode });
    }

    // Triggered on a button click, or some other target
    $scope.showPopup = function () {
        $scope.viewState.solutions = [{ projectCode: '201501', projectName: '奔驰1' }, { projectCode: '201502', projectName: '奔驰2' }, { projectCode: '201503', projectName: '奔驰3' }];
        $scope.viewState.solution = $scope.viewState.solutions[0];
        $scope.viewState.projects = [{ projectCode: '201501', projectName: '2015Q1' }, { projectCode: '201502', projectName: '2015Q2' }, { projectCode: '201503', projectName: '2015Q3' }];
        $scope.viewState.project = $scope.viewState.projects[2];
        $rootScope.shopCode = 'E1';

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            templateUrl: 'templates/score_preview_search.html',
            title: '查询条件',
            //subTitle: 'Please use normal things',
            scope: $scope,
            buttons: [
                { text: '取消' },
                {
                    text: '<b>查询</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        //if (!$scope.data.wifi) {
                        //    //don't allow the user to close unless he enters wifi password
                        //    e.preventDefault();
                        //} else {
                        //    return $scope.data.wifi;
                        //}
                    }
                }
            ]
        });
        myPopup.then(function (res) {
            console.log('Tapped!', res);
        });
        //$timeout(function () {
        //    myPopup.close(); //close the popup after 3 seconds for some reason
        //}, 3000);
    };

})
.controller('MarketPresentationCtrl', function ($scope) {

})
.controller('ImprovedCaseLibraryCtrl', function ($scope) {

})
.controller('TodoListCtrl', function ($scope, $ionicPopup, $ionicHistory) {
    $scope.viewState = {};
    $scope.viewState.todoList = [
        { departmentName: "市场", matter: "事项1", status: "进行中" },
        { departmentName: "市场", matter: "事项2", status: "开始" },
        { departmentName: "市场", matter: "事项3", status: "反馈中" },
        { departmentName: "市场", matter: "事项1", status: "进行中" },
        { departmentName: "市场", matter: "事项2", status: "开始" },
        { departmentName: "市场", matter: "事项3", status: "反馈中" },
        { departmentName: "市场", matter: "事项1", status: "进行中" },
        { departmentName: "市场", matter: "事项2", status: "开始" },
        { departmentName: "市场", matter: "事项3", status: "反馈中" },
        { departmentName: "市场", matter: "事项1", status: "进行中" },
        { departmentName: "市场", matter: "事项2", status: "开始" },
        { departmentName: "市场", matter: "事项3", status: "反馈中" },
        { departmentName: "市场", matter: "事项1", status: "进行中" },
        { departmentName: "市场", matter: "事项2", status: "开始" },
        { departmentName: "市场", matter: "事项3", status: "反馈中" },
        { departmentName: "市场", matter: "事项1", status: "进行中" },
        { departmentName: "市场", matter: "事项2", status: "开始" },
        { departmentName: "市场", matter: "事项3", status: "反馈中" },
        { departmentName: "市场", matter: "事项4", status: "申诉中" }
    ];

    $scope.save = function () {
        $ionicHistory.goBack(-1);
    }
})


.controller('ScoreDetailCtrl', function ($scope, $rootScope, $state, $stateParams) {
    $scope.viewState = {};
    $scope.viewState.subject = { subjectCode: $stateParams.subjectCode };

    $scope.viewState.loseDescList = [{ desc: 'sjfkdsfjk', photo: 'img/ionic.png' }];
})

.controller('ScoreAppealCtrl', function ($scope, $rootScope, $state, $stateParams) {
    $scope.viewState = {};
    $scope.viewState.subject = { subjectCode: $stateParams.subjectCode, subjectContent: $stateParams.subjectContent };
    $scope.viewState.appealReason = '';
    $scope.viewState.vin_img_uri = 'img/ionic.png';
    $scope.saveAppeal = function () {
        $state.go('app.score_search');
    }
})

.controller('AppealSearchCtrl', function ($scope, $rootScope, $state, $ionicPopup, $timeout) {
    $scope.viewState = {};
    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;
    $scope.items = [{ subjectCode: "1.1.1", subjectContent: "检查点", appealReason: "申诉理由", appealPhoto: 'img/ionic.png' },
                    { subjectCode: "1.1.1", subjectContent: "检查点检查点", appealReason: "申诉理由申诉理由", appealPhoto: 'img/ionic.png' },
                    { subjectCode: "1.1.1", subjectContent: "检查点检查点检查点", appealReason: "申诉理由申诉理由申诉理由", appealPhoto: 'img/ionic.png' },
                    { subjectCode: "1.1.1", subjectContent: "检查点检查点检查点检查点", appealReason: "申诉理由申诉理由申诉理由申诉理由", appealPhoto: 'img/ionic.png' },
                    { subjectCode: "1.1.1", subjectContent: "检查点检查点检查点检查点检查点", appealReason: "申诉理由申诉理由申诉理由申诉理由申诉理由", appealPhoto: 'img/ionic.png' },
                    { subjectCode: "1.1.1", subjectContent: "检查点检查点检查点检查点检查点检查点", appealReason: "申诉理由申诉理由申诉理由申诉理由申诉理由申诉理由", appealPhoto: 'img/ionic.png' },
                    { subjectCode: "1.1.1", subjectContent: "检查点检查点检查点检查点检查点检查点检查点", appealReason: "申诉理由申诉理由申诉理由申诉理由申诉理由申诉理由申诉理由", appealPhoto: 'img/ionic.png' }];

    $scope.feedback = function (appeal) {
        $state.go('app.appeal_feedback', { subjectCode: appeal.subjectCode, subjectContent: appeal.subjectContent, appealReason: appeal.appealReason, appealPhoto: appeal.appealPhoto });
    }

    // Triggered on a button click, or some other target
    $scope.showPopup = function () {
        $scope.viewState.projects = [{ projectCode: '201501', projectName: '2015Q1' }, { projectCode: '201502', projectName: '2015Q2' }, { projectCode: '201503', projectName: '2015Q3' }];
        $scope.viewState.project = $scope.viewState.projects[2];
        $rootScope.shopCode = 'E1';

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            templateUrl: 'templates/score_search_popup.html',
            title: '查询条件',
            //subTitle: 'Please use normal things',
            scope: $scope,
            buttons: [
              { text: '取消' },
              {
                  text: '<b>查询</b>',
                  type: 'button-positive',
                  onTap: function (e) {
                      //if (!$scope.data.wifi) {
                      //    //don't allow the user to close unless he enters wifi password
                      //    e.preventDefault();
                      //} else {
                      //    return $scope.data.wifi;
                      //}
                  }
              }
            ]
        });
        myPopup.then(function (res) {
            console.log('Tapped!', res);
        });
        //$timeout(function () {
        //    myPopup.close(); //close the popup after 3 seconds for some reason
        //}, 3000);
    };

})

.controller('AppealFeedbackCtrl', function ($scope, $rootScope, $state, $stateParams) {
    $scope.viewState = {};
    $scope.viewState.subjectCode = $stateParams.subjectCode;
    $scope.viewState.subjectContent = $stateParams.subjectContent;
    $scope.viewState.appealPhoto = $stateParams.appealPhoto;
    $scope.viewState.appealReason = $stateParams.appealReason;
    $scope.viewState.feedbackReason = "";
    $scope.viewState.allowAppeal = "";

    $scope.saveFeedback = function () {
        $state.go('app.appeal_search');
    }
});
