#Cap'n Crunch (Peter Cwalina and Thomas Zhao)
#SoftDev2 pd8
#K19 - Ready, Set, Math!
#2019-04-16

def union(a, b):
    '''RETURNS THE UNION OF a AND b'''
    list = [x for x in range(max(max(a), max(b)) + 1) if ((x in a) or (x in b))]
    return list

list1 = [1,2,3,765,2345,54]
list2 = [2,3,4]

print(union(list1, list2))

def intersection(a, b):
    '''RETURNS THE Intersection OF a AND b'''
    list = [x for x in range(max(max(a), max(b)) + 1) if ((x in a) and (x in b))]
    return list

print(intersection(list1, list2))

def diff(u,a):
    '''RETURNS THE ELEMENTS THAT ARE IN u BUT NOT IN a'''
    list = [x for x in range(max(u)+1) if ((x in u)and(x not in a))]
    return list

print(diff(list1,list2))

def symmdiff(a,b):
    '''RETURNS ELEMENTS THAT ARE ONLY IN a OR ONLY IN b'''
    list = union(diff(a,b),diff(b,a))
    return list

print(symmdiff(list1,list2))

def cartesian(a,b):
    '''RETURNS ALL POSSIBLE ORDERED PAIRS OF ELEMENTS IN a AND b'''
    list = [(x, y) for x in a for y in b]
    return list

list3 = [1,2]
list4 = ["red", "white"]

print(cartesian(list3, list4))
