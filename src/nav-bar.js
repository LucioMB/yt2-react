import React, { useEffect } from "react";
import "./nav-bar.css";
import "./index.css";
import { navBarLink } from "./actions/nav_bar";

import { useSelector,useDispatch } from "react-redux";

function NavBar() {
    const dispatch = useDispatch();
    const navBar = useSelector(state => state.navBar);

    useEffect(() => {
        fetch("http://localhost:8081/navBar")
            .then(res => res.json())
            .then(json => {
                const action = navBarLink(json.navBar);
                dispatch(action);
            });
    }, [dispatch]);

    console.log(navBar);

    return (
        
/*            <div className="main">
                <div id="main-nav" className="main-nav">
                    <nav>
                    <div className="nav-bar">
                           {navBar.map((v, i) => (
                                <div key={v.name}>
                                    <a href={v.url}></a>
                                </div>
                                <div key={v.nameIs}>
                                    <a href={v.url}></a>
                                </div>
                                <div key={v.namePrf}>
                                    <a href={v.url}></a>
                                </div>
                                <div key={v.nameCopy}
                                    <a href={v.url}></a>
                                </div>
                            ))}
                    </div>
*/
            <div className="main">
                <div id="main-nav" className="main-nav">
                    <nav>
                        <div className="nav-bar">
                            <a href="1">
                                <ul className="nav-item">
                                    <li className="nav-home"> Home</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="2">
                                <ul className="nav-item">
                                    <li className="nav-tendenze"> Tendenze</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="3">
                                <ul className="nav-item">
                                    <li className="nav-iscrizioni"> Iscrizioni</li>
                                </ul>
                            </a>
                        </div>
                        <hr />
                        <div className="nav-bar">
                            <a href="4">
                                <ul className="nav-item">
                                    <li className="nav-raccolta"> Raccolta</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="5">
                                <ul className="nav-item">
                                    <li className="nav-cronologia"> Cronologia</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="6">
                                <ul className="nav-item">
                                    <li className="nav-guardo-piu-tardi"> Guardo pi&ugrave; tardi</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="7">
                                <ul className="nav-item">
                                    <li className="nav-video-piaciuti"> Video piaciuti</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="8">
                                <ul className="nav-item">
                                    <li className="nav-playlist"> Playlist</li>
                                </ul>
                            </a>
                        </div>
                        <hr />
                        <h3 className="iscrizioni">ISCRIZIONI</h3>
                        <div className="nav-bar">
                            <a href="1">
                                <ul className="nav-item">
                                    <li className="nav-iscrizione-1"> Iscrizione-1</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="2">
                                <ul className="nav-item">
                                    <li className="nav-iscrizione-2"> Iscrizione-2</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="3">
                                <ul className="nav-item">
                                    <li className="nav-iscrizione-3"> Iscrizione-3</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="4">
                                <ul className="nav-item">
                                    <li className="nav-iscrizione-4"> Iscrizione-4</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="5">
                                <ul className="nav-item">
                                    <li className="nav-iscrizione-5"> Iscrizione-5</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="6">
                                <ul className="nav-item">
                                    <li className="nav-iscrizione-6"> Iscrizione-6</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="7">
                                <ul className="nav-item">
                                    <li className="nav-iscrizione-7"> Iscrizione-7</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="8">
                                <ul className="nav-item">
                                    <li className="nav-iscrizione-8"> Iscrizione-8</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="1">
                                <ul className="nav-item">
                                    <li className="nav-mostra-meno"> Mostra meno</li>
                                </ul>
                            </a>
                        </div>

                        <hr />
                        <h3 className="iscrizioni">ALTRO DA YOUTUBE</h3>
                        <div className="nav-bar">
                            <a href="2">
                                <ul className="nav-item">
                                    <li className="nav-premium"> YouTube Premium</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="3">
                                <ul className="nav-item">
                                    <li className="nav-film"> Film su YouTube</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="4">
                                <ul className="nav-item">
                                    <li className="nav-videogiochi"> Videogiochi</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="5">
                                <ul className="nav-item">
                                    <li className="nav-dal-vivo"> Dal vivo</li>
                                </ul>
                            </a>
                        </div>

                        <hr />
                        <div className="nav-bar">
                            <a href="6">
                                <ul className="nav-item">
                                    <li className="nav-impostazioni"> Impostazioni</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="7">
                                <ul className="nav-item">
                                    <li className="nav-segnalazioni"> Cronologia segna...</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="8">
                                <ul className="nav-item">
                                    <li className="nav-guida"> Guida</li>
                                </ul>
                            </a>
                        </div>
                        <div className="nav-bar">
                            <a href="9">
                                <ul className="nav-item">
                                    <li className="nav-feedback"> Invia feedback</li>
                                </ul>
                            </a>
                        </div>

                        <hr />
                        <h6 className="yt-termini">
                            Informazioni Stampa
                            <br />
                            Copyright Contattaci Creator
                            <br />
                            Pubblicit&agrave; Sviluppatori
                            <br />
                            <br />
                            Termini Privacy
                            <br />
                            Norme e sicurezza
                            <br />
                            Prova le nuove funzioni
                            <br />
                            <br />
                            <br />
                            <div className="nav-copyr">© 2019 YouTube, LLC</div>
                        </h6>
                    </nav>
                </div>
            </div>
        
    );
}

export default NavBar;
