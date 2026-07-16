// ===============================
// Sticky Navbar on Scroll
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
        header.style.background = "rgba(255,255,255,0.98)";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
        header.style.background = "rgba(255,255,255,0.95)";
    }

});



// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ===============================
// Active Navigation Link
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});



// ===============================
// ALL BUTTONS CLICK ANIMATION 
// ===============================


const buttons = document.querySelectorAll("button, .btn, a.btn");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.95)";

        setTimeout(() => {

            this.style.transform = "scale(1)";

        }, 150);

    });

});
// ===================================
// Appointment Form
// ===================================

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();

        const email = document.getElementById("email").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const department = document.getElementById("department").value;

        const date = document.getElementById("date").value;

        const time = document.getElementById("time").value;

        const concern = document.getElementById("concern").value.trim();

        try {

            const response = await fetch("http://localhost:3000/api/appointments", {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    fullName,
                    email,
                    phone,
                    department,
                    date,
                    time,
                    concern

                })

            });

            const result = await response.json();

            alert(result.message);

            if (result.success) {

                appointmentForm.reset();

            }

        } catch (error) {

            alert("Unable to connect to the server.");

            console.error(error);

        }

    });

}
// ===================================
// Package Buttons
// ===================================

document.querySelectorAll(".package-card .btn-primary").forEach(button => {

    button.addEventListener("click", function () {

        document.querySelector("#appointment").scrollIntoView({

            behavior: "smooth"

        });

    });

});
// ===============================
// Testimonial Hover Effect
// ===============================

const testimonialCards = document.querySelectorAll(".testimonial-card");

testimonialCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 15px 35px rgba(0,188,212,.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

    });

});
// ==============================
// Blog Cards
// ==============================

const blogCards = document.querySelectorAll(".blog-card");

blogCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow="0 15px 35px rgba(0,188,212,.25)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="0 10px 25px rgba(0,0,0,.08)";

    });

});

// ===================================
// Gallery Hover Effect
// ===================================

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(image=>{

    image.addEventListener("mouseenter",()=>{

        image.style.filter="brightness(90%)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.filter="brightness(100%)";

    });

});

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const data = {

            fullName: document.getElementById("contactFullName").value.trim(),

            email: document.getElementById("contactEmail").value.trim(),

            phone: document.getElementById("contactPhone").value.trim(),

            subject: document.getElementById("contactSubject").value.trim(),

            message: document.getElementById("contactMessage").value.trim()

        };

        try {

            const response = await fetch("http://localhost:3000/api/contact", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)

            });

            const result = await response.json();

            alert(result.message);

            if (result.success) {
                contactForm.reset();
            }

        } catch (error) {

            console.error(error);

            alert("Unable to connect to the server.");

        }

    });

}
// ===============================
// Google Maps Direction Button
// ===============================

const directionBtn = document.querySelector(".direction-btn");

if(directionBtn){

    directionBtn.addEventListener("click",()=>{

        window.open(

            "https://www.google.com/maps?q=Lahore+Pakistan",

            "_blank"

        );

    });

}

// ======================================
// Newsletter Subscription
// ======================================

const newsletterForm = document.getElementById("newsletterForm");

if(newsletterForm){

    newsletterForm.addEventListener("submit",function(e){

        e.preventDefault();

        alert("Thank you for subscribing to our newsletter!");

        newsletterForm.reset();

    });

}
// =================================
// Load Doctors
// =================================

const doctorContainer = document.getElementById("doctorContainer");

async function loadDoctors() {

    if (!doctorContainer) return;

    doctorContainer.innerHTML = "<p>Loading doctors...</p>";

    try {

        const response = await fetch("http://localhost:3000/api/doctors");

        if (!response.ok) {

            throw new Error("Failed to fetch doctors.");

        }

        const result = await response.json();

        if (!result.success) {

            doctorContainer.innerHTML = "<p>No doctors found.</p>";
            return;

        }

        doctorContainer.innerHTML = "";

        result.doctors.forEach((doctor, index) => {

            let image = `images/doctor${index + 1}.jpg`;

           

            doctorContainer.innerHTML += `

                <div class="doctor-card">

                    <img src="${image}" alt="${doctor.full_name}" class="doctor-${index + 1}">

                    <h3>${doctor.full_name}</h3>

                    <h4>${doctor.specialization}</h4>

                    <p>
                        ${doctor.experience}+ years of experience
                    </p>

                    <a href="doctor${index + 1}.html" class="doctor-btn">

                        <i class="fa-solid fa-user-doctor"></i>

                        View Profile

                    </a>

                </div>

            `;

        });

    }

    catch (error) {

        console.error(error);

        doctorContainer.innerHTML = `
            <p style="color:red;">
                Unable to load doctors. Please try again later.
            </p>
        `;

    }

}

loadDoctors();



// ===============================
// Console Message
// ===============================

console.log("✅ MediCare Hospital Website Loaded Successfully");
// ===============================
// FAQ Accordion
// ===============================

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", function () {

        const item = this.parentElement;

        const isActive = item.classList.contains("active");

        // Close all FAQs
        document.querySelectorAll(".faq-item").forEach(faq => {

            faq.classList.remove("active");
            faq.querySelector(".faq-icon").textContent = "+";

        });

        // Open clicked FAQ
        if (!isActive) {

            item.classList.add("active");
            item.querySelector(".faq-icon").textContent = "−";

        }

    });

});