import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.id,
      title:this.props.title,
      desc:this.props.desc
    }
  }
  render() {
    return (
      <article>
        <h2>upate</h2>
        <form action='/update_process' method='post' onSubmit={function (e) {
          e.preventDefault();
          this.props.onSubmit(this.state.id, e.target.title.value, e.target.desc.value);
        }.bind(this)}>
          <p><input type="text" name="title" placeholder='title' value={this.state.title} onChange={function(e){
            this.setState({
              title:e.target.value
            })
          }.bind(this)}></input></p>
          <p><textarea name="desc" placeholder='desc' value={this.state.desc} onChange={function(e){
            this.setState({
              desc:e.target.value              
            })
          }.bind(this)}></textarea></p>
          <p><input type="submit"></input></p>
        </form>
      </article>
    )
  }
}

export default UpdateContent;