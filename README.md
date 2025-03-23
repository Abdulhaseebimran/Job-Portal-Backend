# 🚀 Job Portal Backend

This is the backend of a Job Portal application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides APIs for user authentication, job postings, company management, and job applications.

## ✨ Features

- ✅ User authentication (register, login, logout, profile update)
- 🏢 Company registration and management
- 📌 Job posting and retrieval
- 📩 Job applications and applicant tracking
- 🔐 Authentication middleware
- 🛡️ Secure API with JWT-based authentication
- 🌐 CORS enabled for frontend integration

## 🛠 Technologies Used

- 🟢 Node.js
- ⚡ Express.js
- 🍃 MongoDB
- 🔗 Mongoose
- 🔑 JWT (JSON Web Token)
- 📂 Multer (for file uploads)
- 🛠 Dotenv
- 🍪 Cookie-parser
- 🌍 CORS

## 📥 Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) 🟢
- [MongoDB](https://www.mongodb.com/) 🍃

### Steps
1. 📥 Clone the repository:
   ```sh
   git clone https://github.com/your-repo/job-portal-backend.git
   cd job-portal-backend
   ```
2. 📦 Install dependencies:
   ```sh
   npm install
   ```
3. 🔧 Create a `.env` file and configure the environment variables:
   ```sh
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. ▶️ Start the server:
   ```sh
   npm start
   ```

## 🔗 API Endpoints

### 👤 User Routes
- `POST /user/register` - Register a new user 📝
- `POST /user/login` - Login user 🔑
- `POST /user/profile/update` - Update user profile ✏️ (Authenticated)
- `GET /user/logout` - Logout user 🚪

### 🏢 Company Routes
- `POST /company/register` - Register a company 🏢 (Authenticated)
- `GET /company/getCompany` - Get all companies 📋 (Authenticated)
- `GET /company/getCompany/:id` - Get a specific company 🔍 (Authenticated)
- `PUT /company/updateCompany/:id` - Update company details ✏️ (Authenticated)

### 📌 Job Routes
- `POST /job/post` - Post a new job 📌 (Authenticated)
- `GET /job/getJobs` - Get all jobs 📋 (Authenticated)
- `GET /job/getAdminJobs` - Get admin jobs 🛠 (Authenticated)
- `GET /job/getJob/:id` - Get a specific job 🔎 (Authenticated)

### 📩 Application Routes
- `POST /application/apply/:id` - Apply for a job ✉️ (Authenticated)
- `POST /application/status/:id/update` - Update application status 🔄 (Authenticated)
- `GET /application/:id/applicants` - Get applicants for a job 👥 (Authenticated)
- `GET /application/appliedjobs` - Get jobs applied by the user 📋 (Authenticated)

## 🔒 Middleware
- `isAuthenticated` - Middleware to check if a user is authenticated using JWT. 🔐

## 📂 Folder Structure
```
backend/
│-- controllers/
│   ├── user.controllers.js
│   ├── company.controllers.js
│   ├── job.controllers.js
│   ├── application.controllers.js
│-- middlewares/
│   ├── isAuthenticated.js
│   ├── multer.js
│-- routes/
│   ├── user.routes.js
│   ├── company.routes.js
│   ├── job.routes.js
│   ├── application.routes.js
│-- utils/
│   ├── db.js
│   ├── ApiError.js
│   ├── asyncHandler.js
│   ├── ApiResponse.js
│-- index.js
│-- package.json
│-- .env
```

## ⚙️ Running in Development Mode
To run the project in development mode, use:
```sh
npm run dev
```

## 🚀 Deployment
To deploy the project, ensure your environment variables are correctly set up and use:
```sh
npm start
```

## ❤️ With Love from Abdul Haseeb Imran
Connect with me:
- 🔗 [LinkedIn](https://www.linkedin.com/in/abdul-haseeb-36a917230)
- 📸 [Instagram](https://www.instagram.com/abdul_haseeb_imran)

## 📜 License
This project is open-source and available under the MIT License.

