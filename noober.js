function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

window.addEventListener('DOMContentLoaded', function() {
  // YOUR CODE
  let allRidesButton = document.querySelectorAll('#all-filter')
  allRidesButton.addEventListener('click', async function (event) {
    event.preventDefault
    console.log('All Rides Selected')

    //allRidesButton.insertAdjacentHTML('beforeend', `All Rides Selected`)

    let response = await fetch('https://kiei451.com/api/rides.json')

    let json = await response.json()


    let allRidesArray = []
      for (let i=0; i<json.length; i++) {
        let a = levelOfService(json[i])
        if(a == ''){
          allRidesArray.push(json[i])
      let rides = document.querySelector('.rides')
      let html = renderRides(allRidesArray)
      rides.insertAdjacentHTML('beforeend', `${html}`)
      let filterReset = document.querySelector('#all-filter')
      //filterReset.innerHTML = ''
        }
      }
  })




  let poolButton = document.querySelector('#noober-pool-filter')
  poolButton.addEventListener('click', async function (event) {
    event.preventDefault
    console.log('Noober Pool Selected')

    //poolButton.insertAdjacentHTML('beforeend', `Noober Pool Selected`)

    let response = await fetch('https://kiei451.com/api/rides.json')

    let json = await response.json()


    let poolArray = []
      for (let i=0; i<json.length; i++) {
        let b = levelOfService(json[i])
        if(b == 'Noober Pool'){
          poolArray.push(json[i])
      let rides = document.querySelector('.rides')
      let html = renderRides(poolArray)
      rides.insertAdjacentHTML('beforeend', `${html}`)
      let filterReset = document.querySelector('#noober-pool-filter')
      //filterReset.innerHTML = ''
        }
      }
  })
  
  
  
  
  
  let purpleButton = document.querySelector('#noober-purple-filter')
  purpleButton.addEventListener('click', async function (event) {
    event.preventDefault
    console.log('Noober Purple Selected')

    //purpleButton.insertAdjacentHTML('beforeend', `Noober Purple Selected`)

    let response = await fetch('https://kiei451.com/api/rides.json')

    let json = await response.json()


    let purpleArray = []
      for (let i=0; i<json.length; i++) {
        let c = levelOfService(json[i])
        if(c == 'Noober Purple'){
          purpleArray.push(json[i])
      let rides = document.querySelector('.rides')
      let html = renderRides(purpleArray)
      rides.insertAdjacentHTML('beforeend', `${html}`)
      let filterReset = document.querySelector('#noober-purple-filter')
      //filterReset.innerHTML = ''
        }
      }
  })
})




let xlButton = document.querySelector('#noober-xl-filter')
  xlButton.addEventListener('click', async function (event) {
    event.preventDefault
    console.log('Noober XL Selected')

    //xlButton.insertAdjacentHTML('beforeend', `Noober XL Selected`)

    let response = await fetch('https://kiei451.com/api/rides.json')

    let json = await response.json()


    let xlArray = []
      for (let i=0; i<json.length; i++) {
        let d = levelOfService(json[i])
        if(d == 'Noober XL'){
          xlArray.push(json[i])
      let rides = document.querySelector('.rides')
      let html = renderRides(xlArray)
      rides.insertAdjacentHTML('beforeend', `${html}`)
      let filterReset = document.querySelector('#noober-xl-filter')
      //filterReset.innerHTML = ''
        }
      }
  })


  let xButton = document.querySelector('#noober-x-filter')
  xButton.addEventListener('click', async function (event) {
    event.preventDefault
    console.log('Noober X Selected')

    //xlButton.insertAdjacentHTML('beforeend', `Noober X Selected`)

    let response = await fetch('https://kiei451.com/api/rides.json')

    let json = await response.json()
    


    let xArray = []
      for (let i=0; i<json.length; i++) {
        let d = levelOfService(json[i])
        if(d == 'Noober X'){
          xArray.push(json[i])
      let rides = document.querySelector('.rides')
      let html = renderRides(xArray)
      rides.insertAdjacentHTML('beforeend', `${html}`)
      let filterReset = document.querySelector('#noober-x-filter')
      //filterReset.innerHTML = ''
        }
      }
  })

  let purpleButton = document.querySelector('#noober-purple-filter')
  purpleButton.addEventListener('click', async function (event) {
    event.preventDefault
    console.log('Noober Purple Selected')

    //xlButton.insertAdjacentHTML('beforeend', `Noober X Selected`)

    let response = await fetch('https://kiei451.com/api/rides.json')

    let json = await response.json()
    


    let purpleArray = []
      for (let i=0; i<json.length; i++) {
        let d = levelOfService(json[i])
        if(d == 'Noober Purple'){
          purpleArray.push(json[i])
      let rides = document.querySelector('.rides')
      let html = renderRides(purpleArray)
      rides.insertAdjacentHTML('beforeend', `${html}`)
      let filterReset = document.querySelector('#noober-x-filter')
      //filterReset.innerHTML = ''
      
        }
      }
  })

  let poolButton = document.querySelector('#noober-pool-filter')
  poolButton.addEventListener('click', async function (event) {
    event.preventDefault
    console.log('Noober Pool Selected')

    //poolButton.insertAdjacentHTML('beforeend', `Noober Pool Selected`)

    let response = await fetch('https://kiei451.com/api/rides.json')

    let json = await response.json()
    


    let poolArray = []
      for (let i=0; i<json.length; i++) {
        let d = levelOfService(json[i])
        if(d == 'Noober Pool'){
          poolArray.push(json[i])
      let rides = document.querySelector('.rides')
      let html = renderRides(poolArray)
      rides.insertAdjacentHTML('beforeend', `${html}`)
      let filterReset = document.querySelector('#noober-pool-filter')
      //filterReset.innerHTML = ''
      
        }
      }
  })



  let allRidesButton = document.querySelector('#all-filter')
  allRidesButton.addEventListener('click', async function (event) {
    event.preventDefault
    console.log('All Rides Selected')

    //allRidesButton.insertAdjacentHTML('beforeend', `All Rides Selected`)

    let response = await fetch('https://kiei451.com/api/rides.json')

    let json = await response.json()
    


    let allRidesArray = []
      for (let i=0; i<json.length; i++) {
        let d = levelOfService(json[i])
        if(d == 'rides') {
          allRidesArray.push(json[i])
      let rides = document.querySelector('.rides')
      let html = renderRides(allRidesArray)
      rides.insertAdjacentHTML('beforeend', `${html}`)
      let filterReset = document.querySelector('#all-filter-filter')
      //filterReset.innerHTML = ''
      
        }
      }
  })