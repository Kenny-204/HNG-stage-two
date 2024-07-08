/* eslint-disable react/prop-types */
import Button from "./Button";

function Nav() {
  const Navlinks = ["Shop", "About Us", "Distributors", "Contact Us"];
  return (
    <>
    
      <p className="logo">Timbu</p>
      <ul className="">
        {Navlinks.map((link, i) => {
          return <NavLink title={link} key={i} />;
        })}
        <Button Label = "Learn More"/>
      </ul>
     
    </>
  );
}

function NavLink({ title }) {
  return (
    <li>
      <a href="#">{title}</a>
    </li>
  );
}
export default Nav;
