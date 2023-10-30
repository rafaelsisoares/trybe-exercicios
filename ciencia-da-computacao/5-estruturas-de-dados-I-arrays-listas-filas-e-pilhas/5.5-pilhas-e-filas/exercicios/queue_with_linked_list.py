from linked_list.linked_list import LinkedList
from linked_list.node import Node


class Queue:
    def __init__(self):
        self._data = LinkedList()

    def enqueue(self, item):
        self._data.insert_last(Node(item))

    def dequeue(self):
        return self._data.remove_first()

    def peek(self):
        return self._data.get_element_at(0)

    def is_empty(self):
        return not len(self._data)
