import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return (
    <div className="list-bg">
      {result.map((element, index) => {
        return (
          <div className="list-item" key={index}>
            <Link prefetch={false} href={`/detail/${element._id}`}>
              <h4>{element.title}</h4>
            </Link>
            <p>{element.content}</p>
            <Link href={`/edit/${element._id}`}>수정</Link>
          </div>
        );
      })}
    </div>
  );
}
