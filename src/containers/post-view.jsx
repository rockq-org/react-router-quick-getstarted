import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import request from 'superagent';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/details.es6';

class PostView extends React.Component {
  componentWillMount() {
    this.props.actions.requestPostDetail(this.props.params.id);
  }

  render() {
    return (
      <div className="post-detail">
        {
          this.props.loading ? <h1 className="text-center">loading...</h1> : (
              <div>
                <p>标题：{ this.props.title }</p>
                <p>作者：{ this.props.author }</p>
                <p>发布时间：{ this.props.date }</p>
                <p>
                  Tags:
                  { this.props.tags.split(',').map((tag, index) => {
                    return <span key={ index } className="label label-success">{ tag }</span>
                  }) }
                </p>
                <section dangerouslySetInnerHTML={{__html: this.props.body}}></section>
              </div>
            )
        }
      </div>
    );
  }
}

PostView.contextTypes = {
  router: React.PropTypes.object
};

function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  return state.detail;
}

function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actionMap = {
    actions: bindActionCreators(actions, dispatch),
    dispatch: dispatch
  };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
