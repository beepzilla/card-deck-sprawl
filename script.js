const images = gsap.utils.toArray(".item");
const total = images.length;
const degree = 360 / total;

const init = () => {
  const timeline = gsap.timeline();

  images.forEach((image, index) => {
    const rotationAngle = index * degree;

    gsap.set(image, {
      rotation: rotationAngle,
      transformOrigin: "center 200vh",
    });

    timeline.fromTo(
      image,
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        ease: "power4.out",
        duration: 1,
        delay: 0.15 * index,
      },
      0
    );
  });
};

const draggable = () => {
  Draggable.create(".items", {
    type: "rotation",
    throwProps: true,
    onDrag: function () {
      gsap.to(".items", {
        rotation: this.rotation,
        duration: 0.5,
        ease: "power1.out",
      });
    },
  });
};

init();
draggable();
