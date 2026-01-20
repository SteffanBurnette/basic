from flask import Flask, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
# Test

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/blog")
def blog():
    return render_template("blog.html")

@app.route("/lists")
def list():
    return render_template("lists.html")

@app.route("/art")
def art():
    return render_template("art.html")

@app.route("/art2")
def art2():
    return render_template("secondArt.html")



if __name__ == "__main__":
    app.run(debug=True, host = "0.0.0.0")