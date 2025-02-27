# React + Vite

Mock Website with React, MongoDB, and CRUD Features
Description
This is a mock website built using React on the frontend, and MongoDB with a full backend to handle data storage and management. The website includes a homepage that links to several pages, including a Shop page, About Us page, and a Create Account page. The app allows users to perform CRUD (Create, Read, Update, Delete) operations on accounts and products.

Features
Homepage: The main landing page with links to other pages (Shop, About Us, and Create Account).
Shop Page: Displays a list of products populated dynamically from the MongoDB database.
Create Account Page: Allows users to create and delete accounts, with data stored in the MongoDB database.
About Us Page: A simple static page with information about the website or company.
Backend: A Node.js server handling the backend with routes to manage user accounts and products stored in MongoDB.
Tech Stack
Frontend: React
Backend: Node.js with Express
Database: MongoDB
State Management: React hooks and context (if applicable)
API: RESTful API for interacting with MongoDB
Installation & Setup
Prerequisites
Node.js installed
MongoDB running locally or use a MongoDB cloud database (MongoDB Atlas)
Clone the repository
bash
Copy
git clone https://github.com/your-username/mock-website.git
cd mock-website
Backend Setup
Navigate to the backend directory:

bash
Copy
cd backend
Install dependencies:

bash
Copy
npm install
Configure the MongoDB connection in the backend:

Set up a .env file in the backend directory with your MongoDB URI. Example:
bash
Copy
MONGO_URI=mongodb://localhost:27017/your-database-name
Run the backend server:

bash
Copy
npm start
The server will start running on port 5000 (or any port defined in your backend).

Frontend Setup
Navigate to the frontend directory:

bash
Copy
cd frontend
Install dependencies:

bash
Copy
npm install
Run the frontend application:

bash
Copy
npm start


Database
MongoDB will store account data and product information.
You can view and manage your database using MongoDB Compass or any other MongoDB management tool.
Testing CRUD Operations
Create Account: Navigate to the "Create Account" page to add a new user. The account will be saved to MongoDB.
Delete Account: Delete an account from the "Create Account" page.
Shop Page: The Shop page automatically populates the product data stored in the MongoDB database.
Add/Update/Delete Products: You can manage product data in MongoDB directly or by adding an API to handle CRUD operations for products if needed.
Contributing
Feel free to fork this repository and submit pull requests. If you encounter bugs or have feature requests, please open an issue.
