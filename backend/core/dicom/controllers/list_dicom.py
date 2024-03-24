from flask_restful import Resource

from core.dicom.dto import dicom_dto
from core.dicom.models import DICOMFile


class DICOMFileList(Resource):
    def get(self):
        # TODO: should support pagination
        files = DICOMFile.query.all()
        return [
            dicom_dto(file) for file in files
        ]
