const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menuprincipal');
    const nav2 = document.querySelector('.navobject');

    burger.addEventListener('click', ()=>{
        //toggle nav
        nav.classList.toggle('nav-active');
        nav2.classList.toggle('nav-active');

        //burger animation
        burger.classList.toggle('toggle');

    })
}

navSlide();

function fbk1() {
    document.getElementById("fbk").src = "assets/img/facebook-rouge.png";
}
function fbk2() {
    document.getElementById("fbk").src = "assets/img/facebook.png";
}

function twit1() {
    document.getElementById("twit").src = "assets/img/twitter-rouge.png";
}
function twit2() {
    document.getElementById("twit").src = "assets/img/twitter.png";
}

function sky1() {
    document.getElementById("sky").src = "assets/img/skype-rouge.png";
}
function sky2() {
    document.getElementById("sky").src = "assets/img/skype.png";
}

function lin1() {
    document.getElementById("lin").src = "assets/img/linkdin-rouge.png";
}
function lin2() {
    document.getElementById("lin").src = "assets/img/linkdin.png";
}

var myNav = document.getElementById('navi');

window.onscroll = () => { 
   
   if (window.scrollY > 200) {
        document.getElementById('navi').classList.add('navOnScroll')
   }else{
        if (document.getElementById('navi').classList.contains('navOnScroll')) {
            document.getElementById('navi').classList.remove('navOnScroll')
        }
   }
}


AOS.init();

