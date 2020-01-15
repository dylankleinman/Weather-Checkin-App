function onSignIn(googleUser) {
    signedIn = true;
    sessionStorage.clear();
    // console.log('cleared session storage')
    sessionStorage.setItem('signedIn',signedIn);
    profile = googleUser.getBasicProfile();
    //console.log(profile);

    //if the user is signed in replace the sign in button with profile image
    document.getElementById("profile").setAttribute("src", profile.getImageUrl());
    document.getElementById("profileModalIMG").setAttribute("src", profile.getImageUrl());
    document.getElementById("profileModalName").innerHTML = profile.getName();
    document.getElementById("profileModalEmail").innerHTML = profile.getEmail();
    document.getElementById("profile").setAttribute("class", "show");
    document.getElementById("login").setAttribute("class", "g-signin2 hidden");

    //show the navbar after sign in button is replaced with user profile photo
    console.log('display flex')
    document.getElementById("nav-links").style.display = "flex";

    if(window.location.pathname == '/'){
        //add users name to welcome box
        document.getElementById("userName").innerHTML = " " + profile.ofa;
    }
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    signedIn = false;
    auth2.signOut().then(function () {
        // console.log('User signed out.');
        document.getElementById("profile").setAttribute("class", "fa fa-user-circle-o hidden");
        document.getElementById("login").setAttribute("class", "g-signin2 show");
        sessionStorage.clear();
        // console.log('cleared session storage')
    });
    //location.reload();
}