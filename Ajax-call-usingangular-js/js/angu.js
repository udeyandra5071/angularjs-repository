function PostsCtrlAjax($scope, $http)

{

$http({method: 'POST', url: 'hello.json'}).success(function(data) {
$scope.posts = data;
    console.log(data);
});

}