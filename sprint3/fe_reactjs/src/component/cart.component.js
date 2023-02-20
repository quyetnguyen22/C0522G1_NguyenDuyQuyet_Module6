import {Component} from "react";
import CartList from "./cartList";
import {Link} from "react-router-dom";


export default class CartComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {productCart: []}
        this.state.productCart = JSON.parse(window.localStorage.getItem('cart'));
        console.log(this.state.productCart)
    }

    tabRow() {
        if (this.state.productCart != null) {
            // console.log(this.state);
            return this.state.productCart.map(function (object, i) {
                // debugger;
                return <CartList item={object} k={i}/>;
            })
        } else {
            return <tr>
                <td colSpan={5} className="text-center"><h3>Không tìm thấy dữ liệu</h3></td>
            </tr>
        }
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div style={{background: "black", height: 4}}></div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-3">
                        <hr/>
                    </div>
                    <div className="col-lg-4 col-md-8 col-sm-12">
                        <h2 style={{textAlign: "center", color: "red", borderRadius: 10, background: "gainsboro"}}>
                            <b>SẢN PHẨM</b></h2>
                    </div>
                    <div className="col-lg-3">
                        <hr/>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-7 col-md-10 col-12">
                        <nav>
                            <div className="container-fluid" id="nav">
                                <div className="collapse navbar-collapse" id="wrapper">
                                    <ul className="ul" id="main-menu">
                                        <li>
                                            <Link to={"/face"} className="text-dark">Face</Link>
                                        </li>
                                        <li>
                                            <Link to={"/list/body"} className="text-dark">Body</Link>
                                        </li>
                                        <li>
                                            <Link to={"/list/hair"} className="text-dark">Hair</Link>
                                        </li>
                                        {/*<li>*/}
                                        {/*    <Link to={"/list/premiere"} className="text-dark">ADIDAS</Link>*/}
                                        {/*</li>*/}
                                    </ul>
                                </div>

                            </div>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div style={{backgroundColor: "#DEDEDE"}}>
                        <table id="cart" className="table table-hover table-condensed">
                            <thead>
                            <tr className="text-center">
                                <th style={{width: 50}}>Sản phẩm</th>
                                <th style={{width: 10}}>Giá</th>
                                <th style={{width: 8}}>Số lương</th>
                                <th style={{width: 22}} className="text-center">Tiền sản phẩm</th>
                                <th style={{width: 10}}>Xóa sản phẩm</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.tabRow()}
                            </tbody>
                            <tfoot>
                            <tr>
                                <td>
                                    <Link to='/' className="btn btn-warning"><i
                                        className="fa fa-angle-left"></i> Quay lại trang sản phẩm</Link>
                                </td>
                                <td colSpan="2" className="hidden-xs"></td>
                                <td className="hidden-xs text-center"><strong>Tổng tiền: {this.state.totalReceipt} </strong></td>
                                <td>
                                    <button>Thanh Toán</button>
                                    <div id="myPaypal">
                                    </div>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>


                </div>
            </div>
        )
    }
}
