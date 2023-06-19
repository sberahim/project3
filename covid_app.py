from flask import Flask, jsonify, render_template
from sqlalchemy import create_engine, inspect
from covid_etl import transform, load

app = Flask(__name__)
engine = create_engine("postgresql://postgres:8mlbxtdRI93TKYxpBzW0@localhost:5432/covid_df")
connection = engine.connect()

@app.route("/graphs/")
def index():
    return render_template("index.html", pages = {
        "index": "active",
        "map": "",
        "about": ""
    })

@app.route("/map/")
def map():
    return render_template("map.html", pages = {
        "index": "",
        "map": "active",
        "about": ""
    })

@app.route("/")
def about():
    return render_template("about.html", pages = {
        "index": "",
        "map": "",
        "about": "active"
    })

@app.route("/api/covid_summary.json")
def summary():
 
    results = engine.execute("SELECT * FROM covid_summary")
    return jsonify([dict(data) for data in results])

if __name__ == '__main__':
    force = False
    if not force and "covid_summary" in inspect(engine).get_table_names():
        app.run(debug=True, use_reloader=False)
    else:

        dataframe = transform()
        load(dataframe, "covid_summary")
        app.run(debug=True, use_reloader=False)