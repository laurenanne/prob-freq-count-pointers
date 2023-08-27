// add whatever parameters you deem necessary
function averagePair(arr, target) {
  //averagePair([1, 2, 3], 2.5)

  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    if ((arr[leftPointer] + arr[rightPointer]) / 2 === target) return true;
    else if ((arr[leftPointer] + arr[rightPointer]) / 2 > target) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
  return false;
}
