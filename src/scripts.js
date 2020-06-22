export function Entry (title, body) {
  this.title = title,
  this.body = body;
}

Entry.prototype.wordCount = function(body) {
  let wordArray = body.split(" ");
  return wordArray.length;
};

Entry.prototype.letterCount = function(body) {
  let count = 0;
  body = body.toLowerCase();
  const characters = body.split('');
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  characters.forEach(function(character) {
    for (let i = 0; i < alphabet.length; i++) {
      if (character === alphabet[i]) {
        count++;
      }
    }
  });
  return count;
};