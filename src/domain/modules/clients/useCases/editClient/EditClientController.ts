// import { Request, response, Response } from 'express';
// import { container } from 'tsyringe';
// import { EditClientUseCase } from './EditClientUseCase';

// class EditClientController {
//   async handle(request: Request, response: Response): Promise<Response> {
//     const { id, name, cnpj } = request.body;

//     const editClientUseCase = container.resolve(EditClientUseCase);

//     await editClientUseCase.execute(id, { name, cnpj });

//     return response.status(200).send();
//   }
// }

// export { EditClientController };
