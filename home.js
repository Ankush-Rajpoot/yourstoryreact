window.onload = function() {
    // Hide the logo after a certain delay (e.g., 2 seconds) and display the content
    setTimeout(function() {
      document.getElementById('logo-container').style.display = 'none';
      document.getElementById('content').style.display = 'block';
    }, 2000); // Adjust delay as needed (in milliseconds)
  };

  var tl=gsap.timeline();
  tl.from(".logo",{
    opacity:0,
    y:-30,
    duration:1,
    delay:2,

  })
  tl.from("nav ul li",{
    opacity:0,
    y:-30,
    duration:1,
    delay:0.1,
    stagger:0.3,
  })

