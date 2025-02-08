import "./index.css";
import { Typography } from "components/atoms";

interface IProps{
    imgSrc: string;
    name: string;
    post:string;
}

export const ImageHolder = ({imgSrc,name,post}:IProps) => {
  return (
    <div className='image-holder-wrapper'>
      <img src={imgSrc} alt="" className="image-holder-image"/>
      <Typography variant="p" label={name} className="p-600"/>
      <Typography variant="p" label={post} className="p-300-sm text-taupe-gray"/>
    </div>
  )
}
