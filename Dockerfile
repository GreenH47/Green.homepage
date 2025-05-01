# Use a smaller base image
FROM greenh47/homepage:nextjs_base

# Set the working directory
WORKDIR /app



# Copy the rest of the application code
COPY . .

ENV NODE_ENV=production

#RUN npm build

# Expose the port
EXPOSE 3000


# Start the application
CMD ["sh","-c","next build && npm run start"]
