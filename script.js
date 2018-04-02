'use strict';

// I am not a huge fan of these types of games, so I though I'd make the site look like a spam site under the guise
// of a cookie clicker as a joke. However, I couldn't get a lot of simple stuff to work.


// Plan was to have the Instant Gratification Button display an alert to have a picture of puppies,
// turns out you can't do that with alert. Excitement reminder button would have made a "crowd cheering" sound effect,
// but I also could not get that to work. Finally, the sense of accomplishment button would have prompted you
// with an alert with a form that asked for your address, social security and bank account number to
// receive a trophy mailed to you and complimentary voucher to say at a Days Inn for two nights in Jacksonville Fl.
// Again, forms will not work with alerts and neither will images.

// Although I wasn't shooting for any level of professionalism with this project like my other two, I was at least
// trying to make it functional and entertaining. However, my level of understanding with Javascript is limited, and I could not 
// make it click with this project no matter how many different options I tried. Bummer.

$(document).ready(function(){
  var score = 0;
  $('#clickbutton')addEventListener("click", function(){
    score++ ;
    score = $('#score');
  })
})
