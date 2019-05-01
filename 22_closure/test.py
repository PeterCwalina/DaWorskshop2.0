#Peter Cwalina
#pd8 sofdev2
#k22
#2019-04-30

#word repeater thing
def repeat(word):
    def times(number):
        print(word * number)
    return times

r1 = repeat("hello")
r1(2) # hellohello
r2 = repeat("goodbye")
r2(2) #-> goodbyegoodbye
repeat('cool')(3) #-> coolcoolcool


#counter

def make_counter():
    x = 0
    def increment():
        nonlocal x
        x+=1
        print(x)
    return increment

ctr1 = make_counter()

ctr1() #-> 1

ctr1() #-> 2

ctr2 = make_counter()

ctr2() #-> 1

ctr1() #-> 3

ctr2() #-> 2


#counter but with accessor

def make_counterVer2():
    x = 0
    def increment(increment):
        nonlocal x
        if (increment):
            x+=1

        print(x)
    return increment

ctr3 = make_counterVer2()
#if true use counter
ctr3(True)
#if false use accessor
ctr3(False)
