function Entry (title, body) {
  this.title = title,
  this.body = body
}

Entry.prototype.wordCount = function(body) {
  let wordArray = body.split(" ");
  return wordArray.length;
}

Entry.prototype.letterCount = function(body) {
  let count = 0;
  const letters = body.split();
  letters.forEach(function(letter) {
    if (letter === /^[A-Za-z]+$/) {
      count++;
    }
  });
  return count;
}