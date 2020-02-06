import { Controller, Get, Post, Body, Param, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { Aluno } from './aluno.model';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { GetAlunosFilterDto } from './dto/get-alunos-filter.dto';

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

  @Get('/:nota/criterio/:criterio')
  getFilteredAlunos(@Param() GetAlunosFilterDto: GetAlunosFilterDto):Aluno[]{
    return this.alunosService.getFilteredAlunos(GetAlunosFilterDto);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createAluno(@Body() createAlunoDto: CreateAlunoDto):Aluno {
    return this.alunosService.createAluno(createAlunoDto);
  }

  @Put('/:id')
  updateAluno(@Param('id') id: string, @Body() createAlunoDto: CreateAlunoDto):Aluno{
    return this.alunosService.updateAluno(id, createAlunoDto);
  }


}
