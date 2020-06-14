import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

class Landing extends Component {
    render() {

        return (
            <div className='landing'>
                <h1>Welcome to Emailsy!!</h1>
                Collect Feedback from your users
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Landing)