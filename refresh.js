import exec from 'node:child_process';

setInterval( () => {
    exec('git pull', async (error, output) => { 
        if(error) {
            console.log('Failed to pull data from repository: ', error);
            return;
        }

        console.log('Command output: \n', output);
    });
}, 60_000);