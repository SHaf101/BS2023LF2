from flask import Flask
from flask import send_from_directory
from flaskext.mysql import MySQL

app = Flask(__name__)

@app.route("/")
def home():
	return send_from_directory("html", "webapp.html")


if __name__ == "__main__":
	app.run()
