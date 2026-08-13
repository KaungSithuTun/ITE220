//methods using this (correct)
const student = {
  name: "John",
  introduce() {
    console.log("Hello, I am " + this.name);
  },
};
student.introduce(); // Hello, I am John

//arrow method (avoid when you need this)
const student2 = {
  name: "John",
  introduce: () => {
    console.log(this.name);
  },
};
student2.introduce(); // undefined