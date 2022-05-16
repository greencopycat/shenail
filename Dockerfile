FROM node:14.19.1
WORKDIR /home/app/
RUN npm install
RUN npm rebuild node-sass
COPY . .
CMD ["sh", "-c", "npm rebuild node-sass; npm run start"]
# CMD ["npm", "run",  "start"]
EXPOSE 3000