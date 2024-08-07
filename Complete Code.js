// Rover object goes here:
let rover = {
    direction: 'N',
    x: 0,
    y: 0,
    travelLog: []
  };
  
  function turnLeft(rover) {
    console.log('turnLeft was called!');
    switch (rover.direction) {
      case 'N':
        rover.direction = 'W';
        break;
      case 'W':
        rover.direction = 'S';
        break;
      case 'S':
        rover.direction = 'E';
        break;
      case 'E':
        rover.direction = 'N';
        break;
    }
    console.log(`Rover is now facing ${rover.direction}`);
  }
  
  function turnRight(rover) {
    console.log('turnRight was called!');
    switch (rover.direction) {
      case 'N':
        rover.direction = 'E';
        break;
      case 'E':
        rover.direction = 'S';
        break;
      case 'S':
        rover.direction = 'W';
        break;
      case 'W':
        rover.direction = 'N';
        break;
    }
    console.log(`Rover is now facing ${rover.direction}`);
  }
  
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
  
  function moveBackward(rover) {
    console.log('moveBackward was called');
    rover.travelLog.push([rover.x, rover.y]);
    switch (rover.direction) {
      case 'N':
        if (rover.y < 9) rover.y += 1;
        break;
      case 'E':
        if (rover.x > 0) rover.x -= 1;
        break;
      case 'S':
        if (rover.y > 0) rover.y -= 1;
        break;
      case 'W':
        if (rover.x < 9) rover.x += 1;
        break;
    }
    console.log(`Rover is at (${rover.x}, ${rover.y})`);
  }
  
  function commandRover(commands) {
    for (let i = 0; i < commands.length; i++) {
      let command = commands[i];
      if (['f', 'b', 'r', 'l'].includes(command)) {
        switch (command) {
          case 'f':
            moveForward(rover);
            break;
          case 'b':
            moveBackward(rover);
            break;
          case 'r':
            turnRight(rover);
            break;
          case 'l':
            turnLeft(rover);
            break;
        }
      } else {
        console.log(`Invalid command: ${command}`);
      }
    }
    console.log(`Rover's travel log: ${JSON.stringify(rover.travelLog)}`);
  }
  
  // Example usage:
  commandRover('rffrfflfrff');
  