import os

from flask import Flask, request, jsonify
from flask_cors import CORS

from files_helper import create_temp_dir, delete_temp_dir, get_img, get_blood_data
from result_heler import is_xray_pneumonia, is_xls_pneumonia

from models.resnet_model import XrayModel
from models.decision_tree import DecisionTree

app = Flask(__name__)
CORS(app)


@app.route('/upload', methods=['POST'])
def upload():
    if 'xray' not in request.files or 'blood' not in request.files:
        return jsonify({'error': True, 'message': 'The request is not correctly formatted'}), 400

    create_temp_dir()

    img_path = os.path.join('temp', request.files['xray'].filename)
    xls_path = os.path.join('temp', request.files['blood'].filename)

    request.files['xray'].save(img_path)
    request.files['blood'].save(xls_path)

    xray_model = XrayModel()
    blood_model = DecisionTree()

    xray_img = get_img(img_path)
    blood_file = get_blood_data(xls_path)

    xray_result = xray_model.predict(xray_img)
    blood_result = blood_model.predict(blood_file)

    is_pneumonia = is_xray_pneumonia(xray_result) and is_xls_pneumonia(blood_result)

    delete_temp_dir()

    return jsonify({'pneumonia': str(is_pneumonia)}), 200


if __name__ == '__main__':
    app.run()
