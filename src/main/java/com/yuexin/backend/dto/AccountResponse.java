package com.yuexin.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AccountResponse {
    private Integer accountId;
    private String accountName;
    private Double accountBalance;
    private String accountType;
}
