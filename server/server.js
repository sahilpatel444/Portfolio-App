const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


// Replace 'your-frontend-domain' with your actual frontend URL
const allowedOrigins = ["https://sahil-vaddoriya-portfolio.vercel.app"];



//dotenv configurtion
dotenv.config();

//rest object
const app = express();

//midlewares
app.use(cors({
  origin: allowedOrigins, // Allow requests from this domain
  credentials: true,      // Allow cookies to be sent with requests (if needed)
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('products api running new deploy');
});

//routes
app.post("/api/v1/portfolio", require("./routes/portfolioRoutes"));
//port
const PORT = process.env.PORT;

//listen
app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});
