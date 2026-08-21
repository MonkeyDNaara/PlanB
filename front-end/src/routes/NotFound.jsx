import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div>Error 404 Page Not Found</div>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default NotFound;
