# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Set the NODE_ENV environment variable to production
ENV NODE_ENV=development

# Expose the default Next.js port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
