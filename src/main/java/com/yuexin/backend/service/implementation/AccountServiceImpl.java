package com.yuexin.backend.service.implementation;

import com.yuexin.backend.dto.AccountRequest;
import com.yuexin.backend.dto.AccountResponse;
import com.yuexin.backend.entity.Account;
import com.yuexin.backend.mapper.AccountMapper;
import com.yuexin.backend.repository.AccountRepository;
import com.yuexin.backend.service.AccountService;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.yuexin.backend.mapper.AccountMapper.mapToEntity;
import static com.yuexin.backend.mapper.AccountMapper.mapToResponse;

@Service
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accountRepository;

    public AccountServiceImpl(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Override
    public AccountResponse insertAccount(AccountRequest request) {
        Account account = mapToEntity(request);
        Account savedAccount = accountRepository.save(account);
        return mapToResponse(savedAccount);
    }

    @Override
    public List<AccountResponse> getAllAccounts() {
        return accountRepository.findAll().stream()
                .map(AccountMapper::mapToResponse)
                .toList();
    }

}
