import ApolloClient from "apollo-boost";
import { AUTH_TOKEN } from "../utils/constants";
require("dotenv").config({ path: "variables.env" });
var store = require("store-js");

const uri =
  process.env.REACT_APP_NODE_ENV === "development"
    ? "http://localhost:4801/graphql"
    :process.env.REACT_APP_BACKEND_DB;
export const apolloClient = new ApolloClient({
  uri: uri,
  fetchOptions: {
    credentials: "include"
  },
  request: operation => {
    const token = store.get(AUTH_TOKEN);
    if (token) {
      operation.setContext({
        headers: {
          authorization: token
        }
      });
    }
  }
});
