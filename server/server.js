const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");




//dotenv configurtion
dotenv.config();

//rest object
const app = express();

//midlewares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('products api running');
});

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoutes"));
//port
const PORT = process.env.PORT;

//listen
app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});
