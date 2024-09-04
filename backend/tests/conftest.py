"""Pytest configurations."""

import pytest
from app import create_app


@pytest.fixture
def flask_app():
    """Create and configure a new app instance for each test."""
    app = create_app()

    return app


@pytest.fixture
def client(flask_app):
    """A test client for the app."""
    return flask_app.test_client()
