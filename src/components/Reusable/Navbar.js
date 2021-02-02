import { Link } from "gatsby"
import React, { Component } from "react"
import logo1 from "../../images/logo1.png"
import { FaCartArrowDown, FaHome } from "react-icons/fa"
import { IoIosContacts } from "react-icons/io"
import { SiAboutDotMe } from "react-icons/si"

export default class Navbar extends Component {
  state = {
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
    menu: [
      {
        id: 1,
        name: "home",
        url: "/home",
      },
      {
        id: 2,
        name: "contact",
        url: "/contact",
      },
      {
        id: 3,
        name: "cart",
        url: "/cart",
      },
      {
        id: 4,
        name: "about",
        url: "/about",
      },
    ],
  }

  myToggler = () => {
    this.state.navbarState
      ? this.setState({
          navbarState: false,
          navbarClass: "collapse navbar-collapse",
        })
      : this.setState({
          navbarState: true,
          navbarClass: "collapse navbar-collapse show",
        })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-theme text-white ">
        <Link to="/" className="navbar-brand ml-5">
          <img src={logo1} alt="it is logo" width="40px"></img>
        </Link>
        <button
          onClick={this.myToggler}
          className="navbar-toggler"
          type="button"
        >
          <span className="text-white">menu</span>
        </button>
        <div className={this.state.navbarClass}>
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                <FaHome className="nav-color" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white">
                <IoIosContacts className="nav-color" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link text-white">
                <FaCartArrowDown className="nav-color" />
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">
                <SiAboutDotMe className="nav-color" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
