from core.db import db


class User(db.Model):
    """
    TODO: Could be a more general "File"
    """

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(
        db.String(255),
        unique=True,
        index=True
    )
    password = db.Column(db.String(255))

    def __repr__(self):
        return f'<{self.__class__.__name__}>'
