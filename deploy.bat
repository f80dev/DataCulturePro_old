c:
cd C:\Users\hhoareau\PycharmProjects\OpenAlumni
docker build -t f80hub/openalumni .

cd frontend/openalumniclient
start npm run prod
cd ..
cd ..

docker push f80hub/openalumni:latest
