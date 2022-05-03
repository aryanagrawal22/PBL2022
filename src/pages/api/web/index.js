import nc from "next-connect";
import cors from "cors";
import webJSON from "../../../data/web.json";

const experienceIndex = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    res.send({status:true, web: webJSON});
  });

export default experienceIndex;