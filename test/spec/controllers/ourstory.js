'use strict';

describe('Controller: OurstoryCtrl', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var OurstoryCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    OurstoryCtrl = $controller('OurstoryCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OurstoryCtrl.awesomeThings.length).toBe(3);
  });
});
