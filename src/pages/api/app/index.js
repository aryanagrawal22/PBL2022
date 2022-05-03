import nc from "next-connect";
import cors from "cors";
import appJSON from "../../../data/app.json";

const experienceIndex = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    res.send({status:true, app: appJSON});
  });

export default experienceIndex;