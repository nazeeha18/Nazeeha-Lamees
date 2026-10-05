document.addEventListener("DOMContentLoaded",()=>{

  // Theme switching using DOM manipulation and localStorage
  const body=document.body;
  const themeBtn=document.getElementById("themeBtn");
  const savedTheme=localStorage.getItem("portfolioTheme");
  if(savedTheme==="dark"){body.classList.add("dark");themeBtn.innerHTML='<i class="bi bi-sun-fill"></i> Light';}

  themeBtn.addEventListener("click",()=>{
    body.classList.toggle("dark");
    const dark=body.classList.contains("dark");
    localStorage.setItem("portfolioTheme",dark?"dark":"light");
    themeBtn.innerHTML=dark?'<i class="bi bi-sun-fill"></i> Light':'<i class="bi bi-moon-stars-fill"></i> Dark';
  });

  // Project filtering using arrays, conditions, loops and DOM manipulation
  const filters=document.querySelectorAll(".filter");
  const projects=document.querySelectorAll(".project");

  filters.forEach(button=>{
    button.addEventListener("click",()=>{
      const selected=button.dataset.filter;

      filters.forEach(b=>{
        b.classList.remove("active","btn-primary");
        b.classList.add("btn-outline-primary");
      });
      button.classList.add("active","btn-primary");
      button.classList.remove("btn-outline-primary");

      projects.forEach(project=>{
        const category=project.dataset.category;
        project.classList.toggle("d-none",selected!=="all" && category!==selected);
      });
    });
  });

  // Client-side form validation and dynamic messages
  const form=document.getElementById("contactForm");
  const message=document.getElementById("formMessage");

  form.addEventListener("submit",event=>{
    event.preventDefault();

    if(!form.checkValidity()){
      form.classList.add("was-validated");
      message.className="mt-3 alert alert-danger";
      message.textContent="Please correct the highlighted fields and try again.";
      return;
    }

    const name=document.getElementById("name").value.trim();
    message.className="mt-3 alert alert-success";
    message.textContent=`Thank you, ${name}! Your message has been validated successfully.`;
    form.reset();
    form.classList.remove("was-validated");
  });

  // Dynamic year
  document.getElementById("year").textContent=new Date().getFullYear();

  // Close Bootstrap mobile navbar after selecting a section
  document.querySelectorAll(".nav-link").forEach(link=>{
    link.addEventListener("click",()=>{
      const nav=document.getElementById("nav");
      if(window.innerWidth<992){
        const instance=bootstrap.Collapse.getInstance(nav);
        if(instance) instance.hide();
      }
    });
  });
});
