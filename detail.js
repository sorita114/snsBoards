var form = angular.module('form',[]);
var login = angular.module('login',[]);
var list = angular.module('list',[]);
var paging = angular.module('paging',[]);
var user = angular.module('user',[]);
//global dependencies
user.factory('UserInfo', function(){
  var userInfo = {
    name : '',
    profileImage : '../public/image/yellow.png',
    email : ''
  };
  return userInfo;
});
var boardLists = angular.module('boardLists',[]);
boardLists.factory('Boards', function(){
  var boards = [];

  return boards;
});
var app = angular.module('app',['user','boardLists', 'form', 'login', 'list','paging']);
