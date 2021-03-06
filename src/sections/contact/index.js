import React from "react"
import { Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import ThemeContext from "../../context"
import BaffleText from "components/baffle-text"
import AnimationContainer from "components/animation-container"

import "./styles.scss"

class Contact extends React.Component {
  static contextType = ThemeContext

  constructor(props) {
    super(props)
    this.state = {
      name: "Lucio Afonso",
      email: "lucioafonso@icloud.com",
      phone: "+48 739 666 646",
      message:
        "I'm always open for contact. Feel free to ask about past work, future opportunities or just chatting.",
      show: false,
    }
    this.show = this.show.bind(this)
  }

  show() {
    this.setState({ show: true })
  }

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="contact"
        style={{ height: this.context.height }}
      >
        <Row>
          <Col md={2} className="side">
            <h2>
              <BaffleText
                text="Contact"
                revealDuration={500}
                revealDelay={500}
                parentMethod={this.show}
                callMethodTime={1100}
              />
            </h2>
          </Col>
          <Col md={10} className="details">
            <AnimationContainer delay={0} animation="fadeInUp fast">
              <div className="content-text">
                <div className="line-text">
                  <h4>Contact me</h4>
                </div>
                <div className="details_info">
                  <p id="name">{this.state.name}</p>
                  <p id="phone">
                    <a href={"tel:" + this.state.phone}>{this.state.phone}</a>
                  </p>
                  <p id="email">
                    <a href={"mailto:" + this.state.email}>
                      {this.state.email}
                    </a>
                  </p>
                  <p id="message">{this.state.message}</p>
                </div>
                <div className="social social_icons">
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    className="social_icon"
                    onClick={() => window.open("https://bit.ly/2LRZ0wn")}
                  />
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="social_icon"
                    onClick={() => window.open("https://bit.ly/2AV9b0N")}
                  />
                  <FontAwesomeIcon
                    icon={faTwitterSquare}
                    className="social_icon"
                    onClick={() => window.open("https://bit.ly/2XnFQ6V")}
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="social_icon"
                    onClick={() => window.open("https://bit.ly/2BMGpAn")}
                  />
                </div>
              </div>
            </AnimationContainer>
          </Col>
        </Row>
      </section>
    )
  }
}

export default Contact
