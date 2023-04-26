import csv

with open('graduacao_unb.csv', mode='r') as graduacao_file:
    graduacoes = csv.reader(graduacao_file, delimiter=',', quotechar='"')
    header, *data = graduacoes

group_by_department = {}
for row in data:
    department = row[15]
    if department not in group_by_department:
        group_by_department[department] = 0
    group_by_department[department] += 1


with open('department_report.csv', mode='w', encoding='utf-8') as report_file:
    writer = csv.writer(report_file)
    header = ['Departamento', 'Total de cursos']
    writer.writerow(header)
    for department, grades in group_by_department.items():
        row = [department, grades]
        writer.writerow(row)
