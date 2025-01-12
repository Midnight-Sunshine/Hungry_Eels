let foodParticles = [];

class Food {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.size = random(8, 15);
      this.color = color(random(150, 255), random(150, 255), random(50, 100)); // couleurs vibrantes
    }
  
    show() {
      push();
      fill(this.color);
      noStroke();
      ellipse(this.pos.x, this.pos.y, this.size);
      pop();
    }
  }
  
  function spawnFood() {
    let safeDistance = 50; // distance minimale entre la nourriture et les obstacles
    let validPosition = false;
    let foodPosition;
  
    // generer des positions jusqu'a ce qu'une position valide soit trouvée
    while (!validPosition) {
      let x = random(width);
      let y = random(height);
      foodPosition = createVector(x, y);
  
      // Vérifiez si la position est suffisamment éloignée de tous les obstacles
      validPosition = true;
      for (let obstacle of obstacles) {
        let distanceToObstacle = p5.Vector.dist(foodPosition, obstacle.pos);
        if (distanceToObstacle < obstacle.r + safeDistance) {
          validPosition = false;
          break;
        }
      }
    }
  
    // Créez une nouvelle particule de nourriture à la position valide
    let food = new Food(foodPosition.x, foodPosition.y, 8, "orange");
    foodParticles.push(food);
  }
  