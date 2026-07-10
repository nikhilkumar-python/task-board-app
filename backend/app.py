from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

FILE_NAME = "tasks.json"

def load_tasks():
    if not os.path.exists(FILE_NAME):
        return []

    with open(FILE_NAME, "r") as file:
        return json.load(file)

def save_tasks(tasks):
    with open(FILE_NAME, "w") as file:
        json.dump(tasks, file, indent=4)

@app.route("/")
def home():
    return "Task Board API Running"

@app.route("/test")
def test():
    return "Backend Updated Successfully!"

@app.route("/tasks", methods=["GET"])
def get_tasks():
    tasks = load_tasks()
    return jsonify(tasks) 

@app.route("/tasks", methods=["POST"])
def add_task():
    data = request.get_json()

    tasks = load_tasks()

    new_task = {
        "id": len(tasks) + 1,
        "title": data["title"],
        "priority": data["priority"],
        "completed": False
    }

    tasks.append(new_task)

    save_tasks(tasks)

    return jsonify(new_task), 201

@app.route("/tasks/<int:id>", methods=["PUT"])
def update_task(id):
    tasks = load_tasks()

    for task in tasks:
        if task["id"] == id:
            task["completed"] = not task["completed"]

            save_tasks(tasks)

            return jsonify(task)

    return jsonify({"message": "Task not found"}), 404

@app.route("/tasks/<int:id>", methods=["DELETE"])
def delete_task(id):
    tasks = load_tasks()

    tasks = [task for task in tasks if task["id"] != id]

    save_tasks(tasks)

    return jsonify({"message": "Task deleted"})

if __name__ == "__main__":
    import os

    port = int(os.environ.get("PORT", 5000))

    app.run(host="0.0.0.0", port=port)          