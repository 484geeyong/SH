 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	var carousel = function() {
		$('.carousel').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 1
				}
			}
		});

		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#colorlib-offcanvas, .js-colorlib-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};
	mobileMenuOutsideClick();


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="colorlib-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle colorlib-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#colorlib-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#colorlib-offcanvas').append(clone2);

		$('#colorlib-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#colorlib-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
				
	    	}
		});
	};
	offcanvasMenu();


	var burgerMenu = function() {

		$('body').on('click', '.js-colorlib-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};
	burgerMenu();
	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

   
   $('#checkin_date, #checkout_date, #birth_date, #arrival_date, #departure_date, #expiration_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});
	$('#book_time, #arrival_time, #departure_time').timepicker();





	// TYPEWRITE
	var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
	

})(jQuery);


//지역 코드
var area="";
var local_name="";

function categoryChange(e) {
    area="";
    
	var good_경기 = ['--','수원시', '고양시', '성남시', '용인시', '부천시', '화성시', '안산시', '안양시', '남양주시', '평택시', '시흥시', '파주시', '의정부시', '김포시', '광주시', '광명시', '이천시', '포천시', '군포시', '구리시', '하남시', '양주시', '안성시', '오산시', '여주시', '양평군', '의왕시', '동두천시', '가평군', '과천시', '연천군']
	var good_강원 = ['--','원주시', '춘천시', '강릉시', '속초시', '동해시', '홍천군', '삼척시', '평창군', '철원군', '정선군', '태백시', '횡성군', '인제군', '양양군', '영월군', '고성군', '화천군', '양구군']
	var good_경남 = ['--','창원시', '김해시', '진주시', '양산시', '거제시', '통영시', '사천시', '밀양시', '거창군', '함안군', '창녕군', '남해군', '고성군', '하동군', '함양군', '산청군', '합천군', '의령군']
    var good_경북 =['--','포항시', '구미시', '경주시', '경산시', '안동시', '김천시', '영주시', '칠곡군', '영천시', '상주시', '문경시', '울진군', '영덕군', '예천군', '성주군', '청도군', '의성군', '고령군', '청송군', '봉화군', '군위군', '울릉군', '영양군']
    var good_대구 =['--','달서구', '북구(대구)', '수성구', '동구(대구)', '중구(대구)', '서구(대구)', '달성군', '남구(대구)']
    var good_부산 =['--','부산진구', '해운대구', '사상구', '동래구', '사하구', '금정구', '남구(부산)', '북구(부산)', '연제구', '수영구', '중구(부산)', '기장군', '동구(부산)', '강서구(부산)', '영도구', '서구(부산)']
    var good_서울 =['--','강남구', '중구(서울)', '서초구', '송파구', '마포구', '영등포구', '종로구', '강서구', '구로구', '강동구', '동대문구', '관악구', '노원구', '양천구', '용산구', '광진구', '은평구', '성북구', '성동구', '중랑구', '금천구', '동작구', '서대문구', '강북구', '도봉구']
    var good_세종;
    var good_인천=['--','남동구', '부평구', '서구(인천)', '미추홀구', '연수구', '계양구', '중구(인천)', '강화군', '동구(인천)', '옹진군']
    var good_충남=['--','천안시', '아산시', '서산시', '당진시', '논산시', '보령시', '공주시', '홍성군', '태안군', '예산군', '금산군', '부여군', '서천군', '계룡시', '청양군']
    var good_전북=['--','전주시', '군산시', '익산시', '정읍시', '남원시', '완주군', '김제시', '부안군', '고창군', '무주군', '순창군', '진안군', '임실군', '장수군']
    var good_전남=['--','여수시', '순천시', '목포시', '광양시', '나주시', '무안군', '영광군', '해남군', '화순군', '완도군', '고흥군', '영암군', '담양군', '보성군', '장성군', '장흥군', '강진군', '구례군', '진도군', '함평군', '신안군', '곡성군']
    var good_충북=['--','청주시', '충주시', '제천시', '음성군', '진천군', '옥천군', '영동군', '증평군', '괴산군', '보은군', '단양군']
    var good_대전=['--','서구(대전)', '유성구', '중구(대전)', '동구(대전)', '대덕구']
    var good_광주=['--','북구(광주)', '광산구', '서구(광주)', '동구(광주)', '남구(광주)']
    var good_울산=['--','남구(울산)', '중구(울산)', '울주군', '북구(울산)', '동구(울산)']
	var good_제주=['--','제주시','서귀포시']

    area=area+e.value;
    
	var target = document.getElementById("good");

	if(e.value == "경기") var d = good_경기;
	else if(e.value == "강원") var d = good_강원;
	else if(e.value == "경남") var d = good_경남;
    else if(e.value == "경북") var d = good_경북;
    else if(e.value == "대구") var d = good_대구;
    else if(e.value == "대전") var d = good_대전;
    else if(e.value == "부산") var d = good_부산;
    else if(e.value == "서울") var d = good_서울;
    else if(e.value == "울산") var d = good_울산;
    else if(e.value == "제주") var d = good_제주;
    else if(e.value == "광주") var d = good_광주;
    else if(e.value == "충북") var d = good_충북;
    else if(e.value == "전남") var d = good_전남;
    else if(e.value == "전북") var d = good_전북;
    else if(e.value == "충남") var d = good_충남;
    else if(e.value == "인천") var d = good_인천;
	else if(e.value == "세종") var d = good_세종;

	target.options.length = 0;

	for (x in d) {
		var opt = document.createElement("option");
		opt.value = d[x];
		opt.innerHTML = d[x];
		target.appendChild(opt);
	}	
	if(e.value=='세종'){ //1번째 박스
		//document.getElementById("theImage").style.visibility = "visible";
    }
	if(e.value=='서울'){
        //document.getElementById("gangNam").style.visibility="visible";
    }
}

function categoryChange2(e) {
    //document.getElementById("imagecheck").innerHTML ="";
	var good_고양시 = ['--','덕양구','일산동구','일산서구'];
	var good_수원시 =['--','권선구','팔달구','영통구','장안구'];
	var good_성남시 =['--','분당구','중원구','수정구'];
	var good_용인시 =['--','기흥구','처인구','수지구'];
	var good_안산시 =['--','단원구','상록구'];
	var good_안양시 =['--','동안구','만안구'];
	var good_창원시 =['--','마산합포구','마산회원구','성산구','의창구','진해구'];
	var good_포항시 =['--','남구','북구'];
	var good_천안시 =['--','동남구','서북구'];
	var good_전주시 =['--','덕진구','완산군'];
	var good_청주시 =['--','상당구','서원구','청원구','흥덕구'];
    
        
    cty2=area+" "+e.value;
    //document.getElementById("local").innerHTML=cty2;
    
    //local_name=document.getElementById("local").innerHTML;
    console.log(local_name);

	var target = document.getElementById("good2");
	if(e.value == "고양시") var d = good_고양시;
	else if(e.value == "수원시") var d =good_수원시;
	else if(e.value =="성남시") var d=good_성남시	
	else if(e.value =="용인시") var d=good_용인시	
	else if(e.value =="안산시") var d=good_안산시	
	else if(e.value =="안양시") var d=good_안양시;
	else if(e.value =="창원시") var d=good_창원시;
	else if(e.value=="포항시") var d=good_포항시;
	else if(e.value=="천안시") var d=good_천안시;
	else if(e.value=="전주시") var d=good_전주시;
	else if(e.value=="청주시") var d=good_청주시;
	

	target.options.length = 0;

	for (x in d) {
		var opt = document.createElement("option");
		opt.value = d[x];
		opt.innerHTML = d[x];
		target.appendChild(opt);
	}
	//----- 경기(시)박스
	if(e.value=='화성시'){ //2번째 박스
		document.getElementById("theImage").style.visibility = "visible";
	}
	else if(e.value=="부천시"){}
	else if(e.value=="남양주시"){}
	else if(e.value=="평택시"){}
	else if(e.value=="시흥시"){}
	else if(e.value=="파주시"){}
	else if(e.value=="의정부시"){}
	else if(e.value=="김포시"){}
	else if(e.value=="광주시"){}
	else if(e.value=="광명시"){}
	else if(e.value=="이천시"){}
	else if(e.value=="포천시"){document.getElementById("theImage").style.visibility = "visible";}
	else if(e.value=="군포시"){}
	else if(e.value=="구리시"){}
	else if(e.value=="하남시"){}
	else if(e.value=="양주시"){}
	else if(e.value=="안성시"){}
	else if(e.value=="오산시"){}
	else if(e.value=="여주시"){}
	else if(e.value=="양평군"){}
	else if(e.value=="의왕시"){}
	else if(e.value=="동두천시"){}
	else if(e.value=="가평군"){}
	else if(e.value=="과천시"){}
	else if(e.value=="연천군"){}
    
	//-----서울(구)박스
	else if(e.value=='강남구'){
        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: [7,34,23,11,8,15,66],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
		//document.getElementById("gangNam").style.display = "block";
        //document.getElementById("gangnam").scrollIntoView();
        
        //var img=document.createElement("img").createElement;
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/gangnam.png' alt='1' style='width: 40%; margin-right: 100px;'>";
        
        //document.getElementById("imagecheck").innerHTML += "{{'cleans.0.0'}}"
            //"{% for clean in cleans %} {% if clean.0 == '강남구' %}<p>강남구 청정지수: {{clean.0}}{{clean.3}}</p>{% endif %}{% endfor %}";
       
        //document.getElementById("imagecheck").innerHTML += 
            "<img src='/static/images/corona/level1.png' alt='1' style='width: 40%;'>";
        //document.getElementById("imagecheck").scrollIntoView();//화면이동
        
	}
	else if(e.value=="중구(서울)"){
        
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/junggu.png' alt='1' style='width:40%;margin-right: 100px;'>";
                var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: [0,5,1,3,3,8,24],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
        
    }
	else if(e.value=="서초구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/seocho.png' alt='1' style='width:40%;margin-right: 100px;'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['4', '21', '13', '4', '15', '7', '64'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="송파구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seocho.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['12', '15', '10', '11', '7', '43', '129'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="마포구"){//csv에 마포구가 없..
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/mapo.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['2', '18', '5', '11', '29', '7', '46'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="영등포구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/youngdeongpo.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['2', '18', '5', '11', '29', '7', '46'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="종로구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/jongro.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['8', '4', '1', '3', '3', '6', '31'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="강서구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/gangseo.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['1', '20', '4', '19', '33', '25', '89'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="구로구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/guro.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['1', '33', '1', '6', '45', '5', '49'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="강동구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoulgangdong.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['4', '6', '3', '11', '11', '14', '82'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="동대문구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/dongdaemun.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['1', '25', '5', '3', '4', '6', '63'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="관악구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/gwanak.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['4', '30', '9', '16', '58', '27', '75'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="노원구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/nowon.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['8', '12', '3', '8', '13', '6', '125'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="양천구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/yangcheon.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['1', '17', '3', '6', '43', '1', '61'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="용산구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/yongsan.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['0', '12', '6', '20', '12', '4', '44'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="광진구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/gwangjin.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['1', '5', '2', '6', '3', '5', '55'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="은평구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/eunpyeong.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['7', '14', '7', '7', '18', '11', '103'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="성북구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/sungbuk.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['1', '13', '9', '5', '4', '9', '216'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="성동구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/sungdong.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['3', '3', '13', '21', '9', '8', '28'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="중랑구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/jungrang.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['0', '12', '3', '3', '14', '11', '84'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="금천구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/gunchun.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['1', '11', '0', '3', '17', '7', '28'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="동작구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/dongjak.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['1', '23', '7', '9', '13', '17', '65'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="서대문구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/seodaemun.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['4', '9', '6', '8', '8', '6', '40'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="강북구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/gangbuk.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['0', '5', '0', '9', '10', '4', '68'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	else if(e.value=="도봉구"){
        //document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/seoul/gangnam.png' alt='1'>";
                        var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: ["2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08"],
		datasets: [{
		label: '코로나 확진자 추이',
		data: ['0', '6', '3', '10', '43', '2', '53'],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255,99,132,1)'
		],
		borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
		xAxes: [{
			ticks: {
			maxRotation: 90,
			minRotation: 80
			}
		}],
		yAxes: [{
			ticks: {
			beginAtZero: true
			}
		}]
		}
	}
	});
    }
	//-----부산(구 박스)"){}
	else if(e.value=='부산진구'){
		document.getElementById("theImage").style.visibility = "visible";
	}
	else if(e.value=="해운대구"){}
	else if(e.value=="사상구"){}
	else if(e.value=="동래구"){}
	else if(e.value=="사하구"){}
	else if(e.value=="금정구"){}
	else if(e.value=="남구(부산)"){}
	else if(e.value=="북구(부산)"){}
	else if(e.value=="연제구"){}
	else if(e.value=="수영구"){}
	else if(e.value=="중구(부산)"){}
	else if(e.value=="기장군"){}
	else if(e.value=="동구(부산)"){}
	else if(e.value=="강서구(부산)"){}
	else if(e.value=="영도구"){}
	else if(e.value=="서구(부산)"){}
	//----경남
	else if(e.value=='김해시'){
		document.getElementById("theImage").style.visibility = "visible";
	}
	else if(e.value=="진주시"){}
	else if(e.value=="양산시"){}
	else if(e.value=="거제시"){}
	else if(e.value=="통영시"){}
	else if(e.value=="사천시"){}
	else if(e.value=="밀양시"){}
	else if(e.value=="거창군"){}
	else if(e.value=="함안군"){}
	else if(e.value=="창녕군"){}
	else if(e.value=="남해군"){}
	else if(e.value=="고성군"){}
	else if(e.value=="하동군"){}
	else if(e.value=="함양군"){}
	else if(e.value=="산청군"){}
	else if(e.value=="합천군"){}
	else if(e.value=="의령군"){}
	//--경북
	else if(e.value=='구미시'){
		document.getElementById("theImage").style.visibility = "visible";
	}
	else if(e.value=="경주시"){}
	else if(e.value=="경산시"){}
	else if(e.value=="안동시"){}
	else if(e.value=="김천시"){}
	else if(e.value=="영주시"){}
	else if(e.value=="칠곡군"){}
	else if(e.value=="영천시"){}
	else if(e.value=="상주시"){}
	else if(e.value=="문경시"){}
	else if(e.value=="울진군"){}
	else if(e.value=="영덕군"){}
	else if(e.value=="예천군"){}
	else if(e.value=="성주군"){}
	else if(e.value=="청도군"){}
	else if(e.value=="의성군"){}
	else if(e.value=="고령군"){}
	else if(e.value=="청송군"){}
	else if(e.value=="봉화군"){}
	else if(e.value=="군위군"){}
	else if(e.value=="울릉군"){}
	else if(e.value=="영양군"){}
	//--인천
	else if(e.value=='남동구'){}
	else if(e.value=="부평구"){}
	else if(e.value=="서구(인천)"){}
	else if(e.value=="미추홀구"){}
	else if(e.value=="연수구"){}
	else if(e.value=="계양구"){}
	else if(e.value=="중구(인천)"){}
	else if(e.value=="강화군"){}
	else if(e.value=="동구(인천)"){}
	else if(e.value=="옹진군"){}
		//대구
	else if(e.value=='달서구'){
         document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/daegu/daegudalseogu.png' alt='1'>";
    }
	else if(e.value=="북구(대구)"){
        document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/daegu/daegubukgu.png' alt='1'>";
    }
	else if(e.value=="수성구"){
        document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/daegu/daegususeonggu.png' alt='1'>";
    }
	else if(e.value=="동구(대구)"){
        document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/daegu/daegudonggu.png' alt='1'>";
    }
	else if(e.value=="중구(대구)"){
        document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/daegu/daegujunggu.png' alt='1'>";
    }
	else if(e.value=="서구(대구)"){
        document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/daegu/daeguseogu.png' alt='1'>";
    }
	else if(e.value=="달성군"){
        document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/daegu/daegudalsunggu.png' alt='1'>";
    }
	else if(e.value=="남구(대구)"){
        document.getElementById("imagecheck").innerHTML = "<img src='/static/images/area/daegu/daegunamgu.png' alt='1'>";
    }
	//충남
	else if(e.value=='아산시'){}
	else if(e.value=="서산시"){}
	else if(e.value=="당진시"){}
	else if(e.value=="논산시"){}
	else if(e.value=="보령시"){}
	else if(e.value=="공주시"){}
	else if(e.value=="홍성군"){}
	else if(e.value=="태안군"){}
	else if(e.value=="예산군"){}
	else if(e.value=="금산군"){}
	else if(e.value=="부여군"){}
	else if(e.value=="서천군"){}
	else if(e.value=="계룡시"){}
	else if(e.value=="청양군"){}
	//강원
	else if(e.value=='원주시'){}
	else if(e.value=="춘천시"){}
	else if(e.value=="강릉시"){}
	else if(e.value=="속초시"){}
	else if(e.value=="동해시"){}
	else if(e.value=="홍천군"){}
	else if(e.value=="삼척시"){}
	else if(e.value=="평창군"){}
	else if(e.value=="철원군"){}
	else if(e.value=="정선군"){}
	else if(e.value=="태백시"){}
	else if(e.value=="횡성군"){}
	else if(e.value=="인제군"){}
	else if(e.value=="양양군"){}
	else if(e.value=="영월군"){}
	else if(e.value=="고성군"){}
	else if(e.value=="화천군"){}
	else if(e.value=="양구군"){}
	//전북
	else if(e.value=='군산시'){}
	else if(e.value=="익산시"){}
	else if(e.value=="정읍시"){}
	else if(e.value=="남원시"){}
	else if(e.value=="완주군"){}
	else if(e.value=="김제시"){}
	else if(e.value=="부안군"){}
	else if(e.value=="고창군"){}
	else if(e.value=="무주군"){}
	else if(e.value=="순창군"){}
	else if(e.value=="진안군"){}
	else if(e.value=="임실군"){}
	else if(e.value=="장수군"){}
	//전남
	else if(e.value=='여수시'){}
	else if(e.value=="순천시"){}
	else if(e.value=="목포시"){}
	else if(e.value=="광양시"){}
	else if(e.value=="나주시"){}
	else if(e.value=="무안군"){}
	else if(e.value=="영광군"){}
	else if(e.value=="해남군"){}
	else if(e.value=="화순군"){}
	else if(e.value=="완도군"){}
	else if(e.value=="고흥군"){}
	else if(e.value=="영암군"){}
	else if(e.value=="담양군"){}
	else if(e.value=="보성군"){}
	else if(e.value=="장성군"){}
	else if(e.value=="장흥군"){}
	else if(e.value=="강진군"){}
	else if(e.value=="구례군"){}
	else if(e.value=="진도군"){}
	else if(e.value=="함평군"){}
	else if(e.value=="신안군"){}
	else if(e.value=="곡성군"){}

	//충북
	else if(e.value=='충주시'){}
	else if(e.value=="제천시"){}
	else if(e.value=="음성군"){}
	else if(e.value=="진천군"){}
	else if(e.value=="옥천군"){}
	else if(e.value=="영동군"){}
	else if(e.value=="증평군"){}
	else if(e.value=="괴산군"){}
	else if(e.value=="보은군"){}
	else if(e.value=="단양군"){}

	//광주
	else if(e.value=='북구(광주)'){document.getElementById("theImage").style.visibility = "visible";}
	else if(e.value=="광산구"){}
	else if(e.value=="서구(광주)"){}
	else if(e.value=="동구(광주)"){}
	else if(e.value=="남구(광주)"){}
	//울산

	else if(e.value=="남구(울산)"){}
	else if(e.value=="중구(울산)"){}
	else if(e.value=="울주군"){}
	else if(e.value=="북구(울산)"){}
	else if(e.value=="동구(울산)"){}
		//제주
	else if(e.value=='제주시'){}
	else if(e.value=='서귀포시'){}
	//대전
	else if(e.value=="서구(대전)"){document.getElementById("theImage").style.visibility = "visible";}
	else if(e.value=="유성구"){document.getElementById("theImage").style.visibility = "visible";}
	else if(e.value=="중구(대전)"){document.getElementById("theImage").style.visibility = "visible";}
	else if(e.value=="동구(대전)"){document.getElementById("theImage").style.visibility = "visible";}
	else if(e.value=="대덕구"){document.getElementById("theImage").style.visibility = "visible";}
}

function categoryChange3(e){ //3번째 박스
    //area=area+" "+e.value;
    //document.getElementById("local").innerHTML = document.getElementById("local").innerHTML+" "+e.value;
    
    //local_name=document.getElementById("local").innerHTML;
    //console.log(local_name);
    
	if(e.value=='남구'){		
			document.getElementById("theImage").style.visibility = "visible";
			document.getElementById("theImage").scrollIntoView();
	}
	else if(e.value=="북구"){document.getElementById("theImage").style.visibility = "visible";}
	else if(e.value=="덕양구"){}
	else if(e.value=="일산동구"){}
	else if(e.value=="일산서구"){}
	else if(e.value=="권선구"){document.getElementById("theImage").style.visibility = "visible";}
	else if(e.value=="팔달구"){document.getElementById("theImage").style.visibility = "visible";}
	else if(e.value=="영통구"){document.getElementById("theImage").style.visibility = "visible";}
	else if(e.value=="장안구"){document.getElementById("theImage").style.visibility = "visible";}
	else if(e.value=="분당구"){}
	else if(e.value=="중원구"){}
	else if(e.value=="수정구"){}
	else if(e.value=="기흥구"){}
	else if(e.value=="처인구"){}
	else if(e.value=="수지구"){}
	else if(e.value=="단원구"){}
	else if(e.value=="상록구"){}
	else if(e.value=="동안구"){}
	else if(e.value=="만안구"){}
	else if(e.value=="마산합포구"){}
	else if(e.value=="마산회원구"){}
	else if(e.value=="성산구"){}
	else if(e.value=="의창구"){}
	else if(e.value=="진해구"){}
	else if(e.value=="동남구"){}
	else if(e.value=="서북구"){}
	else if(e.value=="덕진구"){}
	else if(e.value=="완산군"){}
	else if(e.value=="상당구"){}
	else if(e.value=="서원구"){}
	else if(e.value=="청원구"){}
	else if(e.value=="흥덕구"){}
}

