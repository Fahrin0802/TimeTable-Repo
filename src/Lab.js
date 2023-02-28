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




class Lab extends Component{

    render() {
        const {paletteLab} = this.props

        const labs = paletteLab.map((lab, index) => {
            return (
                <div 
                    key={index} 
                    onClick={""}
                    
                    onDragStart = {(event) => this.props.onDragStart(event, lab)}
                    onDragEnd = {(event) => this.props.unhighlight(event)}
                    style={{ backgroundColor: lab.color}}

                    className="draggable"
                    courseInfo={lab}
                    draggable
                >
                    {lab.name}
                </div>
            )
        })

        return (
            <p>
                <div className="drag-container">
                    <h4> Labs </h4>
                    {labs}
                </div>
            </p>
        )
    }        
}

export default Lab
