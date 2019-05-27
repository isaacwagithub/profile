$(document).ready(function(){
	
	$("li.page").click(function(event){
		event.preventDefault();
		
		let aboutMe;
		
		var liClicked = $(this);
		var liClickedAttr = liClicked[0].attributes;
		
		var liOwnerElement = liClickedAttr[0].ownerElement;
		var liClassName = liOwnerElement.classList[0];
		
		var aboutMeesDivs = document.getElementsByClassName('aboutMees');
		
		for(var i=0;i<aboutMeesDivs.length;i++){
			aboutMe = aboutMeesDivs[i];
			if($(aboutMe).hasClass(liClassName)){
				$(aboutMe).removeClass('hideIt');
			}else{
				$(aboutMe).addClass('hideIt');
			}
		}
		
	});
	//end of page click function
});