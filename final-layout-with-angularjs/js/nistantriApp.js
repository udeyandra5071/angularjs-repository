var nistantriApp = angular.module("nistantriApp", ['ngRoute']);
nistantriApp.config(function($routeProvider){
    $routeProvider.when("/",{templateUrl: "views/banner.html",
                            controller: "homecontroller"
                       }).when("/carrysearch",{templateUrl:"views/carrysearch.html",
                                               controller: "carrysearchlist"
        
                       });
    
});

function addactive(){
    $(".addactive").on("click",function(){
        
        $(".addactive").toggleClass("active");
    });
    
}

 function swipeme(){
        var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton:".swiper-button-next",
           prevButton:".swiper-button-prev",
           simulateTouch:true,
           autoplay:6000,
           onInit:function(){$(".caption").show(); } 
            
    }); 
     swiper.on('slideChangeStart', function () {
    $(".caption").hide(); 
});   
swiper.on('slideChangeEnd', function () {
    $(".caption").show(); 
});

    }
nistantriApp.controller("homecontroller",function($scope,$http,$timeout){
    $timeout(swipeme, 6);
    $scope.quotetext="We help you to create the best business plan , resource & execution";
      $http({method: 'POST', url: 'json/header.json'}).success(function(data) {
$scope.header = data;
    console.log(data);

});   
$http({method: 'POST', url: 'json/banner.json'}).success(function(data) {
$scope.bannerdata = data;
    console.log(data);


});
$http({method: 'POST', url: 'json/middlecontainer.json'}).success(function(data) {
$scope.middlecontainer = data;
    console.log(data);


});

});
nistantriApp.controller("carrysearchlist",function($scope,$http,$timeout){
$http({method: 'POST', url: 'json/caricatcher.json'}).success(function(data) {
$scope.caricatcher = data;
    console.log(data);


});	
});
 