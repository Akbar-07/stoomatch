document.querySelectorAll('.consulates_option').forEach(option => {
  option.addEventListener('click', () => {
    for (let i = 0; i < document.querySelectorAll(".consulates_step h4").length; i++) {
        document.querySelectorAll(".consulates_step h4")[i].style="display:none"
        
    }
    // Barcha radio'larni o'chirish
    document.querySelectorAll('.consulates_option input[type="radio"]').forEach(r => r.checked = false);

    // Faqat bosilgan div ichidagi radio'ni yoqish
    option.querySelector('input[type="radio"]').checked = true;
  });
});

document.querySelectorAll('.none_theeth_card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelector(".consulates_step_4 h4").style="display:none"
    // Barcha circle'larni yashirish
    document.querySelectorAll('.none_circle').forEach(c => c.style.display = 'none');

    // Faqat bosilgan kartadagi circle'ni ko‘rsatish
    const circle = card.querySelector('.none_circle');
    circle.style.display = 'flex';
  });
});

function consulates() {
    document.querySelector(".black_back").style="display:flex"
    document.querySelector("body").style="overflow:hidden"
}


function next_but_1() {
  const isChecked = document.querySelector('.consulates_step_1 input[type="radio"]:checked');

  if (isChecked) {
    document.querySelector('.consulates_step_1').style.display = 'none';
    document.querySelector('.consulates_step_2').style.display = 'block';
    document.querySelector('.consulates_head h3').innerHTML = "2/4";
  } else {
    document.querySelector(".consulates_step_1 h4").style="display:flex"
  }
}


function next_but_2() {
     const isChecked = document.querySelector('.consulates_step_2 input[type="radio"]:checked');

  if (isChecked) {
    document.querySelector(".consulates_step_2").style='display:none'
    document.querySelector(".consulates_step_3").style='display:block'
    document.querySelector(".consulates_head h3").innerHTML="3/4"
  } else {
    document.querySelector(".consulates_step_2 h4").style="display:flex"
  }
}

function next_but_3() {
     const isChecked = document.querySelector('.consulates_step_3 input[type="radio"]:checked');

  if (isChecked) {
    document.querySelector(".consulates_step_3").style='display:none'
    document.querySelector(".consulates_step_4").style='display:block'
    document.querySelector(".consulates_head h3").innerHTML="4/4"
  } else {
    document.querySelector(".consulates_step_3 h4").style="display:flex"
  }
}

function next_but_4() {
     const circles = document.querySelectorAll('.consulates_step_4 .none_circle');
  let hasVisible = false;

  circles.forEach(circle => {
    const displayValue = window.getComputedStyle(circle).display;
    if (displayValue === 'flex') {
      hasVisible = true;
    }
  });

  if (hasVisible) {
    document.querySelector(".consulates_step_4").style='display:none'
    document.querySelector(".consulates_step_5").style='display:block'
    document.querySelector(".consulates_head").style='display:none'
    document.querySelector(".consul_line").style='display:none'
  }else{
    document.querySelector(".consulates_step_4 h4").style="display:flex"
  }
}

function next_but_5() {
    document.querySelector(".consulates_step_4").style='display:none'
    document.querySelector(".consulates_step_5").style='display:block'
    window.location=""
}


function prev_but_1() {
    document.querySelector(".black_back").style='display:none'
    document.querySelector("body").style="overflow:scroll"
}

function prev_but_2() {
    document.querySelector(".consulates_step_2").style='display:none'
    document.querySelector(".consulates_step_1").style='display:block'
    document.querySelector(".consulates_head h3").innerHTML="1/4"
}

function prev_but_3() {
    document.querySelector(".consulates_step_3").style='display:none'
    document.querySelector(".consulates_step_2").style='display:block'
    document.querySelector(".consulates_head h3").innerHTML="2/4"
}

function prev_but_4() {
    document.querySelector(".consulates_step_4").style='display:none'
    document.querySelector(".consulates_step_3").style='display:block'
    document.querySelector(".consulates_head h3").innerHTML="3/4"
}

function prev_but_5() {
    document.querySelector(".consulates_step_5").style='display:none'
    document.querySelector(".consulates_step_4").style='display:block'
    document.querySelector(".consulates_head").style='display:flex'
    document.querySelector(".consul_line").style='display:flex'
}



const input = document.querySelector("#phone");
  const iti = window.intlTelInput(input, {
    initialCountry: "ru", 
    separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
  });

  function konsult_open() {
    document.querySelector(".black_konsult").style="display:flex"
    document.querySelector("body").style="overflow:hidden"
  }

  function konsult_close() {
    document.querySelector(".black_konsult").style="display:none"
    document.querySelector("body").style="overflow:scroll"
  }