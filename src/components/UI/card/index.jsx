// ============== Card =================================

import "./style.scss";

const index = ({
  data: { image, title, description, category, rating, price },
}) => {
  return (
    <div className="card w-[330px] p-2  border shadow-md rounded-md cursor-pointer hover:shadow-xl duration-200">
      <div className="w-[300px] h-[270px] mx-auto mt-3">
        <img src={image} alt={title} className="w-[230px] h-[250px] ml-8" />
      </div>
      <div className="card-body p-4">
        <h5 className="card-title text-center text-[20px] pb-2 font-bold text-blue-500">
          {title.length > 30 ? title.slice(0, 25) + " ..." : title}
        </h5>
        <p className="card-text text-[14px] h-[140px] overflow-hidden">
          {description.length > 140
            ? description.slice(0, 136) + " ..."
            : description}
        </p>
        <p className="card-text text-[18px] font-bold text-black ">
          Category:{" "}
          <span className="text-blue-500 ml-2">{category.toUpperCase()}</span>
        </p>
        <p className="card-text text-[18px] font-bold text-black ">
          Price: <span className="text-blue-500 ml-2">{price} $</span>
        </p>
      </div>
    </div>
  );
};

export default index;
