import CardProduct from "../Elements/Input/CardProduct";

const Products = () => {
   return (
      <div >
      </div>
    );
};
const dimsumAyam =()=>{
    return (
      <div>
        <CardProduct>
          <CardProduct.Header image="/images/dimsum-ayam.jpg" ></CardProduct.Header>
          <CardProduct.Body label="Dimsum Ayam">
            <br />
            Ada varian toping Wortel, Jamur, Crabstick, Tuna, dan Smokebeef
          </CardProduct.Body>
          <CardProduct.footer price="Rp. 3.000" />
        </CardProduct>
      </div>
    );
};

const dimsumMentai =()=>{
  return (
    <div>
      <CardProduct>
        <CardProduct.Header image="/images/dimsum-mentai.jpg" />
        <CardProduct.Body label="Dimsum Ayam">
          <br />
          Dimsum yg dibakar dengan taburan saus mentai...
        </CardProduct.Body>
        <CardProduct.footer price="Rp. 20.000" />
      </CardProduct>
    </div>
  );
};

const chiliOil =()=>{
  return (
    <div>
      <CardProduct>
        <CardProduct.Header image="/images/chili-oil.webp" />
        <CardProduct.Body label="Dimsum Ayam">
          <br />
          sambal super pedas khas dimsum
        </CardProduct.Body>
        <CardProduct.footer price="Rp. 3.000" />
      </CardProduct>
    </div>
  );
};

Products.dimsumAyam = dimsumAyam;
Products.dimsumMentai = dimsumMentai;
Products.chiliOil = chiliOil;

export default Products;