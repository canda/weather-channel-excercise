/**
 * start angular manually
 * must be after all controllers, services, directives, etc have been defined
 * @param  {DOM} ) the root element of the angular app
 */
angular.element(document).ready(function() {
  angular.bootstrap(document, ['weatherChannel']);
});