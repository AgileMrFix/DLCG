cp ./back/.env.example ./back/.env &&

echo "Copy env file for backend - DONE"

cp ./front/.env.example ./front/.env.production

echo "Copy env file for frontend - DONE"

echo "Building..."

docker-compose  --env-file ./back/.env build

echo "Build - DONE"

docker-compose  --env-file ./back/.env up -d

echo "Enjoy to use the app =)"

echo "Backend: http://localhost:7171"

echo "Frontend: http://localhost:7172"