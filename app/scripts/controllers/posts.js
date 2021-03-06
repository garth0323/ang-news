'use strict';

app.controller('PostsCtrl', function ($scope, Post, Auth) {
  $scope.posts = Post.all;
  $scope.user = Auth.user;
  $scope.signedIn = Auth.signedIn;

  $scope.post = {url: 'http://'};

  $scope.deletePost = function (post) {
    Post.delete(post);
  };
});