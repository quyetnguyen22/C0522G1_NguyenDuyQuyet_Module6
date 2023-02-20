import {Component} from "react";
import axios from "axios";
import CardList from "./cardList";
import {Link} from "react-router-dom";

export default class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.searchKey = '';
        this.state = {product: []};
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    componentDidMount() {
        axios.get('http://localhost:8080/api/product/list')
            .then(response => {
                this.setState({product: response.data.content});
                console.log(response.data.content);
            })
            .catch(function (error) {
            })

    }

    onChange(e) {
        this.searchKey = e.target.value;
    }

    onSubmit() {
        axios.get('http://localhost:8080/api/product/list?name=' + this.searchKey)
            .then(response => {
                this.setState({product: response.data.content});
                console.log(response.data.content.name)
            })
            .catch(function (error) {
            })
    }

    tabRow() {
        // console.log(this.state);
        return this.state.product.map(function (object, i) {
            // debugger;
            return <CardList obj={object} key={i}/>;
        });
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
                <div className="container col-lg-4 mb-3">
                <div className="input-group">
                    <div className="form-outline border">
                        <input type="search" id="form1" value={this.state.product.name} onChange={this.onChange}
                               className="form-control"/>
                        <label className="form-label" htmlFor="form1">Tìm kiếm</label>
                    </div>
                    <button type="button" onClick={this.onSubmit} className="btn btn-primary">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                </div>
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <div className="row">
                    {this.tabRow()}
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        );
    }
}
