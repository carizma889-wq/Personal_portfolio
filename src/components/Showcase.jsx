function Showcase() {
  const lists = [
    { id: 0, name: "website", img: "./images/fu.png" },
    { id: 1, name: "gravityteam", img: "./images/gravityteam.png" },
    { id: 2, name: "landing", img: "./images/landing.png" },
  ];
  return (
    <div className="ShowcaseSection">
      <div className="title">
        <h1>Showcase</h1>
      </div>
      <div className="listSection">
        <div className="name">
          <img src="./icons/webIcon.svg" alt="" />
          <p>Webpages</p>
        </div>
        <ul className="list">
          {lists.map((list) => {
            return (
              <li key={list.id}>
                <div className="listLi">
                  <img src={list.img} alt="" />
                  <div className="text">
                    <p>{list.name}</p>
                    <div className="img">
                      <img src="./icons/rows.png" alt="" />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Showcase;
