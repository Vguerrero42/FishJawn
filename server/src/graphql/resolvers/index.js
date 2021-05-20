import * as Query from "./query";
import * as Mutation from "./mutation";

const rootResolvers = {
  Mutation,
  Query,
};

const resolvers = [rootResolvers];

export default resolvers;
