var server = require('../regression/server');

server.getServer(8013);

const astrJarLocation = './test/applitools';
const execCommand = 'java -jar ApplitoolsSimpleTestRunner.jar job.xml';

const exec = require('child_process').exec;
process.chdir(astrJarLocation);

exec(
	execCommand,
	(error, stdout, stderr) => {
		// const json = require(astrJarLocation + '/results/chrome(1000x650).json');
		console.log(error, stdout, stderr);
	}
);
