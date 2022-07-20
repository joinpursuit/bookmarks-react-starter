import { useState, useEffect } from "react";
import Bookmark from "./Bookmark";
import axios from "axios";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/bookmarks`)
      .then((response) => setBookmarks(response.data));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`${API}/bookmarks`)
  //     .then((response) => {
  //       console.log(response);
  //       console.log(response.data);
  //       setBookmarks(response.data);
  //     })
  //     .catch((e) => console.log("catch", e));
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(`${API}/bookmarks`);
  //     setBookmarks(response.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="Bookmarks">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this bookmark</th>
            </tr>
          </thead>
          <tbody>
            {bookmarks.map((bookmark, index) => {
              return <Bookmark key={index} bookmark={bookmark} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Bookmarks;
