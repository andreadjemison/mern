import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Credit extends Component {
    render() {
        return (
            <StripeCheckout
            name="Emailsy"
            description="$5 for 50 email credits"
            amount={500}
            token={token => this.props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
            <li>Add Credits</li>
                </StripeCheckout>                
        )
    }
}

export default connect(null, actions)(Credit)