from core.dicom.service import DicomService
from flask_restful import Resource


class ServeDicom(Resource):
    def get(self, filename):
        return DicomService().get_dicom(filename)
