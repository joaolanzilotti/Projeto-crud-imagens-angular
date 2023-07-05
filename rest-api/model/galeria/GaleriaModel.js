const db = require('../../database/dbConnect');

module.exports = class GaleriaModel{

    static getAll(callback){
        return db.query("SELECT * FROM galeria", callback);
    }

}