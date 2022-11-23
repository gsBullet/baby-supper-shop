  const express = require('express')
  const mongoose = require('mongoose');
  const app = express()
  const port = 5000

  const bodyParser = require('body-parser');
  const cors = require('cors');
  const formData = require('express-form-data');

  const userRouter = require('./routers/user-router');
  const productsRouter = require('./routers/product-router');
  const categoryRouter = require('./routers/category-router');

  app.set('json spaces', 4);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
      extended: false
  }))
  app.use(formData.parse());
  app.use(cors());
  app.use('/uploads',express.static('uploads'))

  app.use('/api/user', userRouter);
  app.use('/api/products', productsRouter);
  app.use('/api/category', categoryRouter);

  mongoose
      .connect('mongodb+srv://Bullet_BRUR:glmbrurict@cluster0.0fsdqn6.mongodb.net/baby_shop_db?retryWrites=true&w=majority')
      .then(() => {
          console.log("mongoose connect succesfull");
          app.listen(port, () => {
              console.log(`Example app listening on port ${port}`)
          })

      })
      .catch((err) => {
          console.log(err);
      })