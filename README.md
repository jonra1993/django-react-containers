# django-react-containers


## Create React app 
npx create-react-app react-frontend --template typescript


## Create Django app

### Create environment 
python3 -m venv venv 
source venv/bin/activate
deactivate

python manage.py collectstatic


### Docker
docker compose up -d

enter to container
docker run -it jrtec/django-video-inspections bash


build dockerfile
docker build -t jrtec/node-container .
docker build -t jrtec/django-video-inspections .


push image
docker image push jrtec/node-container:latest
docker image push jrtec/django-video-inspections:latest



https://github.com/micahhausler/container-transform