from flask import jsonify
from flask_jwt_extended import create_access_token

from core.auth.common import invalid_credentials, missing_login_data
from core.auth.utils import check_user_password, find_user_by_username


class UserService:
    def handle_login(self, data):
        if not data:
            return missing_login_data()

        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return invalid_credentials()

        user = find_user_by_username(username)

        if not user or not check_user_password(user, password):
            return invalid_credentials()

        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token)
