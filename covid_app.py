from flask import Flask, jsonify, render_template
from sqlalchemy import create_engine, inspect

# from config import db_user, db_password, db_host, db_port, db_name
# from etl import extract, transform, load

app = Flask(__name__)
# engine = create_engine(f"postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}")


@app.route("/")
def index():
    return render_template("index.html", pages={
        "about":"active",
        "summary": "",
        "map": ""
    })

@app.route("/summary/")
def summary():
    return render_template("summary.html", pages={
        "about":"active",
        "summary": "",
        "map": ""
    })

@app.route("/map/")
def map():
    return render_template("map.html", pages={
        "about":"active",
        "summary": "",
        "map": ""
    })

if __name__ == "__main__":
    app.run(debug=True)