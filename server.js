const { app } = require("./app");
require("./db/mongoConnect");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`the server is running on port: ${PORT}`);
});