$(function(){

    var leftsidedd = $(".leftsidebar_box dd");
		var leftsidedt = $(".leftsidebar_box dt");
    leftsidedd.hide();
	  leftsidedt.click(function() {
			 leftsidedt.css({
					 "background-color": "#3992d0"
			 })
			 $(this).css({
					 "background-color": "#317eb4"
			 });
			  $(this).parent().find('dd').addClass("menu_chioce");
			 $(".menu_chioce").slideUp();

			 $(this).parent().find('dd').slideToggle();
			 $(this).parent().find('dd').addClass("menu_chioce");
			 
	 });
})
