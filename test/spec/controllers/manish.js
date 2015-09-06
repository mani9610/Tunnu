'use strict';

describe('Controller: ManishCtrl', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var ManishCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    ManishCtrl = $controller('ManishCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ManishCtrl.awesomeThings.length).toBe(3);
  });
});
