


import './index.css'

const TaskDetails = () =>(
    <ul className = "task-details-container">
        <li className = "task-details-list">
            <div className = "task-status-header">
                <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/v1724678091/Ellipse_11_kdwzcg.png" alt = "icon"/>
                <p className = "status-heading"> To Do </p>
                <span className = "count">3</span>
            </div>
            <hr className = "to-do-line"/>
            <ul className = "task-list">
                <li className = "task-item-details">
                    <div className = "top-section">
                        <p className = "level"> Low</p>
                        <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/v1724680441/_._._fxjtks.png" alt = "dots" className = "dots"/>
                    </div>
                    
                    <h1 className = "task-heading"> Brainstroming</h1>
                    <p className = "task-decription">Brainstorming brings team members' diverse experience into play.</p>
                    <p className = "deadline">DeadLine: <span className = "date">12/5/24</span></p>
                </li>

                <li className = "task-item-details">
                    <div className = "top-section">
                        <p className = "level-high"> High</p>
                        <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/v1724680441/_._._fxjtks.png" alt = "dots" className = "dots"/>
                    </div>
                    
                    <h1 className = "task-heading"> Research </h1>
                    <p className = "task-decription">User research helps you to create an optimal product for users.</p>
                    <p className = "deadline">DeadLine: <span className = "date">12/5/24</span></p>
                </li>

                <li className = "task-item-details">
                    <div className = "top-section">
                        <p className = "level-high"> High</p>
                        <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/v1724680441/_._._fxjtks.png" alt = "dots" className = "dots"/>
                    </div>
                    
                    <h1 className = "task-heading"> Wireframes </h1>
                    <p className = "task-decription">Low fidelity wireframes include the most basic content and visuals.</p>
                    <p className = "deadline">DeadLine: <span className = "date">12/5/24</span></p>
                </li>

            </ul>
        </li>

        <li className = "task-details-list">
            <div className = "task-status-header">
                <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/v1724721924/Ellipse_11_1_uk8nuc.png" alt = "icon"/>
                <p className = "status-heading"> On Progress </p>
                <span className = "count">2</span>
            </div>
            <hr className = "on-progress-line"/>
            <ul className = "task-list">
                <li className = "task-item-details">
                    <div className = "top-section">
                        <p className = "level"> Low</p>
                        <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/v1724680441/_._._fxjtks.png" alt = "dots" className = "dots"/>
                    </div>
                    <h1 className = "task-heading"> Onboarding Illustrations</h1>
                    <p className = "deadline">DeadLine: <span className = "date">12/5/24</span></p>
                </li>

                <li className = "task-item-details">
                    <div className = "top-section">
                        <p className = "level"> Low</p>
                        <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/v1724680441/_._._fxjtks.png" alt = "dots" className = "dots"/>
                    </div>
                    
                    <h1 className = "task-heading"> Moodboard</h1>
                    <p className = "deadline">DeadLine: <span className = "date">12/5/24</span></p>
                </li>

            </ul>
        </li>


        <li className = "task-details-list">
            <div className = "task-status-header">
                <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/v1724721915/Ellipse_11_2_jpiulj.png" alt = "icon"/>
                <p className = "status-heading"> Done </p>
                <span className = "count">2</span>
            </div>
            <hr className = "done-line"/>
            <ul className = "task-list">
                <li className = "task-item-details">
                    <div className = "top-section">
                        <p className = "completed"> Completed</p>
                        <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/v1724685862/_._._1_an3sjs.png" alt = "dots" className = "dots"/>
                    </div>
                    
                    <h1 className = "task-heading"> Mobile App Design</h1>
                    <p className = "deadline">DeadLine: <span className = "date">12/5/24</span></p>
                </li>

                <li className = "task-item-details">
                    <div className = "top-section">
                        <p className = "completed"> Completed</p>
                        <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/v1724685862/_._._1_an3sjs.png" alt = "dots" className = "dots"/>
                    </div>
                    
                    <h1 className = "task-heading"> Design System </h1>
                    <p className = "task-decription">It just needs to adapt the UI from what you did before</p>
                    <p className = "deadline">DeadLine: <span className = "date">12/5/24</span></p>
                </li>

            </ul>
        </li>

        
    </ul>
)

export default TaskDetails