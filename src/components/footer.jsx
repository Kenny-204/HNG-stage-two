import Button from "./Button";

function Footer() {
  return (
    <>
      <footer>
        <div className="flex footer">
          <div>
            <p className="footer-logo">Timbu</p>
            <div style={{ width: "200px" }}>
              <p className="footer-about-us">About us</p>
              <p className="footer-responsibility">
                Here a timbu our main responsibility here is providing techies
                especially young ones with proper and affordable gadgets so they
                can pursue a career in tech
              </p>
            </div>
          </div>
          <div className="footer-middle">
            <p className="footer-subscribe">Subscribe to our news letter</p>
            <p className="footer-email">
              Join our email for upcoming news about news gadgets
            </p>
            <div className="flex">
              <input />
              <Button />
            </div>
            <div className="flex">
              <ul style={{ listStyle: "none" }}>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Magazines</a>
                </li>
                <li>
                  <a href="#">Newsletter</a>
                </li>
              </ul>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">08012345678</a>
                </li>
                <li>
                  <a href="#">08012345678</a>
                </li>
                <li>
                  <a href="#">33 somewhere on earth</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="end">
            <p>Sign up for news</p>
            <button>Sign up for news</button>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
