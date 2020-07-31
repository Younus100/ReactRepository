import React from 'react'

const About = () => {
    return(       <div>  
    <div className="container-fluid bg-white mb-5">
       <div className="container text-center bg-white py-5">
           <h1>
               OUR STORY
           </h1>
           <p className="text-secondary mb-5">
               Barber Shop is one of the most powerful brands in the hair & beauty care sector in the city, that has given hairstyling a new horizon. Emerging as the largest single salon chain in the city.
           </p>
           <div className="row text-center">
               <img src="img/barber1.jpg" className="rounded mx-auto d-block" alt=""></img>
               <img src="img/barber2.jpg" className="rounded mx-auto d-block" alt=""></img>
               <img src="img/barber3.jpg" className="rounded mx-auto d-block" alt=""></img>
           </div>
       </div>
    </div>
    
    <h1 className="text-center mt-5">
        Testimonials
    </h1>
    
    <p className="text-secondary text-center mb-5">
        These reviews that our clients have recently submitted are the best way brto learn more about our barbershop’s level of service and customer support
    </p>
    
    <div className="container my-5 bg-white" id="testimonials">
        <div className="row">
            <div className="col-md-3 mt-3 py-5 pl-5 border-right">
                <h3>Mihir Rambhiya</h3>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
            </div>
            <div className="col-md-9 py-5">
                <p className="pt-4 serif">
                    "<span className="italic">
                        I have taken my 3 yr old son for his first men’s haircut and now I’m glad he has such a fantastic look. I recommend any of the barbers at Barbershop for service and pride in their work. I believe my son would never be allowed to leave the chair without a really handsome cut.
                    </span>"
                </p>
            </div>            
        </div>
        <hr />
        <div className="row ">
            <div className="col-md-3 py-5 pl-5 border-right">
                <h3>Sushma Shah</h3>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
            </div>
            <div className="col-md-9 py-5">
                <p className="pt-4 serif">
                    "<span className="italic">I wouldn't go anywhere else in the city. I've been coming here for the last year and I've never felt better about paying good money. The people know what they are doing, give solid advice, and cut like pros. I wasn't used to this before but I’ll visit Barbershop again.</span>"
                </p>
            </div>
            
        </div>
        <hr />
        <div className="row ">
            <div className="col-md-3 py-5 pl-5 border-right">
                <h3>Sushant Singh</h3>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
            </div>
            <div className="col-md-9 py-5">
                <p className="pt-4 serif">
                    "<span className="italic">Polite, professional, charming and courteous team. The best haircut I have ever had! Karan was full of crack, was more than happy to suggest the best cut for me and he even offered a free beverage - what more could you want?! This barbershop is indeed my favorite one.</span>"
                </p>
            </div>
            
        </div>

    </div>
    
    <h1 className="text-center my-5 pt-5">
        FAQ
    </h1>
    
    <p className="text-center pb-5 mb-5 text-secondary">
        If you have any questions regarding the services our barbershop offers, feel free to <br />browse this section of frequently asked questions.
    </p>
    
    <div className="container bg-white">
        <div className="row my-5 mx-5">
            <div className="px-5 pt-5 col-12">
                <h2>
                Do I have to have an appointment?
                </h2>
            </div>
            
            <div className="px-5 py-3 col-12">
               <hr />
                <p className="text-secondary">
                  No. Sign in on the list at the front desk and if there is a wait, you can take advantage of our free Wi-Fi to surf the web or catch up on your email. As soon as your name gets to the top of the list, we’ll get you on your way to that great haircut you’ve been looking forward to.  
                </p>
            </div>
        </div>
        
        <div className="row my-5 mx-5">
            <div className="px-5 pt-5 col-12">
                <h2>
                What if I need a little more off the top (or bottom or otherwise)?
                </h2>
            </div>
            
            <div className="px-5 py-3 col-12">
               <hr />
                <p className="text-secondary">
                  Please feel free to call our administrator and let either the stylist that did the initial service or the store manager know that you would like to come back in and they will make the necessary adjustment within 7 days.  
                </p>
            </div>
        </div>
        
        <div className="row my-5 mx-5">
            <div className="px-5 pt-5 col-12">
                <h2>
                Do you accept walk-ins?
                </h2>
            </div>
            
            <div className="px-5 py-3 col-12">
               <hr />
                <p className="text-secondary">
                  Yes, we accept walk-ins! We have at least one barber dedicated to serving walk-ins nearly every day! We keep track of who’s waiting for walk-in service with our online sign-in list. You can get on the list online or you can sign up at our computer.
                </p>
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

export default About