import {
  IsString,
  IsDateString,
  ArrayMinSize,
  IsEnum,
  IsArray,
  IsUUID,
  IsInt,
  Min,
} from 'class-validator';

enum OrderState {
  Pendente = 'Pendente',
  Entregue = 'Entregue',
  Finalizado = 'Finalizado',
}

class Service {
  @IsUUID()
  id: string;

  @IsInt()
  @Min(1)
  quantity: number;
}

export class CreateDemandInputClassValidator {
  @IsString()
  client_id: string;

  @IsString()
  patient: string;

  @IsString()
  type: string;

  @IsDateString()
  deadline: Date;

  @IsArray()
  @ArrayMinSize(1)
  services: Service[];

  @IsEnum(OrderState)
  state: 'Pendente' | 'Entregue' | 'Finalizado';

  @IsString()
  observations: string;
}
