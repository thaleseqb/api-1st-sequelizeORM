const Controller = require("./Controller.js");
const PeopleServices = require("../services/PeopleServices.js");

const pessoaServices = new PeopleServices();

class PeopleController extends Controller {
    constructor(){
        super(pessoaServices);
    };

    async getRegistration(req, res) {
        const { studentId } = req.params;

        try {
            const resgistrationList = await pessoaServices.getRegistrationByStudent(Number(studentId))
            return res.status(200).json(resgistrationList) 
        } catch (error) {
            // 
        }
    }
};

module.exports = PeopleController;