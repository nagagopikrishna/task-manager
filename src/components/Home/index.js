import Header from '../Header'
import TaskStatus from '../TaskStatus'
import TaskDetails  from '../TaskDetails'

import './index.css'

const Home = () =>(
    <div class = "home-container">
        <Header/>
        <div className='task-container'>
            <TaskStatus/>
            <TaskDetails/>
        </div>
    </div>
)

export default Home