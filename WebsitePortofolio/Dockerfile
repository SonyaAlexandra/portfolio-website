# Step 1: Use Nginx image from Docker Hub
FROM nginx:alpine

# Step 3: Copy your static website files into Nginx directory
COPY . /usr/share/nginx/html

# Step 4: Expose port 80 for web
EXPOSE 80

# Nginx will run automatically when the container starts
