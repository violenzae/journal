
export function Entry(subject, body) {
  this.subject = subject;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  var words = this.body.split(" ");
  return words.length;
}

Entry.prototype.voweler = function() {
  var vowel_list = "aeiouAEIOU"
  var vcount = 0
  for(var i = 0; i < this.body.length ; i++) {
    if(vowel_list.indexOf(this.body[i]) !== -1)
     {
      vcount += 1
    } 
  }
    return vcount;
  }

Entry.prototype.consonate = function() {
  var conso_list = "bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ"
  var ccount = 0
  for (var i=0; i < this.body.length; i++) {
    if(conso_list.indexOf(this.body[i]) !== -1)
    {
      ccount += 1
    }
  }
  return ccount;
}
