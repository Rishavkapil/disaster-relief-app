# Stage 1: Build the Vite app
FROM node:18 AS build
WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project after installing dependencies
COPY . .
ENV REACT_APP_API_URL=http://backend:5000/api
# Run the Vite build command
RUN npm run build

# Debugging step: Check if the build folder exists
RUN ls -la /app/dist || echo "Build folder missing!"

# Stage 2: Serve the built Vite app with Nginx
FROM nginx:latest

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for serving the app
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

