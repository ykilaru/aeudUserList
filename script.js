var app = angular.module("myapp", []);
app.controller("UserManagementController", ['$scope', function($scope) {
    $scope.UserList = [{
        'fname': 'Michael',
        'lname': 'Jackson',
        'email': 'michael@eh.com',
        'phone': '999-999-9999'
    }, {
        'fname': 'John',
        'lname': 'doe',
        'email': 'john@eh.com',
        'phone': '999-999-9999'
    }, {
        'fname': 'Ray',
        'lname': 'romano',
        'email': 'ray@eh.com',
        'phone': '999-999-9999'
    }];

    $scope.phoneNumber = /^\+?\d{3}[- ]?\d{3}[- ]?\d{4}$/;

    $scope.verifyDedupeEmail = function() {
        var dedupeList = $scope.UserList.filter(function(user) {
            return user.email == $scope.user.email;
        })
        if (dedupeList && dedupeList.length > 0) {
            $scope.isDedupeEmail = true;
        }
    }

    $scope.user = {};

    $scope.addNew = function() {

        $scope.UserList.push($scope.user);
        $scope.user = {};
    };

    $scope.delete = function() {
        var newDataList = [];
        $scope.selectedAll = false;
        angular.forEach($scope.UserList, function(selected) {
            if (!selected.selected) {
                newDataList.push(selected);
            }
        });
        $scope.UserList = newDataList;
    };

    $scope.edit = function() {
        $scope.isEdit = true;
        var updateUser = $scope.UserList.filter(function(user) {
            return user.selected
        })
        if (updateUser && updateUser.length > 0) {
            $scope.user = updateUser[0];
        }
    };

    $scope.update = function() {
        angular.forEach($scope.UserList, function(selected) {
            if (selected.email == $scope.user.email) {
                selected = $scope.user;
            }
        });

    };

    $scope.check = function() {
        $scope.showEdit = false;
        var updateUser = $scope.UserList.filter(function(user) {
            return user.selected
        })
        if (updateUser && updateUser.length == 1) {
            $scope.showEdit = true;
            $scope.showDelete = true;
        }
        $scope.user = {};
        $scope.isEdit = false;
    };

    $scope.checkAll = function() {
        $scope.showEdit = false;
        $scope.user = {};
        $scope.isEdit = false;
        $scope.showDelete = $scope.selectedAll;
        angular.forEach($scope.UserList, function(data) {
            data.selected = $scope.selectedAll;
        });
    };

}]);
