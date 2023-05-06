from abc import ABC, abstractmethod


class SystemAccess(ABC):
    @abstractmethod
    def __init__(self, access=False):
        raise NotImplementedError

    def set_access(self, access):
        raise NotImplementedError


class SupportSystemAccess(SystemAccess):
    def __init__(self, access=False):
        self.name = "Suporte"
        self.set_access(access)

    def set_access(self, access):
        self.access = access


class FinanceSystemAccess(SystemAccess):
    def __init__(self, access=False):
        self.name = "Financeiro"
        self.set_access(access)

    def set_access(self, access):
        self.access = access


class SalesSystemAccess(SystemAccess):
    def __init__(self, access=False):
        self.name = "Vendas"
        self.set_access(access)

    def set_access(self, access):
        self.access = access


class Account(ABC):
    def __init__(self, username):
        self.username = username
        self.permissions = []
        self.create_account()

    @abstractmethod
    def create_account(self):
        raise NotImplementedError

    def add_permission(self, permission):
        self.permissions.append(permission)

    def show_permissions(self):
        return [permission.name for permission in self.permissions]


class SupportAccount(Account):
    def create_account(self):
        self.add_permission(SupportSystemAccess(True))


class SupportAndSalesAccount(Account):
    def create_account(self):
        self.add_permission(SupportSystemAccess(True))
        self.add_permission(SalesSystemAccess(True))


class ManagerAccount(Account):
    def create_account(self):
        self.add_permission(SupportSystemAccess(True))
        self.add_permission(SalesSystemAccess(True))
        self.add_permission(FinanceSystemAccess(True))
