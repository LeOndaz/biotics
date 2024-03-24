# import os
from pathlib import Path

# TODO: Everything should be in .env

# from dotenv import load_dotenv
# load_dotenv("./../.env")

# UPLOAD_PATH = Path(os.getenv("UPLOAD_PATH", "./uploads"))
# UPLOAD_PATH.mkdir(exist_ok=True)
UPLOAD_PATH = Path("./uploads")

# DATABASE_URL = os.getenv("DATABASE_URL")
DATABASE_URL = "sqlite:///../db.sqlite3"
JWT_SECRET = "MY_JWT_SECRET"
PASSWORD_SALT_LENGTH = 200

if DATABASE_URL is None:
    raise ValueError("environment variable DATABASE_URL must be set")

MAX_FILE_SIZE = 10 * 1024 * 1024
