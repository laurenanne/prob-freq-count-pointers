// add whatever parameters you deem necessary

// longestFall([5, 3, 1, 3, 0]) // 3, 5-3-1 is the longest consecutive sequence of decreasing integers

// longestFall([5, 4, 4, 4, 3, 2]) // 3, 4-3-2 is the longest

// longestFall([]) // 0

function longestFall(arr) {
  if (!arr.length) return 0;

  let start = arr[0];
  let maxCount = 1;
  let currCount = 1;

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      if (currCount > maxCount) maxCount = currCount;
    }
    if (arr[i + 1] >= start) {
      if (currCount > maxCount) maxCount = currCount;
      currCount = 1;
      start = arr[i + 1];
    }
    if (arr[i + 1] < start) {
      start = arr[i + 1];
      currCount += 1;
    }
  }

  return maxCount;
}
