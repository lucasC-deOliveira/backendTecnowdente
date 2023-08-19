import { inject, injectable } from "tsyringe";
import { IDemandsRepository } from "../../repositories/IDemandsRepository";
import { Demand } from "../../entities/Demand";
import { AppError } from "../../../../errors/AppError";

@injectable()
export class GetDemandByIdUseCase {
  constructor(
    @inject("DemandsRepository")
    private demandsRepository: IDemandsRepository) { }

  async execute(id: string): Promise<Demand> {
    if (!id) {
      throw new AppError("você deve informar o id")
    }

    const demanda = await this.demandsRepository.findById(id)

    return demanda
  }
}