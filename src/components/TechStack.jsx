import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaPython
} from "react-icons/fa";

function TechStack(){

const tech=[

{icon:<FaHtml5/>,name:"HTML"},
{icon:<FaCss3Alt/>,name:"CSS"},
{icon:<FaJs/>,name:"JavaScript"},
{icon:<FaReact/>,name:"React"},
{icon:<FaGitAlt/>,name:"Git"},
{icon:<FaGithub/>,name:"GitHub"},
{icon:<FaPython/>,name:"Python"}

];

return(

    <section
id="tech"
className="tech-section"
>

<h2>Tech Stack</h2>

<div className="tech-grid">

{tech.map((item)=>(

<div
className="tech-card"
key={item.name}
>

<div className="tech-icon">
{item.icon}
</div>

<h3>{item.name}</h3>

</div>

))}

</div>

</section>

);

}

export default TechStack;