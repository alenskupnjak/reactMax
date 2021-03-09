import React, { Component } from 'react';

class Course extends Component {
  state = {
    courseTitle: '',
  };

  componentDidMount() {
    this.parseQueryParams();
  }

  componentDidUpdate() {
    this.parseQueryParams();
  }

  parseQueryParams() {
    console.log('%c 01 Courses parseQueryParams()', 'color:orange', this.props);
    console.log('%c 02 Courses this.props.location.search', 'color:orange', this.props.location.search);
    const query = new URLSearchParams(this.props.location.search);
    console.log('%c 03 Courses parseQueryParams()', 'color:orange', query);
    console.log('%c 04 Courses parseQueryParams()', 'color:orange', query.entries());
    
    for (let param of query.entries()) {
      console.log('%c 05 Courses  query.entries()', 'color:orange', param);
      if (this.state.courseTitle !== param[1]) {
        console.log('%c 06 Courses ', 'color:orange',this.state.courseTitle);
        this.setState({ courseTitle: param[1] });
      }
    }
  }

  render() {
    console.log('%c 00 Courses RENDER', 'color:green', this.props);


    return (
      <div>
        <h1>{this.state.courseTitle}</h1>
        <h3>Dodatak</h3>
        <p>
          You selected the Course with ID: {this.props.match.params.courseId}
        </p>
      </div>
    );
  }
}

export default Course;
