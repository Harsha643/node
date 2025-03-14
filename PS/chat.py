"""
1)  Problem Statement: Given N integers separated with space, print the unique numbers followed by underscores, the number of underscores should be equal to the number of duplicate occurrences.
Input:
 1 1 2 2 2 3 3 
Output:
[1,2,3,,,,]

"""
def print_unique_with_underscores(numbers_str):
   
    numbers = [int(num) for num in numbers_str.split()]
    unique_numbers = sorted(list(set(numbers)))
    result = []
    for num in unique_numbers:
        result.append(num)
        result.extend([" "] * (numbers.count(num) - 1))
    print(result)


input_str = "1 1 2 2 2 3 3"
print_unique_with_underscores(input_str)



"""
2)  Problem Statement: Given N integers separated with space, print the count of unique numbers in the given N integers
Input:
 1 11 2 20 2 3 3 
Output:
3

"""

def problem2(numbers):
 
    unique_numbers = set(numbers)
    print(len(unique_numbers))


numbers2 = [1, 11, 2, 20, 2, 3, 3]
problem2(numbers2)