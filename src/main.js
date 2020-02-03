

//  import { Entry } from './journal';
//  import './styles.css';



 function Entry(subject, body) {
  this.subject = subject;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  var words = this.body.split(" ");
  return words.length;
}


 
$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var subject = $('#subject').val();
    var body = $('#body').val();
    var entry = new Entry(subject, body);
    console.log(entry);
    var words = [];
    var wordCount = entry.wordCount();

 

    console.log(wordCount);
  
    $('#solution').text(words);

    // output.forEach(function(element) {
    //   $('#solution').append("<li>" + element + "</li>");
    });
  });