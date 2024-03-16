const Controller = require("./Controller.js");
const PeopleServices = require("../services/PeopleServices.js");

const pessoaServices = new PeopleServices();

class PeopleController extends Controller {
    constructor(){
        super(pessoaServices);
    };
};

module.exports = PeopleController;