import React from "react"
import ReactDOM from "react-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons"

import "./styles.scss"

const scrollToElement = require("scroll-to-element")

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.sections = [
      { name: "Home" },
      { name: "About" },
      { name: "Services" },
      { name: "Portfolio" },
      { name: "Contact" },
    ]
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside, true)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside, true)
  }

  handleClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(this)

    if (!domNode || !domNode.contains(event.target)) {
      this.setState({
        show: false,
      })
    }
  }

  navScroll(id, v) {
    this.setState({ show: false })
    const el = document.getElementById(id)

    scrollToElement(el, {
      offset: 0,
      ease: "in-out-expo",
      duration: 3600,
    }).on("end", () => {
      this.props.change(v)
    })
  }

  items() {
    return this.sections.map((value, index) => {
      return (
        <li key={index}>
          <button
            onClick={() => this.navScroll(value.name.toLowerCase(), index)}
          >
            {value.name}
          </button>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="opener">
          <FontAwesomeIcon
            icon={faBars}
            className="closeNav"
            onClick={() => this.setState({ show: true })}
          />
        </div>

        <div className={`navigation ${this.state.show ? "active" : ""}`}>
          <FontAwesomeIcon
            icon={faTimes}
            className="closeNav"
            onClick={() => this.setState({ show: false })}
          />
          <div className="logo">
            <img src="logo.png" loading="lazy" alt="logo" />
          </div>
          <div className="links">
            <ul>{this.items()}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation
