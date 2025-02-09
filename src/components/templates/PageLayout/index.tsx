import { Typography } from 'components/atoms';
import { ProductType } from 'types';
import { Product, ImageHolder } from 'components/molecules';
import { director_1, director_2, director_3 } from 'assets/images';
import { useAppDispatch } from "hooks/hooks";
import { setProduct } from 'slices/productSlice';
import "./index.css";

interface IProps {
    page: string;
    primaryTopic?: string;
    secondaryTopic?: string;
    tertiaryTopic?: string;
    discription?: string;
    middleNode?: JSX.Element;
    middleImage?: string;
    products?: ProductType[];
}

export const PageLayout = ({ page, primaryTopic, secondaryTopic, tertiaryTopic, discription, middleNode, middleImage, products }: IProps) => {
    const dispatch = useAppDispatch();

    const handleProductClick = (product: ProductType) => {
        dispatch(setProduct({ product: product, isProductShow: true }))
    }

    return (
        <div className={`layout ${page}-layout-wrapper`}>
            <div className='layout-top-row'>
                {primaryTopic ? <Typography variant='h4' label={primaryTopic} className='text-dark-tangerine' /> : null}
                {secondaryTopic ?
                    <div className='layout-sub-topic-wrapper'>
                        {secondaryTopic ? <Typography variant='h5' label={secondaryTopic} className='text-dark-tangerine' /> : null}
                        {tertiaryTopic ? <Typography variant='h6' label=">" className='text-dark-tangerine' /> : null}
                        {tertiaryTopic ? <Typography variant='h6' label={tertiaryTopic} className='text-dark-tangerine' /> : null}
                    </div> : null}
                {discription ? <Typography variant='p' label={discription} className='p-500-sm' /> : null}
            </div>
            <div className='layout-middle-row'>
                {
                    middleNode ? middleNode : <img src={`${middleImage}`} className='layout-middle-row-image' />
                }
            </div>
            <div className='layout-bottom-row'>
                {
                    products ?
                        <div className='layout-products-wrapper'>
                            {
                                products.map((product: ProductType) => (<Product key={product.id} imgSrc={product.image} name={product.name} onClick={() => handleProductClick(product)} />))
                            }
                        </div>
                        :
                        <div className='layout-director-board-wrapper'>
                            <Typography variant='p' label='Board of Directors' className='p-600-m text-dark-tangerine' />
                            <div className='layout-director-board-directors'>
                                <ImageHolder imgSrc={director_1} name='W.P.T. Selvarajah' post='Managing Director' />
                                <ImageHolder imgSrc={director_2} name='Jananjalee Dilmini' post='Director' />
                                <ImageHolder imgSrc={director_3} name='Sujeewa Ranjani' post='Director' />
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}