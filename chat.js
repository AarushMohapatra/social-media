// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDJhzwo_nAyUIdqxSDzGNyL4QeRy_GWk2Q",
  authDomain: "login-cb19c.firebaseapp.com",
  databaseURL: "https://login-cb19c-default-rtdb.firebaseio.com",
  projectId: "login-cb19c",
  storageBucket: "login-cb19c.appspot.com",
  messagingSenderId: "35014884101",
  appId: "1:35014884101:web:075f7824e9021984c7556c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    password = document.getElementById("password").value;
    names = document.getElementById("names").value
    localStorage.setItem("name", names);
    firebase.database().ref("/").child(user_name + " has joined the chat!").update({"password" : password});
    firebase.database().ref("/").child(user_name + " has joined the chat!").update({"name" : names});
    window.location = "chat_room.html";
    
}



