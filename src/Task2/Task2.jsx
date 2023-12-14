import { data } from "../data";
import GoodsCard from "./GoodsCard/GoodsCard";
import { Outlet, Link } from "react-router-dom";
function Task2() {
  return (
    <div className="container">
      <Link to={`/`}>Task1</Link>
      {data.map((item) => (
        <GoodsCard
          key={item.id}
          imgLink={item.img}
          name={item.name}
          cost={item.cost}
        ></GoodsCard>
      ))}
    </div>
  );
}

export default Task2;
