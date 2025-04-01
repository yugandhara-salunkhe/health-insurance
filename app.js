//  mobile navigation dropdown
 function toggle (){
    const navList = document.querySelector('.nav');
    navList.classList.toggle('active');
 }

 function openModal(){
  const modal = document.getElementById('loginModal');
  modal.style.display = "block";
 }

 function closeModal(){
  const modal = document.getElementById('loginModal');
  modal.style.display = "none";
 }

 const registerform = document.getElementById('registrationForm');

 registerform.addEventListener('submit',function(event){
  event.preventDefault();

  const username = document.getElementById('username').value;
  const mail = document.getElementById('Registeremail').value;
  const mobile = document.getElementById('Registermobile').value;

  let valid = true;

  if(username.trim() === ''){
    alert('Name is required');
    valid = false;
  }
  const mobileRegex = /^[0-9]{10}$/; 
  if (!mobileRegex.test(mobile)) {
    alert('Please enter a valid 10-digit mobile number');
    valid = false;
  }
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(mail)) {
    alert('Please enter a valid email address');
    valid = false;
  }

  if(valid){
    const regformData = {
      username: username,
      Registermobile: mobile,
      Registeremail: mail,
    };

    localStorage.setItem('formData',JSON.stringify(regformData));
    registerform.reset();


    console.log(regformData);

    alert("form data has been stored in local Storage");
  }
  else{
    alert("please fix the Error");
  }

  console.log(regformData);


 });

 // component2 multiple-Forms onclick

 function showForm(formId,clickedItem){
  const forms = document.querySelectorAll('.form');
  forms.forEach(form => {
    form.style.display = 'none' ;
  });

  const selectedForm = document.getElementById(formId);
  if (selectedForm) {
    selectedForm.style.display = 'block'; 
  }

  const options = document.querySelectorAll('.left-panel .option');
  options.forEach( option => {
    option.classList.remove('active');
  });

  clickedItem.classList.add('active');

 };

 window.onload = function() {
  const firstOption = document.querySelector('.left-panel .option');
  showForm('form1', firstOption); 
};

// Get all the accordion buttons
const accordionButtons = document.querySelectorAll('.accordion');

const firstButton = accordionButtons[0];
const firstContent = firstButton.nextElementSibling; // Get the first section content
const firstSign = firstButton.querySelector('.toggle-sign'); // Get the first sign

firstContent.style.display = 'block';  // Show the first section
firstSign.textContent = '-';  // Set the first sign to '-'


accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling; // Get the content element after the button
        const sign = button.querySelector('.toggle-sign'); // Get the sign element inside the button

        // If content is already visible, hide it; otherwise, show it
        if (content.style.display === 'block') {
            content.style.display = 'none';
            sign.textContent = '+'; // Change sign to plus when closing
        } 
        else {
            // Close all other open sections first
            const allContent = document.querySelectorAll('.accordion-content');
            allContent.forEach(item => item.style.display = 'none');

            // Change all signs to plus
            const allSigns = document.querySelectorAll('.toggle-sign');
            allSigns.forEach(item => item.textContent = '+');

            // Open the clicked section
            content.style.display = 'block';
            sign.textContent = '-'; // Change sign to minus when opening
        }
    });
});

// swiper effect on slide


const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  // direction: 'horizontal',
  // loop: true,

  slidesPerView: 3,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});



 // Insurance form 

// const form = document.getElementById('Insurance-Form');

// form.addEventListener('submit', function(event){
//   event.preventDefault(); // to prevent from refreshing

//   const adult = document.getElementById('adult').value;
//   const kid = document.getElementById('kid').value;
//   const mobile = document.getElementById('mobile').value;
//   const email = document.getElementById('email').value;
//   const pincode = document.getElementById('pincode').value;
//   const city = document.getElementById('city').value;
//   const terms = document.getElementById('terms').checked;
//   const whatsapp = document.getElementById('whatsapp').checked;

//   let valid = true;
//   let errorMessages = [];

//   if(adult.trim() === ''){
//     alert('Name is required');
//     valid = false;
//   }
//   if(kid.trim() === ''){
//     alert('Name is required');
//     valid = false;
//   }
//   const mobileRegex = /^[0-9]{10}$/; 
//   if (!mobileRegex.test(mobile)) {
//     alert('Please enter a valid 10-digit mobile number');
//     valid = false;
//   }
//   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//   if (!emailRegex.test(email)) {
//     errorMessages.push('Please enter a valid email address.');
//     alert('Please enter a valid email address');
//     valid = false;
//   }
  
//   if (valid){
//     const formData = {
//       adult: adult,
//       kid: kid,
//       mobile: mobile,
//       email: email,
//       pincode : pincode,
//       city: city,
//       terms: terms ? 'Yes' : 'No',
//       whatsapp: whatsapp ? 'Yes' : 'No'
//     };

//     localStorage.setItem('formData',JSON.stringify(formData));
//     form.reset();


//     console.log(formData);

//     alert("form data has been stored in local Storage")
//   }
//   else{
//     alert("please fix the Error:\n' " + errorMessages.join('\n'));
//   }

//   console.log(formData);
//   console.log('Adult Name:', adult);
//   console.log('Kid Name:', kid);
//   console.log('Mobile No.:', mobile);
//   console.log('Email Id:', email);
//   console.log('Pincode:', pincode);
//   console.log('City:', city);


//  });




