from flask import Blueprint, request, jsonify

from prediction_service.predictors import PredictorManager

main_blueprint = Blueprint('main', __name__)

pm = PredictorManager()


@main_blueprint.route('/api/list_predictors', methods=('GET',))
def get_predictors():
    return jsonify(pm.get_predictors_list())


@main_blueprint.route('/api/predict', methods=('POST', ))
def handle_predict():
    content = request.get_json(silent=True)
    assert content.get('predictor') and content.get(
        'text') and content.get('cursor')

    predictor = pm.get_predictor(content['predictor'])
    return jsonify(predictor.predict(
        content['text'],
        content['cursor']
    ))
