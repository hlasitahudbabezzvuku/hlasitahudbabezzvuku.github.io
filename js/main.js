(
  function() {
    document.addEventListener("mousemove", parallax);
    const element = document.getElementById("parallax");

    function parallax(e) {
      let width = window.innerWidth / 2;
      let height = window.innerHeight / 2;

      let mouse_x = e.clientX;
      let mouse_y = e.clientY;

      element.style.backgroundPosition = `${50 + (mouse_x - width) * 0.01}% ${50 + (mouse_y - height) * 0.02}%`;
    }
  }
)();

