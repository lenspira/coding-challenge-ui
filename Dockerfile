# Stage 1: Build the React app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Accept a build argument for the backend API endpoint
ARG REACT_APP_CHATBOT_API_ENDPOINT

# Set it as an environment variable for the build process
ENV REACT_APP_CHATBOT_API_ENDPOINT=${REACT_APP_CHATBOT_API_ENDPOINT}

# Build the React app, including the environment variable in the static files
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:alpine

# Copy the build output to Nginx's HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port Nginx will use to serve the app
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]