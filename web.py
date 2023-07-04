from flask import Flask
from flask import send_from_directory
from flaskext.mysql import MySQL

app = Flask(__name__)
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = '1*'
app.config['MYSQL_DATABASE_DB'] = 'inovatek'
app.config['MYSQL_DATABASE_HOST'] = '172.17.0.2'
mysql.init_app(app)

conn = mysql.connect()
cursor =conn.cursor()

cursor.execute("SELECT poslat, poslon, position.id, remaining_battery from position LEFT JOIN battery ON position.id = battery.id LEFT JOIN model ON battery.id = model.id")
data = cursor.fetchone()

@app.route("/")
def home():
	return send_from_directory("html", "webapp.html")


if __name__ == "__main__":
	app.run()
