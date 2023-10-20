// import { Request, Response } from 'express';
// import { container } from 'tsyringe';
// import { ListReportByIDUseCase } from './listByIdUseCase';

// class ListReportByIDController {
//   async handle(request: Request, response: Response): Promise<Response> {
//     const { id } = request.params;

//     const listReportByIDUseCase = container.resolve(ListReportByIDUseCase);

//     const reports = await listReportByIDUseCase.execute(id);

//     return response.status(201).json(reports);
//   }
// }

// export { ListReportByIDController };
