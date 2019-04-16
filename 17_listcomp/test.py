import math
def check(list1,list2):
    return list1 == list2

first  = [str(2*x) + str(2*  x) for x in range(5) ]
first2 = []
for x in range(5):
    first2.append(str(x)+str(x))


print(first)
print(first2)
print(check(first,first2))
second = [x*10 + 7 for x in range(5)]
second2 = []

for x in range(5):
    second2.append(x*10 + 7)

print(second)
print(second2)
print(check(second,second2))

third = [ x*y for x in range(3) for y in range(3)]
third2 = []
for x in range(3):
    for y in range(3):
        third2.append(x*y)

print(third)
print(third2)
print(check(third, third2))


fourth1 = [x + 2 for x in range(99)for y in range(x) if (x+2) % (y+2) == 0]
fourth  =[x + 2 for x in range(99) if x+2 in fourth1]
fourth2=[]
for x in range(99):
    for y in range(x):
        if((x+2)%(y+2)==0 and ((x+2) not in fourth2) ):
            fourth2.append(x+2)




print(fourth)
print(fourth2)




print("triples:")
triples = [(x,y,math.sqrt(x*x + y*y)) for x in range(1,20) for y in range(1,20) if math.sqrt(x*x + y*y)-math.floor(math.sqrt(x*x+y*y)) == 0]
print(triples)

testList = [5,4,12,17,39,31,14]
def quickSort(list):
    if list == []:
        return []
    else:
        pivot = list[0]
        lesser = quickSort([x for x in list[1:] if x < pivot])
        greater = quickSort([x for x in list[1:] if x >= pivot])
        return lesser + [pivot] + greater
print(quickSort(testList))
