# -*- coding: utf-8 -*-
from flask.helpers import get_debug_flag

from prediction_service.app import create_app
# from conduit.settings import DevConfig, ProdConfig

# CONFIG = DevConfig if get_debug_flag() else ProdConfig

app = create_app()