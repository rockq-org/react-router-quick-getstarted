import React from 'react';

class Login extends React.Component {
  handleLogin(){
    console.log('submiting...');
  }

  render() {
    return (
      <form action="#">
        <div className="form-group">
          <lable>username</lable>
          <input type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <lable>password</lable>
          <input type="password" className="form-control"/>
        </div>
        <div className="form-group">
          <input type="submit" value="登录" className="btn btn-success btn-block" />
        </div>
      </form>
    );
  }
}

export default Login;
