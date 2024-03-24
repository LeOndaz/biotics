from flask import Blueprint
from flask_restful import Api

from core.auth.controllers import LoginResource

auth_blueprint = Blueprint('auth', __name__, url_prefix="/api/auth")
auth_api = Api(auth_blueprint)

auth_api.add_resource(LoginResource, '/login')
