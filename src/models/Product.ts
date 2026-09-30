// Inside src/models/Product.ts, create a Product base class with the following:
// Properties: sku (string), name (string), price (number).
// Methods:
// displayDetails() - a method that returns a formatted string with the product’s details.
// getPriceWithTax() - a method that calculates the final price of the product with tax.

class Product {

    // the properties of the object (not yet created)
	sku: string;
    name: string;
	price: number;

    // built-in methods of our class that helps us create the object
	constructor(sku: string, name: string, price: number) {
        
        // assigning values to our properties
        this.sku = sku;
		this.name = name; 
		this.price = price;
	}

	displayDetails(): string {
		return `${this.sku} is a ${this.name} and costs $${this.price}.`;
	}

    getPriceWithTax(): number {
        let tax = this.price * (.10);
        return this.price + tax;
    }
}

export default Product;