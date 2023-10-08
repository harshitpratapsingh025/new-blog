export const userType = `#graphql
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        phone: String
        profileImage: String
    }

    type UserResponse {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        phone: String
        address: String
        profileImage: String
    }
`;
