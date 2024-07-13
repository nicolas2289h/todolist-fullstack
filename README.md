<!-- ABOUT THE PROJECT -->
## About The Project

This is a web application for managing tasks. It is built with a React frontend, a Spring Boot backend, MySQL for the database and Swagger OPENApi for documentation.

[![Image 1](https://res.cloudinary.com/dd8pefa3c/image/upload/v1720829932/todo0_h2swa7.png)](https://res.cloudinary.com/dd8pefa3c/image/upload/v1720829932/todo0_h2swa7.png)

[![Image 2](https://res.cloudinary.com/dd8pefa3c/image/upload/v1720829930/todo1_zid2gw.png)](https://res.cloudinary.com/dd8pefa3c/image/upload/v1720829930/todo1_zid2gw.png)

[![Image 3](https://res.cloudinary.com/dd8pefa3c/image/upload/v1720829926/todo2_mtwyhk.png)](https://res.cloudinary.com/dd8pefa3c/image/upload/v1720829926/todo2_mtwyhk.png)

### Built With

#### Technologies

- [React](https://reactjs.org/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [MySQL](https://www.mysql.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Swagger](https://swagger.io/)
  
![React](https://img.shields.io/badge/-React-20232A?style=flat&logo=react&logoColor=61DAFB)&nbsp;
![Bootstrap](https://img.shields.io/badge/-Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white)&nbsp;
![Spring Boot](https://img.shields.io/badge/-Spring%20Boot-6DB33F?style=flat&logo=spring-boot&logoColor=white)&nbsp;
![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=flat&logo=mysql&logoColor=white)&nbsp;
![Swagger](https://img.shields.io/badge/-Swagger-85EA2D?style=flat&logo=swagger&logoColor=black)&nbsp;


<!-- GETTING STARTED -->
## Getting Started

* JDK 8 or later
* Maven
* MySQL

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/nicolas2289h/todolist-fullstack
   ```
2. Set up backend (Spring Boot)
   Configure MySQL database in application.properties
   
   Add your database configuration:
   ```sh
   DB_HOST=your-database-host
   DB_USER=your-database-user
   DB_PASSWORD=your-database-password
   DB_NAME=your-database-name
   DB_PORT=your-database-port
   ```
   Run Server
   ```sh
    mvn spring-boot:run
   ```
4. Install NPM packages for frontend and run project
   ```sh
   cd ../todolist-client
   npm install
   ```

   ```sh
   npm run dev
   ```

<!-- USAGE EXAMPLES -->
## Backend API

The backend API provides the following endpoints:

* Get all todos list
```sh
GET: /todos
```

* Delete a todo by ID
```sh
DELETE: /delete-todo/id
```

* Delete all completed todos
```sh
DELETE: /delete-all
```

* Add a new todo
```sh
POST: /todo
```

* Update a todo
```sh
PUT: /update-todo/id
```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LINKS -->
## Links

Project Link: [https://todolist-react-mu.vercel.app/](https://todolist-react-mu.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

   
