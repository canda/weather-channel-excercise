app.directive('animate', function() {

  function link(scope, element, attrs) {
    element.bind('click', function() {
      angular.element(document)
        .find('section').toggleClass("animatedBackground");
    });
  }

  return {
    link: link,
    templateUrl: "animate.html"
  };
});