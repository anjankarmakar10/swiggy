const debounce = (fun: any, delay: number) => {
  let time: any;
  return (...args: any) => {
    let self = this;
    if (time) clearTimeout(time);
    time = setTimeout(() => {
      fun.apply(self, args);
    }, delay * 1000);
  };
};

export default debounce;
