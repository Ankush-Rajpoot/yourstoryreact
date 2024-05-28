import { useEffect, useState } from "react";

export default function UserDetails() {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/userDetails", {
      credentials: "include",
    }).then((response) => {
      response.json().then((elem) => {
        setDetails(elem);
      });
    });
  }, []);

  console.log(details);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <p>
          <strong>Username:</strong> {details.username}
        </p>
        <p>
          <strong>Email:</strong> {details.email}
        </p>
        <div>
          <strong>Cover Image:</strong>
          <br />
          <img
            src={`http://localhost:4000/${details.cover.replace(/\\/g, "/")}`}
            alt="Cover"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
