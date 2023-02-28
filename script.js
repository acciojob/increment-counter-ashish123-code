//your JS code here. If required.
let counter = 0; // initialize counter variable

		function incrementCounter() {
			alert("Un-incremented value: " + counter);
			counter++; // increment counter
			document.getElementById("counter").textContent = counter; // update counter display
		}