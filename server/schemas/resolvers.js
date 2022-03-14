const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        //logic
    },
    Mutatiion: {
        addUser: async () => {
            const user = await User.create(args);
        },
        login: async () => {

        }
    }
};
module.exports = resolvers;