import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { Aluno } from './aluno.model';
import { CreateAlunoDto } from './dto/create-aluno.dto';

@Controller('alunos')
export class AlunosController {
  constructor(private alunosService: AlunosService) { }
  @Get()
  getAllAlunos(): Aluno[] {
    return this.alunosService.getAllAlunos();
  }

  @Get('/:id')
  getAlunoById(@Param('id') id: string):Aluno{
    return this.alunosService.getAlunoById(id);
  }

  @Post()
  createAluno(@Body() createAlunoDto: CreateAlunoDto):Aluno {
    return this.alunosService.createAluno(createAlunoDto);
  }

}
