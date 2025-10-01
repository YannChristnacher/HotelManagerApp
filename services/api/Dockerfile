FROM php:8.2-cli
WORKDIR /var/www

# outils de base et extensions minimales
RUN apt-get update && apt-get install -y git unzip libzip-dev zip \
    && docker-php-ext-install pdo_mysql zip

# installer composer (depuis l'image officielle composer)
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

COPY . /var/www
RUN composer install --no-interaction --prefer-dist

CMD ["php","artisan","serve","--host=0.0.0.0","--port=8000"]
