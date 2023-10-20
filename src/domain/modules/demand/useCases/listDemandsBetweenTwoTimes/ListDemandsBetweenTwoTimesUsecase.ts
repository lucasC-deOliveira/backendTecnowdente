// import { inject, injectable } from 'tsyringe';

// @injectable()
// class ListDemandsBetweenTwoTimesUseCase {
//   constructor(
//     @inject('DemandsRepository')
//     private demandRepository: IDemandsRepository,
//   ) {}
//   async execute(id: string): Promise<void> {
//     const demandExists = await this.demandRepository.findById(id);

//     if (!demandExists) {
//       throw new Error('Demand not exists!');
//     }

//     await this.demandRepository.remove(id);
//   }
// }

// export { ListDemandsBetweenTwoTimesUseCase };
