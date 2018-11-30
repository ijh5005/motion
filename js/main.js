if (window.DeviceMotionEvent != undefined) {
	window.ondevicemotion = function(e) {
		document.getElementById("accelerationX").innerHTML = e.accelerationIncludingGravity.x;
		document.getElementById("accelerationY").innerHTML = e.accelerationIncludingGravity.y;
		document.getElementById("accelerationZ").innerHTML = e.accelerationIncludingGravity.z;

		if ( e.rotationRate ) {
			document.getElementById("rotationAlpha").innerHTML = e.rotationRate.alpha;
			document.getElementById("rotationBeta").innerHTML = e.rotationRate.beta;
			document.getElementById("rotationGamma").innerHTML = e.rotationRate.gamma;
		}

		document.getElementById("aX").innerHTML = e.acceleration.x.toFixed(4);
		document.getElementById("aY").innerHTML = e.acceleration.y.toFixed(4);
		document.getElementById("aZ").innerHTML = e.acceleration.z.toFixed(4);

    const tracker = document.getElementById("track");
    setInterval(() => {
      tracker.innerText = currentText + "|||| x:" + e.accelerationIncludingGravity.x + "y:" + e.accelerationIncludingGravity.y + "z:" + e.accelerationIncludingGravity.z;
    }, 1000);
	}
}
