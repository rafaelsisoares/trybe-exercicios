class Client {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }
}

class Item {
    private _orderItem: string;
    private _price: number;

    constructor(orderItem: string, price: number) {
        this._orderItem = orderItem;
        this._price = price;
    }
}