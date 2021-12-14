FROM node:10-alpine

ENV NODE_ENV "production"
ENV PORT 8079

ENV CATALOGUE_ENDPOINT ""
ENV CARTS_ENDPOINT ""
ENV ORDERS_ENDPOINT ""
ENV USERS_ENDPOINT ""

EXPOSE 8079

RUN addgroup mygroup && \
    adduser -D -G mygroup myuser && \
    mkdir -p /usr/src/app && \
    chown -R myuser /usr/src/app

# Prepare app directory
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN chown myuser /usr/src/app/yarn.lock

USER myuser
RUN yarn install

# Start the app
CMD ["/usr/local/bin/npm", "start"]
