#uhhhhhhhhhhhhhhhhhhhhh
#Softdev2 pd8
#K08Ay Mon, Go Git It From Yer Flask
#2019-03-07

import os
from flask import Flask, render_template, url_for, redirect, flash, request
from mango import *


app = Flask(__name__)
app.secret_key = os.urandom(32)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/newaddress", methods = ["GET","POST"])
def newaddress():
    if request.method == "POST":
        info = {}
        ip = request.form["ip"]
        if ip:
            connect(ip)
        id = request.form['id']
        if id:
            data = find_pokemon_by_id(int(id))
            if len(data) != 0:
                data = data[0]
                info['img'] = data['img']
                info['name'] = data['name']
                info['id'] = data['id']
                info['weaknesses'] = data['weaknesses']
                info['type'] = data['type']
        return render_template('index.html', **info)
    else:
        return redirect(url_for("index"))


if __name__ == "__main__":
    app.debug = True
    app.run()
