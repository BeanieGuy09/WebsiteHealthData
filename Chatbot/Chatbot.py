from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, this is your chatbot!"

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        data = request.json.get('message')
        if data:
            print("Received message:", data)

            # Generate a response message
            response = "You said: " + data

            # Send the response back to the client-side JavaScript
            return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
