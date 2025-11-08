"use client";

function formatStars(score) {
  if (!score) score = 0;

  if (score > 5) score = 5;
  if (score < 0) score = 0;

  let stars = "★".repeat(score);
  stars += "☆".repeat(5 - score);

  return stars;
}


export default function ProductDetail() {
  return (
    <div className="flex flex-column h-auto justify-center gap-4 m-auto p-[1rem] max-w-[600px]">
      <p className="text-2xl font-bold text-center">Details</p>

      <div className="flex flex-column w-full gap-2 items-center"></div>
    </div>
  );
}
