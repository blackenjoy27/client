import React from "react";
import { Switch, Link, Route } from "react-router-dom";

import About from "./About";
import Procedures from "./Procedures";

import { Nav, OutterMostDiv, TopImageDiv, SVG, LogoDiv, ScrollDown, MiddleDiv, Tabs } from "../styledcomponents/StyledEle";

export default ({ history }) => {
    return (
        <OutterMostDiv>
            <TopImageDiv>
                <Nav>
                    <LogoDiv>
                        <SVG aria-hidden="true" focusable="false"
                            data-prefix="fas" data-icon="box-open"
                            class="svg-inline--fa fa-box-open fa-w-20"
                            role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"><path fill="currentColor" d="M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"></path></SVG>
                        <h1>Use My Tech</h1>
                    </LogoDiv>
                    <Link className="blue" to="/login">Login</Link>
                    <Link className="green" to="/register">Sign Up</Link>
                </Nav>
                <ScrollDown>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <span class="text">Scroll down</span>
                </ScrollDown>
            </TopImageDiv>
            <MiddleDiv>
                <Tabs>
                    <div>
                        <Link to="/">About</Link>
                        <Link to="/procedures"> Procedures</Link>
                    </div>
                    <hr></hr>
                </Tabs>
                <Route exact path="/" component={About} />
                <Route exact path="/procedures" component={Procedures} />

            </MiddleDiv>
        </OutterMostDiv>
    )
}