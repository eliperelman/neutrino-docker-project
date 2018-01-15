FROM nginx

RUN echo "daemon off;" >> /etc/nginx/nginx.conf
COPY nginx-site.conf /etc/nginx/conf.d/default.conf
WORKDIR /app
COPY --from=ndp-ui /app/services/ui/build .
