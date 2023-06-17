function loader_dot(){
    for (let i = 0; i < 100; i++) {
        process.stdout.write(".");
    }
}

function calc_total(index = 0) {
    process.stdout.cursorTo(99);
    process.stdout.write(`\t${index}%`);
}


function terminal_loader_trigger(){
    loader_dot();
    calc_total();
    process.stdout.cursorTo(0);

    let i =0;
    let myload = "❗️";
    let color = "\033[94m";
    let loader_interval = setInterval(() => {
        if (i <= 25) {
            color="\033[31m";
            process.stdout.write(color);
            
        }
        else if (i <= 50) {
            color="\033[93m";
            process.stdout.write(color);
            
        }
        else if (i <= 75) {
            color="\033[35m";
            process.stdout.write(color);
            
        }
        else if (i <= 100) {
            color="\033[94m";
            process.stdout.write(color);
            
        }
        else{
            clearInterval(loader_interval);
        }
        
        calc_total(i-1);
        process.stdout.cursorTo(i);

        process.stdout.write(myload);
        i++;
    }, 10);

    function stop_loader(){
        clearInterval(loader_interval);
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
    }

    return{
        loader_interval,
        stop_loader
    }
}

module.exports = terminal_loader_trigger;


