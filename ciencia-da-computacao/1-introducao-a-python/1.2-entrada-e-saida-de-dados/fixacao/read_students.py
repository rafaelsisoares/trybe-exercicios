failed = []
with open("students.txt") as grades:
    for line in grades:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            failed.append(student_grade[0] + "\n")


with open("recuperation_students.txt", mode="w") as recuperation_students:
    print(failed)
    recuperation_students.writelines(failed)
