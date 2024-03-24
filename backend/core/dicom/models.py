from core.db import db


class DICOMFile(db.Model):
    """
    TODO: Could be a more general "File"
    """

    __tablename__ = "dicom_files"

    id = db.Column(db.Integer, primary_key=True)
    path = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f'<{self.__class__.__name__} {self.original_filename}>'
