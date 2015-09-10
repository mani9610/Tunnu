'use strict';

describe('Controller: HoneymoonCtrl', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var HoneymoonCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    HoneymoonCtrl = $controller('HoneymoonCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HoneymoonCtrl.awesomeThings.length).toBe(3);
  });
});
