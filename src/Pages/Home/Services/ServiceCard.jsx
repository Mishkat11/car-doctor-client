
const ServiceCard = ({service}) => {
    const {title,img,price,} = service
    return (
        <div className="">
            <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 ">
    <img src={img} alt="Shoes" className="rounded-xl h-[200px]" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title">{title}</h2>
    <div className="card-actions items-center">
    <p>Price: ${price}</p>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;