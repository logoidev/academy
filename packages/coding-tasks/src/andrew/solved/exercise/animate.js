const draw = () => {
  console.log("*");

  setTimeout(() => {
    console.log("**");

    setTimeout(() => {
      console.log("***");

      setTimeout(() => {
        console.log("****");

        setTimeout(() => {
          console.log("*****");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

draw();

/* const pauseForASecond = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

const drawAsync = async () => {
  console.log("*");
  await pauseForASecond();
  console.log("**");
  await pauseForASecond();
  console.log("***");
  await pauseForASecond();
  console.log("****");
  await pauseForASecond();
};

drawAsync() */