import { useLocation } from "react-router-dom";
import { PageLayout } from "components/templates";
import { chick_feed, feed_1, feed_2, feed_3 } from "assets/images";
import { ProductType } from "types";
import "./index.css";

export const ProductsPage = () => {

  const location = useLocation();

  const { option, subOption } = location.state || {};

  const products: ProductType[] = [
    {
      id: 1,
      name: "Nutri Feed",
      image: feed_1
    },
    {
      id: 2,
      name: "Nutri Feed",
      image: feed_2
    },
    {
      id: 3,
      name: "Nutri Feed",
      image: feed_3
    }
  ]

  return (
    <div className="product-page-wrapper">
      <PageLayout
        page="product-page"
        secondaryTopic={option}
        tertiaryTopic={subOption}
        discription="Specially formulated for chicks to ensure strong growth and a healthy start."
        middleImage={chick_feed}
        products={products}
      />
    </div>
  )
}