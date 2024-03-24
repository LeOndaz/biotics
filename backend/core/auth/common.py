from http import HTTPStatus


def invalid_credentials():
    return {
        'message': "invalid credentials provided"
    }, HTTPStatus.FORBIDDEN


def missing_login_data():
    return {
        'message': "missing login data, username and password must be provided"
    }, HTTPStatus.FORBIDDEN


def user_already_exists():
    return {
        'message': "user already exists",
    }, HTTPStatus.FORBIDDEN
