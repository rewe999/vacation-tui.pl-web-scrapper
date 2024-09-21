# Pobieramy oficjalny obraz MySQL
FROM mysql:latest

# Ustawiamy zmienne środowiskowe dla MySQL
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=mydb
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=admin
ENV MYSQL_TCP_PORT=3310

# Eksponujemy port, na którym MySQL będzie nasłuchiwać
EXPOSE 3310

# Uruchamiamy serwer MySQL
CMD ["mysqld"]
