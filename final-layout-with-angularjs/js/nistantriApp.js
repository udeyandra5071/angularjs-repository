var nistantriApp = angular.module("nistantriApp", ['ngRoute']);
nistantriApp.config(function($routeProvider){
    $routeProvider.when("/",{templateUrl: "views/banner.html",
                            controller: "homecontroller"});
    
});

function addactive(){
    $(".addactive").on("click",function(){
        
        $(".addactive").toggleClass("active");
    });
    
}
nistantriApp.controller("homecontroller",function($scope,$http){
    $scope.info="Udeyandra";
      $http({method: 'POST', url: 'json/header.json'}).success(function(data) {
$scope.header = data;
    console.log(data);
});
});
