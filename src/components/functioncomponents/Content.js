import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import {Col} from "react-bootstrap"




function Content(){
    return (

     <div>
           <Container style={{marginTop:70,height:300}}>
             <Row>
              <Col xs> 
             <h4> Declarative</h4>
             <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
             <p>Declarative views make your code more predictable and easier to debug.</p> 
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

        <Container>
            <Row>
               <Col sm={4}>
                 <h4> A Simple Component</h4>
                  <p> React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.  </p>
                  <p>JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.</p>
                </Col>
                <Col sm={8}>
                 {/* image column */}
                 </Col>
  
            </Row>

         </Container>

        <Container style={{marginTop:40}}>
            <Row>
              <Col sm={4}>
                  <h4> A Simple Component</h4>
                  <p> React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.  </p>
                  <p>JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.</p>
             </Col>
              <Col sm={8}>
                  {/* image column */}
             </Col>
  
            </Row>

        </Container>
        <hr style={{margin:40}}></hr>
        </div>
    )
}

export default Content;