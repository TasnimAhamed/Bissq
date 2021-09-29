
//Go to top

function goTop() {
  document.documentElement.scrollTop = 0;
}

//Mobile Menu

const burgerIcon=document.getElementById("burger-icon")
const sideNav=document.getElementById("mySidenav")
burgerIcon.addEventListener('click',()=>{
  sideNav.classList.toggle("mobileNavStyle");
})
burgerIcon.addEventListener('click',()=>{
  burgerIcon.classList.toggle("open");
})

//Sticky Header

$(document).ready(function(){
  $(window).scroll(function(){
      var navFixed = $(window).scrollTop();
      if(navFixed > 100){
          $(".main-nav").addClass("fixed-top fadeInDown");
          $(".header-banner").addClass("banner-padding");
      }else{
          $(".main-nav").removeClass("fixed-top fadeInDown");
          $(".header-banner").removeClass("banner-padding");

      }
  });

  $(window).on("load", function() {

    // page load function start
    $("#pre-loader").fadeOut("slow");
    // page load function end 
});
})


//Scroll Bar JS
var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                    html.clientHeight, html.scrollHeight, html.offsetHeight );

var clientHeight = html.clientHeight;


$(document).ready(function(){

    $(window).scroll(function(){
        var navFixed = $(window).scrollTop();
        var result=(navFixed*100)/(height-clientHeight);

        document.getElementById('scroll-bar').style.width=  `${result}%`;
    });
})