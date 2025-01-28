const suggestions = {
    light: {
        casual: {
            male: {
                small: {
                    beach:
                    [
                        'Slim-fit linen shirts', 
                        'Tailored shorts', 
                        'Leather sandals',
                        'Walk barefoot at the water’s edge, looking over your shoulder at the camera.',
                        'Stand with hands in pockets, gazing at the horizon.',
                        'Sit cross-legged on the sand, smiling naturally.'
                    ],
                    mountains: [
                        'Light jackets',
                        'Slim jeans',
                        'Trail sneakers',
                        'Stand on a rock with arms spread wide.',
                        'Lean casually on a hiking pole.',
                        'Sit on a tree stump, looking contemplative.'
                    ],
                    city: [
                        'Polo shirts',
                        'Chinos',
                        'Loafers',
                        'Lean against a streetlight with arms crossed.',
                        'Walk down the street mid-stride.',
                        'Sit on a bench with one arm resting on the backrest.'
                    ],
                    countryside: [
                        'Plaid shirts',
                        'Tapered trousers',
                        'Chelsea boots',
                        'Lean against a wooden fence with one foot raised.',
                        'Walk down a dirt path, holding a hat.',
                        'Sit on a bale of hay, looking relaxed.'
                    ]
                },
                medium: {
                    beach: [
                        'Linen polos',
                        'Casual shorts',
                        'Canvas sneakers',
                        'Walk along the shoreline, hands in pockets.',
                        'Sit on a beach chair with legs stretched out.',
                        'Hold sunglasses while looking away from the camera.'
                    ],
                    mountains: [
                        'Light pullovers',
                        'Slim-fit jeans',
                        'Hiking shoes',
                        'Stand near a cliff edge, arms crossed.',
                        'Pose mid-step on a hiking trail.',
                        'Sit with a backpack beside you, looking at the horizon.'
                    ],
                    city: [
                        'Fitted t-shirts',
                        'Straight trousers',
                        'Casual loafers',
                        'Stand in front of graffiti art with hands in pockets.',
                        'Walk across a crosswalk, looking to the side.',
                        'Sit on a bench with a coffee cup in hand.'
                    ],
                    countryside: [
                        'Checked shirts',
                        'Relaxed pants',
                        'Durable boots',
                        'Walk along a country path, smiling casually.',
                        'Stand by a rustic wooden gate, arms resting on the top bar.',
                        'Sit on a rock with one leg raised, holding a hat.'
                    ]
                },
                large: {
                    beach: [
                        'Loose-fit polos', 
                        'Bermuda shorts', 
                        'Slides',
                        'Walk along the shoreline, hands in pockets, looking relaxed.',
                        'Sit on a beach chair with one leg bent and smiling at the camera.',
                        'Hold a beach ball while standing sideways, looking over your shoulder.'
                    ],
                    mountains: [
                        'Puffer jackets', 
                        'Relaxed jeans', 
                        'Hiking boots',
                        'Stand on a trail with arms wide open, facing the camera.',
                        'Sit on a rock with your backpack beside you, gazing into the distance.',
                        'Lean on a hiking pole, smiling naturally.'
                    ],
                    city: [
                        'Henley shirts', 
                        'Comfort trousers', 
                        'Slip-on loafers',
                        'Stand against a city wall with one foot propped up.',
                        'Walk down the street mid-stride, holding a shopping bag.',
                        'Sit on a bench with arms stretched along the backrest, looking confident.'
                    ],
                    countryside: [
                        'Knitted sweaters', 
                        'Stretch trousers', 
                        'Work boots',
                        'Lean against a wooden fence, holding a hat in one hand.',
                        'Stand on a dirt road with one hand in your pocket, looking at the camera.',
                        'Sit on a hay bale with legs crossed, smiling warmly.'
                    ]
                },
                plus: {
                    beach: [
                        'Cotton t-shirts', 
                        'Wide-leg shorts', 
                        'Flip-flops',
                        'Walk barefoot on the sand, holding a sunhat in one hand.',
                        'Sit on a beach towel with legs stretched out, smiling at the camera.',
                        'Stand near the water’s edge, gazing at the horizon with arms crossed.'
                    ],
                    mountains: [
                        'Quilted jackets', 
                        'Comfort-fit pants', 
                        'Hiking boots',
                        'Stand on a rocky trail, resting hands on your hips.',
                        'Sit on a log with a thermos in hand, smiling warmly.',
                        'Pose mid-step on a hiking trail, looking confident.'
                    ],
                    city: [
                        'Relaxed-fit shirts', 
                        'Tapered trousers', 
                        'Casual sneakers',
                        'Lean casually against a building wall, hands in pockets.',
                        'Walk down a busy street, holding a coffee cup.',
                        'Sit on a park bench, arms relaxed and smiling at the camera.'
                    ],
                    countryside: [
                        'Cozy cardigans', 
                        'Stretchy pants', 
                        'Durable boots',
                        'Stand near a wooden fence, arms resting on the top rail.',
                        'Walk along a dirt path, holding a small bouquet of wildflowers.',
                        'Sit on a haystack, hands resting on your knees, smiling softly.'
                    ]
                }
            },
            female: {
                small: {
                    beach: [
                        'Crop tops',
                        'High-waisted shorts',
                        'Strappy sandals',
                        'Stand at the water’s edge, holding a sunhat and smiling.',
                        'Sit on a beach towel with knees bent and hands resting on the sand.',
                        'Walk barefoot along the shoreline, looking over your shoulder.'
                    ],
                    mountains: [
                        'Fitted sweaters',
                        'Skinny jeans',
                        'Flat boots',
                        'Stand on a rock with arms spread wide.',
                        'Sit on a fallen tree trunk, looking into the distance.',
                        'Pose mid-step on a hiking trail, smiling brightly.'
                    ],
                    city: [
                        'Blouses',
                        'Straight-leg pants',
                        'Ballet flats',
                        'Lean casually against a streetlight, arms crossed.',
                        'Walk down a busy street holding a small handbag.',
                        'Sit on a bench, legs crossed, looking confidently at the camera.'
                    ],
                    countryside: [
                        'Floral dresses',
                        'Knitted shawls',
                        'Comfortable shoes',
                        'Stand in a field of flowers, holding a small bouquet.',
                        'Sit on a wooden fence, one leg bent and relaxed.',
                        'Walk along a dirt path, gently holding the edge of your dress.'
                    ]
                },
                medium: {
                    beach: [
                        'Linen tank tops',
                        'Flowy skirts',
                        'Flat sandals',
                        'Stand near the water, hands on hips, smiling at the horizon.',
                        'Sit cross-legged on the sand, holding a seashell.',
                        'Walk along the beach, looking down at your feet.'
                    ],
                    mountains: [
                        'Lightweight cardigans',
                        'High-rise jeans',
                        'Ankle boots',
                        'Stand near a tree, arms wrapped around yourself for warmth.',
                        'Sit on a rock, one knee bent, gazing into the distance.',
                        'Walk confidently on a hiking trail, holding a water bottle.'
                    ],
                    city: [
                        'Structured tops',
                        'Straight trousers',
                        'Kitten heels',
                        'Stand against a textured wall, one foot propped up.',
                        'Walk through a crosswalk, looking to the side.',
                        'Sit on a café chair, holding a coffee cup and smiling casually.'
                    ],
                    countryside: [
                        'A-line dresses',
                        'Cozy shawls',
                        'Flat boots',
                        'Walk through tall grass, hands lightly brushing the tips.',
                        'Stand on a dirt road with a small basket of flowers.',
                        'Sit on a haystack, legs crossed and smiling warmly.'
                    ]
                },
                large: {
                    beach: [
                        'Loose tank tops',
                        'Wide-leg pants',
                        'Slides',
                        'Stand with hands on hips, gazing at the ocean.',
                        'Sit on the sand with legs stretched out, smiling at the camera.',
                        'Walk barefoot along the water, holding sandals in one hand.'
                    ],
                    mountains: [
                        'Chunky sweaters',
                        'Relaxed jeans',
                        'Chelsea boots',
                        'Stand near a wooden signpost, arms relaxed by your sides.',
                        'Sit on a rock with hands resting on your lap, looking serene.',
                        'Walk along a trail, holding a small backpack.'
                    ],
                    city: [
                        'V-neck tops',
                        'Bootcut trousers',
                        'Comfort loafers',
                        'Lean against a railing, one arm resting casually.',
                        'Walk on a cobblestone street, looking confidently forward.',
                        'Sit on a bench, hands resting on your thighs, smiling naturally.'
                    ],
                    countryside: [
                        'Shirt dresses',
                        'Warm scarves',
                        'Flat boots',
                        'Stand by a wooden gate, holding a scarf close to your chest.',
                        'Walk along a winding path, looking back over your shoulder.',
                        'Sit on a fence, one leg bent, gazing at the horizon.'
                    ]
                },
                plus: {
                    beach: [
                        'Flowy maxi dresses',
                        'Wide-brim hats',
                        'Comfort sandals',
                        'Stand in the water, holding your hat to shield the sun.',
                        'Sit on a beach blanket with legs folded, smiling warmly.',
                        'Walk along the shoreline, letting the dress flow in the wind.'
                    ],
                    mountains: [
                        'Oversized cardigans',
                        'Stretchy leggings',
                        'Knee-high boots',
                        'Stand near a tree, holding a cup of warm drink.',
                        'Sit on a large rock, leaning slightly forward and smiling.',
                        'Pose mid-step on a mountain path, looking determined.'
                    ],
                    city: [
                        'Peplum tops',
                        'Straight trousers',
                        'Chunky heels',
                        'Lean against a brick wall, hands in pockets.',
                        'Walk down a sidewalk, holding a stylish handbag.',
                        'Sit at an outdoor café table, sipping coffee.'
                    ],
                    countryside: [
                        'Knitted dresses',
                        'Shawls',
                        'Comfortable flats',
                        'Stand on a grassy hill, holding the edge of a shawl.',
                        'Walk along a country path, arms gently swaying by your sides.',
                        'Sit on a hay bale, legs crossed, looking serene.'
                    ]
                }
            }
        },  
        formal: {
            male: {
                small: {
                    beach: [
                        'Linen blazers',
                        'Slim trousers',
                        'Leather loafers',
                        'Stand near the shore with hands in pockets, looking thoughtfully to the side.',
                        'Sit on a wooden stool by the water, one leg crossed over the other.',
                        'Walk along the sand, blazer open and smiling confidently.'
                    ],
                    mountains: [
                        'Tailored coats',
                        'Dress pants',
                        'Chelsea boots',
                        'Stand on a mountain trail, adjusting your coat collar.',
                        'Lean against a tree, one leg slightly bent.',
                        'Pose mid-step on a rocky path, looking determined.'
                    ],
                    city: [
                        'Slim-fit suits',
                        'Oxford shoes',
                        'Minimalist ties',
                        'Stand confidently on a city sidewalk, one hand adjusting your tie.',
                        'Walk briskly across a crosswalk, holding a briefcase.',
                        'Sit on a bench with legs crossed, looking composed.'
                    ],
                    countryside: [
                        'Textured suits',
                        'Straight trousers',
                        'Rustic boots',
                        'Stand near a wooden fence, arms resting on the top bar.',
                        'Walk along a dirt road, holding a hat in one hand.',
                        'Sit on a hay bale with one foot resting on the ground.'
                    ]
                },
                medium: {
                    beach: [
                        'Soft-colored blazers',
                        'Dress shorts',
                        'Slip-on loafers',
                        'Stand by the water with blazer slung over one shoulder.',
                        'Sit on a beach chair, legs crossed, holding sunglasses.',
                        'Walk barefoot along the shore, smiling casually.'
                    ],
                    mountains: [
                        'Wool jackets',
                        'Tapered trousers',
                        'Wingtip shoes',
                        'Stand against a wooden railing, arms crossed confidently.',
                        'Sit on a rock, holding a walking stick.',
                        'Walk up a trail, adjusting your jacket lapel.'
                    ],
                    city: [
                        'Fitted suits',
                        'Polished shoes',
                        'Minimalist accessories',
                        'Stand on a street corner, hands in pockets, looking sharp.',
                        'Walk along a cobblestone street, briefcase in hand.',
                        'Sit at an outdoor café, sipping a coffee and smiling.'
                    ],
                    countryside: [
                        'Earth-tone jackets',
                        'Straight trousers',
                        'Leather boots',
                        'Stand in a field, hands on hips, looking confident.',
                        'Sit on a wooden fence, one leg stretched out.',
                        'Walk along a rustic path, holding a notebook.'
                    ]
                },
                large: {
                    beach: [
                        'Relaxed-fit jackets',
                        'Chino pants',
                        'Comfort loafers',
                        'Stand on a pier, arms crossed and smiling.',
                        'Sit on a low wall near the water, looking relaxed.',
                        'Walk along the shore with blazer open, gazing into the distance.'
                    ],
                    mountains: [
                        'Heavy coats',
                        'Wide-leg trousers',
                        'Dress boots',
                        'Stand on a mountain ridge, hands in pockets, looking composed.',
                        'Sit on a log, one arm resting on your knee.',
                        'Walk along a snowy trail, adjusting your scarf.'
                    ],
                    city: [
                        'Classic suits',
                        'Wide-fit shoes',
                        'Bold watches',
                        'Lean casually against a lamppost, arms crossed.',
                        'Walk confidently down a busy street, holding a briefcase.',
                        'Sit on a bench with a newspaper, looking sophisticated.'
                    ],
                    countryside: [
                        'Earth-tone blazers',
                        'Comfort-fit trousers',
                        'Knitted scarves',
                        'Stand by a wooden gate, scarf wrapped loosely around your neck.',
                        'Walk through a field, blazer buttoned up, holding a book.',
                        'Sit on a haystack, smiling warmly.'
                    ]
                },
                plus: {
                    beach: [
                        'Breathable blazers',
                        'Elastic trousers',
                        'Slip-ons',
                        'Stand by the water’s edge, arms relaxed at your sides.',
                        'Sit on a beach chair, legs stretched out, looking at the horizon.',
                        'Walk along the beach, holding your shoes in one hand.'
                    ],
                    mountains: [
                        'Thicker jackets',
                        'Stretch-fit pants',
                        'Polished boots',
                        'Stand by a trail sign, hands resting on your hips.',
                        'Sit on a large rock, scarf wrapped snugly around your neck.',
                        'Walk confidently up a mountain path, looking ahead.'
                    ],
                    city: [
                        'Relaxed suits',
                        'Wide-fit loafers',
                        'Bold cufflinks',
                        'Stand on a city balcony, arms resting on the railing.',
                        'Walk across a busy street, briefcase in hand.',
                        'Sit at a café table, holding a cup of coffee and smiling warmly.'
                    ],
                    countryside: [
                        'Rustic suits',
                        'Stretchy pants',
                        'Suede shoes',
                        'Stand near a barn, hands in pockets, looking thoughtful.',
                        'Walk along a dirt path, holding a notebook and pen.',
                        'Sit on a fence, one foot resting on a lower rail.'
                    ]
                }
            },
            female: {
                small: {
                    beach: [
                        'Halter dresses',
                        'Pearl earrings',
                        'Strappy heels',
                        'Stand at the shoreline, one hand holding your dress and the other shielding your eyes from the sun.',
                        'Sit on a rock near the water, legs crossed elegantly.',
                        'Walk barefoot along the sand, holding heels in one hand, looking over your shoulder.'
                    ],
                    mountains: [
                        'Fitted coats',
                        'Skinny trousers',
                        'High boots',
                        'Stand on a snowy trail with your hands in your coat pockets, smiling warmly.',
                        'Sit on a wooden log with one leg crossed over the other, holding a thermos.',
                        'Walk along a mountain path, adjusting your scarf as the wind blows.'
                    ],
                    city: [
                        'Pencil dresses',
                        'Bold necklaces',
                        'Pointed pumps',
                        'Stand confidently on a busy sidewalk, one hand on your hip.',
                        'Walk across a crosswalk, holding a clutch bag stylishly.',
                        'Sit at a café with legs crossed, holding a coffee cup and looking poised.'
                    ],
                    countryside: [
                        'Layered skirts',
                        'Simple bracelets',
                        'Flat shoes',
                        'Stand near a wooden fence with hands resting gently on the top rail.',
                        'Walk down a dirt path holding a bouquet of wildflowers.',
                        'Sit on a hay bale, smiling softly with hands folded in your lap.'
                    ]
                },
                medium: {
                    beach: [
                        'Soft chiffon dresses',
                        'Gold necklaces',
                        'Block heels',
                        'Stand by the water’s edge, the breeze gently lifting your dress.',
                        'Sit on a beach towel, legs stretched out gracefully, holding sunglasses.',
                        'Walk along the shoreline, gazing at the horizon with a serene expression.'
                    ],
                    mountains: [
                        'Velvet gowns',
                        'Faux-fur jackets',
                        'Ankle boots',
                        'Stand near a snow-covered tree, one hand resting on the trunk.',
                        'Sit on a large boulder, holding a mug of hot cocoa, looking contemplative.',
                        'Walk along a snowy trail, holding your gown slightly off the ground.'
                    ],
                    city: [
                        'Structured dresses',
                        'Statement jewelry',
                        'High heels',
                        'Stand near a modern building, arms crossed with a confident gaze.',
                        'Walk along a busy street, holding a stylish handbag.',
                        'Sit at a restaurant table, legs crossed, sipping tea and looking elegant.'
                    ],
                    countryside: [
                        'Elegant maxi dresses',
                        'Subtle accessories',
                        'Flat boots',
                        'Stand in a field of wildflowers, holding the edge of your dress with both hands.',
                        'Walk along a rustic path, scarf loosely draped over your shoulders.',
                        'Sit on a wooden fence, one leg dangling, looking at the countryside view.'
                    ]
                },
                large: {
                    beach: [
                        'Flowy dresses',
                        'Straw hats',
                        'Comfort sandals',
                        'Stand with one hand on your hat, gazing into the distance.',
                        'Sit on a beach rock with legs crossed gracefully.',
                        'Walk barefoot along the waterline, letting your dress flow in the wind.'
                    ],
                    mountains: [
                        'Layered cardigans',
                        'Straight trousers',
                        'Block heels',
                        'Stand on a trail with your arms loosely crossed, smiling warmly.',
                        'Sit on a rock with hands resting on your knees, looking relaxed.',
                        'Walk along a path, holding your scarf as the wind picks up.'
                    ],
                    city: [
                        'A-line dresses',
                        'Layered necklaces',
                        'Comfort loafers',
                        'Lean against a city lamppost, arms crossed and looking confident.',
                        'Walk along a cobblestone street, handbag swinging casually.',
                        'Sit on a park bench, legs crossed, gazing into the distance.'
                    ],
                    countryside: [
                        'Rustic evening wear',
                        'Pearl bracelets',
                        'Wedge boots',
                        'Stand near a barn door, one hand gently brushing your dress.',
                        'Walk through tall grass, holding a shawl around your shoulders.',
                        'Sit on a haystack, smiling warmly, hands folded in your lap.'
                    ]
                },
                plus: {
                    beach: [
                        'Maxi dresses',
                        'Wide-brim hats',
                        'Comfortable sandals',
                        'Stand on the sand, holding your hat to shield your face from the sun.',
                        'Sit on a beach blanket, legs crossed gracefully, smiling softly.',
                        'Walk along the shoreline, letting your dress sway with the breeze.'
                    ],
                    mountains: [
                        'Oversized coats',
                        'Wide-leg trousers',
                        'Chunky heels',
                        'Stand on a snowy path, holding a cup of hot tea with both hands.',
                        'Sit on a large rock, scarf wrapped around your neck, gazing into the distance.',
                        'Walk confidently along a trail, coat flowing as you move.'
                    ],
                    city: [
                        'Peplum tops',
                        'Tapered trousers',
                        'Chunky loafers',
                        'Stand near a city fountain, arms relaxed at your sides.',
                        'Walk along a busy street, holding a designer bag.',
                        'Sit at a café table, legs crossed, sipping tea and looking serene.'
                    ],
                    countryside: [
                        'Rustic formal wear',
                        'Minimalist jewelry',
                        'Ankle boots',
                        'Stand near a wooden gate, hands gently resting on the top rail.',
                        'Walk along a country lane, scarf flowing behind you.',
                        'Sit on a hay bale, hands folded, smiling warmly at the camera.'
                    ]

                }
            }
        }
    },
    medium: {
        casual: {
            male: {
                small: {
                    beach: [
                    'Cotton polos',
                    'Chino shorts',
                    'Flip-flops',
                    'Stand by the water’s edge with hands in pockets, gazing at the horizon.',
                    'Sit on a beach chair, leaning back with one leg crossed.',
                    'Walk barefoot along the shoreline, smiling casually.'
                ],
                mountains: [
                    'Lightweight pullovers',
                    'Slim-fit jeans',
                    'Hiking boots',
                    'Stand on a rocky trail, hands on your hips, looking determined.',
                    'Sit on a log, holding a water bottle and looking relaxed.',
                    'Walk along the trail with a backpack slung over one shoulder.'
                ],
                city: [
                    'Button-down shirts',
                    'Chinos',
                    'Casual loafers',
                    'Lean against a streetlight with arms crossed, looking confident.',
                    'Walk along a cobblestone path, holding a coffee cup.',
                    'Sit at a park bench, legs crossed, looking at your phone.'
                ],
                countryside: [
                    'Plaid shirts',
                    'Straight-leg trousers',
                    'Chelsea boots',
                    'Stand near a wooden fence, one hand resting on the top rail.',
                    'Walk down a dirt path, hands in pockets, looking relaxed.',
                    'Sit on a hay bale, arms resting on your knees, smiling softly.'
                ]
                },
                medium: {
                    beach: [
                        'Striped t-shirts',
                        'Cargo shorts',
                        'Sandals',
                        'Stand with hands on your hips, looking out at the ocean.',
                        'Sit cross-legged on the sand, holding a drink.',
                        'Walk along the shoreline, kicking up sand with each step.'
                    ],
                    mountains: [
                        'Fleece jackets',
                        'Relaxed-fit jeans',
                        'Trail shoes',
                        'Pose mid-step on a hiking trail, smiling confidently.',
                        'Sit on a rock, hands resting on your knees, looking thoughtful.',
                        'Stand against a wooden signpost, arms folded casually.'
                    ],
                    city: [
                        'Henley shirts',
                        'Tapered pants',
                        'Low-top sneakers',
                        'Stand near a graffiti wall, one hand in your pocket.',
                        'Walk along a busy street, holding a messenger bag.',
                        'Sit at an outdoor café, sipping a drink and smiling naturally.'
                    ],
                    countryside: [
                        'Knitted sweaters',
                        'Stretchy trousers',
                        'Durable boots',
                        'Stand in a field, arms outstretched as if embracing the scenery.',
                        'Sit on a large rock, holding a book and looking relaxed.',
                        'Walk along a trail, hands in pockets, smiling warmly.'
                    ]
                },
                large: {
                    beach: [
                        'Loose linen shirts',
                        'Elastic-waist shorts',
                        'Slides',
                        'Stand by the water, arms crossed, smiling confidently.',
                        'Sit on the sand, leaning back on your hands, looking relaxed.',
                        'Walk along the shoreline with sandals in one hand.'
                    ],
                    mountains: [
                        'Quilted vests',
                        'Comfort-fit pants',
                        'Hiking boots',
                        'Stand near a cliff edge, arms spread wide.',
                        'Sit on a tree stump, looking at the mountains.',
                        'Walk along a winding path, holding a walking stick.'
                    ],
                    city: [
                        'Relaxed-fit t-shirts',
                        'Comfortable trousers',
                        'Slip-on loafers',
                        'Stand at a street corner, looking down at your watch.',
                        'Walk along a park path, holding a drink.',
                        'Sit on a bench, one arm resting on the backrest.'
                    ],
                    countryside: [
                        'Knitted pullovers',
                        'Straight-leg jeans',
                        'Work boots',
                        'Stand near a barn, hands in pockets, looking at the horizon.',
                        'Walk along a dirt road, holding a straw hat.',
                        'Sit on a bale of hay, smiling warmly.'
                    ]
                },
                plus: {
                    beach: [
                        'Breathable cotton t-shirts',
                        'Wide-leg shorts',
                        'Flip-flops',
                        'Stand near the water with hands in your pockets, looking relaxed.',
                        'Sit on a beach towel, legs stretched out, smiling softly.',
                        'Walk along the shore, letting the breeze flow through your shirt.'
                    ],
                    mountains: [
                        'Oversized jackets',
                        'Stretchable pants',
                        'Sturdy boots',
                        'Stand near a trailhead, adjusting your jacket collar.',
                        'Sit on a large boulder, scarf wrapped snugly around your neck.',
                        'Walk along a trail, looking ahead confidently.'
                    ],
                    city: [
                        'Relaxed-fit shirts',
                        'Wide trousers',
                        'Casual sneakers',
                        'Lean against a lamppost, hands in your pockets, looking casual.',
                        'Walk along a sidewalk, holding a coffee cup.',
                        'Sit at a café table, legs crossed, smiling naturally.'
                    ],
                    countryside: [
                        'Layered cardigans',
                        'Comfort-fit pants',
                        'Chelsea boots',
                        'Stand near a wooden fence, one hand resting on the top rail.',
                        'Walk along a dirt path, holding a small bouquet of flowers.',
                        'Sit on a haystack, hands resting on your knees, smiling warmly.'
                    ]
                }
            },
            female: {
                small: {
                    beach: [
                        'Tank tops',
                        'High-waisted shorts',
                        'Flat sandals',
                        'Stand near the water, one hand shielding your eyes.',
                        'Sit on a towel with legs bent to the side, smiling softly.',
                        'Walk along the shoreline, letting the breeze flow through your hair.'
                    ],
                    mountains: [
                        'Light sweaters',
                        'Skinny jeans',
                        'Ankle boots',
                        'Stand near a tree, arms wrapped around yourself for warmth.',
                        'Sit on a log, holding a thermos.',
                        'Walk along a rocky path, scarf flowing in the breeze.'
                    ],
                    city: [
                        'Blouses',
                        'Straight-leg pants',
                        'Ballet flats',
                        'Stand against a wall, one hand in your pocket.',
                        'Walk confidently through a busy street.',
                        'Sit on a bench, legs crossed, looking composed.'
                    ],
                    countryside: [
                        'Floral dresses',
                        'Knitted shawls',
                        'Comfortable flats',
                        'Stand in a field, gently holding a flower.',
                        'Sit on a wooden fence, legs swinging gently.',
                        'Walk along a dirt path, holding a basket.'
                    ]
                },
                medium: {
                    beach: [
                        'Off-shoulder tops',
                        'Flowy skirts',
                        'Platform sandals',
                        'Stand near the water with arms outstretched.',
                        'Sit on a beach chair, legs crossed at the ankles, smiling brightly.',
                        'Walk barefoot along the shore, holding your sandals in one hand.'
                    ],
                    mountains: [
                        'Knitted cardigans',
                        'High-rise jeans',
                        'Hiking boots',
                        'Stand on a trail, holding a walking stick, looking determined.',
                        'Sit on a rock with your hands resting on your lap, gazing ahead.',
                        'Walk along a forest trail, adjusting your cardigan.'
                    ],
                    city: [
                        'Structured tops',
                        'Bootcut trousers',
                        'Kitten heels',
                        'Stand near a modern building, one hand on your hip.',
                        'Walk across a plaza, holding a coffee cup.',
                        'Sit on a café patio, one leg crossed over the other, looking relaxed.'
                    ],
                    countryside: [
                        'A-line dresses',
                        'Warm scarves',
                        'Flat boots',
                        'Stand by a wooden fence, arms folded gently.',
                        'Walk through tall grass, holding your dress lightly.',
                        'Sit on a hay bale, hands resting in your lap, smiling softly.'
                    ]
                },
                large: {
                    beach: [
                        'Loose tank tops',
                        'Wide-leg pants',
                        'Slides',
                        'Stand at the water’s edge, one hand adjusting your hat.',
                        'Sit on a beach towel, legs stretched out, smiling warmly.',
                        'Walk along the beach with a flowing dress, looking over your shoulder.'
                    ],
                    mountains: [
                        'Oversized sweaters',
                        'Relaxed-fit jeans',
                        'Chelsea boots',
                        'Stand on a mountain trail with hands in your pockets, looking confident.',
                        'Sit on a large boulder, holding a thermos and gazing into the distance.',
                        'Walk up a forest trail, holding your scarf against the wind.'
                    ],
                    city: [
                        'V-neck blouses',
                        'Tapered trousers',
                        'Comfort loafers',
                        'Stand near a lamppost, arms crossed with a subtle smile.',
                        'Walk through a park, holding a stylish handbag.',
                        'Sit on a bench, legs crossed, reading a book.'
                    ],
                    countryside: [
                        'Shirt dresses',
                        'Warm shawls',
                        'Flat boots',
                        'Stand near a barn, holding a bouquet of flowers.',
                        'Walk along a dirt path, arms swaying naturally.',
                        'Sit on a wooden fence, looking relaxed and happy.'
                    ]
                },
                plus: {
                    beach: [
                        'Flowy maxi dresses',
                        'Straw hats',
                        'Comfortable sandals',
                        'Stand by the shoreline, holding your hat with both hands.',
                        'Sit on a large rock, legs crossed, gazing at the ocean.',
                        'Walk along the shore, letting your dress sway in the wind.'
                    ],
                    mountains: [
                        'Oversized cardigans',
                        'Stretchy leggings',
                        'Knee-high boots',
                        'Stand by a tree with arms crossed, looking confident.',
                        'Sit on a rock, scarf wrapped snugly, holding a cup of tea.',
                        'Walk along a snowy trail, holding your coat closed against the wind.'
                    ],
                    city: [
                        'Peplum tops',
                        'Straight trousers',
                        'Chunky heels',
                        'Stand near a city fountain, one hand resting on your hip.',
                        'Walk along a cobblestone street, smiling confidently.',
                        'Sit at a café table, sipping coffee and enjoying the view.'
                    ],
                    countryside: [
                        'Knitted dresses',
                        'Cozy scarves',
                        'Comfort flats',
                        'Stand in a field of wildflowers, scarf flowing gently.',
                        'Walk down a country road, holding your dress lightly.',
                        'Sit on a hay bale, hands folded in your lap, smiling warmly.'
                    ]
                }
            }
        },
        formal: {
            male: {
                small: {
                    beach: [
                        'Lightweight blazers',
                        'Tailored pants',
                        'Slip-on loafers',
                        'Stand near the shore, hands in pockets, gazing thoughtfully at the ocean.',
                        'Sit on a beach chair, one leg crossed over the other, blazer unbuttoned.',
                        'Walk barefoot along the shoreline, carrying your loafers in one hand.'
                    ],
                    mountains: [
                        'Tailored suits',
                        'Dress pants',
                        'Leather boots',
                        'Stand near a cliff edge, adjusting your tie.',
                        'Lean against a tree with arms crossed, looking confident.',
                        'Sit on a large rock, legs crossed, holding a walking stick.'
                    ],
                    city: [
                        'Double-breasted suits',
                        'Oxford shoes',
                        'Minimalist ties',
                        'Stand confidently on a bustling city street, one hand adjusting your tie.',
                        'Walk through a crosswalk, holding a briefcase and looking forward.',
                        'Sit at a café table, legs crossed, sipping coffee.'
                    ],
                    countryside: [
                        'Rustic blazers',
                        'Straight trousers',
                        'Chelsea boots',
                        'Stand near a wooden fence, arms resting casually on the top rail.',
                        'Walk along a dirt path, carrying a leather bag over your shoulder.',
                        'Sit on a hay bale, hands resting on your knees, looking serene.'
                    ]
                },
                medium: {
                    beach: [
                        'Soft-colored suits',
                        'Slim-fit trousers',
                        'Leather loafers',
                        'Stand by the water’s edge, blazer draped over your shoulder.',
                        'Sit on a low wall near the ocean, legs crossed, smiling warmly.',
                        'Walk along the beach, hands in your pockets, looking relaxed.'
                    ],
                    mountains: [
                        'Wool jackets',
                        'Tapered trousers',
                        'Wingtip shoes',
                        'Stand against a wooden fence, arms crossed confidently.',
                        'Sit on a rock, one foot resting on a lower ledge, looking thoughtful.',
                        'Walk up a snowy trail, holding a scarf close to your neck.'
                    ],
                    city: [
                        'Fitted tuxedos',
                        'Polished shoes',
                        'Minimalist watches',
                        'Stand near a modern building, arms relaxed at your sides.',
                        'Walk along a cobblestone street, carrying a leather portfolio.',
                        'Sit at a bench, hands folded, looking composed.'
                    ],
                    countryside: [
                        'Earth-tone blazers',
                        'Comfort-fit pants',
                        'Leather shoes',
                        'Stand in a field, hands on hips, smiling confidently.',
                        'Walk through tall grass, carrying a notebook in one hand.',
                        'Sit on a wooden bench, gazing out at the horizon.'
                    ]
                },
                large: {
                    beach: [
                        'Relaxed-fit blazers',
                        'Chino trousers',
                        'Comfort loafers',
                        'Stand on a pier, leaning on the railing, gazing at the sea.',
                        'Sit on a wooden bench, legs stretched out, blazer unbuttoned.',
                        'Walk along the shore with shoes in one hand, looking at the sunset.'
                    ],
                    mountains: [
                        'Thick wool coats',
                        'Wide-leg pants',
                        'Formal boots',
                        'Stand near a snowy tree, arms crossed, looking composed.',
                        'Sit on a boulder, scarf draped over your shoulder, gazing at the view.',
                        'Walk along a trail, hands in your coat pockets, smiling softly.'
                    ],
                    city: [
                        'Classic suits',
                        'Wide-fit shoes',
                        'Bold ties',
                        'Stand near a lamppost, adjusting your tie, looking confident.',
                        'Walk down a busy sidewalk, briefcase in hand, smiling subtly.',
                        'Sit on a bench, reading a newspaper, looking poised.'
                    ],
                    countryside: [
                        'Rustic suits',
                        'Comfort trousers',
                        'Plaid scarves',
                        'Stand near a wooden gate, scarf wrapped loosely around your neck.',
                        'Walk through a meadow, hands clasped behind your back.',
                        'Sit on a hay bale, one foot resting on the ground, smiling warmly.'
                    ]
                },
                plus: {
                    beach: [
                        'Breathable jackets',
                        'Elastic-waist trousers',
                        'Slip-ons',
                        'Stand near the shoreline, arms at your sides, gazing into the distance.',
                        'Sit on a rock, legs crossed, holding your jacket over your shoulder.',
                        'Walk along the beach, holding shoes in one hand and smiling casually.'
                    ],
                    mountains: [
                        'Heavy overcoats',
                        'Stretch-fit pants',
                        'Polished boots',
                        'Stand on a trail, arms crossed, with a warm smile.',
                        'Sit on a large rock, scarf wrapped snugly, gazing into the horizon.',
                        'Walk along a snowy path, holding a thermos in one hand.'
                    ],
                    city: [
                        'Relaxed suits',
                        'Wide-fit loafers',
                        'Bold accessories',
                        'Lean against a modern building, hands in pockets, looking composed.',
                        'Walk through a busy street, holding a briefcase confidently.',
                        'Sit at a restaurant table, sipping coffee and smiling softly.'
                    ],
                    countryside: [
                        'Textured blazers',
                        'Stretchy trousers',
                        'Suede shoes',
                        'Stand near a barn door, one hand brushing the edge of your jacket.',
                        'Walk along a dirt road, holding a scarf casually in one hand.',
                        'Sit on a haystack, looking at the horizon with a thoughtful expression.'
                    ]
                }
            },
            female: {
                small: {
                    beach: [
                        'Soft chiffon dresses',
                        'Pearl earrings',
                        'Strappy heels',
                        'Stand at the shoreline, one hand holding your dress and the other shielding your eyes.',
                        'Sit on a rock near the water, legs crossed elegantly.',
                        'Walk barefoot along the sand, holding your heels in one hand.'
                    ],
                    mountains: [
                        'Tailored jackets',
                        'Fitted trousers',
                        'High boots',
                        'Stand on a snowy path, adjusting your jacket collar.',
                        'Sit on a log, hands wrapped around a warm drink.',
                        'Walk along a trail, scarf flowing in the breeze.'
                    ],
                    city: [
                        'Pencil skirts',
                        'Bold necklaces',
                        'Pointed heels',
                        'Stand confidently on a city street, one hand resting on your hip.',
                        'Walk briskly through a crosswalk, holding a clutch bag.',
                        'Sit on a café patio, legs crossed, sipping tea.'
                    ],
                    countryside: [
                        'Layered dresses',
                        'Simple bracelets',
                        'Comfortable shoes',
                        'Stand in a field, gently holding the edge of your dress.',
                        'Walk along a dirt road, basket in hand, smiling softly.',
                        'Sit on a hay bale, looking serenely into the distance.'
                    ]
                },
                medium: {
                    beach: [
                        'Elegant wrap dresses',
                        'Gold necklaces',
                        'Block heels',
                        'Stand by the water’s edge, holding your dress lightly in one hand.',
                        'Sit on a beach chair, legs crossed, with a soft smile.',
                        'Walk barefoot along the shoreline, holding your sandals in one hand.'
                    ],
                    mountains: [
                        'Velvet gowns',
                        'Faux-fur coats',
                        'Ankle boots',
                        'Stand near a snow-covered tree, adjusting your coat.',
                        'Sit on a large boulder, holding a warm drink and gazing into the distance.',
                        'Walk along a snowy path, gently holding your gown off the ground.'
                    ],
                    city: [
                        'Structured dresses',
                        'Layered necklaces',
                        'High heels',
                        'Stand confidently against a modern building, arms relaxed.',
                        'Walk across a plaza, holding a clutch bag and smiling softly.',
                        'Sit at an outdoor café, legs crossed, sipping tea elegantly.'
                    ],
                    countryside: [
                        'Floral maxi dresses',
                        'Subtle accessories',
                        'Flat boots',
                        'Stand near a wooden fence, one hand resting lightly on the top rail.',
                        'Walk along a dirt road, holding a bouquet of fresh flowers.',
                        'Sit on a haystack, hands folded in your lap, smiling warmly.'
                    ]
                },
                large: {
                    beach: [
                        'Flowy dresses',
                        'Wide-brim hats',
                        'Comfort sandals',
                        'Stand on the sand with one hand holding your hat, looking at the ocean.',
                        'Sit on a beach towel, legs stretched out, with a gentle smile.',
                        'Walk along the shoreline, letting your dress flow in the breeze.'
                    ],
                    mountains: [
                        'Layered sweaters',
                        'Straight trousers',
                        'Wedge heels',
                        'Stand by a snowy trail, arms folded, smiling confidently.',
                        'Sit on a rock, one leg crossed over the other, scarf wrapped around your neck.',
                        'Walk along a forest path, adjusting your sweater.'
                    ],
                    city: [
                        'A-line dresses',
                        'Statement earrings',
                        'Comfort loafers',
                        'Stand near a city fountain, arms relaxed at your sides.',
                        'Walk along a cobblestone street, holding a stylish handbag.',
                        'Sit on a park bench, legs crossed, with a calm expression.'
                    ],
                    countryside: [
                        'Rustic evening wear',
                        'Minimalist jewelry',
                        'Flat boots',
                        'Stand near a barn door, hands clasped in front of you.',
                        'Walk through a field of wildflowers, holding your shawl.',
                        'Sit on a wooden bench, gazing at the countryside.'
                    ]
                },
                plus: {
                    beach: [
                        'Maxi dresses',
                        'Straw hats',
                        'Comfort sandals',
                        'Stand at the shoreline, holding your hat to shield the sun.',
                        'Sit on a beach blanket, legs crossed, smiling softly.',
                        'Walk along the sand, letting your dress sway with the breeze.'
                    ],
                    mountains: [
                        'Oversized coats',
                        'Wide-fit trousers',
                        'Chunky heels',
                        'Stand by a snow-covered tree, holding your coat collar.',
                        'Sit on a large rock, scarf wrapped snugly, looking serene.',
                        'Walk along a snowy path, holding a warm drink in both hands.'
                    ],
                    city: [
                        'Peplum blouses',
                        'Tapered trousers',
                        'Chunky loafers',
                        'Lean against a modern building, arms crossed confidently.',
                        'Walk through a busy street, holding a designer bag.',
                        'Sit at a café table, sipping coffee and smiling softly.'
                    ],
                    countryside: [
                        'Rustic formal wear',
                        'Bold bracelets',
                        'Comfort flats',
                        'Stand near a wooden gate, one hand resting on the top rail.',
                        'Walk along a country road, scarf flowing behind you.',
                        'Sit on a haystack, hands folded, smiling warmly at the camera.'
                    ]
                }
            }
        }
    },
dark: {
    casual: {
        male: {
            small: {
                beach: [
                    'Vibrant t-shirts',
                    'Chino shorts',
                    'Flip-flops',
                    'Stand near the water, hands in pockets, looking at the horizon.',
                    'Sit on a rock, legs crossed, with a relaxed smile.',
                    'Walk barefoot along the sand, kicking up water playfully.'
                ],
                mountains: [
                    'Lightweight pullovers',
                    'Slim-fit jeans',
                    'Hiking boots',
                    'Stand on a rocky trail, hands on hips, looking determined.',
                    'Sit on a log, holding a thermos, smiling softly.',
                    'Walk along a forest path, arms swinging casually.'
                ],
                city: [
                    'Graphic tees',
                    'Skinny jeans',
                    'Low-top sneakers',
                    'Stand against a graffiti-covered wall, arms crossed confidently.',
                    'Walk through a busy street, holding a backpack casually.',
                    'Sit on a bench, legs stretched out, looking at your phone.'
                ],
                countryside: [
                    'Fitted flannel shirts',
                    'Straight trousers',
                    'Chelsea boots',
                    'Stand by a wooden fence, one foot resting on the lower rail.',
                    'Walk along a dirt road, hands in pockets, looking at the scenery.',
                    'Sit on a hay bale, leaning slightly forward, smiling naturally.'
                ]
            },
            medium: {
                beach: [
                    'Tropical shirts',
                    'Cargo shorts',
                    'Sandals',
                    'Stand with hands on hips, smiling brightly at the camera.',
                    'Sit cross-legged on the sand, holding a drink.',
                    'Walk along the waterline, looking over your shoulder.'
                ],
                mountains: [
                    'Fleece jackets',
                    'Relaxed-fit jeans',
                    'Trail shoes',
                    'Stand near a wooden signpost, arms folded.',
                    'Sit on a large rock, holding a water bottle.',
                    'Walk along a trail, adjusting your backpack straps.'
                ],
                city: [
                    'Checked shirts',
                    'Slim trousers',
                    'Sneakers',
                    'Stand by a modern building, one hand in your pocket.',
                    'Walk along a cobblestone street, holding a shopping bag.',
                    'Sit at an outdoor café, sipping coffee and smiling casually.'
                ],
                countryside: [
                    'Knitted sweaters',
                    'Stretchy pants',
                    'Work boots',
                    'Stand in a field, arms outstretched, enjoying the fresh air.',
                    'Sit on a fence, one leg dangling, looking thoughtful.',
                    'Walk along a rustic path, holding a book in one hand.'
                ]
            },
            large: {
                beach: [
                    'Loose linen shirts',
                    'Wide-leg shorts',
                    'Slides',
                    'Stand at the shoreline, arms crossed, looking at the waves.',
                    'Sit on a beach chair, legs stretched out, smiling softly.',
                    'Walk along the sand, holding your shoes in one hand.'
                ],
                mountains: [
                    'Puffer jackets',
                    'Comfort-fit pants',
                    'Hiking boots',
                    'Stand on a snowy trail, hands on hips, looking confident.',
                    'Sit on a rock, adjusting your scarf and smiling.',
                    'Walk along a winding path, holding a walking stick.'
                ],
                city: [
                    'Relaxed-fit t-shirts',
                    'Chino trousers',
                    'Casual loafers',
                    'Stand near a park bench, arms resting casually on the backrest.',
                    'Walk along a city street, carrying a messenger bag.',
                    'Sit at a park, legs crossed, enjoying the surroundings.'
                ],
                countryside: [
                    'Layered pullovers',
                    'Straight trousers',
                    'Durable boots',
                    'Stand near a barn door, one hand resting on the frame.',
                    'Walk through tall grass, hands clasped behind your back.',
                    'Sit on a haystack, looking at the horizon with a serene expression.'
                ]
            },
            plus: {
                beach: [
                    'Cotton polos',
                    'Elastic-waist shorts',
                    'Slip-ons',
                    'Stand near the water, arms relaxed by your sides.',
                    'Sit on a beach towel, legs bent, smiling gently at the camera.',
                    'Walk along the shore, letting the breeze flow through your shirt.'
                ],
                mountains: [
                    'Oversized cardigans',
                    'Stretchable pants',
                    'Sturdy boots',
                    'Stand near a tree, arms crossed, looking confident.',
                    'Sit on a large rock, scarf wrapped loosely, smiling warmly.',
                    'Walk along a forest trail, holding a walking stick.'
                ],
                city: [
                    'Breathable shirts',
                    'Wide-leg trousers',
                    'Casual sneakers',
                    'Stand at a street corner, arms crossed with a confident look.',
                    'Walk along a city square, holding a drink.',
                    'Sit on a bench, one arm resting on the backrest, looking relaxed.'
                ],
                countryside: [
                    'Cozy sweaters',
                    'Comfort-fit pants',
                    'Chelsea boots',
                    'Stand near a wooden gate, one hand on the top rail.',
                    'Walk along a country path, holding a small basket.',
                    'Sit on a hay bale, hands resting in your lap, smiling softly.'
                ]
            }
        },
        female: {
            small: {
                beach: [
                    'Bright sundresses',
                    'Wide-brimmed hats',
                    'Flat sandals',
                    'Stand near the shoreline, holding your hat with one hand.',
                    'Sit on a towel, legs bent to the side, smiling softly.',
                    'Walk barefoot along the sand, letting your dress sway in the breeze.'
                ],
                mountains: [
                    'Chunky sweaters',
                    'Skinny jeans',
                    'Hiking boots',
                    'Stand near a tree, arms wrapped around yourself for warmth.',
                    'Sit on a log, holding a thermos and looking relaxed.',
                    'Walk along a trail, scarf flowing gently in the wind.'
                ],
                city: [
                    'Fitted blouses',
                    'Straight trousers',
                    'Ballet flats',
                    'Stand confidently against a building wall, one hand in your pocket.',
                    'Walk through a busy street, holding a small handbag.',
                    'Sit on a park bench, legs crossed, smiling softly.'
                ],
                countryside: [
                    'Floral dresses',
                    'Knitted shawls',
                    'Comfortable shoes',
                    'Stand in a field, gently holding the edge of your dress.',
                    'Walk along a dirt path, carrying a small basket.',
                    'Sit on a wooden fence, legs swinging lightly, gazing at the horizon.'
                ]
            },
            medium: {
                beach: [
                    'Flowy tops',
                    'High-waisted skirts',
                    'Platform sandals',
                    'Stand near the water with arms outstretched.',
                    'Sit on a beach chair, legs crossed at the ankles, smiling brightly.',
                    'Walk barefoot along the shore, holding your sandals in one hand.'
                ],
                mountains: [
                    'Knitted cardigans',
                    'Stretchy jeans',
                    'Ankle boots',
                    'Stand near a trailhead, one hand holding your cardigan closed.',
                    'Sit on a rock, one leg bent, gazing at the view.',
                    'Walk along a forest trail, holding a small backpack.'
                ],
                city: [
                    'Structured tops',
                    'Bootcut trousers',
                    'Kitten heels',
                    'Stand near a fountain, arms crossed, looking confident.',
                    'Walk through a city square, holding a coffee cup.',
                    'Sit at an outdoor café, legs crossed, smiling warmly.'
                ],
                countryside: [
                    'A-line dresses',
                    'Warm scarves',
                    'Flat boots',
                    'Stand near a wooden gate, gently holding a scarf around your neck.',
                    'Walk through tall grass, holding a bouquet of flowers.',
                    'Sit on a haystack, hands resting in your lap, smiling softly.'
                ]
            },
            large: {
                beach: [
                    'Loose tank tops',
                    'Wide-leg pants',
                    'Slides',
                    'Stand at the water’s edge, one hand adjusting your hat.',
                    'Sit on a beach towel, legs stretched out, smiling warmly.',
                    'Walk along the shoreline, letting your dress flow in the breeze.'
                ],
                mountains: [
                    'Layered pullovers',
                    'Relaxed-fit jeans',
                    'Chelsea boots',
                    'Stand on a snowy trail, arms folded, smiling softly.',
                    'Sit on a rock, one leg crossed, scarf draped over your shoulder.',
                    'Walk through a forest path, adjusting your sweater as you go.'
                ],
                city: [
                    'V-neck blouses',
                    'Tapered trousers',
                    'Comfort loafers',
                    'Stand near a lamppost, arms crossed confidently.',
                    'Walk along a cobblestone street, holding a stylish handbag.',
                    'Sit on a park bench, legs crossed, looking serene.'
                ],
                countryside: [
                    'Shirt dresses',
                    'Warm scarves',
                    'Flat boots',
                    'Stand near a barn door, holding a bouquet of flowers.',
                    'Walk along a dirt road, scarf flowing behind you.',
                    'Sit on a wooden bench, gazing at the countryside view.'
                ]
            },
            plus: {
                beach: [
                    'Maxi dresses',
                    'Straw hats',
                    'Comfort sandals',
                    'Stand near the shore, holding your hat with both hands.',
                    'Sit on a large rock, legs crossed, smiling gently.',
                    'Walk along the sand, letting the breeze flow through your dress.'
                ],
                mountains: [
                    'Oversized sweaters',
                    'Stretchable leggings',
                    'Knee-high boots',
                    'Stand near a tree, holding a cup of hot tea, smiling warmly.',
                    'Sit on a rock, scarf wrapped loosely around your neck.',
                    'Walk along a snowy trail, holding your coat closed.'
                ],
                city: [
                    'Peplum tops',
                    'Straight trousers',
                    'Chunky heels',
                    'Lean against a building, arms crossed, looking stylish.',
                    'Walk along a busy street, holding a shopping bag.',
                    'Sit on a café patio, sipping coffee and smiling softly.'
                ],
                countryside: [
                    'Knitted dresses',
                    'Cozy scarves',
                    'Comfortable flats',
                    'Stand in a grassy field, gently holding the edge of your dress.',
                    'Walk along a country path, holding a small basket of flowers.',
                    'Sit on a hay bale, hands resting on your knees, smiling warmly.'
                ]
            }
        }
    },
    formal: {
        male: {
            small: {
                beach: [
                    'Linen blazers',
                    'Tailored trousers',
                    'Leather loafers',
                    'Stand near the shoreline, hands in pockets, looking at the horizon.',
                    'Sit on a low wall near the water, one leg crossed over the other, blazer unbuttoned.',
                    'Walk along the sand, holding your loafers in one hand, looking confident.'
                ],
                mountains: [
                    'Wool coats',
                    'Dress pants',
                    'Chelsea boots',
                    'Stand on a rocky path, adjusting your coat collar.',
                    'Lean against a wooden fence, arms crossed, looking poised.',
                    'Sit on a boulder, hands resting on your knees, gazing into the distance.'
                ],
                city: [
                    'Slim-fit suits',
                    'Oxford shoes',
                    'Minimalist watches',
                    'Stand confidently on a city street, one hand adjusting your tie.',
                    'Walk briskly across a crosswalk, holding a briefcase.',
                    'Sit at an outdoor café, legs crossed, sipping espresso.'
                ],
                countryside: [
                    'Textured jackets',
                    'Straight trousers',
                    'Rustic boots',
                    'Stand near a wooden fence, arms resting on the top rail.',
                    'Walk along a dirt path, carrying a leather bag.',
                    'Sit on a haystack, hands resting in your lap, smiling softly.'
                ]
            },
            medium: {
                beach: [
                    'Soft-colored blazers',
                    'Slim trousers',
                    'Slip-on loafers',
                    'Stand at the water’s edge, blazer slung over one shoulder.',
                    'Sit on a large rock near the shore, legs stretched out, smiling softly.',
                    'Walk along the shoreline, hands in your pockets, looking relaxed.'
                ],
                mountains: [
                    'Heavier jackets',
                    'Tapered trousers',
                    'Wingtip shoes',
                    'Stand on a snowy trail, scarf flowing gently, looking thoughtful.',
                    'Sit on a rock, one hand resting on your knee, gazing at the mountains.',
                    'Walk along a forest path, adjusting your coat collar.'
                ],
                city: [
                    'Fitted tuxedos',
                    'Polished shoes',
                    'Statement watches',
                    'Stand near a modern building, arms relaxed, looking sharp.',
                    'Walk along a cobblestone street, briefcase in hand.',
                    'Sit at a park bench, legs crossed, reading a newspaper.'
                ],
                countryside: [
                    'Earth-tone suits',
                    'Relaxed-fit pants',
                    'Leather boots',
                    'Stand in a grassy field, one hand in your pocket, smiling confidently.',
                    'Walk along a rustic path, holding a notebook.',
                    'Sit on a wooden bench, gazing at the countryside view.'
                ]
            },
            large: {
                beach: [
                    'Relaxed-fit jackets',
                    'Chino trousers',
                    'Comfort loafers',
                    'Stand on a pier, leaning casually on the railing.',
                    'Sit on a beach chair, legs stretched out, blazer unbuttoned.',
                    'Walk along the shore, holding your shoes in one hand, gazing at the sunset.'
                ],
                mountains: [
                    'Insulated coats',
                    'Wide-leg trousers',
                    'Formal boots',
                    'Stand near a snow-covered tree, arms crossed, looking composed.',
                    'Sit on a log, scarf draped loosely, smiling warmly.',
                    'Walk along a forest trail, hands in your coat pockets.'
                ],
                city: [
                    'Classic suits',
                    'Wide-fit shoes',
                    'Bold ties',
                    'Lean against a lamppost, one hand adjusting your tie.',
                    'Walk down a city street, holding a leather bag confidently.',
                    'Sit at a café, reading a book with a calm expression.'
                ],
                countryside: [
                    'Rustic blazers',
                    'Stretchy pants',
                    'Plaid scarves',
                    'Stand near a barn door, one hand resting on the frame.',
                    'Walk along a dirt road, carrying a scarf over your shoulder.',
                    'Sit on a haystack, smiling softly, looking at the horizon.'
                ]
            },
            plus: {
                beach: [
                    'Breathable cotton blazers',
                    'Elastic trousers',
                    'Slip-ons',
                    'Stand near the water’s edge, arms relaxed at your sides.',
                    'Sit on a low rock, legs crossed, holding your jacket over your shoulder.',
                    'Walk along the sand, shoes in hand, looking confident.'
                ],
                mountains: [
                    'Oversized jackets',
                    'Stretch-fit pants',
                    'Polished boots',
                    'Stand on a snowy path, hands clasped in front, looking poised.',
                    'Sit on a large rock, scarf wrapped snugly, smiling warmly.',
                    'Walk along a trail, holding a thermos and looking relaxed.'
                ],
                city: [
                    'Relaxed-fit suits',
                    'Wide-fit loafers',
                    'Silk ties',
                    'Stand near a building, arms crossed, looking professional.',
                    'Walk through a city plaza, holding a briefcase confidently.',
                    'Sit at a restaurant table, sipping coffee and smiling softly.'
                ],
                countryside: [
                    'Rugged suits',
                    'Comfort trousers',
                    'Suede shoes',
                    'Stand near a wooden gate, hands in pockets, looking contemplative.',
                    'Walk along a dirt road, carrying a small leather journal.',
                    'Sit on a haystack, one leg crossed, smiling softly.'
                ]
            }
        },
        female: {
            small: {
                beach: [
                    'Halter dresses',
                    'Pearl earrings',
                    'Strappy heels',
                    'Stand near the shoreline, one hand holding your dress, looking at the horizon.',
                    'Sit elegantly on a beach chair, legs crossed, smiling softly.',
                    'Walk barefoot along the water, holding your heels in one hand.'
                ],
                mountains: [
                    'Tailored coats',
                    'Slim-fit trousers',
                    'Knee-high boots',
                    'Stand near a snow-covered tree, arms folded, looking confident.',
                    'Sit on a log, one leg crossed over the other, holding a warm drink.',
                    'Walk along a forest trail, adjusting your scarf.'
                ],
                city: [
                    'Sheath dresses',
                    'Bold necklaces',
                    'Pointed pumps',
                    'Stand confidently against a city building, arms crossed.',
                    'Walk through a bustling plaza, holding a small clutch.',
                    'Sit at an outdoor café, legs crossed, sipping tea and smiling softly.'
                ],
                countryside: [
                    'Layered dresses',
                    'Simple bracelets',
                    'Comfort flats',
                    'Stand in a grassy field, holding the edge of your dress gently.',
                    'Walk along a dirt path, carrying a basket of flowers.',
                    'Sit on a wooden fence, looking at the countryside with a soft smile.'
                ]
            },
            medium: {
                beach: [
                    'Chiffon gowns',
                    'Gold necklaces',
                    'Block heels',
                    'Stand at the water’s edge, one hand shielding your eyes from the sun.',
                    'Sit on a large rock, legs crossed gracefully, gazing at the ocean.',
                    'Walk barefoot along the shore, letting your dress flow with the breeze.'
                ],
                mountains: [
                    'Velvet dresses',
                    'Faux-fur coats',
                    'Ankle boots',
                    'Stand on a snowy path, arms crossed, smiling softly.',
                    'Sit on a large boulder, holding a mug of hot cocoa.',
                    'Walk along a snowy trail, gently holding your dress off the ground.'
                ],
                city: [
                    'Structured jumpsuits',
                    'Layered necklaces',
                    'High heels',
                    'Stand near a fountain, one hand resting on your hip.',
                    'Walk along a cobblestone street, holding a designer handbag.',
                    'Sit on a bench in a plaza, legs crossed, looking poised.'
                ],
                countryside: [
                    'Floral maxi dresses',
                    'Minimalist bracelets',
                    'Flat boots',
                    'Stand near a wooden fence, arms relaxed at your sides.',
                    'Walk through tall grass, holding a small bouquet of wildflowers.',
                    'Sit on a haystack, smiling warmly, hands folded in your lap.'
                ]
            },
            large: {
                beach: [
                    'Flowy dresses',
                    'Wide-brim hats',
                    'Comfortable sandals',
                    'Stand at the water’s edge, holding your hat with one hand, looking serene.',
                    'Sit on a beach towel, legs stretched out gracefully, smiling softly.',
                    'Walk barefoot along the sand, holding your shoes in one hand.'
                ],
                mountains: [
                    'Layered sweaters',
                    'Straight trousers',
                    'Block heels',
                    'Stand near a snowy trail, arms wrapped around yourself.',
                    'Sit on a rock, scarf loosely draped over your shoulders, gazing ahead.',
                    'Walk along a forest path, holding a small handbag.'
                ],
                city: [
                    'A-line dresses',
                    'Statement earrings',
                    'Comfort loafers',
                    'Stand near a modern sculpture, arms crossed, looking confident.',
                    'Walk through a city square, holding a leather bag.',
                    'Sit on a café terrace, sipping a drink and smiling warmly.'
                ],
                countryside: [
                    'Rustic evening wear',
                    'Simple accessories',
                    'Flat boots',
                    'Stand near a barn door, holding a shawl close to your chest.',
                    'Walk along a dirt path, scarf flowing in the wind.',
                    'Sit on a wooden bench, hands resting on your lap, looking at the horizon.'
                ]
            },
            plus: {
                beach: [
                    'Maxi dresses',
                    'Straw hats',
                    'Comfortable sandals',
                    'Stand near the shoreline, holding your hat to shield your face from the sun.',
                    'Sit on a large rock, legs crossed gracefully, smiling gently.',
                    'Walk along the beach, letting your dress sway with the breeze.'
                ],
                mountains: [
                    'Oversized coats',
                    'Wide-fit trousers',
                    'Chunky heels',
                    'Stand near a snowy tree, holding your coat closed, smiling warmly.',
                    'Sit on a rock, one leg bent, gazing at the snowy landscape.',
                    'Walk along a trail, holding a scarf wrapped around your shoulders.'
                ],
                city: [
                    'Peplum tops',
                    'Tapered trousers',
                    'Chunky loafers',
                    'Stand confidently near a city lamppost, one hand on your hip.',
                    'Walk down a busy sidewalk, holding a shopping bag.',
                    'Sit at an outdoor café, sipping coffee, looking elegant.'
                ],
                countryside: [
                    'Rustic formal wear',
                    'Bold bracelets',
                    'Comfort flats',
                    'Stand in a grassy field, gently holding the edge of your dress.',
                    'Walk along a dirt road, scarf flowing behind you, smiling softly.',
                    'Sit on a haystack, hands resting gently on your lap, looking at the horizon.'
                ]
            }
        }
    }
}
};

module.exports = suggestions;