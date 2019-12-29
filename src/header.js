import React, { useEffect } from "react";
import "./header.css";
import "./index.css";
import { 
    Header1, Header2, IconSearch, Header3, Header4, Header5, Header6 
} from "./images/indexHeader.js";
import { headerSearch } from "./actions/header";

import { useSelector, useDispatch } from "react-redux";

function Header() {
    const dispatch = useDispatch();
    const headers = useSelector(state => state.headers);

    useEffect(() => {
        fetch("http://localhost:8081/headers")
            .then(res => res.json())
            .then(json => {
                const action = headerSearch(json.headers);
                dispatch(action);
            });
    }, [dispatch]);

    console.log(headers);

    return (
/*        <>
            <header>

                <div className="header">
                    {headers.map((v, i) => (
                        <div key={v.menu}>
                            <a href={v.url}></a>
                        
                            <a href={v.url}>{v.logo}</a>
                        
                            <input type={v.text} />
                            <button type={v.submit}><img src={v.IconSearch} /></button>
                        
                            <a href={v.url}><img src={v.Header3} /></a>
                        
                            <a href={v.url}><img src={v.Header4} /></a>
                        
                            <a href={v.url}><img src={v.Header5} /></a>
                        
                            <a href={v.url}><img src={v.Header6} /></a>
                        </div>
                    ))}
                </div>
*/
            <>
            <header>            
                <div className="header">
                    <div>
                        <div className="header-item">
                            <a href="1">
                                <img src={Header1} alt="Header1" className="square-1" />
                            </a>
                        </div>
                        <div className="header-item">
                            <a href="index.html">
                                <img src={Header2} alt="Header2" className="square-2" />
                            </a>
                        </div>
                    </div>
                    <div className="header-two">
                        <input type="text" placeholder="Cerca" className="header-two-input" />
                        <button type="submit" className="button-s">
                            <img src={IconSearch} alt="IconSearch" className="img-src" />
                        </button>
                    </div>
                    <div>
                        <div className="header-item">
                            <a href="3">
                                <img src={Header3} alt="Header3" className="square-3" />
                            </a>
                        </div>
                        <div className="header-item">
                            <a href="4">
                                <img src={Header4} alt="Header4" className="square-4" />
                            </a>
                        </div>
                        <div className="header-item">
                            <a href="5">
                                <img src={Header5} alt="Header5" className="square-5" />
                            </a>
                        </div>
                        <div className="header-item">
                            <a href="6">
                                <img src={Header6} alt="Header6" className="square-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
