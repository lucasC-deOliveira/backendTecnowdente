// import { Request, Response } from "express"

// import { container } from "tsyringe"
// import { ListDemandsBetweenTwoTimesUseCase } from "./ListDemandsBetweenTwoTimesUsecase"

// class ListDemandsBetweenTwoTimesController {

//   async handle(request: Request, response: Response): Promise<Response> {
//     const { id } = request.params

//     const listDemandsBetweenTwoTimesUseCase = container.resolve(ListDemandsBetweenTwoTimesUseCase)

//     await listDemandsBetweenTwoTimesUseCase.execute(id)

//     return response.status(201).send()
//   }
// }

// export { ListDemandsBetweenTwoTimesController }
