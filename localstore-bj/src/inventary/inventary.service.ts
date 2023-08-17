import { Injectable } from '@nestjs/common';
const URL_inventary = 'http://localhost:3030/api/inventary/'
import { Inventary } from './inventary.interface';

//inventary.service se encarga de almacenar y devolver datos.
//Aqui se implementa la logica de negocio.
//NUNCA debe ir en el controller.
@Injectable()
export class InventaryService {
    async getInventary(): Promise<Inventary[]> {
        const res = await fetch(URL_inventary);
        const parsed = await res.json();
        return parsed;
    }

    async getInventaryById(id: number): Promise<Inventary> {
        const res = await fetch(URL_inventary + id);
        const parsed = await res.json();
        return parsed;
    }
}
