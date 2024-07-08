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
      <div className="toggle_Btn">
                <i className=" fa-solid fa-bars"></i>
            </div>

            <div className="dropdown--menu ">
            {Navlinks.map((link, i) => {
          return <NavLink className="dropdown-item" title={link} key={i} />;
        })}
                <button className="dropdown--item">Sign Up</button>
            </div>
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
