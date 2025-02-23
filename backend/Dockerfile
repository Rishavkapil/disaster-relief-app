# Use an official Node.js image as the base
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./
# Copy environment file

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the backend port
EXPOSE 5000

# Ensure socket.io is installed before starting
RUN npm list socket.io || npm install socket.io
# Copy environment file
COPY .env .env

# Start the application
CMD ["npm", "start"]

