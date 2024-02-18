// heart.js

    function createHeart(size) 
    {
        let heart = '';
        const rows = size * 2 - 1;
        const cols = size * 2 - 1;
        const message = "Hello, RENIC FAMILY";
        const messageLength = message.length;
        const messagePadding = Math.floor((cols - messageLength) / 2);

        for (let i = 0; i < rows; i++) 
        {
            let row = '';
            if (i === Math.floor(rows / 2))
            {
                row += ' '.repeat(messagePadding) + message + ' '.repeat(messagePadding) + '\n';
            } 
            else 
            {
                for (let j = 0; j < cols; j++) 
                {
                    if ((i < size && (j % (size - 1) === 0 && i % (size - 1) === 0)) ||
                    (i >= size && (i - size === j || i + j === size * 3 - 2))) 
                    {
                        row += '*';
                    } 
                    else
                    {
                        row += ' ';
                    }

                }
                row += '\n';

            }

            heart += row;
        }
        
        return heart;
    }

const heartSize = 10; // You can adjust the size as needed
console.log(createHeart(heartSize));
