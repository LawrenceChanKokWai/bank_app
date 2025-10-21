package com.yuexin.backend.mapper;

import com.yuexin.backend.dto.AccountRequest;
import com.yuexin.backend.dto.AccountResponse;
import com.yuexin.backend.entity.Account;

public class AccountMapper {
    private AccountMapper() {}

    public static Account mapToEntity(AccountRequest request) {
        Account account = new Account();
        account.setAccountName(request.getAccountName());
        account.setAccountBalance(request.getAccountBalance());
        account.setAccountType(request.getAccountType());
        return account;
    }

    public static AccountResponse mapToResponse(Account account) {
        AccountResponse accountResponse = new AccountResponse();
        accountResponse.setAccountId(account.getAccountId());
        accountResponse.setAccountName(account.getAccountName());
        accountResponse.setAccountBalance(account.getAccountBalance());
        accountResponse.setAccountType(account.getAccountType());
        return accountResponse;
    }

}
