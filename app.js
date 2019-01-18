const data = [{
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Dublin IE',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Jenny Smith',
    age: 28,
    gender: 'female',
    lookingfor: 'male',
    location: 'Cork IE',
    image: 'https://randomuser.me/api/portraits/female/28.jpg'
  },
  {
    name: 'Monica White',
    age: 30,
    gender: 'female',
    lookingfor: 'male',
    location: 'Dublin IE',
    image: 'https://randomuser.me/api/portraits/female/30.jpg'
  }
];

const profiles = profileIterator(data);

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;

  document.getElementById('profileDisplay').innerHTML = `
  <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Gender: ${currentProfile.gender}</li>
    <li class="list-group-item">Preferences: Looking for ${currentProfile.lookingfor}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
  </ul>
  `;

  document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ? {
        value: profiles[nextIndex++],
        done: false
      } : {
        done: true
      }
    }
  };
}