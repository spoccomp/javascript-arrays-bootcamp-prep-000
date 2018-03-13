//var chocolateBars = new Array();
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(addArray, addElement){
  var addCandy = [addElement,...addArray]
  //addArray.unshift(addElement)
  return addCandy
}
function destructivelyAddElementToBeginningOfArray(destructArray, destructElement){
    //var destArray = new Array(chocolateBars);
    destructArray.unshift(destructElement)
  	return destructArray
}
