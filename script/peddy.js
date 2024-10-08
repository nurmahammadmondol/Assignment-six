// Fetch All Pets Part Start :------------------------------------
function showALLPetsLink() {
  fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(res => res.json())
    .then(data => {
      setTimeout(() => {
        document.getElementById('spinner').classList.add('hidden');
        document
          .getElementById('Fetch_All_Paddy_Items')
          .classList.remove('hidden');

        Fetch_All_Details(data.pets);
      }, 2000);

      document.getElementById('spinner').classList.remove('hidden');
      document.getElementById('Fetch_All_Paddy_Items').classList.add('hidden');
      // Fetch_All_Details(data.pets)
    });
}
const Fetch_All_Details = All_ID => {
  const Fetch_All_Pets = document.getElementById('Fetch_All_Pets');

  Fetch_All_Pets.innerHTML = '';

  if (All_ID.length == 0) {
    Fetch_All_Pets.classList.remove('grid');
    Fetch_All_Pets.innerHTML = `
      <div class="flex flex-col justify-center items-center gap-6 bg-gray-100 text-center rounded-xl h-[650px] px-2 md:px-8 lg:px-16">
      <img class="w-[150px] md:w-[250px]" src="images/error.webp"/>
      <h3 class="text-2xl md:text-3xl font-bold ">No Information Available</h3>
      <p class="text-gray-500">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
      its layout. The point of using Lorem Ipsum is that it has a.</p>
      </div>
      `;
  } else {
    Fetch_All_Pets.classList.add('grid');
  }

  All_ID.forEach(item => {
    const Box = document.createElement('div');
    // console.log(item);

    Box.classList.add('border', 'p-4', 'rounded-lg');
    Box.innerHTML = `
      <img class="w-full rounded-lg " src="${item.image}"/>
      <h2 class="text-xl font-bold mt-4 mb-1">${item.pet_name}</h2>

      <p class="text-gray-500">
      <i class="fa-brands fa-slack"></i>
       Breed : ${item.breed}</p>

      <p class="text-gray-500">
      <i class="fa-regular fa-calendar"></i>
      Birth : ${item.date_of_birth}</p>
      
      <p class="text-gray-500">
      <i class="fa-solid fa-mercury"></i>
      Gender : ${item.gender}</p>

      <p class="text-gray-500">
        <i class="fa-solid fa-dollar-sign"></i>
        Price : ${item.price}</p>
      
      <div class="mt-3 flex justify-between">
        <button onclick="LikeButton('${item.image}')" class="btn btn-sm btn-outline px-2 lg:px-5 text-BtnColor2">
        <i class="fa-regular fa-thumbs-up"></i>
        </button>
        
        <button onclick="showAdopt()" class="btn btn-sm btn-outline px-1 lg:px-5 text-BtnColor2">Adopt</button>
        <button onclick="showDetails('${item.petId}')" class="btn btn-sm btn-outline px-1 lg:px-5 text-BtnColor2">Details</button>
      </div>

      `;

    Fetch_All_Pets.appendChild(Box);
  });
};

// Like Button Click :---------
const LikeButton = ID => {
  AddedImage(ID);
};
// Added New Box Image Items :
const AddedImage = Item => {
  const LikesPetsContainer = document.getElementById('LikesPetsContain');

  const CreatedBox = document.createElement('div');

  CreatedBox.innerHTML = `
     <div>
      <img class="rounded-lg" src="${Item}"/>
     </div>
    
    `;
  LikesPetsContainer.appendChild(CreatedBox);
};

// Show Details Part :----------
function showDetails(ID) {
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${ID}`)
    .then(res => res.json())
    .then(data => ShowModal(data.petData));
}
const ShowModal = ID => {
  console.log(ID);
  const ModalDetails = document.getElementById('ModalDetails');
  ModalDetails.innerHTML = `
    <div class="lg:w-[450px] flex flex-col justify-center">
       <img class="w-full h-[160px] lg:h-[240px] rounded-lg " src="${ID.image}"/>

      <h2 class="text-xl font-bold mt-4 mb-1">${ID.pet_name}</h2>

     <div class="grid grid-cols-2">
       <p class="text-gray-500">
      <i class="fa-brands fa-slack"></i>
       Breed : ${ID.breed}</p>

      <p class="text-gray-500">
      <i class="fa-regular fa-calendar"></i>
      Birth : ${ID.date_of_birth}</p>
      
      <p class="text-gray-500">
      <i class="fa-solid fa-mercury"></i>
      Gender : ${ID.gender}</p>

      <p class="text-gray-500">
        <i class="fa-solid fa-dollar-sign"></i>
        Price : ${ID.price}</p>

      
     </div>

      <h3 class="mt-3 text-xl font-semibold">Details :</h3>
     <p class="text-gray-500 mt-1">
        Price : ${ID.pet_details}</p>

    </div>
    `;

  document.getElementById('CustomModalOne').showModal();
};

// show Adopt Part :-----------
function showAdopt() {
  ShowModalTwo();
}
function TimeOut() {
  let countdownNumber = 3;
  const countdownElement = document.getElementById('countdown');

  const intervalId = setInterval(() => {
    countdownNumber--;
    countdownElement.textContent = countdownNumber;

    if (countdownNumber === 0) {
      clearInterval(intervalId);
      document.getElementById('CustomModalTwo').close();
    }
  }, 1000);
}
function ShowModalTwo() {
  const ModalAdopt = document.getElementById('ModalAdopt');
  ModalAdopt.innerHTML = `
    <div class="lg:w-[460px] text-center mx-auto">
    
      <img class="w-[80px] mx-auto mb-4" src="images/time.png"/>
      <h1 class="text-3xl font-bold text-BtnColor my-3">Congratulations 🎉 </h1>
      <p class="text-xl font-bold my-3">You Have successfully Adopted the pet.</p>
       <h2 class="mt-6 font-bold">Please waiting just few second ! </h2>
     
       <h1 class="text-2xl font-bold mt-4" id="countdown">3</h1>
       
    </div>
    `;
  document.getElementById('CustomModalTwo').showModal();

  TimeOut();
}

// Fetch All Pet Categories Start :-------------------------------
function Fetch_All_Pet_Categories() {
  fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res => res.json())
    .then(data => show_Pet_Categories(data.categories));
}

function show_Pet_Categories(Pet_Categories) {
  const All_Pet_Categories = document.getElementById('All_Pet_Categories');

  Pet_Categories.forEach(item => {
    const Pet_Categories_items = document.createElement('div');

    Pet_Categories_items.innerHTML = `
    <button id="Btn-${item.category}" onclick="specificPets('${item.category}')" class="btn btn-outline text-BtnColor2 btn-lg w-full h-20 text-xl font-bold Btn-Color-remove">
      <img class="w-[50px]" src="${item.category_icon}"/>
     ${item.category}
    </button>
    `;

    All_Pet_Categories.appendChild(Pet_Categories_items);
  });
}

// Remove Button Color :
const RemoveColorBtn = () => {
  const Items = document.getElementsByClassName('Btn-Color-remove');

  for (let item of Items) {
    item.classList.remove('activeColor');
  }
};

// specific categories Pets :
function specificPets(pet) {
  // console.log(pet);
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${pet}`)
    .then(res => res.json())
    .then(data => {
      // Remove Color :
      RemoveColorBtn();

      // Add Color:
      const ActiveButtons = document.getElementById(`Btn-${pet}`);
      ActiveButtons.classList.add('activeColor');

      setTimeout(() => {
        Fetch_All_Details(data.data);
        document.getElementById('spinner').classList.add('hidden');
        document
          .getElementById('Fetch_All_Paddy_Items')
          .classList.remove('hidden');
      }, 2000);

      document.getElementById('Fetch_All_Paddy_Items').classList.add('hidden');
      document.getElementById('spinner').classList.remove('hidden');
      // Fetch_All_Details(data.data);
    });
}

// Sort By Price:
document.getElementById('SortByPrice').addEventListener('click', function () {
  showALLPetsLink();
});

// OutPut Items :
showALLPetsLink();
Fetch_All_Pet_Categories();
