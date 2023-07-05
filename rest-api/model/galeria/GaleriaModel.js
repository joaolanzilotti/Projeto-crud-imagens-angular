const db = require('../../database/dbConnect');

class GaleriaModel{

    static getAll(callback){
        return db.query("SELECT * FROM galeria", callback);
    }

}