export class Book {
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public get author(): string {
        return this._author;
    }
    public set author(value: string) {
        this._author = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get cover(): string {
        return this._cover;
    }
    public set cover(value: string) {
        this._cover = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    constructor(
        private _id: string,
        private _title: string,
        private _author: string,
        private _price: number,
        private _cover: string,
        private _description: string
    ){}
}
