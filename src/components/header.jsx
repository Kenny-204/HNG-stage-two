import Nav from "../components/nav.jsx";
function Header() {
  return (
    <>
      <nav className="nav flex ">
        <Nav />
      </nav>
      <div className="flex hero">
        <div className="text-left">
          <p className="title">
            <b>Shop for your original items for techies here at <span style={{color:"#1F1FFF"}}>timbu</span></b>
          </p>
          <p className="quote">
            Timbu is an online store where you can purchase tech products at
            affordable prices our shop is dedicated to help make life easier for
            tech individuals and make the learning experience and working
            experience worth while buy selling a variety tech products from
            ipads, to macs , to phones gaming sets vr googles and all we have
            here at timbu
          </p>
        </div>
        <img className="illus" src="VRheadset.png" width={"500px"} />
      </div>
    </>
  );
}
export default Header;
