import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyBOhkIxF_PE49Q4hAjGX1I3v5GLymqSdvk",
        authDomain: "pro-c67-team-voting.firebaseapp.com",
        databaseURL: "https://pro-c67-team-voting-default-rtdb.firebaseio.com",
        projectId: "pro-c67-team-voting",
        storageBucket: "pro-c67-team-voting.appspot.com",
        messagingSenderId: "921587576808",
        appId: "1:921587576808:web:920b7b834c30cdeed17e5d"
   
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();