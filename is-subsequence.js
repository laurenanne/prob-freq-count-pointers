// add whatever parameters you deem necessary
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting') true

function isSubsequence(str1, str2) {
  let index = 0;
  for (let i = 0; i < str1.length; i++) {
    index = str2.indexOf(str1[i], index);
    if (index === -1) return false;
    else {
      index++;
    }
  }
  return true;
}
