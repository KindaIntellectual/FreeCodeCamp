
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arrLength = arr.length;
  var groupedArr = [];
  var innerArr = new Array();
  for (var i=0; i<arrLength; i++){
    while (innerArr.length < size){
      for (var j=0; j<size; j++){
        innerArr.push(arr[i++]);
      }
      groupedArr.push(innerArr);
    }
  }
  return groupedArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
