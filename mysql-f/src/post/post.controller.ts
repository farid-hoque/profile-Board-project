import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';
// import { CreatePostDto } from './dto/create-post.dto';
// import { UpdatePostDto } from './dto/update-post.dto';

@Controller('post') // আপনার এপিআই এন্ডপয়েন্ট হবে /post
export class PostController {
  constructor(private readonly postService: PostService) {}
/**
 * 
 * @param data 
 * @returns create a new post
 */
  @Post()
  create(@Body() data) {
    return this.postService.create(data );
  }
/**
 * 
 * @returns find all posts with author details.
 */
  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body()  data) {
    return this.postService.update(+id,  );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
