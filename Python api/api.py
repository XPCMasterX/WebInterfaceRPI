import time
from flask import Flask, jsonify
from gpiozero import CamJamKitRobot

robot = CamJamKitRobot()

app = Flask(__name__)

success = {
    'status': 200,
    'message': "Success"
}

@app.route("/up")
def up():
    robot.forward()
    time.sleep(1)
    robot.stop()
    return jsonify(success)

@app.route("/down")
def down():
    robot.backward()
    time.sleep(1)
    robot.stop()
    return jsonify(success)

@app.route("/left")
def left():
    robot.left()
    time.sleep(1)
    robot.stop()
    return jsonify(success)

@app.route("/right")
def right():
    robot.right()
    time.sleep(1)
    robot.stop()
    return jsonify(success)

if __name__ == '__main__':
    app.run(port=8080)
