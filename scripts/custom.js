

// ========== SMOOTH SCROLL SCRIPT ==============

$.fn.scrollView = function () {
    return this.each(function () {
        var self = this,
        top = $(self).data('top') || $(self).offset().top;
        $(self).data('top',top);
        $('html, body').animate({
            scrollTop: top
        }, 700);
    })
};



$(document).ready(function(){
    
	

// ========== COLLAPSE MENU SCRIPT ========== 

    $(".navbar-collapse .navbar-nav li a").click(function(){
        var scrollTo = $(this).attr('href');
        $(scrollTo).scrollView();
        $('[data-spy="scroll"]').each(function () {
            var $spy = $(this).scrollspy('refresh')
        });
		return false;
    });
        
  
        
// ============= GALLERY SETTINGS ============

    var owl = $("#owl-slider");
    owl.owlCarousel({
        items : 4, 
        itemsDesktop : [1200,3], 
        itemsDesktopSmall : [900,3], 
        itemsTablet: [800,2], 
        itemsMobile : [500,2], 
        itemsMobile : [330,1] 
    });



// ============= "PEOPLE SAY" SLIDER SETTINGS ============
    
    var owl2 = $("#people-slider");
    owl2.owlCarousel({
		autoPlay : 8000,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });
    $(".next").click(function(){
        owl2.trigger('owl.next');
    });
    $(".prev").click(function(){
        owl2.trigger('owl.prev');
    });
    


// ============= MAIN SLOGAN SLIDER SETTINGS ============
    
    $("#text-slider").owlCarousel({
        autoPlay : 5000,
        singleItem:true,
		stopOnHover:true,
		pagination:false
    });


	
// ============= MAGNIFIC POPUP(LIGHTBOX) SETTINGS ========================   
	          
    $('#owl-slider').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: { // options for gallery
            enabled: true
        }
    });

	  
	           
// ============= SUBSCRIBE FORM VALIDATION SETTINGS ========================  
          
    $('#subscribe_form').validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function(error, element) {
            error.appendTo( element.closest("form"));
        },
        messages: {
            email: {
                required: "We need your email address to contact you",
                email: "Please, enter a valid email"
            }
        },
					
        highlight: function(element) {
            $(element)
        },                    
					
        success: function(element) {
            element
            .text('').addClass('valid')
        }
    }); 
		
				

// ============= SUBSCRIBE FORM MAILCHIMP INTEGRATION SCRIPT ========================  
		
    $('#subscribe_form').submit(function() {
        $('.error').hide();
        $('.error').fadeIn();
        // submit the form
        if($(this).valid()){
            $('#subscribe_submit').button('loading'); 
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    newsletter_email: $('#subscribe_email').val()
                },
                success: function(data) {
                    $('#subscribe_submit').button('reset');
                    $('.error').html('Well done, you are subscribed!');
                },
                error: function() {
                    $('#subscribe_submit').button('reset');
                    // Change subscribe form error message text here
                    $('.error').html('Oops! Something went wrong!');
                }
            });
        // return false to prevent normal browser submit and page navigation 
        }
        return false; 
    });
	  
	
	  
// ============= CONTACT FORM VALIDATION SETTINGS ======================== 
          
    $('#contact_form').validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            name: "required",
            message: "required",
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function(error, element) {
            error.insertBefore(element);
        },
        messages: {
            name: "What's your name?",
            message: "Please enter your message",
            email: {
                required: "What's your email?",
                email: "Please, enter a valid email"
            }
        },
					
        highlight: function(element) {
            $(element)
            .text('').addClass('error')
        },                    
					
        success: function(element) {
            element
            .text('').addClass('valid')
        }
    });   



// ============= CONTACT FORM SCRIPT ======================== 
 	
    $('#contact_form').submit(function() {
        // submit the form
        if($(this).valid()){
            $('#contact_submit').button('loading'); 
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    contactname: $('#contact_name').val(),
                    contactemail: $('#contact_email').val(),
                    contactmessage: $('#contact_message').val()
                },
                success: function() {
                    $('#contact_submit').button('reset');
                    $('#contact_submit').button('complete');
                },
                error: function() {
                    $('#contact_submit').button('reset');
                    $('#contact_submit').button('error');
                }
            });
        // return false to prevent normal browser submit and page navigation 
        } else {
            $('#contact_submit').button('reset')
        }
        return false; 
    });	


                
// ============= OPTION BLOCK SCRIPT ======================== 

    $('.settings_link').toggle(function(event){
        $(this).find('i').css({
            'transform': 'rotate(90deg)',
            'transition' : 'all linear 0.5s'
        },500);
        $(this).prev().animate({
            'marginLeft': '0'
        },500);
        event.preventDefault();
    },function(){
        $(this).find('i').css({
            'transform': 'rotate(-90deg)',
            'transition' : 'all linear 0.5s'
        },500);
        $(this).prev().animate({
            'marginLeft': '-140px'
        },500);
    });                
    $('.colors ul li a').click(function(event){
        $('.colors ul li a').removeClass('selected');
        $(this).addClass('selected');
                    
        var color = $(this).attr('data-color');
        if(color=='color2')less.modifyVars({
            '@color1': '#7e1a4e',
            '@color2': '#fffef4'
        });            
        if(color=='color1')less.modifyVars({
            '@color1': '#502b60',
            '@color2': '#fff'
        });       
        if(color=='color3')less.modifyVars({
            '@color1': '#0c6b8a',
            '@color2': '#f4fcff'
        }); 
        if(color=='color4')less.modifyVars({
            '@color1': '#1a7e63',
            '@color2': '#fff'
        });
		if(color=='color5')less.modifyVars({
            '@color1': '#444',
            '@color2': '#eee'
        }); 
                    
        event.preventDefault();
    });
});



// ============= PRELOADER SCRIPT ===================

$(window).load(function() { // makes sure the whole site is loaded
    
    $('#preloader').delay(600).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('#spinner').fadeOut(); // will first fade out the loading animation

})