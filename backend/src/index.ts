import { ApolloServer, makeExecutableSchema } from "apollo-server";
import models from './models';

const typeDefs = `
  type Hello {
    message: String!
  }

  type Query {
    sayHello(name: String!): Hello
  }
`;

const resolvers = {
  Query: {
    sayHello(_: any, args: any): any {
      return {
        message: `Hello ${args.name || "world"}`
      }
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
const apolloServer = new ApolloServer({
  schema,
  context: {
    models,
  }
})

const alter = true;
const force = false;

models.sequelize.sync({alter, force}).then(() => {
  apolloServer.listen(5000).then(({url}) => console.log(`Running on ${url}`));
})
