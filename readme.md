# Invoice Generator with Real-Time Currency Conversion

This project was developed as part of an assignment for Swipe(YC 21). It features an advanced Invoice Generator with real-time currency conversion and a dynamic Products Tab integrated into the invoicing process.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
  - [Invoice Generator with Real-Time Currency Conversion](#invoice-generator-with-real-time-currency-conversion)
  - [Products Tab with Dynamic Product Information Update](#products-tab-with-dynamic-product-information-update)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Validation and Error Handling](#validation-and-error-handling)
- [Testing](#testing)
- [Final Review and Cleanup](#final-review-and-cleanup)

## Demo

You can watch a demo of the Invoice Generator with real-time currency conversion below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/mGWt7YCC9P4?si=AVKmOZpPGzpwp9_G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Features

### Invoice Generator with Real-Time Currency Conversion

This feature allows users to create and view invoices in multiple currencies, with automatic real-time conversion of all monetary values.

#### Key Features:
- **Real-time Exchange Rates**: Fetches up-to-date exchange rates using the Free Currency API.
- **Multiple Currency Support**: Converts between currencies like USD, EUR, GBP, JPY, CAD, AUD, SGD, CNY, and INR.
- **Dynamic Conversion**: Automatically converts all monetary values (item prices, subtotal, tax amount, discount, and total) when changing the invoice currency.
- **Preserves Original Values**: Ensures accurate conversion between any two currencies without cumulative rounding errors.

#### How It Works:
1. The component fetches the latest exchange rates when it mounts.
2. Users select a different currency from the dropdown menu in the invoice form.
3. All monetary values in the invoice are converted to the selected currency using the fetched exchange rates.

### Products Tab with Dynamic Product Information Update

This feature introduces a Products Tab that allows users to manage products and dynamically update invoices based on product changes.

#### Implementation Details:
1. **Redux Slice for Products**:
   - Created a new `productsSlice.js` to manage product data.
   - Defined actions for adding, updating, and deleting products.

2. **ProductsTab Component**:
   - Developed a new `ProductsTab.jsx` component to display products and manage them.
   - Integrated this tab into the `InvoiceForm` for seamless product selection and invoice creation.

3. **Dynamic Product Information**:
   - Updated the invoice form to reference product IDs instead of direct data.

