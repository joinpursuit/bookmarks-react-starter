import BookmarkNewForm from "../Components/BookmarkNewForm";

function New({ addBookmarks }) {
  return (
    <div className="New">
      <h2>New</h2>
      <BookmarkNewForm addBookmarks={addBookmarks} />
    </div>
  );
}

export default New;
