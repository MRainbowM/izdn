# izdn



## Разработка

### Локальная сборка и запуск контейнера
```shell
docker compose -f docker-compose.local.yml up --build
```

### Локальный запуск контейнера
```shell
docker compose -f docker-compose.local.yml up
```

### Локальный запуск с uvicorn
```shell
docker compose -f docker-compose.local.yml exec django-izdn python -m uvicorn basis.asgi:application --reload --host 0.0.0.0 --port 8008
```

