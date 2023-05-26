const Pool = require('../config/db');

const selectAllKategori = () =>{
    return Pool.query(`select * from kategori`);
}

const selectKategori = (id) =>{
    return Pool.query(`select* from kategori where id=${id}`);
}

const insertkategori = (data) =>{
    const { id,name} = data;
    return Pool.query(`INSERT INTO kategori(id,name) VALUES(${id},'${name}')`);
}

const updateKategori = (data) =>{
    const { id,name} = data;
    return Pool.query(`UPDATE kategori SET name='${name}' WHERE id=${id}`);
}

const deleteKategori = (id) =>{
    return Pool.query(`DELETE FROM kategori WHERE id=${id}`);
}

const countData = () =>{
    return Pool.query('SELECT COUNT(*) FROM kategori')
  }
  
const findId =(id)=>{
    return  new Promise ((resolve,reject)=> 
    Pool.query(`SELECT id FROM kategori WHERE id=${id}`,(error,result)=>{
      if(!error){
        resolve(result)
      }else{
        reject(error)
      }
    })
    )
  }

module.exports = {
    selectAllKategori,
    selectKategori,
    insertkategori,
    updateKategori,
    deleteKategori,
    countData,
    findId
}