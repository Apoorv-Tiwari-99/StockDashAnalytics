function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-2" id="supportWrapper">
        <h4 className="mt-4">Support Portal</h4>
        <a href="" style={{fontSize:"18px",marginTop:"15px"}}>Track Ticket</a>
      </div>
      <div className="row p-4 mx-5">
        <div className="col-6 p-4 " >
          <h1 className="fs-4 mb-4">Search for an answer or browse help topics to create a ticket</h1>
          <input
            type="text"
            placeholder="E.g: How do i activate F&0 ,why is my order getting rejected..."
            className="mb-4"
          /> <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins </a><br />
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-3 ">
          <h1 className="fs-3">Featured</h1>
          <ol style={{lineHeight:"2.8"}}>
            <li><a href="">Scheduled maintenance downtime for Coin</a></li>
            <li><a href="">BSE StAR mutual fund platform downtime</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
