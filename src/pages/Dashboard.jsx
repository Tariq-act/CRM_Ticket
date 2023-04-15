import React from 'react';
import TicketCard from '../components/TicketCard';

const Dashboard = () => {
  const tickets = [
    {
      category: 'Q1 2023',
      color: 'red',
      title: 'NFT Safety 101 Video',
      owner: 'Tariq Khan',
      avatar:
        'https://media.licdn.com/dms/image/C4D03AQG7YGt4qGIUcQ/profile-displayphoto-shrink_400_400/0/1656500746469?e=1686787200&v=beta&t=3w7Yza66Tu3U193ql1JNX5mbBUz48Ezmpo445sVfoN4',
      status: 'done',
      priority: 5,
      progress: 40,
      description:
        'Make a video showcasing how to work NFTs safely, including how to know one is not genuine.',
      timeStamp: '2023-02-11T07:36:17+0000',
    },
    {
      category: 'Q2 2023',
      color: 'red',
      title: 'Build and Sell AI Model',
      owner: 'Tariq Khan',
      avatar:
        'https://media.licdn.com/dms/image/C4D03AQG7YGt4qGIUcQ/profile-displayphoto-shrink_400_400/0/1656500746469?e=1686787200&v=beta&t=3w7Yza66Tu3U193ql1JNX5mbBUz48Ezmpo445sVfoN4',
      status: 'working on it',
      priority: 5,
      progress: 70,
      description: 'Make a video about AI',
      timeStamp: '2023-02-13T07:36:17+0000',
    },
    {
      category: 'Q2 2023',
      color: 'blue',
      title: 'Build a bot',
      owner: 'Tariq Khan',
      avatar:
        'https://media.licdn.com/dms/image/C4D03AQG7YGt4qGIUcQ/profile-displayphoto-shrink_400_400/0/1656500746469?e=1686787200&v=beta&t=3w7Yza66Tu3U193ql1JNX5mbBUz48Ezmpo445sVfoN4',
      status: 'working on it',
      priority: 3,
      progress: 10,
      description: 'Make a video about making a bot',
      timeStamp: '2023-02-15T07:36:17+0000',
    },
  ];

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
