
function mutation(arr) {
  var splitIt = arr[1].split('');
  var chkArr = [];
  for (var i=0; i<splitIt.length; i++){
    if (arr[0].toLowerCase().indexOf(splitIt[i].toLowerCase()) > -1){
      chkArr.push(splitIt[i]);
    }
  }
  var joinArr = chkArr.join('');
  if (joinArr == arr[1]){
    return true;
  }
  return false;
}

mutation(["hello", "hey"]);
