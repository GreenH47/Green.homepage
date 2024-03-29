# Use a smaller base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy just the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies (including production dependencies only)
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
