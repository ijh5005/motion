var accElem = document.getElementById('acceleration');
var accGravityElem = document.getElementById('acceleration-gravity');

function handleMotionEvent(event) {
  var acc = e.acceleration,
      maxAcc = Math.max(acc.x, acc.y, acc.z),
      accGravity = e.accelerationIncludingGravity,
      maxAccGravity = Math.max(accGravity.x, accGravity.y, accGravity.z);
  accElem.innerHTML = 'Current acceleration: ' + maxAcc +  'm/s^2';
  accGravityElem.innerHTML = 'Value incl. gravity: ' + maxAccGravity + 'm/s^2';
}

window.addEventListener("devicemotion", handleMotionEvent, false);

// function deviceOrientationHandler(event) {
//   document.getElementById('deviceOrientationHandler').innerText = event;
// }


// var acceleration = window.acceleration;

// if (window.DeviceOrientationEvent) {
//   window.addEventListener('deviceorientation', deviceOrientationHandler, false);
// }
