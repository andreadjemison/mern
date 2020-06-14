import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'
// import Dashboard from './Dashboard'
import Footer from './Footer'

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>New Survey</h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <div>
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/surveys' component={Dashboard} />
                        <Route path='/surveys/new' component={SurveyNew} />
                    </div>
                    <Footer />
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App)