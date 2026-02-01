from flask import Flask
from dotenv import load_dotenv

load_dotenv()


# Flask app instance

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Dick and balls'


if __name__ == '__main__':
    app.run(debug=True)