import {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import '../card.css';


export default class CardList extends Component {
    constructor(props) {
        super(props);
        this.product = [];
        this.delete = this.delete.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    delete() {
        console.log('begin delete')
        console.log('http://localhost:8080/api/person/delete/' + this.props.obj.id)
        axios.delete('http://localhost:8080/api/person/delete/' + this.props.obj.id)
            .then(
                console.log('Deleted'),
                window.location.reload()
            )
            .catch(err => console.log(err))

    }

    addToCart() {
                let check = true;
                let cosmeticCart = {products: this.props.obj, amountProduct: 0};
                // debugger;
                let carts = JSON.parse(window.localStorage.getItem('cart'));
                if (window.localStorage.getItem('cart') != null) {
                    for (let i = 0; i < carts.length; i++) {
                        let idProduct = carts[i].products.id;
                        console.log(carts[i]);
                        console.log(this.props.obj.id)
                        if (this.props.obj.id === idProduct) {
                            carts[i].amountProduct++;
                            // carts[i].amountProduct = amount + 1;
                            window.localStorage.setItem("cart", JSON.stringify(carts));
                            check = false;
                            break;
                        }
                    }
                } else {
                    cosmeticCart = {products: this.props.obj, amountProduct: 1}
                    this.product.push(cosmeticCart);
                    window.localStorage.setItem('cart', JSON.stringify(this.product));
                    check = false;
                }
                if (check) {
                    cosmeticCart = {products: this.props.obj, amountProduct: 1}
                    this.product.push(cosmeticCart);
                    this.product = this.product.concat(JSON.parse(window.localStorage.getItem('cart')))
                    window.localStorage.setItem('cart', JSON.stringify(this.product));
                }
    }

    render() {
        return (
            <div className="col-lg-3">
                <div className="col-lg-12 col-sm-4 mb-5">
                    <div className="product-grid">
                        <div className="product-image">
                            {/*<p>{this.props.obj.image}</p>*/}
                            <Link to={"/detail"} className="image">
                                <img className="pic-1" style={{height: 250}}
                                     src={this.props.obj.imageLink} alt={""}/>
                            </Link>
                            <span className="badge bg-danger text-light">hot</span>
                            <span className="product-discount-label">-33%</span>
                        </div>
                        <div className="product-content">
                            <ul className="rating">
                                <li className="fas fa-star"></li>
                                <li className="fas fa-star"></li>
                                <li className="fas fa-star"></li>
                                <li className="fas fa-star"></li>
                                <li className="fas fa-star disable"></li>
                            </ul>
                            <Link to={"/detail/{{item.id}}"} style={{textDecoration: "none"}}>
                                <h3 className="title">{this.props.obj.name}</h3>
                            </Link>
                            <div className="price">{this.props.obj.price}</div>
                            <div className="product-button">
                                <p className="product-like"><i className="fas fa-heart"></i></p>
                                <button type="button" onClick={this.addToCart} className="add-to">
                                    <i className="fa fa-shopping-bag"></i>Thêm giỏ hàng
                                </button>
                                <p className="product-compare" href="#"><i
                                    className="fas fa-random"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
