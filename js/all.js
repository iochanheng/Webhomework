$(document).ready(function(){
				//Examples of how to assign the Colorbox event to elements
				$(".photo").colorbox({rel:'photo' , transition:"elastic"});
				$(".youtube").colorbox({iframe:true, innerWidth:800, innerHeight:600});
				$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
				//點擊時乎叫函數
				$("#click").click(function(){ 
					$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"});
					return false;
				});
			});