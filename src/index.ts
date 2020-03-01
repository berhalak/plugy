type Constructor<T> = new (...args: any) => T;

class Registration<T> {
    constructor(private plugins: Plugins, private type: Constructor<T>) {

    }

    return<Z>(implType: Constructor<Z>) {
        (this.plugins as any).map.set(this.type, implType);
    }
}


export class Plugins {

    private map = new Map<any, any>();

    for<T>(type: Constructor<T>) {
        return new Registration(this, type);
    }

    resolve<T>(type: Constructor<T>) {
        const impl = this.map.get(type);
        if (impl) return new impl(this);
        return new type(this);
    }
}