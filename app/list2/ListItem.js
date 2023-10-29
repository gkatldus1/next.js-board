"use client";
import Link from "next/link";

export default function LIstItem({ result }) {
  return (
    <div>
      {result.map((element, index) => {
        return (
          <div className="list-item" key={index}>
            <Link prefetch={false} href={`/detail/${element._id}`}>
              <h4>{element.title}</h4>
            </Link>
            <p>{element.content}</p>
            <Link href={`/edit/${element._id}`}>수정</Link>
            <div
              onClick={(e) => {
                fetch("/api/post/delete", {
                  method: "POST",
                  body: element._id,
                })
                  .then((r) => r.json())
                  .then(() => {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  });
              }}
            >
              🗑️
            </div>
          </div>
        );
      })}
    </div>
  );
}
