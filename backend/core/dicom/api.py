from flask import Blueprint
from flask_restful import Api

from core.dicom.controllers.list_dicom import DICOMFileList
from core.dicom.controllers.serve_dicom_file import ServeDicom
from core.dicom.controllers.upload_dicom import UploadDICOM

dicom_blueprint = Blueprint('dicom_blueprint', __name__, url_prefix="/api/dicom")
dicom_api = Api(dicom_blueprint)

dicom_api.add_resource(DICOMFileList, '/files')
dicom_api.add_resource(UploadDICOM, '/files')

dicom_api.add_resource(ServeDicom, '/serve/<filename>')
