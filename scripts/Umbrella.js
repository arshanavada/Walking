class Umbrella
{
  constructor(x, y)
  {
    var options =
    {
      isStatic : true
    }
    this.body = Matter.Bodies.circle(x, y, 120, options);
    World.add(world, this.body);

    var boy = createSprite(x, y, 20, 20);
    boy.addAnimation("walking", boyImg);
    boy.scale = 0.40;
    boy.setCollider("rectangle", 0, 0, boy.width, boy.height);
  }

  display()
  {
    drawSprites();
  }
}