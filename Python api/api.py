import time
from flask import Flask, jsonify
from gpiozero import CamJamKitRobot

robot = CamJamKitRobot()
timewait = 0.1

app = Flask(__name__)

success = {
    'status': 200,
    'message': "Success"
}

@app.route("/up")
def up():
    robot.forward()
    time.sleep(timewait)
    return jsonify(success)

@app.route("/stop")
def upstop():
    robot.stop()
    return jsonify(success)

@app.route("/down")
def down():
    robot.backward()
    time.sleep(timewait)
    robot.stop()
    return jsonify(success)

@app.route("/right")
def left():
    robot.left()
    time.sleep(timewait)
    robot.stop()
    return jsonify(success)

@app.route("/left")
def right():
    robot.right()
    time.sleep(timewait)
    robot.stop()
    return jsonify(success)

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=8080)
