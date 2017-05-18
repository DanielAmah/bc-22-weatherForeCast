(function() {
    var config = {
        apiKey: "AIzaSyA8nkxbEk7by1ZR9jzMSvW5cVFwgwYMt6c",
        authDomain: "bc-22-weatherforecastapp.firebaseapp.com",
        databaseURL: "https://bc-22-weatherforecastapp.firebaseio.com",
        projectId: "bc-22-weatherforecastapp",
        storageBucket: "bc-22-weatherforecastapp.appspot.com",
        messagingSenderId: "994611442270"
    };
    firebase.initializeApp(config);

    let Email = document.getElementById('email');
    let password = document.getElementById('password');
    let btnsignin = document.getElementById('btnsignin');
    let btnsignup = document.getElementById('btnsignup');

    btnsignup.addEventListener('click', e => {

        let email = Email.value;
        let pass = password.value;
        let auth = firebase.auth();

        let promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));

    })

    btnsignin.addEventListener('click', e => {

        let email = Email.value;
        let pass = password.value;
        let auth = firebase.auth();

        let promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
        promise.then(user => window.location = '../weather.html');

    })

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);

        } else {

            console.log('not logged in');
            window.location.href = '../signin.html';
        }
    });




}());