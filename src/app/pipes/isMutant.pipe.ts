import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name : 'status'})
export class isMutant implements PipeTransform {

    transform(value: any) {
        var status = "SIN MUTACIÓN";
        if(value === true) {
            status = "CON MUTACIÓN";
        }
        return status;
    }

}