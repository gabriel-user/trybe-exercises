type Slices = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: Slices;
};

class Pizza {
  constructor(flavor: string, slices: Slices) {
    this.flavor = flavor;
    this.slices = slices;
  };
};

export default Pizza;