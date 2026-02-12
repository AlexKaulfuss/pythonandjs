
def find_highest(numbers):
    highest = numbers[0]
    for num in numbers:
        if num > highest:
            highest = num
    return highest

nums = [3, 7, 2, 9, 5]
print(find_highest(nums))
