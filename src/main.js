

 import { Entry } from './journal';
 import './styles.css';

 
$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var subject = $('#subject').val();
    var body = $('#body').val();
    var entry = new Entry(subject, body);
    console.log(entry);
    var vowels = entry.voweler();
    var wordCount = entry.wordCount();
    var consonants = entry.consonate();
 

    console.log("word count: "+wordCount);
    console.log("consonants: "+consonants);
    $('#post').append('<div><p>'+subject+'</p><p>'+body+'</p><br><p>word count: '+wordCount+' vowels: '+vowels+' = consonants: '+consonants+'</div>');

    // output.forEach(function(element) {
    //   $('#solution').append("<li>" + element + "</li>");
    });
  });