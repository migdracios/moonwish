from flask import Flask, request, redirect, render_template, jsonify, url_for
from flask_sqlalchemy import SQLAlchemy
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///moonwish.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

WISH_LIST = []

class Messages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(200))

# 데이터베이스 파일이 없을 경우 생성
if not os.path.exists('moonwish.db'):
    with app.app_context():
        db.create_all()

@app.route('/api/message', methods=['POST'])
def save_message():
    if request.method == 'POST':
        message_text = request.form.get('message')
        if message_text:
            new_message = Messages(message=message_text)
            WISH_LIST.append(new_message)
            db.session.add(new_message)
            db.session.commit()
            return redirect(url_for('get_messages'))
        return 'Message is missing!', 400

@app.route('/api/message', methods=['GET'])
def get_messages():
    if request.method == 'GET':
        oldesst_message = WISH_LIST.pop(0)
        messages_data = {'id': oldesst_message.id, 'message': oldesst_message.message}
        
        return jsonify(messages_data)

@app.route('/')
def deploy_page():
    return render_template('deploy.html')

if __name__ == '__main__':
    app.run(debug=True, port=8080)
