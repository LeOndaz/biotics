from flask import Flask
from flask_jwt_extended import JWTManager

from core import settings
from core.db import db
from core.dicom import product_blueprint
from core.auth import auth_blueprint
from core.auth.utils import create_user


def init_users(app):
    with app.app_context():
        create_user("test", "123")


def init_auth(app):
    JWTManager().init_app(app, True)


def register_blueprints(app):
    app.register_blueprint(product_blueprint)
    app.register_blueprint(auth_blueprint)


def init_configuration(app):
    app.config['UPLOAD_FOLDER'] = settings.UPLOAD_PATH.resolve()
    app.config['MAX_CONTENT_LENGTH'] = settings.MAX_FILE_SIZE
    app.config['SQLALCHEMY_DATABASE_URI'] = settings.DATABASE_URL
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['JWT_SECRET_KEY'] = settings.JWT_SECRET


def init_db(app):
    db.init_app(app)

    with app.app_context():
        db.create_all()


def create_app():
    app = Flask(__name__)

    init_configuration(app)
    init_db(app)
    register_blueprints(app)

    init_users(app)

    return app
