describe('example test', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));


  it('should have Stebe Jobs name', function() {
    var $scope = {};

    var controller = $controller('MainController', { $scope: $scope});

    expect(controller.name).toEqual('Steve Jobs');
  });
});