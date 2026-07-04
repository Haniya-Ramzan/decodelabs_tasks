
// Smooth Scroll Navigation


document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if(target){

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});



// Contact Form Validation


const form = document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const name = form.querySelector(
            'input[type="text"]'
        ).value.trim();

        const email = form.querySelector(
            'input[type="email"]'
        ).value.trim();

        const message = form.querySelector(
            "textarea"
        ).value.trim();

        if(name === "" || email === "" || message === ""){

            alert("Please fill in all fields.");

            return;

        }

        alert(
            "Thank you, " +
            name +
            "! Your message has been submitted successfully."
        );

        form.reset();

    });

}


// Navbar Color Change


const header = document.querySelector("header");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        header.style.background = "#111827";

    }

    else{

        header.style.background = "#1f2937";

    }

});



// Hero Button Animation


const button = document.querySelector(".btn");

if(button){

    button.addEventListener("mouseover", function(){

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseout", function(){

        button.style.transform = "scale(1)";

    });

}
const subscribeBtn =
document.querySelector(".subscribe-btn");

if(subscribeBtn){

    subscribeBtn.addEventListener("click", function(){

        const email =
        document.getElementById("newsletterEmail")
        .value.trim();

        if(email === ""){

            alert("Please enter your email.");

            return;

        }

        alert(
            "Thank you for subscribing!"
        );

        document.getElementById(
            "newsletterEmail"
        ).value = "";

    });

}

// Pricing Plan Buttons


const pricingButtons =
document.querySelectorAll(".price-btn");

pricingButtons.forEach(function(button){

    button.addEventListener("click", function(){

        alert(
            "Thank you for selecting this plan! Our team will contact you soon."
        );

    });

});


consultationForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("consultName").value;

    alert(
        "Thank you " +
        name +
        "! Your consultation request has been submitted successfully."
    );

    consultationForm.reset();

});

// Welcome Message


window.onload = function(){

    console.log(
        "Welcome to Digital Agency Website"
    );

};