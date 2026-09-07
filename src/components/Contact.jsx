function Contact() {
  return (
    <div className="ContactSection">
      <div className="cardContact">
        <div className="content">
          <div className="details">
            <div className="text1 text">
              <h1>Got a project in mind?</h1>
            </div>
            <div className="text2 text">
              <h2>Let’s make it happen.</h2>
            </div>
          </div>
          <div className="inputs">
            <div className="emailInput">
              <input
                className="email"
                type="email"
                name=""
                id=""
                placeholder="e-mail@adress"
              />
            </div>
            <div className="message">
              <textarea placeholder="Your message" name="" id=""></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
