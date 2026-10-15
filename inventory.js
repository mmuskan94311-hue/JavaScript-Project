
// CAPSTONE MINI PROJECT

// 1. DATA INITIALIZATION
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

console.log("=== Initializing Inventory System ===");

// 2. ADD NEW PRODUCT USING prompt()
function addProduct() {
    const productName = prompt("Enter product name:");
    if (productName === null || productName.trim() === "") {
        console.log("Invalid product name. Product not added.");
        return;
    }

    const priceInput = prompt("Enter product price:");
    if (priceInput === null || priceInput.trim() === "") {
        console.log("Price is missing. Product not added.");
        return;
    }

    const price = Number(priceInput);

    if (!Number.isFinite(price) || price < 0) {
        console.log("Invalid price. Enter a valid non-negative number.");
        return;
    }

    inventory.push({
        name: productName.trim(),
        price: price
    });

    console.log(
        `Product added successfully: ${productName.trim()} ($${price})`
    );
}

// 3. CATEGORY USING if...else
function getCategory(price) {
    if (price < 100) {
        return "Budget";
    } else if (price <= 500) {
        return "Standard";
    } else {
        return "Premium";
    }
}

// 4. SWITCH STATEMENT
function getCategoryBadge(category) {
    switch (category) {
        case "Budget":
            return "[BUDGET]";
        case "Standard":
            return "[STANDARD]";
        case "Premium":
            return "[PREMIUM]";
        default:
            return "[UNKNOWN]";
    }
}

// 5. PROCESS INVENTORY USING forEach()
function displayInventory() {
    console.log("\n=== Processing Inventory Roster ===");

    inventory.forEach((product, index) => {
        const category = getCategory(product.price);
        const badge = getCategoryBadge(category);

        console.log(
            `${index + 1}. Item: ${product.name} ` +
            `($${product.price}) -> Category: ${badge} ${category}`
        );
    });
}

// 6. TOTAL INVENTORY VALUE
function calculateTotal(items) {
    let total = 0;

    for (const item of items) {
        total += item.price;
    }

    return total;
}

// 7. FILTER AFFORDABLE PRODUCTS
const getAffordableProducts = (items, maxPrice = 200) =>
    items.filter(item => item.price < maxPrice);

// 8. MAP PRODUCTS INTO FORMATTED REPORT
const createReport = (items) =>
    items.map(item =>
        `${item.name.toUpperCase()}: $${item.price}`
    );

// 9. CUSTOM DISCOUNT FUNCTION
function applyDiscount(price, discountPercent = 0) {
    if (
        !Number.isFinite(price) ||
        !Number.isFinite(discountPercent) ||
        price < 0 ||
        discountPercent < 0 ||
        discountPercent > 100
    ) {
        console.log("Invalid price or discount percentage.");
        return null;
    }

    const finalPrice = price - (price * discountPercent / 100);
    return Number(finalPrice.toFixed(2));
}

// 10. SEARCH PRODUCT USING LOOP AND break
function searchProduct(items, searchName) {
    let foundProduct = null;

    for (const item of items) {
        if (item.name.toLowerCase() === searchName.toLowerCase()) {
            foundProduct = item;
            break;
        }
    }

    return foundProduct;
}

// 11. MAIN PROGRAM
function runInventorySystem() {
    console.log("Starting Product Inventory System...");

    const addChoice = prompt(
        "Do you want to add a new product? Enter yes or no:"
    );

    if (addChoice === null) {
        console.log("Add-product prompt cancelled.");
    } else if (addChoice.trim().toLowerCase() === "yes") {
        addProduct();
    } else if (addChoice.trim().toLowerCase() === "no") {
        console.log("Using existing products.");
    } else {
        console.log("Invalid choice. Continuing with existing products.");
    }

    displayInventory();

    console.log("\n=== Financial Analytics ===");

    const totalValue = calculateTotal(inventory);
    console.log(`Total Inventory Value: $${totalValue}`);

    const affordableItems = getAffordableProducts(inventory, 200);
    console.log(
        "Filtered Affordable Items (Under $200):",
        affordableItems.map(item => item.name)
    );

    const formattedReport = createReport(inventory);
    console.log("Formatted Report List:", formattedReport);

    console.log("\n=== Discount Calculator ===");

    const discount = applyDiscount(800, 10);
    console.log(`Laptop price after 10% discount: $${discount}`);

    console.log("\n=== Product Search ===");

    const searchResult = searchProduct(inventory, "Laptop");

    if (searchResult !== null) {
        console.log(
            `Product Found: ${searchResult.name}, Price: $${searchResult.price}`
        );
    } else {
        console.log("Product not found.");
    }

    console.log("\n=== Inventory System Completed ===");
}

