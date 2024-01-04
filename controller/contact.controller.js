//DESC FOR GET ALL CONTACTS

const getContact = (req, res) => {
  res.status(200).send("Get all contacts");
};

//DESC FOR CREATE ALL CONTACTS

const createContact = (req, res) => {
  res.status(201).send("create contacts");
};

//DESC FOR CREATE ALL CONTACTS


const updateContact = (req, res) => {
  res.status(201).send(`update contacts ${req.params.id}`);
};

//DESC FOR CREATE ALL CONTACTS


const deleteContact = (req, res) => {
  res.status(201).send(`delete contacts ${req.params.id}`);
};

module.exports = { getContact, createContact, updateContact, deleteContact };
