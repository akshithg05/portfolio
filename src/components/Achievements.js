import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import { Achievement } from "grommet-icons";

class Achievements extends Component {
  render() {
    const styles = {
      resultsLink: {
        marginTop: "10px",
        fontSize: "1rem",
        color: "#555",
        fontWeight: "400",
      },
      link: {
        color: "#007bff",
        textDecoration: "none",
        fontWeight: "bold",
      },
      linkHover: {
        color: "#0056b3",
        textDecoration: "underline",
      },
    };

    if (this.props.resumeAchievements && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.achievements;
      var achievements = this.props.resumeAchievements.map((achievement, i) => {
        return (
          <div className="achievement-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="achievement-icon">
              <Achievement size="medium" color="white" />
            </div>
            <div className="achievement-content">
              <div className="achievement-text-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                {/* {achievement.tags && (
                  <div className="achievement-tags">
                    {achievement.tags.map((tag, index) => (
                      <Badge pill className="achievement-badge mr-2 mb-2" key={index}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )} */}
                {/* Button for Harvard Agriculture Datathon */}
                {achievement.title === "AWS Certified AI Practitioner" && (
                  <p
                    style={{
                      ...styles.resultsLink,
                      color: "white",
                      fontSize: "1.2rem",
                    }}
                  >
                    <div className="resume-button-container">
                      <a
                        href="https://www.credly.com/badges/89cc9adf-361b-4a1b-a510-a45c1974ecf7/public_url"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-button"
                      >
                        Show credential
                      </a>
                    </div>
                  </p>
                )}
                {/* Button for Research Publication */}
                {achievement.title === "AWS Certified Cloud Practitioner" && (
                  <p
                    style={{
                      ...styles.resultsLink,
                      color: "white",
                      fontSize: "1.2rem",
                    }}
                  >
                    <div className="resume-button-container">
                      <a
                        href="https://www.credly.com/badges/4cbfac22-b57b-4b20-ac35-6c94c09442f6/linked_in_profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-button"
                      >
                        Show credential
                      </a>
                    </div>
                  </p>
                )}
                {achievement.title === "Research Publication 1" && (
                  <p
                    style={{
                      ...styles.resultsLink,
                      color: "white",
                      fontSize: "1.2rem",
                    }}
                  >
                    <div className="resume-button-container">
                      <a
                        href="https://link.springer.com/chapter/10.1007/978-3-031-64779-6_2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-button"
                      >
                        Read the paper
                      </a>
                    </div>
                  </p>
                )}
                {achievement.title === "Research Publication 2" && (
                  <p
                    style={{
                      ...styles.resultsLink,
                      color: "white",
                      fontSize: "1.2rem",
                    }}
                  >
                    <div className="resume-button-container">
                      <a
                        href="https://link.springer.com/chapter/10.1007/978-981-97-0975-5_10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-button"
                      >
                        Read the paper
                      </a>
                    </div>
                  </p>
                )}
              </div>
              {achievement.image && (
                <div className="achievement-image-wrapper">
                  <img
                    src={achievement?.image}
                    alt={achievement?.title}
                    className="achievement-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/placeholder.png"; // Fallback image
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        );
      });
    }

    return (
      <section id="achievements" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName || "Certifications"}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <div className="achievements-container">{achievements}</div>
        </div>
      </section>
    );
  }
}

export default Achievements;
