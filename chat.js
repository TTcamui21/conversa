// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI

const firebaseConfig = {
    apiKey: "AIzaSyD5w4IU-5SvKYysb_M0A1HoKJJiMEnrhwk",
    authDomain: "cenversar.firebaseapp.com",
    projectId: "cenversar",
    storageBucket: "cenversar.appspot.com",
    messagingSenderId: "484686207671",
    appId: "1:484686207671:web:57808c15d95622dea90b32",
    measurementId: "G-Y8PTM21WH0"
  };
  
// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    Armazene o nome de usuário em localStorage
l
    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
   localStorage.setItem("user_name",user_name);
   window.location = "chat_room.html";
}



