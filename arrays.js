var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element){
  //[element, ...array];
  //return array;
  array.unshift(element)
  return array
// but if we have a const
const cats = ["Milo", "Garfield"]

// we need a new variable:
const moreCats = ["Felix", ...cats]
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(elment);
  return array;
}
function addElementToEndOfArray(array, element){

}
function destructivelyAddElementToEndOfArray(array, element){

}
