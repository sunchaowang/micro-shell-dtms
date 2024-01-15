FROM  nginx:latest

COPY  ./wwws/shells/shell-dtms/dist  /usr/share/nginx/html

COPY  ./wwws/subapps/app-car/dist  /usr/share/nginx/html/base-car

EXPOSE  1080

COPY  ./nginx/nginx.conf  /etc/nginx/

CMD  ["nginx",  "-g",  "daemon  off;"]
