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

const CourseList =(props) => {
  const dayIndex = props.dayIndex
  const timeIndex = props.timeIndex
  const tableCourses = props.tableCourses
  const coursef = props.dayCourse.map((course, courseIndex) => {
    if (timeIndex !== 0){
      var matchFound = false
      const elementCheck = tableCourses[timeIndex -1].day[dayIndex].map((item) => {
        if(course.name === item.name) {
          matchFound = true
        }
        else{
          matchFound = false
        }
        
      })
      if(matchFound === false){
        return(
          <div key={dayIndex}
              style={{ backgroundColor: course.options[0].color}} 
              className="tableCourse" 
              onContextMenu = {(event) => props.rightClickHandler(event,course)}
          >
            <span style={{ fontWeight: 'bold' }}>{course.name}</span>
          </div>
          
        )
      }
      else{
        return(
          <div key={dayIndex}
              style={{ backgroundColor: course.options[0].color}} 
              className="tableCourse" 
              onContextMenu = {(event) => props.rightClickHandler(event,course)}
          >
            <span></span>
          </div>
          
        )
      }
    }
    else if(timeIndex === 0){
      return(
        <div key={dayIndex}
            style={{ backgroundColor: course.options[0].color}} 
            className="tableCourse" 
            onContextMenu = {(event) => props.rightClickHandler(event,course)}
        >
          <span style={{ fontWeight: 'bold' }}>{course.name}</span>
        </div>
      )
    }
    
  })

  return(
    <div className = "courseOuterDiv">
      {coursef}
    </div>
  )
}

const RowCells =(props) => {
    const timeIndex = props.timeIndex

    const rows = props.days.map((dayCourse, dayIndex) => {
        if (dayCourse === []){
          return (

            <td style={{ backgroundColor: props.color[dayIndex]}} 
                onDragOver={(event) => {
                  event.preventDefault()}} 

                onDrop={(event) => {
                  let course = JSON.parse(event.dataTransfer.getData("course"));
                  console.log('dayIndex', dayIndex)
                  console.log('timeIndex', timeIndex)
                  props.addCourse(course, dayIndex, timeIndex)
                  
                  if (course.name.includes("SEM") === true){
                    props.deleteSemFromPalette(course)
                  }

                  else if(course.name.includes("Lab") === true){
                    props.deleteLabFromPalette(course)
                  }

                  else{
                    props.deleteCourseFromPalette(course)
                  }
                  

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
                console.log('timeIndex', props.timeIndex)
                props.addCourse(course, dayIndex, props.timeIndex)
                if (course.name.includes("SEM") === true){
                  props.deleteSemFromPalette(course)
                }

                else if(course.name.includes("Lab") === true){
                  props.deleteLabFromPalette(course)
                }

                else{
                  props.deleteCourseFromPalette(course)
                }
              }}
            >
                {/* <div key={dayIndex}
                    style={{ backgroundColor: dayCourse.options[0].color}} 
                    className="tableCourse" 
                    draggable
                    courseInfo={dayCourse}
                    onContextMenu = {(event) => props.rightClickHandler(event,dayCourse)}
                    > */}
                      <CourseList 
                      rightClickHandler = {props.rightClickHandler}
                      dayCourse = {props.days[dayIndex]}
                      timeIndex = {timeIndex}
                      dayIndex = {dayIndex}
                      tableCourses = {props.tableCourses} />

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
              deleteSemFromPalette={props.deleteSemFromPalette}
              deleteLabFromPalette={props.deleteLabFromPalette}
              rightClickHandler={props.rightClickHandler}
              addCourse={props.addCourse} 
              timeIndex = {timeIndex} 
              days = {props.tableCourses[timeIndex].day} 
              color = {props.tableCourses[timeIndex].color}
              tableCourses = {props.tableCourses}/>
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
              <TableBody tableCourses={tableCourses} addCourse={this.props.addCourse} deleteCourseFromPalette={this.props.deleteCourseFromPalette} deleteSemFromPalette={this.props.deleteSemFromPalette} deleteLabFromPalette={this.props.deleteLabFromPalette} rightClickHandler={this.props.rightClickHandler}/>
            </table>
          </div>
        )
    }        
}

export default Table