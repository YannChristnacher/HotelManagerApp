up:
	docker compose up --build

down:
	docker compose down --remove-orphans

install-back:
	cd services/api && composer install

install-front:
	cd services/web && npm install

migrate:
	docker compose exec api php artisan migrate