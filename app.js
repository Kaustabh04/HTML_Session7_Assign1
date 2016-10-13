
// Passed radius as parameter

function calculateArea(radius){
	radius = 7;
	
	// Calculate the area of the circle
	
	var area = radius * radius * Math.PI;
	return area;
}
// Print the area in the console

console.log("The area of the circle is " + calculateArea())