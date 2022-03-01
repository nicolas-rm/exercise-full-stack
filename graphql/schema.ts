import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
    type Restaurants {
        name: String,
        adress: String,
        id: String,
        phone: String,
        menu: [String] 
    }

    type Query {
        restaurants: [Restaurants]!
    }
`;
