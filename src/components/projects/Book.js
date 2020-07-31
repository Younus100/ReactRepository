import React, { Component } from "react";
import Select from 'react-select';
import { bookapp} from  '../../store/actions/bookAction'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";



const Gender = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];
  
const Location = [
    { label: "Loc1", value: 355 },
    { label: "Loc2", value: 54 },
];

const Service = [
    {label: "Men's Hair Cut" ,value: 1},
    {label: "Child Hair cut" ,value: 2},
    {label: "Men's Shaving" ,value: 3},
    {label: "Men's Global Color" ,value: 4},
    {label: "Men's Facial" ,value: 5},
    {label: "Men's Clean up" ,value: 6},
    {label: "Men's Manicure and Pedicure" ,value: 7},
    {label: "Men's Body Spa" ,value: 8},
    {label: "Woman's Haircut" ,value: 9},
    {label: "Womans Root Touch Up ( Color )" ,value: 10},
    {label: "Woman's Cleans Up" ,value: 11},
    {label: "Woman's Facial" ,value: 12},
    {label: "Woman's Body Spa" ,value: 13},
    {label: "Woman's Eye Brow ( Threading )" ,value: 14},
    {label: "Woman's Manicure and Pedicur" ,value: 14},
    
]
class Book extends Component {
 constructor(props) {
   super(props)
  this.state = {
    name: "",
    contact: "",
    email: "",
    service: "",
    gender: "",
    location: "",
  };
 }

  handleChange = ( e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]:e.target.value
  })
  }

handleservice = (e,id) => {
  this.state.service = e.label
  }

handlegender = (e,id) => {
  this.state.gender = e.label
   }

handlelocation = (e,id) => {
    this.state.location = e.label
 }
 
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.bookapp(this.state)

  };

  render() {
    const { auth } = this.props;

    if ( ! auth.uid ) { return  <Redirect to='/signin' />; }

    return (
        <div>
        <div className="container">



      <form className="white" onSubmit={this.handleSubmit} >
 
      <h5 className="grey-text text-darken-3">Book Appointment</h5>
       
          <div className="input-field">
          <label>Name</label>
          <input type="text" name='name' id='name' value={this.state.name} onChange={this.handleChange} />
          </div>  

          <div className="input-field">
          <label>Contact</label>
          <input type="text" name='contact' id='contact' value={this.state.contact} onChange={this.handleChange} />
          </div>  

          <div className="input-field">
          <label>Email</label>
          <input type="email" name='email' id='email' value={this.state.email} onChange={this.handleChange} />
          </div>

        
          <div className="input-select">
            <label>Services</label>
            <Select options={Service} name='service' id='service' onChange={e => this.handleservice(e)}  />
          </div>
          

          
          <div className="input-select">
            <label>Location</label>
            <Select options={Location} name='location' id='location'  onChange={e => this.handlelocation(e)}  />
          </div>
     
        
        
            <div className="input-select">
            <label>Gender</label>
            <Select options={Gender} name='gender' id='gender'onChange={e => this.handlegender(e)}  />
          </div>
        
         <div className="input-field">
        <button className='btn brown lighten-1 z-depth-0' >Book</button>
        </div>
         </form>
      
      </div>
      <div className="container-fluid my-5 py-3" id="bottom">
          <h1 className="text-center">
              BarberShop
          </h1>
          <p className="text-center">
              The Exclusive Unisex Salon in your town acquainted with world-className tools and professionals for stunning looks and absolute luxury.
          </p>
          
          <div className="col text-center">
              <a href="#" className="fa fa-facebook "></a>
              <a href="#" className="fa fa-twitter"></a>
              <a href="#" className="fa fa-instagram"></a>
          </div>
      
      </div>   
      </div>

    );
  }
}

const mapStateToPrope = (state) => {
  return {
      auth : state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      bookapp: (book) => dispatch(bookapp(book))
  }
}

export default connect(mapStateToPrope,mapDispatchToProps)(Book);
