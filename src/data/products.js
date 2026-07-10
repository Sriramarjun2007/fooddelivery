import pizza from "../assets/pizza.png";
import burger from "../assets/burger.png";
import sushi from "../assets/sushi.png";
import Sushicompo from "../assets/Sushicompo.png";
import vegbowl from "../assets/vegbowl.png";

export const products = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, basil",
    price: 400,
    image: pizza,
  },
  {
    id: 2,
    name: "Sushi",
    description: "Fresh sushi rolls",
    price: 250,
    image: sushi,
  },
  {
    id: 3,
    name: "Classic Burger",
    description: "Beef patty, cheese, lettuce",
    price: 350,
    image: burger,
  },
  {
    id: 4,
    name: "Sushi Combo",
    description: "Sushi rolls with salad",
    price: 150,
    image: Sushicompo,
  },
  {
    id: 5,
    name: "Veg Bowl",
    description: "Healthy veg bowl",
    price: 120,
    image: vegbowl,
  },
];