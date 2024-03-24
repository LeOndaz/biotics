from werkzeug.security import check_password_hash, generate_password_hash

from core.auth.common import user_already_exists
from core.auth.models import User
from core import settings
from core.db import db


def check_user_password(user, password):
    return check_password_hash(user.password, password)


def find_user_by_username(username):
    return User.query.filter_by(username=username).first()


def create_user(username, password, **kwargs):
    hashed_password = generate_password_hash(password, "scrypt", settings.PASSWORD_SALT_LENGTH)

    existing_user = find_user_by_username(username)

    if existing_user:
        return user_already_exists()

    user = User(username=username, password=hashed_password, **kwargs)
    db.session.add(user)
    db.session.commit()

    return user
