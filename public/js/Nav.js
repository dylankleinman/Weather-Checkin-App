let modalOpen = false;

//if the user hasn't signed in, show the nav-bar with sign in button
if(!sessionStorage.getItem("signedIn")){
    document.getElementById("nav-links").style.display = "flex";
}

console.log(sessionStorage.getItem("signedIn"));

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a, .nav-links div.g-signin2, #profile");
    let i = 1;

    // window.addEventListener('resize',()=>{nav.style.transform})
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach( (link, index) => {
            if(i % 2 == 0){
                link.style.animation = `navLinkFadeOut 0.5s ease backwards ${index/7}s`;
            } else {
                link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index/7 +0.3}s`;
            }
        })

        burger.classList.toggle("toggle");
        i++;
    })

    profileModal = document.getElementById("profileModal");
    window.onclick = (event) => {
        if(event.target == document.getElementById("profile") ){
            profileModal.classList.remove("hidden");
            modalOpen = !modalOpen;
        } else if (event.target != document.getElementById("profileModal") && event.target != document.getElementById("profileModalName") && event.target != document.getElementById("profileModalEmail") && event.target != document.getElementById("profileModalIMG") && event.target != document.getElementById("profileModalInfo"))
        {
            profileModal.classList.add("hidden");
            modalOpen = !modalOpen;
        }
    }
}

navSlide();