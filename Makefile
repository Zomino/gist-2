up:
	docker compose up -d

down:
	docker compose down

psql:
	docker exec -it database psql -U postgres