/**
 * Calculate element area and set scope.area for display
 */
app.directive('displayArea', ['sizeManager', function(sizeManager) {

  var link = function(scope, element, attrs) {
    var setArea = function(digest){
      scope.area = sizeManager.getArea(element);

      //need to digest again if it is an async function
      if(digest)
        scope.$apply();
    }

    setArea(false);

    /**
     * recalculate area after loading images
     */
    window.addEventListener("load", function(){
      setArea(true);
    });

    /**
     * recalculate area on window resize
     */
    window.addEventListener("resize", function(){
      setArea(true);
    });
  }

  return {
    scope: true,
    link: link
  };
}]);