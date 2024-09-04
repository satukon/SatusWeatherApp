"""Geography related Flask blueprint and functionalities."""

import functools
from typing import List

import requests
from flask import Blueprint, request

from . import common_responses

# Default timeout value for requests client
REQUESTS_TIMEOUT = 10

blueprint = Blueprint("geography", __name__)


@blueprint.get("/geography")
def geography_get():
    """Search geographical locations by name (prefix)."""
    name = request.args.get("name")

    if not name:
        return common_responses.bad_request("Parameter 'name' is missing")

    locations = search_location(name)
    return locations


@functools.lru_cache(maxsize=1000)
def search_location(search_prefix: str) -> List:
    """Return list of locations whose name starts with the search prefix. This
    function raises an exception in case of HTTP error."""

    url = "https://geocoding-api.open-meteo.com/v1/search"
    params = {"name": search_prefix}
    response = requests.get(url, params=params, timeout=REQUESTS_TIMEOUT)
    response.raise_for_status()
    response_data = response.json()

    results = []

    id = 0

    for location in response_data.get("results", []):
        id = id + 1
        results.append(
            {
                "id": id,
                "name": location.get("name"),
                "latitude": location.get("latitude"),
                "longitude": location.get("longitude"),
                "country": location.get("country"),
                "admin1": location.get("admin1"),
            }
        )
    return results
