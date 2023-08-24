import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { Inventory } from './inventory.interface';

//Se encarga de recibir los pedidos al backend.
//Controla el ruteo, y los detalles de la comunicacion entre si.
//Pueden existir varios controladores, y pueden haber varias rutas
//relacionadas entre si.
@Controller('inventory')
export class InventoryController {
    //Declaras las dependencias que necesitas en el constructor.
    constructor(private readonly inventoryService: InventoryService) { }

    @Get()
    getInvtry(): Promise<Inventory[]> {
        return this.inventoryService.getInvtry();
    }

    @Get(':id')
    getInvtryById(@Param('id') id: number): Promise<Inventory> {
        return this.inventoryService.getInvtryById(id)
    }

    @Post()
    createInvtry(@Body() invtry: Inventory): Promise<Inventory> {
        return this.inventoryService.createInvtry(invtry)
    }

    @Delete(':id')
    deleteInvtryById(@Body() id: number): Promise<Inventory> {
        return this.inventoryService.getInvtryById(id)
    }

    @Put(':id')
    updateInvtryById(@Param('id') id: number, @Body() invtry: Inventory): Promise<Inventory> {
        return this.inventoryService.updateInvtryById(id, invtry)
    }

}
