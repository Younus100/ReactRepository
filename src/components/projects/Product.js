import React from "react";
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
//import { incdec } from "./incdec.js";
//import img1 from "/img1.png";

const product = (props) => {
  return (
    <div>
    <Container>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src="./img/img1.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Shampoo</CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText>
              This is shampoo is best for treating dry scalp and dandruf.
            </CardText>
            <Button>Buy Now</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="./img/img2.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Beard Oil</CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText>
              To keep your viking beard long and nourished.Be proud of your
              mane.
            </CardText>
            <Button>Buy Now</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="./img/img4.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle> Hair Wax</CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText>
              This hair wax will hold up the hair for a long time.It will also
              provide a glaze to your hair and make you look like a star.
            </CardText>
            <Button>Buy Now</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="./img/img3.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Conditioner</CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText>
              This conditioner improves the feel, appearance and manageability
              of hair. It also reduces friction between strands of hair to allow
              smoother brushing or combing.
            </CardText>
            <Button>Buy Now</Button>
          </CardBody>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src="./img/img5.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Facial Oil</CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText>
              These facial oils contain ingredients that can kill acne-causing
              bacteria and help slough off dead skin cells.They're specially
              tailored to work with your natural oils to help keep your skin
              balanced.Our skin naturally makes oils and lipids, which help
              prevent water loss from our skin and keep it hydrated.
            </CardText>
            <Button>Buy Now</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="./img/img6.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>BB Cream</CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText>
              This is a versatile combination of products such as moisturizer,
              primer, SPF, foundation, skin treatment, and concealer.
            </CardText>
            <Button>Buy Now</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="./img/img7.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Moisturizing Cream</CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText>
              This cream soften and moisturize the skin and decrease itching and
              flaking.It can be used to treat or prevent dry, rough, scaly,
              itchy skin and minor skin irritations.
            </CardText>
            <Button>Buy Now</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="./img/img8.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Exfoliating Peel Gel</CardTitle>
            <CardSubtitle>It is for deep pore cleansing</CardSubtitle>
            <CardText>
              This peeling gel works in three ways: as a chemical peel it goes
              deep down into pores and removes excess oil and bacteria, as a
              physical peel it sweeps away dead skin cells without any
              irritation, and as treatment for a younger looking appearance.
            </CardText>
            <Button>Buy Now</Button>
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

  );
};

export default product;
