import { Typography, Button } from "components/atoms";
import { homeImg_1,homeImg_2,homeImg_3 } from "assets/images";
import "./index.css";

export const HomePage = () => {

  const handleButtonClick = () => {
    console.log("Button clicked");
  }

  return (
    <div className="homepage-wrapper">
      <div className="homepage-top-wrapper">
        <div className="homepage-top-content">
          <Typography variant="h1" label="KJ Holdings Lanka (Pvt) Ltd" className="text-burnt-range" />
        </div>
        <div className="homepage-bottom-content">
          <div className="homepage-bottom-left-content">
            <Typography variant="h2" label="KJ Holdings is a well-known animal feed firm in Sri Lanka. Effective animal health diets and products have been offered nationwide since our founding in 2008. KJ Holding provides an extensive variety of sustainable and environmentally friendly products." className="p-500-lg" />
            <Button onClick={handleButtonClick} label="Get more details" className="homepage-btn" />
          </div>
          <div className="homepage-bottom-right-content">
            <div className="homepage-bottom-right-top-row">
              <img src={homeImg_1} alt="homeImg_1" className="homepage-img_1" />
              <img src={homeImg_2} alt="homeImg_2" className="homepage-img_2" />
            </div>
            <img src={homeImg_3} alt="homeImg_3" className="homepage-img_3" />
          </div>
        </div>
      </div>
      <div className="homepage-bottom-wrapper">
        <Typography label="With fully automated manufacturing facilities, KJ Holdings provides toll manufacturing services to a number of well-known firms." variant="p" className="p-600-m text-dim-gray max-w-800 text-center" />
      </div>
    </div>
  )
}