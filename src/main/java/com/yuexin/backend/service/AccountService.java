package com.yuexin.backend.service;

import com.yuexin.backend.dto.AccountRequest;
import com.yuexin.backend.dto.AccountResponse;
import com.yuexin.backend.entity.Account;

import java.util.List;

public interface AccountService {

    AccountResponse insertAccount(AccountRequest request);
    List<AccountResponse> getAllAccounts();

}
