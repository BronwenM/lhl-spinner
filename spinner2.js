const spinnerFrames = ['|   ', '/   ', '-   ', '\\   '];

spinnerFrames.forEach((frame, index) => {
    (function(index)  {
        setTimeout(() => {
            process.stdout.write(`\r${frame}`);
            if (index === spinnerFrames.length - 1) process.stdout.write('\n');
        }, index * 200);
    }(index))
})