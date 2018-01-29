FROM node:9.4-alpine

RUN apk add --no-cache --update \
    git \
    bash \
    mysql-client \
    alpine-sdk \
    nodejs

ENV APP_HOME /app
ENV TMP_DIR /tmp

# cache npm install dependencies
WORKDIR $TMP_DIR
COPY package.json package-lock.json $TMP_DIR/
RUN cd $TMP_DIR \
    mkdir -p $TMP_DIR/node_modules \
    npm install

# copy dependencies to working dir
WORKDIR $APP_HOME
# RUN cp -a $TMP_DIR/node_modules $APP_HOME

COPY . $APP_HOME/

EXPOSE 3000

CMD ["node", "server.js"]

