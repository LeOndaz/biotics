from flask import request
from flask_jwt_extended import jwt_required
from flask_restful import Resource

from core.dicom.service import DicomService


class UploadDICOM(Resource):
    @jwt_required()
    def post(self):
        if 'file' not in request.files:
            return {'message': 'No file part'}, 400

        file = request.files['file']
        service = DicomService()
        return service.save_dicom(file)
