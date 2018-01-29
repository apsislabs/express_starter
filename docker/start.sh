# Wait for MySQL
while ! mysqladmin ping -h"$DB_HOST" --silent; do
  echo "Waiting for MySQL..."
  sleep 1
done
echo "MySQL is up and running"

