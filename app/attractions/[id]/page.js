import React from "react";
import Link from "next/link";

async function getData(id) {
  const res = await fetch(`http://localhost:3001/api/attractions/${id}`);
  return res.json();
}

export default async function Page({ params }) {
  const id = params.id;
  const data = await getData(id);

  return (
    <div className="detail-container">
      <div className="image-wrapper">
        <img src={data.coverimage} alt={data.name} className="detail-image" />
      </div>
      <h1 className="detail-title">{data.name}</h1>
      <p className="detail-description">{data.detail}</p>

      {/* ปุ่มกลับไปยังหน้าหลัก */}
      <Link href="/attractions" className="back-button">
        Back to Home
      </Link>
    </div>
  );
}
