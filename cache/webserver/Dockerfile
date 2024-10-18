# Use the official Node.js image from the Docker Hub
FROM node

# Create and change to the app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./


# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 8001

# Define the command to run the app
CMD ["node", "/app/index.js"]