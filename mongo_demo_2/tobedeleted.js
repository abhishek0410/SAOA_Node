class Car {
  showvalue() {
    console.log(this.value.name);
  }
}

const c1 = new Car();
c1.value = {
  name: String
};
c1.value.name = "ford";
c1.showvalue();
