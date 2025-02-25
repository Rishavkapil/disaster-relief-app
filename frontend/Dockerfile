# Use Node.js for building the frontend
FROM node:18 AS build
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend files
COPY . .

# Set environment variable at build time
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL}

# Run the Vite build command
RUN npm run build

# Check if the build folder exists
RUN ls -la /app/dist || echo "Build folder missing!"

# Serve the built app with Nginx
FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for serving the app
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]


