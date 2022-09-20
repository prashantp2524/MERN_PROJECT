const express = require("express");
require("colors");
const {erroHandler} = require('./midlewares/errorMidleware')
const products = require("./data/products");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productsRoutes");
const connectDb = require("./config/config");
const usersRoutes =require('./routes/UsersRoute')
const orderRoutes = require('./routes/orderRoute')


//dotenv config

dotenv.config();
//connecting to mongodb database
connectDb();

const app = express();

//midleware bodyparser
app.use(express.json())


app.get("/", (req, res) => {
  res.send("<h1>node server</h1>");
});

app.use('/api',productRoutes)
app.use('/api/users',usersRoutes)
app.use('/api/orders',orderRoutes)
app.get('/api/config/paypal',(req,res)=>{
  res.send(process.env.PAYPAL_CLIENT_ID)
})

app.use(erroHandler);

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server  running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .inverse
  );
});
