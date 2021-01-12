cd frontend/openalumniclient
start npm run prod

cd ..
cd ..
docker build -t f80hub/openalumni .
docker push f80hub/openalumni:latest
