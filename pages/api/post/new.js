import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.title == "" || req.body.content == "") {
      return res
        .status(500)
        .json(
          "너 왜 아무것도 안쓰는데 나도 힘들어. 이렇게 코드 몇 줄 더 쓰는거. 알아서 잘하자 앞으로?"
        );
    }
    try {
      const db = (await connectDB).db("forum");
      let result = db.collection("post").insertOne(req.body);
      res.redirect(302, "/list");
    } catch (error) {
      console.error("게시물 작성 중 오류:", error);
      return response
        .status(500)
        .json({ message: "서버 오류로 게시물을 작성하지 못했습니다." });
    }
  }
}
