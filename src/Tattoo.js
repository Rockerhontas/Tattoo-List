import React, { Component } from 'react';
import "./App.scss";

export default class Tattoo extends Component {
constructor (props) {
    super(props);
    this.state = {
        count: 0
    };
}

addCount = () => {

this.setState({count:this.state.count + 1, hasTriggered: true});
};

    render() {
        const { img, title} = this.props.info;

        return (
            <article className="tattoo">
                
                <section className="media">
                <img src={img} width="350px" alt="book" />
<div className="content">
<h2>{title}</h2>
            <p>Likes: {this.state.count}</p>

{
    !this.state.hasTriggered ?

    <button className="likebtn" width="100%" type="button" onClick={this.addCount}>
        Like
        </button> : null 
    }
                </div>
                </section>
            
            </article>
        );
    }
}