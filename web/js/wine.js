angular.module('tagtalk').controller('wineController',['$http',function($http){
  var controller = this;
  controller.wine=[];
  controller.error;
  // this.wines=[
  //   {
  //   brand:"bmw",
  //   make:"m3",
  //   color:"red"
  //   },
  //   {
  //   brand:"benz",
  //   make:"c63",
  //   color:"black"
  //   },
  //   {
  //   brand:"porsche",
  //   make:"911",
  //   color:"yello"
  //   }
  // ];
  // this.error=null;
  $http.get('/datas/wine.json').succss(function(data){
    controller.wines=data;
  })
  .error(function(error){
    controller.error="problem";
  });
}]);
