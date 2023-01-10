# For run the application with Docker, run:

#### !!!!Docker and docker-compose must support docker-compose.yml version "3.8" (working on: Docker version 20.10.21 | Docker Compose version v2.13.0)
#### For unix:
    sh init.sh
#### For windows:
    ./init.sh

#### Data is automatically entered into the database from the file `/Docker/mysql/Sample.sql`
#### BackEnd running on `7171` port by default.
#### Frontend running on `7172` port by default.
***
# Other way for develop:

##  For back end:

### 1. Go to the backend folder: 
     cd ./back

### 2. Copy backend .env.example to .env file:
     cp .env.example .env

### 3. Fill the `.env` file (including connection to the DB)
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=
    DB_USERNAME=
    DB_PASSWORD=
### 4. Install the dependencies:
    composer install
### 5. Generate app key:
    php artisan key:generate
### 6. Run the app (remember the backend port, need to fill in frontend .env file):
    php artisan serve --port=7171

##  For front end:
### 1. Go to the frontend folder:
    cd ./front
### 2. Copy frontend .env.example to .env.development file (If not exist):
     cp .env.example .env.development
### 3. Fill the `VITE_API_BASE_URL` var, as: 
    http://{backend-url}:{backend-port}/api
#### example:
    VITE_API_BASE_URL=http://localhost:7171/api
### 4. Install the dependencies:
    npm install
### 5. Run development mode:
    npm run dev

#### Thank you!