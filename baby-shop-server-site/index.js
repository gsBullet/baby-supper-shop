  const express = require('express')
  const mongoose = require('mongoose');
  const app = express()
  const port = 5003

  const bodyParser = require('body-parser');
  const cors = require('cors');
  const formData = require('express-form-data');

  const userRouter = require('./routers/user-router');
  const productsRouter = require('./routers/product-router');
  const categoryRouter = require('./routers/category-router');

  app.set('json spaces', 4);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
      extended: false,
      limit: "50mb"
  }))
  app.use(formData.parse());
  app.use(cors());
  app.use('/uploads', express.static('uploads'))


  app.use('/api/user', userRouter);
  app.use('/api/products', productsRouter);
  app.use('/api/category', categoryRouter);


  let terminal_loader_trigger = require('./hooks/loader');

  terminal_loader_trigger = terminal_loader_trigger();

  mongoose
      .connect('mongodb+srv://Bullet_BRUR:glmbrurict@cluster0.0fsdqn6.mongodb.net/baby_shop_db?retryWrites=true&w=majority')
      .then(() => {
            terminal_loader_trigger.stop_loader();
            console.log('\x1b[93m',`\n mongoose connected \n`);
            app.listen(port, () => {
                process.stdout.write(` 📮 server listening port`)
                console.log('\x1b[94m',`http://localhost:${port}`);
            })

      })
      .catch((err) => {
        terminal_loader_trigger.stop_loader();
          console.log('\x1b[31m',`\n ✂️  mongoose connected rejected`);

      })


