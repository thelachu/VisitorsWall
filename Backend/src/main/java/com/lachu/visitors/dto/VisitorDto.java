package com.lachu.visitors.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VisitorDto {
    private Long id;
    private String name;
    private String username;
    private String description;
    private String imageUrl;
}
