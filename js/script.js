document.addEventListener('DOMContentLoaded', function () {
  const chat = document.querySelector('.chat');
  const form = document.getElementsByTagName('form')[0];
  const messageInput = document.getElementById('input-message');

  const CHANNEL_ID = 'GKuFMJGEPgaDeAUk';

  const firstNames = [
    'Harry',
    'Ross',
    'Bruce',
    'Cook',
    'Carolyn',
    'Morgan',
    'Albert',
    'Walker',
    'Randy',
    'Reed',
    'Larry',
    'Barnes',
    'Lois',
    'Wilson',
    'Jesse',
    'Campbell',
    'Ernest',
    'Rogers',
    'Theresa',
    'Patterson',
    'Henry',
    'Simmons',
    'Michelle',
    'Perry',
    'Frank',
    'Butler',
    'Shirley',
  ];

  const lastNames = [
    'Ruth',
    'Jackson',
    'Debra',
    'Allen',
    'Gerald',
    'Harris',
    'Raymond',
    'Carter',
    'Jacqueline',
    'Torres',
    'Joseph',
    'Nelson',
    'Carlos',
    'Sanchez',
    'Ralph',
    'Clark',
    'Jean',
    'Alexander',
    'Stephen',
    'Roberts',
    'Eric',
    'Long',
    'Amanda',
    'Scott',
    'Teresa',
    'Diaz',
    'Wanda',
    'Thomas',
  ];

  function randomName() {
    return (
      firstNames[Math.floor(Math.random() * firstNames.length)] +
      '_' +
      lastNames[Math.floor(Math.random() * lastNames.length)]
    );
  }

  const drone = new Scaledrone(CHANNEL_ID, {
    data: {
      name: randomName(),
    },
  });

  drone.on('open', (error) => {
    if (error) {
      return console.log(error);
    }
  });

  const room = drone.subscribe('mez');

  room.on('open', (error) => {
    if (error) {
      return console.error(error);
    }
    // Connected to room
  });

  room.on('message', (message) => {
    console.log(message);
  });

  form.addEventListener('submit', function () {
    const value = messageInput.value;

    if (value.trim() === '') {
      return;
    } else {
    }
  });
});
