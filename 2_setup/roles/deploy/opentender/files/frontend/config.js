var path = require('path');
module.exports = {
	server: {
		listen: {  // where the frontend should be listening
			host: '0.0.0.0',
			port: 3000
		},
		data: { // absolute paths to the data folders (see https://github.com/digiwhist/opentender-data)
			path: path.resolve(__dirname, '../data/shared')
		},
		backendUrl: 'http://127.0.0.1:3001', // full url of the backend
		fullUrl: 'https://opentender.eu',
        cache: {
			type: 'memcached', // disabled | internal | memcached,
			memcached: ['127.0.0.1:11211'] // if type == memcached, server address(es)
		}

	},
	client: {
		backendUrl: 'https://opentender.eu', // full url of the backend
		devMode: false // e.g. disable page tracking if true
	}
};
