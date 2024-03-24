import pathlib

from flask import url_for

from core.dicom.models import DICOMFile


def dicom_dto(file: DICOMFile):
    filename = pathlib.Path(file.path).name

    return {
        'id': file.id,
        'path': file.path,
        'url': url_for('dicom_blueprint.servedicom', filename=filename, _external=True)
    }
