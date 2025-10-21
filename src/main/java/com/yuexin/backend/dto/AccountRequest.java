package com.yuexin.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AccountRequest {
    private String accountName;
    private Double accountBalance;
    private String accountType;
}
