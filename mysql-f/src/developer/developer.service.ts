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
 * create or post as a Post() Method
 */
    async create(data) {
        return await this.prisma.user.create({
            data: data,
        });
    }


    /**
     * update(method)
     * @param id 
     * @param data 
     * @returns 
     */
    async update(id:number,data) {
        return await this.prisma.user.update({
            where: { id: id },
            data: {
                name: data.name,
                email: data.email,
                location: data.location,
                phone: data.phone,
                // যদি ডাটাতে ফটো থাকে তবেই আপডেট হবে
                ...(data.photo && {photo:data.photo})

            },
        })
    }

/**
 * 
 * @param id 
 * @returns 
 * REMOVE OR delete use Delete()-Method
 */
    async remove(id:number) {
        return await this.prisma.user.delete({
            where: {id:id},
        });
    }
}
