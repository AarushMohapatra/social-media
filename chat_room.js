var firebaseConfig = {
  apiKey: "AIzaSyAhPgwlvF0NvvI3egWJ4N7yIc8cwZ5_Tbo",
  authDomain: "socialmedia-28f31.firebaseapp.com",
  databaseURL: "https://socialmedia-28f31-default-rtdb.firebaseio.com",
  projectId: "socialmedia-28f31",
  storageBucket: "socialmedia-28f31.appspot.com",
  messagingSenderId: "460832577843",
  appId: "1:460832577843:web:57efa732a8e6236f7b4646"
};
user_name = localStorage.getItem("name");
room_name = localStorage.getItem("room_name");
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addRoom() {
  room_name = document.getElementById("room_name").value;
  room_name = room_name + " Message sent by: " + user_name;
  firebase.database().ref("/").child(room_name).update({
    purpose: "message"
  });

  localStorage.setItem("room_name", room_name);

  //window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>" + Room_names + "<span><img class='user_tick' src='tick.png'></span></div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}
getData();
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}


