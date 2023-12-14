import Header from "./Header/Header";
import Content from "./Content/Content";
import Image from "./Image/Image";
import { Outlet, Link } from "react-router-dom";
function Task1() {
  return (
    <div>
      <Link to={`Task2`}>Task2</Link>
      <Header></Header>
      <Content></Content>
      <Image></Image>
    </div>
  );
}

export default Task1;
