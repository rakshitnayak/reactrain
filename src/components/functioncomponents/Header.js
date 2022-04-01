import {Button} from "react-bootstrap"

const styles={


   bg:{
       height:400,
      background:"#20232a",
      color:'#fff',
      paddingTop:100,
      textAlign:"center",
   },

  
}

function Header(){
    return <div  style={styles.bg}>
        <h1 style={{color:"lightblue"}}>React</h1>
        <h2 style={{color:"lightblue"}}>A JavaScript library for building user interfaces</h2>
        <div style={{marginTop:50}}>
        <Button variant="primary">Get started</Button>{' '}
        <a style={{marginLeft:50,color:"lightblue"}}href="reactjs.org">Take the tutorial</a>
        </div>  
    </div>
}

export default Header;