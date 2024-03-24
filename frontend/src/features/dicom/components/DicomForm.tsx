import DicomViewerComponent from "./DicomViewer.tsx";
import {useDeferredState} from "../../../hooks/useDeferredState.ts";
import * as dicomService from "../service.ts";
import FileUpload from "../../../components/FileUpload/FileUpload.tsx";
import {useSetUrls} from "../hooks.ts";

const DicomForm = () => {
  const setUrls = useSetUrls();

  const [urls, isLoading, error] = useDeferredState(async function getUrls() {
    const files = await dicomService.getDicomFiles({
      page: 1,
      limit: 5,
    })
  
    // TODO: FIX TYPE, not by manually creating types, but by having a swagger file for the API + autogen
    const urls = files.map(file => file.url);
    setUrls(urls);
    
    return urls
  }, [])

  const onUpload = async (file: File) => {
    await dicomService.uploadDicom(file);
  }

  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    background: 'wheat',
    height: "100%",
    width: "100%"
  }}>
    <div style={{height: 50, width: "100%", verticalAlign: 'middle'}}>
      {!isLoading && error && <p>Error happened</p>}
      {isLoading && <p>loading...</p>}
    </div>

    <div style={{height: "100%", width: "100%"}}>
      {urls && urls.length > 0 ?
        <DicomViewerComponent/> : <p>No data found</p>
      }
    </div>

    <div style={{
      display: "flex",
      height: 50,
      width: "100%",
      justifyContent: 'center',
    }}>
      <FileUpload onFile={onUpload}/>
    </div>
  </div>
}

export default DicomForm
