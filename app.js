  function toggle (){
    const navList = document.querySelector('.nav');
    navList.classList.toggle('active');
 }




const form = document.getElementById('Insurance-Form');

form.addEventListener('submit',function(event){
  event.preventDefault(); // to prevent from refreshing

  const adult = document.getElementById('adult').value;
  const kid = document.getElementById('kid').value;
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('email').value;
  const pincode = document.getElementById('pincode').value;
  const city = document.getElementById('city').value;
  const terms = document.getElementById('terms').checked;
  const whatsapp = document.getElementById('whatsapp').checked;

  let valid = true;
  let errorMessages = [];

  if(adult.trim() === ''){
    alert('Name is required');
    valid = false;
  }
  if(kid.trim() === ''){
    alert('Name is required');
    valid = false;
  }
  const mobileRegex = /^[0-9]{10}$/; 
  if (!mobileRegex.test(mobile)) {
    alert('Please enter a valid 10-digit mobile number');
    valid = false;
  }
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    errorMessages.push('Please enter a valid email address.');
    alert('Please enter a valid email address');
    valid = false;
  }
  
  if (valid){
    const formData = {
      adult: adult,
      kid: kid,
      mobile: mobile,
      email: email,
      pincode : pincode,
      city: city,
      terms: terms ? 'Yes' : 'No',
      whatsapp: whatsapp ? 'Yes' : 'No'
    };

    localStorage.setItem('formData',JSON.stringify(formData));

    console.log(formData);

    alert("form data has been stored in local Storage")
  }
  else{
    alert("please fix the Error:\n' " + errorMessages.join('\n'));
  }


  console.log('Adult Name:', adult);
  console.log('Kid Name:', kid);
  console.log('Mobile No.:', mobile);
  console.log('Email Id:', email);
  console.log('Pincode:', pincode);
  console.log('City:', city);


 form.reset();
});


const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  slidesPerView: 3,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});



