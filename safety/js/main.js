
    function show(target) {
        var sublist = document.querySelectorAll(".sublist"),
            target = document.querySelectorAll(target),
            i;

        for (i = 0; i < sublist.length; i++) {
            sublist[i].style.display = "none";
        }
        for (i = 0; i < target.length; i++) {
            target[i].style.display = "block";
        }
    };

    // toggles through the side frame selections on the help page and safety page
    function openTab(target) {
        var safetyContent = document.querySelectorAll(".safetyContent"),
            tabsContent = document.querySelectorAll(".tabsContent"),
            target = document.querySelectorAll(target),
            tablinks = document.querySelectorAll(".tablinks").classList,
            i;

        for (i = 0; i < safetyContent.length; i++) {
            safetyContent[i].style.display = "none";
        }

        for (i = 0; i < tabsContent.length; i++) {
            tabsContent[i].style.display = "none";
        }

        for (i = 0; i < target.length; i++) {
            target[i].style.display = "block";
        }
    };

    // toggles through the steps in the posting section
    function clickTo(target) {
        var steps = document.querySelectorAll(".steps"),
            target = document.querySelectorAll(target),
            i;

        for (i = 0; i < steps.length; i++) {
            steps[i].style.visibility = "hidden";
            steps[i].style.opacity = 0;
        }

        for (i = 0; i < target.length; i++) {
            target[i].style.visibility = "visible";
            target[i].style.opacity = 1;
        }

    }


    

    // opens hamburger menu
        $(function() {
            $(".menuNav").click(function() {
                $(".navMenu").toggleClass("navOpen");
                $(".smallMenu").toggleClass("heightMenu");
                $(".markContent").toggleClass("none");
                $("body").toggleClass("overflow");
            });
        });


$(function(){

	// Calendar
	$('#calendar').fullCalendar({
		header: {
			left:   'prev',
    		center: 'title',
    		right:  'next'
		},
		fixedWeekCount: false,
		height: 350,
    	aspectRatio: 4
	});

	// Will highlight list item in dropdown menu on hover and stay highlighted until another item is hovered
    $(".change").on('mouseenter', function() {
        $(".lister").removeClass("highlight");
        $(".lister", this).addClass("highlight");
    });

    $(".change .content-content").on('mouseleave', function() {
    	$(".lister").removeClass("highlight");
        $(".start").addClass("highlight");
    });

    // Will highlight list item in navigation on hover and stay highlighted until another item is hovered
    $(".alter").on('mouseenter', function() {
        $(".color").removeClass("highlight");
        $(".color", this).addClass("highlight");
    });

    $(".alter .dropdown-content").on('mouseleave', function() {
        $(".color").removeClass("highlight");
    });
    
    // Scroll to top of page
	$('#return-to-top').click(function() {
	    $('body,html').animate({
	        scrollTop : 0,
	    }, 500);
	});

	// Side Frame Accordion
    $( "#accordion, #accordion0, #accordion1, #accordion2, #accordion3, #accordion4, #accordion5" ).accordion({
      heightStyle: "content",
      collapsible: true,
      active: false
    });

    // Remove Selection
    $(".fa-times").click(function() {
    	$(this).parent().remove();
    });

    // Gallery -- Hover over a thumbnail image replaces the img in the largeImage div
    $(".thumbnails img").on("mouseover", function() {
    	var $img = $(this).clone();
    	$(".largeImage img").remove();
    	$(".largeImage").append($img);
    });

    // Click on Description h4 and it will reveal the p tag
    $(".description h4").click(function() {
        $("p").toggle(1000);
    })

    // Filter Menu
    $(".filter").click(function() {
        $(".filterMenu").toggleClass("off");
        $("body").toggleClass("overflow");
        $(".filter h2").text("Close");
    })

    // The height of the thumbnails is the same height as the largeImage
    if ((screen.width>720)) {
        $(".thumbnails").css({ 
            height: ($(".largeImage").height() + "px")
        })
    }




});


