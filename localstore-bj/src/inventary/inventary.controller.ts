import { Controller, Get, Param } from '@nestjs/common';
import { InventaryService } from './inventary.service';
import { Inventary } from './inventary.interface';

//Se encarga de recibir los pedidos al backend.
//Controla el ruteo, y los detalles de la comunicacion entre si.
//Pueden existir varios controladores, y pueden haber varias rutas
//relacionadas entre si.
@Controller('inventary')
export class InventaryController {
    //Declaras las dependencias que necesitas en el constructor.
    constructor(private readonly inventaryService: InventaryService) {}

    @Get()
    getInventary(): Promise<Inventary[]>{
        return this.inventaryService.getInventary();
    }

    @Get(':id')
    getInventaryById(@Param('id') id:number): Promise<Inventary>{
        return this.inventaryService.getInventaryById(id)
    }

}
