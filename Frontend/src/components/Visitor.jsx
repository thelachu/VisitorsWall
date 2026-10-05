import { useEffect, useState } from "react";

import {
  createVisitor,
  getVisitorById,
  updateVisitor,
} from "../services/VisitorService";

import { useNavigate, useParams } from "react-router-dom";

function Visitor({ showToast }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    description: "",
    imageUrl: "",
  });

  const { id } = useParams();

  const navigate = useNavigate();

  /* Load visitor while editing */

  useEffect(() => {
    if (id) {
      getVisitorById(id)
        .then((response) => {
          setName(response.data.name ?? "");
          setUsername(response.data.username ?? "");
          setDescription(response.data.description ?? "");
          setImageUrl(response.data.imageUrl ?? "");
        })

        .catch((error) => {
          showToast(
            error.response?.data?.message || "Unable to load Visitors.",
            "errpr",
          );
        });
    }
  }, [id]);

  /* Validation */

  function validateForm() {
    let valid = true;

    const errorsCopy = {
      ...errors,
    };

    if (name.trim()) {
      errorsCopy.name = "";
    } else {
      errorsCopy.name = "Name is required!";
      valid = false;
    }

    if (username.trim()) {
      errorsCopy.username = "";
    } else {
      errorsCopy.username = "Username is required!";
      valid = false;
    }

    if (description.trim()) {
      errorsCopy.description = "";
    } else {
      errorsCopy.description = "Description is required!";
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  function saveVisitor(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const visitor = {
      name,
      username,
      description,
      imageUrl,
    };

    if (id) {
      updateVisitor(id, visitor)
        .then(() => {
          navigate("/Visitors");
        })

        .catch((error) => {
          showToast(
            error.response?.data?.message || "Unable to load Visitors.",
            "errpr",
          );
        });
    } else {
      createVisitor(visitor)
        .then(() => {
          navigate("/Visitors");
        })

        .catch((error) => {
          showToast(
            error.response?.data?.message || "Unable to load Visitors.",
            "errpr",
          );
        });
    }
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-center fw-bold mb-4">Update Visitor</h2>;
    }

    return <h2 className="text-center fw-bold mb-4">Add Visitor</h2>;
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              {pageTitle()}

              <form onSubmit={saveVisitor}>
                {/* Name */}

                <div className="mb-3">
                  <label className="form-label fw-semibold">Name</label>

                  <input
                    type="text"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);

                      if (e.target.value.trim()) {
                        setErrors((prev) => ({
                          ...prev,
                          name: "",
                        }));
                      }
                    }}
                  />

                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                {/* Username */}

                <div className="mb-3">
                  <label className="form-label fw-semibold">Username</label>

                  <input
                    type="text"
                    className={`form-control ${
                      errors.username ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Instagram Username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);

                      if (e.target.value.trim()) {
                        setErrors((prev) => ({
                          ...prev,
                          username: "",
                        }));
                      }
                    }}
                  />

                  {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}
                </div>

                {/* Description */}

                <div className="mb-3">
                  <label className="form-label fw-semibold">Description</label>

                  <textarea
                    rows="4"
                    className={`form-control ${
                      errors.description ? "is-invalid" : ""
                    }`}
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);

                      if (e.target.value.trim()) {
                        setErrors((prev) => ({
                          ...prev,
                          description: "",
                        }));
                      }
                    }}
                  />

                  {errors.description && (
                    <div className="invalid-feedback">{errors.description}</div>
                  )}
                </div>

                {/* Image URL */}

                <div className="mb-4">
                  <label className="form-label fw-semibold">Image URL</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />

                  <div className="form-text">Enter a valid image URL.</div>
                </div>

                {/* Image Preview */}

                {imageUrl && (
                  <div className="mb-4 text-center">
                    <img
                      src={imageUrl}
                      alt="Preview"
                      className="img-fluid rounded shadow-sm"
                      style={{
                        maxHeight: "220px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}

                {/* Submit */}

                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-success px-4">
                    {id ? "Update Visitor" : "Submit"}
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary px-4"
                    onClick={() => navigate("/Visitors")}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visitor;
