# Stage 1: Build the app
FROM node:16 as build-stage

WORKDIR /app

COPY package*.json ./

# bun ?
RUN npm install

COPY . .

RUN npm run build

FROM node:16 as serve-stage

RUN npm install -g serve

WORKDIR /app

COPY --from=build-stage /app/dist /app

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]
