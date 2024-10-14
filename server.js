const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const userController = require("./controllers/UserController");
const foodTypeController = require("./controllers/FoodTypeController");
const foodSizeController = require("./controllers/FoodSizeController");
const tasteController = require("./controllers/TasteController");
const foodController = require("./controllers/FoodController");
const saleTempController = require("./controllers/SaleTempController");
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/uploads", express.static("./uploads"));
//SaleTemp
app.put("/api/saleTemp/changeQty", (req, res) =>
  saleTempController.changeQty(req, res)
);
app.delete("/api/saleTemp/remove/:foodId/:userId", (req, res) =>
  saleTempController.remove(req, res)
);
app.delete("/api/saleTemp/clear/:userId", (req, res) =>
  saleTempController.clear(req, res)
);
app.get("/api/saleTemp/list/:userId", (req, res) =>
  saleTempController.list(req, res)
);
app.post("/api/saleTemp/create", (req, res) =>
  saleTempController.create(req, res)
);
//Food
app.get("/api/food/filter/:foodType", (req, res) =>
  foodController.filter(req, res)
);
app.put("/api/food/update", (req, res) => foodController.update(req, res));
app.delete("/api/food/remove/:id", (req, res) =>
  foodController.remove(req, res)
);
app.get("/api/food/list", (req, res) => foodController.list(req, res));
app.post("/api/food/upload", (req, res) => foodController.upload(req, res));
app.post("/api/food/create", (req, res) => foodController.create(req, res));
//Taste
app.put("/api/taste/update", (req, res) => tasteController.update(req, res));
app.delete("/api/taste/remove/:id", (req, res) =>
  tasteController.remove(req, res)
);
app.get("/api/taste/list", (req, res) => tasteController.list(req, res));
app.post("/api/taste/create", (req, res) => tasteController.create(req, res));
//FoodSize
app.get("/api/foodSize/filter/:foodTypeId", (req, res) =>
  foodSizeController.filter(req, res)
);
app.put("/api/foodSize/update", (req, res) =>
  foodSizeController.update(req, res)
);
app.delete("/api/foodSize/remove/:id", (req, res) =>
  foodSizeController.remove(req, res)
);
app.get("/api/foodSize/list", (req, res) => foodSizeController.list(req, res));
app.post("/api/foodSize/create", (req, res) =>
  foodSizeController.create(req, res)
);
//FoodType
app.put("/api/foodType/update", (req, res) =>
  foodTypeController.update(req, res)
);
app.delete("/api/foodType/remove/:id", (req, res) =>
  foodTypeController.remove(req, res)
);
app.get("/api/foodType/list", (req, res) => foodTypeController.list(req, res));
app.post("/api/foodType/create", (req, res) =>
  foodTypeController.create(req, res)
);
//User
app.post("/api/user/signIn", (req, res) => userController.signin(req, res));
app.listen(3000, () => {
  console.log("API Server Running...");
});
