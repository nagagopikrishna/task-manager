
import Popup from 'reactjs-popup'
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { IoAddCircleSharp } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import './index.css'

const TaskStatus = () =>(
    <ul className = "task-status-list-container">
        <li className = "task-status-item">
            <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/v1724676461/Frame_1171275857_bwnn63.png" alt = "icon" className = "task-status-icon" />
            <p className = "status-description"> Expired Tasks</p>
            <h1 className = "status-count">5</h1>
        </li>
        <li className = "task-status-item">
            <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/v1724676398/Frame_1171275856_nfoqhm.png" alt = "icon" className = "task-status-icon"/>
            <p className = "status-description"> All Active Tasks </p>
            <h1 className = "status-count">7</h1>
        </li>
        <li className = "task-status-item">
            <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/v1724676377/Frame_1171275859_vpf3a6.png" alt = "icon" className = "task-status-icon"/>
            <p className = "status-description"> Completed Tasks </p>
            <h1 className = "status-count">2/7</h1>
        </li>
        <Popup
            modal
            trigger={
        //    <button type="button" className="trigger-button">
        //      Trigger
        //    </button>
            <button type = "button" className = "add-button"> + Add Task</button>
            }
        >
            {close => (
            <>
                <div  className='popup-bg-container'>
                    <div className='header-section'>
                        <div className='add-task-section'>
                            <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/v1724723379/Ellipse_10_mnmm7u.png" alt = "icons"/>
                            <h1 className='add-task'>ADD TASK</h1>
                        </div>
                        <IoAddCircleSharp className='add-icon'/>
                    </div>
                    <hr className='add-task-line'/>
                    <div className='description-container'>
                        <div className='description-header'>
                            <h1 className='task'>TASK1</h1>
                            <HiDotsVertical className='menu'/>
                        </div>
                        <hr className='add-task-line-1'/>
                    <p className='description'>
                    Lorem ipsum dolor sit amet consectetur. Ut diam tellus nunc sed amet mauris molestie. Justo lacinia tristique sed ullamcorper ipsum diam eget. Integer at tempor adipiscing ac dui in bibendum tincidunt eget. Tempus proin amet adipiscing amet lectus scelerisque at malesuada arcu. Pellentesque aliquam aliquam in odio aenean sit risus imperdiet tristique. Diam tristique purus et interdum nec quis. Feugiat vitae diam egestas molestie non. Condimentum duis ut dui quis accumsan. Ipsum aliquam fames eget metus suspendisse urna nam accumsan.
                    </p>
                    <div className='button-container'>
                        <button type = "button"  className='taks-button'>DeadLine </button>
                        <AddToCalendarButton
                        name="DeadLine"
                        // options={['Apple','Google','Yahoo','iCal']}
                        timeZone="America/Los_Angeles"
                        ></AddToCalendarButton>

                        <button type = "button"  className='taks-button'>Assigned to</button>
                    </div>
                    </div>
                </div>
                {/* <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
                >
                Close
                </button> */}
            </>
            )}
        </Popup>
    </ul>
)

export default TaskStatus