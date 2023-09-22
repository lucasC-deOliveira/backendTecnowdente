import { Request, Response } from "express";
import { container } from "tsyringe"
import { ShowDashboardUseCase } from "./showDashboarUsecase";


class ShowDashboardController {

    async handle(_: Request, response: Response): Promise<Response> {
        const showDashboardUseCase = container.resolve(ShowDashboardUseCase)

        const dashboard = await showDashboardUseCase.execute()

        return response.json(dashboard);
    }
}

export { ShowDashboardController }