
// Saxion University Assignment by MD Irfan Hassan





class Boat {
    constructor() {
        this.x = null;
        this.y = null;
        this.direction = null;
        this.departed = false;

        this.directions = ["NORTH", "EAST", "SOUTH", "WEST"];
    }

    isWithinBounds(x, y) {
        return x >= 0 && x <= 4 && y >= 0 && y <= 4;
    }

    depart(x, y, direction) {
        if (!this.directions.includes(direction)) return;

        if (this.isWithinBounds(x, y)) {
            this.x = x;
            this.y = y;
            this.direction = direction;
            this.departed = true;
        }
    }

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
        }

        if (this.isWithinBounds(newX, newY)) {
            this.x = newX;
            this.y = newY;
        }
    }

    port() {
        if (!this.departed) return;

        let index = this.directions.indexOf(this.direction);
        this.direction = this.directions[(index + 3) % 4];
    }

    starboard() {
        if (!this.departed) return;

        let index = this.directions.indexOf(this.direction);
        this.direction = this.directions[(index + 1) % 4];
    }

    status() {
        if (!this.departed) return;
        console.log(`${this.x},${this.y},${this.direction}`);
    }
}

class Simulator {
    constructor() {
        this.boat = new Boat();
    }

    execute(command) {
        const parts = command.trim().split(" ");

        if (parts[0] === "DEPART") {
            const [x, y, direction] = parts[1].split(",");
            this.boat.depart(parseInt(x), parseInt(y), direction);
            return;
        }

        if (!this.boat.departed) return;

        switch (parts[0]) {
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
}