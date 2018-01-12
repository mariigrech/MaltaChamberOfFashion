// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Initialize app
var myApp = new Framework7();

// Add view
var mainView = myApp.addView('.view-main', {
    url: '/'
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

    function onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
  $("#bomba").click(function() {
    alert("Logging with google");
    onSignIn('maria16grech@gmail.com');
  });

  window.fbAsyncInit = function() {

      FB.init({
        appId      : '136085500408614',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.11'
      });

    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   $("#bomba2").click(function() {
     FB.login(function(response) {
        // handle the response
        console.log("Response goes here!");

        }, {scope: 'read_stream,publish_stream,publish_actions,read_friendlists'});
      });
      // Map image
var mapPopup = myApp.photoBrowser({
  photos: [
    'img/MaltaMap.jpg',
  ],
  type: 'popup'
});
$$('.pb-popup').on('click', function() {
  mapPopup.open();
});
});

//Client ID: 934568525970-k030jnmj8inqp2c48arrmopvlsg5ncgh.apps.googleusercontent.com
//Client Secret: 4RNnmMQbJHCAlw-rq-EGw7P-
