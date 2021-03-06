import './styles.css';
import $ from 'jquery';
import { Entry } from './scripts.js';


$(document).ready(function(){
  $("#journal").submit(function(event){
    event.preventDefault();
    const title1Input = $("input.title").val();
    const body1Input = $("input#body").val();

    let entry1 = new Entry(title1Input, body1Input);
    let entry1WordCount = entry1.wordCount(body1Input);
    let entry1LetterCount = entry1.letterCount(body1Input);
    let teaserResult = entry1.getTeaser(body1Input);
    $(".words").text(entry1WordCount);
    $(".letters").text(entry1LetterCount);
    $(".title").text(title1Input);
    $(".teaser").text(teaserResult);
    $("#output").show();
    $("#expand").click(function() {
      $(".teaser").text(body1Input);
      $("#expand").hide();
      $("#hide").show();
    });
    $("#hide").click(function() {
      $(".teaser").text(teaserResult);
      $("#expand").show();
      $("#hide").hide();
    });
  });
});