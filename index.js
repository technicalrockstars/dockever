var spawn = require("child_process").spawn
var start_index = 2;

if(process.argv[0] == "dockever") {
	start_index = 1;
}else if(process.argv[1] == "dockever") {
	start_index = 2;
}

module.exports = {
	start : function() {
		var cmd = process.argv[start_index];
		var params = process.argv.slice(start_index+1);

		launch(cmd, params);

		function launch(cmd, params) {
			var executer = spawn(cmd, params);

			executer.stdout.on("data", function(data) {
				process.stdout.write(data);
			});

			executer.stderr.on("data", function(data) {
				process.stderr.write(data);
			});

			executer.on("exit", function(code) {
				launch(cmd, params);
			});
		}
	}
}

