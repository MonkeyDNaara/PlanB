import { NavLink } from "react-router-dom";

const EventCard = ({ event }) => {
  const { title, date, location } = event;

  const parsedDate = date ? new Date(date) : null;
  const formattedDate = parsedDate?.toLocaleDateString() ?? "";
  const formattedTime =
    parsedDate?.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }) ?? "";

  return (
    <NavLink to={"/"}>
      <div>
        <h2>{title ?? ""}</h2>
        <p>{formattedDate}</p>
        <p>{formattedTime}</p>
        <p>{location ?? ""}</p>
      </div>
    </NavLink>
  );
};

export default EventCard;
