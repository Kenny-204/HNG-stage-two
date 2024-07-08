import Nav from "../components/nav";
import Button from "../components/Button"
import "../product.css";

// import Footer from "./components/footer";
import "../App.css";

function ProductPage() {
  return (
    <>
      <nav className="nav flex ">
        <Nav />
      </nav>
      <section>
        <div className="product-section">

        <div className="product-display">
          <img src="VRheadset" width="500px" height="500px" />
        </div>
        <p className="product-name">V.R googles headset 32” inches led screen</p>
        <Button Label="Official store"/>
        <p className="stuff" >Timbu express world wide delivery for all products</p>
        <p className="price">900,000 <sup >1000,000</sup></p>
        </div>
      </section>
      {/* <Footer/> */}
    </>
  );
}

export default ProductPage;
