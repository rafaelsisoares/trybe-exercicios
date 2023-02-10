class Client {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }
}

class Item {
    private _orderItem: string;
    private _price: number;

    constructor(orderItem: string, price: number) {
        this._orderItem = orderItem;
        this._price = price;
    }

    get price(): number {
        return this._price;
    }
}

class Order {
    private _client: Client;
    private _items: Item[];
    private _payment: string;
    private _discount: number;

    constructor(client: Client, items: Item[], payment: string, discount: number) {
        this._client = client;
        this._items = items;
        this._payment = payment;
        this._discount = discount;
    }

    total(): string {
        const total = this._items.reduce((sum, item) => sum + item.price, 0);
        return `${this._client.name}, o total do seu pedido é: ${total}, o método de pagamento escolhido foi ${this._payment}`;
    }

    totalWithDiscount(): string {
        const total = this._items.reduce((sum, item) => sum + item.price, 0) * this._discount;
        return `${this._client.name}, o total do seu pedido é: ${total}, o método de pagamento escolhido foi ${this._payment}`;
    }
}