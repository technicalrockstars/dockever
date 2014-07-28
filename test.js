var count = 0;
setInterval(function() {
	console.log(count);
	count++;
}, 1000);

setTimeout(function() {
	process.exit();
}, 1000 * 7);