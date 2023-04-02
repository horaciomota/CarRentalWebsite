import Img2 from "../images/testimonials/pfp1.jpg";
import Img3 from "../images/testimonials/pfp2.jpg";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Reviewed by People</h4>
              <h2>Client's Testimonials</h2>
              <p>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "I've rented cars from a lot of different companies over the
                  years, but [Company Name] is hands down the best. The rates
                  are unbeatable, and the service is top-notch. I'll never rent
                  from anyone else again!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile img-fluid">
                    <img src={Img2} alt="user_img" className="img-fluid" />
                    <span>
                      <h4>Marry Lincon</h4>
                      <p>Galway</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "I rented a car from [Company Name] for my trip to Ireland and
                  was blown away by the quality of service. The staff were
                  friendly and helpful, and the car was clean and reliable. I
                  would definitely recommend them to anyone visiting Ireland."
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" className="img-fluid" />
                    <span>
                      <h4>Ron Rizzly</h4>
                      <p>Dublin</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
