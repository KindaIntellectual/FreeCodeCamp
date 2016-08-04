
function mutation(arr) {
  var splitArrOne = arr[0].split('');
  var splitArrTwo = arr[1].split('');
  var checkArr = [];
  for (var i=0; i<arr[1].length; i++){
    if (arr[1].toLowerCase().indexOf(arr[0].toLowerCase()) !== -1){
      checkArr.push(splitArrOne[i]);
    }
  }
 // var dupeChk = checkArr.filter(function(x,y){
 //   return checkArr.indexOf(x.toLowerCase()) == y;
 // });
  if (checkArr.join('').toLowerCase() !== arr[1].toLowerCase()){
    return false;
  }
  return true;
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
