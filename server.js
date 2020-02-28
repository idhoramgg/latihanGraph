/**
 *  Inisialisasi Dependencies
 */

const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./Schema/Schema");

/**
 *  use
 */
const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

/**
 * Running server
 */
app.listen(4000, () => {
  console.log("server is running in port 4000");
});
