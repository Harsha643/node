

def mins(m):
    return m*60
f=mins(6)
print(f)



def age(j):
    count=0
    days=0
    for i in range(1,j+1):
        if count==4:
            days+=366
            count=0
        else:
            days+=365
    return days
print (age(25))



def strr(a):
    return ("Hello"+" "+a)

print(strr("World"))