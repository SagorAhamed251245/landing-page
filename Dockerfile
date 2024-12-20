# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Set the environment variable for the app's production mode
ENV NODE_ENV=production

# Start the app with the "start" script defined in package.json
CMD npx next start 
