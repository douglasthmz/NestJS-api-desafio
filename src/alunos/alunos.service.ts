import { Injectable } from '@nestjs/common';
import { Aluno } from './aluno.model';
import * as uuid from 'uuid/v1';
import { CreateAlunoDto } from './dto/create-aluno.dto';
@Injectable()
export class AlunosService {
  private alunos: Aluno[] = [];

  getAllAlunos(): Aluno[] {
    return this.alunos;

  }

  getAlunoById(id: string):Aluno {
    return this.alunos.find(aluno=> aluno.id === id);
  }

  createAluno(createAlunoDto: CreateAlunoDto): Aluno {
    const { nome, data_nascimento, cpf, nota } = createAlunoDto

    const aluno: Aluno = {
      id: uuid(),
      nome,
      data_nascimento,
      cpf,
      nota,
    };

    this.alunos.push(aluno);
    return aluno;
  }
  
}
