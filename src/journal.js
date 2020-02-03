


export function Entry () {
  this.subject = subject;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  var words = this.body.toLowerCase().split(" ");
  return words.length;
};

