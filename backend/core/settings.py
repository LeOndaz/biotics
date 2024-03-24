import os
from pathlib import Path

from dotenv import load_dotenv

ROOT_DIR = Path(".").parent.resolve()

ENV_PATH = ROOT_DIR / ".env"

load_dotenv(ENV_PATH.resolve())

UPLOAD_PATH = Path(os.getenv("UPLOAD_PATH", "./uploads")).resolve()
UPLOAD_PATH.mkdir(exist_ok=True)

DATABASE_URL = os.getenv("DATABASE_URL")

if DATABASE_URL is None:
    raise ValueError("environment variable DATABASE_URL must be set")

JWT_SECRET = os.getenv("JWT_SECRET")

if JWT_SECRET is None:
    raise ValueError("environment variable JWT_SECRET must be set")

if len(JWT_SECRET) < 32:
    raise ValueError("environment variable JWT_SECRET must have length greater than or equal 32")


# no need to override for now
PASSWORD_SALT_LENGTH = 200
MAX_FILE_SIZE = 10 * 1024 * 1024
