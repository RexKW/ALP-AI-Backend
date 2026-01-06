import { z, ZodType } from "zod"

export class IngredientValidation {
    static readonly CREATE: ZodType = z.object({
        name        : z.string().min(1).max(100),
        team_1_id   : z.number().positive(),
        team_2_id   : z.number().positive(),
        type        : z.string().min(1).max(100)
    })

    static readonly UPDATE: ZodType = z.object({
        id          : z.number().positive(),
        team_score_1: z.number().nonnegative(),
        team_score_2: z.number().nonnegative(),
        status      : z.string().min(1).max(100)
    })
}