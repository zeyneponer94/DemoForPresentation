    app = angular.module('myApp', [])
    app.controller('myController', function ($scope, $http) {
       
        $scope.accountObj = [];

        
        //when user selects a product from selection list, ng-change calls that function to get the work order types available for chosen product
        $scope.getAccountObj = function() {
          $http({method: 'GET', url: '/db/getAccountObj'}).
          success(function(data, status) {
                  var i = 0;
                  while(data[i].id!=null){
                    var obj = { name: data[i].name };
                    $scope.accountObj.push(obj);
                    i++;
                  }
          }).
          error(function(data, status) {
          }); 

       }

    }); 
