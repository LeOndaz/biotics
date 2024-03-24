import './App.css'
import DicomForm from "./features/dicom/components/DicomForm.tsx";
import LoginForm from "./features/auth/components/LoginForm.tsx";

function App() {
  return <div style={{
    display: 'flex',
    gap: 6,
  }}>
    <div style={{
      width: 500,
    }}>
      <LoginForm/>
    </div>

    <div style={{
      height: 500,
      width: 500,
    }}>
      <DicomForm/>
    </div>
  </div>
}

export default App
