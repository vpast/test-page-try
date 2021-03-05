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
          <input type="text" id="login" placeholder="Login" />
        </div>
        <div>
          <input type="text" id="password" placeholder="Password" />
        </div>
        <input type="submit" value="Login" className="btn btn-primary"/>
    </form>
    
  )
}

export default Login