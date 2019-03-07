import pymongo, json
from flask import Flask, render_template, url_for, redirect, flash
from passlib.hash import md5_crypt

SERVER_ADDR="104.248.229.75"

app = Flask(__name__)

def connect(address):
    connection =pymongo.MongoClient(SERVER_ADDR)
    connection.drop_database('headphones_cause_vaccines')
    SERVER_ADDR=address
    db = connection['headphones_cause_vaccines']
    collection = db['pokemon-test']
    file = open('db.json').read()
    data = json.loads(file)
    x = collection.insert_many(data)
    return collection


@app.route("/")
def index():

    return


if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0")
