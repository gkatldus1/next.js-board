import { connectDB } from "@/util/database";

export default async function handler(request, response) {
  if (request.method == "GET") {
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();
    return response.status(200).json(result);
  }

  return response.status(200).json("처리완료");
}
