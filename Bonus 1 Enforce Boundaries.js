function moveForward(rover) {
    console.log('moveForward was called');
    rover.travelLog.push([rover.x, rover.y]);
    switch (rover.direction) {
      case 'N':
        if (rover.y > 0) rover.y -= 1;
        break;
      case 'E':
        if (rover.x < 9) rover.x += 1;
        break;
      case 'S':
        if (rover.y < 9) rover.y += 1;
        break;
      case 'W':
        if (rover.x > 0) rover.x -= 1;
        break;
    }
    console.log(`Rover is at (${rover.x}, ${rover.y})`);
  }
  