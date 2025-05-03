# Build stage
FROM node:14-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm test

# Production stage
FROM node:14-alpine
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY --from=builder /usr/src/app .
EXPOSE 8080
USER node
CMD ["npm", "start"]