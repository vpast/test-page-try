import {useRouter} from 'next/router';

const Login = () => {
  const router = useRouter();
  return (
    <form className="login_box" onSubmit={(e) => {
      e.preventDefault();
      // делаем что-нибудь с данными
      router.push('/');
    }}>
        <div>
          <label>Login:</label>
          <input type="text" id="login" name="login" />
        </div>
        <div>
          <label>Password:</label>
          <input type="text" id="password" name="password" />
        </div>
        <input type="submit" value="Login" className="btn btn-primary"/>
    </form>
    
  )
}

export default Login