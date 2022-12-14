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
  
  msg = document.getElementById("msg").value;
  firebase.database().ref("/").push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
  /*room_name = document.getElementById("room_name").value;
  room_name = room_name + " Message sent by: " + user_name;
  firebase.database().ref("/").child(room_name).update({
    purpose: "message"
  });

  localStorage.setItem("room_name", room_name);window.location = "kwitter_page.html";*/
}

function getData() {
  /*firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>" + Room_names + "<span><img class='user_tick' src='tick.png'></span></div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
*/
firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code
  console.log(firebase_message_id);
  console.log(message_data);
  name = message_data['name'];
  message = message_data['message'];
  like = message_data['like'];
  name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
  message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
  span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

 row = name_with_tag + message_with_tag +like_button + span_with_tag;       
 document.getElementById("output").innerHTML += row;
//End code
} });  }); 
}
getData();
function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref("/").child(message_id).update({
		like : updated_likes  
	 });

}
function logout() {
  localStorage.removeItem("name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}


