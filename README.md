# Background
Simple restify app running in docker in native js 

# Docker Commands
```
docker build -t njcaruso/ctr-test-restifyjs:1.0.1 .
docker push njcaruso/ctr-test-restifyjs:1.0.1
docker run -d -p 80:3000 njcaruso/ctr-test-restifyjs:1.0.1
```