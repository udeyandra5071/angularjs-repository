var nistantriApp = angular.module("nistantriApp", ['ngRoute']);
nistantriApp.config(function($routeProvider){
    $routeProvider.when("/",{templateUrl: "views/banner.html",
                            controller: "homecontroller"
                       }).when("/carrysearch",{templateUrl:"views/carrysearch.html",
                                               controller: "carrysearchlist"
        
                       }).when("/getcaricatcher",{templateUrl:"views/cariget.html",
                                                  controller:"getcaricatcher"
                        }).when("/illustration",{templateUrl:"views/illustrations.html",
                                                  controller:"illustrations"
                        }).when("/getillustration",{templateUrl:"views/getillustrations.html",
                                                    controller:"getillustrations"
                        }).when("/photostock",{templateUrl:"views/photostock.html",
                                               controller:"photostock"
                        }).when("/hirephotographer",{templateUrl:"views/getphotographer.html",
                                                    controller:"hirephotographer"
                        })
    
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
    $scope.quotetext="Do you want artist, Hire here";
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
nistantriApp.controller("illustrations",function($scope,$http){
$http({method: 'POST', url: 'json/illustrations.json'}).success(function(data) {
$scope.illustration = data;
    console.log(data);


});	
});
nistantriApp.controller("photostock",function($scope,$http){
$http({method: 'POST', url: 'json/photostock.json'}).success(function(data) {
$scope.photostock = data;
    console.log(data);


});	
});

// Cart feature : http://www.tutorialspoint.com/angularjs/angularjs_cart_application.htm

 