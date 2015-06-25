/**
 * Class with getArea() method that calculates area 
 * using native js height and width attributes
 */
app.factory('sizeManager', function sizeManagerFactory() {
  var getArea = function(element){
    var area = element[0].offsetHeight * element[0].offsetWidth;
    return area;
  }

  return {
    getArea: getArea
  };
});