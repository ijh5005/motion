
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
// Reference page elements for dropping current device acceleration values into

var accElem = document.getElementById('acceleration'),
    accGravityElem = document.getElementById('acceleration-gravity'),

// Define an event handler function for processing the device’s acceleration values

    handleDeviceMotionEvent = function(e) {

        // Get the current acceleration values in 3 axes and find the greatest of these

        var acc = e.acceleration,
            maxAcc = Math.max(acc.x, acc.y, acc.z),

        // Get the acceleration values including gravity and find the greatest of these

            accGravity = e.accelerationIncludingGravity,
            maxAccGravity = Math.max(accGravity.x, accGravity.y, accGravity.z);

        // Output to the user the greatest current acceleration value in any axis, as
        // well as the greatest value in any axis including the effect of gravity

        accElem.innerHTML = 'Current acceleration: ' + maxAcc +  'm/s^2';
        accGravityElem.innerHTML = 'Value incl. gravity: ' + maxAccGravity + 'm/s^2';
    };

// Assign the event handler function to execute when the device is moving

window.addEventListener('devicemotion', handleDeviceMotionEvent, false);

// function deviceOrientationHandler(event) {
//   document.getElementById('deviceOrientationHandler').innerText = event;
// }


// var acceleration = window.acceleration;

// if (window.DeviceOrientationEvent) {
//   window.addEventListener('deviceorientation', deviceOrientationHandler, false);
// }
