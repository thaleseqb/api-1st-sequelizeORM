class Controller {
    constructor(modelService) {
        this.modelService = modelService;
    }

    async getAll(req, res) {
        try {
            const registerList = await this.modelService.getAllRegisters()
            return res.status(200).json(registerList)
        } catch (error) {
            //
        }
    }

    async getOneById(req, res) {
        const {id} = req.params;
        try {
            const oneRegister = await this.modelService.getOneRegisterById(Number(id));
            return res.status(200).json(oneRegister);
        } catch (erro) {
            // erro
        }
    }

    async createNew(req, res) {
    const dataForCreation = req.body;
        try {
            const newRegisterCreated = await this.modelService.createRegister(dataForCreation);
            return res.status(200).json(newRegisterCreated);
        } catch (erro) {
            // erro
        }
    }

    async update (req, res) {
        const {id} = req.params;
        const updateData = req.body;

        try {
            // if the variable's name begins with 'is' certainly the variable's type is boolean
            const isUpdated = await this.modelService.updateRegister(updateData, Number(id));
            if (!isUpdated) {
                return res.status(400).json({ mensagem: "Registro não foi atualizado"});
            }

            return res.status(200).json({mensagem: "Atualizado com sucesso"})
        } catch (error) {
            // erro
        }
    }

    async delete(req, res) {
    const { id } = req.params;
        try {
            await this.modelService.deleteRegister(Number(id));
            return res.status(200).json({ mensagem: `id ${id} deletado` });


        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}



module.exports = Controller;