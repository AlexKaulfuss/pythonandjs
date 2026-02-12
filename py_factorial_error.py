
# Logic error: loop stops too early (off-by-one)
n = 5
factorial = 1

for i in range(1, n):  # should be n + 1
    factorial *= i

print("Factorial:", factorial)
