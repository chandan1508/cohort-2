const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-check", function(req, res) {
   const kidney=req.body.kidney;
   const response = schema.safeParse(kidney);
   if(!response.success){
      res.status(411).json({
         msg: "input is invalid"
      })
   }
   res.send({
    response
   })
});

app.listen(3000);