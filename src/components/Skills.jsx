import { useState,useEffect,useMemo } from "react"
import { fetchSkills } from "@/services/projectsService"

function Skills() {
    const [dataSkills,setDataSkills]=useState([])
    useEffect(()=>{
        async function  loadSkills() {
            const data=await fetchSkills();
            if (data){
                setDataSkills(data)
            }
        }
        loadSkills()
    },[])
const design = useMemo(
  () => dataSkills.filter((s) => s.category === "Design"),
  [dataSkills]
);
const Lang = useMemo(
  () => dataSkills.filter((s) => s.category === "Lang"),
  [dataSkills]
);
    console.log('skilllsPage',dataSkills)

const Devtools = useMemo(
  () => dataSkills.filter((s) => s.category === "Devtools"),
  [dataSkills]
);

const Frameworks = useMemo(
  () => dataSkills.filter((s) => s.category === "Frameworks"),
  [dataSkills]
);

const Other = useMemo(
  () => dataSkills.filter((s) => s.category === "Other"),
  [dataSkills]
);

  return (
<div className="skillsSections">
  <div className="skills-header">
    <h2 className="skills-title">My Skills</h2>
  </div>
  <div className="tools">
    <div className="part1">
        <div className="Design box">
            <div className="name">
                <img src="./icons/designIcon.svg" alt="" />
                <p >Design</p>
            </div>
            <ul>
            {design.map((res)=>{
                return(
                    <li key={res.id}>
                        <img src={res.img} width={'40px'} alt="" />
                        {res.name}
                    </li>
                )
                })}
            </ul>
        </div>
        <div className="languages box">
            <div className="name">
                <img src="./icons/langIcon.svg" alt="" />
                <p className="name">languages</p>
            </div>
            <ul>
            {Lang.map((res)=>{
                return <li key={res.id}>
                    <img src={res.img} alt="" />
                    {res.name}
                </li>
            })}
            </ul>
        </div>
    </div>
    <div className="part2">
        <div className="DevTools box ">
            <div className="name">
                <img src="./icons/devToolIcon.svg" alt="" />
                <p >Dev tools</p>
            </div>
            <ul>
                        {Devtools.map((res)=>{
                return(
                    <li key={res.id}>
                        <img src={res.img} width={'40px'} alt="" />
                        {res.name}
                    </li>
                )
                })}
            </ul>
        </div>
        <div className="Frameworks box">
            <div className="name">
                <img src="./icons/frameIcon.svg" alt="" />
                <p >Frameworks</p>
            </div>
            <ul>
            {Frameworks.map((res)=>{
                return(
                    <li key={res.id}>
                        <img src={res.img} width={'40px'} alt="" />
                        {res.name}
                    </li>
                )
                })}
            </ul>
        </div>
        <div className="Other box">
            <div className="name">
                <img src="./icons/otherIcon.svg" alt="" />
                <p >Other</p>
            </div>
            <ul>
            {Other.map((res)=>{
                return(
                    <li key={res.id}>
                        <img src={res.img} width={'40px'} alt="" />
                        {res.name}
                    </li>
                )
                })}
            </ul>
        </div>
    </div>
  </div>
</div>
  )
}

export default Skills