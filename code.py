def get_grade(score):
    """
    Calculates the grade based on the given score.

    Args:
        score (int): The numerical score.

    Returns:
        str: The corresponding letter grade.
    """
    if 70 <= score <= 100:
        return "A"
    elif 60 <= score <= 69:
        return "B"
    elif 50 <= score <= 59:
        return "C"
    elif 45 <= score <= 49:
        return "D"
    elif 40 <= score <= 44:
        return "E"
    elif score < 40:
        return "F"
    else:
        return "Invalid Score"

# Main part of the program
if __name__ == "__main__":
    try:
        score = int(input("Enter the student's score: "))
        grade = get_grade(score)
        print(f"The grade is: {grade}")
    except ValueError:
        print("Invalid input. Please enter a numerical score.")

