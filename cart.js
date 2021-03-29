var firebaseConfig = {
    apiKey: "AIzaSyCjsS43n-HUQoRgo_DM2ObEBI330I-TpU0",
    authDomain: "food-delivery-24287.firebaseapp.com",
    projectId: "food-delivery-24287",
    storageBucket: "food-delivery-24287.appspot.com",
    messagingSenderId: "998629428903",
    appId: "1:998629428903:web:ff5b6adad89e6b05ad1582"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // Refernece contactInfo collections
let contactInfo = firebase.database().ref("CustomerDetails");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let address = document.querySelector(".address").value;
  console.log(name, email, address);

  saveContactInfo(name, email, address);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, address) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    address: address,
  });
}