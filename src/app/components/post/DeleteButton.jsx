import React from 'react';
import { connect } from 'react-redux';
import reduxAction from '../../actions/ReduxActions';
import store from '../../stores/reduxStore';

class DeleteButton extends React.Component {
    render() {
        return <div className="detele-button" onClick={() => {

            let posts = reduxAction.deletePost(this.props.id);
            this.props.dispatch(posts);
        }}>X</div>
    }
}

function mapStateToProps(store) {
    console.log(store.posts.posts);
    return {
        posts: store.posts.posts,
        is_loading: store.posts.is_loading
    }
}

export default connect(mapStateToProps)(DeleteButton);