// add whatever parameters you deem necessary
// sameFrequency(182,281) // true
function sameFrequency(int1, int2) {
  // convert int to text
  let text1 = int1.toString();
  let text2 = int2.toString();

  // check length of the strings. If they are not same length return false
  if (text1.length !== text2.length) return false;

  const int1Freq = makeFreqCounter(text1);
  const int2Freq = makeFreqCounter(text2);

  for (let int in int1Freq) {
    if (!int2Freq[int]) return false;
    if (int1Freq[int1] !== int2Freq[int2]) return false;
  }
  return true;
}

function makeFreqCounter(int) {
  const freqCounter = {};
  for (let el of int) {
    freqCounter[el] = freqCounter[el] + 1 || 1;
  }
  return freqCounter;
}

// module.exports = sameFrequency;
