const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize, Op, Model, DataTypes } = require("sequelize");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const sequelize = new Sequelize('mydb', 'root', 'password', {
  host: 'mysql',
  dialect: 'mysql',
});

const Product = sequelize.define('Product', {
  serialNumber: DataTypes.INTEGER,
  isNew: DataTypes.BOOLEAN,
  photo: DataTypes.STRING,
  title: DataTypes.STRING,
  type: DataTypes.STRING,
  specification: DataTypes.STRING,
  guarantee: { 
    type: DataTypes.JSON, 
    defaultValue: {
    start: '2017-06-29 12:09:33',
    end: '2017-06-29 12:09:33'
    }
  },
  order: DataTypes.INTEGER,
  price: { type: DataTypes.JSON, defaultValue: [
    {value: 100, symbol: 'USD', isDefault: 0},
    {value: 2600, symbol: 'UAH', isDefault: 1}
  ],
  date: DataTypes.DATE,
  },
}, { });

const Order = sequelize.define('Order', {
  title: DataTypes.STRING,
  date: DataTypes.DATE,
  description: DataTypes.STRING,
}, {
 });

Order.belongsToMany(Product, { through: 'OrderProducts' });
Product.belongsToMany(Order, { through: 'OrderProducts' });

(async () => {
  try {
    await sequelize.sync({ alter: true });
    await sequelize.authenticate();
    console.log('Connected to the MySQL database.');

    await Order.bulkCreate(
      [
        {
          title: 'Order 1',
          date: '2017-06-29 12:09:33',
          description: 'some desc text ',
        },
        {
          title: 'Order 2',
          date: '2017-06-29 12:09:33',
          description: 'some desc text',
        },
        {
          title: 'Order 3',
          date: '2017-06-29 12:09:33',
          description: 'some desc text',
        },
    
      ],
    );

    await Product.bulkCreate(
      [
        {
          serialNumber: 101,
          isNew: true,
          photo: 'https://example.com/product1.jpg',
          title: 'Product 1',
          type: 'Electronics',
          specification: 'Sample specification 1',
          guarantee: {
            start: '2023-01-01 00:00:00',
            end: '2024-01-01 00:00:00',
          },
          order: 1,
          price: [
            { value: 100, symbol: 'USD', isDefault: 0 },
            { value: 2600, symbol: 'UAH', isDefault: 1 },
          ],
          date: new Date(),
        },
        {
          serialNumber: 102,
          isNew: true,
          photo: 'https://example.com/product2.jpg',
          title: 'Product 2',
          type: 'Electronics',
          specification: 'Sample specification 2',
          guarantee: {
            start: '2023-01-01 00:00:00',
            end: '2024-01-01 00:00:00',
          },
          order: 2,
          price: [
            { value: 150, symbol: 'USD', isDefault: 0 },
            { value: 3900, symbol: 'UAH', isDefault: 1 },
          ],
          date: new Date(),
        },
        {
          serialNumber: 103,
          isNew: true,
          photo: 'https://example.com/product3.jpg',
          title: 'Product 3',
          type: 'Monitors',
          specification: 'Sample specification 3',
          guarantee: {
            start: '2023-01-01 00:00:00',
            end: '2024-01-01 00:00:00',
          },
          order: 2,
          price: [
            { value: 150, symbol: 'USD', isDefault: 0 },
            { value: 3900, symbol: 'UAH', isDefault: 1 },
          ],
          date: new Date(),
        },
        {
          serialNumber: 104,
          isNew: true,
          photo: 'https://example.com/product4.jpg',
          title: 'Product 4',
          type: 'Monitors',
          specification: 'Sample specification 2',
          guarantee: {
            start: '2023-01-01 00:00:00',
            end: '2024-01-01 00:00:00',
          },
          order: 3,
          price: [
            { value: 150, symbol: 'USD', isDefault: 0 },
            { value: 3900, symbol: 'UAH', isDefault: 1 },
          ],
          date: new Date(),
        },
        {
          serialNumber: 105,
          isNew: true,
          photo: 'https://example.com/product5.jpg',
          title: 'Product 5',
          type: 'laptops',
          specification: 'Sample specification 5',
          guarantee: {
            start: '2023-01-01 00:00:00',
            end: '2024-01-01 00:00:00',
          },
          order: 1,
          price: [
            { value: 150, symbol: 'USD', isDefault: 0 },
            { value: 3900, symbol: 'UAH', isDefault: 1 },
          ],
          date: new Date(),
        },
        {
          serialNumber: 106,
          isNew: true,
          photo: 'https://example.com/product2.jpg',
          title: 'Product 6',
          type: 'laptops',
          specification: 'Sample specification 6',
          guarantee: {
            start: '2023-01-01 00:00:00',
            end: '2024-01-01 00:00:00',
          },
          order: 2,
          price: [
            { value: 150, symbol: 'USD', isDefault: 0 },
            { value: 3900, symbol: 'UAH', isDefault: 1 },
          ],
          date: new Date(),
        },
        {
          serialNumber: 107,
          isNew: true,
          photo: 'https://example.com/product7.jpg',
          title: 'Product 7',
          type: 'Keyboards',
          specification: 'Sample specification 2',
          guarantee: {
            start: '2023-01-01 00:00:00',
            end: '2024-01-01 00:00:00',
          },
          order: 2,
          price: [
            { value: 150, symbol: 'USD', isDefault: 0 },
            { value: 3900, symbol: 'UAH', isDefault: 1 },
          ],
          date: new Date(),
        },
        {
          serialNumber: 108,
          isNew: true,
          photo: 'https://example.com/product8.jpg',
          title: 'Product 8',
          type: 'Mouses',
          specification: 'Sample specification 8',
          guarantee: {
            start: '2023-01-01 00:00:00',
            end: '2024-01-01 00:00:00',
          },
          order: 3,
          price: [
            { value: 150, symbol: 'USD', isDefault: 0 },
            { value: 3900, symbol: 'UAH', isDefault: 1 },
          ],
          date: new Date(),
        },
        {
          serialNumber: 109,
          isNew: true,
          photo: 'https://example.com/product9.jpg',
          title: 'Product 9',
          type: 'Accessories',
          specification: 'Sample specification 9',
          guarantee: {
            start: '2023-01-01 00:00:00',
            end: '2024-01-01 00:00:00',
          },
          order: 2,
          price: [
            { value: 150, symbol: 'USD', isDefault: 0 },
            { value: 3900, symbol: 'UAH', isDefault: 1 },
          ],
          date: new Date(),
        },
        {
          serialNumber: 110,
          isNew: true,
          photo: 'https://example.com/product2.jpg',
          title: 'Product 10',
          type: 'Accessories',
          specification: 'Sample specification 10',
          guarantee: {
            start: '2023-01-01 00:00:00',
            end: '2024-01-01 00:00:00',
          },
          order: 2,
          price: [
            { value: 150, symbol: 'USD', isDefault: 0 },
            { value: 3900, symbol: 'UAH', isDefault: 1 },
          ],
          date: new Date(),
        },
        {
          serialNumber: 111,
          isNew: true,
          photo: 'https://example.com/product11.jpg',
          title: 'Product 11',
          type: 'Electronics',
          specification: 'Sample specification 11',
          guarantee: {
            start: '2023-01-01 00:00:00',
            end: '2024-01-01 00:00:00',
          },
          order: 2,
          price: [
            { value: 150, symbol: 'USD', isDefault: 0 },
            { value: 3900, symbol: 'UAH', isDefault: 1 },
          ],
          date: new Date(),
        },
        {
          serialNumber: 112,
          isNew: true,
          photo: 'https://example.com/product12.jpg',
          title: 'Product 12',
          type: 'Accessories',
          specification: 'Sample specification 12',
          guarantee: {
            start: '2023-01-01 00:00:00',
            end: '2024-01-01 00:00:00',
          },
          order: 1,
          price: [
            { value: 150, symbol: 'USD', isDefault: 0 },
            { value: 3900, symbol: 'UAH', isDefault: 1 },
          ],
          date: new Date(),
        },
      ],
      {
        updateOnDuplicate: ['serialNumber'],
      }
    );
    console.log('Hardcoded successful.');

    app.get('/api/', (req, res) => {
    res.json({ message: 'Server is running' })
      
    });

    app.get('/api/orders', async (req, res) => {
      const orders = await Order.findAll({
        include: Product
      });
      return res.status(200).json({ orders });
    });

    app.get('/api/products', async (req, res) => {
      const products = await Product.findAll({
        include: Order
      });
      return res.status(200).json({ products });
    });

    app.get('/api/orders/:id', async (req, res) => {
      const { id } = req.params;
      const order = await Order.findByPk(id, {
        include: Product
      });
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      return res.status(200).json({ order });
    });

    app.get('/api/products/:id', async (req, res) => {
      const { id } = req.params;
      const product = await Product.findByPk(id, {
        include: Order
      });
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      };
      return res.status(200).json({ product });
    });

    app.post('/api/orders', async (req, res) => {
      const { title, date, description, productIds } = req.body;
      try {
        const products = await Product.findAll({
          where: {
            id: {
              [Op.in]: productIds
            }
          }
        });
        if (products.length === 0) {
          return res.status(400).json({ message: 'Products not found' });
        }
        const order = await Order.create({ title, date, description});
        await order.addProducts(products);   
        const orderWithProducts = await Order.findByPk(order.id, {
          include: Product,
        });   
        return res.status(201).json({ orderWithProducts });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error });
      }
    });

    app.post('/api/products', async (req, res) => {
      try {
      const product = await Product.create(req.body);
      return res.status(201).json({ product });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error });
      }
    });

    app.put('/api/orders/:id', async (req, res) => {
      try {
      const { id } = req.params;
      const { title, date, description, productIds } = req.body;
      const order = await Order.findByPk(id);
      await order.update({ title, date, description });
      const products = await Product.findAll({
        where: {
          id: {
            [Op.in]: productIds
          }
        }
      });
      await order.setProducts(products);
      return res.status(202).json({ order });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error });
      }
    });

    app.put('/api/products/:id', async (req, res) => {
      try {
      const { id } = req.params;
      const { serialNumber, isNew, photo, title, type, specification, guarantee, price, date } = req.body;
      const product = await Product.findByPk(id);
      await product.update({ serialNumber, isNew, photo, title, type, specification, guarantee, price, date });
      return res.status(202).json({ product });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error });
      }
    });

    app.delete('/api/orders/:id', async (req, res) => {
      try {
      const { id } = req.params;
      const order = await Order.findByPk(id);
      await order.destroy();
      return res.status(202).json({ order });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error });
      }
    });

    app.delete('/api/products/:id', async (req, res) => {
      try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      await product.destroy();
      return res.status(202).json({ product });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error });
      }
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();

// socket
const io = require('socket.io')(3002, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

let activeSessions = 0;

io.on('connect', (socket) => {
  console.log('New client connected');

  activeSessions++;
  io.emit('activeSessions', activeSessions);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
    activeSessions--;
    io.emit('activeSessions', activeSessions);
  });
});
