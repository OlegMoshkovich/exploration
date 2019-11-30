import React, { Component } from "react";
import { firestore } from "../firebase";


class FireFetch extends Component {
    state = {
        posts: []
    };

    unsubscribe = null;

    componentDidMount = async () => {
        this.unsubscribe = firestore.collection("posts").onSnapshot(snapshot => {
            const posts = snapshot.docs.map(collectIdsAndDocs);
            this.setState({ posts });
        });

        //.then method is called whenever the firebase returns something - or whenever the promise is resolves
        const snapshot = await firestore.collection("posts").get();


    };

    componentWillUnmount = () => {
        this.unsubscribe();
    };

    handleCreate = async post => {
        // const { posts } = this.state;
        // const docRef = await 
        firestore.collection("posts").add(post);
        // const doc = await docRef.get();
        // const newPost = collectIdsAndDocs(doc);
        // this.setState({ posts: [newPost, ...posts] });
    };

    handleRemove = async id => {
        // const allPosts = this.state.posts;
        //using short hand notation insted of spelling out the collection etc
        //we can call method delete() on the docs -- so in this case
        //we are getting the post with a particular id and we are deleting it
        // await 
        firestore.doc(`posts/${id}`).delete();
        // const posts = allPosts.filter(post => post.id !== id);
        // this.setState({ posts });
    };

    render() {
        const { posts } = this.state;

        return (
            <main className="Application">
                <h1>Think Piece</h1>
                <Posts
                    posts={posts}
                    onCreate={this.handleCreate}
                    onRemove={this.handleRemove}
                />
            </main>
        );
    }
}

export default FireFetch;
