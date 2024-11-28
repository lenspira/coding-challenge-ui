# React Frontend Test Application

This repository contains a React frontend for a test application that interacts with an external chatbot API. The frontend is containerized using Docker and is deployable to AWS ECS.

---

## Features

- Built with **React**.
- Chatbot integration with an external API for advanced natural language understanding.
- Fully configurable using environment variables.
- Dockerized for ease of deployment and scalability.

---

## Prerequisites

### 1. Install Required Tools

- [Docker](https://www.docker.com/products/docker-desktop)
- [AWS CLI](https://aws.amazon.com/cli/)

### 2. Environment Variables

Ensure you have a `.env` file in the project root with the following content:

```
REACT_APP_CHATBOT_API_ENDPOINT=your_chatbot_api_endpoint
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-repo/coding-challenge.git
   cd coding-challenge
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Run the application locally:
   ```
   npm start
   ```

## Deployment

### Using Docker

1. Build the Docker image:
   ```
   docker build -t react-frontend .
   ```
2. Run the Docker container:
   ```
   docker run -p 8000:8000 --env-file .env react-frontend
   ```

### Deploy to AWS ECS

1. Push the Docker image to AWS ECR:
   ```
   aws ecr create-repository --repository-name react-frontend
   docker tag react-frontend:latest <aws_account_id>.dkr.ecr.<region>.amazonaws.com/react-frontend:latest
   docker push <aws_account_id>.dkr.ecr.<region>.amazonaws.com/react-frontend:latest
   ```
2. Create an ECS cluster, task definition, and service to deploy the container.
   - Add an environment variable for your backend API to the container;
   - Ensure proper IAM roles and security groups are configured.

## Logging and Monitoring

Logs can be viewed in AWS CloudWatch or locally in Docker using:

```
docker logs <container-id>
```

## Security

- Store your backend API URL in a `.env` file or AWS Secrets Manager.
- Restrict public access to your security groups.
- Use HTTPS for secure communication.

## Acknowledgements

- React
- Bootstrap
- React-Boostrap
- React-Icons
- Reach-Chatbot-Kit
- Docker
- AWS ECR and ECS
