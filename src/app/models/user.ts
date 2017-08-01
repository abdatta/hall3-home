export class User {
    constructor(
        public _id?: string,
        public name?: string,
        public username?: string,
        public levelsCurrent?: Array<string>,
        public levelsRequested?: Array<string>
    ) { }
}
