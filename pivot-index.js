// add whatever parameters you deem necessary

// pivotIndex([1,2,1,6,3,1]) // 3
// pivotIndex([5,2,7]) // -1  no valid pivot index

function pivotIndex(arr) {
  let pivot = 0;
  let leftSum = 0;
  let rightSum = 0;

  while (pivot >= 0 && pivot < arr.length) {
    leftSum = leftSumCalc(arr, pivot);
    rightSum = rightSumCalc(arr, pivot);

    if (leftSum === rightSum) {
      return pivot;
    } else {
      pivot++;
    }
  }
  return -1;
}

function leftSumCalc(arr, pivot) {
  let leftSum = 0;
  for (let i = 0; i < pivot; i++) {
    leftSum += arr[i];
  }
  return leftSum;
}

function rightSumCalc(arr, pivot) {
  let rightSum = 0;
  for (let j = pivot + 1; j < arr.length; j++) {
    rightSum += arr[j];
  }

  return rightSum;
}
