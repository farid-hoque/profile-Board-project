import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DeveloperService } from './developer.service';

@Controller('developer')
export class DeveloperController {
  constructor(private readonly devService: DeveloperService) { }
/**
 * 
 * @returns 
 * findAll or findAll
 */
  @Get()
  findAll() {
    return this.devService.findAll();
  }
 /**
  * 
  * @param id 
  * @returns 
  * findSingle by single id
  */
  @Get(':id')
  findOne(@Param('id') id: string | number) {
    return this.devService.findOne(+id)
  }
/**
 * 
 * @param data 
 * @returns 
 * post by body or create
 */
  @Post()
  create(@Body() data) {
    return this.devService.create(data);
  }
/**
 * 
 * @param id 
 * @returns 
 * delete by single id
 */
  @Delete(':id')
  remove(@Param('id') id:string) {
    /* + cause id was type of string */
    return this.devService.remove(+id);
  }

}
