const app = require("./app");
const mongoose = require("mongoose");

const DB_LINK = process.env.DB_LINK.replace(
  "<PASSWORD>",
  process.env.DB_PASSWORD
);

mongoose
  .connect(DB_LINK)
  .then((res) => console.log("Successfully connected to database"))
  .catch((err) => {
    console.log("Error connecting to database");
    process.exit(1);
  });

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
