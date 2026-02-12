
# Logic error: finds lowest instead of highest
def find_highest(numbers):
    highest = numbers[0]
    for num in numbers:
        if num < highest:  # wrong comparison
            highest = num
    return highest

nums = [3, 7, 2, 9, 5]
print(find_highest(nums))
