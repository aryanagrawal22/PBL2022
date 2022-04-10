import nc from "next-connect";
import cors from "cors";
import domainJSON from "../../../data/domain.json";

const homeIndex = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    res.send({status:true, domain: domainJSON});
  });

export default homeIndex;