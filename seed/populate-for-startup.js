var User        = require('../models/user');
var Category    = require('../models/categories');
var Department  = require('../models/department');
var Product     = require('../models/product');
var Variant     = require('../models/variant');
var mongoose    = require('mongoose');
//mongoose.connect('mongodb://localhost/shoppingApp');
//mongoose.connect('mongodb://localhost/myShoppingApp3', { useNewUrlParser: true, useCreateIndex: true, });
mongoose.connect('mongodb://localhost/myShoppingApp3');


var categories =
[
    new Category({
        categoryName        : 'Gaming'
    }),
    new Category({
        categoryName        : 'Workstations'
    }),
    new Category({
        categoryName        : 'Casual'
    }),
]

for (let i = 0; i < categories.length; i++){
    categories[i].save(function(e, r) {
        if (i === categories.length - 1){
            exit();
        }
    });
}

var departments =
[
    new Department({
        departmentName      : 'Desktops',
        categories          : 'Gaming, Work Stations, Casual'

    }),
    new Department({
        departmentName      : 'Laptops',
        categories          : 'Gaming, Work Stations, Casual'
    })
]

for (let i = 0; i < departments.length; i++){
    departments[i].save(function(e, r) {
        if (i === departments.length - 1){
            exit();
        }
    });
}

var products =
[
    new Product({
        _id: "5bedf31cc14d7822b39d9d43",
        imagePath: 'https://cdnimgiron-i5jmnpwxzrbawq.stackpathdns.com/wp-content/uploads/2017/04/CONQUEROR-case-black.png',
        title: 'Conqueror',
        description: 'Perfect workstation that can accomodate your needs.',
        price: 2249.99,
        color: 'Black',
        size: 'Standard,Advanced,Ultra',
        quantity: 10,
        department: 'Desktops',
        category: 'Work Stations',
    }),
    new Product({
        _id: "5bedf3b9c14d7822b39d9d45",
        imagePath: 'https://cdnimg-i5jmnpwxzrbawq.stackpathdns.com/wp-content/uploads/2017/04/purple-case.png',
        title: 'Grunt',
        description: 'Computer meant for surfing the web, accessing emails, generally casual use.',
        price: 449.99,
        color: 'Purple',
        size: 'Standard,Advanced,Ultra',
        quantity: 15,
        department: 'Desktops',
        category: 'Casual',
    }),
    new Product({
        _id: "5bedf448c14d7822b39d9d47",
        imagePath: 'https://cdniron-i5jmnpwxzrbawq.stackpathdns.com/wp-content/uploads/2018/03/black-2.png',
        title: 'Nemesis',
        description: 'Desktop computer that can run most games.',
        price: 1449.99,
        color: 'Red',
        size: 'Standard, Advanced, Ultra',
        quantity: 90,
        department: 'Desktops',
        category: 'Gaming',
    }),
    new Product({
        _id: "5bedf55bc14d7822b39d9d4b",
        imagePath: 'https://cdnimg-i5jmnpwxzrbawq.stackpathdns.com/wp-content/uploads/2017/04/imp-case@2x.png',
        title: 'Imp',
        description: 'Desktop computer for Casual Gaming.',
        price: 699.99,
        color: 'Orange',
        size: 'Standard, Advanced, Ultra',
        quantity: 4,
        department: 'Desktops',
        category: 'Casual, Gaming',
    }),
    new Product({
        _id: "5bedf5eec14d7822b39d9d4e",
        imagePath: 'https://cdnimgiron-i5jmnpwxzrbawq.stackpathdns.com/wp-content/uploads/2018/03/MINION-BLACK-case.png',
        title: 'Minion',
        description: 'Desktop Computer for Casual Gaming',
        price: 599.99,
        color: 'Blue',
        size: 'Standard, Advanced, Ultra',
        quantity: 5,
        department: 'Desktops',
        category: 'Casual, Gaming',
    }),
    new Product({
        _id: "5bedf6b5c14d7822b39d9d51",
        imagePath: 'https://cdnimg-i5jmnpwxzrbawq.stackpathdns.com/wp-content/uploads/2017/04/fiend-case-black.png',
        title: 'Fiend',
        description: 'Gaming computer adequate for your needs.',
        price: 899.99,
        color: 'Green',
        size: 'Standard, Advanced, Ultra',
        quantity: 80,
        department: 'Desktops',
        category: 'Gaming',
    }),
    new Product({
        _id: "5bedf720c14d7822b39d9d52",
        imagePath: 'https://cdniron-i5jmnpwxzrbawq.stackpathdns.com/wp-content/uploads/2017/06/BRONZE-15-HERO.png',
        title: 'Bronze',
        description: '15" Casual Laptop, that may run some games at average frames per second. Recommended for casual use.',
        price: 899.99,
        color: 'Black',
        size: 'Standard, Advanced, Ultra',
        quantity: 8,
        department: 'Laptops',
        category: 'Casual',
    }),
    new Product({
        _id: "5bedf7ecc14d7822b39d9d55",
        imagePath: 'https://cdniron-i5jmnpwxzrbawq.stackpathdns.com/wp-content/uploads/2017/04/SILVER-15-HERO.png',
        title: 'Silver',
        description: '17" Gaming Laptop that can run most games at average frames per second.',
        price: 1499.99,
        color: 'Black',
        size: 'Standard, Advanced, Ultra',
        quantity: 12,
        department: 'Laptops',
        category: 'Gaming, Casual',
    }),
    new Product({
        _id: "5bedf7ecc14d7822b39d9d55",
        imagePath: 'https://cdniron-i5jmnpwxzrbawq.stackpathdns.com/wp-content/uploads/2017/04/GOLD-17-HERO.png',
        title: 'Gold',
        description: '17" Gaming Laptop that can run games at high frames per second.',
        price: 1999.99,
        color: 'Black',
        size: 'Standard, Advanced, Ultra',
        quantity: 12,
        department: 'Laptops',
        category: 'Gaming',
    }),
    new Product({
        _id: "5bedf7ecc14d7822b39d9d55",
        imagePath: 'https://cdnimgiron-i5jmnpwxzrbawq.stackpathdns.com/wp-content/uploads/2017/04/IRON-17-HERO.png',
        title: 'Iron',
        description: '17" Workstation Laptop that can run high end games, and can be used for processes that require a heavy machine.',
        price: 3349.99,
        color: 'Black',
        size: 'Standard, Advanced, Ultra',
        quantity: 12,
        department: 'Laptops',
        category: 'Work Stations',
    })
];

for (let i = 0; i < products.length; i++){
    products[i].save(function(e, r) {
        if (i === products.length - 1){
            exit();
        }
    });
}

var variants =
[
    new Variant({
        productID: '5bedf31cc14d7822b39d9d43',
        imagePath: 'https://static.zara.net/photos///2018/I/0/1/p/7568/644/710/2/w/1920/7568644710_1_1_1.jpg?ts=1541151891840',
        color: 'Beige',
        size: 'S,L',
        quantity: 5,
    }),
    new Variant({
        productID: '5bedf3b9c14d7822b39d9d45',
        imagePath: 'https://static.zara.net/photos///2018/I/0/1/p/5644/641/735/2/w/1920/5644641735_2_5_1.jpg?ts=1540395590656',
        color: 'Copper',
        size: 'S,L,XL',
        quantity: 12,
    }),
    new Variant({
        productID: '5bedf448c14d7822b39d9d47',
        imagePath: 'https://static.zara.net/photos///2018/I/0/1/p/7568/469/605/2/w/1920/7568469605_2_1_1.jpg?ts=1540394095062',
        color: 'Maroon',
        size: 'XS,M,L',
        quantity: 4,
    }),
    new Variant({
        productID: '5bedf448c14d7822b39d9d47',
        imagePath: 'https://static.zara.net/photos///2018/I/0/1/p/7568/469/822/2/w/1920/7568469822_2_1_1.jpg?ts=1540394193241',
        color: 'Charcool',
        size: 'XS,L,XL',
        quantity: 5,
    }),
    new Variant({
        productID: '5bedf5eec14d7822b39d9d4e',
        imagePath: 'https://static.zara.net/photos///2018/I/0/2/p/1775/300/806/2/w/1920/1775300806_2_1_1.jpg?ts=1539690394197',
        color: 'Stone',
        size: 'S,XL',
        quantity: 35,
    }),
    new Variant({
        productID: '5bedf720c14d7822b39d9d52',
        imagePath: 'https://static.zara.net/photos///2018/I/0/2/p/5575/380/407/2/c-269-0-2048-3072/w/1920/5575380407_1_1_1.jpg?ts=1527602989905',
        color: 'Dark Blue',
        size: 'M,XL',
        quantity: 5,
    })
];

for (let i = 0; i < variants.length; i++){
    variants[i].save(function(e, r) {
        if (i === variants.length - 1){
            exit();
        }
    });
}

var newUser = new User({
    username    : 'jacobbenyoung@gmail.com',
    password    : 'jacob123',
    fullname    : 'Jacob Young',
    admin       : true
});
var userJacob = new User({
    username    : 'admin@admin.com',
    password    : 'admin',
    fullname    : 'Cuneyt Celebican',
    admin       : true
});
var userMud = new User({
    username    : 'mudmirza@cmail.carleton.ca',
    password    : 'iamthebest123',
    fullname    : 'Mud Mirza',
    admin       : true
});
User.createUser(newUser, function(err, user){
    if(err) throw err;
    console.log(user);
});
User.createUser(userJacob, function(err, user){
    if(err) throw err;
    console.log(user);
});
User.createUser(userMud, function(err, user){
    if(err) throw err;
    console.log(user);
});

function exit() {
    mongoose.disconnect();
}
