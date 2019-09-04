
// Random Pick Functions
	function getRndInteger(min, max) {
	
		return Math.floor(Math.random() * (max - min + 1) ) + min;
			
	}
	
	function random_item(items){
		  
		return items[Math.floor(Math.random()*items.length)];
		
	}


// Random Shape Generation and Reaction Timer
	function shapeGeneration() {
	
	// Random Shape Generation and Timer Start
			var randomTopPosition = getRndInteger(5, 60);
			
				document.getElementById("shape").style.top = randomTopPosition + "%";
			
			var randomLeftPosition = getRndInteger(5, 80);
			
				document.getElementById("shape").style.left = randomLeftPosition + "%";
			
			var randomSize = getRndInteger(120, 250);
			
				document.getElementById("shape").style.width = randomSize + "px";
				
				document.getElementById("shape").style.height = randomSize + "px";
		
			var circleOrSquare = random_item([0, 50]);
			
				document.getElementById("shape").style.borderRadius = circleOrSquare + "%"
				
			var randomColour = random_item(["red", "blue", "orange", "yellow", "pink", "green", "purple", "black", "grey", "brown"]); // Could generate random hex colour but if it returned white the user wouldn't be able to see the shape. Could add border to get around this.
			
				document.getElementById("shape").style.background = randomColour;
				
			document.getElementById("shape").style.display = "block";
			
			document.getElementById("shape").style.position = "absolute";
			
			var startTimer = new Date(); 
			
	// Stop Timer and Display Reaction Time When Clicked
			document.getElementById("shape").onclick = function() {
		
				var endTimer = new Date();
				
				var reactionTime = ((endTimer - startTimer)/1000);
				
				document.getElementById("yourTime").innerHTML = reactionTime + "s";
				
	// Best Time Log
				var bestTime = document.getElementById("bestTime").innerHTML;
					if (reactionTime < bestTime || bestTime == 0) {
						document.getElementById("bestTime").innerHTML = reactionTime
					}
				
	// New Shape (Random Delay)
				document.getElementById("shape").style.display = "none";
				
				var randomTime = getRndInteger(100, 1000)
				
					setTimeout(shapeGeneration, randomTime);
				
		}
			
	}
	

// Initial Shape
	shapeGeneration();
	
