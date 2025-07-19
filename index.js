require("dotenv").config();
const express = require(`express`);
const DBConnect = require("./config/MongoDBConection");
const UserRoute = require("./routes/UserRoute");

const app = express();
const PORT = process.env.APP_PORT;

app.use(express.json());
app.use("/api/users", UserRoute);

app.listen(PORT, () => {
    DBConnect();
    console.log(`server is listened on http://localhost:${PORT}`);
});

