Running it on your own machine:

1. pull the docker image using: docker pull rashik977/todo:2.0
2. run the image using your own .env file (contents of the env are in .env.example), run command : docker run --env-file .env -p 3000:3000 rashik977/todo:2.0
3. use Postman(or your choice of HTTP client) to use the API.

Executing:
1. use POST '/users' to add a new user.
2. use POST '/auth/login' to log in and get the access token.
3. use GET '/users' or '/tasks' and use that access token as a bearer to view all the users and the tasks.
   note: you can run CRUD on tasks from here as well.
4. use POST '/auth/refresh' and pass the refresh token to get a new access token and refresh token.
5. Proper error handling using error handling middleware is implemented into the API.
