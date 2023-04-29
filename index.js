/*
when we click a button
1. computer randomly selects a move
2.compare the moves to get the result
3.Display the result in a popup
*/
function Rock() {
const randomNumber = Math.random();
        let computerMove = ''
          if (randomNumber >= 0 && randomNumber <= 1/3){
             computerMove = 'rock'
             
        }
        else if (randomNumber >= 1/3 && randomNumber <= 2/3){
            computerMove = 'paper'
            
        }
        else if (randomNumber >= 2/3 && randomNumber <= 1){
            computerMove = 'scissors'
           
        }
            console.log(computerMove)
           


            let results = '';

        if (computerMove === 'rock'){
            results = 'tie'
        }   else if (computerMove === 'paper'){
            results = 'you lose';
        } else if (computerMove === 'scissors'){
            results = 'you win'
        }
        alert(`you picked rock. Computer picked ${computerMove}. ${results}`)
    }

    function paper() {
        const randomNumber = Math.random();
                let computerMove = ''
                  if (randomNumber >= 0 && randomNumber <= 1/3){
                     computerMove = 'rock'
                     
                }
                else if (randomNumber >= 1/3 && randomNumber <= 2/3){
                    computerMove = 'paper'
                    
                }
                else if (randomNumber >= 2/3 && randomNumber <= 1){
                    computerMove = 'scissors'   
                };

                    console.log(computerMove)
                   
        
        
                let results = '';
        
                if (computerMove === 'rock'){
                    results = 'you win'
                }   else if (computerMove === 'paper'){
                    results = 'tie';
                } else if (computerMove === 'scissors'){
                    results = 'you lose'
                };

                alert(`you picked paper. Computer picked ${computerMove}. ${results}`);
            }


            function scissors() {
                const randomNumber = Math.random();
                        let computerMove = ''
                          if (randomNumber >= 0 && randomNumber <= 1/3){
                             computerMove = 'rock'
                             
                        }
                        else if (randomNumber >= 1/3 && randomNumber <= 2/3){
                            computerMove = 'paper'
                            
                        }
                        else if (randomNumber >= 2/3 && randomNumber <= 1){
                            computerMove = 'scissors'   
                        };
        
                            console.log(computerMove)
                           
                
                
                        let results = '';
                
                        if (computerMove === 'rock'){
                            results = 'you lose'
                        }   else if (computerMove === 'paper'){
                            results = 'you win';
                        } else if (computerMove === 'scissors'){
                            results = 'tie'
                        };
        
                        alert(`you picked scissors. Computer picked ${computerMove}. ${results}`);
                    }


           