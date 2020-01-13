function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log(profile);
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    // document.getElementById("profile").setAttribute("class", "fa fa-user-circle-o show");

    //replace the sign in button with profile image
    document.getElementById("profile").setAttribute("src", profile.getImageUrl());
    document.getElementById("profileModalIMG").setAttribute("src", profile.getImageUrl());
    document.getElementById("profileModalName").innerHTML = profile.getName();
    document.getElementById("profileModalEmail").innerHTML = profile.getEmail();
    document.getElementById("profile").setAttribute("class", "show");
    document.getElementById("login").setAttribute("class", "g-signin2 hidden");

    //add users name to welcome box
    document.getElementById("userName").innerHTML = " " + profile.ofa;

}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        document.getElementById("profile").setAttribute("class", "fa fa-user-circle-o hidden");
        document.getElementById("login").setAttribute("class", "g-signin2 show");
    });
    location.reload();
}