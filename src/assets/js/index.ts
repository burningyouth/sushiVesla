type User = {name: string, job: string, salary?:number, toString?: () => string, valueOf?: () => any}

let user: User = {
    name: "Name",
    job: 'Undefined',
    salary: 2000,
    toString() {
        return `${this.name} ${this.job}`;
    }
}

namespace Util{
    export enum Job {
        first,
        second,
        third = 20,
        fourth,
    }
    
    export class Test {
        constructor(private _text: string){
        };
        get text() {
            return this._text;
        };
    }
}

let test = new Util.Test('матюк2');
console.log(test.text);
console.log(user+'');
