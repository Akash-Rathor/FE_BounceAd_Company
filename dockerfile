# Use the official node image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Install serve globally to serve the built app
RUN npm install -g serve

# Set the command to serve the app
CMD ["serve", "-s", "build",'l','3000']

# Expose the port the app runs on
EXPOSE 3000
