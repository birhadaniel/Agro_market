import { BsPerson } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { MdOutlineHandshake } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { RiGlobalLine } from "react-icons/ri";

export const steps = [
  {
    icon: <BsPerson size={28} color="#4CAF50" />, 
    title: "1. Register",
    desc: "Create your profile in minutes to join our trusted network of farmers and buyers.",
  },
  {
    icon: <FaSearch size={28} color="#4CAF50"/>, 
    title: "2. List or Search Products",
    desc: "Easily list your agricultural products or search for the items you need with smart filters.",
  },
  {
    icon: <MdOutlineHandshake size={28} color="#4CAF50" />, 
    title: "3. Connect & Trade",
    desc: "Communicate directly, negotiate terms, and finalize your trade securely on the platform.",
  },
];

export const features = [
  { 
    icon: <FaRegCircle size={28} color="#4CAF50" />, 
    title: "Fair Trade", 
    desc: "Ensures transparent pricing and fair practices for all users." 
  },
  { 
    icon: <FaChartLine size={28} color="#4CAF50" />, 
    title: "Real-Time Market Info", 
    desc: "Access up-to-date prices, trends, and forecasts for informed decisions." 
  },
  { 
    icon: <RiGlobalLine size={28} color="#4CAF50" />, 
    title: "Multilingual Support", 
    desc: "Available in multiple local languages for accessibility." 
  },
  { 
    icon: <BsStars size={28} color="#4CAF50" />, 
    title: "AI-Powered Insights", 
    desc: "Leverages AI for crop recommendations and demand forecasting." 
  },
];

export const prices = [
    { crop: "Coffee", price: "150 ETB/kg", region: "Oromia" },
    { crop: "Teff", price: "80 ETB/kg", region: "Amhara" },
    { crop: "Maize", price: "35 ETB/kg", region: "SNNPR" },
];