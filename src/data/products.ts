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
        brand: 'Nutradyne',
        shortDescription: 'Nutradyne Whey Protein Kulfi Rabdi 2kg is a premium blend crafted for fitness enthusiasts, athletes, and anyone seeking faster recovery and improved performance.',
        price: '₹ 3999/-',
        oldPrice: '₹ 5500/-',
        discount: '27% OFF',
        rating: 4.5,
        images: [
            '/images/mawarabdi/1.webp',
            '/images/mawarabdi/2.webp',
            '/images/mawarabdi/3.webp',
            '/images/mawarabdi/4.webp',
        ],
        description: `
            <h4 class="title">NUTRADYNE HEALTHCARE WHEY PROTEIN</h4>
            <p>Nutradyne Healthcare Whey Protein gives an immediate spike of amino acids in blood for immediate recovery after workout or when your body requires amino acids immediately.</p>
            <p>This Unique Whey Protein Concentrate Helps Bodybuilders, Athletes or Any Sportsperson With Better Recovery of Muscles. The Specifications of This Product Adhere to the Most Stringent International Standards and Regulatory Norms.</p>
            <p>It is a unique blend of 5 Specific Enzymes, Viz. -amylase (Starch Hydrolyzing Enzyme), Protease (protein Hydrolyzing Enzyme), Lipase (fat Hydrolyzing Enzyme), Cellulose (cellulose Hydrolyzing Enzyme), and Lactase (lactose Hydrolyzing Enzyme).</p>
            
            <h4 class="title mt-4">Important Information:</h4>
            <ul class="mb-3">
                <li class="mb-2">Product is not sold for medicinal use or parenteral use.</li>
                <li class="mb-2">Pregnant, nursing or lactating women, infants, children, adolescents and elderly should consult a medical practitioner before use.</li>
                <li class="mb-2">Take one serving a day or as directed by your health care practitioner/dietician.</li>
            </ul>

            <h4 class="title mt-4">Allergen Information:</h4>
            <p>Made in a facility that also processes soy, milk and nuts.</p>
            <p>Not recommended for children. Not to exceed the recommended dosage.</p>

            <h4 class="title mt-4">Directions For Use:</h4>
            <p><strong>Serving Guide:</strong> Mix one level scoop (30g) with 200ml of water or milk (for the smoothest result, use a blender). We recommend 1-4 portions per day depending on your protein requirements. Take at any time of day to boost your total protein intake. If you mix with milk you add an extra 8g of protein, plus 85 calories.</p>

            <h4 class="title mt-4">How to Use:</h4>
            <ul class="mb-3">
                <li class="mb-2"><strong>SHAKE:</strong> Pour Whey Protein 250-300 ml of liquid into a shaker cup. Secure the top and shake for 20-30 seconds.</li>
                <li class="mb-2"><strong>STIR:</strong> Add 1 scoop of Whey Protein 250-300 ml of liquid to a glass and stir for 20-30 seconds until powder is completely dissolved.</li>
                <li class="mb-2"><strong>BLEND:</strong> Add 1 scoop of Whey Protein 250-300 ml of liquid to a blender and mix add 1-2 ice cubes for a frosty shake.</li>
                <li class="mb-2"><strong>PRE:</strong> Before training, Whey Protein is a great tasting and easy to digest source of time released amino acids.</li>
                <li class="mb-2"><strong>POST:</strong> After a workout, Whey Protein is fast acting. It immediately starts repairing and building muscle.</li>
            </ul>

            <h4 class="title mt-4">Warning:</h4>
            <p>Consult your Healthcare Professional prior to using this supplement if you have or suspect a medical condition, are taking prescription drugs or are pregnant or lactating. This product is not intended to diagnose, treat, cure or prevent any disease. Do not consume if you are allergic of any of the ingredients in this product label.</p>
        `,
        nutrition: [
            { key: 'Energy (kcal)', value: '133.72' },
            { key: 'Total Protein (g)', value: '24' },
            { key: 'Carbohydrates (g)', value: '5.38' },
            { key: 'Total Sugars (g)', value: '5.3' },
            { key: 'Added Sugar (g)', value: '0' },
            { key: 'Total Fat (g)', value: '1.8' },
            { key: 'Saturated Fat (g)', value: '0.62' },
            { key: 'Trans Fat (g)', value: '0' },
            { key: 'Cholesterol (mg)', value: '28' },
            { key: 'Sodium (mg)', value: '150' },
            { key: 'Potassium (mg)', value: '230' },
            { key: 'L-Aspartic Acid (mg)', value: '2470' },
            { key: 'L-Leucine (mg)', value: '2750' },
            { key: 'L-Lysine (mg)', value: '2360' },
            { key: 'L-Threonine (mg)', value: '1680' },
            { key: 'L-Isoleucine (mg)', value: '1480' },
            { key: 'L-Tyrosine (mg)', value: '820' },
            { key: 'L-Valine (mg)', value: '1480' },
            { key: 'L-Methionine (mg)', value: '600' },
            { key: 'L-Alanine (mg)', value: '1180' },
            { key: 'L-Histidine (mg)', value: '430' },
            { key: 'L-Phenylalanine (mg)', value: '860' },
            { key: 'L-Tryptophan (mg)', value: '410' },
            { key: 'L-Cysteine (mg)', value: '480' },
            { key: 'L-Hydroxyproline (mg)', value: '850' },
            { key: 'L-Arginine (mg)', value: '600' },
            { key: 'L-Glutamic Acid (mg)', value: '3620' },
            { key: 'L-Proline (mg)', value: '1320' },
            { key: 'L-Glycine (mg)', value: '400' },
        ]
    },
    //  {
    //     id: 'peanut-butter',
    //     name: 'Peanut Butter-1KG',
    //     brand: 'Nutradyne Nutrition',
    //     shortDescription: 'Dark Chocolate Peanut Butter is a delicious and nutritious spread made from roasted peanuts blended with rich dark chocolate, sugar, and a pinch of salt.',
    //     price: '₹ 629/-',
    //     oldPrice: '₹ 699/-',
    //     discount: '10% OFF',
    //     rating: 4.5,
    //     images: [
    //         '/images/peanut-butter/01.jpg',
    //         '/images/peanut-butter/02.jpg',
    //         '/images/peanut-butter/03.jpg',
    //         '/images/peanut-butter/04.jpg',
    //     ],
    //     description: `
    //          <h4 class="title">Nutradyne Nutrition Peanut Butter</h4>
    //         <p>Indulge in the perfect balance of taste and nutrition with our premium Dark Chocolate Peanut Butter. Crafted from carefully roasted peanuts, blended with rich dark chocolate, a hint of sugar, and a touch of salt, this wholesome spread is designed to fuel your active lifestyle while satisfying your sweet cravings. Free from preservatives and gluten, it delivers both flavor and nourishment in every spoonful.</p>
    //         <p>Packed with high-quality protein and dietary fiber, it supports muscle gain, aids recovery, and keeps you fuller for longer — making it an ideal snack for fitness enthusiasts, weight watchers, and anyone seeking a healthier alternative. Whether spread on toast, added to smoothies, or enjoyed straight from the jar, this peanut butter offers a delicious source of long-lasting energy.</p>
    //         <h4 class="title">Instructions for Use:</h4>
    //         <p>Store in a cool, dry place and refrigerate after opening to preserve freshness. Oil separation is a natural process and does not affect quality — simply stir well before use. Please do not consume if the seal is tampered.</p>
    //         <h4 class="title">Ingredients:</h4>
    //         <p>Roasted Peanuts, Sugar, Salt, Dark Chocolate {Cocoa Solids, Sugar, Cocoa Butter, Emulsifier (INS322)}, Stabilizer (INS471).</p>
    //         <h4 class="title mt-4">Allergen Information:</h4>
    //         <ul>
    //             <li class="mb-2">High Energy for Endurance.</li>
    //             <li class="mb-2">High in Protein & Dietary Fiber.</li>
    //             <li class="mb-2">Gluten-Free.</li>
    //             <li class="mb-2">Ideal for High-Protein Diets & Muscle Gain.</li>
    //             <li class="mb-2">100% Natural - No Preservatives.</li>
    //         </ul>
    //     `,
    //     nutrition: [
    //         { key: 'Energy (kcal)', value: '190' },
    //         { key: 'Total Protein (g)', value: '6' },
    //         { key: 'Carbohydrates (g)', value: '12' },
    //         { key: 'Dietary Fiber (g)', value: '2' },
    //         { key: 'Total Sugar (g)', value: '7' },
    //         { key: 'Added Sugar (g)', value: '6' },
    //         { key: 'Total Fat (g)', value: '13' },
    //         { key: 'Saturated Fat (g)', value: '2' },
    //         { key: 'Polyunsaturated Fat (g)', value: '4' },
    //         { key: 'Monounsaturated Fat (g)', value: '7' },
    //         { key: 'Trans Fat (g)', value: '0.0' },
    //         { key: 'Cholesterol (mg)', value: '0.0' },
    //         { key: 'Sodium (mg)', value: '49' },
    //     ]
    // },
    // Placeholder for other products - using similar data to Mawa Rabdi but with different ID and Image
    // {
    //     id: 'whey-protein-cold-coffee-2kg',
    //     name: 'Whey Protein Cold Coffee-2kg',
    //     brand: 'Nutradyne',
    //     shortDescription: 'Nutradyne Whey Protein Cold Coffee 2kg is a premium blend crafted for fitness enthusiasts.',
    //     price: '₹ 3999/-',
    //     oldPrice: '₹ 5500/-',
    //     discount: '27% OFF',
    //     rating: 4.5,
    //     images: [
    //         '/images/coffee/01.jpg',
    //         '/images/coffee/01.jpg', // Duplicate since we might not have 4 images for this one checking file system later
    //          '/images/coffee/01.jpg',
    //           '/images/coffee/01.jpg',
    //     ],
    //     description: `
    //          <h4 class="title">The true strength of Nutradyne (Cold Coffee Edition):</h4>
    //         <p>Description similar to other whey protein...</p>
    //     `,
    //     nutrition: [
    //         { key: 'Energy (kcal)', value: '128.27' },
    //         { key: 'Total Protein (g)', value: '25.00' },
    //     ]
    // },
    {
        id: 'whey-protein-milk-chocolate-2kg',
        name: 'Whey Protein Milk chocolate-2kg',
        brand: 'Nutradyne',
        shortDescription: 'Nutradyne Whey Protein Milk Chocolate 2kg is a premium blend crafted for fitness enthusiasts, athletes, and anyone seeking faster recovery and improved performance.',
        price: '₹ 3999/-',
        oldPrice: '₹ 5500/-',
        discount: '27% OFF',
        rating: 4.5,
        images: [
            '/images/chocolate/1.webp',
             '/images/chocolate/2.webp',
              '/images/chocolate/3.webp',
               '/images/chocolate/4.webp',
        ],
        description: `
            <h4 class="title">NUTRADYNE HEALTHCARE WHEY PROTEIN</h4>
            <p>Nutradyne Healthcare Whey Protein gives an immediate spike of amino acids in blood for immediate recovery after workout or when your body requires amino acids immediately.</p>
            <p>This Unique Whey Protein Concentrate Helps Bodybuilders, Athletes or Any Sportsperson With Better Recovery of Muscles. The Specifications of This Product Adhere to the Most Stringent International Standards and Regulatory Norms.</p>
            <p>It is a unique blend of 5 Specific Enzymes, Viz. -amylase (Starch Hydrolyzing Enzyme), Protease (protein Hydrolyzing Enzyme), Lipase (fat Hydrolyzing Enzyme), Cellulose (cellulose Hydrolyzing Enzyme), and Lactase (lactose Hydrolyzing Enzyme).</p>
            
            <h4 class="title mt-4">Important Information:</h4>
            <ul class="mb-3">
                <li class="mb-2">Product is not sold for medicinal use or parenteral use.</li>
                <li class="mb-2">Pregnant, nursing or lactating women, infants, children, adolescents and elderly should consult a medical practitioner before use.</li>
                <li class="mb-2">Take one serving a day or as directed by your health care practitioner/dietician.</li>
            </ul>

            <h4 class="title mt-4">Allergen Information:</h4>
            <p>Made in a facility that also processes soy, milk and nuts.</p>
            <p>Not recommended for children. Not to exceed the recommended dosage.</p>

            <h4 class="title mt-4">Directions For Use:</h4>
            <p><strong>Serving Guide:</strong> Mix one level scoop (30g) with 200ml of water or milk (for the smoothest result, use a blender). We recommend 1-4 portions per day depending on your protein requirements. Take at any time of day to boost your total protein intake. If you mix with milk you add an extra 8g of protein, plus 85 calories.</p>

            <h4 class="title mt-4">How to Use:</h4>
            <ul class="mb-3">
                <li class="mb-2"><strong>SHAKE:</strong> Pour Whey Protein 250-300 ml of liquid into a shaker cup. Secure the top and shake for 20-30 seconds.</li>
                <li class="mb-2"><strong>STIR:</strong> Add 1 scoop of Whey Protein 250-300 ml of liquid to a glass and stir for 20-30 seconds until powder is completely dissolved.</li>
                <li class="mb-2"><strong>BLEND:</strong> Add 1 scoop of Whey Protein 250-300 ml of liquid to a blender and mix add 1-2 ice cubes for a frosty shake.</li>
                <li class="mb-2"><strong>PRE:</strong> Before training, Whey Protein is a great tasting and easy to digest source of time released amino acids.</li>
                <li class="mb-2"><strong>POST:</strong> After a workout, Whey Protein is fast acting. It immediately starts repairing and building muscle.</li>
            </ul>

            <h4 class="title mt-4">Warning:</h4>
            <p>Consult your Healthcare Professional prior to using this supplement if you have or suspect a medical condition, are taking prescription drugs or are pregnant or lactating. This product is not intended to diagnose, treat, cure or prevent any disease. Do not consume if you are allergic of any of the ingredients in this product label.</p>
        `,
        nutrition: [
            { key: 'Energy (kcal)', value: '133.72' },
            { key: 'Total Protein (g)', value: '24' },
            { key: 'Carbohydrates (g)', value: '5.38' },
            { key: 'Total Sugars (g)', value: '5.3' },
            { key: 'Added Sugars (g)', value: '0' },
            { key: 'Total Fat (g)', value: '1.8' },
            { key: 'Saturated Fat (g)', value: '0.62' },
            { key: 'Trans Fat (g)', value: '0' },
            { key: 'Cholesterol (mg)', value: '28' },
            { key: 'Sodium (mg)', value: '150' },
            { key: 'Potassium (mg)', value: '230' },
            { key: 'L-Aspartic Acid (mg)', value: '2470' },
            { key: 'L-Leucine (mg)', value: '2750' },
            { key: 'L-Lysine (mg)', value: '2360' },
            { key: 'L-Threonine (mg)', value: '1590' },
            { key: 'L-Isoleucine (mg)', value: '1480' },
            { key: 'L-Tyrosine (mg)', value: '820' },
            { key: 'L-Valine (mg)', value: '1480' },
            { key: 'L-Methionine (mg)', value: '500' },
            { key: 'L-Alanine (mg)', value: '1180' },
            { key: 'L-Histidine (mg)', value: '430' },
            { key: 'L-Phenylalanine (mg)', value: '860' },
            { key: 'L-Tryptophan (mg)', value: '410' },
            { key: 'L-Cysteine (mg)', value: '480' },
            { key: 'L-Hydroxyproline (mg)', value: '450' },
            { key: 'L-Arginine (mg)', value: '600' },
            { key: 'L-Glutamic Acid (mg)', value: '3500' },
            { key: 'L-Serine (mg)', value: '1180' },
            { key: 'L-Proline (mg)', value: '1320' },
            { key: 'L-Glycine (mg)', value: '400' },
        ]
    },
    // {
    //     id: 'peanut-butter-500g',
    //     name: 'Peanut Butter-500g',
    //     brand: 'Nutradyne Nutrition',
    //     shortDescription: 'Dark Chocolate Peanut Butter is a delicious and nutritious spread.',
    //     price: '₹ 449/-',
    //     oldPrice: '₹ 499/-',
    //     discount: '10% OFF',
    //     rating: 4.5,
    //     images: [
    //         '/images/peanut-butter-500g/01.jpg',
    //          '/images/peanut-butter-500g/01.jpg',
    //           '/images/peanut-butter-500g/01.jpg',
    //            '/images/peanut-butter-500g/01.jpg',
    //     ],
    //     description: `
    //          <h4 class="title">Nutradyne Nutrition Peanut Butter 500g</h4>
    //         <p>Description...</p>
    //     `,
    //     nutrition: [
    //         { key: 'Energy (kcal)', value: '190' },
    //          { key: 'Total Protein (g)', value: '6' },
    //     ]
    // },
];

export const getProductById = (id: string | undefined): Product | undefined => {
    return products.find(p => p.id === id);
};
