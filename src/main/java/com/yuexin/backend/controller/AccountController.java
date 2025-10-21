package com.yuexin.backend.controller;

import com.yuexin.backend.dto.AccountRequest;
import com.yuexin.backend.dto.AccountResponse;
import com.yuexin.backend.service.AccountService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @PostMapping
    public ResponseEntity<AccountResponse> createAccount(@RequestBody AccountRequest request){
        return ResponseEntity.status(HttpStatus.CREATED).body(accountService.insertAccount(request));
    }

    @GetMapping
    public ResponseEntity<List<AccountResponse>> getAllAccounts() {
        return ResponseEntity.status(HttpStatus.OK)
                .body(accountService.getAllAccounts());
    }
}
