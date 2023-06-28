const db = {
    title: 'young',
    children: [
        {
            title: ['floral', 'mineral', 'herbaceous'],
            children: [
                {
                    title : ['light dry white'],
                    children: [
                        {
                            title: ['gruener veltiner'],
                            children: [
                                {
                                    title : 'F',
                                    children: [
                                        {
                                            title:'G'
                                        }
                                        ]
                                }
                            ]
                        },
                        {
                            title:['albarino'],
                            children: [
                                {
                                    title : 'F',
                                    children: [
                                        {
                                            title:'G'
                                        }
                                        ]
                                }
                            ]
                        },
                        {
                            title: 'Trebbiano'
                        },
                        {
                            title: 'Sauvignon Blanc'
                        }
                    ]
                }    
            ]
        },
        {
            title: ['d', 'e'],
            children: [
                {
                    title: 'G'
                }
            ]
        }
    ]
}
let ctr = 0
db_compare = ['young', 'white', 'floral', 'albariño', 'main course']
// function start(node)
// {
//     console.log('Node: ', node.title)
//     if(node.children)
//     {
//         node.children.forEach(function(child){
//             start(child)
//         })
//     }
// }

const wineDB = {
    // so there is one root for now, the 'young'
    title: 'young',
    children: [
        {
            // this root has 3 children, white, red and sparkling. I've only made for white yet (not fully)
            title: "white",
            children: [
                {
                    // now white has 2 children, 'floral..' and 'aromatic' This is how the database keeps going.
                    title: ['floral', 'mineral', 'herbaceous'],
                    children: [
                        {
                            title: ['grüner veltiner', 'gruener veltiner'],
                            children: [
                                {
                                    title: 'starters',
                                    children: ['Fresh salad', 'Smoked Salmon', 'Oysters', 'Shrimps', 'Olives']
                                },
                                {
                                    title: 'main course',
                                    children: ['Vegetable-based Pasta', 'Risotto', 'Soup', 'Wiener Schnitzel', 'Sushi']
                                },
                                {
                                    title: 'dessert',
                                    children: ['no desserts']
                                }
                            ]
                        },
                        {
                            title: ['albariño'],
                            children: [
                                {
                                    title: 'starters',
                                    children: ['Ceviche', 'Oysters', 'Mussels', 'Salsa Verde', 'Grilled Padron', 'Caprese', 'Caesar']
                                },
                                {
                                    title: 'main course',
                                    children: "Seafood Risotto, Fish Tacos, Grilled Vegetables".split(",")
                                },
                                {
                                    title: 'dessert',
                                    children: ['no desserts']
                                }
                            ]
                        },
                        {
                            title: ['trebbiano'],
                            children: [
                                {
                                    title: 'starters',
                                    children: "Antipasti, Ham (Jamon)".split(",")
                                },
                                {
                                    title: 'main course',
                                    children: "White Pizza (Flammkuchen), Roast Chicken, Seafood Pasta, Pesto Pasta".split(",")
                                },
                                {
                                    title: 'dessert',
                                    children: ['no desserts']
                                }
                            ]
                        },
                        {
                            title: ['sauvignon blanc'],
                            children: [
                                {
                                    title: 'starters',
                                    children: "Ceviche, Focaccia, Caesar Salad, Garden Salad, Bruschetta".split(",")
                                },
                                {
                                    title: 'main course',
                                    children: "Salmon Burgers, Asparagus drizzled with butter, Crabcakes".split(",")
                                },
                                {
                                    title: 'dessert',
                                    children: "Sorbet, Lemon cake, Lemon Meringue Pie".split(",")
                                }
                            ]
                        }
                    ]
                },
                {
                    title: ['aromatic', 'zesty'],
                    children: [
                        {
                            title: ['vihno verde'],
                            children: [
                                {
                                    title: 'starters',
                                    children: ['Fresh salad', 'Smoked Salmon', 'Oysters', 'Shrimps', 'Olives']
                                },
                                {
                                    title: 'main course',
                                    children: ['Vegetable-based Pasta', 'Risotto', 'Soup', 'Wiener Schnitzel', 'Sushi']
                                },
                                {
                                    title: 'dessert',
                                    children: ['no desserts']
                                }
                            ]
                        },
                        {
                            title: ['pinot grigio'],
                            children: [
                                {
                                    title: 'starters',
                                    children: ['Ceviche', 'Oysters', 'Mussels', 'Salsa Verde', 'Grilled Padron', 'Caprese', 'Caesar']
                                },
                                {
                                    title: 'main course',
                                    children: "Seafood Risotto, Fish Tacos, Grilled Vegetables".split(",")
                                },
                                {
                                    title: 'dessert',
                                    children: ['no desserts']
                                }
                            ]
                        },
                        {
                            title: ['chenin blanc'],
                            children: [
                                {
                                    title: 'starters',
                                    children: "Antipasti, Ham (Jamon)".split(",")
                                },
                                {
                                    title: 'main course',
                                    children: "White Pizza (Flammkuchen), Roast Chicken, Seafood Pasta, Pesto Pasta".split(",")
                                },
                                {
                                    title: 'dessert',
                                    children: ['no desserts']
                                }
                            ]
                        },
                        {
                            title: ['macabeo'],
                            children: [
                                {
                                    title: 'starters',
                                    children: "Ceviche, Focaccia, Caesar Salad, Garden Salad, Bruschetta".split(",")
                                },
                                {
                                    title: 'main course',
                                    children: "Salmon Burgers, Asparagus drizzled with butter, Crabcakes".split(",")
                                },
                                {
                                    title: 'dessert',
                                    children: "Sorbet, Lemon cake, Lemon Meringue Pie".split(",")
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: "red",
            children: [
                {
                    // now white has 2 children, 'floral..' and 'aromatic' This is how the database keeps going.
                    title: ['juicy', 'fruity'],
                    children: [
                        {
                            title: ['gamay'],
                            children: [
                                {
                                    title: 'starters',
                                    children: ['Cheese Plate', 'Chèvre', 'Neufchâtel', 'Brie']
                                },
                                {
                                    title: 'main course', 
                                    children: ['Chicken tagine with apricots and olives', 'Sushi', 'Portobello Mushrooms']
                                },
                                {
                                    title: 'dessert',
                                    children: ['Dark Chocolate']
                                }
                            ]
                        },
                        {
                            title: ['malbec'],
                            children: [
                                {
                                    title: 'starters',
                                    children: ['Blue Cheese', 'Oysters', 'Mussels', 'Salsa Verde', 'Grilled Padron', 'Caprese', 'Caesar']
                                },
                                {
                                    title: 'main course',
                                    children: "Staffed Mushrooms, Burgers, Fajitas, Fried Vegetables".split(",")
                                },
                                {
                                    title: 'dessert',
                                    children: ['Dark Chocolate', 'Cherry in chocolate']
                                }
                            ]
                        },
                        {
                            title: ['pinotage'],
                            children: [
                                {
                                    title: 'starters',
                                    children: "Crostini, Calamari, Grilled vegetables".split(",")
                                },
                                {
                                    title: 'main course',
                                    children: "Pizza, Pasta, Risotto, Cannelloni, Chicken Parmesan".split(",")
                                },
                                {
                                    title: 'dessert',
                                    children: ['Chocolate']
                                }
                            ]
                        },
                        {
                            title: ['valpolicella'],
                            children: [
                                {
                                    title: 'starters',
                                    children: ['Cheese Plate']
                                },
                                {
                                    title: 'main course',
                                    children: "Curry, Pizza, Barbecue".split(",")
                                },
                                {
                                    title: 'dessert',
                                    children: "Chocolate, Desserts with Cinnamon".split(",")
                                }
                            ]
                        }
                    ]
                },
                {
                    title: ['fruity', 'spicy'],
                    children: [
                        {
                            title: ['Grenache', 'Garnacha' , 'Châteauneuf-du-Pape', 'Priorat'],
                            children: [
                                {
                                    title: 'starters',
                                    children: ['Smoked Beef', 'Smoked Cheese']
                                },
                                {
                                    title: 'main course',
                                    children: ['Stew', 'Ossobuco', 'Beef bourguignon']
                                },
                                {
                                    title: 'dessert',
                                    children: ['Plum cake', 'Dried cherries']
                                }
                            ]
                        },
                        {
                            title: ['merlot', 'the right bank of bordeaux'],
                            children: [
                                {
                                    title: 'starters',
                                    children: ['Antipasto', 'Smoked Cheese']
                                },
                                {
                                    title: 'main course',
                                    children: "Smoked beef, Grilled Salmon or Tuna, Roasted Wildfowl".split(",")
                                },
                                {
                                    title: 'dessert',
                                    children: ['Raspberry, Cherry or other Dark Berry desserts']
                                }
                            ]
                        },
                        {
                            title: ['pinot noir', 'burgundy'],
                            children: [
                                {
                                    title: 'starters',
                                    children: "Fried ahi Tuna, Spicy chicken, Beef satay".split(",")
                                },
                                {
                                    title: 'main course',
                                    children: "Barbecue, Spicy Sausage, Tomato sauce, Pizza".split(",")
                                },
                                {
                                    title: 'dessert',
                                    children: ['Dark Berry desserts', 'Carrot Cake']
                                }
                            ]
                        },
                        {
                            title: ['tempranillo', 'ribera del duero'],
                            children: [
                                {
                                    title: 'starters',
                                    children: "Cream Cheese, Starch".split(",")
                                },
                                {
                                    title: 'main course',
                                    children: "Barbecue, Roasted Meet, Fried Vegetables".split(",")
                                },
                                {
                                    title: 'dessert',
                                    children: "Berry Pie, Chocolate Cake, Crème Brule, Figs".split(",")
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: "rose",
            children: [
                {
                    // now white has 2 children, 'floral..' and 'aromatic' This is how the database keeps going.
                    title: ['juicy', 'sweet red fruits'],
                    children: [
                        {
                            title: ['greanche rose', 'grenache rosé'],
                            children: [
                                {
                                    title: 'starters',
                                    children: ['Tapas', 'Pan Tumaca', 'Ham (Jamon)', 'Green Salad', 'Smoked Salmon']
                                },
                                {
                                    title: 'main course', 
                                    children: ['Pasta with Cream or Cheese Sauce,', 'Scrambled Eggs']
                                },
                                {
                                    title: 'dessert',
                                    children: ['Lemon Sponge Cake', 'Chocolate and Cream Cake', 'Crepes with Chocolate', 'Fruit Tartas']
                                }
                            ]
                        },
                        {
                            title: ['white zinfandel'],
                            children: [
                                {
                                    title: 'starters',
                                    children: ['Tapas', 'Green Salad', 'Stuffed Eggplant']
                                },
                                {
                                    title: 'main course',
                                    children: "Pasta with Cream Sauce, Roasted Vegetables, Crab cakes".split(",")
                                },
                                {
                                    title: 'dessert',
                                    children: ['Chocolate Mouse', 'Strawberry Cheesecake']
                                }
                            ]
                        },
                    ]
                },
                {
                    title: ['dry', 'fragnant'],
                    children: [
                        {
                            title: ['pinot noir rose', 'pinot noir rosé'],
                            children: [
                                {
                                    title: 'starters',
                                    children: ['Garden Salad', 'Grilled Asparagus', 'Smoked Salmon']
                                },
                                {
                                    title: 'main course',
                                    children: ['Chicken Tacos', 'Creamy Pasta', 'Chicken Wraps']
                                },
                                {
                                    title: 'dessert',
                                    children: ['Chocolate Mouse', 'Strawberry Cheesecake']
                                }
                            ]
                        },
                        {
                            title: ['provence rose', 'provence rosé'],
                            children: [
                                {
                                    title: 'starters',
                                    children: ['Anchovies', 'Grilled Artichokes', 'Grilled Asparagus', 'Carpaccio']
                                },
                                {
                                    title: 'main course',
                                    children: "Pasta, Crab Cakes, Plateau de fruits de mer, Porchetta, Spring Rolls".split(",")
                                },
                                {
                                    title: 'dessert',
                                    children: ['Strawberries', 'Dark Chocolate']
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            title: "sparkling",
            children: [
                {
                    // now white has 2 children, 'floral..' and 'aromatic' This is how the database keeps going.
                    title: ['sweet', 'citrus', 'dry'],
                    children: [
                        {
                            title: ['classic'],
                            children: [
                                {
                                    title: 'starters',
                                    children: ['Green Salad', 'Cold Cuts']
                                },
                                {
                                    title: 'main course', 
                                    children: ['Steak', 'White Truffle', 'Fried Potatoes', 'Fried Chicken']
                                },
                                {
                                    title: 'dessert',
                                    children: ['Candied Orangettes', 'Candied Ginger']
                                }
                            ]
                        },
                        {
                            title: ['sweet'],
                            children: [
                                {
                                    title: 'starters',
                                    children: ['Octopus', 'Tapas', 'Cold Cuts']
                                },
                                {
                                    title: 'main course',
                                    children: "Crab Cakes, Steak, Creamy Pasta".split(",")
                                },
                                {
                                    title: 'dessert',
                                    children: ['Popcorn', 'Candied Citrus', 'Pineapples']
                                }
                            ]
                        },
                        {
                            title: ['dry'],
                            children: [
                                {
                                    title: 'starters',
                                    children: "Tapas, Oysters, Green Salad, Nuts".split(",")
                                },
                                {
                                    title: 'main course',
                                    children: "Lobster, Grilled Chicken, Mac and Cheese, Creamy Soup".split(",")
                                },
                                {
                                    title: 'dessert',
                                    children: ['Chocolate', 'Fruit Salad']
                                }
                            ]
                        },
                        {
                            title: ['rose'],
                            children: [
                                {
                                    title: 'starters',
                                    children: ['Cold Cuts', 'Cheese Plate', 'Green Salad']
                                },
                                {
                                    title: 'main course',
                                    children: "Duck, Pizza, Crab Cakes, Cured Meat, Cured Fish, Spicy Food".split(",")
                                },
                                {
                                    title: 'dessert',
                                    children: "Chocolate, Fruit Salad".split(",")
                                }
                            ]
                        },
                        {
                            title: ['red'],
                            children: [
                                {
                                    title: 'starters',
                                    children: ['Cold Cuts', 'Cheese Plate', 'Green Salad', 'Grilled Artichokes']
                                },
                                {
                                    title: 'main course',
                                    children: "Spicy Chicken, Ramen, Grilled Vegetables, Spicy Food, Steak".split(",")
                                },
                                {
                                    title: 'dessert',
                                    children: "Apple Pie, Chocolate Mousse".split(",")
                                }
                            ]
                        }
                    ]
                },
                {
                    title: ['dry', 'sweet'],
                    children: [
                        {
                            title: ['pinot noir rose', 'pinot noir rosé'],
                            children: [
                                {
                                    title: 'starters',
                                    children: ['Smoked Salmon', 'Turkey Sandwich', 'Nuggets', 'Avocado Toast']
                                },
                                {
                                    title: 'main course',
                                    children: ['Sushi', 'Fish and Chips', 'Baked Chicken', 'Spicy Food', 'Spring Rolls']
                                },
                                {
                                    title: 'dessert',
                                    children: ['Pancakes', 'Fruit Tarts', 'Cheesecake', 'Lemon Pie']
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

function compare(node)
{
    if(ctr < db_compare.length)
    {
        //Sometimes the input to match is not just one child, but list of children like ['aromatic', 'zesty']
        //So for this I check if it is an array, if it is then I compare the input to each element of the array to 
        // check for matches.
        if(Array.isArray(node.title))
        {
            for(i = 0;i < node.title.length;i++)
            {
                if(node.title[i] === db_compare[ctr])
                {
                    //If I find a match, I increment the counter so that the next iteration of this function will go
                    // and check the next child(s)
                    ctr++
                    console.log('match at ' + node.title)
                    if(node.children)
                    {
                        //if the number of inputs matches the length of the user input,
                        //then Ik I have reached the end, so I can print that.
                        if(ctr === db_compare.length)
                        {
                            //title is the category
                            //children are the answer
                            console.log(node.title)
                            console.log(node.children + ' The final answer')
                        }
                        //if I am not at the end, I run my compare function again for each of the children
                        node.children.forEach(function(child){
                            compare(child)
                        })
                    }
                }        
            }
        }
        //same logic, but there is only one child here
        if(node.title === db_compare[ctr])
        {
            ctr++
            console.log('match at ' + node.title)
            if(node.children)
            {
                if(ctr === db_compare.length)
                {
                    console.log(node.children + ' The final answer')
                }
                //but one child can have multiple children, so I take that into account.
                node.children.forEach(function(child){
                    compare(child)
                })
            }
        }
    }
}

//start(db)
//compare(db)
compare(wineDB)