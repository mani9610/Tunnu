'use strict';

describe('Controller: ThankuCtrl', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var ThankuCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    ThankuCtrl = $controller('ThankuCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ThankuCtrl.awesomeThings.length).toBe(3);
  });
});
