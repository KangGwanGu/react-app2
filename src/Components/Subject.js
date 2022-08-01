import React, { Component } from 'react';

class Subject extends Component {
  constructor(props) {
    super(props);
    this.changeDesc = this.changeDesc.bind(this);
    this.state = {
      mode:"read",
      subject:{title:"Web",sub:"World Wide Web"},
      welcome:{title:"Welcome", desc:"Hello, React!!"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for information"},
        {id:3, title:"JavaScript", desc:"JavaScript is for information"}
      ]
    }
    
  }
  changeDesc(e) {
    e.preventDefault();
    if(this.state.mode == 'welcome') {
      this.setState({
        mode:'read'
      });
    } else {
      this.setState({
        mode:'welcome'
      });
    }
  }
  render() {
    var _title = null;
    var _desc = null;
    if(this.state.mode == 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <header>
        <h1><a href="/" onClick={function(e){
          e.preventDefault();
          this.props.onChangePage();
        }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
  
        </header>
      )
    }
  }

  export default Subject;