

const ProductCard = ({ imageUrl, title, desc, price }) => {
  return (
    <div className="flex flex-col w-[400px]">
      <img className="bg-no-repeat bg-center object-cover w-full h-72" src={imageUrl} alt="dimsum-ayam" />
      <span className="text-xl font-semibold">{title}</span>
      <div>
        {desc}
      </div>
      <div>
        Rp. {price}
      </div>
    </div>
  )
}

export default ProductCard;
