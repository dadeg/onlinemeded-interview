This is a todo app.

# Architecture Decisions
I chose to run everything in Docker because it is easy to use docker-compose for development and deployment in a simple case like EC2. It also lends itself to easily changing the deployment to a container orchestration sevice.

I chose to keep the 3 services (MySQL, the server, and the frontend) decoupled. For instance, I did not have the database running in the same container as the laravel app. This means that the database can live anywhere (Aurora, etc.) Also, I did not have the laravel app serve the react payload, for the same reasons (the React app could easily be served from S3.) This decoupling also allows for easy scaling of whichever part of the application requires scaling, without needing to scale the parts that do not need extra resources.

I made the API JSON:API compliant.

# Things I would prioritize if I had more time
Tests, user authentication, GUI improvements.

## Personal notes to myself
You may need to manually install composer deps on AWS. Docker isn't doing it at the moment.
