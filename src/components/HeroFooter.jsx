
import TextPressure from './TextPressure'
function HeroFooter() {
    const listData=[
        {id:1,name:'LinkedIn',img:'./icons/LinkedInIcon.svg'},
        {id:1,name:'Instagram',img:'./icons/InstagramIcon.svg'},
        {id:1,name:'CV',img:'./icons/CV.svg'},
        {id:1,name:'Email',img:'./icons/Address.svg'},
        {id:1,name:'Phone',img:'./icons/PhoneIcon.svg'},

    ]
  return (
    <div className="HeroFoterSection">
        <div className="TextPressure">
            <TextPressure/>
        </div>
        <div className="listContent">
            <ul>
                {listData.map((list)=>{
                    return <li key={list.id}>
                        <img src={list.img} alt="" />
                        <p>{list.name}</p>
                    </li>
                })}
            </ul>
        </div>
    </div>
  )
}

export default HeroFooter