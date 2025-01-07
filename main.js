// Function to toggle the visibility of the FAQ answers
function toggleAnswer(answerId) {
  var answer = document.getElementById(answerId);
  if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
  } else {
      answer.style.display = 'none';
  }
}
// Get the modal and buttons
const addEventBtn = document.getElementById('add-event-btn');
const modal = document.getElementById('event-modal');
const closeModal = document.getElementById('close-modal');
const form = document.getElementById('add-event-form');

// Variable to keep track of the last side
let isLeftSide = true;

// Open the modal when the "Add Event" button is clicked
addEventBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close the modal when the "Cancel" button is clicked
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Handle form submission to add a new event
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from submitting

  const eventName = document.getElementById('event-name').value;
  const eventDate = document.getElementById('event-date').value;
  const eventImage = document.getElementById('event-image').value;
  const eventDescription = document.getElementById('event-description').value;

  // Determine the side for the new event
  const sideClass = isLeftSide ? 'left-container' : 'right-container';
  isLeftSide = !isLeftSide; // Toggle the side for the next event

  // Create the new event HTML structure
  const newEvent = document.createElement('div');
  newEvent.classList.add('container', sideClass);
  newEvent.innerHTML = `
    <img class="google-img" src="./google.png" alt="">
    <div class="text-box">
      <h2>${eventName}</h2>
      <small>${eventDate}</small>
      <div class="image">
        <img src="${eventImage}" alt="">
      </div>
      <p>${eventDescription}</p>
      <span class="${sideClass === 'left-container' ? 'left-container-arrow' : 'right-container-arrow'}"></span>
    </div>
  `;

  // Append the new event to the timeline
  document.querySelector('.timeline').appendChild(newEvent);

  // Close the modal and reset form
  modal.style.display = 'none';
  form.reset();
});



// Event data array
let eventData = [
  { Date: "1903", "Event Name": "Wright Brothers' First Flight", "Event Description": "On December 17, 1903, Orville and Wilbur Wright made the first successful powered flight in Kitty Hawk, North Carolina." },
  { Date: "1914–1918", "Event Name": "World War I", "Event Description": "World War I, fought from 1914 to 1918, was a global conflict primarily involving European powers." },
  // Add your initial events here...
];

// Function to generate and download Excel file
function downloadExcel() {
  const worksheet = XLSX.utils.json_to_sheet(eventData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Timeline Data");

  // Create the Excel file and download it
  XLSX.writeFile(workbook, "Historical_Timeline_Visualizer.xlsx");
}

