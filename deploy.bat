docker build -t f80hub/openalumni .
start docker push f80hub/openalumni:latest
cd frontend/openalumniclient
npm run prod
cd ..
cd ..
