
requirejs(['main'], function (main) {  
     require(['avalon','jquery','domReady!'], function(avalon) {
  
	      	    var vm = avalon.define({
	    
		  		$id: "headerView",
		  		
		  		
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

		  		});
		  		
		  		
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