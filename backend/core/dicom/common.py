from http import HTTPStatus


def upload_successful():
    return {
        'message': 'DICOM file uploaded successfully'
    }, HTTPStatus.CREATED


def no_selected_file():
    return {'message': 'No selected file'}, HTTPStatus.FORBIDDEN


def filename_not_allowed(filename: str):
    return {
        'message': f"filename=`{filename}` is not allowed"
    }, HTTPStatus.FORBIDDEN
