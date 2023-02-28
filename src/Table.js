import { Component } from 'react';
import './Table.css';

const TableHeader = (props) => {
    const cells = props.weekdays.map((day, index) => {
        return (
          <th key={index}>{day}</th>
        )
    })
    
    return (
        <thead>
            <tr>
                <th></th>
                {cells}
            </tr>
        </thead>
    )
}

const RowCells =(props) => {
    const timeIndex = props.timeIndex

    const rows = props.days.map((dayCourse, dayIndex) => {
        if (dayCourse === ""){
          return (
            <td style={{ backgroundColor: props.color[dayIndex]}} 
                onDragOver={(event) => {event.preventDefault()}} 

                onDrop={(event) => {
                  let course = JSON.parse(event.dataTransfer.getData("course"));
                  console.log('dayIndex', dayIndex)
                  console.log('timeIndex', timeIndex)
                  props.addCourse(course, dayIndex, timeIndex)
                  props.deleteCourseFromPalette(course)
                }}
            >
                  
            </td>
          )
        }
        else{
          return (
            <td style={{ backgroundColor: props.color[dayIndex]}} 
              onDragOver={(event) => {event.preventDefault()}} 

              onDrop={(event) => {
                let course = JSON.parse(event.dataTransfer.getData("course"));
                console.log('dayIndex', dayIndex)
                console.log('timeIndex', this.props.timeIndex)
                props.addCourse(course, dayIndex, this.props.timeIndex)
              }}
            >
                <div key={dayIndex}
                    style={{ backgroundColor: dayCourse.options[0].color}} 
                    className="tableCourse" 
                    draggable
                    courseInfo={dayCourse}
                    onContextMenu = {(event) => props.rightClickHandler(event,dayCourse)}
                    >
                    <span style={{ fontWeight: 'bold' }}>{dayCourse.name}</span>
                </div>
              </td>
          )
        }
    })


    return(
      <>
        {rows}
      </>
    )
}


const TableBody =(props) => {
    const rows = props.tableCourses.map((element, timeIndex) => {
        return (
          <tr key={timeIndex}>
            <th>{element.time}</th>
            <RowCells 
              deleteCourseFromPalette={props.deleteCourseFromPalette} 
              rightClickHandler={props.rightClickHandler}
              addCourse={props.addCourse} 
              timeIndex = {timeIndex} 
              days = {props.tableCourses[timeIndex].day} 
              color = {props.tableCourses[timeIndex].color}/>
          </tr>
        )
    })

    return(
        <tbody>
            {rows}
        </tbody>
    )
}


class Table extends Component{

    render() {
        const {weekdays} = this.props
        const {tableCourses} = this.props

        // onDragOver={(event)=>this.onDragOver(event)} onDrop={(event)=>{this.onDrop(event, "inProgress")}}
        return (
          <div className="wrapper">
            <table>
              <TableHeader weekdays={weekdays}/>
              <TableBody tableCourses={tableCourses} addCourse={this.props.addCourse} deleteCourseFromPalette={this.props.deleteCourseFromPalette} rightClickHandler={this.props.rightClickHandler}/>
            </table>
          </div>
        )
    }        
}

export default Table