FROM node:18-slim

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

RUN apt-get update && \
    apt-get install -y curl unzip && \
    curl -sSL https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -o chrome.deb && \
    apt-get install -y ./chrome.deb && \
    rm chrome.deb

EXPOSE 4444

CMD ["npm", "run", "chrome-prod"]