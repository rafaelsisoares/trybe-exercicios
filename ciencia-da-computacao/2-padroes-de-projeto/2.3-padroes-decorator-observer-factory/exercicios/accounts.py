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


if __name__ == "__main__":
    print('Digite seu nome')
    name = input()
    print('Selecione o tipo de conta a ser criada')
    print('\n1 - Gerente,\n2 - Suporte e vendas,\n3 - Suporte')
    account_type = input()

    if account_type == "1":
        new_manager = ManagerAccount(name)
        print(f"Conta de gerente criada para {name}")
        print(f"Esta conta tem acesso aos departamentos: {new_manager.show_permissions()}")
    elif account_type == "2":
        new_support_and_sale = SupportAndSalesAccount(name)
        print(f"Conta de gerente criada para {name}")
        print(f"Esta conta tem acesso aos departamentos: {new_support_and_sale.show_permissions()}")
    elif account_type == "3":
        new_support = SupportAccount(name)
        print(f"Conta de gerente criada para {name}")
        print(f"Esta conta tem acesso aos departamentos: {new_support.show_permissions()}")
    else:
        print("Opção inválida. Por favor, tente novamente.")