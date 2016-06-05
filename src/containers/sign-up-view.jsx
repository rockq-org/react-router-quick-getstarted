import React from 'react';
import { withRouter } from 'react-router';
import request from 'superagent';

class SignUpView extends React.Component {
  handleRegistry(event){
    event.preventDefault();

    console.log('registry...');

    this.context.router.push({
      pathname: 'login'
    });
  }

  render() {
    return (
      <form action="#" onSubmit={ this.handleRegistry.bind(this) }>
        <div className="form-group">
          <lable>username</lable>
          <input type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <lable>password</lable>
          <input type="password" className="form-control"/>
        </div>
        <div className="form-group">
          <input type="submit" value="注册" className="btn btn-success btn-block" />
        </div>
      </form>
    );
  }
}

SignUpView.contextTypes = {
  router: React.PropTypes.object
};

export default withRouter(SignUpView);
