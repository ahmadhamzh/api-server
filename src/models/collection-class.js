'use strict'

class Collection {
    constructor(model) {
        this.model = model;
    }

    async read(id) {
        let response;
        try {
            if (id) {
                response = await this.model.findOne({ where: { id } })
            } else {
                response = await this.model.findAll()
            }
            return response;
        } catch (error) {
            console.error(`error in getting records on model ${this.model.name}`, error.message)
        }
    }

    async create(obj) {
        try {
            let response = await this.model.create(obj)
            return response;
        } catch (error) {
            console.error(`error in creating record on model ${this.model.name}`)
        }
    }
    
    async update(id,obj){
        try {
            let foundById = await this.model.findeOne({where:{id}})
            let response = await foundById.ubdate(obj);
            return response;
        } catch (error) {
            console.error(`error in deleting record on model ${this.model.name}`)            
        }
    }
    
    async delete(id){
        try {
            let response = await this.model.destroy({where:{id}})
            return response;
        } catch (error) {
            console.error(`error in deleting record on model ${this.model.name}`)            
        }

    }


}

module.exports = Collection;

