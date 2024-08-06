import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// db
import db from "./_db.js";

// types
import {typeDefs} from "./schema.js";

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        reviews() {
            return db.reviews
        },
        authors() {
            return db.authors
        },
        review(_, args) {
            return db.reviews.find(r => r.id === args.id)
        },
        game(_, args) {
            return db.games.find(r => r.id === args.id)
        },
        author(_, args) {
            return db.authors.find(r => r.id === args.id)
        }
    }
}

// server setup
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const {url} = startStandaloneServer(server, {
    listen: {port: 4000}
});

console.log(`Server ready at port `, 4000);