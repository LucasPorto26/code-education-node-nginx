FROM mysql:5.7

WORKDIR /mysql

RUN mkdir mysql

CMD [ "--innodb-use-native-aio=0" ]

COPY create.sql /docker-entrypoint-initdb.d/