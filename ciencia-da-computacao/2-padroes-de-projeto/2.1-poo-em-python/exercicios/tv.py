class Tv:
    def __init__(self, size, volume=50, channel=1, is_turn_on=False):
        self.__volume = volume
        self.__channel = channel
        self.__size = size
        self.__is_turn_on = is_turn_on

    def volume(self):
        return self.__volume

    def channel(self):
        return self.__channel

    def is_turn_on(self):
        return self.__is_turn_on

    def size(self):
        return self.__size

    def volume_up(self):
        if 0 < self.__volume < 99:
            self.__volume += 1

    def volume_down(self):
        if 99 > self.__volume > 0:
            self.__volume -= 1

    def change_channel(self, channel):
        if channel < 1 or channel > 99:
            raise ValueError("Invalid channel")
        self.__channel = channel

    def power(self):
        self.__is_turn_on = not self.__is_turn_on
