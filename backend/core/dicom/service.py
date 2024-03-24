from pathlib import Path

from core.db import db
from core.dicom.common import no_selected_file, upload_successful, filename_not_allowed
from core.dicom.models import DICOMFile
from core.utils import is_allowed_filename, get_upload_path


class DicomService:
    def save_dicom(self, file):
        if file.filename == '':
            return no_selected_file()

        if not is_allowed_filename(file.filename):
            return filename_not_allowed(file.filename)

        file.save(file.filename)

        save_path = Path("dicom") / file.filename
        new_file = DICOMFile(path=get_upload_path(save_path))

        db.session.add(new_file)
        db.session.commit()

        return upload_successful()
