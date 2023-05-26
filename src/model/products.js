const Pool = require('../config/db');

const selectAllProduct = () =>{
    return Pool.query(`select * from product`);
}

const selectProduct = (id) =>{
    return Pool.query(`select* from product where id=${id}`);
}

const insertProduct = (data) =>{
    const { id,name,stock,price} = data;
    return Pool.query(`INSERT INTO product(id,name,stock,price) VALUES(${id},'${name}',${stock},${price})`);
}

const updateProduct = (data) =>{
    const { id,name,stock,price} = data;
    return Pool.query(`UPDATE product SET name='${name}', stock=${stock}, price=${price} WHERE id=${id}`);
}

const deleteProduct = (id) =>{
    return Pool.query(`DELETE FROM product WHERE id=${id}`);
}

const countData = () =>{
    return Pool.query('SELECT COUNT(*) FROM product')
  }
  
const findId =(id)=>{
    return  new Promise ((resolve,reject)=> 
    Pool.query(`SELECT id FROM product WHERE id=${id}`,(error,result)=>{
      if(!error){
        resolve(result)
      }else{
        reject(error)
      }
    })
    )
  }

module.exports = {
    selectAllProduct,
    selectProduct,
    insertProduct,
    updateProduct,
    deleteProduct,
    countData,
    findId
}