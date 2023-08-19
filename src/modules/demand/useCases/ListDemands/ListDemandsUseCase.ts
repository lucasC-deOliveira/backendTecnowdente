import { inject, injectable } from "tsyringe";
import { Demand } from "../../entities/Demand";
import { IDemandsRepository, IListDemandsDTO } from "../../repositories/IDemandsRepository";

@injectable()
class ListDemandsUseCase {
    constructor(
        @inject("DemandsRepository")
        private demandsRepository: IDemandsRepository) { }

    async execute(page: number): Promise<IListDemandsDTO> {
        const demands = await this.demandsRepository.list(page)

        return demands
    }
}

export { ListDemandsUseCase }