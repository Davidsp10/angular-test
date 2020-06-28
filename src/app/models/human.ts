import { Ngbase } from './ngbase'; 

export class Human {
    constructor(
        public _id: number,
        public name: String,
        public dna: Ngbase[],
        public mutant: Boolean,
        public date: any
    ) {

    }
}