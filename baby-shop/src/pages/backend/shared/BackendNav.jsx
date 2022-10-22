import React from 'react'
import { Link } from 'react-router-dom';

function BackendNav() {
    return (
        <>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="sidebar-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <i className='fas fa-home'></i> &nbsp;
                                Dashboard 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i class="fa-solid fa-pen-to-square"></i>&nbsp; 
                                Blog Create
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <i class="fa-solid fa-pencil"></i>&nbsp;
                                Blog List
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className='fas fa-users'></i>&nbsp;
                                User List
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <i className='fas fa-user'></i>&nbsp;
                                Admin
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className='fas fa-globe'></i>&nbsp;
                                Goto Website
                            </Link>
                        </li>
                    </ul>
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Saved reports</span>
                        
                    </h6>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Current month
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Last quarter
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Social engagement
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Year-end sale
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default BackendNav