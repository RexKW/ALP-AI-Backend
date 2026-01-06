"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlware/auth-middleware");
const user_controller_1 = require("../controllers/user-controller");
const ingredient_controller_1 = require("../controllers/ingredient-controller");
const recipe_controller_1 = require("../controllers/recipe-controller");
exports.apiRouter = express_1.default.Router();
exports.apiRouter.use(auth_middleware_1.authMiddleware);
exports.apiRouter.post("/api/logout", user_controller_1.AuthController.logout);
exports.apiRouter.post("/api/ingredient", ingredient_controller_1.IngredientController.saveIngredient);
// \\d+ means regex to only allow digit as url param
exports.apiRouter.get("/api/ingredient", ingredient_controller_1.IngredientController.getAllIngredients);
exports.apiRouter.put("/api/ingredient/:id(\\d+)", ingredient_controller_1.IngredientController.updateIngredient);
exports.apiRouter.delete("/api/ingredient/:id(\\d+)", ingredient_controller_1.IngredientController.deleteIngredient);
exports.apiRouter.post("/api/recipes", recipe_controller_1.RecipeController.getAllRecipes);
exports.apiRouter.get("/api/recipe/:id(\\d+)", recipe_controller_1.RecipeController.getRecipeById);
