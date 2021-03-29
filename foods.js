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
let contactInfo = firebase.database().ref("FoodInfo");

// Listen for a submit
document.querySelector(".food-details").addEventListener("text", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let container = document.querySelector(".text").value;
  
  console.log(container);

  saveFoodInfo(container);

  document.querySelector(".food-details").reset();
}

// Save infos to Firebase
function saveFoodInfo(container) {
  let newFoodInfo = foodInfo.push();

  newContactInfo.set({
    foodinfo: container,
  });
}