const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/animals", { useNewUrlParser: true });

let animalSchema = new mongoose.Schema({
    name: String,
    isChordate: Boolean,
    class: String,
    image: String

});

let Animal = mongoose.model("Animal", animalSchema);

Animal.create({
    name: "Dog",
    isChordate: true,
    class: "Mammals",
    image: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2019/02/dog-451643.jpg?h=bf654dbc&itok=MQGvBmuo"
}, (err, animal) => {
    if(err) {
        console.log("Crap!");
        console.log(err);
    }else {
        console.log("You saved an animal!");
        console.log(animal);
    }
});
