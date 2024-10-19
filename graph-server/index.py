from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS
import json
import random
import os

app = Flask(__name__, static_folder="build/static")
CORS(app)


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    if path != "" and os.path.exists("build/" + path):
        return send_from_directory("build", path)
    else:
        return send_from_directory("build", "index.html")


# GET 요청을 처리하는 엔드포인트
@app.route("/get_data", methods=["GET"])
def get_data():

    with open("./test.json", "r") as f:
        data = json.load(f)

    dataArr = []
    for i in range(0, 10):
        randomNum = random.randrange(1000, 10000)
        data = {"name": i + 1, "atk": randomNum}
        dataArr.append(data)
    return jsonify({"data": dataArr})


# POST 요청을 처리하는 엔드포인트
@app.route("/post_data", methods=["POST"])
def post_data():
    if request.is_json:
        contents = request.get_json()  # JSON 데이터 파싱
        response = {
            "message": "이것은 POST 요청에 대한 응답입니다.",
            "received_data": content,
        }
        dataArr = []
        for content in contents:
            randomNum = random.randrange(1000, 10000)
            data = {"name": content.name, "atk": content.atk}
            dataArr.append(data)
        return jsonify(response), 200
    else:
        return jsonify({"error": "요청 데이터가 JSON 형식이 아닙니다."}), 400


# 서버 실행
if __name__ == "__main__":
    app.run(debug=True, port=8000)
