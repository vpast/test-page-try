import Login from "../components/Login"

const LoginPage = () => {
  return (
    <div className="container login_position">
      <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
          integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
          crossorigin="anonymous"
        />
      <link rel="stylesheet" href="/css/login.css"/>
      <h1>Please Login!</h1>
      <Login />
    </div>
  )
}

export default LoginPage