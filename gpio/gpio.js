var tessel = require('tessel'); // import tessel
// Using the GPIO port (Opposite the USB power input)
// using pin 19 (aka G3), which is directly opposite of GND
var myPin = tessel.port['GPIO'].pin['G3'];

myPin.once('high', function(){});

myPin.once('low', function(){});

myPin.on('rise', function (){});

myPin.on('fall', function(){});

var countdown = 10;

var interval = setInterval(function(){
	console.log('T-Minus ' + countdown);
	countdown -= 1;
	if(countdown < 0){
		console.log('BOOM');
		myPin.output(1);
		clearInterval(interval);
	}
}, 1000);