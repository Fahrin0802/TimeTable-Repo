import React, { Component } from 'react';

import Table from './Table';
import CoursePalette from './CoursePalette';
import Seminar from './Seminar'
import Lab from './Lab'


class App extends Component {

  state = {
    courseList: [
      {
        name: "ECE 325",
        options: [
          {
            section: "EB1",
            color: "",
            times: ["MON_09:00-10:00", "TUE_09:00-10:00", "FRI_09:00-10:00"],
          },
          {
            section: "EB2",
            color: "",
            times: ["MON_15:00-16:00", "TUE_15:00-16:00", "FRI_15:00-16:00"],
          },
        ]
      },

      {
        name: "ECE 311",
        options: [
          {
            section: "EB1",
            color: "",
            times: ["TUE_14:00-15:00", "THU_14:00-15:00",],
          },
          {
            section: "EB2",
            color: "",
            times: ["TUE_14:00-15:00", "THU_14:00-015:00",],
          },
        ]
      },
      
      {
        name: "STAT 235",
        options: [
          {
            section: "EA1",
            color: "",
            times: ["TUE_12:00-13:00", "THU_12:00-13:00",],
          },
        ]
      },
    ],

    paletteCourses: [
      {
        name: "ECE 325",
        options: [
          {
            section: "EB1",
            color: "yellow",
            times: ["MON_09:00-10:00", "WED_09:00-10:00", "FRI_09:00-10:00"],
          },
          {
            section: "EB2",
            color: "green",
            times: ["MON_15:00-16:00", "WED_15:00-16:00", "FRI_15:00-16:00"],
          },
        ]
      },
      {
        name: "ECE 311",
        options: [
          {
            section: "EB1",
            color: "blue",
            times: ["TUE_14:00-15:00", "THU_14:00-15:00",],
          },
          {
            section: "EB2",
            color: "pink",
            times: ["TUE_10:00-11:00", "THU_10:00-11:00",],
          },
        ]
      },
      {
        name: "STAT 235",
        options: [
          {
            section: "EA1",
            color: "red",
            times: ["TUE_12:00-13:00", "THU_12:00-13:00",],
          },
        ]
      },

      {
        name: "SOC 100",
        options: [
          {
            section: "EA1",
            color: "purple",
            times: ["TUE_17:00-18:00",],
          },
        ]
      },

      {
        name: "CHE 243",
        options: [
          {
            section: "EA1",
            color: "orange",
            times: ["TUE_15:00-16:00", "THU_15:00-16:00"],
          },
          {
            section: "EA2",
            color: "green",
            times: ["MON_15:00-16:00", "WED_15:00-16:00", "FRI_15:00-16:00",],
          },
        ]
      },

      {
        name: "ECE 321",
        options: [
          {
            section: "EA1",
            color: "green",
            times: ["MON_09:00-10:00", "WED_09:00-10:00", "FRI_09:00-10:00",],
          },
          {
            section: "EA2",
            color: "orange",
            times: ["MON_12:00-01:00", "WED_12:00-01:00", "FRI_12:00-01:00",],
          },
        ]
      },
    ],

    paletteSeminars: [
      {
        name: "CHE 243 SEM",
        options: [
          {
            section: "EB1",
            color: "yellow",
            times: ["MON_09:00-10:00"],
          },
          {
            section: "EB2",
            color: "green",
            times: ["MON_15:00-16:00"],
          },
        ]
      },
    ],

    paletteLab: [
      {
        name: "ECE 325 Lab",
        options: [
          {
            section: "EB1",
            color: "yellow",
            times: ["TUE_15:00-16:00"],
          },
    
        ]
      },
      {
        name: "STAT 235 Lab",
        options: [
          {
            section: "EB1",
            color: "yellow",
            times: ["THU_15:00-16:00"],
          },
    
        ]
      },
    ],

    weekdays: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    tableCourses: [
      {
          time: "08:00",
          day: [
            "", "", "", "", "",
          ],
          color: [
            '', '', '', '', '',
          ],
      },
      {
          time: "09:00",
          day: [
            "", "", "", "", "",
          ],
          color: [
            "", "", "", "", "", "",
          ],
      },
      {
          time: "10:00",
          day: [
            "", "", "", "", "",
          ],
          color: [
            "", "", "", "", "", "",
          ],
      },
      {
          time: "11:00",
          day: [
            "", "", "", "", "",
          ],
          color: [
            "", "", "", "", "", "",
          ],
      },
      {
          time: "12:00",
          day: [
            "", "", "", "", "",
          ],
          color: [
            "", "", "", "", "", "",
          ],
      },
      {
          time: "13:00",
          day: [
            "", "", "", "", "",
          ],
          color: [
            "", "", "", "", "", "",
          ],
      },
      {
          time: "14:00",
          day: [
            "", "", "", "", "",
          ],
          color: [
            "", "", "", "", "", "",
          ],
      },
      {
          time: "15:00",
          day: [
              "", "", "", "", "",
          ],
          color: [
            "", "", "", "", "", "",
          ],
      },
      {
          time: "16:00",
          day: [
            "", "", "", "", "",
          ],
          color: [
            "", "", "", "", "", "",
          ],
      },
      {
          time: "17:00",
          day: [
            "", "", "", "", "",
          ],
          color: [
            "", "", "", "", "", "",
          ],
      },
      {
          time: "18:00",
          day: [
            "", "", "", "", "",
          ],
          color: [
            "", "", "", "", "", "",
          ],
      },
    ],
  }

  highlight = (course) => {
    const {tableCourses} = this.state

    const info = []
    course.options.map((option, index) => {
        const color = option.color
        console.log('color', color)
        const times = option.times

        times.map((item, index) => {
            var day = item.split('_')[0]
            var time = item.split('_')[1]
            time = time.split('-')[0]
            time = time.split(':')[0]
            time = parseInt(time)
            time = time - 8

            switch(day) {
              case 'MON':
                day = 0;
                break;
              case 'TUE':
                day = 1;
                break;
              case 'WED':
                day = 2;
                break;
              case 'THU':
                day = 3;
                break;
              case 'FRI':
                day = 4;
                break;
              default:
                day = 5;
            }
            info.push([color, day, time])
        })

    })

    // // To highlight a table cell, I need the color, the day, and the time
    info.map((thing, index) => {
      tableCourses[thing[2]].color[thing[1]] = thing[0];
    })

    this.setState({ tableCourses: tableCourses })
  }

  unhighlight = (event) => {
    const {tableCourses} = this.state
    
    tableCourses.map((item, itemIndex) => {
      item.color.map((kikos, colorIndex) => {
        tableCourses[itemIndex].color[colorIndex] = ""
      })
    })
    this.setState({ tableCourses: tableCourses })
  }

  onDragStart = (event, course) => {
    this.highlight(course)

    console.log('dragstart on div: ', course.name);
    event.dataTransfer.setData("course", JSON.stringify(course));
  }

  addCourseToTable = (course, day, time) => {
    const {tableCourses} = this.state

    // Get which option of the lecture was chosen
    var courseOption = 0
    course.options.map((option, optionIndex) => {
        const times = option.times

        times.map((item, timeIndex) => {
            var tempDay = item.split('_')[0]
            var tempTime = item.split('_')[1]
            tempTime = tempTime.split('-')[0]
            tempTime = tempTime.split(':')[0]
            tempTime = parseInt(tempTime)
            tempTime = tempTime - 8

            switch(tempDay) {
              case 'MON':
                tempDay = 0;
                break;
              case 'TUE':
                tempDay = 1;
                break;
              case 'WED':
                tempDay = 2;
                break;
              case 'THU':
                tempDay = 3;
                break;
              case 'FRI':
                tempDay = 4;
                break;
              default:
                tempDay = 5;
            }

            if (tempTime === time && tempDay === day ){
              courseOption = optionIndex
            }
        })
    })

    console.log("courseOption", courseOption)

    // Fill the table with that course 
    course.options[courseOption].times.map((item, slotIndex) => {
        var tempDay = item.split('_')[0]
        var tempTime = item.split('_')[1]
        tempTime = tempTime.split('-')[0]
        tempTime = tempTime.split(':')[0]
        tempTime = parseInt(tempTime)
        tempTime = tempTime - 8

        switch(tempDay) {
          case 'MON':
            tempDay = 0;
            break;
          case 'TUE':
            tempDay = 1;
            break;
          case 'WED':
            tempDay = 2;
            break;
          case 'THU':
            tempDay = 3;
            break;
          case 'FRI':
            tempDay = 4;
            break;
          default:
            tempDay = 5;
        }

        tableCourses[tempTime].day[tempDay] = course

    })
    this.setState({ tableCourses: tableCourses })
    
    // Unhighlight
    tableCourses.map((item, itemIndex) => {
      item.color.map((kikos, colorIndex) => {
        tableCourses[itemIndex].color[colorIndex] = ""
      })
    })
    this.setState({ tableCourses: tableCourses })
  }

  deleteCourseFromPalette = (course) => {
    const {paletteCourses} = this.state
    const newList = paletteCourses.filter((item) => item.name !== course.name);
    console.log("kikos", course.name)
    this.setState({ paletteCourses: newList })

  }

  empty = (course) => {
    const {tableCourses} = this.state
    tableCourses.map((slot, index) => {
      if(slot.day[0]!==""){
        if(slot.day[0].name ===course.name){
          tableCourses[index].day[0] = ""
        }
      }
      if(slot.day[1]!==""){
        if(slot.day[1].name ===course.name){
          tableCourses[index].day[1] = ""
        }
      }
      if(slot.day[2]!==""){
        if(slot.day[2].name ===course.name){
          tableCourses[index].day[2] = ""
        }
      }
      if(slot.day[3]!==""){
        if(slot.day[3].name ===course.name){
          tableCourses[index].day[3] = ""
        }
      }
      if(slot.day[4]!==""){
        if(slot.day[4].name ===course.name){
          tableCourses[index].day[4] = ""
        }
      }
      
    })
    this.setState({ tableCourses: tableCourses })

  }

  retriveToPalette = (course) => {
    const {paletteCourses} = this.state
    const {paletteSeminars} = this.state
    const {paletteLab} = this.state

    if(course.name.includes('SEM') == true){
      paletteSeminars.push(course)
    }
    else if(course.name.includes('Lab') == true){
      paletteLab.push(course)
    }
    else{
      paletteCourses.push(course)
    }
    this.setState({ paletteCourses: paletteCourses, paletteSeminars: paletteSeminars, paletteLab: paletteLab})
    
  }

  rightClickHandler = (event, course) => {
    this.empty(course)
    this.retriveToPalette(course)
    event.preventDefault()
  }

  

  render() {
    const {paletteCourses} = this.state;
    const {courseList} = this.state;
    const {weekdays} = this.state;
    const {tableCourses} = this.state;
    const {paletteSeminars} = this.state;
    const {paletteLab} = this.state;


    return (
      <div className="App">
        <CoursePalette courseList={courseList} paletteCourses={paletteCourses} onDragStart={this.onDragStart} unhighlight={this.unhighlight}/>
        <Table weekdays ={weekdays} tableCourses={tableCourses} addCourse={this.addCourseToTable} deleteCourseFromPalette={this.deleteCourseFromPalette} rightClickHandler={this.rightClickHandler}/>
        <Seminar paletteSeminars={paletteSeminars} onDragStart={this.onDragStart} unhighlight={this.unhighlight}/>
        <Lab paletteLab={paletteLab} onDragStart={this.onDragStart} unhighlight={this.unhighlight}/>
      </div>
    )
  }
}

export default App