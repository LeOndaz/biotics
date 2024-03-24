from pathlib import Path

from werkzeug.utils import secure_filename
from core import settings

ALLOWED_EXTENSIONS = {'dcm'}


def is_allowed_filename(filename):
    if not secure_filename(filename):
        return False

    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def get_upload_path(path):
    return Path(settings.UPLOAD_PATH) / Path(path)
