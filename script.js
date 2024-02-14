const images = gsap.utils.toArray(".item");

const total = images.length;
const degree = 360 / total;

const init = () => {
  const timeline = gsap.timeline();

  images.forEach((image, index) => {
    const rotation = index * degree;

    gsap.set(image, {
      rotation: rotation,
      scale: 0.8, // Adjust scale to make images smaller
      transformOrigin: "center 200vh"
    });

    timeline.from(
      image,
      {
        scale: 4,
        opacity: 0,
        ease: "power4.out",
        duration: 1,
        delay: 0.15 * index
      },
      0
    );
  });
};

const draggable = () => {
  let start = 0;
  Draggable.create(".items", {
    type: "rotation",
    onDragStart: function () {
      start = this.rotation;
    },
    onDragEnd: function () {
      const rotation = this.rotation;
      const offset = Math.abs(rotation - start);
      if (rotation > start) {
        if (offset < degree / 2) {
          gsap.to(".items", {
            rotation: `-=${offset}`
          });
        } else {
          gsap.to(".items", {
            rotation: `+=${degree - offset}`
          });
        }
      } else {
        if (offset < degree / 2) {
          gsap.to(".items", {
            rotation: `+=${offset}`
          });
        } else {
          gsap.to(".items", {
            rotation: `-=${degree - offset}`
          });
        }
      }
    }
  });
};

init();
draggable();
