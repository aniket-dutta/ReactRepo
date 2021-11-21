import { Link } from 'react-router-dom'
const About = () => {
    let url = "https://www.linkedin.com/in/aniket-dutta-16s28a"
    return (
        <div>
            
            <br/>
            <hr className="border-2 border-top border-danger"/>
            <br/>
            <h4>Version 1.0.0</h4>
            <p>To do list app  by
                <br/>   
                <a href={url} target="blank" >Aniket Dutta</a>
            </p>
           
            {/* <Link to="/">Go Back</Link>             */}
        </div>
    )
}

export default About
