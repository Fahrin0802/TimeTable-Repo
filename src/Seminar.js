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




class Seminar extends Component{

    render() {
        const {paletteSeminars} = this.props

        const seminars = this.props.paletteSeminars.map((seminar, index) => {
            return (
                <div 
                    key={index} 
                    onClick={""}
                    
                    onDragStart = {(event) => this.props.onDragStart(event, seminar)}
                    onDragEnd = {(event) => this.props.unhighlight(event)}
                    style={{ backgroundColor: seminar.color}}

                    className="draggable"
                    courseInfo={seminar}
                    draggable
                >
                    {seminar.name}
                </div>
            )
        })

        return (
            <p>
                <div className="drag-container">
                    <h4> Seminars </h4>
                    {seminars}
                </div>
            </p>
        )
    }        
}

export default Seminar
