// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyDLx2wggMZ_xrW6wY3SxBjzUrScwbyTNe8",
    authDomain: "mechanical-turk-fps-experiment.firebaseapp.com",
    databaseURL: "https://mechanical-turk-fps-experiment.firebaseio.com",
    projectId: "mechanical-turk-fps-experiment",
    storageBucket: "mechanical-turk-fps-experiment.appspot.com",
    messagingSenderId: "607114655443",
    appId: "1:607114655443:web:d3ee1c359b78e101858626",
    measurementId: "G-3KL2QEJG4V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let database = firebase.database();

function pushData(data){

    database.ref().set({
        value: data
    });
}