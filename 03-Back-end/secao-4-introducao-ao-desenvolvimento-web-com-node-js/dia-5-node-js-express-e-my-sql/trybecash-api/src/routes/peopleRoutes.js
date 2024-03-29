const router = require('express').Router();
const peopleDB = require('../db/peopleDB');

router.post('/', async (req, res) => {
  try {
    const person = req.body;
    const [ result ] = await peopleDB.insert(person);
    res.status(201).json({
      message: `Pessoa cadastrada com sucesso com o id ${result.insertId}`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' });
  }
});

router.get('/', async (_req, res) => {
  try {
    const [result] = await peopleDB.findAll();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await peopleDB.findById(id);
    
    if (result) return res.status(200).json(result);
    
    res.status(404).json({ message: 'Pessoa não encontrada'});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const person = req.body;
    const [ result ] = await peopleDB.update(person, id);

    if (result.affectedRows > 0) {
      return res.status(200).json({
        message: `Pessoa de id ${id} atualizada com sucesso` 
      });
    }
  
    res.status(404).json({ message: 'Pessoa não encontrada' });
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await peopleDB.remove(id);
    if (result.affectedRows > 0) {
      return res.status(200).json({ 
        message: `Pessoa de id ${id} excluída com sucesso` 
      });
    }
    
    res.status(404).json({ message: 'Pessoa não encontrada' });
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
});

module.exports = router;