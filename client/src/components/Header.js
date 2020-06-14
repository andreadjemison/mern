import React, { Component } from 'react'
import gl from '../img/logingoogle.png'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Credit from './Credit'

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return
            case false:
                return (
                    <li>
                        <a href="/auth/google"><img src={gl} alt="" /></a>
                    </li>
                )
            default:
                return (
                    <ul>
                        <li><Credit  /></li>
                        <li>Credits: {this.props.auth.credits}</li>
                        <li><a href="/api/logout">Logout</a></li>
                    </ul>
                )
        }
    }
    render() {
        return (
            <header>
                <Link
                    className="logo"
                    to={this.props.auth ? '/surveys' : '/'}>
                    Emailsy
                </Link>
                <div>
                    {this.renderContent()}
                </div>
            </header>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Header)