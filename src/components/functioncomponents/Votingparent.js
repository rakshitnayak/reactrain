import React, { Component } from 'react'
import Voting from './Voting'

const styles={
  center:{
      textAlign:'center',
      marginTop:50,
      marginBottom:100
  }
}

export default class Votingparent extends Component {

  constructor(){
      super()
      this.state={
          name:'rakshit',
          age:21,
          isEligible:'checking...',
      }
  }

  checkEligible(){
      if(this.state.age>18){
       this.setState({isEligible:'Yes'})
      }else{
        this.setState({isEligible:'No'})
      }
  }

   

  render() {
    return (
      <div style={styles.center}>
        <hr></hr>
          <h3>Name : {this.state.name}</h3>
          <h3>age : {this.state.age}</h3>
        <Voting data={
            {isEligible:this.state.isEligible,
            checkEligible:this.checkEligible.bind(this)}
            }/>
      </div>
    )
  }
}
