from linked_list.linked_list import LinkedList


class Stack:
    def __init__(self):
        self._data = LinkedList()

    def push(self, value):
        self._data.insert_last(value)

    def pop(self):
        return self._data.remove_last()

    def peek(self):
        return self._data.get_element_at(len(self._data))

    def is_empty(self):
        return not self._data.is_empty()

    def min_value(self):
        if self._data.is_empty():
            return None
        lowest_value = self._data.get_element_at(0)
        for i in range(len(self._data)):
            current_value = self._data.get_element_at(i)
            if current_value < lowest_value:
                lowest_value = current_value
        return lowest_value
