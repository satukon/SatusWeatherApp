"""Tests against the geography module."""


def test_search_without_parameter(client):
    """Test error response."""
    response = client.get("/geography")

    assert response.status_code == 400
    assert response.get_json() == {
        "error": "Parameter 'name' is missing",
    }


def test_search_happy_path(client):
    """Test happy path search which founds locations."""
    response = client.get("/geography", query_string={"name": "siilinjärvi"})

    assert response.status_code == 200
    assert response.get_json() == [
        {
            "admin1": "North Savo",
            "country": "Finland",
            "id": 1,
            "latitude": 63.08333,
            "longitude": 27.66667,
            "name": "Siilinjärvi",
        }
    ]


def test_no_results(client):
    """Test when Open-Meteo doesn't find anything"""
    response = client.get("/geography", query_string={"name": "nonexistinglocation"})

    assert response.status_code == 200
    assert response.get_json() == []
