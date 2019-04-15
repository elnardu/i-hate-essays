from flask import Blueprint, request, jsonify


main_blueprint = Blueprint('main', __name__)

@main_blueprint.route('/api/list_predictors', methods=('GET',))
def get_predictors():
    return jsonify(['markov', 'gpt-2'])