package com.fandianlo.backend.pojo;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DishesRemarksDTO {
    private int remarksId;
    private String content;
    private int userId;
    private String username;
    private String userAvatar;

    // Getters and setters
}

