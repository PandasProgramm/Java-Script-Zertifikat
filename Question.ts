"use strict"
export class Question{

    public constructor(private _question:string, private _answer) {
    }
    public get question(): string {
        return this._question;
    }
    public get answer():string {
        return this._answer;
    }
}
