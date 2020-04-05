var app = new Vue({
  el: "#app",
  data: {
    message: "Are you a good witch or a bad witch",
    bleep: "Beep",
  },
  methods: {
    changeMessage: function() {
      this.message = "Curiouser and curiouser";
      this.bleep = "Boop";
    },
  },
});
