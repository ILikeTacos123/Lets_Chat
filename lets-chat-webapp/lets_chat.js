var firebaseConfig = {
      apiKey: "AIzaSyDEfow760nOWPFoSYKN1hdzd2NV2hcn_00",
      authDomain: "lets-chat-b9813.firebaseapp.com",
      databaseURL: "https://lets-chat-b9813-default-rtdb.firebaseio.com",
      projectId: "lets-chat-b9813",
      storageBucket: "lets-chat-b9813.appspot.com",
      messagingSenderId: "813940498031",
      appId: "1:813940498031:web:8a1e73b37791d7b1c1b79a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    var roomname, row;
    var username = localStorage.getItem("Username");
    document.getElementById("username").innerHTML = username;
    
    function addRoom(){
          roomname = document.getElementById("newroom_input").value;
          firebase.database().ref("/").child(roomname).update({
                purpose : "adding roomname"
          });
          localStorage.setItem("Room Name", roomname);
          window.location = "room_page.html";
    }
    
    
    function getData() {firebase.database().ref("/").on('value',
    function(snapshot) {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey =
    childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
                      row = "<div class='room_name_list' id="+ Room_names +" onclick='redirectToRoomPage(this.id)'> # " +Room_names+ "</div> <hr>";
                      document.getElementById("output").innerHTML += row;
     });});}
    
    getData();
    
    
    function redirectToRoomPage(name){
          console.log(name);
          localStorage.setItem("Room Name", name);
          window.location = "room_page.html";   
    }
    
    function logout() {
          window.location = "index.html";
          localStorage.removeItem("Room Name");
          localStorage.removeItem("Username");
    }