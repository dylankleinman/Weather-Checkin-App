function onSignIn(googleUser) {
    console.log('here');
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    document.getElementById("profile").setAttribute("class", "fa fa-user-circle-o show");
    document.getElementById("login").setAttribute("class", "g-signin2 hidden");
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        document.getElementById("profile").setAttribute("class", "fa fa-user-circle-o hidden");
        document.getElementById("login").setAttribute("class", "g-signin2 show");
    });
}