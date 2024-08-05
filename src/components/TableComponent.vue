<template>
    <div class="table-container">
      <table class="responsive-table">
        <thead>
          <tr>
            <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
            <td v-for="(key, colIndex) in Object.keys(row)" :key="colIndex">{{ row[key] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TableComponent',
    props: {
      headers: {
        type: Array,
        required: true,
        validator: (headers) => Array.isArray(headers) && headers.length > 0
      },
      rows: {
        type: Array,
        required: true,
        validator: (rows) => Array.isArray(rows) && rows.every(row => typeof row === 'object')
      }
    }
  }
  </script>
  
  <style scoped>
  .table-container {
    width: 100%; /* Occupare tutta la larghezza disponibile */
    overflow-x: auto; /* Aggiungi uno scroll orizzontale se necessario */
  }
  
  .responsive-table {
    width: 100%; /* La tabella occupa tutta la larghezza del contenitore */
    border-collapse: collapse; /* Rimuove gli spazi tra le celle */
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .responsive-table th,
  .responsive-table td {
    padding: 0.75rem 1rem;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  .responsive-table th {
    background-color: #f4f4f4;
    font-weight: bold;
  }
  
  .responsive-table tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  .responsive-table tr:hover {
    background-color: #f1f1f1;
  }
  
  /* Media Queries per diversi schermi */
  @media (max-width: 768px) {
    .responsive-table th,
    .responsive-table td {
      padding: 0.5rem; /* Riduce il padding per schermi più piccoli */
      font-size: 0.875rem; /* Riduce la dimensione del testo */
    }
  }
  
  @media (max-width: 480px) {
    .responsive-table th,
    .responsive-table td {
      display: block;
      width: 100%; /* La larghezza delle celle si adatta alla larghezza del contenitore */
      box-sizing: border-box; /* Includi padding e border nella larghezza totale */
      font-size: 0.75rem; /* Ulteriore riduzione della dimensione del testo */
    }
  
    .responsive-table thead {
      display: none; /* Nasconde l'intestazione su schermi molto piccoli */
    }
  
    .responsive-table tr {
      display: flex;
      flex-direction: column;
      margin-bottom: 0.5rem;
      border-bottom: 1px solid #ddd;
    }
  
    .responsive-table td {
      display: flex;
      justify-content: space-between;
      border: none;
      padding: 0.5rem 1rem;
    }
  
    .responsive-table td::before {
      content: attr(data-label); /* Mostra l'etichetta della colonna */
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
  </style>
  