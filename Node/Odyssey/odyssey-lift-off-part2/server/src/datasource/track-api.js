const {RestDataSource, RESTDataSource} = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
	}

	getAuthor(authorId) {
		return this.get(`author/${authorId}`);
	}

	getTracksForHome() {
		return this.get('tracks');
	}

}

module.exports = TrackAPI;