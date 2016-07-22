
 function swipeme(){
        var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton:".swiper-button-next",
           prevButton:".swiper-button-prev",
           simulateTouch:true
    }); 
        
    }

    var app = angular.module("mainapp",[]);
app.controller("mycontroller",function($scope,$timeout){
    $scope.list = ["images/1.jpg","images/2.jpg"];
    $scope.lists = ["One","Two"];
   $timeout(swipeme, 50);
});
 