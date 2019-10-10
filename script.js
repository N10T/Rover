// rover Object Goes Here
// ======================
const rover = {
    direction : "N",
    x : 0,
    y : 0,
    travelLog : [0,0]
  }
  // ======================
  function limit(){
          console.log(`\u26d4 ${arrow} Direction : ${rover.direction} | Position [ ${rover.x}, ${rover.y} ] - - Grid limit`);
  }
  
  function position(){
          functionArrow(rover.direction);
          console.log(`\ud83d\ude9a ${arrow} Direction : ${rover.direction} | Position [ ${rover.x}, ${rover.y} ]`);
  }
  
  function passport(){
          rover.travelLog.push(rover.x)
          rover.travelLog.push(rover.y)
  }
  var mars = [ 
    ['\ud83d\ude9a',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    ['X',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ','X',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ','X',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ','X',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ','X',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    ];
  
  var arrow;                        //Show the direction by an arrow
  function functionArrow(){
            switch(rover.direction){
        case "N": // left
          arrow ="\u21d1";        
          break;
        case "W": // down
          arrow ="\u21d0";
          break;
        case "S": // down
          arrow ="\u21d3";
          break;
        case "E": // down
          arrow ="\u21d2";
          break;}
  }
  
  function turnLeft(){
            switch(rover.direction){
        case "N": // left
          rover.direction = "W";
          break;
        case "W": // down
          rover.direction = "S";
          break;
        case "S": // down
          rover.direction = "E";
          break;
        case "E": // down
          rover.direction = "N";
          break;
            }
    console.log("\ud83d\udce2 \u21b6 turnLeft was called! ");
    position();
  }
  
  function turnRight(){
            switch(rover.direction){
        case "W": // WEST
          rover.direction = "N";
          break;
        case "S": // SOUTH
          rover.direction = "W";
          break;
        case "E": // EAST
          rover.direction = "S";
          break;
        case "N": // NORTH
          rover.direction = "E";
          break;
          }
    console.log("\ud83d\udce2 \u21b7 turnRight was called! ")
    position();
  }
  
  function moveForward(){
    console.log("\ud83d\udce2    moveForward was called")
    switch(rover.direction){
    case "N" : //GO NORTH
    rover.y --
    break;
    case "S" : //GO SOUTH
    rover.y ++
    break;
    case "W" : //GO WEST
    rover.x --
    break;
    case "E" : //GO EAST
    rover.x ++
     break;}
  passport()
  }
  
  function moveBackward(){
    console.log("\ud83d\udce2    moveBackward was called")
    switch(rover.direction){
    case "N" : //GO SOUTH
    rover.y ++
    break;
    case "S" : //GO NORTH
    rover.y --
    break;
    case "W" : //GO EST
    rover.x ++
    break;
    case "E" : //GO WEST
    rover.x --
    break;}
  passport()
  }
  
  function command(order){
    for (i = 0 ; i <= order.length-1 ; i++)
   switch(order[i]){
        case "l": // left
          turnLeft();
          break;
        case "r": // right
          turnRight();
          break;
        case "f": // forward
        if (rover.x === 0 && rover.direction === "W"){
          limit()
          break;
        } else if (rover.x === 9 && rover.direction === "E"){
          limit()
          break;
        } else if (rover.y === 0 && rover.direction === "N") {
          limit()
          break;
        } else if (rover.y === 9 && rover.direction === "S") {
          limit()
          break;
        } else {
          moveForward()
          if (mars[rover.y][rover.x] === "X") {
            console.log(`\u26d4    Obstacle found : [ ${rover.x} | ${rover.y} ]`);
            mars[rover.y][rover.x] = "\u26d4";
            moveBackward()
            position()
            break;          
          } else if (mars[rover.y][rover.x] === "\u26d4") {
            console.log(`\u26d4    Obstacle already found : [ ${rover.x} | ${rover.y} ]`);
            mars[rover.y][rover.x] = "\u26d4";
            moveBackward()
            position()
            break;          
          } else {
          mars[rover.y][rover.x] = arrow;
          position()
          break;}
          }
        case "b": // backward
        if (rover.x === 0 && rover.direction === "E"){
          limit()
          break;
        } else if (rover.x === 9 && rover.direction === "W"){
          limit()
          break;
        } else if (rover.y === 0 && rover.direction === "S") {
          limit()
          break;
        } else if (rover.y === 9 && rover.direction === "N") {
          limit()
          break;
        } else {
          moveBackward();
          if (mars[rover.y][rover.x] === "X") {
            console.log(`\u26d4    Obstacle found : [ ${rover.x} | ${rover.y} ]`);
            mars[rover.y][rover.x] = "\u26d4";
            moveForward()
            position()
            break;          
          } else if (mars[rover.y][rover.x] === "\u26d4") {
            console.log(`\u26d4    Obstacle already found : [ ${rover.x} | ${rover.y} ]`);
            mars[rover.y][rover.x] = "\u26d4";
            moveForward()
            position()
            break;          
          } else {
          position();
          mars[rover.y][rover.x] = arrow;
          break;}}
        default: //other commands
          console.log(`\ud83d\udcf6   "${controller[i]}" isn't a good command`)
            
  } 
  
  for (i = 0 ; i <rover.travelLog.length ; i += 2){
  console.log(`\ud83d\udce1   Geoloc, record n°${i/2}: [ ${rover.travelLog[i]} , ${rover.travelLog[i+1]} ]`)
  }
  }
  let controller="rrfflfforffffffffffflfflfrffrbbbbrbfff"
  command(controller)
  console.log(mars);
  /*By asking the user
  
  const instruction = "l to turn left \nr to turn right\nf to move Forward\nb to move backward)"
  let receivedCommand = prompt(instruction)
  command(receivedCommand.toLowerCase())*/
  
  