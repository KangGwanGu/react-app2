import './App.css';
import React, { Component } from 'react';
import Toc from "./Components/Toc"
import ReadContent from "./Components/ReadContent"
import CreateContent from "./Components/CreateContent"
import UpdateContent from "./Components/UpdateContent"
import Subject from "./Components/Subject"
import Control from "./Components/Control"
import Test from "./Test"


var index = 0;

function getIndex() {
  index = index + 1;
  return index;  
}



class App extends Component {
  constructor(props) {
    super(props);
    this.changeDesc = this.changeDesc.bind(this);
    this.state = {
      index:0,
      // mode:"read",
      mode:"welcome",
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
    this.setState({
      mode:'welcome'
    });
  }

  getContent() {
    var _title = null;
    var _desc = null;    
    var _article = null;    
    if(this.state.mode == 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode == 'read') {
      _title = this.state.contents[this.state.index].title;
      _desc = this.state.contents[this.state.index].desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode == 'create') {
      _title = this.state.contents[this.state.index].title;
      _desc = this.state.contents[this.state.index].desc;
      _article = <CreateContent title={this.state.mode} desc={_desc} onSubmit={function(title, desc){
        var _contents = 
        this.state.contents.concat(
          {id:this.state.contents.length+1, title:title, desc:desc}
        );
        this.setState({
          contents:_contents
          
        })
      }.bind(this)}></CreateContent>
    } else if(this.state.mode == 'update') {
      _title = this.state.contents[this.state.index].title;
      _desc = this.state.contents[this.state.index].desc;
      _article = <UpdateContent id={this.state.index} title={_title} desc={_desc} onSubmit={function(id, title, desc){
        var _contents = Array.from(this.state.contents);
        _contents[id] = {id:id+1, title:title, desc:desc};
        
        // this.state.contents.concat(
        //   {id:id+1, title:title, desc:desc}
        // );
        this.setState({
          contents:_contents,
          mode:'read'
        })
      }.bind(this)}></UpdateContent>
    }

    return _article
  }

  render() {
    return (
      <div className="App">        
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={function(){
          this.setState({
            mode:'welcome'
          });
        }.bind(this)}></Subject>

        {/* <header>
          <h1><a href="/" onClick={this.changeDesc}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
  
        </header> */}

        <Toc data={this.state.contents} onChangePage={function(id){
          this.setState({
            mode:'read',
            index:id-1,
          });
        }.bind(this)}/>
        

        <Control onChangeMode={function(mode){
          if(mode == 'delete') {
            if(window.confirm("real?")) {
              var _contents = Array.from(this.state.contents);
              _contents.splice(this.state.index,1);
              
              this.setState({
                contents:_contents,
                mode:'welcome'
              })
            }
          }
          this.setState({
            mode:mode
          })
        }.bind(this)}></Control>

        {this.getContent()}

        {/* <Test title="Test"></Test> */}
        
      </div>
    )

    
  }
}

export default App;