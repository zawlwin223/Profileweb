
let prevScrollpos = $(window).scrollTop();
$(window).scroll(function(){
    let currentHeight=$(this).scrollTop();
    if (prevScrollpos > currentHeight) {
        $('.nav-site').css('top','0');
      } else {
        $('.nav-site').css('top','-500px');
      }
      prevScrollpos=currentHeight;
      let screenHeight=$(window).height();
      if(currentHeight>=screenHeight-200){
        // $('.nav-site').addClass('jq-nav');
      }else{
        $('.nav-site').removeClass('jq-nav');
        setActive("home")
      }
})
$(".navbar-toggler").click(function(){
$(".navbar-toggler i").toggleClass("feather-x")
})
function setActive(current){
  $(".nav-link").removeClass("current-link")
$(`.nav-item .nav-link[href='#${current}']`).addClass("current-link")
}
function currentSec(){
  let currentsection=$("section[id]")
  currentsection.waypoint(function(direction){
    if(direction=="down"){
      let currentId=$(this.element).attr("id")
      console.log(currentId)
      setActive(currentId)
      
    }
  },{offset:'0%'})
  currentsection.waypoint(function(direction){
    if(direction=="up"){
      let currentId=$(this.element).attr("id")
      console.log(currentId)
      setActive(currentId)
      
    }
  },{offset:'0%'})

}
currentSec()
$(window).on("load",function(){
  $(".lds-facebook").fadeOut(500,function(){
    $(this).remove()
  })
})



