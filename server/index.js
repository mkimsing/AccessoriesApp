const express = require("express");
const app = express();

//Ensure routes are defined before listening
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
