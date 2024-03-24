from flask import request
from flask_restful import Resource

from core.auth.service import UserService


class LoginResource(Resource):
    def post(self):
        service = UserService()
        return service.handle_login(request.json)
