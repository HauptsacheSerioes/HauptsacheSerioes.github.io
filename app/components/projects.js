import React from 'react';
import { Row, Col } from 'react-bootstrap';


class Projects extends React.Component {
  static propTypes = {
    projects: React.PropTypes.array.isRequired,
    onMobile: React.PropTypes.bool
  }

  constructor() {
    super();
    this.state = { show: null };
  }


  _renderProjects = (projects) => {
    return projects.map((project, index) => {
      if (typeof window !== 'undefined') {
        $.get(project.image).then(null, err => console.log(err)); // prefetch project images
      }

      return (
        <Col xs={12} sm={6} md={4}
             className="project"
             key={`project-${index}`}>
          <a href={project.url} target="_blank">
            <span>#{index + 1}</span>
            <img src={project.image} alt={project.name} className="project-image" />
          </a>
        </Col>
      );
    });
  }


  render() {
    return (
      <div id="projects">
        <div className="container">
          <Row>
            {this._renderProjects(this.props.projects)}
          </Row>
        </div>
      </div>
    );
  }
}


export default Projects;
