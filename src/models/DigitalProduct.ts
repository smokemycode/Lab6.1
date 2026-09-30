// Inside src/models/DigitalProduct.ts, create a DigitalProduct class that extends Product.
// Add a fileSize property (number) for digital products.
// Override the getPriceWithTax() method to calculate a final price with no tax, since the digital products do not require tax.
// Use a getter method to return the formatted file size in megabytes.

import Product from './Product.ts';

class DigitalProduct extends Product {

	// unique property to the PhysicalProduct
	fileSize: number;

	constructor(sku: string, name: string, price: number, filesize: number) {

		// passing the name and price values to the parent constructor
		super(sku, name, price);

		// assign the value of the weight property
		this.fileSize = this.weightInMb;
	}

    getPriceWithTax() {
        return this.price;
    }

   get weightInMb(): string {
        return `${this.fileSize} megabytes`;
   }

	displayDetails(): string {
		return `${this.name} costs $${this.price} and weighs ${this.fileSize}`;
	}
}