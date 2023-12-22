# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the app source code to the working directory
COPY . .

# Expose port 3000 (assuming Vite is configured to use this port)
EXPOSE 3000

# Run the application in development mode
CMD ["npm", "run", "dev"]
