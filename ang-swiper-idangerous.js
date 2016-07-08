
 function swipeme(){
        var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    }); 
        
    }

    var app = angular.module("mainapp",[]);
app.controller("mycontroller",function($scope,$timeout){
    $scope.list = ["images/autumn_leaves.jpg","images/high-resolution-3D-Fiber-Lash-Event-Banner.jpg"];
    $scope.lists = ["One","Two"];
   $timeout(swipeme, 1000);
});
 