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

    get client(): Client {
        return this._client;
    }

    set client(client: Client) {
        this._client = client;
    }

    get payment(): string {
        return this._payment;
    }

    set payment(payment: string) {
        this._payment = payment;
    }

    get discount(): number {
        return this._discount;
    }

    set discount(discount: number) {
        if (discount < 0) {
            throw new Error('O desconto não pode ser negativo');
        }

        this._discount = discount;
    }

    get items(): Item[] {
        return this._items;
    }

    set items(items: Item[]) {
        if (items.length === 0) {
            throw new Error('O pedido deve ter pelo menos um item');
        }

        this._items = items;
    }

    total(): string {
        const total = this._items.reduce((sum, item) => sum + item.price, 0);
        return `${this._client.name}, o total do seu pedido é: $${total}, o método de pagamento escolhido foi ${this._payment}`;
    }

    totalWithDiscount(): string {
        const total = this._items.reduce((sum, item) => sum + item.price, 0) * (1 - this._discount);
        return `${this._client.name}, o total do seu pedido é: $${total}, o método de pagamento escolhido foi ${this._payment}`;
    }
}

export {
    Client,
    Item,
    Order,
}