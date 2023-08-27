// add whatever parameters you deem necessary
// separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
// separatePositive([-5, 5]) // [5, -5]

// [2, -1, -3, 6, -8, 10])
// [2, -3, -1, 6, -8, 10])
// [2, -3, 6, -1, -8, 10])
// [2, -3, 6, -1, -8, 10])

function separatePositive(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] > 0 && arr[right] > 0) {
      left++;
    } else if (arr[left] < 0 && arr[right] < 0) {
      right--;
    } else if (
      (arr[left] < 0 && arr[right] > 0) ||
      (arr[left] > 0 && arr[right] < 0)
    ) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  return arr;
}

// module.exports = separatePositive;
