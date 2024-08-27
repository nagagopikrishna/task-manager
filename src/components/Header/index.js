import { CiSearch,  CiFilter } from "react-icons/ci"

import './index.css'

const Header = () =>(
    <nav className = "nav-container">
        <div className = "search-container">
            <CiSearch className="icon"/>
            <input type = "search" placeholder="Search Project" className="search-input"/>
        </div>
        <div className="filter-section">
            <CiFilter className="icon"/>
            <select className="filter-container">
                <option value="filter"> Filter</option>
            </select>
        </div>
        
    </nav>
)

export default Header