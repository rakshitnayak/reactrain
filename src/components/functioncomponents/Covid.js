import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import {Col} from "react-bootstrap"


import React, { Component } from 'react'

export default class Covid extends Component {



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
        <div>
        <Container style={{marginTop:70,height:300}}>
          <Row>
           <Col xs> 
          <h4>Person 1 Deatils</h4>
          <h3>{this.state.name}</h3> 
          <h3>{this.state.address}</h3>
          <h3>{this.state.age}</h3>
           </Col>
        <Col> <h4>Component-Based</h4>
        <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
        <p>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
        </Col>
         <Col >  <h4>Learn Once, Write Anywhere</h4>
         <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>
        <p>React can also render on the server using Node and power mobile apps using React Native.</p>
         </Col>
          </Row>
     </Container>
  

   
     <hr style={{margin:40}}></hr>
     </div>
    )
  }
}





