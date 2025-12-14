import React, { Component } from "react";
import { Github, Linkedin } from "grommet-icons";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              {network.class === "github" ? <Github color="white" /> : <Linkedin color="white" />}
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>Made by {this.props.sharedBasicInfo ? this.props.sharedBasicInfo.name : "???"}</small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
