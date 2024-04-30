Questions:\

1) What will happen at line 12 and why? If the code causes an error, explain why.\
Answer: Line 12 will print 3, becuase i was declared with var in the for loop, it exists outside of it, and it was incremented until it hit 3 then stayed at 3.\

2) What will happen at line 13 and why? If the code causes an error, explain why.\
Answer: Line 13 will print 150, because discountedPrice is declared as `prices[i] * (1-discount)`  and discount is `0.5` so it would end the iteration using i=2, meaning prices[i] is 300 and this is just 0.5 * 300 which is 150 and discountedPrice is not changed after this.\

3)  What will happen at line 14 and why? If the code causes an error, explain why.\
Answer: This will also print 150 for similar reasons as above, the finalPrice calculation in the for loop turns discountedPrice into a whole number and since 150 is already a whole number it finalPrice stays the same.\

4) What will this function return? Give a brief explanation why. If the code causes an error, explain why. \
Answer: This function will return an array of size 3 containing, 50, 100, and 150 since it is computing the new prices with the discount applied. In this case the discount is 50% off so the values are just cut in half.\

5) What will happen at line 12 and why?  If the code causes an error, explain why.\
Answer: This program throws an error because i is declared with let meaning it only exists in the scope of the loop and cannot be accessed outside of it.\

6) What will happen at line 13 and why? If the code causes an error, explain why.\
Answer: For the exact same reason as above, this will cause an error. discountedPrice only exists in the for loop scope.\

7) What will happen at line 14 and why? If the code causes an error, explain why.\
Answer: 14 will print 150. finalPrice is declared outside the loop in the function and so it still exists within the scope of the function when it is called with `.log()`.\

8) What will this function return? Give a brief explanation. If the code causes an error, explain why. \
Answer: This will achieve the same as before and return a list of discounted prices. The variables are declared in the scopes that they need to be in, so the program works just fine.\

9) What will happen at line 11 and why? If the code causes an error, explain why.\
Answer: i is still only declared in the scope of the loop so this will throw an error.\

10) What will happen at line 12 and why? If the code causes an error, explain why. \
Answer: This will print 3 as it is the length of the prices[] array.\

11) What will this function return? Give a brief explanation. If the code causes an error, explain why. \
Answer: This will return the same 3 discounted prices, since none of them needed to be rounded they all fit the formatting and all the other structure was kept.

12) Given the above Object, write the notation for:\
    A. Accessing the value of the name property in the student object\
        This can be accessed with `student.name`\
    B. Accessing the value of the Grad Year property in the student object\
        This can be accessed with `student['Grad Year']`\
    C. Calling the function for the greeting property in the student object\
        This can be accessed with `student.greeting()`\
    D. Accessing the name property of the object in the Favorite Teacher property in student\
        This can be accessed with `student["Favorite Teacher"].name`\
    E. Access index zero in the array of the courseLoad property of the student object\
        This can be accessed with `student.courseLoad[0]`\

13) Arithmetic\
    A. '3' + 2\
        This will output '32', the + operator in this case is appending the char of 2 to the char 3.\
    B. '3' - 2s\
        This will output the number 1, 3 is treated as an integer and 3 is subtracted.\
    C. 3 + null\
        This wil output 3, it is integer addition and null is treated as 0.\
    D. '3' + null\
        This will output 3null, it again is interpreted as appending so null becomes a string.\
    E. true + 3\
        This will output 4, I hate this, but it makes sense, true is interpreted as 1 and integer addition occurs.\
    F. false + null\
        This will output 0, it is integer addition again and both are evaluated as 0.\
    G. '3' + undefined\
        This is another string appending so it outputs 3undefined.\
    H. '3' - undefined\
        This is integer subtraction, but undefined is undefined so this is NaN.\

14) Comparison\
    A. '2' > 1\
        This will result in true, strings are turned into integers so 2 is greater than 1.\
    B. '2' < '12'\
        This will result in false, they both get turned into integers.\
    C. 2 == '2'\
        This will result in true, as they both are integers and are equal.\
    D. 2 === '2'\
        This will result in false === does type comparison and they are not the same type.\
    E. true == 2\
        This will result in false, because for some dumb reason true is equal to 1 in this horrid language.\
    F. true === Boolean(2)\
        This will result in true, anything other than 0 in Boolean is true so Boolean(2) is true.\

15) == compares value while === compares value and type

16) In appropraite file

17) This program will output [2, 4, 6]. We can see that the modifyArray function loops through the passed in array and modifies each element with the callback function, in this case the callback function multiplies each number by 2.

18) In appropriate file

19) The output of this program is 1 4 3 2