from flask import Blueprint
from flask_restful import Api

from core.dicom.controllers.list_dicom import DICOMFileList
from core.dicom.controllers.upload_dicom import UploadDICOM

product_blueprint = Blueprint('product_blueprint', __name__, url_prefix="/api")
product_api = Api(product_blueprint)

product_api.add_resource(DICOMFileList, '/dicom-files')
product_api.add_resource(UploadDICOM, '/upload')
