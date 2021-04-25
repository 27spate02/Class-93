
 var firebaseConfig = {
    apiKey: "AIzaSyAY_VlCD_HMjT4Iv0rht4Xdqstaa-Ugj7g",
    authDomain: "class-93-fa5c5.firebaseapp.com",
    databaseURL: "https://class-93-fa5c5-default-rtdb.firebaseio.com",
    projectId: "class-93-fa5c5",
    storageBucket: "class-93-fa5c5.appspot.com",
    messagingSenderId: "740152072735",
    appId: "1:740152072735:web:7f28967e7f954c269b132a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({  
        purpose : "adding user"
    });
}