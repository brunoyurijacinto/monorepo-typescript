# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the server API demo
RUN npm run build-server-api-demo

# Expose the port the app runs on
EXPOSE 5100

# Command to run the application
CMD ["node", "application/api-demo/server/dist/server/server.js"]