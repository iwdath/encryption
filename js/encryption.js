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
  '–': 'fc8d29b2',
  '_': 'e326ca2e',
  '=': '1dd44a5a',
  '+': '48e3b175',
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
  'A': 'ee188aef',
  'b': '2af27cce',
  'B': '9cca1295',
  'c': '3eda17ac',
  'C': '4f1c0c5f',
  'd': '5b872684',
  'D': '0b2ae924',
  'e': 'ebef8b5b',
  'E': 'b03fb385',
  'f': 'cc5131c5',
  'F': '0575b029',
  'g': '815976c1',
  'G': 'c3eb6cd3',
  'h': '38c3828c',
  'H': '0715d30c',
  'i': 'b49c2e1f',
  'I': '655e66f5',
  'j': '00f8238c',
  'J': '0a0b6286',
  'k': '56aebf56',
  'K': 'f6ef4c0f',
  'l': 'ed1bab19',
  'L': '46ea44f2',
  'm': '84b1164a',
  'M': 'adcd544a',
  'n': '3e0d4b67',
  'N': 'fe89d61f',
  'o': '2713c3a8',
  'O': '242d99cd',
  'p': 'f1d5b06d',
  'P': '7f905a9a',
  'q': '8c555c88',
  'Q': '0adb60fa',
  'r': 'a4ba0ab4',
  'R': '896e8bd5',
  's': '83457ec1',
  'S': '6df4a71a',
  't': '81a3b8ea',
  'T': 'f3342c5a',
  'u': '0d5e146a',
  'U': '92e2f35b',
  'v': '7ad9b12d',
  'V': '5d220cdd',
  'w': '57dc51ef',
  'W': '75f4d4c2',
  'x': '1d2a6674',
  'X': 'e2c7f1c4',
  'y': 'fa426e35',
  'Y': '656a1e80',
  'z': '1ea41730',
  'Z': '284f9fb2',

  'а': '131578c5',
  'А': '2b825ae0',
  'б': '02c7bd13',
  'Б': '957c4211',
  'в': '0db38acb',
  'В': 'e37a37d1',
  'г': '2db5bc26',
  'Г': '7cb134dc',
  'д': '37f8b4ae',
  'Д': 'ab530a1c',
  'е': '147ccbb2',
  'Е': '482328c6',
  'ё': '818e754c',
  'Ё': 'bff920de',
  'ж': '8f0cbf99',
  'Ж': '4cf18001',
  'з': '7f96770e',
  'З': '713adfa8',
  'и': 'f3aec295',
  'И': '8d836903',
  'й': '24f95d32',
  'Й': 'c28db950',
  'к': '3f7cede6',
  'К': '6f2d79f0',
  'л': '9e50a558',
  'Л': '2c1d9d29',
  'м': 'aeefbe76',
  'М': '190e7ab5',
  'н': '6b3c8ddb',
  'Н': 'f691896a',
  'о': '6bd70ac9',
  'О': 'bb6c658d',
  'п': '17703ecb',
  'П': '269097fe',
  'р': '9c3c0ef0',
  'Р': 'a290c6f5',
  'с': '9ed7f6e9',
  'С': '3474bbd3',
  'т': 'e8415c85',
  'Т': '0d062583',
  'у': '0abc8583',
  'У': 'a63edf0d',
  'ф': '66f65fdb',
  'Ф': 'c8745d1d',
  'х': '5706bf73',
  'Х': '2f45ae06',
  'ц': 'dc846dee',
  'Ц': '91d98614',
  'ч': '8e6ba810',
  'Ч': '81370b2b',
  'ш': '4e9d4637',
  'Ш': 'b804ed12',
  'щ': '2ffe4275',
  'Щ': '3e18fee0',
  'ъ': 'b64073db',
  'Ъ': 'a1f77f7e',
  'ы': '79e365c3',
  'Ы': 'eabc69ea',
  'ь': 'b89e08d5',
  'Ь': '8b3a7a1e',
  'э': 'fc60142e',
  'Э': '32de1053',
  'ю': '9d330c21',
  'Ю': '9da8f20f',
  'я': '5ecb7fe6',
  'Я': '0282af64',
};

const decryptDict = {};
for (const key in encryptDict) {
  decryptDict[encryptDict[key]] = key;
}

function encrypt(text) {
  let encryptedText = '';
  for (const char of text) {
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