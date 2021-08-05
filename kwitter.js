// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCVhJSsyb9wiBifIE_Si7II3irixYJLzEM",
    authDomain: "kwitter2-c6e3c.firebaseapp.com",
    projectId: "kwitter2-c6e3c",
    storageBucket: "kwitter2-c6e3c.appspot.com",
    messagingSenderId: "321976076701",
    appId: "1:321976076701:web:90f4644d15ab3c8f9cc774"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function user_name(){

var name = document.getElementById("username").value;

firebase.database().ref("/").child(name).update({

USER : name

});

  }

  document.getElementById("username").value = "";