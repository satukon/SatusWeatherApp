"""Flask application factory module."""

from flask import Flask
from flask_cors import CORS


def create_app():
    # create and configure the app
    app = Flask(__name__)
    # enable CORS
    CORS(app)
    # Show non-ascii characters (like ä) as they are
    app.json.ensure_ascii = False

    # Register blueprints
    from . import geography

    app.register_blueprint(geography.blueprint)

    from . import opportunities

    app.register_blueprint(opportunities.blueprint)

    return app
