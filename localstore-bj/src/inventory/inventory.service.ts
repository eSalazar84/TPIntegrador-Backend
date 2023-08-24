import { Injectable } from '@nestjs/common';
const URL_inventory = 'http://localhost:3030/inventory'
import { Inventory } from './inventory.interface';

//inventary.service se encarga de almacenar y devolver datos.
//Aqui se implementa la logica de negocio.
//NUNCA debe ir en el controller.
@Injectable()
export class InventoryService {

    private async setId(): Promise<number> {
        const invtry = await this.getInvtry();
        const lastInvtry = invtry[invtry.length - 1];
        const id = lastInvtry.id + 1
        // se puede reducir con 
        //const id = invtry.pop().id + 1;
        return id;
    }

    private async getAll(): Promise<Inventory[]> {
        const res = await fetch(URL_inventory);
        const parsed = await res.json();
        return parsed;
    }

    async getInvtry(): Promise<Inventory[]> {
        try {
            return this.getAll();
        } catch (err) {
            throw new Error(err);
        }
    }

    async getInvtryById(id: number): Promise<Inventory> {
        try {
            const res = await fetch(URL_inventory + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const parsed = await res.json();
            return parsed;
        } catch (err) {
            throw new Error(err);
        }
    }

    async createInvtry(invtry: Inventory): Promise<Inventory> {
        try {
            const id = await this.setId();
            const newInvtry = { ...invtry, id };
            const res = await fetch(URL_inventory, {
                method: 'POST',
                headers: {
                    'Content-Type:': 'application/json',
                },
                body: JSON.stringify(newInvtry)
            });
            const parsed = await res.json();
            return parsed;
        } catch (err) {
            throw new Error(err);
        }
    }

    async deleteInvtryById(id: number): Promise<Inventory> {
        try {
            const res = await fetch(URL_inventory + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const parsed = await res.json();
            return parsed;
        } catch (err) {
            throw new Error(err);
        }
    }

    async updateInvtryById(id: number, invtry: Inventory): Promise<Inventory> {
        try {
            const isInvtry = await this.getInvtryById(id);
            //Object.keys verifica si isInvtry viene con datos, y si no, se detiene ahi.
            if (!Object.keys(isInvtry).length) return;
            const updateInvtry = { ...invtry, id };
            const res = await fetch(URL_inventory, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateInvtry)
            })
            const parsed = await res.json();
            return parsed;
        } catch (err) {
            throw new Error(err)
        }
    }
}
