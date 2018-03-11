// Show user info with edit button if it's the current user
import React from 'react';
import { connect } from 'react-redux';

export class UserProfilePage extends React.Component {

    render () {
        console.log(this.props.user);
        const { name, photoUrl, email, isAnon } = this.props.user;
        const emailAddress = isAnon ? "Unlisted": email;
        return (
            <div className="content-container profile-container">
                <h1>User Profile for {name}</h1>
                {console.log(photoUrl)}
                <img className="profile-image-large" src={photoUrl} alt="Profile pic" />
                <p><strong>Email Address:</strong> {emailAddress}</p>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        user: state.auth
    }
};

export default connect(mapStateToProps)(UserProfilePage);
