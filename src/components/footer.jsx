import Button from "./Button";

function Footer() {
  return (
    <>
      <footer>
        <div
          className="flex"
          style={{
            backgroundColor: "blue",
            color: "white",
            justifyContent: "space-between",
            padding: "2%",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "44px",
                fontWeight: "700",
              }}
            >
              Timbu
            </p>
            <div style={{ width: "200px" }}>
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                About us
              </p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "10px",
                  fontWeight: 600,
                }}
              >
                Here a timbu our main responsibility here is providing techies
                especially young ones with proper and affordable gadgets so they
                can pursue a career in tech
              </p>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "30px",
                fontWeight: 900,
              }}
            >
              Subscribe to our news letter
            </p>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Join our email for upcoming news about news gadgets
            </p>
            <div className="flex">
              <input />
              <Button />
            </div>
            <div className="flex" >
              <ul style={{ listStyle:"none"}}>
                <li><a href="#">Home</a></li>                
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Magazines</a></li>
                <li><a href="#">Newsletter</a></li>
              </ul>
              <ul style={{ listStyle:"none"}}>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">08012345678</a></li>
                <li><a href="#">08012345678</a></li>
                <li><a href="#">33 somewhere on earth</a></li>
              </ul>
            </div>
          </div>
          <div>
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
