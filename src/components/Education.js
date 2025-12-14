import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Education extends Component {
  render() {
    if (this.props.resumeEducation && this.props.resumeBasicInfo) {
      const sectionName = this.props.resumeBasicInfo.section_name.education;
      const educationDetails = this.props.resumeEducation.map((edu, i) => {
        const coursework = edu.coursework || [];
        const gpa = edu.gpa;
        const location = edu.location;
        const research = edu["Research Assistant"] || [];
        const teaching = edu["Teaching Assistant"] || [];
        const extra = edu.extra || [];

        // Helper function to render bullet points
        const renderBulletPoints = (items) =>
          items.map((item, index) => (
            <li key={index} style={{ marginBottom: "3px" }} dangerouslySetInnerHTML={{ __html: item }}></li>
          ));

        // Function to split coursework into bullet points
        const formatCoursework = (courseworkText) => {
          return courseworkText.split(",").map((course) => course.trim());
        };

        const formattedCoursework = formatCoursework(coursework[0] || "");

        // Determine the icon for each education entry
        let iconElement;
        if (i === 0) {
          iconElement = (
            <img
              src="images/portfolio/education/image1.png"
              alt="GeorgiaTech University"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          );
        } else if (i === 1) {
          iconElement = (
            <img
              src="images/portfolio/education/image2.png"
              alt="B. M. S. College of Engineering"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          );
        } else {
          iconElement = <i className="fas fa-graduation-cap education-icon"></i>;
        }

        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={edu.years}
            iconStyle={{
              background: "#1b4332",
              color: "#FFFFFF",
              textAlign: "center",
              border: "3px solid #FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 15px 5px #7B6FAD",
            }}
            icon={iconElement}
            key={i}
          >
            <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
              {edu.degree}
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left", marginTop: "-5px" }}>
              {edu.institution}
            </h4>
            {location && (
              <h5
                className="vertical-timeline-element-location"
                style={{ textAlign: "left", marginTop: "-10px", marginBottom: "10px" }}
              >
                {location}
              </h5>
            )}

            {gpa && (
              <Badge className="main-badge" style={{ marginBottom: "10px" }}>
                GPA: {gpa}
              </Badge>
            )}

            {/* Render Research Assistant Experiences */}
            {/* {research.length > 0 && (
              <div className="research-section">
                <h4>Research Assistant:</h4>
                <ul
                  style={{
                    textAlign: "left",
                    marginTop: "5px",
                    paddingLeft: "20px",
                    listStyleType: "disc",
                  }}
                >
                  {renderBulletPoints(research)}
                </ul>
              </div>
            )} */}

            {/* Render Teaching Assistant Experiences */}
            {/* {teaching.length > 0 && (
              <div className="teaching-section">
                <h4>Teaching Assistant:</h4>
                <ul
                  style={{
                    textAlign: "left",
                    marginTop: "5px",
                    paddingLeft: "20px",
                    listStyleType: "disc",
                  }}
                >
                  {renderBulletPoints(teaching)}
                </ul>
              </div>
            )} */}

            {/* Render Coursework */}
            {formattedCoursework.length > 0 && (
              <div className="coursework-section">
                <h4>Coursework:</h4>
                <ul
                  style={{
                    textAlign: "left",
                    marginTop: "5px",
                    paddingLeft: "20px",
                    listStyleType: "disc",
                  }}
                >
                  {renderBulletPoints(formattedCoursework)}
                </ul>
              </div>
            )}

            {/* Render Extra Activities */}
            {extra.length > 0 && (
              <div className="extra-info">
                <h4>Other Activities:</h4>
                <ul
                  style={{
                    textAlign: "left",
                    marginTop: "5px",
                    paddingLeft: "20px",
                    listStyleType: "disc",
                  }}
                >
                  {renderBulletPoints(extra)}
                </ul>
              </div>
            )}
          </VerticalTimelineElement>
        );
      });

      return (
        <section id="education" className="pb-5">
          <div className="col-md-12 mx-auto">
            <div className="col-md-12">
              <h1 className="section-title" style={{ color: "black" }}>
                <span className="text-black" style={{ textAlign: "center" }}>
                  Education
                </span>
              </h1>
            </div>
          </div>
          <div className="col-md-8 mx-auto">
            <VerticalTimeline>
              {educationDetails}
              <VerticalTimelineElement
                iconStyle={{
                  background: "#1b4332",
                  color: "#FFFFFF",
                  textAlign: "center",
                  border: "3px solid #FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 15px 5px #7B6FAD",
                }}
                icon={<i className="fas fa-graduation-cap mx-auto education-icon" style={{ fontSize: "2.5rem" }}></i>}
              />
            </VerticalTimeline>
          </div>
        </section>
      );
    }

    return null;
  }
}

export default Education;
