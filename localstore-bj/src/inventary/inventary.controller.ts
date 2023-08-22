import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { InventaryService } from './inventary.service';
import { Inventary } from './inventary.interface';

//Se encarga de recibir los pedidos al backend.
//Controla el ruteo, y los detalles de la comunicacion entre si.
//Pueden existir varios controladores, y pueden haber varias rutas
//relacionadas entre si.
@Controller('inventary')
export class InventaryController {
    //Declaras las dependencias que necesitas en el constructor.
    constructor(private readonly inventaryService: InventaryService) { }

    @Get()
    getInvtry(): Promise<Inventary[]> {
        return this.inventaryService.getInvtry();
    }

    @Get(':id')
    getInvtryById(@Param('id') id: number): Promise<Inventary> {
        return this.inventaryService.getInvtryById(id)
    }

    @Post()
    createInvtry(@Body() invtry: Inventary): Promise<Inventary> {
        return this.inventaryService.createInvtry(invtry)
    }

    @Delete(':id')
    deleteInvtryById(@Body() id: number): Promise<Inventary> {
        return this.inventaryService.getInvtryById(id)
    }

    @Put(':id')
    updateInvtryById(@Param('id') id: number, @Body() invtry: Inventary): Promise<Inventary> {
        return this.inventaryService.updateInvtryById(id, invtry)
    }



}
