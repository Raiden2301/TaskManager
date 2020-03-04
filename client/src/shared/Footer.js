import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8">
                        <div className="row">
                            <div className="col col-6 col-md-3">
                                <ul className="list-unstyled mb-0">
                                    <li className=""><a href="/" >First Link</a></li>
                                </ul>
                            </div>
                            <div className="col col-6 col-md-3">
                                <ul className="list-unstyled mb-0">
                                    <li className=""><a href="/" >Second Link</a></li>
                                </ul>
                            </div>
                            <div className="col col-6 col-md-3">
                                <ul className="list-unstyled mb-0">
                                    <li className=""><a href="/" >Third Link</a></li>
                                </ul>
                            </div>
                            <div className="col col-6 col-md-3">
                                <ul className="list-unstyled mb-0">
                                    <li className=""><a href="/" >Fourth Link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 mt-4 mt-lg-0">Taskker - Task Management System</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
