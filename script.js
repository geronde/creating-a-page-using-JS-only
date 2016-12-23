

$(document).ready(function() {
	setPage();
	PizzaMenu();
	setPageContent();
    var $hideit=$(document).find('#tab1,#tab2,#tab3');
    hideContent($hideit);
	navigateTabs();
	
});


function setPage() {
	$('body').css({background: 'url(img/pizza.png) no-repeat right'});
	$('#content').css({
		margin: '0 auto',
		width: '80%',
		
	});
	
}

function PizzaMenu(){
	//brand
	var $theMenu=$('<div class="menu group"></div>').appendTo('#content');
	$('.menu').css({
		margin: '10px',
	});
	var $brand= $('<img alt="brand" class="logo" src="img/logo.png" />');
	$($brand).appendTo('.menu');
    
    //generating list items
    var $list=$('<ul class="themenu"><li><a href="#tab1">Home</a></li><li><a href="#tab2">About</a></li><li><a href="#tab3">Contact us</a></li></ul>').appendTo('div.menu');
 
$('li').css({display:'inline',
                  padding : '10px',
                  "line-height" : '60px'
                   });
       
       $('a').css({
       	"font-size": '1.5em',
       	"color": '#ffa05c',
       	"text-shadow" : '1px 1px #000',
       	"font-weight":'bold',
       	"font-family":"'Lobster', cursive"
       });

   
	}

function setPageContent() {
	
	var $section=$('<section class="copy"></section>').appendTo('#content');
	var div1=$('<div id="tab1" class="tabcontent"></div>').appendTo($section);
	var p1 =$('<p> In Pizzarie, </br></br> We give the best and put our emotions in every step </br></br> Lets be part of the moment</p>').appendTo(div1);
	$('.copy').css({
		margin: '10px'});
	
  var div2=$('<div id="tab2" class="tabcontent"></div>').appendTo($section);
	var p2 =$('<p>Using our secret family sauce </br> </br> and amazing imported cheese from Suisse </br> </br> we make the best pizza in town. </p>').appendTo(div2);

var div3=$('<div id="tab3" class="tabcontent"></div>').appendTo($section);
	var p3 =$('<p> Visit us at 57 walinton street </br> </br> call us at 555-000-000 </br> </br> tweet us at @pizzariedelaperfecto</p>').appendTo(div3);

	

	$('.tabcontent > p').css({
		color: '#ff8b38',
		"font-size": '2.7em',
		"text-shadow":'1px 1px #000',
		"font-family":"'Lobster', cursive",
		"word-spacing":'5px',
		position: 'absolute',
		bottom:'50px'
		

	});
}

function navigateTabs() {
      
     	
	 $(".themenu a").click(function(event) {
        event.preventDefault();
        var tab = $(this).attr("href");
        $(".tabcontent").not(tab).css("display", "none");
        $(tab).fadeIn();
        
    });
}

function hideContent(div_id){
	if($(div_id).is(':visible')==true) {div_id.hide(10);}
}