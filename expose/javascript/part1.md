Questions:

**var declaration**\
1 What is printed by line 9? If the code returns an error, explain why.
Answer: Line 9 prints "values added:  20"

2 What is printed by line 13? If the code returns an error, explain why.
Answer: Line 13 prints "final result:  20"

**let declaration**\
3 What is printed by line 9? If the code returns an error, explain why.
Answer: Line 9 prints "values added:  20"

4 What is printed by line 13? If the code returns an error, explain why. 
Answer: Since the result variable is initialized using let within the if statement, it does not exist when line 13 tries to read it, so an error is thrown.

**const declaration**\
5 What is printed by line 9? If the code returns an error, explain why.\
6 What is printed by line 13? If the code returns an error, explain why. \
Answer for 5&6: The code doesn't print anything but an error message because result is declared as a const, so when we try to modify it in the next step, it throws an error.