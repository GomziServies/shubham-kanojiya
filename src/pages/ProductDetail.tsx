import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useState, useEffect } from 'react';

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const product = getProductById(id);
    const [activeImage, setActiveImage] = useState<string>('');
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        if (product && product.images.length > 0) {
            setActiveImage(product.images[0]);
        }
    }, [product]);

    if (!product) {
        return (
            <div className="container pt-100 pb-100 text-center">
                <h2>Product not found</h2>
                <Link to="/" className="tg-btn max-auto mt-4">Go Home</Link>
            </div>
        );
    }

    return (
        <main className="main-area fix">
            {/* Breadcrumb Area */}
            <section className="breadcrumb-area breadcrumb-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="breadcrumb-content text-center">
                                <h2 className="title">Product</h2>
                                <nav aria-label="Breadcrumbs" className="breadcrumb-trail">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item trail-item trail-begin">
                                            <Link to="/"><span>Home</span></Link>
                                        </li>
                                        <li className="breadcrumb-item trail-item trail-end">
                                            <span>Product Details</span>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Shop Details Area */}
            <section className="inner-shop-details-area">
                <div className="container">
                    <div className="row">
                        {/* Left: Product Images */}
                        <div className="col-lg-6">
                            <div className="inner-shop-details-flex-wrap responsive-flex-wrap">
                                <div className="inner-shop-details-img-wrap mb-4 mb-lg-0">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane show active" role="tabpanel">
                                            <div className="inner-shop-details-img">
                                                <img src={activeImage} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner-shop-details-nav-wrap">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        {product.images.map((img, index) => (
                                            <li className="nav-item" role="presentation" key={index}>
                                                <button 
                                                    className={`nav-link ${activeImage === img ? 'active' : ''}`} 
                                                    onClick={() => setActiveImage(img)}
                                                    type="button"
                                                >
                                                    <img src={img} alt="" />
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right: Product Details */}
                        <div className="col-lg-6">
                            <div className="inner-shop-details-content pt-4 pt-lg-0">
                                <h4 className="title">{product.name}</h4>
                                <div className="inner-shop-details-meta">
                                    <ul className="list-wrap">
                                        <li>Brand : <a href="#">{product.brand}</a></li>
                                        <li className="inner-shop-details-review">
                                            <div className="rating">
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className={`fas fa-star ${i < Math.floor(product.rating) ? '' : 'text-muted'}`}></i>
                                                ))}
                                            </div>
                                            <span>({product.rating})</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="inner-shop-details-price">
                                    <h2 className="price">{product.price}</h2>
                                    <h5 className="price mx-2"><del>{product.oldPrice}</del></h5>
                                    <h5 className="stock-status">{product.discount}</h5>
                                </div>
                                <p>{product.shortDescription}</p>
                                <div className="inner-shop-perched-info">
                                    <a href={`https://api.whatsapp.com/send?phone=+919833897063&text=Hello, I want to know more about ${product.name}.`} className="cart-btn">Inquiry Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Tabs (Description & Info) */}
                    <div className="row">
                        <div className="col-12">
                            <div className="product-desc-wrap">
                                <ul className="nav nav-tabs" id="myTabTwo" role="tablist">
                                    <li className="nav-item">
                                        <button 
                                            className={`nav-link ${activeTab === 'description' ? 'active' : ''}`} 
                                            onClick={() => setActiveTab('description')}
                                            type="button"
                                        >
                                            Description
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button 
                                            className={`nav-link ${activeTab === 'information' ? 'active' : ''}`} 
                                            onClick={() => setActiveTab('information')}
                                            type="button"
                                        >
                                            Additional information
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContentTwo">
                                    <div className={`tab-pane fade ${activeTab === 'description' ? 'show active' : ''}`} role="tabpanel">
                                        <div className="product-desc-content" dangerouslySetInnerHTML={{ __html: product.description }}></div>
                                    </div>
                                    <div className={`tab-pane fade ${activeTab === 'information' ? 'show active' : ''}`} role="tabpanel">
                                        <div className="product-desc-content">
                                            <table className="table table-sm">
                                                <tbody>
                                                    {product.nutrition.map((item, index) => (
                                                        <tr key={index}>
                                                            <th scope="row">{item.key}</th>
                                                            <td>{item.value}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductDetail;
