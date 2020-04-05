var app = new Vue({
  el: "#app",
  data: {
    message: "Some New Vue Stuff",
    num1: 0,
    num2: 0,
    num3: 0,
    sum: 0,
  },
  methods: {
    computeSum: function () {
      this.sum = parseInt(this.num1) + parseInt(this.num2) + parseInt(this.num3);
    },
  },
});
