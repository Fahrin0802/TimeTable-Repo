import { Component } from 'react';
import './index.css';

/*
For each course
- Named
- color
- Professor name
- sections
    - Lecture times and lecture dates
    - Highlight color

*/




class CoursePalette extends Component{

    render() {
        const {paletteCourses} = this.props

        const courses = this.props.paletteCourses.map((course, index) => {
            return (
                <div 
                    key={index} 
                    onClick={""}
                    
                    onDragStart = {(event) => this.props.onDragStart(event, course)}
                    onDragEnd = {(event) => this.props.unhighlight(event)}
                    style={{ backgroundColor: course.color}}

                    className="draggable"
                    courseInfo={course}
                    draggable
                >
                    {course.name}
                </div>
            )
        })

        return (
            <p>
                <div className="drag-container">
                    <h4> Courses </h4>
                    {courses}
                </div>
            </p>
        )
    }        
}

export default CoursePalette
