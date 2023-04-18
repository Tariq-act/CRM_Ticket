'use strict';

const PORT = 8000;
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const url =
  'https://c94a9b19-ed8e-4731-9e9b-dc3fc03445af-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks';
const token =
  'AstraCS:NiwaDDkzNhdAbLPAZZCPzdHZ:60c899f51e2d36b4e276442f05da285ceb2f63c5b4a4534980bc5b33f56f8d48';

app.get('/tickets', async (req, res) => {
  const options = {
    method: 'GET',
    headers: {
      Accepts: 'application/json',
      'X-cassandra-Token': token,
    },
  };

  try {
    const response = await axios(`${url}?page-size=20`, options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

app.post('/tickets', async (req, res) => {
  const formData = req.body.formData;

  const options = {
    method: 'POST',
    headers: {
      Accepts: 'application/json',
      'X-cassandra-Token': token,
      'Content-Type': 'application/json',
    },
    data: formData,
  };

  try {
    const response = await axios(url, options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

app.delete('/tickets/:documentId', async (req, res) => {
  const id = req.params.documentId;

  const options = {
    method: 'delete',
    headers: {
      Accepts: 'applications/json',
      'X-Cassandra-Token': token,
    },
  };

  try {
    const response = await axios(`${url}/${id}`, options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

app.listen(PORT, () => console.log('server running on PORT ' + PORT));
