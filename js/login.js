requirejs(['main'], function (main) {  
     require(['avalon','jquery','header','auitoast','domReady!'], function(avalon) {
  
	      	    var vm = avalon.define({
	    
		  		$id: "loginVC",
		  		
		  		mobile: '',
		  		
		  		password: '',
		  		
		  		msg: '',
		  		
		  		lginvalidate: {
	        
	        onSuccess : function (item,event) {
		        
		        if($(this).attr("data-required-message") == vm.msg || $(this).attr("data-message") == vm.msg)
		        {
			        vm.msg = '';
		        }

		    },
	        
	        
            onError: function (reasons) {
	            
	            vm.msg = '';
	            
                reasons.forEach(function (reason) {
	                	                
	               vm.msg = reason.getMessage();
  
                   return;
                })
                
            },
            
            onValidateAll: function (reasons) {
	            
                if (reasons.length) 
                {
                    console.log('有表单没有通过')
                    
                    vm.msg = reasons[0].getMessage();
                    
                    alert(vm.msg);
                     
                } 
                else
                {
	                
 
                }
            },
            
        },

		  		
	
		  		});
		  		
		  		
		  		avalon.scan(document.getElementById('loginVC'));
		  		
		  		console.log(avalon.vmodels['headerView']);
		  		
		  		localStorage["pageTitel"] = "登录";
		  				
		  		 
});      
});


