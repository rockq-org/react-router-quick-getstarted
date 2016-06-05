import React from 'react';
import request from 'superagent';
import * as actions from '../actions/index.es6';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestPosts, pagination } from '../actions/index.es6';
import ReactPagers from 'react-pagers';

class IndexView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(requestPosts());
  }

  handlePageChange(active) {
    this.props.dispatch(pagination(active));
  }

  render() {
    let totalPage = Math.ceil(this.props.posts.posts.length / 2);
    let posts = this.props.posts.posts.slice((this.props.posts.active - 1) * 2,
                  this.props.posts.active * 2
                );
// console.log((this.props.posts.active - 1) * 2, this.props.posts.active * 2, posts, '===');
    return (
      <div className="container">
        <div className="media-list">
          {
            posts.map((post, index) => {
              return (
                <div className="media" key={ index }>
                  <h4 className="media-header">{ post.title }</h4>
                  <p>{ post.body }</p>
                </div>
              )
            })
          }
          <ReactPagers active={ this.props.posts.active } total={ totalPage }
            useHash={ false }
            onChange={ this.handlePageChange.bind(this) } />
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
