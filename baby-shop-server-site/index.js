  const express = require('express')
  const app = express()
  const port = 5000

  const bodyParser = require('body-parser');
  const cors = require('cors');
  const formData = require('express-form-data');

  const userRouter = require('./routers/user-router');
  const productsRouter = require('./routers/product-router');

  app.set('json spaces', 4);
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(formData.parse());
  app.use(cors());

  app.use('/api/user', userRouter);
  app.use('/api/products', productsRouter);


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })