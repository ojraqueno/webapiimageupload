var app = angular.module('myApp', ['ngFileUpload']);

app.controller('UploadCtrl', ['$scope', 'Upload', function ($scope, Upload) {
    $scope.submit = function () {
        if ($scope.form.file.$valid && $scope.file) {
            $scope.upload($scope.file);
        }
    };

    $scope.upload = function (file) {
        Upload.upload({
            url: 'image/upload',
            data: { file: file }
        }).then(function (resp) {
            console.log('Success');
        }, function (resp) {
            console.log('Error');
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '%');
        });
    };
}]);