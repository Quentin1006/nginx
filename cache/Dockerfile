# Use an official Ubuntu as a parent image
FROM ubuntu:latest

# Install required packages and dependencies
RUN apt-get update && \
    apt-get install -y \
    build-essential \
    zlib1g \
    zlib1g-dev \
    libssl-dev \
    wget \
    git \
    make \
    curl

# Set the NGINX version to install
ENV NGINX_VERSION 1.25.2


RUN git clone https://github.com/FRiCKLE/ngx_cache_purge.git

# Download and extract NGINX source code
# it is more common to install custom nginx in /usr/local/nginx rather than /etc/nginx
RUN wget http://nginx.org/download/nginx-${NGINX_VERSION}.tar.gz && \
    tar -zxvf nginx-${NGINX_VERSION}.tar.gz && \
    cd nginx-${NGINX_VERSION} && \
    ./configure \
    --sbin-path=/usr/sbin/nginx \
    --conf-path=/etc/nginx/nginx.conf \
    --pid-path=/usr/local/nginx/nginx.pid \
    --with-http_realip_module \
    --with-http_ssl_module \
    --with-http_v2_module \
    --with-http_auth_request_module \
    --with-http_gzip_static_module \
    --add-module=ngx_cache_purge && \
    make && \
    make install

# Clean up
RUN rm -rf /nginx-${NGINX_VERSION}* && apt-get remove -y wget curl

# Expose port 80 and 443
EXPOSE 80 443

# Start NGINX
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]