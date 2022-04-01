import React, { Component } from 'react'


const styles={
  center:{
      textAlign:'center',
  
      marginBottom:100
  }
}

export default class Voting extends Component {


  render() {
    return (
      <div style={styles.center}>

        
          <h3> Eligible: {this.props.data.isEligible}</h3>
          <button onClick={()=>this.props.data.checkEligible()}>is eligible</button>
      </div>
    )
  }
}
