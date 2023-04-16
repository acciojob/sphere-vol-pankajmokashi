function volume_sphere() {
    //Write your code here
	var rad = document.getElementById("radius").value;
	rad = Math.abs(rad);
	var val = (4/3) * Math.PI * Math.pow(rad, 3);
	val = val.toFixed(4);
	document.getElementById("volume").value = val;
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

