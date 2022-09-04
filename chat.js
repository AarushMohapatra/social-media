// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAhPgwlvF0NvvI3egWJ4N7yIc8cwZ5_Tbo",
    authDomain: "socialmedia-28f31.firebaseapp.com",
    databaseURL: "https://socialmedia-28f31-default-rtdb.firebaseio.com",
    projectId: "socialmedia-28f31",
    storageBucket: "socialmedia-28f31.appspot.com",
    messagingSenderId: "460832577843",
    appId: "1:460832577843:web:57efa732a8e6236f7b4646"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    password = document.getElementById("password").value;
    names = document.getElementById("names").value
    localStorage.setItem("name", names);
    firebase.database().ref("/").child(user_name + "has joined the chat!").update({"password" : password});
    firebase.database().ref("/").child(user_name + "has joined the chat!").update({"name" : names});
    window.location = "chat_room.html";
    
}



