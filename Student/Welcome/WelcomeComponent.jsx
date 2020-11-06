import React ,{Component} from 'react'

import FooterComponent from './FooterComponent.jsx'

//import HeaderComponent from './HeaderComponent.jsx'

import './StudentForm.css'

//import StudentForm from './StudentForm.jsx'

import uploadComponent from'./uploadComponent.js'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class WelcomeComponent extends Component {

        render(){

            const styleLavander = {backgroundColor : 'lavender'};

            const styleLavanderb = {backgroundColor : 'lavenderblush'};

            const stylecyan = {backgroundColor : 'cyan'};

            return(

               <div>
                <Router>
                     <div>

                    <HeaderComponent></HeaderComponent>

                     <Switch>
                     <Route path="/login"  component={StudentForm}/>

                     <div class="row">

                     <div class="col-12 col-md-3 col-xl-2 bd-sidebar" style={styleLavander} >

                     Lorem ipsum dolor sit amet, consectetur adipisicing elit,

                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                     </div>
                     <div class="col-sm-8 " style={styleLavanderb} >

                   <h1 >  Welcome to StudentID page......</h1>

                   </div>

                   <div class="col-sm-2 " style={stylecyan} >

                   <h1> Corner column</h1>

                   <h2>vjghkjklk</h2>

                   </div>

                   </div>

                   </Switch>

                    <FooterComponent></FooterComponent>

                    </div>

                    </Router>
                     </div>
            );

        }
}

class HeaderComponent extends Component{

 

    render(){

 

        return(

            <header>

            <nav className="navbar navbar-expand-md navbar-dark bg-dark">

                <div><a href="http://www.in28minutes.com" className="navbar-brand">Rohit Kanojia</a></div>

                <ul className="navbar-nav">

                   

                </ul>

                <ul className="navbar-nav navbar-collapse justify-content-end navbar-brand">

                    <li><Link className="nav-link" to="/login">Click here for student id</Link></li>

                  

                </ul>

            </nav>

        </header>

        );

    }

}

 

class StudentForm  extends Component {

 

    //const [file, setFile] = React.useState("");

    constructor(props) {

        super(props);

 

   this.state ={

        firstname:'',

        uploading:false,

        image: null

    }

}

    handleUpload=(event)=>{

        if (event.target.files && event.target.files[0]) {

            let img = event.target.files[0];

            this.setState({

              image: URL.createObjectURL(img)

            });

            console.log('uploaded  successfully')

          }

    }

   handleChange=(event)=>

   {

    this.setState(

        {

            [event.target.name]

              :event.target.value

        }

    )

   }

 

    handleRegister =(event)=>{

       alert('thanks  registering'+this.state.firstname);

        event.preventDefault();

    }

  // Handles file upload event and updates state

  //

    render(){

        return(

            <div class ='container'>

                <form className="ui form">

                <center>  <h1> Student Registeration Form</h1> </center> 

  <hr/> 

  <label> Firstname </label>  

<input type="text" name="firstname" placeholder= "Firstname" size="15" required  value={this.state.username} onChange={this.handleChange}/>  

<label> Middlename: </label>  

<input type="text" name="middlename" placeholder="Middlename" size="15" required />  

<label> Lastname: </label>   

<input type="text" name="lastname" placeholder="Lastname" size="15"required />  

<div> 

<label>  

SchoolName : 

</label>  

  

<select> 

<option value="School">School</option> 

<option value="HindiHigh">Hindi High School</option> 

<option value="Gurukul">Gurukul</option> 

<option value="gjghg">jhbhb</option> 

<option value="hgftfu">hjgjj</option> 

<option value="mnbhjgh">ghfghfh</option> 

<option value="jkgfj">gjhj</option> 

</select> 

</div> 

<div> 

<label>  

Gender : 

</label><br/> 

<input type="radio" value="Male" name="gender" checked /> Male  

<input type="radio" value="Female" name="gender"/> Female  

<input type="radio" value="Other" name="gender"/> Other 

  

  </div>

 

<label>  

Phone : 

</label> 

<input type="text" name="country code" placeholder="Country Code"  value="+91" size="2"/>  

<input type="text" name="phone" placeholder="phone no." size="10"required/>  

Current Address : 

<textarea cols="80" rows="5" placeholder="Current Address" value="address" required> 

</textarea> 

 <label for="email"><b>Email</b></label> 

 <input type="text" placeholder="Enter Email" name="email" required/> 

  

    <label for="psw"><b>Password</b></label> 

    <input type="password" placeholder="Enter Password" name="psw" required/> 

  

    <label for="psw-repeat"><b>Re-type Password</b></label> 

    <input type="password" placeholder="Retype Password" name="psw-repeat" required/> 

    <div id="upload-box">

       

      <input type="file" onChange={this.handleUpload} />

      {this.state.image}

      </div>

   

    <button type="submit" class="registerbtn" onClick={this.handleRegister}>Register</button>

 

   

  </form>

  </div>

 

  

        )

    }

   

    

    

    }

export default WelcomeComponent

