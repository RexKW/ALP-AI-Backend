import app from "./application/app"
import { logger } from "./application/logging"

// Change localhost to 0.0.0.0 to allow access from any network
app.listen(3000, '0.0.0.0', () => {
    logger.info("Listening on http://0.0.0.0:3000")
})
