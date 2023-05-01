# Order-Product-app
This project is a simple web application for managing orders and products.
The frontend of the application is built with React and located in the client directory. The backend is developed using Node.js and the Express framework and is located in the server directory. MySQL is used for data storage.
The client-side of the application allows users to view the list of products and orders, add new orders, and delete existing orders.
The server-side of the application provides an API for managing products and orders.
The project also includes configuration files for Docker Compose, making it easy to run the application in containers.


## Technologies in the client side
- `react`: A JavaScript library for building user interfaces.
- `react-bootstrap`: A UI library for React based on Bootstrap.
- `react-router-dom`: A DOM bindings for React Router, which is a popular routing library for React.
- `redux`: A predictable state container for JavaScript apps.
- `react-redux`: A library that provides bindings for using Redux with React.
- `@reduxjs/toolkit`: The official, opinionated, batteries-included toolset for efficient Redux development.
- `bootstrap`: A popular CSS framework for developing responsive, mobile-first projects on the web.


## Technologies in the client side
- `socket.io`: A library that enables real-time, bidirectional and event-based communication between the browser and the server.
- `socket.io-client`: A library that enables real-time, bidirectional and event-based communication between the client and the server.
- `express`: A fast and minimal web framework for Node.js.
- `body-parser`: A middleware for parsing HTTP request bodies in a middleware before your handlers, available under the req.body - property.
- `cors`: A package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- `mysql2`: A Node.js-based MySQL library that provides fast performance and easy scalability.
- `sequelize`: A promise-based ORM (Object-Relational Mapping) for Node.js that supports PostgreSQL, MySQL, MariaDB, SQLite, and - Microsoft SQL Server.


## Instalation
1. Clone the repository to your local machine using git clone https://github.com/Hlazman/orders-products_app.git.
2. Run docker on local machine
3. Run in terminal ```jsx harmony
    docker-compose up --build
    ```
    To stop ```jsx harmony
      docker-compose down
    ```
    To run again ```jsx harmony
      docker-compose up
    ```

## CLIENT

### Components
#### NavigationMenu
This is a functional React component. It returns a navigation menu bar containing three links rendered as NavLink components from react-router-dom library.


#### OrderCreate
This is a React component that allows a user to create an order by filling out a form. The component imports the useState hook from React, which is used to create state variables to hold the form data. The Form, Button, and Alert components are imported from React-Bootstrap, a library of reusable UI components.

The dispatch function is imported from react-redux library and it is used to dispatch actions to the Redux store. The `addOrder` and `addProduct` actions are imported from the ordersSlice, which is a Redux slice that defines actions and reducers for managing orders and products.

The component renders a form with several fields: title, date, description, and product. When the form is submitted, the `handleSubmit` function is called. This function first checks whether the form data is valid by calling the `isFormValid` function, which returns a Boolean value. If the form data is valid, the function creates a new product object and dispatches the `addProduct` action to add the product to the Redux store. Then it creates a new order object and dispatches the `addOrder` action to add the order to the Redux store. Finally, it resets the form by calling the `handleReset` function and shows a success alert.

If the form data is not valid, the function sets the `showAlert` state variable to true, which shows an error alert.

The `handleReset` function is called when the Reset button is clicked. This function sets all the form data to an empty string.

The component returns the form and two alerts: `showAlert` and `showSuccessAlert`. `showAlert` is displayed when the form data is invalid, and `showSuccessAlert` is displayed when the order is created successfully.


#### OrderDetails
This is a React functional component that receives two props: order and products. The component renders a button with the label "Info" that, when clicked, opens a modal window that displays the details of the order and its associated products.

The component uses the `useState` hook from React to manage the state of the modal window. It defines two state variables: isModalOpen, which controls whether the modal is currently open or closed, and selectedOrder, which stores the order that is currently being displayed in the modal.

The `handleOpenModal` function is called when the "Info" button is clicked. It sets the selectedOrder state to the order that was passed in as a prop and sets the isModalOpen state to true, which opens the modal.

The orderProducts variable is created using the filter method on the products array, which filters out all products that do not match the order ID passed in as a prop.

Inside the modal, the component maps over the orderProducts array and renders a Card component for each product. The Card component displays the product's title, specification, type, guarantee, and price. The price is displayed in two different currencies: UAH and USD.


#### OrderRemove
This is a React component which allows a user to delete an order. It imports useState from the react library to create two state variables: isModalOpen and selectedOrder. It also imports the Button and Modal components from the react-bootstrap library for displaying the delete button and confirmation modal respectively.

The component receives an order object as a prop, which is the order to be deleted. It also uses the `useDispatch` hook from the react-redux library to dispatch the `deleteOrder` action creator from the ordersSlice.

The `handleDeleteOrder` function is called when the user clicks the "Delete" button in the confirmation modal. If selectedOrder is not null, it dispatches the deleteOrder action creator with the id of the selected order. It then sets the isModalOpen state to false to close the modal.

The `handleOpenModal` function is called when the user clicks the "Delete" button on the order card. It sets the selectedOrder state to the order object passed as a parameter and sets the isModalOpen state to true to show the confirmation modal.

The component returns a Button with a "Delete" variant that calls the `handleOpenModal` function when clicked. It also conditionally renders the Modal component if isModalOpen is true. The modal displays a confirmation message with the order title and provides "Cancel" and "Delete" buttons. The "Cancel" button simply sets the isModalOpen state to false to close the modal, while the "Delete" button calls the handleDeleteOrder function to delete the order.


#### Orders
This is a component that displays a table of orders and their corresponding details, such as the product count, date, and total price in both USD and UAH. It also provides the ability to view order details and delete an order using the OrderDetails and OrderRemove components respectively.

The `getOrderProducts` function takes an order object and returns an array of products that belong to that order.

The `getTotalPrice` function takes an array of order products and calculates the total price in USD and UAH using the reduce function.

The Orders component maps through the orders array to create a table row for each order. It displays the order's title, product count, date, description, total price in USD, total price in UAH, and two action buttons for viewing the order details and deleting the order using the OrderDetails and OrderRemove components respectively.

The OrderDetails component displays the details of an order such as the order title, description, date, and a list of products with their corresponding prices.

The OrderRemove component provides a confirmation modal that asks the user if they wish to delete the selected order. It dispatches a deleteOrder action with the order ID to the Redux store when the "Delete" button is clicked.


#### Products
This is a React functional component Products that displays a table of products with filtering by type and shows the order title for each product. It takes two props: orders and products, both of which are arrays of objects.

The component uses the `useState` hook to manage the selected product type. When the user selects a different type from the dropdown menu, the `handleTypeChange` function updates the selected type state accordingly.

The component then filters the products based on the selected type, and maps each filtered product to a row in the table. For each product, it displays the product details in separate columns and also shows the order title, if any, in the last column.

Overall, this component provides a useful interface for viewing and filtering products in the context of orders.


#### TopMenu
This is a React functional component. It creates a top navigation bar with a logo, a date and time, and a badge displaying the number of active sessions.

The component uses the React hooks `useState` and `useEffect` to manage state and side effects. The `useState` hook is used to define two state variables: date and activeSessions. date represents the current date and time, and activeSessions represents the number of active sessions.

The component also uses the `useEffect` hook to define two side effects. The first side effect establishes a connection to a WebSocket server using the socket.io-client library and listens for the activeSessions event to update the activeSessions state variable. The second side effect updates the date state variable every second using the setInterval function.

### Features
#### orderSlice
This is a Redux slice that defines the initial state and action creators for managing the orders and products arrays.

The initial state defines two empty arrays: orders and products.

The createSlice function from the @reduxjs/toolkit library is used to create the appSlice. The name parameter is set to 'orders', which is used to generate action type prefixes.

The reducers field is an object that contains functions that are used to modify the state. There are five reducer functions defined in this slice:

- `addOrder`: Adds a new order to the orders array.
- `addOrders`: Adds multiple orders to the orders array.
- `deleteOrder`: Removes an order from the orders array by filtering out the order with the specified id.
- `addProduct`: Adds a new product to the products array.
- `addProducts`: Adds multiple products to the products array.
The action creators are generated automatically by createSlice, based on the names of the reducer functions. They can be imported and used to dispatch actions to modify the state.

The default export of the module is the reducer function generated by createSlice, which is used to create the Redux store.

#### store
Here creates a Redux store using the configureStore function from the @reduxjs/toolkit package. The store has a single reducer called orders that is created using the orderReducer imported from a separate file named ordersSlice.


### pages
#### CreateOrder
Here imports the CreateOrder component and the useSelector hook from react-redux. It also exports a functional component called CreateOrderPage.

The CreateOrderPage component uses the useSelector hook to access the orders and products state from the Redux store. It then renders the CreateOrder component, passing in the orders and products as props.

#### OrdersPage
The component imports the Orders component and uses useSelector from react-redux to select the orders and products state from the Redux store. It then renders the Orders component with the orders and products props passed in.

#### ProductsPage
The component imports the Orders component and uses useSelector from react-redux to select the orders and products state from the Redux store. It then renders the Products component with the orders and products props passed in.

#### NotFoundPage
This is a React functional component that returns a message "Page not found" when the route is not recognized.

### server
#### server.js
Here creates a socket.io server listening. It allows for real-time communication between the server and connected clients.

The server starts by requiring the socket.io module and creating an instance of it that listens on port. The 'cors' option is set to allow requests from any origin, with specific HTTP methods and headers enabled.

The server then initializes a variable activeSessions to keep track of the number of connected clients.

When a client connects to the server, the connect event is emitted, and a callback function logs a message to the console and increments the activeSessions variable. The server emits the activeSessions event to all connected clients, passing the new value of activeSessions.

When a client disconnects from the server, the disconnect event is emitted, and a callback function logs a message to the console and decrements the activeSessions variable. 

### APP.js
Here renders different pages based on the URL path using the React Router library. It also fetches data from an API endpoint using the fetch method, and stores the data using Redux.

The App component defines two callback functions `getOrders` and `getProducts` that make API requests to fetch data from two different endpoints. The Promise.all method is used to wait for both requests to complete before setting the isLoading state to false, so that the application can render the requested page.

The App component also renders a TopMenu component and a NavigationMenu component, which contain links to navigate between different pages. The Routes component defines the different routes that can be accessed in the application, and the Route components define the components that should be rendered for each specific route. Finally, there is a NotFoundPage component that is rendered if the requested route does not exist.

## SERVER
### index.js
Here sets up an Express server with Sequelize ORM for a MySQL database. It defines two models: Product and Order. The Order model has a belongsToMany relationship with the Product model through a OrderProducts table. The Product model has a belongsToMany relationship with the Order model through the same OrderProducts table.

Here also inserts sample data into the Order and Product tables using the bulkCreate method.

Setting up the routes and endpoints for a RESTful API using the Express.js framework in Node.js.
##### GET requests that will return data from the database:
- `app.get('/api/', ...)` - returns a JSON message indicating that the server is running
- `app.get('/api/orders', ...)` - returns all orders with their associated products
- `app.get('/api/products', ...)` - returns all products with their associated orders
- `app.get('/api/orders/:id', ...)` - returns a specific order by ID with its associated products
- `app.get('/api/products/:id', ...)` - returns a specific product by ID with its associated orders

##### POST requests that will add new data to the database:
- `app.post('/api/orders', ...)` - creates a new order with the given information, adds the associated products, and returns the order with its products
- `app.post('/api/products', ...)` - creates a new product with the given information and returns the product
The next part sets up the PUT requests that will update existing data in the database:

##### POST requests that will update data to the database:
- `app.put('/api/orders/:id', ...)` - updates an existing order by ID with the given information and the associated products, and returns the updated order
- `app.put('/api/products/:id', ...)` - updates an existing product by ID with the given information, and returns the updated product

##### DELETE requests that will remove data from the database:
- `app.delete('/api/orders/:id', ...)` - deletes an existing order by ID and returns the deleted order
- `app.delete('/api/products/:id', ...)` - deletes an existing product by ID and returns the deleted product


#### Dockerfile
for building a Docker image for a Node.js application.
- `FROM node:14`: This line specifies the base image for the Docker image to be built.
- `WORKDIR /app`: This line sets the working directory for the subsequent commands to be executed in.
- `COPY package*.json ./`: This line copies the package.json and package-lock.json files to the working directory.
- `RUN npm ci`: This line runs the npm ci command, which installs the dependencies specified in the package-lock.json file.
- `COPY . .`: This line copies all the files in the current directory to the working directory in the Docker image.
- `EXPOSE 5000`: This line exposes port 5000 on the Docker container.
- `CMD ["npm", "run", "start"]`: This line specifies the command to run when the Docker container is started. 