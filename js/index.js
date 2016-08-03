requirejs(['main'], function (main) {  
     require(['avalon','jquery','auislide','header','domReady!'], function(avalon) {
  
	      	    var vm = avalon.define({
	    
		  		$id: "indexVC",
		  		
		  		tj: [],
		  		
		  		});
		  		
		  		var banner = avalon.define({
	    
		  		$id: "aui-slide",
		  		
		  		info: [],
		  				  		
		  		});
		  		
		  		var page = avalon.define({
	    
		  		$id: "indexPage",
		  		
		  		page: 1,
        
		  		pagesize: 20,
        
		  		end: false,
		  		
		  		msg: '信息加载中...',
		  		
		  		});
		  		
		  			  
		  		avalon.scan(document.getElementById('aui-slide'));
		  		avalon.scan(document.getElementById('indexVC'));
		  		avalon.scan(document.getElementById('indexPage'));
		  		
		  		
		  		console.log("index is loaded!!!!");
		  		
		  		getBanner();
		  		getTj();
		  		
		  		function getBanner()
		  		{
	
		  			var url = BaseUrl+"Public/Found/?service=common.getguanggao&typeid=7";
	
		  			XHttpGet(url,function(data) 
		  			{
		  				banner.info = data.data.info;
					});
	
				}
		  		 
		  		 
		  		 function getTj()
		  		 {
		  		 	var url = BaseUrl+"Public/Found/?service=plans.getlisttj&page="+page.page+"&perNumber=20";

		  		 	XHttpGet( url, function(data) 
		  		 	{
		  		 		var info = data.data.info;
		
		  		 		if(info)
		  		 		{
		  		 			$(info).each(function(index,item)
		  		 			{
		  		 				item.s_time_str = $.myTime.UnixToDate(item.s_time);
							});
			
			
							vm.tj = vm.tj.concat(data.data.info);

							if(!page.end)
							{
								page.page = page.page + 1;
							}
							

							if(info.length<page.pagesize)
							{
								page.end = true;
								page.msg = '已无更多!';
							}
							else
							{
								page.end = false;
								page.msg = '信息加载中...';
							}
						}

					});
				}
				
				
				
				
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
	
	
	$(window).scroll(function(){
　　var scrollTop = $(this).scrollTop();
　　var scrollHeight = $(document).height();
　　var windowHeight = $(this).height();
　　if(scrollTop + windowHeight == scrollHeight){
　　　　
		getTj();

　　}

});

		  		 
});      
});


