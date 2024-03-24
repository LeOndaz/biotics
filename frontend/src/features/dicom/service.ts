import axios from "../../utils/axios.ts";
import {PageOpts} from "../../typing/pagination.ts";


interface GetDicomFilesOpts extends PageOpts {
}

const getDicomFiles = async (opts: GetDicomFilesOpts) => {
  // only log for now
  console.log(opts);

  return axios.get('/dicom/files').then(response => response.data);
}

export const uploadDicom = async (file: File) => {
  return axios.postForm('/dicom/files', {
    file,
  })
}

export {
  getDicomFiles
}