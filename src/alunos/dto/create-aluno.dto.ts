import {IsNotEmpty} from 'class-validator';

export class CreateAlunoDto{
  @IsNotEmpty()
  nome:string;

  @IsNotEmpty()
  data_nascimento:string;

  @IsNotEmpty()
  cpf: number;

  @IsNotEmpty()
  nota: number;
}