import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { clientRoutes } from "./clients.routes";
import { demandsRoutes } from "./demands.routes";
import { reportRoutes } from "./reports.routes";
import { serviceRoutes } from "./services.routes";
import { usersRoutes } from "./user.routes";

const router = Router();

router.use("/demands", demandsRoutes);

router.use("/clients", clientRoutes)

router.use('/services', serviceRoutes)

router.use('/users', usersRoutes)

router.use('/reports', reportRoutes)

router.use(authenticateRoutes)

export { router }

