import React from 'react';
import request from 'superagent';
import * as actions from '../actions/index.es6';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestPosts, pagination } from '../actions/index.es6';
import ReactPagers from 'react-pagers';
import { Link } from 'react-router';
import Loading from '../components/loading.jsx';

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
    let totalPage = Math.ceil(this.props.posts.length / 2);
    let posts = this.props.posts.slice((this.props.active - 1) * 2,
                  this.props.active * 2
                );

    return (
      <div className="container">
        {
          this.props.loading ? <Loading /> : (
            <div className="media-list">
              {
                posts.map((post, index) => {
                  return (
                    <div className="media" key={ index }>
                      <div className="media-left">
                        <Link to={`post/${post.id}`}>
                          <img className="media-object" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTUxZjkyYWI3MCB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NTFmOTJhYjcwIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" alt="..." />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="media-header">
                          <Link to={`post/${post.id}`}>{ post.title }</Link>
                        </h4>
                        <p>{ post.body }</p>
                      </div>
                    </div>
                  )
                })
              }
              <ReactPagers active={ this.props.posts.active } total={ totalPage }
                useHash={ false }
                onChange={ this.handlePageChange.bind(this) } />
            </div>
          )
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  return state.posts;
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
