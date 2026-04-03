import express from "express"
const router = express.Router();
router.get("/send",(req,res)=>{
  res.send("Message sending api")
})
export default router