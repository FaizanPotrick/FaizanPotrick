import { defineStore } from "pinia";

export default defineStore({
  id: "app",
  state: () => ({
    balls: [],
    balls_color: ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"],
    isLoading: true,
  }),
  actions: {
    click_effect(e) {
      const div = document.createElement("div");
      div.className =
        "fixed rounded-full z-[9999] text-white animate-[click_0.4s_ease-out]";
      div.style.top = e.clientY + "px";
      div.style.left = e.clientX + "px";
      document.body.appendChild(div);
      div.addEventListener(
        "animationend",
        function () {
          div.parentElement.removeChild(div);
        }.bind(this)
      );
    },
    append_balls() {
      const Balls = document.getElementById("balls");

      for (let i = 0; i < 100; i++) {
        let ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.position = "absolute";
        ball.style.borderRadius = "50%";
        ball.style.background =
          this.balls_color[Math.floor(Math.random() * this.balls_color.length)];
        ball.style.zIndex = 0;
        ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
        ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
        ball.style.transform = `scale(${Math.random()})`;
        ball.style.opacity = 0.5;
        ball.style.width = `${Math.random()}rem`;
        ball.style.height = ball.style.width;
        this.balls.push(ball);
        Balls.append(ball);
      }
    },
    display_balls() {
      this.balls.forEach((el, i) => {
        const to = {
          x: Math.random() * (i % 2 === 0 ? -11 : 11),
          y: Math.random() * 12,
        };

        el.animate(
          [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` },
          ],
          {
            duration: (Math.random() + 1) * 2000,
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out",
          }
        );
      });
    },
  },
});
