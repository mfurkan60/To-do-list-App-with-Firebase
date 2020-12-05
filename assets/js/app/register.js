$(document).ready(function(){

      // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAggDvMl8jrBzi8jCdQGEHMYK1SCc-Odhc",
    authDomain: "fir-todolist-28694.firebaseapp.com",
    projectId: "fir-todolist-28694",
    storageBucket: "fir-todolist-28694.appspot.com",
    messagingSenderId: "357075627457",
    appId: "1:357075627457:web:1c813343d69f1627399340"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
    $("#registerBtn").click(function(){
        let email = $("#email").val();
        let pass = $("#password").val();
        
        firebase.auth().createUserWithEmailAndPassword(email,pass).then(function(){
            firebase.auth().signInWithEmailAndPassword(email, pass).then(function () {
                window.location.href = "index.html";
              })
            window.location.href = "index.html";
        }).catch(function(error){
            alert(error.message)
        })
        
    })


})