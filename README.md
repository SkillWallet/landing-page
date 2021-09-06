Build docker image: 
`docker build . -t sw-landing`

Run container:
`docker run -itd --name sw-landing --publish 8080:80 sw-landing`