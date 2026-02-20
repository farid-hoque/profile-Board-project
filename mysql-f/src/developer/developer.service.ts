import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeveloperService {
    constructor(private readonly prisma: PrismaService) { }
/**
 * 
 * @returns 
 * findall or findOutAll
 */
    async findAll() {
        return await this.prisma.user.findMany()
    }
/**
 * 
 * @param id 
 * @returns 
 * findsingle or findoutSingle
 */
    async findOne(id:number) {
        return await this.prisma.user.findFirst({where:{id:id}})
    }
/**
 * 
 * @param data 
 * @returns 
 * create or post
 */
    async create(data) {
        return await this.prisma.user.create({
            data: data,
        });
    }
/**
 * 
 * @param id 
 * @returns 
 * REMOVE OR delete
 */
    async remove(id:number) {
        return await this.prisma.user.delete({
            where: {id:id},
        });
    }
}
