import React from 'react';
import request from 'superagent';
import * as actions from '../actions/index.es6';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestPosts } from '../actions/index.es6';

class IndexView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(requestPosts());
    // this.props.actions.requestPosts();
  }
  render() {
    return (
      <div className="container">
        <div className="media-list">
          {
            this.props.posts.posts.map((post, index) => {
              return (
                <div className="media" key={ index }>
                  <h4 className="media-header">{ post.title }</h4>
                  <p>{ post.body }</p>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  console.log(state);
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actionMap = {
    actions: bindActionCreators(actions, dispatch),
    dispatch: dispatch
  };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexView);
