function Skills() {
    const Design=[
        {id:1,name:'Figma',img:'./icons/FigmaIcon.svg'},
        {id:2,name:'lunacy',img:'/icons/lunacyIcon.png'},
        {id:3,name:'responsivelyApp',img:'./icons/responsivelyAppIcon.png'},
    ]
    const Lang=[
        {id:1,name:'html',img:'./icons/HtmlIcon.svg'},
        {id:2,name:'css',img:'./icons/cssICon.svg'},
        {id:3,name:'Javascript',img:'./icons/jsIcon.svg'},
        {id:4,name:'Typescript',img:'./icons/TsIcon.svg'},
        {id:5,name:'python',img:'./icons/pyIcon.svg'},
        {id:6,name:'C++',img:'./icons/c++ICon.svg'},
    ]
    const Devtools=[
        {id:0,name:'Git',img:'./icons/gitIcon.png'},
        {id:1,name:'Github',img:'./icons/GithubIcon.svg'},
        {id:2,name:'Visual Studio',img:'./icons/vscommunity.svg'},
        {id:3,name:'Visual Studio Code',img:'./icons/vsIcon.svg'},
        {id:4,name:'Front-end Mentor',img:'./icons/MentorIcon.svg'},
        {id:5,name:'Notion',img:'./icons/notionIcon.svg'},
        {id:6,name:'leetcode',img:'./icons/leetcodeICons.png'},
        {id:7,name:'Cursor',img:'./icons/openaIcon.svg'},
    ]
    const Frameworks=[
        {id:0,name:'React.js',img:'./icons/ReactIcon.png'},
        {id:1,name:'Next.js',img:'./icons/Nexticon.png'},
        {id:2,name:'bootstrap',img:'./icons/bootstrapIcons.png'},
    ]
    const Other=[
        {id:0,name:'Node.js',img:'./icons/NodeIcon.svg'},
        {id:1,name:'claude',img:'./icons/claudeIcons.png'},
    ]
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
            {Design.map((res)=>{
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