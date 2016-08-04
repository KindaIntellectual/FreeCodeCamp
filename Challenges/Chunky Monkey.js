
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arrLength = (arr.length);
  var someArr = new Array();
  for (var i=0; i < arrLength; i++){
    var splicedIt = arr.splice(0, size);
    someArr.push(splicedIt);
  }
  //someArr.pop();
  someArr = someArr.filter(function(elem) {return elem.length > 0;});
  return someArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
