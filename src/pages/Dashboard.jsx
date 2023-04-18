import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CategoriesContext from '../context';

import TicketCard from '../components/TicketCard';

const Dashboard = () => {
  const [tickets, setTickets] = useState(null);
  const { categories, setCategories } = useContext(CategoriesContext);

  useEffect(() => {
    const ticketData = async () => {
      const response = await axios.get('http://localhost:8000/tickets');
      const dataObject = response.data.data;

      const arrayOfKeys = Object.keys(dataObject);
      const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key]);

      const formattedArray = [];

      arrayOfKeys.map((key, index) => {
        const formattedData = { ...arrayOfData[index] };
        formattedData['documentId'] = key;
        formattedArray.push(formattedData);
      });

      setTickets(formattedArray);
    };

    ticketData();
  }, []);

  useEffect(() => {
    setCategories([...new Set(tickets?.map(({ category }) => category))]);
  }, [tickets]);

  const colors = [
    'rgb(255,179,186)',
    'rgb(255,223,186)',
    'rgb(255,255,186)',
    'rgb(186,255,201)',
    'rgb(186,255,255)',
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  console.log(uniqueCategories);
  console.log(categories);

  return (
    <div className='dashboard'>
      <h1>My Projects</h1>
      <div className='ticket-container'>
        {tickets &&
          uniqueCategories.map((uniqueCategory, indexCategory) => (
            <div key={indexCategory}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    key={_index}
                    id={_index}
                    color={colors[indexCategory] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
