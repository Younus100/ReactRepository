import React from 'react'
import Helmet from 'react-helmet'
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Container,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const Service = () => {
    return(
<div>
          <Container>
            <h1 align="center">Ladies</h1>
            <CardDeck>
          <Card style={{ width: '30rem' }}>
          <CardImg  src="img/haircut-600x400.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Haircut/Style/Blow Dry</CardTitle>
            <CardText>Our highly trained stylists are here to tackle all your needs with a professional Cutting that will leave you looking and feeling phenomenal
            </CardText>
          </CardBody>
        </Card>

        <Card style={{ width: '30rem' }}>
          <CardImg  src="img/pedicure.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Manicure and Pedicure</CardTitle>
            <CardText>During any manicure or pedicure, you receive a relaxing massage of the hands and feet..
            </CardText>
          </CardBody>
        </Card>

        <Card style={{ width: '30rem' }}>
          <CardImg top width='10' src="img/colo2.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Hair Colour and Highlights</CardTitle>
            <CardText>Our custom colour experts are here to help you pick the perfect COLOR/HIGKLIGHT/AMBRE AND BALAYAGE. Let us know what you desire and we'll bring that vision to life at the Salon.
            </CardText>
           </CardBody>
         </Card>
         </CardDeck>
         <CardDeck>

         <Card style={{ width: '30rem' }}>
          <CardImg top width='10' src="img/facial-600x400.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Waxing/Facial</CardTitle>
            <CardText>We offer a full range of aesthetic services like waxing, facial which are carried out in our private room.
            </CardText>
           </CardBody>
         </Card>

        
         <Card style={{ width: '50rem' }}>
          <CardImg top width='10' src="img/Spa.jpg"alt="Card image cap" />
          <CardBody>
            <CardTitle>Hair Spa/Body Spa</CardTitle>
            <CardText>Discover the excelence of Fine and Fade hair care. The Luxury Spa pamper you in comfort.
            </CardText>
           </CardBody>
         </Card>
        
         <Card style={{ width: '30rem' }}>
          <CardImg top width='10' src="img/macro1.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Eyebrows Microblading</CardTitle>
            <CardText>Microblading’ is a specific technique of cosmetic coloring performed on the eyebrows which allows the artist to create the look of real eyebrow hairs by painting very fine hair-like strokes in the skin.
            </CardText>
           </CardBody>
         </Card>

        </CardDeck>
 
 
        <br />
        <br />
        <h1 align="center">Gents</h1>
        <CardDeck>
        <Card style={{ width: '30rem' }}>
          <CardImg top width='10' src="img/manicure.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Manicure and Pedicure</CardTitle>
            <CardText>Pedicure and manicure are blessings for the ones who are always on the go. What a luxury it is to sit, relax, and rejuvenate while a handful of professionals take care of your feet and hands..
            </CardText>
           </CardBody>
         </Card>
        
         <Card style={{ width: '30rem' }}>
          <CardImg top width='10' src="img/Treatwell_1020-1.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Hair Colour and Highlights</CardTitle>
            <CardText>Our custom colour experts are here to help you pick the perfect COLOR/HIGKLIGHT/AMBRE AND BALAYAGE. Let us know what you desire and we'll bring that vision to life at the Salon.
            </CardText>
           </CardBody>
         </Card>
         <Card style={{ width: '30rem' }}>
          <CardImg top width='10' src="img/shaving.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Shaving</CardTitle>
            <CardText>We offer professional salon Shaving.
            </CardText>
           </CardBody>
         </Card>
        </CardDeck>
        
        <CardDeck>
        <Card style={{ width: '30rem' }}>
          <CardImg top width='10' src="img/facial.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Facial/Clean up</CardTitle>
            <CardText>We offer a full range of aesthetic services like clean up, facial which are carried out in our private room.
            </CardText>
           </CardBody>
         </Card>
         <Card style={{ width: '30rem' }}>
          <CardImg top width='10' src="img/menSpa.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Hair Spa/Body Spa</CardTitle>
            <CardText>Discover the excelence of Fine and Fade hair care. The Luxury Spa pamper you in comfort.
            </CardText>
           </CardBody>
         </Card>
         <Card style={{ width: '30rem' }}>
          <CardImg top width='10' src="img/haircut.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Haircut/Style/Blow Dry</CardTitle>
            <CardText>Our highly trained stylists are here to tackle all your needs with a professional Cutting that will leave you looking and feeling phenomenal.
            </CardText>
           </CardBody>
         </Card>
        </CardDeck>
        </Container>
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

export default Service