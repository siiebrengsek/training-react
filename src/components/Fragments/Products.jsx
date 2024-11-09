

import CardProduct from "../Elements/Input/CardProduct";

const Products = () => {
   return (
      <div>
        <CardProduct>
          <CardProduct.Header image="/images/dimsum-ayam.jpg" />
          <CardProduct.Body label="Dimsum Ayam">Ada varian toping Wortel, Jamur, Crabstick, Tuna, dan Smokebeef
          </CardProduct.Body>
          <CardProduct.footer price="Rp. 3.000" />
        </CardProduct>
      </div>
    );
};

export default Products;