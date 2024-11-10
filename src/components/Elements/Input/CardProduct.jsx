
const CardProduct = (props) => {
    const {children} = props;
    return (
        <div>
            {children}
        </div>
    );
};

const Header = (props) => {
    const {image} = props;
    return (
        <div>
            <img className="bg-no-repeat bg-center w-full h-72" src={image}
            alt="dimsum-ayam" />
        </div>
    );
};

const Body = (props) => {
    const {children , label} = props;
    return (
        <div>
           <span className="text-xl font-semibold">{label}</span>
           {children}
        </div>
    );
};
const footer = (props)=>{
    const {price} = props;
    return (
        <span className="text-xl font-semibold">
            {price}
        </span>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.footer = footer;



export default CardProduct;