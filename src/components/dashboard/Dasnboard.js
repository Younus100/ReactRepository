import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';



class Dashboard extends Component {
    render() {
    return(
        <div> <Helmet>
        <script src="../scripts/parallel.js" type="text/javascript" />
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
 
 <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
 
 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script> 
   </Helmet>
              <img src="./img/carousel%201.jpg" height="500px"/>
                
                   
          <h1 className="text-center m-3">Our Services</h1>
          <p className="text-center m-3 services-sub">Barbershop offers world-className services for both men and women</p>
          <div className="row my-5">
              <div className="col-md">
                  <a href="#"><img  src="./img/Our-Services-male.jpg" alt="Male" className="w-100 zoom imgborder"></img></a>
              </div>
              <div className="col-md">
                  <a href="#"><img src="./img/Our-Services-female.jpg" alt="Female" className="w-100 zoom imgborder"></img></a>
              </div>
          
          
          <br />
             <div className="row my-5">
              <div className="col-md w-100 px-0 py-0 mx-0 haircut">
                  <img id="haircut" src="img/haircut.jpg" className="w-100" alt=""></img>
              </div>
              <div className="col-md bg-white ">
                 <div className="vertical-center">
                      <h1>
                          WE HELP YOU  </h1>
                           <h1> LOOK GREAT</h1>
                         
                    
                      <p className="mt-2 text-secondary">
                          Barbershop is a premier barber shop for stylish men looking for a place where they can feel comfortable, speak their minds, and leave satisfied.
                      </p>
                      <a href="/about"><button type="button" className="btn btn-gold zoom">
                          Learn More
                      </button></a>
                  </div>
              </div>
          </div>
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

      
   
   )
    }
}

export default Dashboard