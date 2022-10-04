// import the gwl tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
    input BookInput {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(savedBook: bookInput!): User
        removeBook(bookId: ID!): User
    }
`;

// export the typeDefs
module.exports = typeDefs;