from pathlib import Path

from flask import send_from_directory

from core import settings
from core.db import db
from core.dicom.common import no_selected_file, upload_successful, filename_not_allowed, file_does_not_exist
from core.dicom.models import DICOMFile
from core.utils import is_allowed_filename, get_upload_path


class DicomService:
    def __init__(self):
        dicom_uploads = settings.UPLOAD_PATH / 'dicom'
        dicom_uploads.mkdir(exist_ok=True)

    def save_dicom(self, file):
        if file.filename == '':
            return no_selected_file()

        if not is_allowed_filename(file.filename):
            return filename_not_allowed(file.filename)

        save_dir = settings.UPLOAD_PATH / Path("dicom")
        file_path = save_dir / file.filename
        file.save(file_path)

        new_file = DICOMFile(path=get_upload_path(file_path))

        db.session.add(new_file)
        db.session.commit()

        return upload_successful()

    def get_dicom(self, filename):
        if '..' in filename or filename.startswith('/') or not is_allowed_filename(filename):
            # TODO: malicious user, handle
            return filename_not_allowed(filename)

        root_dicom_path = settings.UPLOAD_PATH / 'dicom'
        file_path = root_dicom_path / filename

        if not file_path.exists():
            return file_does_not_exist(filename)

        return send_from_directory(str(root_dicom_path.resolve()), filename)
