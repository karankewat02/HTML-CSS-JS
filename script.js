$(window).on("load", function () {
      $(".loader").fadeOut("slow");
      $("body").fadeIn("slow");
 
})



$( document ).ready(function() {

      const closeBtn = document.querySelector(".fa-times");
      const registerBtn = document.querySelector("#registerbtn");
      const popUp = document.querySelector(".popUpContainer");
      const popUpBall = document.querySelector(".popUpBall");
      
      closeBtn.addEventListener("click",()=>{
          popUp.style.display = "none";
      })
      registerBtn.addEventListener("click",()=>{
          popUp.style.display = "none";
      })
      popUpBall.addEventListener("click",() => {
          popUp.style.display = "flex";
      })



      const burgerMenu = document.querySelector(".burgerMenu");
      const menu = document.querySelector(".navLinks");
      
      burgerMenu.addEventListener("click",() => {
          burgerMenu.classList.toggle("active");
          menu.classList.toggle("activeMenu");
      })


      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        effect: "slide",
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });



    var zindex = 10;
      
      $("div.card").click(function(e){
        e.preventDefault();
        
        var isShowing = false;
        
        if ($(this).hasClass("show")) {
            isShowing = true
        }

        if ($("div.cards").hasClass("showing")) {
          // a card is already in view
          $("div.card.show")
            .removeClass("show");

          if (isShowing) {
            // this card was showing - reset the grid
            $("div.cards")
              .removeClass("showing");
          } else {
            // this card isn't showing - get in with it
            $(this)
              .css({zIndex: zindex})
              .addClass("show");

          }

          zindex++;

        } else {
          // no cards in view
          $("div.cards")
            .addClass("showing");
          $(this)
            .css({zIndex:zindex})
            .addClass("show");

          zindex++;
        }
        
      });


});