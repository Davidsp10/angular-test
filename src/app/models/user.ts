import { Human } from './human';

export class User {
    constructor (
        public _id: Number,
        public nick: String,
        public password: String,
        public humans: Human[]
    ) {
        
    }
}

