<!--
<template>
    <div>
      <button class="button" @click="logInWithFacebook"> Login with Facebook</button>
    </div>
  </template>

<script>  
    export default {
        name:"facebookLogin",
        methods: {
        async logInWithFacebook() {
            await this.loadFacebookSDK(document, "script", "facebook-jssdk");
            await this.initFacebook();
            window.FB.login(function(response) {
            if (response.authResponse) {
                alert("You are logged in &amp; cookie set!");
                checkLoginState();
                // Now you can redirect the user or do an AJAX request to
                // a PHP script that grabs the signed request from the cookie.
            } else {
                alert("User cancelled login or did not fully authorize.");
            }
            });
            return false;
        },
        async initFacebook() {
            window.fbAsyncInit = function() {
            window.FB.init({
                appId: "559856828979383", //You will need to change this
                cookie: true, // This is important, it's not enabled by default
                version: "v13.0"
            });
            };
        },
        checkLoginState : function () {               // Called when a person is finished with the Login Button.
            window.FB.getLoginStatus(function(response) {   
            document.getElementById('status').innerHTML = JSON.stringify(response);
            fetch('https://localhost:3000')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
            });
        },
        async loadFacebookSDK(d, s, id) {
            var js,
            fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
            return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }
        }
    };
  </script>
-->


<template>
    <!-- The JS SDK Login Button -->
    <div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" scope="public_profile,email" onlogin="checkLoginState();"></div>

    <!-- Div where the JSON result is displayed (for test purposes) -->
    <div id="status"></div>

    <!-- Load the JS SDK asynchronously
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script> -->
</template>

<script>


    export default {
        mounted() {
            let element = document.createElement('script');
            element.src = 'https://connect.facebook.net/en_US/sdk.js';
            element.async = true;
            element.defer = true;
            element.crossOrigin = 'anonymous';
            document.body.appendChild(element);
        }
    }

    window.fbAsyncInit = function() {
        window.FB.init({
          appId      : '559856828979383',
          cookie     : true,                     // Enable cookies to allow the server to access the session.
          xfbml      : true,                     // Parse social plugins on this webpage.
          version    : 'v15.0'                   // Use this Graph API version for this call.
        });
    }

 

  function checkLoginState() {               // Called when a person is finished with the Login Button.
    window.FB.getLoginStatus(function(response) {   
      document.getElementById('status').innerHTML = JSON.stringify(response);
      fetch('https://localhost:5000/api/Products')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    });
  }
</script>

 

