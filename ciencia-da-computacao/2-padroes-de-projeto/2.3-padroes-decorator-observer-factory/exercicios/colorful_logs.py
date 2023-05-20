GREEN = "\033[92m"
ORANGE = "\033[93m"
RED = "\033[91m"
RESET = "\033[0m"


class Log:
    def dispara_log(self, message):
        return message


class LogSuccessful:
    def __init__(self, log):
        self.log = log

    def show_log(self, log_message):
        return f"{GREEN}{self.log.dispara_log(log_message)}{RESET}"


class LogWarning:
    def __init__(self, log):
        self.log = log

    def show_log(self, log_message):
        return f"{ORANGE}{self.log.dispara_log(log_message)}{RESET}"


class LogError:
    def __init__(self, log):
        self.log = log

    def show_log(self, log_message):
        return f"{RED}{self.log.dispara_log(log_message)}{RESET}"


log = Log()
print(LogSuccessful(log).show_log('O sistema está funcionando'))
print(LogWarning(log).show_log('O sistema está lento'))
print(LogError(log).show_log('O sistema está com erros'))
