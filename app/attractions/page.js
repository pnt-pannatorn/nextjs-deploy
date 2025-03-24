import React from "react";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3001/api/attractions");
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="container">
      <h1 className="title">Attractions</h1>
      <ul className="attraction-list">
        {data.map((attraction) => (
          <li key={attraction.id} className="attraction-card">
            <img
              src={attraction.coverimage}
              alt={attraction.name}
              className="attraction-image"
            />
            <div className="attraction-info">
              <h2>{attraction.name}</h2>
              <Link
                href={`/attractions/${attraction.id}`}
                className="read-more"
              >
                Read More
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
