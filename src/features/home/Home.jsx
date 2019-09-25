import React from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';
import {useSelector} from "react-redux";
import {LOGIN} from "../../constants/routes";


export default function Home() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    if (isLoggedIn) {
        return (
            <div id="content-slider">
                <div className="wrap-slider">
                    <input type="radio" id="a-1" name="a"/>
                    <input type="radio" id="a-2" name="a"/>
                    <input type="radio" id="a-3" name="a"/>
                    <input type="radio" id="a-4" name="a"/>

                    <nav id="main">
                        <label htmlFor="a-1" className="first"></label>
                        <label htmlFor="a-2" className="first"></label>
                        <label htmlFor="a-3" className="first"></label>
                        <label htmlFor="a-4" className="first"></label>
                    </nav>

                    <nav id="control">
                        <label htmlFor="a-1"></label>
                        <label htmlFor="a-2"></label>
                        <label htmlFor="a-3"></label>
                        <label htmlFor="a-4"></label>
                    </nav>

                    <span id="b-1" className="th" tabIndex="10">
                    <img src="https://github.com/lime7/slider/blob/master/images/pic-1.png?raw=true" alt="" id="p-1"/>
                </span>

                    <span id="b-2" className="th" tabIndex="11">
                    <img src="https://github.com/lime7/slider/blob/master/images/pic-10.png?raw=true" alt="" id="p-2"/>
                </span>

                    <span id="b-3" className="th" tabIndex="12">
                    <img src="https://github.com/lime7/slider/blob/master/images/pic-3.png?raw=true" alt="" id="p-3"/>
                </span>

                    <span id="b-4" className="th" tabIndex="13">
                    <img src="https://github.com/lime7/slider/blob/master/images/pic-4.png?raw=true" alt="" id="p-4"/>
                </span>

                    <div className="slider">
                        <div className="inset">

                            <figure>
                                <img src="https://github.com/lime7/slider/blob/master/images/1.png?raw=true"
                                     alt="" id="i-1" className="f"/>
                            </figure>

                            <figure>
                                <img
                                    src="https://github.com/lime7/slider/blob/master/images/10.png?raw=true"
                                    alt="" id="i-2" className="f"/>
                            </figure>

                            <figure>
                                <img src="https://github.com/lime7/slider/blob/master/images/3.png?raw=true"
                                     alt="" id="i-3" className="f"/>
                            </figure>

                            <figure>
                                <img src="https://github.com/lime7/slider/blob/master/images/4.png?raw=true"
                                     alt="" id="i-4" className="f"/>
                            </figure>


                            <figure>
                                <img src="https://github.com/lime7/slider/blob/master/images/1.png?raw=true"
                                     alt="" id="i-5" className="f"/>
                            </figure>
                        </div>
                    </div>

                </div>
            </div>)
    } else {
        return (<Redirect to={LOGIN}/>);
    }
};
