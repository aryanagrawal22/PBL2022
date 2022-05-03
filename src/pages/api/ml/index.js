import nc from "next-connect";
import cors from "cors";
import mlJSON from "../../../data/ml.json";

const experienceIndex = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    res.send({status:true, ml: mlJSON});
  });

export default experienceIndex;