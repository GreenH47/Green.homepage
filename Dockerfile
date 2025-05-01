# Use a smaller base image
FROM greenh47/homepage:nextjs_base

# Set the working directory
WORKDIR /app



## Copy just the package.json and package-lock.json files
#COPY package*.json ./
#
## Install dependencies (including production dependencies only)
#RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 3000
# build the application
#RUN npm run build

# Start the application
CMD ["npm", "run", "start"]
