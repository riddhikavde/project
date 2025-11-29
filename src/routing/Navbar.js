import { Link } from "react-router-dom";
import "./navbar.css"
export const Navbar = () =>{
   const navullia = {
            //text-decoration: none;
            color: "white",
            display: "flex",
            "font-size": "18px",
            transition: "0.3s"
        }
         const navul= {
            "list-style" : "none",
            display: "flex",
            gap: "20px",
            margin: 0
        }

        const title ={
             "font-family": {"Georgia": "Times New Roman"},
    "font-weight": "900",
    "letter-spacing": "2px",
    "font-size": "3rem",
    "text-transform": "uppercase",
    "color":"white ",
    "text-shadow": 
        {
            "2px 2px 0 #d8b47a" :
            "4px 4px 0 #1a4b00ff"
        }
    }
    const h4={
    color : "green",
    "text-align": "left"
}
    
       return(
        <div>
            <nav >
                <div style={{display: "flex"} }><h2 style={title}>ITVEDANT...</h2><h4 style={h4}>A Trusted IT Training Institute</h4></div>
               
                    <ul style={navul}>
                        <Link  style={navullia} to = ' '>Home</Link>&nbsp;&nbsp;
                        <Link  style={navullia} to = '/about'>About</Link>&nbsp;&nbsp;
                        <Link  style={navullia} to = '/courses'>Courses</Link>&nbsp;&nbsp;
                        <Link  style={navullia} to = '/placements'>Placements</Link>&nbsp;&nbsp;
                        <Link  style={navullia} to = '/contact'>Contact</Link>&nbsp;&nbsp;
                    </ul>
                    
            </nav>
        </div>
       )

}