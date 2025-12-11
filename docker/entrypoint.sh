#!/usr/bin/env sh
set -e
php artisan storage:link || true
php artisan migrate --force
php artisan db:seed --force
