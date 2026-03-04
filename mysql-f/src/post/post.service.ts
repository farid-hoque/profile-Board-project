import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { CreatePostDto } from './dto/create-post.dto';
// import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) { }
  /**
   * create a new post with user relation
   * @param data 
   * @returns 
   */
  async create(data ) {
    return await this.prisma.post.create({
      data: {
        title: data.title,
        coment: data.coment,
        image: data.image,
        authorId: Number(data.authorId)
      }
    })
  }

  /**
   * find all posts with author details
   * @returns 
   */
 async findAll() {
   return await this.prisma.post.findMany({
     include: {
       author: true, // এটি দিলে পোস্টের সাথে লেখকের নাম-ছবিও চলে আসবে
     },
     orderBy: {
       createdAt: 'desc' // নতুন পোস্টগুলো আগে দেখাবে
     }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, ) {
    return `This action updates a #${id} post`;
  }

  /**
   * @delete of @remove
   * @param id 
   * @returns 
   */
 async remove(id: number) {
   return await this.prisma.post.delete({
      where:{id:id}
    })
  }
}
