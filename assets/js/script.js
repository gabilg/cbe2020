function toggleMenuMobile(is_closed) {

    if (is_closed) {
      $('.menu-btn').removeClass('active');
      $('.menu-btn').addClass('not-active');
    } else {
      $('.menu-btn').toggleClass('active');
      $('.menu-btn').toggleClass('not-active');
    }
    
    if (!$('#menu').hasClass('responsive') && !is_closed) {
        $('#menu').addClass('responsive')
        $('#mobile-menu').addClass('mobile-menu-active')
        // $('.menu-layout').addClass('menu-mobile-active')
    } else {
        $('#menu').removeClass('responsive')
        $('#menu').addClass('menu')
        $('.mobile-menu').removeClass('mobile-menu-active')
        $('.dropdown-menu .menu-item').removeClass('show-txt-menu');
        $('.dropdown-menu').removeClass('show');
        $('.drop-btn img').removeClass('rotate');
        // $('.menu-layout').removeClass('menu-mobile-active')
    }
}

$(document).ready(function() {


   
    // $('body').on('click', '.menu .menu-item', function(e) {

    // toggleMenuMobile()

    // }

    // $(window).load(function(){
    //     $('#cover').fadeOut(1000);
    // });

    $(window).resize(function(){
        if ($(this).width() >= 1120 && $('#menu').hasClass('responsive')){
          toggleMenuMobile()
        }

        // if ($(this).width() >= 1120) {
        //   changeNavColor()
        // }
    });


    $('.mobile-menu').on('click', () => {
        toggleMenuMobile()
    });


    function changeNavColor(_this) {

        const is_scroll = $(_this || window).scrollTop() > 60;

        var pageURL = window.location.pathname;
    
        if (pageURL.indexOf('index') >= 0 || pageURL === '/') {
    
            $('.nav').toggleClass('scroll', is_scroll);
            $('.container-logo').toggleClass('scroll', is_scroll);
            $('.logo-img').toggleClass('scroll', is_scroll);
            $('.dropdown-menu').toggleClass('scroll', is_scroll);
    
        }
    }

    changeNavColor()
    

    $(window).scroll(function() {
        
     changeNavColor(this)

        // if ($('.nav').hasClass('scroll')) return

        // if ($('#menu').hasClass('responsive')) {
        //     $('#menu').toggleClass('scroll', is_scroll);
        // }
        
    });

    $('.drop-btn').on('click', () => {
        $('.dropdown-menu').toggleClass('show');
        $('.dropdown-menu .menu-item').toggleClass('show-txt-menu');
        $('.drop-btn img').toggleClass('rotate');
     });
      

    $(".sponsors-btn, .page-top-btn").on('click', function(event) {

      let top_distance = 80

      if ($(this).hasClass('sponsors-btn')) {
        // top_distance = 80
        toggleMenuMobile(true)
      }
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top - top_distance
          }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          // window.location.hash = hash;
          });
      } // End if
    }); 
  
    $(window).on('click', function(event) {

        if (!event.target.matches('.drop-btn') && 
          !event.target.matches('.rotate') &&
          $('.mobile-menu').is(':hidden')) {
          var dropdowns = document.getElementsByClassName("dropdown-menu");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              $('.dropdown-menu').removeClass('show');
              $('.drop-btn img').removeClass('rotate');
            
            }
          }
        }
    }); 

    // TOGGLE ORGANIZADORES

    $('.org-sub').on('click', function() {

        if ($(this).hasClass('sub-active')) return

        $('.org-sub').removeClass('sub-active')
        $(this).addClass('sub-active');
        $('.organizers, .local-organizing, .scicom').stop(true,false)

        if($('#organizers').hasClass('sub-active')) {

            $('.organizers').show()

            $('.organizers').animate({
              left: '0'
            }, 300, 'swing', function(){
              $('.org-wrap').css('height','auto')
            })

            $('.scicom').animate({
              left: '100vw'
            }, 400, 'swing', function(){
              $(this).hide()
              
            })
            $('.local-organizing').animate({
              left: '200vw'
            }, 400, 'swing', function(){
              $(this).hide()
            })
            
        } else if($('#scicom').hasClass('sub-active')) {
         
          $('.scicom').css('display','flex') 
          

          $('.scicom').animate({
            left: '0'
          }, 300, 'swing', function(){
            
          })

          $('.org-wrap').css('height',$('.scicom').height())

          $('.organizers').animate({
            left: '-100vw'
          }, 400, 'swing', function(){
            $(this).hide()
          })
          $('.local-organizing').animate({
            left: '100vw'
          }, 400, 'swing', function(){
            $(this).hide()
          })
          
 
      } else {

          $('.local-organizing').show()
        
          
          $('.local-organizing').animate({
            left: '0'
          }, 300, 'swing', function(){
            $('.org-wrap').css('height',$('.local-organizing').height())
          })

          $('.scicom').animate({
            left: '-100vw'
          }, 400, 'swing', function(){
            $(this).hide()
            
          })

          $('.organizers').animate({
            left: '-200vw'
          }, 400, 'swing', function(){
            $(this).hide()
          })
           
          
        } 
            
    });

    $('.banner').slick({
        infinite: true,
        speed: 700,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 750,
            settings: {
              arrows: false
            }
          }
        ]
    });

    $('.sponsors').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplaySpeed: 4200
                // infinite: true,
                // dots: true
              }
            },
            {
                breakpoint: 780,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  autoplaySpeed: 4200,
                  speed: 1000
                }
              },
              {
                breakpoint: 550,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplaySpeed: 4200,
                  speed: 1000
                }
              }
            ]
    });

    $('.org-sub-slick').slick({
      responsive: [
        {
          breakpoint: 550,
          settings: {
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            focusOnSelect: true,
            speed: 400
          }
        }
      ]
    });

    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

    
    $('.about-main-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 4000,
        asNavFor: '.about-small-img'
    });
    
    $('.about-small-img').slick({
        // infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.about-main-img',
        dots: false,
        focusOnSelect: true,
        vertical: true
    });
          

    $("#gallery").unitegallery({
        tiles_type:"justified"
    }); 




});