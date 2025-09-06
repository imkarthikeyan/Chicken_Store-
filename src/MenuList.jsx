import React from "react";
import { Link } from "react-router-dom";
import "./MenuList.css";

const menuItems = [
  {
    name: "Chilli Chicken",
    image:
      "https://t3.ftcdn.net/jpg/13/19/64/60/240_F_1319646008_sAGkxPIEEVE1Z6Bx4AnV1lnMlPsD0mw0.jpg",
    showButton: true,
  },
  {
    name: "Chicken Shots",
    image:
      "https://t3.ftcdn.net/jpg/15/55/46/08/240_F_1555460835_v5kkjDrlroICGeyD7pvlRflHqmH04xLc.jpg",
    showButton: true,
  },
  {
    name: "Chicken Rice",
    image:
      "https://t4.ftcdn.net/jpg/09/94/68/33/240_F_994683302_UB2urp7k27mu4vDCogi2vWAFA5NGJLL7.jpg",
    showButton: true,
  },
  {
    name: "Raw Chicken",
    image:
      "https://t3.ftcdn.net/jpg/09/15/90/84/240_F_915908470_3dvXyK5xKzbd0Qk0UDA9iDld3d9K4MVR.jpg",
    showButton: true,
  },
  {
    name: "French Fries",
    image:
      "https://t4.ftcdn.net/jpg/13/72/74/77/240_F_1372747765_YWR5trOMcBWHEXnqo2MnIpND9i2wgkgI.jpg",
    showButton: true,
  },
];

const MenuList = () => {
  return (
    <>
      <h2>The Menus are:</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {menuItems.map((item, index) => (
          <li key={index} style={{ marginBottom: "30px" }}>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} style={{ width: "200px" }} />
            <br />
            {item.showButton && (
              <Link to="/cart">
                <button style={{ marginTop: "10px" }}>Add to Cart</button>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
const Passing = ({menuItems}) => {
  return <h2>Selecting {item.name}</h2>;
}

export default MenuList;
