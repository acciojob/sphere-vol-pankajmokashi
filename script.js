function volume_sphere() {
    //Write your code here
	var rad = document.getElementById("radius").value;
	var val = (3/4) * Math.PI * Math.pow(rad, 3);
	document.getElementById("volume").value = val;
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

