from datetime import date
from abc import ABC, abstractmethod


class Alarm:
    def __init__(self):
        self.__extra_tasks = []

    def add_extra_task(self, task):
        self.__extra_tasks.append(task)

    def execute_extra_tasks(self):
        for task in self.__extra_tasks:
            task.start()

    def play_alarm(self):
        print(f"""
        Olá, agora são {date.today().strftime('%H:%M:%S')},
        Hora de acordar!
        """)
        self.execute_extra_tasks()


class TasksObserver(ABC):
    @abstractmethod
    def start(self):
        raise NotImplementedError


class TaskTurnOnLights(TasksObserver):
    def __init__(self, alarm):
        self.alarm = alarm
        self.alarm.add_extra_task(self)

    def start(self):
        print("Acendendo as luzes")


class TaskMakeCoffe(TasksObserver):
    def __init__(self, alarm):
        self.alarm = alarm
        self.alarm.add_extra_task(self)

    def start(self):
        print("Preparando o café")


class TaskTurnOnComputer(TasksObserver):
    def __init__(self, alarm):
        self.alarm = alarm
        self.alarm.add_extra_task(self)

    def start(self):
        print("Ligando o computador")


if __name__ == '__main__':
    alarm = Alarm()
    TaskTurnOnLights(alarm)
    TaskTurnOnComputer(alarm)
    alarm.play_alarm()
