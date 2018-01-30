// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Initialize app
var myApp = new Framework7({pushState:true,});

// Add view
var mainView = myApp.addView('.view-main', {
  url: '/'
});

// Map image
var mapPopup = myApp.photoBrowser({
  photos: [
    'img/MaltaMap.jpg',
  ],
  type: 'popup'
});

$$(document).on('pageInit', function() {
  $$('.map-popup').on('click', function() {
     mapPopup.open();
  });

//   $$('#textpage').on('change', function() {
//      location.href = "myitems.html"
//   });
});


//Client ID: 934568525970-k030jnmj8inqp2c48arrmopvlsg5ncgh.apps.googleusercontent.com
//Client Secret: 4RNnmMQbJHCAlw-rq-EGw7P-
