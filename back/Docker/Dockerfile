FROM php:8.1.4-apache

ENV USER=www
ENV GROUP=www

#install packages
RUN set -ex; \
        \
        apt-get update; \
        apt-get install -y \
            apt-transport-https \
            gnupg \
            libicu-dev \
            unzip \
        ; \
        rm -rf /var/lib/apt/lists/*;

#install php extensions
RUN docker-php-ext-install opcache pdo_mysql pcntl

#install intl extension
RUN docker-php-ext-configure intl \
    && docker-php-ext-install intl

#enable apache modules
RUN a2enmod headers rewrite

#install composer
ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_HOME: /tmp/composer
ENV COMPOSER_MEMORY_LIMIT: -1

RUN curl -sS https://getcomposer.org/installer -o /tmp/composer-setup.php \
    && php /tmp/composer-setup.php --2.2 \
    && rm /tmp/composer-setup.php \
    && mv composer.phar /usr/local/bin/ \
    && ln -s /usr/local/bin/composer.phar /usr/local/bin/composer

COPY Docker/config/000-default.conf /etc/apache2/sites-available/

WORKDIR /var/www/html

# Create User and Group
RUN groupadd -g 1000 ${GROUP} && useradd -u 1000 -ms /bin/bash -g ${GROUP} ${USER}

# Grant Permissions
RUN chown -R ${USER} /var/www

# Select User
USER ${USER}

COPY --chown=${USER}:${GROUP} . .


RUN /usr/local/bin/composer install --no-ansi --no-dev --optimize-autoloader
RUN php artisan key:generate
