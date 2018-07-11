import React from 'react';
import { addPost } from '../../actions/postsAction';
import store from '../../stores/reduxStore';
import { connect } from 'react-redux';
import reduxAction from '../../actions/ReduxActions';


class AddButton extends React.Component {

    state = {
        lastId: undefined
    }

    componentWillMount() {
        this.getLastId();
    }

    getLastId() {
        fetch('http://localhost:3000/lastId', {
            method: 'GET',
            credentials: 'include',
        }).then((response) => response.json())
            .then((response) => this.setState({ lastId: response[0].id }))
    }

    insertPost() {
        let data = {
            title: this.props.inputs.title,
            image: this.props.inputs.image,
            description: this.props.inputs.description
        };
        fetch('http://localhost:3000/insert', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(data),
        });
        let posts = reduxAction.addPost(data.title, data.image, data.description, this.state.lastId + 1);
        this.props.dispatch(posts);
        //   addPost(data.title,data.image,data.description, this.state.lastId + 1);
    }

    

    render() {
        return <div className="button" onClick={() => {
           
            console.log(this.props.posts);
            this.insertPost();
            console.log(this.props.lastId);
        }}>
            <div className="button__text">{this.props.text}</div>
        </div>
    }
}


function mapStateToProps(store) {
    return {
        posts: store.posts.posts,
        is_loading: store.posts.is_loading
    }
}

export default connect(mapStateToProps)(AddButton);