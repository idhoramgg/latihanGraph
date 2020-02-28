/**
 *  Inisialisasi Dependencies
 */

const express = require("express");
const expressGraphQL = require("express-graphql");

/**
 *  use
 */
const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true
  })
);

/**
 * Running server
 */
app.listen(4000, () => {
  console.log("server is running in port 4000");
});
