
// Saxion University Assignment using javascript by MD Irfan Hassan 




// Defining Boat class

class Boat {
    constructor() {
        this.x = null;
        this.y = null;
        this.direction = null;
        this.departed = false;

        this.directions = ["NORTH", "EAST", "SOUTH", "WEST"];
    }
      

   // Set boundary of 5*5 area

    isWithinBounds(x, y) {
        return x >= 0 && x <= 4 && y >= 0 && y <= 4;
    };

    // Checking if the inputted direction and X and Y values are within the predefined area not. 
    // If not do nothing otherwise replace the initial values with the new inputted values and direction.
    // And set the departed value true.

    depart(x, y, direction) {
        if (!this.directions.includes(direction)) return;

        if (this.isWithinBounds(x, y)) {
            this.x = x;
            this.y = y;
            this.direction = direction;
            this.departed = true;
        };
    }

    // Checking if the boat is departed or not 
    // If not, do nothing otherwise set the newX and newY values with previous x and y values.
    // and move forward by 1 meter according to the direction.


    sail() {
        if (!this.departed) return;

        let newX = this.x;
        let newY = this.y;



        switch (this.direction) {
            case "NORTH":
                newY -= 1;
                break;
            case "SOUTH":
                newY += 1;
                break;
            case "EAST":
                newX += 1;
                break;
            case "WEST":
                newX -= 1;
                break;
        };

           
        //  Checking wether after adding and subtracting 1 the newX and newY values are within the predefined area or not. 
        //  if not, do nothing otherwise set the initial x and y values with Changed newX and newY  values to move forward
        // by 1 meter.
    

        if (this.isWithinBounds(newX, newY)) {
            this.x = newX;
            this.y = newY;
        };
    }


    // Checking if the boat is departed or not if not do nothing
     
    //    To rotate the boat by 90 degree left of the inputted direction
    //    find out the index of inputted the direction from the initially defined
    //    direction array in boat class. After finding the index add 3 with the index 
    //    number and then divide the sum by 4 and take the remaining and set the remaining
    //    as new direction to change the current position to 
    //    90 degree left.


    port() {
        if (!this.departed) return;

        let currentIndexForLeftRotate = this.directions.indexOf(this.direction);
        this.direction = this.directions[(currentIndexForLeftRotate + 3) % 4];
    };


    // Checking if the boat is departed or not if not do nothing
    // To rotate the boat by 90 degree right of the inputted direction
    //find out the index of inputted the direction from the initially defined
    // direction array in boat class. After finding the index add 1 with the index 
    // number and then divide the sum by 4 and take the remaining and set the remaining
    // as new direction to change the current position to 
    // 90 degree left.

    starboard() {
        if (!this.departed) return;

        let currentIndexForRightRotate = this.directions.indexOf(this.direction);
        this.direction = this.directions[(currentIndexForRightRotate + 1) % 4];
    };


    
    // Checking if the boat is departed or not if not 
    // do nothing otherwise print the value of x,y,and direction

    status() {
        if (!this.departed) return;
        console.log(`${this.x},${this.y},${this.direction}`);
    };
}

class Simulator {
    constructor() {
        this.boat = new Boat();
    }


    //  splitting the DEPART input from other inputs by using whitespace as the question's
    //   examples are like (DEPART 0,0,SOUTH}. Then splitting the other inputs using ","
    // And parsing the x and y value as an integer.

    execute(command) {
        const inputs = command.trim().split(" ");

        if (inputs[0] === "DEPART") {
            const [x, y, direction] = inputs[1].split(",");
            this.boat.depart(parseInt(x), parseInt(y), direction);
            return;
        }

     // Checking if the boat is departed or not 
    // If not, return otherwise call the sail(),port(),
    //  starboard() and status() functions 

        if (!this.boat.departed) return;

        switch (inputs[0]) {
            case "SAIL":
                this.boat.sail();
                break;
            case "PORT":
                this.boat.port();
                break;
            case "STARBOARD":
                this.boat.starboard();
                break;
            case "STATUS":
                this.boat.status();
                break;
        }
    }
};







