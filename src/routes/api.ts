import express from "express"
import { authMiddleware } from "../middlware/auth-middleware"
import { AuthController } from "../controllers/user-controller"
import { IngredientController } from "../controllers/ingredient-controller"
import { RecipeController } from "../controllers/recipe-controller"

export const apiRouter = express.Router()
apiRouter.use(authMiddleware)

apiRouter.post("/api/logout", AuthController.logout)
apiRouter.post("/api/ingredient", IngredientController.saveIngredient)
// \\d+ means regex to only allow digit as url param
apiRouter.get("/api/ingredient", IngredientController.getAllIngredients)
apiRouter.put("/api/ingredient/:id(\\d+)", IngredientController.updateIngredient)
apiRouter.delete("/api/ingredient/:id(\\d+)", IngredientController.deleteIngredient)
apiRouter.post("/api/recipes", RecipeController.getAllRecipes)
apiRouter.get("/api/recipe/:id(\\d+)", RecipeController.getRecipeById)
