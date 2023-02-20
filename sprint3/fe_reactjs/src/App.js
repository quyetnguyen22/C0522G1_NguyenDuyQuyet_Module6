import './App.css';
import {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import logo from './img/thiet-ke-logo-the-face-shop.png'
import ListComponent from "./component/list.component";
import CartComponent from "./component/cart.component";
import LoginComponent from "./component/login.component";


class App extends Component {

    render() {
        return (
            <Router>
                <div style={{overflowX: "hidden"}}>
                    <div className="row"
                         style={{background: "#e9f5f9", padding: 0}}>
                        <div className="col-lg-3 col-md-6 col-sm-9">
                            <p className="logo px-5" style={{marginBottom: 0}}>
                                <img src={logo} style={{height: 100, width: 200, borderRadius: 50}} alt=""/>
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-10">
                            <div>
                                <h1 style={{color: "#1a6985"}}>SAMSUNG COSMETIC</h1>
                            </div>
                            {/*<div>*/}
                            {/*    <b>Địa chỉ: Đà Nẵng.</b>*/}
                            {/*</div>*/}

                        </div>
                        <div className="col-lg-2 col-md-8 col-sm-12">
                            <div className="dropdown mt-2" style={{padding: 0}}>
                                <div className="colorB">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             fill="currentColor"
                                             className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                            <path
                                                d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                                            <path
                                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        </svg>
                                        <span> Nguyễn Duy Quyết</span>
                                    </div>
                                    {/*<Link to={"/login"}></Link>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-8 col-sm-12">
                            <Link to={"/cart"}>
                                <button style={{border: "none", borderRadius: 50}} className="cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                         className="bi bi-cart-plus-fill"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                    <span> Giỏ hàng</span></button>

                            </Link>
                            <span
                                className="start-100 badge rounded-pill bg-danger mt-3 mx-5 px-3">
                            Tổng</span>
                        </div>
                    </div>
                    <div className="row sticky-lg-top">
                        <nav className="navbar navbar-expand-lg nav-header" style={{background: "#d3eaf2"}}>
                            <div style={{margin: "auto"}}>
                                <button className="navbar-toggler" style={{background: "white"}} type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarScroll" aria-controls="navbarScroll"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <i className="fa-solid fa-bars"></i>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarScroll">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll"
                                        style={{textAlign: "center"}}>
                                        <li className="nav-item mx-4">
                                            <Link to={""} className="nav-link colorA">
                                                <i className="fa-solid fa-house-user"></i> Trang chủ</Link>
                                        </li>
                                        <li className="nav-item dropdown mx-4">
                                            <p className="nav-link dropdown-toggle colorA" href="#" role="button"
                                               data-bs-toggle="dropdown"
                                               aria-expanded="false">
                                                <i className="fa-brands fa-product-hunt"></i> Sản phẩm
                                            </p>
                                            <ul className="dropdown-menu dropdown-menu-danger">
                                                <li><Link to={"/employee/list"} className="dropdown-item">Face</Link>
                                                </li>
                                                <li><Link to={"/employee/list"} className="dropdown-item">Body</Link>
                                                </li>
                                                <li><Link to={"/moviePremiere"} className="dropdown-item">Hair</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item mx-4">
                                            <Link to={"/employee/list"} className="nav-link colorA"><i
                                                className="fa-solid fa-list-check"></i> Giới thiệu</Link>
                                        </li>
                                        <li className="nav-item mx-4">
                                            <Link to={"/customer/list"} className="nav-link colorA"><i
                                                className="fa fa-user-secret"></i> Liên hệ</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>

                    {/*slide*/}
                    <div className="row">
                        <div id="slider">
                            <div className="slides">
                                <div className="slider">
                                    <div className="legend"></div>
                                    <div className="content">
                                        <div className="content-txt">
                                            <h1>SAMSUNG COSMETIC</h1>
                                            <h2>Chúng tôi mang lại những sản phẩm chính hãng tốt nhất được các idol nổi tiếng
                                                thế giới sử
                                                dụng.
                                                </h2>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <img sizes={20}
                                            src="https://www.cossma.com/typo3temp/pics/sh_606834956_7026c6f7ed.jpg"
                                            alt={""}/>
                                    </div>
                                </div>
                                <div className="slider">
                                    <div className="legend"></div>
                                    <div className="content">
                                        <div className="content-txt">
                                            <h1>Công nghệ FRTP TECH</h1>
                                            <h2>Đường kính siêu mỏng 6.6mm nâng cao hiệu suất tấn công trên sân.</h2>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <img src="https://aocaulong.com/images/media/4072.png" alt={""}/>
                                    </div>
                                </div>
                                <div className="slider">
                                    <div className="legend"></div>
                                    <div className="content">
                                        <div className="content-txt">
                                            <h1>BLADEX 800</h1>
                                            <h2>Sức mạnh của huyền thoại.</h2>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <img src="https://aocaulong.com/images/media/4073.png" alt={""}/>
                                    </div>
                                </div>
                                <div className="slider">
                                    <div className="legend"></div>
                                    <div className="content">
                                        <div className="content-txt">
                                            <h1>Nguyễn Thùy Linh</h1>
                                            <h2>Tuyển thủ nữ của Việt Nam lên ngôi ở nội dung đơn nữ giải Belgian
                                                International 2022.</h2>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <img
                                            src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/7/28/935455/Nguyen-Thuy-Linh-Oly.jpg"
                                            alt={""}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*các loại card*/}

                    {/*<div>*/}
                    {/*    <ListComponent></ListComponent>*/}
                    {/*</div>*/}

                    <Switch>
                        <Route exact path='/' component={ListComponent}/>
                        <Route exact path='/cart' component={CartComponent}/>
                        <Route exact path='/login' component={LoginComponent} />
                        {/*<Route path='/index' component={ Index } />*/}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
