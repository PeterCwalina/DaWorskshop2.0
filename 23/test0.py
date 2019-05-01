#Peter Cwalina
#sofdev2 pd8
#k23?
#2019-05-01


import random

def make_HTML_heading(f):
  txt = f()
  def inner():
    return "<h1>" + txt + "</h1>"
  return inner

@make_HTML_heading
def greet():
  greetings = ['Hello','Welcome','Ayo!','Hola','Bonjour','Word Up']
  return random.choice(greetings)



print(greet())


def memoize(f):
    # ok i didnt care for the dictionary so i swapped it out with a list it works
    memo = []
    #just dump the first two in
    memo.append(0)
    memo.append(1)
    def helper(x):
        #????
        nonlocal memo

        #ok is it already in the memo?
        if len(memo) > x:
            return memo[x]
        #if not just calculate the fib numbers up to that point and store em
        while x > len(memo) - 1:
            memo.append(memo[len(memo)-1] + memo[len(memo)-2])
        return memo[x]
    return helper

def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

fib = memoize(fib)
print(fib(5))
