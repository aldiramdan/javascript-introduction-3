const api_url = 'https://jsonplaceholder.typicode.com/users/'

// fetch(api_url, {
//   method: 'GET',
// })
//   .then((res) => res.json())
//   .then((data) => data.map((user) => {
//     console.log(user.name);
//   }))
//   .catch(err => console.log('Request Failed', err))

async function getName() {
  const res = await fetch(api_url)
  const data = await res.json()
  const nameUs = await data.map((user) => {
    return user.name
  })
  console.log(nameUs);

  // let result = []
  // for (let i = 0; i < data.length; i++) {
  //   const nameUser = data[i].name;
  //   result.push(nameUser)
  // }
  // console.log(result);
}
getName()