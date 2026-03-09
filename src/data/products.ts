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
    {
        id: 'creatine-monohydrate-fruit-punch-250g',
        name: 'Creatine Monohydrate Fruit Punch - 250g',
        brand: 'Nutradyne',
        shortDescription: 'Nutradyne Creatine Monohydrate (Fruit Punch) is designed for performance support, providing 3g of high-quality creatine per serving to help boost strength and power.',
        price: '₹ 1499/-',
        oldPrice: '₹ 1999/-',
        discount: '25% OFF',
        rating: 4.8,
        images: [
            '/images/creatine-monohydrate/01.jfif',
            '/images/creatine-monohydrate/02.jfif',
            '/images/creatine-monohydrate/03.jfif',
        ],
        description: `
            <h4 class="title">NUTRADYNE HEALTHCARE CREATINE MICRONIZED MONOHYDRATE</h4>
            <p>Creatine Micronized Monohydrate is a highly effective ergogenic and anaerobic supplement that supports intense muscle performance. Creatine supplementation can significantly increase muscle power output and accelerate recovery by replenishing high-energy phosphocreatine molecules. This process helps improve strength, endurance and overall performance during anaerobic training.</p>
            <p>Use this high-energy nutrient as part of your daily nutritional supplement program to enhance workout efficiency and support muscle development.</p>
            <p>Increase ATP resynthesis | Increase cellular volume and size | Enhance anaerobic power output</p>
            <p>Creatine Micronized Monohydrate is considered a safe and effective creatine supplement. It is produced with a focus on three essential quality pillars: careful selection of premium raw materials, advanced high-performance manufacturing technology and precise chemical analysis to ensure product purity and effectiveness.</p>

            <h4 class="title mt-4">Ingredients:</h4>
            <p>Micronized Creatine Monohydrate, Artificial Sweeteners, Sucralose INS (955), Artificial flavours and colour, Citric acid INS (330).</p>

            <h4 class="title mt-4">Important Information:</h4>
            <ul class="mb-3">
                <li class="mb-2">This product is not intended for medicinal or parenteral use.</li>
                <li class="mb-2">Pregnant or nursing women, infants, children, adolescents, and elderly individuals should consult a medical practitioner before use.</li>
                <li class="mb-2">Food for special dietary use — suitable for weight control and management.</li>
            </ul>

            <h4 class="title mt-4">Allergen Information:</h4>
            <p>Made in a facility that also processes soy, milk and nuts.</p>
            <p>Not recommended for children. Not to exceed the recommended dosage.</p>

            <h4 class="title mt-4">Directions For Use:</h4>
            <p><strong>Serving Guide:</strong> As a dietary supplement, mix 1 serving (approx. 5g) in water or juice beverage. Cycle creatine use as follows:</p>
            <ul class="mb-3">
                <li class="mb-2"><strong>LOADING:</strong> For 3 days take 4 servings spaced out during the day for total of 20g per day.</li>
                <li class="mb-2"><strong>MAINTENANCE:</strong> After load phase, take 1 serving daily for 8 weeks.</li>
                <li class="mb-2"><strong>OFF CYCLE:</strong> After maintenance phase take 4 weeks off then begin a new on cycle.</li>
            </ul>
            <p><strong>How to Use:</strong> Add 1 scoop to 300 ml of liquid in a shaker cup, glass or blender. Shake, stir or blend for 20-30 seconds until powder is completely dissolved.</p>

            <h4 class="title mt-4">Warning:</h4>
            <p>Consult your Healthcare Professional prior to using this supplement if you have or suspect a medical condition, are taking prescription drugs or are pregnant or lactating. This product is not intended to diagnose, treat, cure or prevent any disease. Do not consume if you are allergic to any of the ingredients in this product label.</p>
        `,
        nutrition: [
            { key: 'Creatine Monohydrate (g)', value: '3.0' },
            { key: 'Servings', value: '50' },
            { key: 'Serving Size', value: '5g' },
            { key: 'Net Weight', value: '250 gram' },
        ]
    },
    {
        id: 'creatine-monohydrate-unflavored-250g',
        name: 'Creatine Monohydrate Unflavored - 250g',
        brand: 'Nutradyne',
        shortDescription: 'Nutradyne Creatine Monohydrate (Unflavored) offers pure performance support with 83 servings per container. Perfect for stacking with your favorite protein or pre-workout.',
        price: '₹ 1499/-',
        oldPrice: '₹ 1999/-',
        discount: '25% OFF',
        rating: 4.9,
        images: [
            '/images/creatine-monohydrate/04.jfif',
            '/images/creatine-monohydrate/05.jfif',
            '/images/creatine-monohydrate/06.jfif',
        ],
        description: `
            <h4 class="title">NUTRADYNE HEALTHCARE CREATINE MICRONIZED MONOHYDRATE</h4>
            <p>Creatine Micronized Monohydrate is a highly effective ergogenic and anaerobic supplement that supports intense muscle performance. Creatine supplementation can significantly increase muscle power output and accelerate recovery by replenishing high-energy phosphocreatine molecules. This process helps improve strength, endurance and overall performance during anaerobic training.</p>
            <p>Use this high-energy nutrient as part of your daily nutritional supplement program to enhance workout efficiency and support muscle development.</p>
            <p>Increase ATP resynthesis | Increase cellular volume and size | Enhance anaerobic power output</p>
            <p>Creatine Micronized Monohydrate is considered a safe and effective creatine supplement. It is produced with a focus on three essential quality pillars: careful selection of premium raw materials, advanced high-performance manufacturing technology and precise chemical analysis to ensure product purity and effectiveness.</p>

            <h4 class="title mt-4">Important Information:</h4>
            <ul class="mb-3">
                <li class="mb-2">This product is not intended for medicinal or parenteral use.</li>
                <li class="mb-2">Pregnant or nursing women, infants, children, adolescents, and elderly individuals should consult a medical practitioner before use.</li>
                <li class="mb-2">Food for special dietary use — suitable for weight control and management.</li>
            </ul>

            <h4 class="title mt-4">Allergen Information:</h4>
            <p>Made in a facility that also processes soy, milk and nuts.</p>
            <p>Not recommended for children. Not to exceed the recommended dosage.</p>

            <h4 class="title mt-4">Directions For Use:</h4>
            <p><strong>Serving Guide:</strong> Mix one level scoop (approx. 3g) with 300ml of water or preferred beverage (for the smoothest result, use a blender). We recommend 1-2 portions per day depending on your requirements.</p>

            <h4 class="title mt-4">How to Use:</h4>
            <ul class="mb-3">
                <li class="mb-2"><strong>SHAKE:</strong> Add 1 scoop to 300 ml of liquid in a shaker cup. Secure the top and shake for 20-30 seconds.</li>
                <li class="mb-2"><strong>STIR:</strong> Add 1 scoop to 300 ml of liquid in a glass and stir for 20-30 seconds until powder is completely dissolved.</li>
                <li class="mb-2"><strong>BLEND:</strong> Add 1 scoop to 300 ml of liquid in a blender and mix add 1-2 ice cubes for a frosty shake.</li>
            </ul>

            <h4 class="title mt-4">Warning:</h4>
            <p>Consult your Healthcare Professional prior to using this supplement if you have or suspect a medical condition, are taking prescription drugs or are pregnant or lactating. This product is not intended to diagnose, treat, cure or prevent any disease. Do not consume if you are allergic to any of the ingredients in this product label.</p>
        `,
        nutrition: [
            { key: 'Creatine Monohydrate (g)', value: '3' },
            { key: 'Servings', value: '83' },
            { key: 'Serving Size', value: '3g' },
            { key: 'Net Weight', value: '250 gram' },
        ]
    },
    {
        id: 'mass-gainer-chocolate-1kg',
        name: 'Mass Gainer Chocolate Flavour - 1kg',
        brand: 'Nutradyne',
        shortDescription: 'Nutradyne Healthcare Mass Gainer is crafted to fuel your muscles with 362 calories per serving to promote faster muscle synthesis and prevent post-workout muscle loss.',
        price: '₹ 1999/-',
        oldPrice: '₹ 2999/-',
        discount: '33% OFF',
        rating: 4.8,
        images: [
            '/images/mass-gainer/01.jfif',
            '/images/mass-gainer/02.jfif',
            '/images/mass-gainer/03.jfif',
        ],
        description: `
            <h4 class="title">NUTRADYNE HEALTHCARE MASS GAINER</h4>
            <p>Nutradyne Healthcare Mass Gainer is crafted to fuel your muscles with 362 calories per serving to promote faster muscle synthesis and prevent post-workout muscle loss. With 56g of complex carbohydrates per serving, this heavy Nutradyne Healthcare Mass Gainer supplement helps refill the glycogen reserves in the body which are used as fuel during intense workouts. Contains 27g of protein per serving which triggers the synthesis of new muscle tissues and boosts muscle recovery.</p>
            <p>To gain weight, you need to consume more calories than your body needs for normal functioning. Nutradyne Healthcare Mass Gainer gives you 1086 calories in one serving. Adding Nutradyne Healthcare Mass Gainer to your diet will dramatically increase the calorie intake and these extra calories will help you in gaining weight quickly. This formula is not just about gaining weight but it also gives you 81g of a high-quality protein blend, Creatine, Glutamine for better muscle recovery.</p>

            <h4 class="title mt-4">Ingredients:</h4>
            <p>Maltodextrin, Whey Protein Concentrate, Milk Casein, Cocoa Powder, Creatine, Nature Identical Chocolate Flavour, Artificial Sweetener (INS 955), Xanthan Gum, Digezyme (Multi Enzyme Complex).</p>

            <h4 class="title mt-4">Important Information:</h4>
            <ul class="mb-3">
                <li class="mb-2">Product is not sold for medicinal use or parenteral use.</li>
                <li class="mb-2">Pregnant, nursing or lactating women, infants, children, adolescents and elderly should consult a medical practitioner before use.</li>
                <li class="mb-2">Food for special dietary use-food for weight control and management.</li>
            </ul>

            <h4 class="title mt-4">Allergen Information:</h4>
            <p>Made in a facility that also processes soy, milk and nuts.</p>
            <p>Not recommended for children. Not to exceed the recommended dosage.</p>

            <h4 class="title mt-4">Directions For Use:</h4>
            <p><strong>Serving Guide:</strong> Add your preferred amount of water or skimmed milk into shaker. Then add 2 scoops (approx. 50g) of Nutradyne Healthcare Mass Gainer, shake and consume. Use 2 times daily for optimal results.</p>

            <h4 class="title mt-4">How to Use:</h4>
            <ul class="mb-3">
                <li class="mb-2"><strong>SHAKE:</strong> Add 2 scoops to 300 ml of liquid in a shaker cup. Secure the top and shake for 20-30 seconds.</li>
                <li class="mb-2"><strong>STIR:</strong> Add 2 scoops to 300 ml of liquid in a glass and stir for 20-30 seconds until powder is completely dissolved.</li>
                <li class="mb-2"><strong>BLEND:</strong> Add 2 scoops to 300 ml of liquid in a blender and mix add 1-2 ice cubes for a frosty shake.</li>
            </ul>

            <h4 class="title mt-4">Warning:</h4>
            <p>Consult your Healthcare Professional prior to using this supplement if you have or suspect a medical condition, are taking prescription drugs or are pregnant or lactating. This product is not intended to diagnose, treat, cure or prevent any disease. Do not consume if you are allergic to any of the ingredients in this product label.</p>
        `,
        nutrition: [
            { key: 'Calories (Kcal)', value: '362' },
            { key: 'Protein (g)', value: '27' },
            { key: 'Total Carbohydrate (g)', value: '58.34' },
            { key: 'Total Fat (g)', value: '2.167' },
            { key: 'Sugar (g)', value: '0.67' },
            { key: 'Fiber (g)', value: '5' },
            { key: 'Cholesterol (mg)', value: '40' },
            { key: 'Sodium (mg)', value: '42' },
            { key: 'Glutamine (g)', value: '1' },
            { key: 'Creatine Monohydrate (g)', value: '1' },
            { key: 'Serving Size', value: '2 scoops (50g)' },
            { key: 'Net Weight', value: '1kg (2.2 lbs)' },
            { key: 'Servings Per Container', value: '20' },
        ]
    },
    {
        id: 'mass-gainer-vanilla-1kg',
        name: 'Mass Gainer Vanilla Flavour - 1kg',
        brand: 'Nutradyne',
        shortDescription: 'Nutradyne Healthcare Mass Gainer is crafted to fuel your muscles with 362 calories per serving to promote faster muscle synthesis and prevent post-workout muscle loss.',
        price: '₹ 1999/-',
        oldPrice: '₹ 2999/-',
        discount: '33% OFF',
        rating: 4.8,
        images: [
            '/images/mass-gainer/04.jfif',
            '/images/mass-gainer/05.jfif',
            '/images/mass-gainer/06.jfif',
        ],
        description: `
            <h4 class="title">NUTRADYNE HEALTHCARE MASS GAINER</h4>
            <p>Nutradyne Healthcare Mass Gainer is crafted to fuel your muscles with 362 calories per serving to promote faster muscle synthesis and prevent post-workout muscle loss. With 56g of complex carbohydrates per serving, this heavy Nutradyne Healthcare Mass Gainer supplement helps refill the glycogen reserves in the body which are used as fuel during intense workouts. Contains 27g of protein per serving which triggers the synthesis of new muscle tissues and boosts muscle recovery.</p>
            <p>To gain weight, you need to consume more calories than your body needs for normal functioning. Nutradyne Healthcare Mass Gainer gives you 1086 calories in one serving. Adding Nutradyne Healthcare Mass Gainer to your diet will dramatically increase the calorie intake and these extra calories will help you in gaining weight quickly. This formula is not just about gaining weight but it also gives you 81g of a high-quality protein blend, Creatine, Glutamine for better muscle recovery.</p>

            <h4 class="title mt-4">Ingredients:</h4>
            <p>Maltodextrin, Whey Protein Concentrate, Milk Casein, Nature Identical Vanilla Flavour, Creatine, Artificial Sweetener (INS 955), Xanthan Gum, Digezyme (Multi Enzyme Complex).</p>

            <h4 class="title mt-4">Important Information:</h4>
            <ul class="mb-3">
                <li class="mb-2">Product is not sold for medicinal use or parenteral use.</li>
                <li class="mb-2">Pregnant, nursing or lactating women, infants, children, adolescents and elderly should consult a medical practitioner before use.</li>
                <li class="mb-2">Food for special dietary use-food for weight control and management.</li>
            </ul>

            <h4 class="title mt-4">Allergen Information:</h4>
            <p>Made in a facility that also processes soy, milk and nuts.</p>
            <p>Not recommended for children. Not to exceed the recommended dosage.</p>

            <h4 class="title mt-4">Directions For Use:</h4>
            <p><strong>Serving Guide:</strong> Add your preferred amount of water or skimmed milk into shaker. Then add 2 scoops (approx. 50g) of Nutradyne Healthcare Mass Gainer, shake and consume. Use 2 times daily for optimal results.</p>

            <h4 class="title mt-4">How to Use:</h4>
            <ul class="mb-3">
                <li class="mb-2"><strong>SHAKE:</strong> Add 2 scoops to 300 ml of liquid in a shaker cup. Secure the top and shake for 20-30 seconds.</li>
                <li class="mb-2"><strong>STIR:</strong> Add 2 scoops to 300 ml of liquid in a glass and stir for 20-30 seconds until powder is completely dissolved.</li>
                <li class="mb-2"><strong>BLEND:</strong> Add 2 scoops to 300 ml of liquid in a blender and mix add 1-2 ice cubes for a frosty shake.</li>
            </ul>

            <h4 class="title mt-4">Warning:</h4>
            <p>Consult your Healthcare Professional prior to using this supplement if you have or suspect a medical condition, are taking prescription drugs or are pregnant or lactating. This product is not intended to diagnose, treat, cure or prevent any disease. Do not consume if you are allergic to any of the ingredients in this product label.</p>
        `,
        nutrition: [
            { key: 'Calories (Kcal)', value: '362' },
            { key: 'Protein (g)', value: '27' },
            { key: 'Total Carbohydrate (g)', value: '58.34' },
            { key: 'Total Fat (g)', value: '2.167' },
            { key: 'Sugar (g)', value: '0.67' },
            { key: 'Fiber (g)', value: '5' },
            { key: 'Cholesterol (mg)', value: '40' },
            { key: 'Sodium (mg)', value: '42' },
            { key: 'Glutamine (g)', value: '1' },
            { key: 'Creatine Monohydrate (g)', value: '1' },
            { key: 'Serving Size', value: '2 scoops (50g)' },
            { key: 'Net Weight', value: '1kg (2.2 lbs)' },
            { key: 'Servings Per Container', value: '20' },
        ]
    },
    {
        id: 'whey-protein-vanilla-1kg',
        name: 'Whey Protein Vanilla Flavour - 1kg',
        brand: 'Nutradyne',
        shortDescription: 'Nutradyne Whey Protein Vanilla Flavour 1kg is an advanced muscle-building formula with 25g protein, 5.5g BCAAs, and 4.14g glutamine per serving.',
        price: '₹ 2999/-',
        oldPrice: '₹ 3999/-',
        discount: '25% OFF',
        rating: 4.8,
        images: [
            '/images/whey-protein/01.jfif',
            '/images/whey-protein/02.jfif',
            '/images/whey-protein/03.jfif',
        ],
        description: `
            <h4 class="title">NUTRADYNE HEALTHCARE WHEY PROTEIN</h4>
            <p>Nutradyne Healthcare Whey Protein gives an immediate spike of amino acids in blood for immediate recovery after workout or when your body requires amino acids immediately.</p>
            <p>This Unique Whey Protein Concentrate Helps Bodybuilders, Athletes or Any Sportsperson With Better Recovery of Muscles. The Specifications of This Product Adhere to the Most Stringent International Standards and Regulatory Norms.</p>
            <p>It Is a Unique Blend of 5 Specific Enzymes, Viz. α-amylase (Starch Hydrolyzing Enzyme), Protease (Protein Hydrolyzing Enzyme), Lipase (Fat Hydrolyzing Enzyme), Cellulase (Cellulose Hydrolyzing Enzyme), and Lactase (Lactose Hydrolyzing Enzyme).</p>

            <h4 class="title mt-4">Ingredients:</h4>
            <p>Whey Protein Blend (Whey Protein Isolate, Whey Protein Concentrate, Whey Protein Hydrolysate), Sweetener (INS 960), Digestive enzymes (Protease, Amylase, Lactase), Anti-Caking agent (Silicon dioxide-INS 551), Preservatives (INS 211), Nature identical flavor (Vanilla).</p>
            
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
            <p><strong>Serving Guide:</strong> Mix one level scoop (approx. 33g) with 200ml of water or milk (for the smoothest result, use a blender). We recommend 1-4 portions per day depending on your protein requirements. Take at any time of day to boost your total protein intake. If you mix with milk you add an extra 8g of protein, plus 85 calories.</p>

            <h4 class="title mt-4">How to Use:</h4>
            <ul class="mb-3">
                <li class="mb-2"><strong>SHAKE:</strong> Add 1 scoop of Whey Protein 250-300 ml of liquid to a shaker cup. Secure the top and shake for 20-30 seconds.</li>
                <li class="mb-2"><strong>STIR:</strong> Add 1 scoop of Whey Protein 250-300 ml of liquid to a glass and stir for 20-30 seconds until powder is completely dissolved.</li>
                <li class="mb-2"><strong>BLEND:</strong> Add 1 scoop of Whey Protein 250-300 ml of liquid to a blender and mix add 1-2 ice cubes for a frosty shake.</li>
                <li class="mb-2"><strong>PRE:</strong> Before training, Whey Protein is a great tasting and easy to digest source of time released amino acids.</li>
                <li class="mb-2"><strong>POST:</strong> After a workout, Whey Protein is fast acting. It immediately starts repairing and building muscle.</li>
            </ul>

            <h4 class="title mt-4">Warning:</h4>
            <p>Consult your Healthcare Professional prior to using this supplement if you have or suspect a medical condition, are taking prescription drugs or are pregnant or lactating. This product is not intended to diagnose, treat, cure or prevent any disease. Do not consume if you are allergic to any of the ingredients in this product label.</p>
        `,
        nutrition: [
            { key: 'Energy (Kcal)', value: '122.00' },
            { key: 'Protein (g)', value: '25.00' },
            { key: 'Carbohydrates (g)', value: '2.80' },
            { key: 'Total Sugars (g)', value: '0.76' },
            { key: 'Added Sugars (g)', value: '0.00' },
            { key: 'Total Fat (g)', value: '1.20' },
            { key: 'Saturated Fat (g)', value: '0.42' },
            { key: 'Trans Fat (g)', value: '0.00' },
            { key: 'Cholesterol (mg)', value: '1.00' },
            { key: 'Sodium (mg)', value: '85.00' },
            { key: 'Potassium (mg)', value: '70.00' },
            { key: 'Serving Size', value: '33g' },
            { key: 'Net Weight', value: '1kg (2.2 lbs)' },
            { key: 'Servings Per Container', value: '30' },
            { key: 'L-Aspartic Acid (g)', value: '2.745' },
            { key: 'L-Leucine (g)', value: '2.628' },
            { key: 'L-Lysine (g)', value: '2.492' },
            { key: 'L-Threonine (g)', value: '1.750' },
            { key: 'L-Isoleucine (g)', value: '1.566' },
            { key: 'L-Tyrosine (g)', value: '0.684' },
            { key: 'L-Valine (g)', value: '1.409' },
            { key: 'L-Methionine (g)', value: '0.585' },
            { key: 'L-Alanine (g)', value: '1.157' },
            { key: 'L-Histidine (g)', value: '0.388' },
            { key: 'L-Phenylalanine (g)', value: '0.784' },
            { key: 'L-Tryptophan (g)', value: '0.386' },
            { key: 'L-Cysteine (g)', value: '0.724' },
            { key: 'L-Hydroxyproline (g)', value: '0.003' },
            { key: 'L-Arginine (g)', value: '0.691' },
            { key: 'L-Glutamic Acid (g)', value: '4.140' },
            { key: 'L-Serine (g)', value: '1.397' },
            { key: 'L-Proline (g)', value: '1.342' },
            { key: 'L-Glycine (g)', value: '0.427' },
        ]
    }
];

export const getProductById = (id: string | undefined): Product | undefined => {
    return products.find(p => p.id === id);
};
