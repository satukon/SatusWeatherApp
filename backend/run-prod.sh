#!/usr/bin/env sh
# Serve Flask application in production with Waitress.

waitress-serve --call 'app:create_app'
