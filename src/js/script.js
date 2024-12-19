tailwind.config = {
    theme: {
      colors: {
        black: "#000",
      },
    },
  };

function updateCounter(target, id, count = 0) {
  let increment = Math.ceil(target / 100);
  count += increment;
  document.getElementById(id).textContent = count < target ? count : target;
  if (count < target) setTimeout(() => updateCounter(target, id, count), 20);
}

function onElementInView(element, callback) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
        observer.disconnect();
      }
    });
  });
  observer.observe(element);
}

const targetElement = document.getElementById("counter");

onElementInView(targetElement, () => {
  updateCounter(300, "counter");
  updateCounter(500, "counter2");
  updateCounter(2, "counter3");
  updateCounter(60, "counter4");
  updateCounter(100, "counter5");
  updateCounter(500, "counter6");
});

const targetElement2 = document.getElementById("counter7");

onElementInView(targetElement2, () => {
  updateCounter(500, "counter7");
  updateCounter(300, "counter8");
  updateCounter(11, "counter9");
  updateCounter(90, "counter10");
});
document.getElementById('menu-toggle').addEventListener('click', function() {
  let menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
});