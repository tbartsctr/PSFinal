Mock Website with React, MongoDB, and CRUD Features
Overview
This mock website is built using React for the frontend, and MongoDB for the backend. It features full CRUD (Create, Read, Update, Delete) functionality to manage user accounts and products. Users can interact with the website to create and manage accounts, view products, and more. The backend is powered by Node.js and Express, while the MongoDB database stores all the relevant data.

Features
Homepage: The main landing page with links to:
Shop Page
About Us Page
Create Account Page
Shop Page: Displays products dynamically loaded from the MongoDB database.
Create Account Page: Allows users to create and delete accounts, with data saved in MongoDB.
About Us Page: A static page that provides information about the website or company.
Backend: Node.js server managing API routes for account and product data.
Tech Stack
Frontend: React
Backend: Node.js with Express
Database: MongoDB
State Management: React hooks and context (if applicable)
API: RESTful API for interacting with MongoDB
Installation & Setup
Prerequisites
Before starting, make sure you have the following installed on your machine:

Node.js (version 12 or later)
MongoDB running locally or via a MongoDB cloud database (MongoDB Atlas)
Clone the Repository
Clone the repository to your local machine:
bash
Copy
git clone https://github.com/your-username/mock-website.git
cd mock-website
Backend Setup
Navigate to the backend directory:

bash
Copy
cd backend
Install backend dependencies:

bash
Copy
npm install
Configure MongoDB connection:

Create a .env file in the backend directory and add your MongoDB URI:
bash
Copy
MONGO_URI=mongodb://localhost:27017/your-database-name
Start the backend server:

bash
Copy
npm start
The server will run on port 5000 (or any port defined in your backend).

Frontend Setup
Navigate to the frontend directory:

bash
Copy
cd frontend
Install frontend dependencies:

bash
Copy
npm install
Start the frontend application:

bash
Copy
npm start
The frontend will be available at http://localhost:3000.

Database
MongoDB is used to store account and product data.

You can manage and view your MongoDB database using MongoDB Compass or any other MongoDB management tool.
Ensure that the MongoDB server is running locally or that you're using a cloud-based database (MongoDB Atlas).
Testing CRUD Operations
Create Account
Navigate to the Create Account page.
Add a new user. The account will be saved to the MongoDB database.
Delete Account
On the Create Account page, you can delete an existing account.
Shop Page
The Shop Page dynamically displays a list of products pulled from the MongoDB database.
Add/Update/Delete Products
Manage product data directly within MongoDB, or implement additional API routes for CRUD operations on products.
Contributing
We welcome contributions to this project! You can:

Fork this repository and submit a pull request.
Report bugs or suggest new features by opening an issue.
