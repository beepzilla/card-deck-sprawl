const images = gsap.utils.toArray(".item");

const imageSize = images.length;
const total = images.length;
const degree = 360 / total;

const init = () => {
  const timeline = gsap.timeline();

  images.forEach((image, index) => {
    const siconst images = gsap.utils.toArray(".item");
const total = images.length;
const degree = 360 / total;

const init = () => {
  const timeline = gsap.timeline();

  images.forEach((image, index) => {
    const rotation = index * degree;

    gsap.set(image, {
      rotation: rotation,
      transformOrigin: "center 200vh",
      scale: 0.8, // Adjust the scale to create space between images
    });

    timeline.from(
      image,
      {
        x: () =>
          index % 2
            ? window.innerWidth + image.clientWidth * 2
            : -window.innerWidth - image.clientWidth * 2,
        y: () => window.innerHeight - image.clientHeight,
        rotation: index % 2 ? 200 : -200,
        scale: 4,
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
  let start = 0;
  Draggable.create(".items", {
    type: "rotation",

    onDragStart: function () {
      start = this.rotation;
    },
    onDragEnd: function () {
      const rotation = this.rotation;
      const diff = rotation - start;
      const rotationCorrection = diff % degree;
      const rotationAdjustment =
        Math.abs(rotationCorrection) < degree / 2
          ? -rotationCorrection
          : (degree - Math.abs(rotationCorrection)) * Math.sign(diff);

      gsap.to(".items", {
        rotation: `+=${rotationAdjustment}`,
        ease: "power1.out",
      });
    },
  });
};

init();
draggable();
gn = Math.floor((index / 2) % 2) ? 1 : -1;
    const value = Math.floor((index + 4) / 4) * 4;
    const rotation = index > imageSize - 3 ? 0 : sign * value;
    console.log(rotation);

    gsap.set(image, {
      rotation: rotation,
      scale: 0.5
    });

    timeline.from(
      image,
      {
        x: () =>
          index % 2
            ? window.innerWidth + image.clientWidth * 4
            : -window.innerWidth - image.clientWidth * 4,
        y: () => window.innerHeight - image.clientHeight,
        rotation: index % 2 ? 200 : -200,
        scale: 4,
        opacity: 1,
        ease: "power4.out",
        duration: 1,
        delay: 0.15 * Math.floor(index / 2)
      },
      0
    );

    let rotationAngle = index * degree;
    timeline.to(
      image,
      {
        scale: 1,
        duration: 0
      },
      0.15 * (imageSize / 2 - 1) + 1
    );

    timeline.to(
      image,
      {
        transformOrigin: "center 200vh",
        rotation:
          index > imageSize / 2 ? -degree * (imageSize - index) : rotationAngle,
        duration: 1,
        ease: "power1.out"
      },
      0.15 * (imageSize / 2 - 1) + 1
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
        if (rotation - start < degree / 2) {
          gsap.to(".items", {
            rotation: `-=${offset}`
          });
        } else {
          gsap.to(".items", {
            rotation: `+=${2 * degree - offset}`
          });
        }
      } else {
        if (Math.abs(rotation - start) < degree / 2) {
          gsap.to(".items", {
            rotation: `+=${offset}`
          });
        } else {
          gsap.to(".items", {
            rotation: `-=${2 * degree - offset}`
          });
        }
      }
    }
  });
};

init();
draggable();
