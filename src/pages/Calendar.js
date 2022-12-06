import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";



const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format, 
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    
];

function App() {
   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newEvent, setNewEvent] = useState({team:"", type:"", time:"" ,title: "", start: "", end: ""});
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        
        for (let i=0; i<allEvents.length; i++){

            const d1 = new Date (allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
            
             if (
              ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                (d4 <= d3) )
              )
            {   
                alert("CLASH"); 
                break;
             }
    
        }
        
        
        setAllEvents([...allEvents, newEvent]);
    }

    const optionListTeam = [
        { value: "TEAM1", label: "TEAM 1" },
        { value: "TEAM1", label: "TEAM 2" },
        { value: "TEAM1", label: "TEAM 3" },
        { value: "TEAM1", label: "TEAM 4" }
      ];
    
      const optionListType = [
        { value: "TYPE1", label: "TYPE 1" },
        { value: "TYPE2", label: "TYPE 2" },
        { value: "TYPE3", label: "TYPE 3" },
        { value: "TYPE4", label: "TYPE 4" }
      ];
    
      const optionListTime = [
        { value: "TIME1", label: "TIME 1" },
        { value: "TIME2", label: "TIME 2" },
        { value: "TIME3", label: "TIME 3" },
        { value: "TIME4", label: "TIME 4" }
      ];
    
    
      const [selectedOptionsTeam, setSelectedOptionsTeam] = useState([]);
      const [selectedOptionsType, setSelectedOptionsType] = useState([]);
      const [selectedOptionsTime, setSelectedOptionsTime] = useState([]);
    
      function handleSelectTeam(data) {
        setSelectedOptionsTeam(data);
      }
    
      function handleSelectType(data) {
        setSelectedOptionsType(data);
      }
    
      function handleSelectTime(data) {
        setSelectedOptionsTime(data);
      }

    return (
        <div className="App">  
            <div>
           
              {/* <input type="text" placeholder="Add Title" prefixIcon="e-cut-icon tb-icons" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                    <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                    <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} /> */}
                    
                    <div className = "row" class = "text-align-right" style ={{textAlign: 'right', display:'flex', justifyContent: 'right'}}>  
                    <>      
                        <Select
                        options={optionListTeam}
                        placeholder="Team"
                        value={selectedOptionsTeam}
                        onChange={handleSelectTeam}
                        isSearchable={true}
                        // isMulti
                        />

                        <Select
                        options={optionListType}
                        placeholder="Type"
                        value={selectedOptionsType}
                        onChange={handleSelectType}
                        isSearchable={true}
                        // isMulti
                        />

                        <Select
                        options={optionListTime}
                        placeholder="Time"
                        value={selectedOptionsTime}
                        onChange={handleSelectTime }
                        
                        isSearchable={true}
                        // isMulti
                        />

                        <Button className ="col-1 "  variant="primary" onClick={handleShow}>
                            Add 
                        </Button>
                        <Modal size = "lg" aria-labelledby= "contained-modal-title-vcenter" show={show} onHide={handleClose} animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Task: </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="App container " class="text-center  container middle ">
                                <input type="text" placeholder="Add Title" prefixIcon="e-cut-icon tb-icons" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                                <br></br> <br></br>
                                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                                <br></br> <br></br>
                                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                                <br></br> <br></br>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={handleAddEvent}>
                                    Add Event
                                </Button>
                            </Modal.Footer>
                        </Modal> 

                
                </>
        </div>
                <>
                        <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />  
                </>   
            </div>
        </div>  
        
    );
}

export default App;