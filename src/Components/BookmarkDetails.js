import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function BookmarkDetails() {
  const API = process.env.REACT_APP_API_URL;
  const [bookmark, setBookmark] = useState([]);
  let { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // GET request to http//localhost:3003/bookmarks/:index
    // use setBookmark to change our current bookmark
    // to get data we get back
    axios
      .get(`${API}/bookmarks/${index}`)
      .then((response) => setBookmark(response.data));
  }, []);

  const handleDelete = () => {
    // make a delete request to /bookmark/:index
    axios
      .delete(`${API}/bookmarks/${index}`)
      .then(() => navigate(`/bookmarks`));
    // redirect them to back to /bookmarks
  };

  return (
    <article>
      <h3>
        {bookmark.isFavorite ? <span>⭐️</span> : null} {bookmark.name}
      </h3>
      <h5>
        <span>
          <a href={bookmark.url}>{bookmark.name}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {bookmark.url}
      </h5>
      <h6>{bookmark.category}</h6>
      <p>{bookmark.description}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/bookmarks`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/bookmarks/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default BookmarkDetails;
