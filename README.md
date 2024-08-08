## Socket log for register activity about devices conection
- Seeks to keep track of the time and date of connection and disconnection of exhausted devices.

# Create CA for proyect running with SSL Certificate
- openssl genpkey -algorithm RSA -out key.pem -pass pass:{your password}
- openssl req -new -key key.pem -out cert.csr -passin pass:{your password}
- openssl x509 -req -days {days} -in cert.csr -signkey key.pem -out cert.pem


![Image about SSL function](images/SSL.jpg)
