FROM node:19.2.0

WORKDIR /app

COPY . .

RUN npm config set legacy-peer-deps true
RUN npm config set fetch-retry-maxtimeout 120000
RUN npm install

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["npm", "run", "dev"]