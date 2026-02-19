import { Link } from 'react-router-dom';
import { products } from '../../data/products';

const ProductShowcase = () => {

    return (
        <section id="supplement" className="tg-shop-area py-20">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="tg-section-title text-center mb-5">
                            <span className="sub-title">PRODUCTS</span>
                            <h2 className="title">Powerful Supplements</h2>
                        </div>
                    </div>
                </div>
                <div className="tg-shop-wrapper">
                    <div className="row justify-content-center">
                        {products.map((product) => (
                            <div className="col-lg-4 col-md-6 col-12" key={product.id}>
                                <div className="tg-shop-item text-center">
                                    <div className="tg-shop-thumb">
                                        <Link to={`/products/${product.id}`}>
                                            <img src={product.images[0]} alt="img" />
                                        </Link>
                                    </div>
                                    <div className="tg-shop-content">
                                        <h4 className="title"><Link to={`/products/${product.id}`}>{product.name}</Link></h4>
                                        <div className="tg-shop-price inner-shop-details-price d-flex justify-content-center">
                                            <b>{product.price}</b><span className="old-prices">{product.oldPrice}</span>
                                            <h5 className="stock-status ml-3 mb-0">{product.discount}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
