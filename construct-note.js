// add whatever parameters you deem necessary
function constructNote(message, letters) {
  if (message.length === 0) return true;
  if (letters.length === 0) return false;

  const messFreq = makeFreqCounter(message);
  const lettFreq = makeFreqCounter(letters);

  for (let key in messFreq) {
    if (!lettFreq[key]) return false;
    if (messFreq[key] > lettFreq[key]) return false;
  }
  return true;
}

function makeFreqCounter(str) {
  let freqCounter = {};
  for (let el of str) {
    freqCounter[el] = freqCounter[el] + 1 || 1;
  }

  return freqCounter;
}

// module.exports = constructNote;
