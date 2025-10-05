FROM php:8.2-fpm

WORKDIR /var/www

RUN apt-get update && apt-get install -y \
        git \
        curl \
        libpng-dev \
        libonig-dev \
        libxml2-dev \
        zip \
        unzip \
         && docker-php-ext-install pdo pdo_mysql


# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
COPY . /var/www

RUN composer install --no-interaction --prefer-dist

RUN useradd -ms /bin/bash laravel \
    && chown -R laravel:laravel /var/www

USER laravel
