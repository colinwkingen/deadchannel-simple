$(document).ready(function() {
	function generateColor() {
		console.log("Generating...");
		let randomColor = "#";
		let hexArr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
		for (i=0;i<6;i++) {
			var index = Math.floor(Math.random()*17);
			randomColor+= hexArr[index];
		}
		return randomColor;
	}
		
	function randomBrickColor() {
		$('.letter_block').each(function(i,obj){
			setTimeout(function(){
				let color = generateColor();
				$(obj).css('background-color',generateColor());
				console.log('Color: '+color);
			},randomTimer());			
		});
	}
	
	function randomTimer() {
		return Math.floor(Math.random()*12000);
	}
	
	
	function timeController() {
		let millis = randomTimer();
		randomBrickColor();
		setTimeout(function() {
			timeController();
		}, millis);
	}
	timeController();
});