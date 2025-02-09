import { useLocation } from "react-router-dom";
import { PageLayout } from "components/templates";
import {
  chick_feed,
  feed_1,
  feed_2,
  feed_3,
  feed_4,
  feed_5,
  feed_6,
  chicken_bg,
  fish_bg
} from "assets/images";
import { ProductType, ProductDetailsType } from "types";
import "./index.css";

export const ProductsPage = () => {

  const location = useLocation();

  const { option, subOption } = location.state || {};

  const chickFeedProducts: ProductType[] = [
    {
      id: 1,
      name: "Nutri Feed",
      image: feed_1,
      ingredients: "Corn,Livisto,Vitamin",
      packSizes: "50Kg,60Kg,70kg"
    },
    {
      id: 2,
      name: "Nutri Feed",
      image: feed_2,
      ingredients: "Corn,Livisto,Vitamin",
      packSizes: "50Kg,60Kg,70kg"
    },
    {
      id: 3,
      name: "Nutri Feed",
      image: feed_3,
      ingredients: "Corn,Livisto,Vitamin",
      packSizes: "50Kg,60Kg,70kg"
    }
  ]

  const growerFeedProducts: ProductType[] = [
    {
      id: 1,
      name: "Nutri Feed",
      image: feed_1,
      ingredients: "Corn,Livisto,Vitamin",
      packSizes: "50Kg,60Kg,70kg"
    },
    {
      id: 2,
      name: "Nutri Feed",
      image: feed_3,
      ingredients: "Corn,Livisto,Vitamin",
      packSizes: "50Kg,60Kg,70kg"
    }
  ]

  const layerFeedProducts: ProductType[] = [
    {
      id: 1,
      name: "Nutri Feed",
      image: feed_3,
      ingredients: "Corn,Livisto,Vitamin",
      packSizes: "50Kg,60Kg,70kg"
    },
    {
      id: 2,
      name: "Nutri Feed",
      image: feed_4,
      ingredients: "Corn,Livisto,Vitamin",
      packSizes: "50Kg,60Kg,70kg"
    },
  ]

  const fishFeedProducts: ProductType[] = [
    {
      id: 1,
      name: "Nutrivet",
      image: feed_5,
      ingredients: "Corn,Livisto,Vitamin",
      packSizes: "50Kg,60Kg,70kg"
    },
    {
      id: 2,
      name: "Nutrivet",
      image: feed_6,
      ingredients: "Corn,Livisto,Vitamin",
      packSizes: "50Kg,60Kg,70kg"
    },
  ]

  const getProductDetails = (): ProductDetailsType => {
    if (option === "Poultry") {
      switch (subOption) {
        case "Chick Feed":
          return { products: chickFeedProducts, discription: "Specially formulated for chicks to ensure strong growth and a healthy start.", middleImage: chick_feed };
        case "Grower Feed":
          return { products: growerFeedProducts, discription: "Balanced nutrition for growing poultry to maximize productivity.", middleImage: chicken_bg };
        case "Layer Feed":
          return { products: layerFeedProducts, discription: "Optimal feed for layers to increase egg production and quality.", middleImage: chicken_bg };
        default:
          return { products: undefined, discription: undefined, middleImage: undefined };
      }
    } else {
      return { products: fishFeedProducts, discription: "High-quality feed to ensure vibrant colors and health for your ornamental fish.", middleImage: fish_bg };
    }
  }

  return (
    <div className="product-page-wrapper">
      <PageLayout
        page="product-page"
        secondaryTopic={option}
        tertiaryTopic={subOption}
        discription={getProductDetails().discription}
        middleImage={getProductDetails().middleImage}
        products={getProductDetails().products}
      />
    </div>
  )
}