
$(document).ready(function(){ 

	$('#suretodelete').click(function(){ /*  confirm delete start **/
     	Swal.fire({
		  title: 'Are you sure?',
		  text: "You won't be able to revert this!",
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
		  if (result.isConfirmed) {
		    Swal.fire(
		      'Deleted!',
		      'Your file has been deleted.',
		      'success'
		    )
		  }
		})
    }) /*  confirm delete end **/

    
    $('#modalwithimage').click(function(){ /*modalwithimage start*/
    	Swal.fire({
		  title: 'Sweet!',
		  text: 'Modal with a custom image.',
		  imageUrl: 'https://unsplash.it/400/200',
		  imageWidth: 400,
		  imageHeight: 200,
		  imageAlt: 'Custom image',
		 
		})
    });
    /*modalwithimage end*/
	
	/*Custom width, padding, background. */
	$('#custompaddingwithbg').click(function(){ 
		Swal.fire({
		  title: 'Custom width, padding, background.',
		  width: 600,
		  padding: '3em',
		  background: '#fff url(../my_theme/images/main_header/about-bg.jpg)',
		  backdrop: `
		    rgba(0,0,123,0.4)
		    url("../my_theme/images/main_header/about-bg.jpg")
		    left top
		    no-repeat
		  `
		})
	});
	/*Custom width, padding, background. */


	/*Chaining swal2 modals is easy*/
	$('#chainingmodel').click(function(){ 
		Swal.mixin({
		  input: 'text',
		  confirmButtonText: 'Next &rarr;',
		  showCancelButton: true,
		  progressSteps: ['1', '2', '3']
		}).queue([
		  {
		    title: 'Question 1',
		    text: 'Chaining swal2 modals is easy'
		  },
		  'Question 2',
		  'Question 3'
		]).then((result) => {
		  if (result.value) {
		    const answers = JSON.stringify(result.value)
		    Swal.fire({
		      title: 'All done!',
		      html: `
		        Your answers:
		        <pre><code>${answers}</code></pre>
		      `,
		      confirmButtonText: 'Lovely!'
		    })
		  }
		})
	});
	/*Chaining swal2 modals is easy */

	/* Toast js success toast*/
	$('#toastjssuccess').click(function(){
		const Toast = Swal.mixin({
		  toast: true,
		  position: 'top-end',
		  showConfirmButton: false,
		  timer: 3000,
		  timerProgressBar: true,
		  onOpen: (toast) => {
		    toast.addEventListener('mouseenter', Swal.stopTimer)
		    toast.addEventListener('mouseleave', Swal.resumeTimer)
		  }
		})

		Toast.fire({
		  icon: 'success',
		  title: 'Signed in successfullyawttxc awtgsag wtg awtg awaw wa'
		})
	});
	/*Toast js success toast*/
	

	/* user profile gallery start */
	
	$(document).ready(function(){
	 	$(".user_profile .fancybox").fancybox({
	        openEffect: "none",
	        closeEffect: "none"
	      
	    });
	    
	    $(".user_profile .zoom").hover(function(){
			
			$(this).addClass('transition');
		}, function(){
	        
			$(this).removeClass('transition');
		});
	});
    

	/* user profile gallery end */

/* for navbar colleps */
	$(document).ready(function () {
	  $(".navbar-nav li .my-link").click(function(event) {
	    $(".navbar-collapse").collapse('hide');
	  });
	});

/* for navbar colleps */

/* owl carosol */
$('.carousel-2-owl .owl-carousel').owlCarousel({
    loop:false,
    nav:true,
    lazyLoad: true,
    
    responsive:{
        0:{
            items:1,
            nav:false,
            navText : ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>','<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],

        },
        600:{
            items:2,
            nav:false,
             navText : ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>','<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
        },
        1000:{
            items:3,
             dots:false,
        }
        
    }
})


$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    smartSpeed:200,

    nav:true,
    navText : ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa  fa-long-arrow-right" aria-hidden="true"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1

        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})























});



