import { useEffect, useState } from "react";
import Modal from "../OpenModal/OpenModal";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  AllPortfolio,
  Portfolios,
  Ecommerce,
  SocialMedia,
  Practise,
} from "../../data";
import './portfolio.scss'
export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const [clickedImg, setClickedImg] = useState(null);
  const [clickedName,setClickedName] = useState(null)
  const [clickedTitle,setClickedTitle] = useState(null)
  const handleClick = (d) => {
    setClickedImg(d.img);
    setClickedName(d.task);
    setClickedTitle(d.title)
  };
  const list = [
    {
      id: "featured",
      title: "All",
    },
    {
      id: "web",
      title: "Portoflio",
    },
    {
      id: "mobile",
      title: "E-commerce",
    },
    {
      id: "design",
      title: "Social Media",
    },
    {
      id: "content",
      title: "Practise",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(AllPortfolio);
        break;
      case "web":
        setData(Portfolios);
        break;
      case "mobile":
        setData(Ecommerce);
        break;
      case "design":
        setData(SocialMedia);
        break;
      case "content":
        setData(Practise);
        break;
      default:
        setData(AllPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <div className="content">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) => (
            <PortfolioList
              id={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
            />
          ))}
        </ul>
        <div className="container">
          {data.map((d)=>(
             <div className="item" onClick={() => handleClick(d)}>
             <img src={d.img} alt=""/>
             <div className="overlay"></div>
           </div>
          ))}
         {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            setClickedImg={setClickedImg}
            clickedName={clickedName}
            setClickedName={setClickedName}
            clickedTitle={clickedTitle}
            setClickedTitle={setClickedTitle}
          />
        )}
        </div>
      </div>
    </div>
  );
}
