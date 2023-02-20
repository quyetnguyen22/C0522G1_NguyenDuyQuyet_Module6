import {Component} from "react";


export default class CartList extends Component {
    constructor(props) {
        super(props);
        this.product = [];
        this.state = {value: this.props.item.amountProduct, totalReceipt: 0}
        this.deleteFromCart = this.deleteFromCart.bind(this);
        this.increDecrease = this.increDecrease.bind(this);
    }

    deleteFromCart() {
        console.log(this.props.k);
        let cart = JSON.parse(window.localStorage.getItem('cart'));
        cart.splice(this.props.k,1);
        window.localStorage.setItem('cart',JSON.stringify(cart));
    }

    increDecrease(e) {
        let kAdd = this.props.k;
        let curAmount = JSON.parse(e.target.value);
        let carts = JSON.parse(window.localStorage.getItem('cart'));
        console.log(this.props.k);
        if (curAmount === 0){
            this.deleteFromCart()
        } else {
            carts[kAdd].amountProduct = curAmount;
            window.localStorage.setItem('cart', JSON.stringify(carts));
            this.setState({value: curAmount});
        }
    }

    totalReceipt(){
        for (let i = 0; i <= this.props.k; i++){
            this.state.totalReceipt += this.props.item.products.price;
        }
        this.setState({totalReceipt: this.state.totalReceipt})
    }
    render() {
        return (
            <tr className="text-center">
                <td data-th="Product">
                    <div className="row">
                        <div className="col-sm-3 hidden-xs">
                            <img style={{width: 150, height: 150}}
                                 src={this.props.item.products.imageLink}
                                 alt="..." className="img-responsive"/></div>
                        <div className="col-sm-9 text-center">
                            {this.props.item.products.name}
                        </div>
                    </div>
                </td>
                <td data-th="Price">{this.props.item.products.price}</td>
                <td data-th="Quantity">
                    <input type="number" className="form-control text-center" onChange={this.increDecrease} value={this.state.value}/>
                </td>
                <td data-th="Subtotal" className="text-center">{this.props.item.amountProduct * this.props.item.products.price}</td>
                <td className="actions" data-th="">
                    <button className="btn btn-danger btn-sm mx-1" onClick={this.deleteFromCart}><i
                        className="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        );
    }
}
