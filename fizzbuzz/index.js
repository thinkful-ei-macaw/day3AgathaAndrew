'use strict';

$(function() {
  $('#number-chooser').submit( event => {
    event.preventDefault();
    $('js-results').empty();
    const num = parseInt($(event.currentTarget).find('input[name="number-choice"]').val());
    const array = [];
    for( let i = 1; i <= num; i++ ) {
      if( i % 15 === 0) {
        array.push($('<div class="fizz-buzz-item buzz"><span>fizzbuzz</span></div>'));
      } 
      else if( i % 3 === 0 ) {
        array.push($('<div class="fizz-buzz-item fizz"><span>fizz</span></div>'));
      }
      else if( i % 5 === 0 ) {
        array.push($('<div class="fizz-buzz-item buzz"><span>buzz</span></div>'));
      }
      else {
          array.push($(`<div class="fizz-buzz-item"><span>${i}</span></div>`));
      }
    }
    $('.js-results').append(array);
  });
});
