(function() {
'use strict';
	angular
		.module('app', [])
		.controller('HomeController', ControllerController);

	ControllerController.$inject = ['$log'];
	function ControllerController(dependency1) {
		var vm = this;
		vm.title = "Hello World";

		activate();

		//////////////// test

		function activate() { }
	}
})();