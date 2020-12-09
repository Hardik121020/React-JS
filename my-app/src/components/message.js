import React, { Component } from 'react'

class Message extends Component
{
    constructor()
    {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changemessage()
    {
        this.setState({
            message: 'Thank you for the subscription'
        })
    }
    render()
    {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>

                <button onClick={() => this.changemessage()}>Suscribe</button>
            </div>
        )

    }
}

export default Message