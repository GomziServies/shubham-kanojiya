export interface Product {
    id: string;
    name: string;
    brand: string;
    description: string; // HTML content for the description tab
    shortDescription: string;
    price: string;
    oldPrice: string;
    discount: string;
    rating: number;
    images: string[];
    nutrition: { key: string; value: string }[];
}

export const products: Product[] = [
    {
        id: 'whey-protein-mawarabdi-2kg',
        name: 'Whey Protein Kulfi Rabdi - 2kg',
        brand: 'Speed',
        shortDescription: 'Speed Whey Protein Kulfi Rabdi 2kg is a premium blend crafted for fitness enthusiasts, athletes, and anyone seeking faster recovery and improved performance.',
        price: '₹ 6,204/-',
        oldPrice: '₹ 8,499/-',
        discount: '27% OFF',
        rating: 4.5,
        images: [
            '/images/mawarabdi/01.jpg',
            '/images/mawarabdi/02.jpg',
            '/images/mawarabdi/03.jpg',
            '/images/mawarabdi/04.jpg',
        ],
        description: `
            <h4 class="title">The true strength of Speed :</h4>
            <p>Our premium formulation is designed to support fitness enthusiasts, athletes, and individuals seeking effective muscle recovery and overall wellness.</p>
            <h4 class="title mt-4">Ingredients:</h4>
            <p>This product contains a high-quality whey protein blend made from whey protein concentrate, whey protein isolate, and whey powder. It is enriched with mava kulfi flavour for a delightful taste, along with glutamine to support muscle repair and recovery. To enhance mixability and texture, soy lecithin (INS 322) and xanthan gum (INS 416) are included. Sucralose (INS 956) is used as a safe and calorie-free sweetener to provide a pleasant taste without adding sugar.</p>
            <h4 class="title mt-4">Allergen Advice:</h4>
            <p>This product contains lactose, a naturally occurring milk sugar. Individuals with lactose intolerance may experience discomfort, and therefore, it is not recommended for them. Please consult your healthcare provider if you are unsure about your tolerance.</p>
            <h4 class="title mt-4">Taste Advice:</h4>
            <p>For the best experience, mix the recommended serving with non-fat or skimmed milk. This ensures a thick, creamy, and delicious shake that can be enjoyed any time of the day. Depending on your calorie intake goals, you may also add nuts or other healthy ingredients to enhance flavor and nutrition.</p>
            <h4 class="title mt-4">Recommended Duration of Use:</h4>
            <p>For visible and effective results, it is advised to use the product consistently for at least 30 days. Long-term usage can be continued as suggested by your nutritionist or healthcare professional, depending on your fitness and dietary requirements.</p>
            <h4 class="title mt-4">Recommended Use:</h4>
            <p>Consume two servings per day to meet your daily protein requirements. Each serving provides essential nutrients to support muscle growth, recovery, and energy levels throughout the day.</p>
            <h4 class="title mt-4">Storage Instructions:</h4>
            <p>Store the product at a temperature below 25°C in a cool, dry, and hygienic place. Ensure that it is kept away from direct sunlight, heat, and moisture. Always close the container tightly after use. Keep out of reach of children to avoid accidental consumption.</p>
            <h4 class="title mt-4">Caution:</h4>
            <p>Before using this product, it is important to consult a healthcare professional, especially if you are pregnant, suffering from liver-related conditions, or have been advised to follow a low-protein diet. Do not exceed the recommended daily usage to avoid health risks.</p>
        `,
        nutrition: [
            { key: 'Energy (kcal)', value: '128.27' },
            { key: 'Total Protein (g)', value: '25.00' },
            { key: 'Carbohydrates (g)', value: '4.12' },
            { key: 'Added Sugar (g)', value: '0' },
            { key: 'Dietary Fibre (g)', value: '1.72' },
            { key: 'Total Fat (g)', value: '1.17' },
            { key: 'Saturated fatty acid (mg)', value: '0.66' },
            { key: 'Polyunsaturated fatty acid (g)', value: '0.52' },
            { key: 'Monounsaturated fatty acid (mg)', value: '1.54' },
            { key: 'Trans Fatty Acid (g)', value: '0.04' },
            { key: 'Cholesterol (g)', value: '0.01' },
            { key: 'Potassium (mg)', value: '149.0' },
            { key: 'Sodium (mg)', value: '120.0' },
            { key: 'Essential Amino Acids (EAAs) (g)', value: '11.97' },
            { key: 'Branched Chain Amino Acids (BCAAs) (g)', value: '6.11' },
            { key: 'Semi-Essential Amino Acids (SEAAs) (g)', value: '4.03' },
            { key: 'Non-Essential Amino Acids (NEAAs) (g)', value: '6.25' },
        ]
    },
     {
        id: 'peanut-butter',
        name: 'Peanut Butter-1KG',
        brand: 'Speed Nutrition',
        shortDescription: 'Dark Chocolate Peanut Butter is a delicious and nutritious spread made from roasted peanuts blended with rich dark chocolate, sugar, and a pinch of salt.',
        price: '₹ 629/-',
        oldPrice: '₹ 699/-',
        discount: '10% OFF',
        rating: 4.5,
        images: [
            '/images/peanut-butter/01.jpg',
            '/images/peanut-butter/02.jpg',
            '/images/peanut-butter/03.jpg',
            '/images/peanut-butter/04.jpg',
        ],
        description: `
             <h4 class="title">Speed Nutrition Peanut Butter</h4>
            <p>Indulge in the perfect balance of taste and nutrition with our premium Dark Chocolate Peanut Butter. Crafted from carefully roasted peanuts, blended with rich dark chocolate, a hint of sugar, and a touch of salt, this wholesome spread is designed to fuel your active lifestyle while satisfying your sweet cravings. Free from preservatives and gluten, it delivers both flavor and nourishment in every spoonful.</p>
            <p>Packed with high-quality protein and dietary fiber, it supports muscle gain, aids recovery, and keeps you fuller for longer — making it an ideal snack for fitness enthusiasts, weight watchers, and anyone seeking a healthier alternative. Whether spread on toast, added to smoothies, or enjoyed straight from the jar, this peanut butter offers a delicious source of long-lasting energy.</p>
            <h4 class="title">Instructions for Use:</h4>
            <p>Store in a cool, dry place and refrigerate after opening to preserve freshness. Oil separation is a natural process and does not affect quality — simply stir well before use. Please do not consume if the seal is tampered.</p>
            <h4 class="title">Ingredients:</h4>
            <p>Roasted Peanuts, Sugar, Salt, Dark Chocolate {Cocoa Solids, Sugar, Cocoa Butter, Emulsifier (INS322)}, Stabilizer (INS471).</p>
            <h4 class="title mt-4">Allergen Information:</h4>
            <ul>
                <li class="mb-2">High Energy for Endurance.</li>
                <li class="mb-2">High in Protein & Dietary Fiber.</li>
                <li class="mb-2">Gluten-Free.</li>
                <li class="mb-2">Ideal for High-Protein Diets & Muscle Gain.</li>
                <li class="mb-2">100% Natural - No Preservatives.</li>
            </ul>
        `,
        nutrition: [
            { key: 'Energy (kcal)', value: '190' },
            { key: 'Total Protein (g)', value: '6' },
            { key: 'Carbohydrates (g)', value: '12' },
            { key: 'Dietary Fiber (g)', value: '2' },
            { key: 'Total Sugar (g)', value: '7' },
            { key: 'Added Sugar (g)', value: '6' },
            { key: 'Total Fat (g)', value: '13' },
            { key: 'Saturated Fat (g)', value: '2' },
            { key: 'Polyunsaturated Fat (g)', value: '4' },
            { key: 'Monounsaturated Fat (g)', value: '7' },
            { key: 'Trans Fat (g)', value: '0.0' },
            { key: 'Cholesterol (mg)', value: '0.0' },
            { key: 'Sodium (mg)', value: '49' },
        ]
    },
    // Placeholder for other products - using similar data to Mawa Rabdi but with different ID and Image
    {
        id: 'whey-protein-cold-coffee-2kg',
        name: 'Whey Protein Cold Coffee-2kg',
        brand: 'Speed',
        shortDescription: 'Speed Whey Protein Cold Coffee 2kg is a premium blend crafted for fitness enthusiasts.',
        price: '₹ 6,204/-',
        oldPrice: '₹ 8,499/-',
        discount: '27% OFF',
        rating: 4.5,
        images: [
            '/images/coffee/01.jpg',
            '/images/coffee/01.jpg', // Duplicate since we might not have 4 images for this one checking file system later
             '/images/coffee/01.jpg',
              '/images/coffee/01.jpg',
        ],
        description: `
             <h4 class="title">The true strength of Speed (Cold Coffee Edition):</h4>
            <p>Description similar to other whey protein...</p>
        `,
        nutrition: [
            { key: 'Energy (kcal)', value: '128.27' },
            { key: 'Total Protein (g)', value: '25.00' },
        ]
    },
    {
        id: 'whey-protein-milk-chocolate-2kg',
        name: 'Whey Protein Milk chocolate-2kg',
        brand: 'Speed',
        shortDescription: 'Speed Whey Protein Milk Chocolate 2kg is a premium blend crafted for fitness enthusiasts.',
        price: '₹ 6,204/-',
        oldPrice: '₹ 8,499/-',
        discount: '27% OFF',
        rating: 4.5,
        images: [
            '/images/chocolate/01.jpg',
             '/images/chocolate/01.jpg',
              '/images/chocolate/01.jpg',
               '/images/chocolate/01.jpg',
        ],
        description: `
             <h4 class="title">The true strength of Speed (Milk Chocolate Edition):</h4>
            <p>Description similar to other whey protein...</p>
        `,
        nutrition: [
            { key: 'Energy (kcal)', value: '128.27' },
            { key: 'Total Protein (g)', value: '25.00' },
        ]
    },
    {
        id: 'peanut-butter-500g',
        name: 'Peanut Butter-500g',
        brand: 'Speed Nutrition',
        shortDescription: 'Dark Chocolate Peanut Butter is a delicious and nutritious spread.',
        price: '₹ 449/-',
        oldPrice: '₹ 499/-',
        discount: '10% OFF',
        rating: 4.5,
        images: [
            '/images/peanut-butter-500g/01.jpg',
             '/images/peanut-butter-500g/01.jpg',
              '/images/peanut-butter-500g/01.jpg',
               '/images/peanut-butter-500g/01.jpg',
        ],
        description: `
             <h4 class="title">Speed Nutrition Peanut Butter 500g</h4>
            <p>Description...</p>
        `,
        nutrition: [
            { key: 'Energy (kcal)', value: '190' },
             { key: 'Total Protein (g)', value: '6' },
        ]
    },
];

export const getProductById = (id: string | undefined): Product | undefined => {
    return products.find(p => p.id === id);
};
