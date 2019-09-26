class Circle {
  constructor(radius) {
    this.radius = radius;
  }


  get diameter() {
    return this.radius * 2;
  }

  set diameter(val) {
    this.radius = val / 2
  }

  get area(){
    return Math.PI * this.radius**2
  }

  set area(val) {
    this.radius = Math.sqrt(val) / Math.PI
  }

  get circumference(){
    return 2 * Math.PI * this.radius
  }

  set circumference(val) {
    this.radius = val / Math.PI / 2
  }
}