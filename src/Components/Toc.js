import React, { Component } from 'react';

class Toc extends Component {
    render() {
      var list = [];
      var data = this.props.data;
      for (let index = 0; index < data.length; index++) {
        list.push(<li key={data[index].id}><a href={"/content/" + data[index].id} data-id={data[index].id} onClick={function(e){
          e.preventDefault();
          
          this.props.onChangePage(e.target.dataset.id);

        }.bind(this)}>{data[index].title}</a></li>);
        
      }

      return (
        <nav>
            <ul>
                {list}
            </ul>
        </nav>
      )
    }
  }

  export default Toc;