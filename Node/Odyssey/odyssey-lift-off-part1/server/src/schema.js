
const { gql } = require('apollo-server');

const typeDefs = gql`

	type Query {
		"Get tracks array for homepage grid"
		tracksForHome: [Track!]
	}

	type Track {
		id: ID!
		"The track's title"
		title: String!
		"The track's main illustration to display in track card or track page detail"
		thumbnail: String
		"description of length"
		length: Int
		"description of modulesCount"
		modulesCount: Int
		"The track's main author"
		author: Author!
	}

	type Author {
		id: ID!
		"Author's first and last name"
		name: String!
		"Author's profile picture url"
		photo: String
	}
`;

module.exports = typeDefs;