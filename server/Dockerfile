FROM php:7.1
RUN apt-get update -y && apt-get install -y libmcrypt-dev openssl zip
RUN docker-php-ext-install pdo mcrypt mbstring
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
COPY . /app
WORKDIR /app
RUN composer install