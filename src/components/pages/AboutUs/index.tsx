import { PageLayout } from "components/templates";
import { aboutUs } from "assets/images";
import { Typography } from "components/atoms";
import "./index.css";

const AboutUsMiddleNode = () => {
  return (
    <div className="about-us-middle-node-wrapper">
      <img src={aboutUs} alt="about-us-middle-node-img" />
      <div className="about-us-middle-node-content">
        <Typography variant="p" label="Our History" className="text-dark-tangerine p-600-m" />
        <Typography variant="p" label="KJ Holdings is a leading supplier of premium poultry feeds. With a commitment to quality and customer satisfaction, we ensure your poultry receives the best nutrition for optimal growth and production." className="p-400-xs about-us-middle-discription" />
      </div>
    </div>
  )
}

export const AboutUsPage = () => {
  return (
    <div className="about-us-page-wrapper">
      <PageLayout page="about-us-page" primaryTopic="About Us" middleNode={<AboutUsMiddleNode />}/>
    </div>
  )
}