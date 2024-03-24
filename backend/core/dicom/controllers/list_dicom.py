from flask_restful import Resource

from core.dicom.models import DICOMFile


class DICOMFileList(Resource):
    def get(self):
        files = DICOMFile.query.all()
        return [{'id': file.id, 'path': file.file_path} for file in files]
