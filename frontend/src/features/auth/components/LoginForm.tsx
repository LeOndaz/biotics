import FormInput from "../../../components/Form/FormInput/FormInput.tsx";
import {useLogin} from "../hooks.ts";

const LoginForm = () => {
  const username = 'test';
  const password = '123';

  const login = useLogin();

  const onLogin = async () => {
    await login(username, password);
  }

  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    background: 'wheat',
    height: "100%",
    width: "100%",
  }}>
    <h1>Login form</h1>

    <div style={{ flexGrow: 1}}>
      <FormInput name='username' label='Username' readOnly value={username}/>
      <FormInput name='password' label='password' readOnly value={password}/>
    </div>

    <button onClick={onLogin}>Login</button>
  </div>
}

export default LoginForm;