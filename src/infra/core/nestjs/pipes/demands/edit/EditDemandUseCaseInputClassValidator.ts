import { EditDemandUseCaseInput } from 'src/domain/modules/demand/useCases/editDemand/adapters/input/EditDemandUseCaseInput';
import {
  IsString,
  IsArray,
  IsUUID,
  IsNotEmpty,
  IsNumber,
  IsDateString,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class Service {
  @IsUUID()
  id: string;

  @IsNumber()
  quantity: number;
}

export class EditDemandUseCaseInputClassValidator extends EditDemandUseCaseInput {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  client_id: string;

  @IsString()
  @IsNotEmpty()
  patient: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Service)
  services: Service[];

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsDateString()
  @IsNotEmpty()
  deadline: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsOptional()
  @IsString()
  observations?: string;
}
