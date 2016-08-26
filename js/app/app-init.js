(function(_win) {
	var underscore = angular.module('underscore', []);
	underscore.factory('_', ['$window', function($window) {
		return $window._;
	}]);
	_win.jsonDiffApp = angular.module('jsonDiffApp', ['ngMaterial', 'underscore']);
}(window));