import React from 'react';
import './App.css';
import history from './history.jpg'
import economics from './economics.jpg'
import politics from './politics.jpg'
import geography from './geography.jpg'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      x:false
    }
    this.dark=this.dark.bind(this);
  }
  dark=()=>{
    this.setState({
      x: !this.state.x
    })
    if(this.state.x === false){
      document.getElementById("nav").style.backgroundColor="#121212";
      document.getElementById("part2").style.backgroundColor="#121212";
      document.getElementById("part4").style.backgroundColor="#121212";
      document.getElementById("part6").style.backgroundColor="#121212";
      document.getElementById("nav").style.color="rgb(7, 161, 250)"
      document.getElementById("btn4").style.backgroundColor="#121212 !important";
      document.getElementById("btn4").style.border="solid #121212"
      document.getElementById("i1").style.color="black"
      document.getElementById("main").style.backgroundColor="#1c1c1c";
      document.getElementById("topics").style.color="rgb(7, 161, 250)"
      document.getElementById("topics2").style.color="rgb(7, 161, 250)"
      document.getElementById("topics3").style.color="rgb(7, 161, 250)";
      document.getElementById("btn1").style.backgroundColor="rgb(7, 161, 250)";
      document.getElementById("btn2").style.backgroundColor="rgb(7, 161, 250)";
      document.getElementById("btn3").style.backgroundColor="rgb(7, 161, 250)";
      
    }
    else{
      document.getElementById("nav").style.backgroundColor="rgb(34, 0, 49)";
      document.getElementById("nav").style.color="white"
      document.getElementById("main").style.backgroundColor="white";
      document.getElementById("topics").style.color="rgb(34, 0, 49)"
      document.getElementById("topics2").style.color="rgb(34, 0, 49)"
      document.getElementById("topics3").style.color="rgb(34, 0, 49)"
      document.getElementById("btn1").style.backgroundColor="rgb(34, 0, 49)"
      document.getElementById("btn2").style.backgroundColor="rgb(34, 0, 49)"
      document.getElementById("btn3").style.backgroundColor="rgb(34, 0, 49)"
      document.getElementById("part2").style.backgroundColor="rgb(225, 230, 255)";
      document.getElementById("part4").style.backgroundColor="rgb(225, 230, 255)";
      document.getElementById("part6").style.backgroundColor="rgb(225, 230, 255)";
    }
  }
  render(){
    return(
      <div className="main"id="main">
        <nav className="nav" id="nav">
          <h2>LearnWisely</h2>
          <button className="btn4" id="btn4" onClick={this.dark}><i className="far fa-lightbulb i1" id="i1" title="Dark-Mode"></i></button>
          
        </nav>
        <div className="part1" id="part1">
          <h2 className="topics" id="topics">Suggested Topics</h2>
         
          <button className="btn1" id="btn1">More</button>
        </div>
        
       <center> 
         <div className="part2" id="part2">
          <div className="card1" id="card1">
            <div className="imgc1" id="imgc1">
                <img src={geography} className="geo" id="geo" alt="geo"/>
            </div>
            <div className="cd" id="cd">
               <p>Geography</p>
            </div>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="card2" id="card2">
            <div className="imgc1" id="imgc1">
                <img src={economics} className="geo" id="geo" alt="geo"/>
            </div>
            <div className="cd" id="cd">
              <p>Economics</p>
            </div>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="card3" id="card3">
            <div className="imgc1" id="imgc1">
                <img src={history} className="geo" id="geo" alt="geo"/>
            </div>
            <div className="cd" id="cd">
              <p>History</p>
            </div>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="card4" id="card4">
            <div className="imgc1" id="imgc1">
                <img src={politics} className="geo" id="geo" alt="geo"/>
            </div>
            <div className="cd" id="cd">
              <p>Politics</p>
            </div>
          </div>
        </div></center>

        <div className="part3" id="part3">
          <h2 className="topics" id="topics2" >Modules</h2>
          <button className="btn2" id="btn2">More</button>
        </div>

        <center> 
         <div className="part4" id="part4">
          <div className="card1" id="card1">
            <div className="cd" id="cd">
              <p>Computer Graphics</p>
            </div>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="card2" id="card2">
            <div className="cd" id="cd">
              <p>Communication Systems</p>
            </div>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="card3" id="card3">
            <div className="cd" id="cd">
              <p>Database Management System</p>
            </div>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="card4" id="card4">
            <div className="cd" id="cd">
              <p>Computer Architecture</p>
            </div>
          </div>
        </div></center>


        <div className="part5" id="part5">
          <h2 className="topics" id="topics3">Flash Cards</h2>
          <button className="btn3" id="btn3">More</button>
        </div>

        <center> 
         <div className="part6" id="part6">
          <div className="card1" id="card1">
            <div className="cd1" id="cd1">
              <p>Chemistry</p>
            </div>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="card2" id="card2">
            <div className="cd1" id="cd1">
              <p>Physics</p>
            </div>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="card3" id="card3">
            <div className="cd1" id="cd1">
              <p>Biology</p>
            </div>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="card4" id="card4">
            <div className="cd1" id="cd1">
              <p>Mathematics</p>
            </div>
          </div>
        </div></center>

      </div>
    )
  }
}


export default App;
