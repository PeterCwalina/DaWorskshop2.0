#Peter Cwalina
#sofdev pd8
#k18
#2019-04-16
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
