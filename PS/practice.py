# Find the Largest Element in an Array
#       [3, 1, 4, 1, 5, 9]   → 9
# Given an array of numbers, write a function to return the largest number.


num=list(map(int,input("enter the number with space : ").split()))

def lar_list(n):
    w=n[0]
    
    for i in range(1,len(n)):
        if w < n[i]:
            w=n[i]
    return w    

print(lar_list(num))




# Find the Second Largest Element
#       [3, 1, 4, 1, 5, 9]  → 5
# Write a function to return the second largest number in an array.


def lar_list(n):
    w=n[0]
    second=0
    for i in range(1,len(n)):
        if w < n[i]:
            second=w
            w=n[i]
    return second    

print(lar_list(num))



# Sum of All Elements
#        [1, 2, 3, 4] → 10 
# Write a function that returns the sum of all elements in an array.


def sums(n):
    rum=0
    for i in n:
        rum+=i
        


    return rum
print(sums(num))


# Remove Duplicates from an Array
#        [1, 2, 2, 3, 4, 4, 5] → [1, 2, 3, 4, 5]
# Write a function to remove duplicate values from an array.

def dup(n):
    num=[]
    for i in n:
        if i not in num:
            num+=[i]
    return num

print(dup(num))


# Check if Array is Sorted
#       [1, 2, 3, 4, 5]  →  true
# Write a function to check if an array is sorted in ascending order.

def sorts(num):
    
    if num==sorted(num):
        return True
    else:
        return False

print(sorts([1, 2, 3,5,4]))


# Reverse an Array
#        [1, 2, 3, 4, 5] → [5, 4, 3, 2, 1]
# Write a function to reverse the elements in an array.

# num=list(map(int,input("enter the number with space : ").split()))
print(num)

def revs(num):
    nums=[]
    for i in num:
        nums = [i] + nums

    return nums
        
print(revs(num))




# Remove Falsy Values
#       [0, 1, false, 2, '', 3] → [1, 2, 3]
# Write a function that removes all falsy values (false, 0, "", null, undefined, NaN) from an array.
def removes(num):
    nums=[]
    count=0
    for i in num:
        if False == i:
            count+1
        
        else:
            nums+=[i]

    return nums

print(removes([0, 1, False, 2,"", 3]))


# Find Unique Elements
#        [1, 2, 2, 3, 4, 4, 5] → [1, 3, 5]
# Write a function to find the unique elements in an array (elements that appear only once).


def uniq(num):
    uniqs=[]

    for i in range(len(num)):
        count=0
        for j in range(len(num)):
            if num[i]==num[j]:
                count+=1
            if count==1:
                uniqs+=[num[i]]
    return uniqs



print(uniq(num))




# Find Unique Elements
#       [1, 2, 2, 3, 4, 4, 5] → [1, 3, 5]
# Write a function to find the unique elements in an array (elements that appear only once).

arr,unq=[1, 2, 2, 3, 4, 4, 5],[]


for i in arr:
    if i not in unq:
        unq+=[i]
    elif i in unq:
        unq.remove(i)
print(unq)
    
            