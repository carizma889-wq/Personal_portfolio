
function TechStack() {
    const listData=[
        {id:0,name:'react',img:'./icons/ReactIcon.png'},
        {id:1,name:'figma',img:'./icons/FigmaIcon.svg'},
        {id:2,name:'VsCode',img:'./icons/VsCodeIcon.svg'},
        {id:3,name:'Next.js',img:'./icons/Nexticon.png'},
        {id:4,name:'VsCommunity',img:'./icons/vscommunity.svg'},
        {id:5,name:'Git',img:'./icons/GitIcon.png'},
    ]
  return (
    <div className="TechStackSection">
        <div className="title">
            <img src="./icons/tech.svg" alt="" />
            <h1>Technologies i often use</h1>
        </div>
        <div className="content">
            <ul>
                {listData.map((list)=>{
                    return (
                        <li key={list.id}>
                            <img src={list.img} alt="" />
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default TechStack