import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-12 flex items-center">
      <Link to="recipe" className="text-primary font-bold text-2xl ml-2">
        RecipeFinder
      </Link>
    </nav>
  );
};

export default Navbar;
