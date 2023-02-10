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

class Order {
    private _client: Client;
    private _items: Item[];
    private _payment: string;

    constructor(client: Client, items: Item[], payment: string) {
        this._client = client;
        this._items = items;
        this._payment = payment;
    }
}