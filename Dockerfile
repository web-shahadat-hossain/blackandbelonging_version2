# Use the official Node.js 18 image.
FROM node:18-alpine

# Set the working directory.
WORKDIR /app

# Copy the package.json and package-lock.json.
COPY package*.json ./

# Install dependencies using npm install.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Expose the port the app runs on..
EXPOSE 5173

# Start the application.
CMD [ "npm", "run", "dev" ]



