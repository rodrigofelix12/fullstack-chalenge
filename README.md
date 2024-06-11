# fullstak-test
Repository for Fullstack Test
# Setup of Applications (local)

## Requisits

Before start, make sure you have the following tecnologies intalled:
```
Java 17
PostgreSQL 13
Maven 3.3.3 
NodeJs LTS
```

## Setting environmnent

First you have to download the project in https://github.com/rodrigofelix12/fullstack-chalenge.git

You can run the dockerfile of the application with the following command:

```
docker build -t task-list-api .
```

You can run the docker-compose.yml to create a new container of PostgreSQL, or just run the script.sql inside of project.

Done that, run: 

```
cd task-list-api
```

```
mvn clean package
```

```
mvn spring-boot:run
```

Done, you application is available in http://localhost:8080

## Setting Front End

```
cd task-list-web
```

make sure you have angular-cli installed, if not:


```
npm install -g @angular/cli@17
```

After that:

```
npm install
```

The front end applicattion is running in http://localhost:4200