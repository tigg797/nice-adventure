const firebaseConfig = {
    apiKey: "AIzaSyBfqRbvPDZjEMmdle2Lthm7bDbYQllsLOE",
    authDomain: "kwitterthefirst.firebaseapp.com",
    databaseURL: "https://kwitterthefirst-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kwitterthefirst",
    storageBucket: "kwitterthefirst.appspot.com",
    messagingSenderId: "394988293261",
    appId: "1:394988293261:web:917187f2d323bce631a6c4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser() {
    user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
});
}