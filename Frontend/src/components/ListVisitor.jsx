import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listVisitors } from "../services/VisitorService";
import "./ListVisitor.css";

function ListVisitor({ showToast }) {
  const [visitors, setVisitors] = useState([]);

  const navigate = useNavigate();

  // FETCH VISITORS From DB

  useEffect(() => {
    listVisitors()
      .then((response) => {
        const data =
          Array.isArray(response.data) ?
            response.data
          : response.data.content || [];

        setVisitors(data);
      })
      .catch((error) => {
        showToast(
          error.response?.data?.message || "Unable to load Visitors.",
          "error",
        );
      });
  }, []);

  // ADD VISITOR

  function addVisitor() {
    navigate("/add-visitor");
  }

  // UPDATE VISITOR

  function updateVisitor(id) {
    navigate(`/edit-visitor/${id}`);
  }

  // IMAGE

  function getImage(visitor) {
    if (visitor.imageUrl) {
      return visitor.imageUrl;
    }

    return `https://ui-avatars.com/api/?name=${encodeURIComponent(
      visitor.name || "Visitor",
    )}&background=random&color=fff&size=500`;
  }

  return (
    <div className="visitor-page">
      <div className="container">
        <div className="visitor-header">
          <h1 className="visitor-title">List of Visitors</h1>

          <button className="btn btn-primary add-btn" onClick={addVisitor}>
            + Add Visitor
          </button>
        </div>
      </div>

      <div className="container-fluid">
        <div className="visitor-wall">
          <div className="wall-inner">
            {visitors.length === 0 ?
              <div className="empty-wall">
                <h3>No Visitors Yet</h3>

                <p>Be the first person to leave a note.</p>

                <button className="btn btn-primary" onClick={addVisitor}>
                  Add Visitor
                </button>
              </div>
            : visitors.map((visitor, index) => (
                <div
                  className={`visitor-sticker sticker-${index % 6}`}
                  key={visitor.id}>
                  <div className="pin"></div>

                  <div className="visitor-image-wrapper">
                    <img
                      src={getImage(visitor)}
                      alt={visitor.name}
                      className="visitor-image"
                    />
                  </div>

                  <div className="visitor-content">
                    <h3 className="visitor-name">{visitor.name}</h3>

                    <p className="visitor-description card-text text-wrap text-break mb-3">
                      {visitor.description}
                    </p>

                    <div className="visitor-footer">
                      <a
                        href={`https://www.instagram.com/${visitor.username}/`}
                        target="_blank"
                        rel="noopener norefererr"
                        className="instagram-username link-secondary text-decoration-none">
                        @{visitor.username}
                      </a>
                      {/*<button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => updateVisitor(visitor.id)}>
                        Update
                      </button>*/}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListVisitor;
