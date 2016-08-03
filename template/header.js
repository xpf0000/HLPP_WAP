
requirejs(['main'], function (main) {  
     require(['avalon','jquery','domReady!'], function(avalon) {
  
	      	    var vm = avalon.define({
	    
		  		$id: "headerView",
		  		
		  		title: '河洛泡泡',
		  		
		  		back: true,
		  		
		  		show_menu: function()
		  		{
			  		$(".right_menu").addClass("am-modal-active");	
		if($(".sharebg").length>0){
			$(".sharebg").addClass("sharebg-active");
		}else{
			$("body").append('<div class="sharebg"></div>');
			$(".sharebg").addClass("sharebg-active");
		}
		$(".sharebg-active,.right_menu_close").click(function(){
			$(".right_menu").removeClass("am-modal-active");	
			setTimeout(function(){
				$(".sharebg-active").removeClass("sharebg-active");	
				$(".sharebg").remove();	
			},300);
		})
		  		},
		  		
		  		
		  		loginClick: function()
		  		{
			  		location.href = "login.html";
		  		},
		  		

		  		});
		  		
		  		
		  		
		  		console.log("header is loaded!!!!");
		  		
		  		
		  		$("#header").load("../template/header.html",function(){
     
		  		avalon.scan(document.getElementById('headerView'));
		     
	    		});

		  		
		  		

 
  });      
});





/*
function show_menu(){
		$(".right_menu").addClass("am-modal-active");	
		if($(".sharebg").length>0){
			$(".sharebg").addClass("sharebg-active");
		}else{
			$("body").append('<div class="sharebg"></div>');
			$(".sharebg").addClass("sharebg-active");
		}
		$(".sharebg-active,.right_menu_close").click(function(){
			$(".right_menu").removeClass("am-modal-active");	
			setTimeout(function(){
				$(".sharebg-active").removeClass("sharebg-active");	
				$(".sharebg").remove();	
			},300);
		})
	}
*/