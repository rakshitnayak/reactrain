import React, { Component } from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';

const styles={


    bg:{
       
       textAlign:"center",
    },
    
    center:{
     
            marginLeft: "auto",
            marginRight: "auto"
        
    }

 
   
}


class Amount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'Divya singh',
       clicks: 2000,
      show: true,
     
    };
  }

  withdraw = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  deposit = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }


  render() {
    return (

    
      <div  style={styles.bg} >

       <h3>Hello I am a bank component</h3>
             <table style={styles.center}>
                   <tr>
                     <th colSpan={2}>Customer Details</th>
                   </tr>
                  <tr>
                    <td>Customer name</td>
                    <td >available balance</td>
                  </tr>
                 <tr>
                  <td>{this.state.name}</td>
                  <td >{ this.state.show ? <h2>{ this.state.clicks }</h2> : '' }</td>
                </tr>
             </table>


    
          
          <div style={{paddingTop:40,paddingBottom:20}}>

          <Button variant="primary" onClick={this.withdraw}>Deposit</Button>{' '}
          <Button variant="dark" onClick={this.deposit}>Withdraw</Button>{' '}

          </div>
        </div>
    );
  }
}

export default Amount;