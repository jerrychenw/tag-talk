angular.module('tagtalk',['ngRoute']).config(function($routeProvider){
   $routeProvider
   .when('/contactus',{
     templateUrl:'views/contact.html',
     controller:'contactController',
     controllerAs:'contactCtrl'
   })
   .when('/home',{
     templateUrl:'views/home.html',
     controller:'homeController',
     controllerAs:'homeCtrl'
   })
   .when('/',{
     redirectTo:'/home'
   })
   .when('/portal',{
     templateUrl:'views/portal.html',
     controller:'portalController',
     controllerAs:'portalCtrl'
   })
   .when('/wine',{
     templateUrl:'views/wine.html',
     controller:'wineController',
     controllerAs:'wineCtrl'
   })
   .otherwise({
     redirectTo:'/'
   });
});

angular.module('tagtalk').controller('mainController',function($scope){
  $scope.title="Test";
});

angular.module('tagtalk').controller('wineController',['$http',function($http){
  var wc = this;
  wc.wines=[];
  wc.error=null;
  this.showError=function(){
    return wc.error !== null;
  };
  $http.get('/datas/wine.json').success(function(data){
    wc.wines=data;
  })
  .catch(function(error){
    wc.error="problems";
  });
}]);
