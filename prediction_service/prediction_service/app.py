# -*- coding: utf-8 -*-
"""The app module, containing the app factory function."""
from flask import Flask

from prediction_service.blueprints import main_blueprint


def create_app():
    app = Flask(__name__.split('.')[0])
    app.url_map.strict_slashes = False
    register_blueprints(app)
    return app


def register_blueprints(app):
    app.register_blueprint(main_blueprint)
