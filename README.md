Create the folder structure above and type in all the files.
Test the app without Docker: node server.js, and open http://localhost:3000.
Build the Docker image: docker build -t event-app:1.0 .
List images: docker images
Run the container: docker run -d -p 3000:3000 --name node-server nodeserver:1.
Check it: docker ps, docker logs node-server, and open http://localhost:3000.
Register two participants, then try the same email again.
Stop and remove: docker stop event-app and docker rm event-app.




# Event App – Docker Application

## 📌 Project Description
Event App is a simple Node.js application that demonstrates how to create and run a web application using Docker.

The application uses Node.js HTTP server to display a welcome message in the browser.

## 🛠️ Technologies Used
- Node.js
- JavaScript
- Docker
- HTML

## 📂 Project Structure
```text
Event_App/
│
├── .dockerignore
├── Dockerfile
├── package.json
├── server.js
└── README.md
```

## ⚙️ Prerequisites
- Node.js
- npm
- Docker Desktop
- Git

## 🚀 How to Run the Project

### 1. Clone the Repository
```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project
```bash
cd Event_App
```

### 3. Build Docker Image
```bash
docker build -t event-app .
```

### 4. Run Docker Container
```bash
docker run -d -p 3000:3000 --name event-container event-app
```

### 5. Open in Browser
```text
http://localhost:3000
```

## 🐳 Docker Commands
```bash
docker images
docker ps
docker stop event-container
docker rm event-container
```

## 👨‍💻 Author
Event App – Docker Practical Project