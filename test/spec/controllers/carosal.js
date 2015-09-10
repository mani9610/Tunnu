'use strict';

describe('Controller: CarosalCtrl', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var CarosalCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    CarosalCtrl = $controller('CarosalCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CarosalCtrl.awesomeThings.length).toBe(3);
  });
});
