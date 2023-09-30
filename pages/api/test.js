import { connectDB } from "@/util/database";

export default async function handler(request, response) {
  const db = (await connectDB).db("forum");
  if ((request.method = "POST")) {
    try {
      const { title, content } = request.body;

      // MongoDB에 데이터 저장
      const result = await db.collection("post").insertOne({
        title,
        content,
      });

      return response
        .status(201)
        .json({ message: "게시물이 성공적으로 작성되었습니다." });
    } catch (error) {
      console.error("게시물 작성 중 오류:", error);
      return response
        .status(500)
        .json({ message: "서버 오류로 게시물을 작성하지 못했습니다." });
    }
  }

  return response.status(200).json("처리완료");
}
