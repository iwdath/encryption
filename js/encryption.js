const encryptDict = {
  ' ': 'b6a1fab3',
  '.': 'fcb5031b',
  ',': '2ef02489',
  '!': '22b644ef',
  '?': '7f94307d',
  ':': '2da0dc9b',
  ';': 'c99b0aa2',
  '(': 'a3a150a4',
  ')': '52e7f133',
  '[': '5d7de8aa',
  ']': 'fdc8cfa0',
  '{': '4f01a1e6',
  '}': '3e8f31be',
  '@': '9aefe124',
  '"': '0da8979a',
  '\'': 'b32a74b7',
  '№': 'd2bee121',
  '#': 'ba3aa0ac',
  '$': '9f59e5d8',
  '%': 'da70b919',
  '^': 'cd9dc118',
  '&': 'ba96f031',
  '*': '96aadf86',
  '-': 'b6d057b9',
  '=': '1dd44a5a',
  '+': '48e3b175',
  '_': 'e326ca2e',
  '/': '8dd3f7db',
  '\\': 'd60cd4c4',
  '<': '3c890384',
  '>': '07b299a3',
  '~': 'fc52d6e5',

  '0': '23bcc905',
  '1': '14e09ee3',
  '2': 'd52a75e9',
  '3': 'eac5d151',
  '4': 'abd8ffb6',
  '5': '3c2d3615',
  '6': 'eb7fd71d',
  '7': 'e247de2c',
  '8': '18abe8a7',
  '9': '46f3fd7a',

  'a': '3e398c8e',
  'b': '2af27cce',
  'c': '3eda17ac',
  'd': '5b872684',
  'e': 'ebef8b5b',
  'f': 'cc5131c5',
  'g': '815976c1',
  'h': '38c3828c',
  'i': 'b49c2e1f',
  'j': '00f8238c',
  'k': '56aebf56',
  'l': 'ed1bab19',
  'm': '84b1164a',
  'n': '3e0d4b67',
  'o': '2713c3a8',
  'p': 'f1d5b06d',
  'q': '8c555c88',
  'r': 'a4ba0ab4',
  's': '83457ec1',
  't': '81a3b8ea',
  'u': '0d5e146a',
  'v': '7ad9b12d',
  'w': '57dc51ef',
  'x': '1d2a6674',
  'y': 'fa426e35',
  'z': '1ea41730',

  'а': '131578c5',
  'б': '02c7bd13',
  'в': '0db38acb',
  'г': '2db5bc26',
  'д': '37f8b4ae',
  'е': '147ccbb2',
  'ё': '818e754c',
  'ж': '8f0cbf99',
  'з': '7f96770e',
  'и': 'f3aec295',
  'й': '24f95d32',
  'к': '3f7cede6',
  'л': '9e50a558',
  'м': 'aeefbe76',
  'н': '6b3c8ddb',
  'о': '6bd70ac9',
  'п': '17703ecb',
  'р': '9c3c0ef0',
  'с': '9ed7f6e9',
  'т': 'e8415c85',
  'у': '0abc8583',
  'ф': '66f65fdb',
  'х': '5706bf73',
  'ц': 'dc846dee',
  'ч': '8e6ba810',
  'ш': '4e9d4637',
  'щ': '2ffe4275',
  'ъ': 'b64073db',
  'ы': '79e365c3',
  'ь': 'b89e08d5',
  'э': 'fc60142e',
  'ю': '9d330c21',
  'я': '5ecb7fe6',
};

const decryptDict = {};
for (const key in encryptDict) {
  decryptDict[encryptDict[key]] = key;
}

function encrypt(text) {
  let encryptedText = '';
  for (const char of text.toLowerCase()) {
    if (encryptDict.hasOwnProperty(char)) {
      encryptedText += encryptDict[char];
    } else {
      encryptedText += char;
    }
  }
  return encryptedText;
}

function decrypt(text) {
  let decryptedText = '';
  for (let i = 0; i < text.length; i += 8) {
    const chunk = text.substring(i, i + 8);
    if (decryptDict.hasOwnProperty(chunk)) {
      decryptedText += decryptDict[chunk];
    } else {
      decryptedText += chunk;
    }
  }
  return decryptedText;
}

function processText() {
  const mode = document.getElementById('mode').value;
  const text = document.getElementById('text').value;
  let result = '';

  if (mode === 'encrypt') {
    result = encrypt(text);
  } else if (mode === 'decrypt') {
    result = decrypt(text);
  }

  document.getElementById('result').innerText = result;
}