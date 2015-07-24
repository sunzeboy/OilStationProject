angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicSlideBoxDelegate, Configure, Discounts, Functions) {

    $scope.getTitle = function() {
        return Configure.name();
    }

    $scope.getDiscounts = function() {
        return Discounts.all();
    }
    $scope.getAdvertisements = function() {
        return Discounts.recent(5);
    }
    $scope.getFunctions = function() {
        return Functions.all();
    }

    $scope.onSlideBoxPageClick = function(index) {
        $ionicSlideBoxDelegate.slide(index, 500);
    }

    $scope.onShowPopupWindow = function(url) {
        if (!url) {
            return;
        }
        window.open(url, '_blank', 'toolbarposition=top,location=no,clearcache=yes,clearsessioncache=yes,enableViewportScale=yes');
    }

})

;
