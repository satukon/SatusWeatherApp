"""Functions to create common responses."""

from flask import jsonify


def bad_request(message="Bad Request"):
    """Create a common bad request response."""
    response = jsonify({"error": message})
    response.status_code = 400
    return response
