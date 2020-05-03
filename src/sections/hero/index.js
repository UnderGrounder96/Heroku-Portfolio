import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Row, Col } from "react-bootstrap";
import Glitch from "components/glitch";
import Typewriter from "typewriter-effect";
import ThemeContext from "../../context";

import "./styles.scss";

class Hero extends React.Component {
  static contextType = ThemeContext;

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="hero"
        style={{ height: this.context.height }}
      >
        <Row>
          <Col md={6} className="content">
            <div className="content-text">
              <div className="line-text">
                <h4>Hello, I'm</h4>
              </div>
              <Glitch text="Lucio Afonso" />
              <Typewriter
                options={{
                  strings: [
                    "C/C++ Developer",
                    "Python Developer",
                    "Backend Programmer",
                    "Database expert",
                  ],
                  autoStart: true,
                  loop: true
                }}
              />
              <button className="hover-button"
                onclick="window.location.href = 'https://uc4a6b23afad702ecddef5180f47.dl.dropboxusercontent.com/cd/0/get/A3AePDzy0nbINGbL2GPrdXb8r4ZQZjRO_k0pn22WMW-lfdaRZbCJcQ3kS1q8tEOmnm7jn0DoVFYgTOihRk3VUph1AxVQcKHGySBCaMQtXXLId6mMPIQFx0ymuQYZhDVlzrw/file?_download_id=7370589168325361810814142391090869289562216683393330683911696646&_notify_domain=www.dropbox.com&dl=1'">
                <span>
                  Download CV
                </span>
              </button>
            </div>
            {this.icons()}
          </Col>
          <Col md={6} className="img">
            <img
              src={this.props.mainImg.childImageSharp.fluid.src}
              alt="person"
            />
          </Col>
        </Row>
      </section>
    );
  }

  icons() {
    return this.props.icons.edges.map((value, index) => {
      return (
        <img
          src={value.node.childImageSharp.fluid.src}
          className={`animated fadeIn move-${
            Math.floor(Math.random() * 10) % 2 === 0 ? "up" : "down"
          } float-image`}
          style={{
            left: `${index * 10}%`,
            bottom: `${Math.random() *
              (+(index % 2 === 0 ? 80 : 20) - +(index % 2 === 0 ? 70 : 10)) +
              +(index % 2 === 0 ? 70 : 10)}%`
          }}
          alt="shape"
          key={index}
        />
      );
    });
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        icons: allFile(
          filter: {
            extension: { regex: "/(png)/" }
            relativeDirectory: { eq: "icons" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 100) {
                  src
                }
              }
            }
          }
        }
        Img: file(relativePath: { eq: "person.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              src
            }
          }
        }
      }
    `}
    render={({ icons, Img }) => <Hero icons={icons} mainImg={Img} {...props} />}
  />
);
