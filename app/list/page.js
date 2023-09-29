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
          <Link href={`/detail/${element._id}`}>
            <div className="list-item" key={index}>
              <h4>{element.title}</h4>
              <p>{element.content}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
