
initDevEnv:
	cp .env.dev .env

initDemoEnv:
	cp .env.demo .env

build:
	docker compose  build

start:
	docker compose up -d

resetDb:
	docker compose exec laravel php artisan migrate:fresh --seed

down:
	docker compose down
