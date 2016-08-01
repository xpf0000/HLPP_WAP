requirejs(['main'], function (main) {  
     require(['avalon','jquery','header','domReady!'], function(avalon) {
  
	      	    var vm = avalon.define({
	    
		  		$id: "indexVC",
        
		  		});
		  		
		  			  		
		  		avalon.scan(document.getElementById('indexVC'));
		  		
		  		 
});      
});


/*
var slide = new auiSlide({
		container:document.getElementById("aui-slide"),
		// "width":300,
		"height":150,
		"speed":300,
		"pageShow":true,
		"pageStyle":'dot',
		"loop":true,
		'dotPosition':'center',
		currentPage:currentFun
	})

	function currentFun(index) {
		console.log(index);
	}
*/