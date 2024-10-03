//click selection
function setActive(selectedItem) {
  // Remove 'active' class from all items
  const items = document.querySelectorAll('.nav-link');
  items.forEach(item => {
      item.classList.remove('active');
  });

  // Add 'active' class to the selected item
  selectedItem.classList.add('active');
}
// fade long


//fade text
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
          entry.target.classList.remove('show');
      }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//courosel

var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    autoplay: {
      delay: 2000, // Delay between slides in ms (3 seconds in this case)
      disableOnInteraction: false, // Autoplay will not be disabled after user interactions
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
// countdown
// Set the target date (24th October 2024)
const targetDate = new Date("2024-10-24T09:00:00").getTime();

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    // Time calculations for days, hours, minutes, seconds, and milliseconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    const milliseconds = timeRemaining % 100;

    // Display the result in the corresponding elements
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    document.getElementById("milliseconds").innerText = milliseconds;

    // If the countdown is over, display a message
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Countdown Finished!";
    }
}

// Update the countdown every 10 milliseconds
const countdownInterval = setInterval(updateCountdown, 10);

//text backup
const texts = [
  "India's",
  "First",
  "Robotic",
  "Integrated",
  "Auto Expo"
];

// Reference to the text container element
const textContainer = document.getElementById('words');

// Array of styles corresponding to the texts
const styles = [
  'style1',
  'style2',
  'style3',
  'style4',
  'style5'
];

// Variable to track the current index of the text array
let index = 0;

// Function to update the text every second
setInterval(() => {
  // Update the text in the container
  textContainer.textContent = texts[index];
  
  // Update the style based on the current index
  textContainer.className = styles[index];
  
  // Move to the next text in the array, looping back to the start
  index = (index + 1) % texts.length; // Loop back to 0 when reaching the end
}, 750); // 750 milliseconds = 0.75 seconds

// fade long
const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry)=>{
      console.log(entry)
      if (entry.isIntersecting){
          entry.target.classList.add('show');
      }
      else{
        entry.target.classList.remove('show');
    }
  });
});

const hiddenElements4 = document.querySelectorAll('.hidden3');
hiddenElements4.forEach((el) => observer4.observe(el));

