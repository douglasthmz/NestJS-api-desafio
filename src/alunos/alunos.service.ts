import { Injectable } from '@nestjs/common';
import { Aluno } from './aluno.model';
import * as uuid from 'uuid/v1';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { GetAlunosFilterDto, Criterio } from './dto/get-alunos-filter.dto';
@Injectable()
export class AlunosService {
  private alunos: Aluno[] = [];

  getAllAlunos(): Aluno[] {
    return this.alunos;

  }

  getAlunoById(id: string):Aluno {
    return this.alunos.find(aluno=> aluno.id === id);
  }

  getFilteredAlunos(getAlunosFilterDto: GetAlunosFilterDto):Aluno[]{
    const {nota, criterio} = getAlunosFilterDto;
    if (criterio === Criterio.LESSER){
      const LessArray = this.alunos.filter(aluno=>aluno.nota<nota);
      return LessArray;
    } else {
      const GreatArray = this.alunos.filter(aluno=>aluno.nota>nota);
      return GreatArray;
    }
  }

  createAluno(createAlunoDto: CreateAlunoDto): Aluno {
    const { nome, data_nascimento, cpf, nota } = createAlunoDto;

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

  updateAluno(id: string, createAlunoDto: CreateAlunoDto): Aluno {
    const { nome, data_nascimento, cpf, nota } = createAlunoDto;

    this.alunos = this.alunos.filter(aluno=>aluno.id!==id);

    const aluno: Aluno = {
      id,
      nome,
      data_nascimento,
      cpf,
      nota,
    };

    this.alunos.push(aluno);

    return aluno;


  }
  
}
