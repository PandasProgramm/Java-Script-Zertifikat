"use strict"

export class User{
    constructor(private _userName:string) {
    }
    public get userName():string{
        return this._userName;
    }
}
