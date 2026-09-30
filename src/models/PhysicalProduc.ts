// Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.
// Add a weight property (number) for physical products.
// Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
// Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).

import Product from './Product.ts';

class PhysicalProduct extends Product {

	// unique property to the PhysicalProduct
	weight: number;

	constructor(sku: string, name: string, price: number, weight: number) {

		// passing the name and price values to the parent constructor
		super(sku, name, price);

		// assign the value of the weight property
		this.weight = this.weightInKg;
	}

    getPriceWithTax(): number {
        let tax = this.price * (.10);
        return this.price + tax;
    }

   get weightInKg(): string {
        return `${this.weight} kg`;
   }

	displayDetails(): string {
		return `${this.name} costs $${this.price} and weighs ${this.weight}`;
	}
}