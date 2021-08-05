function myFunction(){
			var x=document.getElementById("man")
			if (x.style.display =="block"){
				x.style.display="none";
			}
			else{
				x.style.display="block";
			}
		}

		let sliderImages=document.querySelectorAll('.slide'),
  arrowleft=document.querySelector('#arrow-left'),
    arrowright=document.querySelector('#arrow-right'),
    current=0;
    function reset(){
      for (let i = 0; i <sliderImages.length; i++){
       sliderImages[i].style.display='none' ;
      }
    }
    //init slider
    function startSlide(){
      reset();
      sliderImages[0].style.display ='block';
    }
    //show pre
    function sliderleft() {
    reset() ;
    sliderImages[current - 1].style.display ='block'; 
    current --;
    }

     //show next
function sliderright() {
    reset() ;
    sliderImages[current + 1].style.display ='block'; 
    current ++;
    }
    
     //right arrow click
     arrowright.addEventListener('click',function(){
      if(current===sliderImages.length -1){
        current=-1;
      }
      sliderright();
    })
     //left arrow click
    arrowleft.addEventListener('click',function(){
      if(current===0){
        current=sliderImages.length;
      }
      sliderleft();
    })

    startSlide();

    $(document).ready(function () {
    $('div.hidden').fadeIn(4000).addClass('hidden');
});

    $('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
   dots: true,
   arrows:true,
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

      // instead of a settings object
        
 $('.slider1').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
   dots: true,
   arrows:false,
autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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
// slider3
$('.slider3').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  autoplay:true,
   arrows:false,
autoplaySpeed:2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});